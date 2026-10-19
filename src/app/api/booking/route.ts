import { NextResponse } from "next/server";
import { bookingLeadEmail, bookingConfirmationEmail } from "@/lib/email-templates";
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
    const { name, email, phone, pestType, city, date, time, notes, _hp, _t } = body;

    if (!name || !isValidEmail(email) || !phone || !pestType || !city || !date || !time) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (isRateLimited(request)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const verdict = checkSpam({
      honeypot: _hp,
      startedAt: _t,
      text: `${name} ${email} ${notes || ""}`,
    });
    if (verdict === "drop") return NextResponse.json({ success: true });

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const safe = escapeFields({ name, email, phone, pestType, city, date, time, notes: notes || "" });
    const flag = verdict === "suspect" ? "[Likely sales pitch] " : "";

    await sendLeadNotification({
      subject: `${flag}New Booking: ${subjectSafe(name)} — ${subjectSafe(pestType, 40)} in ${subjectSafe(city, 40)}`,
      html: bookingLeadEmail({ ...safe, timestamp }),
      replyTo: email.trim(),
    });

    if (verdict === "ok") {
      await sendConfirmation({
        to: email.trim(),
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}
