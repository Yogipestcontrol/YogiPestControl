import { NextResponse } from "next/server";
import { contactLeadEmail, contactConfirmationEmail } from "@/lib/email-templates";
import {
  checkSpam,
  escapeFields,
  isRateLimited,
  isValidEmail,
  sendConfirmation,
  sendLeadNotification,
  subjectSafe,
} from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, _hp, _t } = body;
    const source = body.source === "free-inspection" ? "free-inspection" : "contact";
    // The free-inspection landing page only requires name + phone.
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message =
      body.message || (source === "free-inspection" ? "Free inspection request (no details given)." : "");

    if (!name || !phone || !message || (source === "contact" && !isValidEmail(email))) {
      return NextResponse.json(
        { error: "Name, a valid email, phone, and message are required" },
        { status: 400 }
      );
    }
    const hasEmail = isValidEmail(email);

    if (isRateLimited(request)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const verdict = checkSpam({
      honeypot: _hp,
      startedAt: _t,
      message: String(body.message || ""),
      extra: `${name} ${email}`,
    });
    if (verdict === "drop") return NextResponse.json({ success: true });

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const safe = escapeFields({ name, email: email || "(not provided)", phone, service: service || "", message });
    const flag = verdict === "suspect" ? "[Likely sales pitch] " : "";
    const kind = source === "free-inspection" ? "Free Inspection Request" : "Contact Lead";

    await sendLeadNotification({
      subject: `${flag}New ${kind}: ${subjectSafe(name)}`,
      html: contactLeadEmail({ ...safe, timestamp }),
      replyTo: hasEmail ? email : undefined,
    });

    if (verdict === "ok" && hasEmail) {
      await sendConfirmation({
        to: email,
        subject: "We received your message — Yogi's Pest Control",
        html: contactConfirmationEmail({ name: safe.name }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
