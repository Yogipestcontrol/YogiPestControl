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

// Phrases that show up in vendor/solicitation messages, not in customers asking about
// pests. Tuned against the pitches the contact form actually received (lead-gen
// sellers, "ChatGPT visibility", ad audits, brokers, partnerships, product samples).
const PITCH_PATTERNS = [
  /\bseo\b/i,
  /search engine|search results/i,
  /backlink/i,
  /rank(ing)? (your|on|higher)/i,
  /first page of google/i,
  /web ?(site)? ?(design|development|redesign)|hosting/i,
  /virtual assistant|outsourc/i,
  /lead[- ]?gen|generat(e|ing) (more |new )?(leads|customers|calls)|leads for your business/i,
  /appointment setting/i,
  /chat ?gpt|\bai (search|visibility|overview)|generative engine|\bgeo\b/i,
  /visibility gap|online (presence|visibility)/i,
  /marketing|advertis|google ads|meta ads|facebook ads|\bppc\b/i,
  /\baudit\b|conversion (rate|optimization|tracking)|remarketing|analytics/i,
  /business broker|sell(ing)? your (business|company)|valuation|acquir/i,
  /\bpartner(ship|ing)?\b|collaborat/i,
  /bulk (pricing|order)|wholesale|send (you )?a sample|free (sample|trial|demo|consultation)/i,
  /cold email|contact[- ]form outreach|deliverability/i,
  /(i|we) (recently )?(noticed|came across|visited) your (website|site|business|company)/i,
  /(i am|i'm|we are|we're) reaching out|reaching out from/i,
  /are you interested in|would (it|you) be (alright|open|interested)|no commitment/i,
  /our (clients|agency|services|team can)|\$\d+ ?\/ ?mo/i,
  /\bcrypto\b|\bbitcoin\b|\bloan\b|\bfunding\b|merchant cash/i,
  /unsubscribe|opt[- ]out|reply stop/i,
];

// Words real customers use when they describe a problem.
const PEST_WORDS =
  /\b(rats?|mice|mouse|rodents?|ants?|roach(es)?|cockroach(es)?|bugs?|bees?|hive|wasps?|hornets?|yellow ?jackets?|termites?|spiders?|black widows?|fleas?|ticks?|mosquito(e?s)?|fl(y|ies)|raccoons?|skunks?|possums?|opossums?|squirrels?|gophers?|moles?|birds?|pigeons?|silverfish|earwigs?|scorpions?|attic|crawl ?space|garage|droppings|nest|infest\w*|smell|odor|scratching|noise|trap\w*|bait|spray\w*|bit(e|es|ten)|exterminat\w*|inspection)\b/i;

export type SpamVerdict = "ok" | "suspect" | "drop";

/**
 * - "drop": bot behaviour (honeypot, inhumanly fast, empty/number-only message) or a
 *   clear sales pitch. Pretend success, send nothing.
 * - "suspect": a pitch signal but it also talks about pests, so a human should glance at
 *   it. Forwarded to Yobani flagged, no confirmation email to the sender.
 */
export function checkSpam(input: {
  honeypot?: unknown;
  startedAt?: unknown;
  /** The free-text message/notes the visitor typed. */
  message: string;
  /** Other fields (name, email) that can carry pitch signals too. */
  extra?: string;
}): SpamVerdict {
  if (typeof input.honeypot === "string" && input.honeypot.trim() !== "") return "drop";

  const started = Number(input.startedAt);
  if (Number.isFinite(started) && started > 0 && Date.now() - started < 3000) return "drop";

  const message = input.message.trim();
  // A "message" that is only a phone number, digits or a link is a scraper.
  if (message && !/[a-z]{3,}/i.test(message.replace(/https?:\/\/\S+|www\.\S+/gi, ""))) return "drop";

  const text = `${input.extra ?? ""} ${message}`;
  const pitchHits = PITCH_PATTERNS.filter((re) => re.test(text)).length;
  const links = (message.match(/https?:\/\/|www\./gi) || []).length;
  const mentionsPests = PEST_WORDS.test(message);

  if (pitchHits >= 2) return "drop";
  if (pitchHits === 1 || links >= 2) return mentionsPests ? "suspect" : "drop";
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
