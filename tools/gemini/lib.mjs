import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const API = 'https://generativelanguage.googleapis.com/v1beta';
const LEDGER = fileURLToPath(new URL('./ledger.json', import.meta.url));
export const CAP = 20; // approved 2026-10-19 for the Yogi's cinematic homepage (billed to Yogi's Pest Control)
// gemini-3-pro-image 1K/2K = $0.134. Veo 3.1 Fast 720p is really $0.10/s ($0.80 per 8 s);
// we book $0.15/s so the ledger stays conservative.
export const PRICES = { image: 0.134, video8s: 8 * 0.15 };

const key = () => process.env.GEMINI_API_KEY;
const readLedger = () => JSON.parse(fs.readFileSync(LEDGER, 'utf8'));
export const spent = () => readLedger().reduce((s, e) => s + e.usd, 0);
export function guard(current, cost) {
  if (current + cost > CAP) throw new Error(`budget: ${current.toFixed(2)} + ${cost} exceeds $${CAP}`);
}
// Calls in flight in this process count against the cap, so parallel requests can't overshoot it together.
let reserved = 0;
async function reserve(cost, fn) {
  guard(spent() + reserved, cost);
  reserved += cost;
  try { return await fn(); } finally { reserved -= cost; }
}
function log(entry) {
  const l = readLedger();
  l.push({ ...entry, at: new Date().toISOString() });
  const json = JSON.stringify(l, null, 2) + '\n';
  const tmp = LEDGER + '.tmp';
  fs.writeFileSync(tmp, json);
  // OneDrive/AV can briefly lock the target on Windows (EPERM); retry, then fall back to a direct write.
  for (let i = 0; i < 20; i++) {
    try { fs.renameSync(tmp, LEDGER); return; } catch (e) { if (!['EPERM', 'EBUSY', 'EACCES'].includes(e.code)) throw e; }
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
  }
  fs.writeFileSync(LEDGER, json);
  fs.rmSync(tmp, { force: true });
}

async function call(url, body) {
  if (!key()) throw new Error('GEMINI_API_KEY not set');
  const r = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: { 'x-goog-api-key': key(), 'content-type': 'application/json' },
    body: body && JSON.stringify(body),
  });
  if (!r.ok) { const e = new Error(`${r.status} ${(await r.text()).slice(0, 600)}`); e.status = r.status; throw e; }
  return r.json();
}

export function mimeOf(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return 'image/png';
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'image/jpeg';
  if (buf.slice(8, 12).toString() === 'WEBP') return 'image/webp';
  return 'image/jpeg';
}
const inline = p => { const b = fs.readFileSync(p); return { inline_data: { mime_type: mimeOf(b), data: b.toString('base64') } }; };

export const generateImage = opts => reserve(PRICES.image, () => image(opts));
async function image({ prompt, refs = [], aspect = '16:9', out }) {
  const res = await call(`${API}/models/gemini-3-pro-image:generateContent`, {
    contents: [{ parts: [...refs.map(inline), { text: prompt }] }],
    generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: aspect, imageSize: '2K' } },
  });
  const part = res.candidates?.[0]?.content?.parts?.find(p => p.inlineData || p.inline_data);
  let file;
  if (part) {
    const buf = Buffer.from((part.inlineData || part.inline_data).data, 'base64');
    // Keep the extension honest: the model may return JPEG even when we asked for .png.
    file = out.replace(/\.(png|jpe?g|webp)$/i, '') + { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/webp': '.webp' }[mimeOf(buf)];
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, buf);
  }
  log({ kind: 'image', model: 'gemini-3-pro-image', id: path.basename(out, path.extname(out)), usd: PRICES.image });
  if (!part) throw new Error('no image returned: ' + JSON.stringify(res).slice(0, 400));
  return file;
}

export const generateVideo = opts => reserve(PRICES.video8s, () => video(opts));
async function video({ prompt, image, aspect = '16:9', out, resolution = '720p' }) {
  const buf = image && fs.readFileSync(image);
  const shapes = buf
    ? [{ bytesBase64Encoded: buf.toString('base64'), mimeType: mimeOf(buf) }, { inlineData: { mimeType: mimeOf(buf), data: buf.toString('base64') } }]
    : [undefined];
  const params = { aspectRatio: aspect, durationSeconds: 8, resolution, negativePrompt: 'text, captions, logos, watermark, distorted label' };
  let op, lastErr, used;
  // Try the documented shapes in turn; a 400 is not billed.
  for (const img of shapes) {
    for (const dur of [8, '8']) {
      try {
        op = await call(`${API}/models/veo-3.1-fast-generate-preview:predictLongRunning`, {
          instances: [{ prompt, ...(img && { image: img }) }],
          parameters: { ...params, durationSeconds: dur },
        });
        used = `${img ? Object.keys(img)[0] : 'text'}/durationSeconds:${typeof dur}`;
        break;
      } catch (e) { if (e.status !== 400) throw e; lastErr = e; }
    }
    if (op) break;
  }
  if (!op) throw lastErr;
  log({ kind: 'video', model: 'veo-3.1-fast-generate-preview', id: path.basename(out, path.extname(out)), shape: used, usd: PRICES.video8s });
  let s = op;
  while (!s.done) { await new Promise(r => setTimeout(r, 10000)); s = await call(`${API}/${op.name}`); }
  if (s.error) throw new Error(JSON.stringify(s.error));
  const sample = s.response?.generateVideoResponse?.generatedSamples?.[0];
  if (!sample) throw new Error('no video returned: ' + JSON.stringify(s.response).slice(0, 400));
  const v = await fetch(sample.video.uri, { headers: { 'x-goog-api-key': key() } });
  if (!v.ok) throw new Error(`download ${v.status}`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, Buffer.from(await v.arrayBuffer()));
  return out;
}
