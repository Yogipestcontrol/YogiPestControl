import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

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
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1a2332; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f5c542; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #94a3b8; margin: 8px 0 0;">Someone wants to hear from you!</p>
          </div>

          <div style="padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${service || "Not specified"}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #f5c542;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b;">${message}</p>
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="tel:${phone}" style="display: inline-block; background: #1a2332; color: #f5c542; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Call ${name} Now
              </a>
            </div>

            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
              This lead was submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} via yogispestcontrol.com
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "Yogi's Pest Control <noreply@yogispestcontrol.com>",
      to: email,
      subject: "We received your message - Yogi's Pest Control",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1a2332; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f5c542; margin: 0; font-size: 24px;">Thanks for reaching out, ${name}!</h1>
          </div>

          <div style="padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              We received your message and a member of our team will get back to you within <strong>30 minutes</strong> during business hours.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              If your situation is urgent, don't hesitate to call us directly:
            </p>

            <div style="text-align: center; margin: 24px 0;">
              <a href="tel:7143238262" style="display: inline-block; background: #f5c542; color: #1a2332; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">
                Call (714) 323-8262
              </a>
            </div>

            <p style="font-size: 13px; color: #94a3b8; text-align: center;">
              Yogi's Pest Control &bull; Orange County, CA &bull; Licensed & Insured
            </p>
          </div>
        </div>
      `,
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
