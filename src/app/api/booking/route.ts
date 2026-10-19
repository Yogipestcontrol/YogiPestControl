import { NextResponse } from "next/server";
import { bookingLeadEmail, bookingConfirmationEmail } from "@/lib/email-templates";
import { SERVICES, OC_CITIES } from "@/lib/constants";
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
    const address = typeof body.address === "string" ? body.address.trim() : "";
    const zip = typeof body.zip === "string" ? body.zip.trim() : "";

    if (
      !name || !isValidEmail(email) || !phone || !pestType || !city || !date || !time ||
      address.length < 5 || !/^\d{5}$/.test(zip)
    ) {
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
      message: String(notes || ""),
      extra: `${name} ${email}`,
    });
    if (verdict === "drop") return NextResponse.json({ success: true });

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Show readable names ("Irvine", "Fly Control") instead of slugs in the emails.
    const cityName = OC_CITIES.find((c) => c.slug === city)?.name ?? String(city);
    const serviceName =
      SERVICES.find((s) => s.slug === pestType)?.name ?? (pestType === "other" ? "Other / Not sure" : String(pestType));
    const fullAddress = `${address}, ${cityName}, CA ${zip}`;

    const safe = escapeFields({
      name, email, phone, pestType: serviceName, city: cityName, address: fullAddress, date, time, notes: notes || "",
    });
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
    const flag = verdict === "suspect" ? "[Likely sales pitch] " : "";

    await sendLeadNotification({
      subject: `${flag}New Booking: ${subjectSafe(name)} — ${subjectSafe(serviceName, 40)} in ${subjectSafe(cityName, 40)}`,
      html: bookingLeadEmail({ ...safe, mapsUrl, timestamp }),
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
