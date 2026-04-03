import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { bookingLeadEmail, bookingConfirmationEmail } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, pestType, city, date, time, notes } = body;

    if (!name || !email || !phone || !pestType || !city || !date || !time) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Save to Supabase
    const { error: dbError } = await supabase
      .from("bookings")
      .insert({
        name,
        email,
        phone,
        pest_type: pestType,
        city,
        date,
        time_slot: time,
        notes,
      });

    if (dbError) {
      console.error("Supabase error:", dbError);
    }

    // Send email notification to Yobani
    await resend.emails.send({
      from: "Yogi's Pest Control <leads@yogispestcontrol.com>",
      to: "yobani.a@yogispestcontrol.com",
      subject: `New Booking: ${name} — ${pestType} in ${city}`,
      html: bookingLeadEmail({ name, email, phone, pestType, city, date, time, notes, timestamp }),
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "Yogi's Pest Control <noreply@yogispestcontrol.com>",
      to: email,
      subject: "Your inspection is booked! — Yogi's Pest Control",
      html: bookingConfirmationEmail({ name, date, time, pestType, city }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}
