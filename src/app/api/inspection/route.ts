import { NextResponse } from "next/server";
import { isRateLimited } from "@/lib/leads";
import { submitInspectionRequest } from "@/lib/inspection-request";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * JSON endpoint for the "Yogi's Pest Control" custom GPT (GPT Action).
 * Spec: /openapi.json (operationId requestInspection).
 *
 * No browser honeypot here, so protection is: per-IP rate limit, per-customer daily cap,
 * the sales-pitch classifier, strict field validation and max lengths.
 */

// ChatGPT Action calls come from a small pool of OpenAI egress IPs shared by every
// user, so the per-IP cap is looser than the website's (5 / 10 min).
const RATE_LIMIT = { bucket: "chatgpt", max: 20, windowMs: 10 * 60 * 1000 };
const MAX_BODY_BYTES = 16 * 1024;

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > MAX_BODY_BYTES) {
      return NextResponse.json({ success: false, error: "Request body too large." }, { status: 400 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ success: false, error: "Body must be JSON." }, { status: 400 });
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ success: false, error: "Body must be a JSON object." }, { status: 400 });
    }

    // Never let an API caller supply the browser-only guard fields.
    const { _hp: _ignoredHp, _t: _ignoredT, ...input } = body as Record<string, unknown>;
    void _ignoredHp;
    void _ignoredT;

    const result = await submitInspectionRequest(input, {
      source: "chatgpt",
      rateLimit: () => isRateLimited(request, RATE_LIMIT),
    });

    if (!result.ok) {
      return NextResponse.json({ success: false, error: result.error }, { status: result.status });
    }
    return NextResponse.json({ success: true, message: result.message });
  } catch (error) {
    console.error("Inspection API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: `The request could not be sent right now. Please call ${SITE_CONFIG.phone} or book at ${SITE_CONFIG.url}/book.`,
      },
      { status: 500 }
    );
  }
}
