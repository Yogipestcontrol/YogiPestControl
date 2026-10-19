import { Resend } from "resend";

// Created on first use so a missing key fails the request, not the whole module import.
let client: Resend | null = null;
function resend(): Resend {
  client ??= new Resend(process.env.RESEND_API_KEY);
  return client;
}

export const LEAD_INBOX = "yobani.a@yogispestcontrol.com";
const FROM_LEADS = "Yogi's Pest Control <leads@yogispestcontrol.com>";
const FROM_NOREPLY = "Yogi's Pest Control <noreply@yogispestcontrol.com>";

/** Escape user input before it is placed in email HTML. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Escape every string field of a form payload. */
export function escapeFields<T extends Record<string, unknown>>(data: T): { [K in keyof T]: string } {
  const out = {} as { [K in keyof T]: string };
  for (const key of Object.keys(data) as (keyof T)[]) {
    out[key] = escapeHtml(data[key]);
  }
  return out;
}

/** Email subjects are plain text; just keep them on one line and short. */
export function subjectSafe(value: unknown, max = 80): string {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

// Phrases that show up in vendor/solicitation messages, not in customers asking about pests.
const SOLICITATION_PATTERNS = [
  /\bseo\b/i,
  /search engine/i,
  /backlink/i,
  /rank(ing)? (your|on) (website|google|page)/i,
  /first page of google/i,
  /web ?(site)? ?(design|development|redesign)/i,
  /virtual assistant/i,
  /outsourc/i,
  /lead generation/i,
  /appointment setting/i,
  /business broker/i,
  /(buy|acquir|sell)(ing)? your (business|company)/i,
  /marketing (agency|services|team)/i,
  /social media (management|marketing)/i,
  /google (ads|reviews?) (management|service)/i,
  /\bcrypto\b|\bbitcoin\b/i,
  /\bloan\b|\bfunding\b|merchant cash/i,
  /unsubscribe|opt[- ]out/i,
];

export type SpamVerdict = "ok" | "suspect" | "drop";

/**
 * - "drop": a bot filled the hidden honeypot field or submitted inhumanly fast.
 *   Pretend success, send nothing.
 * - "suspect": looks like a vendor pitch. Still forwarded to Yobani (flagged), but
 *   no branded confirmation email goes out to the sender.
 */
export function checkSpam(input: {
  honeypot?: unknown;
  startedAt?: unknown;
  text: string;
}): SpamVerdict {
  if (typeof input.honeypot === "string" && input.honeypot.trim() !== "") return "drop";

  const started = Number(input.startedAt);
  if (Number.isFinite(started) && started > 0 && Date.now() - started < 3000) return "drop";

  const text = input.text;
  const links = (text.match(/https?:\/\/|www\./gi) || []).length;
  if (links >= 2) return "suspect";
  if (SOLICITATION_PATTERNS.some((re) => re.test(text))) return "suspect";
  return "ok";
}

// Best-effort, per-instance rate limit. Serverless instances don't share memory,
// so this only blunts bursts; the honeypot and timing checks do the real work.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function isRateLimited(request: Request): boolean {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Send the lead to Yobani. Throws if Resend reports an error so the form can show it. */
export async function sendLeadNotification(opts: { subject: string; html: string; replyTo?: string }) {
  const { error } = await resend().emails.send({
    from: FROM_LEADS,
    to: LEAD_INBOX,
    subject: opts.subject,
    html: opts.html,
    ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
  });
  if (error) throw new Error(`Lead notification failed: ${error.message}`);
}

/** Customer confirmation. Failures are logged, never shown to the customer. */
export async function sendConfirmation(opts: { to: string; subject: string; html: string }) {
  const { error } = await resend().emails.send({
    from: FROM_NOREPLY,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
  });
  if (error) console.error("Confirmation email failed:", error);
}
