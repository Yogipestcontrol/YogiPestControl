import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { contactLeadEmail, contactConfirmationEmail } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, phone, and message are required" },
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
      .from("contact_leads")
      .insert({ name, email, phone, service, message });

    if (dbError) {
      console.error("Supabase error:", dbError);
    }

    // Send email notification to Yobani
    await resend.emails.send({
      from: "Yogi's Pest Control <leads@yogispestcontrol.com>",
      to: "yobani.a@yogispestcontrol.com",
      subject: `New Contact Lead: ${name}`,
      html: contactLeadEmail({ name, email, phone, service, message, timestamp }),
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "Yogi's Pest Control <noreply@yogispestcontrol.com>",
      to: email,
      subject: "We received your message — Yogi's Pest Control",
      html: contactConfirmationEmail({ name }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
