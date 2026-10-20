import { bookingLeadEmail, bookingConfirmationEmail } from "@/lib/email-templates";
import { SERVICES, OC_CITIES, SITE_CONFIG } from "@/lib/constants";
import {
  checkSpam,
  escapeFields,
  isRateLimitedKey,
  isValidEmail,
  sendConfirmation,
  sendLeadNotification,
  subjectSafe,
} from "@/lib/leads";

/**
 * One place for "a customer asked for a free inspection": validation, normalization,
 * spam screening and the two emails. Used by the /book form (/api/booking), the GPT
 * Action (/api/inspection) and the ChatGPT app MCP server (/api/mcp).
 */

export type InspectionSource = "web" | "chatgpt" | "chatgpt-app";

/** Inspection windows offered on /book. Keep in sync with src/app/book/page.tsx. */
export const TIME_SLOTS = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
] as const;

export const OTHER_PEST_NAME = "Other / Not sure";

/** Human-readable pest/service names accepted by the agent APIs (plus OTHER_PEST_NAME). */
export const PEST_NAMES: string[] = [...SERVICES.map((s) => s.name), OTHER_PEST_NAME];
export const CITY_NAMES: string[] = OC_CITIES.map((c) => c.name);

export const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 30,
  pestType: 80,
  city: 60,
  address: 200,
  zip: 10,
  date: 30,
  time: 40,
  notes: 2000,
} as const;

export type InspectionInput = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  pestType?: unknown;
  city?: unknown;
  address?: unknown;
  zip?: unknown;
  date?: unknown;
  time?: unknown;
  notes?: unknown;
  /** Agents only: must be true, meaning the customer reviewed the details and said to send them. */
  customerConfirmed?: unknown;
  /** Browser-only spam guard fields from useFormGuard(). */
  _hp?: unknown;
  _t?: unknown;
};

export type InspectionResult = {
  ok: boolean;
  error?: string;
  /** HTTP status the caller should use (200 on success). */
  status: number;
  /** Plain-language summary for agents to read back to the customer. */
  message?: string;
};

export type NormalizedInspection = {
  name: string;
  email: string;
  phone: string;
  pestSlug: string;
  pestName: string;
  citySlug: string | null;
  cityName: string;
  address: string;
  zip: string;
  date: string;
  time: string;
  notes: string;
};

const SOURCE_TAG: Record<InspectionSource, string> = {
  web: "",
  chatgpt: "[via ChatGPT] ",
  "chatgpt-app": "[via ChatGPT app] ",
};

const SOURCE_LABEL: Record<InspectionSource, string> = {
  web: "the website booking form",
  chatgpt: "ChatGPT (custom GPT action)",
  "chatgpt-app": "ChatGPT (Yogi's Pest Control app)",
};

function str(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return "";
}

/** "Rodent Control", "rodent-control", "RODENT control " all become "rodent control". */
function key(value: string): string {
  return value.toLowerCase().replace(/[\s_-]+/g, " ").replace(/&/g, "and").trim();
}

// Everyday words for the same services, so "rats" or "roaches" still lands on the right one.
const PEST_ALIASES: Record<string, string> = {
  rat: "rodent-control", rats: "rodent-control", "roof rats": "rodent-control", mice: "rodent-control",
  mouse: "rodent-control", rodent: "rodent-control", rodents: "rodent-control",
  roach: "cockroach-control", roaches: "cockroach-control", cockroach: "cockroach-control", cockroaches: "cockroach-control",
  ant: "ant-control", ants: "ant-control",
  wasp: "wasp-control", wasps: "wasp-control", hornets: "wasp-control", "yellow jackets": "wasp-control",
  bee: "bee-removal", bees: "bee-removal", "bee hive": "bee-removal", beehive: "bee-removal",
  mosquito: "mosquito-control", mosquitoes: "mosquito-control", mosquitos: "mosquito-control",
  fly: "fly-control", flies: "fly-control",
  spider: "spider-control", spiders: "spider-control",
  flea: "tick-flea-treatment", fleas: "tick-flea-treatment", tick: "tick-flea-treatment", ticks: "tick-flea-treatment",
  "bed bug": "bed-bug-treatment", "bed bugs": "bed-bug-treatment", bedbugs: "bed-bug-treatment",
  gopher: "gopher-control", gophers: "gopher-control",
  skunk: "wildlife-trapping", skunks: "wildlife-trapping", raccoon: "wildlife-trapping", raccoons: "wildlife-trapping",
  opossum: "wildlife-trapping", opossums: "wildlife-trapping", possum: "wildlife-trapping", squirrels: "wildlife-trapping",
  wildlife: "wildlife-trapping", exclusion: "exclusion-repairs", "attic cleanout": "attic-cleanout",
  "dead animal": "dead-animal-removal", commercial: "commercial-pest-control",
};

export function normalizePest(value: unknown): { slug: string; name: string } | null {
  const raw = str(value);
  if (!raw) return null;
  const k = key(raw);
  const match = SERVICES.find((s) => key(s.slug) === k || key(s.name) === k);
  if (match) return { slug: match.slug, name: match.name };
  const alias = PEST_ALIASES[k] ?? PEST_ALIASES[k.replace(/ (control|removal|treatment)$/, "")];
  const aliased = alias && SERVICES.find((s) => s.slug === alias);
  if (aliased) return { slug: aliased.slug, name: aliased.name };
  if (["other", "not sure", "other / not sure", "other/not sure", "unknown"].includes(k) || k === key(OTHER_PEST_NAME)) {
    return { slug: "other", name: OTHER_PEST_NAME };
  }
  return null;
}

export function normalizeCity(value: unknown): { slug: string; name: string } | null {
  const raw = str(value).replace(/,?\s*(ca|california)\.?$/i, "").trim();
  if (!raw) return null;
  const k = key(raw);
  const match = OC_CITIES.find((c) => key(c.slug) === k || key(c.name) === k);
  return match ? { slug: match.slug, name: match.name } : null;
}

/** Normalize "8:00 AM – 10:00 AM", "8:00am-10:00am", "8:00 AM to 10:00 AM" to a TIME_SLOTS entry. */
export function normalizeTimeSlot(value: unknown): string | null {
  const squash = (v: string) =>
    v.toLowerCase().replace(/[‒-―]/g, "-").replace(/\bto\b/g, "-").replace(/\s+/g, "");
  const k = squash(str(value));
  if (!k) return null;
  return TIME_SLOTS.find((slot) => squash(slot) === k) ?? null;
}

/** Today's date in Orange County as YYYY-MM-DD. */
export function todayPacific(now = new Date()): string {
  return now.toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
}

/** Accepts "2026-10-25", "2026-10-25T09:00:00Z" (date part) or "10/25/2026". Returns YYYY-MM-DD or null. */
export function normalizeDate(value: unknown): string | null {
  const raw = str(value);
  let y: number, m: number, d: number;
  let match = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s].*)?$/);
  if (match) {
    [y, m, d] = [Number(match[1]), Number(match[2]), Number(match[3])];
  } else if ((match = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/))) {
    [m, d, y] = [Number(match[1]), Number(match[2]), Number(match[3])];
  } else {
    return null;
  }
  const dt = new Date(Date.UTC(y, m - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) return null;
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function addDays(isoDate: string, days: number): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

/** "Saturday, October 25, 2026" for emails and agent replies. */
export function formatDateLong(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const fail = (error: string, status = 400): InspectionResult => ({ ok: false, error, status });

/**
 * Validate and normalize. Returns the clean record or an error message that is safe to
 * show to the customer (and specific enough for an AI agent to fix the input).
 */
export function validateInspection(
  input: InspectionInput,
  source: InspectionSource,
  now = new Date()
): { ok: true; value: NormalizedInspection } | { ok: false; error: string } {
  const agent = source !== "web";
  const field = (name: keyof typeof MAX_LENGTHS) => str(input[name]);
  const values = {
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    pestType: field("pestType"),
    city: field("city"),
    address: field("address"),
    zip: field("zip"),
    date: field("date"),
    time: field("time"),
    notes: field("notes"),
  };

  for (const [k, max] of Object.entries(MAX_LENGTHS) as [keyof typeof MAX_LENGTHS, number][]) {
    if (values[k].length > max) return { ok: false, error: `${k} is too long (max ${max} characters).` };
  }

  const missing = (["name", "email", "phone", "pestType", "city", "address", "zip", "date", "time"] as const).filter(
    (k) => !values[k]
  );
  if (missing.length) return { ok: false, error: `Missing required field(s): ${missing.join(", ")}.` };

  if (agent && input.customerConfirmed !== true) {
    return {
      ok: false,
      error:
        "customerConfirmed must be true. Read the details back to the customer and submit only after they explicitly agree.",
    };
  }

  if (!isValidEmail(values.email)) return { ok: false, error: "email must be a valid email address." };

  // The web form has always accepted any phone text; agents must send a real US number.
  const phoneDigits = values.phone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  if (agent && phoneDigits.length !== 10) {
    return { ok: false, error: "phone must be a 10-digit US phone number, e.g. 714-555-0123." };
  }

  if (values.address.length < 5) return { ok: false, error: "address must be the street address, e.g. 123 Main St." };
  if (!/^\d{5}$/.test(values.zip)) return { ok: false, error: "zip must be a 5-digit ZIP code." };

  const pest = normalizePest(values.pestType);
  // Unknown pests are still worth a call: keep the customer's words.
  const pestSlug = pest?.slug ?? "other";
  const pestName = pest?.name ?? `Other: ${values.pestType}`;

  const city = normalizeCity(values.city);
  if (!city && agent) {
    return {
      ok: false,
      error: `city must be one of the Orange County cities we serve: ${CITY_NAMES.join(", ")}. If the customer is elsewhere in Orange County, ask them to call ${SITE_CONFIG.phone}.`,
    };
  }

  const date = normalizeDate(values.date);
  if (!date) return { ok: false, error: "date must be a calendar date in YYYY-MM-DD format, e.g. 2026-10-25." };
  const today = todayPacific(now);
  if (date < today) return { ok: false, error: `date can't be in the past (today is ${today} in Orange County).` };
  if (date > addDays(today, 365)) return { ok: false, error: "date must be within the next 12 months." };

  const time = normalizeTimeSlot(values.time);
  if (!time) return { ok: false, error: `time must be one of: ${TIME_SLOTS.join(", ")}.` };

  return {
    ok: true,
    value: {
      name: values.name,
      email: values.email,
      phone: values.phone,
      pestSlug,
      pestName,
      citySlug: city?.slug ?? null,
      cityName: city?.name ?? values.city,
      address: values.address,
      zip: values.zip,
      date,
      time,
      notes: values.notes,
    },
  };
}

export async function submitInspectionRequest(
  input: InspectionInput,
  options: {
    source: InspectionSource;
    /**
     * Called after validation passes and before anything is sent; return true to reject
     * with 429. Lets each route keep its own per-IP limit.
     */
    rateLimit?: () => boolean;
    now?: Date;
  }
): Promise<InspectionResult> {
  const { source } = options;
  const agent = source !== "web";
  const checked = validateInspection(input, source, options.now);
  if (!checked.ok) return fail(checked.error);
  const v = checked.value;

  if (options.rateLimit?.()) {
    return fail(`Too many requests. Please try again later or call ${SITE_CONFIG.phone}.`, 429);
  }
  // Agents can't use the browser honeypot, so also cap repeats per customer.
  if (agent) {
    const day = 24 * 60 * 60 * 1000;
    const phoneKey = v.phone.replace(/\D/g, "").slice(-10);
    if (
      isRateLimitedKey(v.email.toLowerCase(), { bucket: "agent-email", max: 3, windowMs: day }) ||
      isRateLimitedKey(phoneKey, { bucket: "agent-phone", max: 3, windowMs: day })
    ) {
      return fail(
        `We already received inspection requests for this customer today. Yobani will call to confirm; for changes call ${SITE_CONFIG.phone}.`,
        429
      );
    }
  }

  // Agent-written notes often mention ChatGPT itself, which the pitch classifier treats as
  // an "AI visibility" sales signal. Screen the customer's words, not the channel's.
  const screened = agent ? v.notes.replace(/chat ?gpt|openai|\bai assistant\b/gi, "") : v.notes;
  const verdict = checkSpam({
    honeypot: agent ? undefined : input._hp,
    startedAt: agent ? undefined : input._t,
    message: screened,
    extra: `${v.name} ${v.email}`,
  });
  if (verdict === "drop") {
    // The web form pretends success so bots learn nothing. An agent relays our answer
    // to a person, so tell it plainly instead of claiming a booking that won't happen.
    if (!agent) return { ok: true, status: 200 };
    return fail(
      `This request couldn't be accepted automatically. Please have the customer call ${SITE_CONFIG.phone} or book at ${SITE_CONFIG.url}/book.`
    );
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const fullAddress = `${v.address}, ${v.cityName}, CA ${v.zip}`;
  const notesForEmail = agent
    ? [v.notes, `Submitted through ${SOURCE_LABEL[source]}. Please call to confirm the appointment.`]
        .filter(Boolean)
        .join("\n\n")
    : v.notes;

  const safe = escapeFields({
    name: v.name,
    email: v.email,
    phone: v.phone,
    pestType: v.pestName,
    city: v.cityName,
    address: fullAddress,
    date: v.date,
    time: v.time,
    notes: notesForEmail,
  });
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const flag = verdict === "suspect" ? "[Likely sales pitch] " : "";

  await sendLeadNotification({
    subject: `${flag}${SOURCE_TAG[source]}New Booking: ${subjectSafe(v.name)} — ${subjectSafe(v.pestName, 40)} in ${subjectSafe(v.cityName, 40)}`,
    html: bookingLeadEmail({ ...safe, mapsUrl, timestamp }),
    replyTo: v.email,
  });

  if (verdict === "ok") {
    await sendConfirmation({
      to: v.email,
      subject: "Your inspection is booked! — Yogi's Pest Control",
      html: bookingConfirmationEmail({
        name: safe.name,
        date: safe.date,
        time: safe.time,
        pestType: safe.pestType,
        city: safe.city,
      }),
    });
  }

  return {
    ok: true,
    status: 200,
    message:
      `Free inspection request sent to Yogi's Pest Control for ${formatDateLong(v.date)}, ${v.time}, at ${fullAddress} (${v.pestName}). ` +
      `Yobani will call ${v.phone} to confirm the exact time` +
      (verdict === "ok" ? `, and a confirmation email is on its way to ${v.email}.` : ".") +
      ` Questions or changes: call ${SITE_CONFIG.phone} (open 7 days, 8 AM to 8 PM).`,
  };
}
