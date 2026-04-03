import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

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
      subject: `New Booking Request: ${name} - ${pestType} in ${city}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1a2332; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f5c542; margin: 0; font-size: 24px;">New Inspection Booking!</h1>
            <p style="color: #94a3b8; margin: 8px 0 0;">A customer just booked a free inspection</p>
          </div>

          <div style="padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <!-- Appointment Details -->
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #16a34a; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Appointment</p>
              <p style="margin: 0; font-size: 18px; font-weight: 700; color: #166534;">${date} &bull; ${time}</p>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 120px;">Customer</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Pest Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">
                  <span style="background: #fef3c7; color: #92400e; padding: 2px 10px; border-radius: 12px; font-size: 13px; font-weight: 600;">${pestType}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">City</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${city}</td>
              </tr>
            </table>

            ${notes ? `
            <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #f5c542;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Customer Notes</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b;">${notes}</p>
            </div>
            ` : ""}

            <div style="margin-top: 24px; text-align: center;">
              <a href="tel:${phone}" style="display: inline-block; background: #1a2332; color: #f5c542; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Call ${name} to Confirm
              </a>
            </div>

            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
              Booked on ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} via yogispestcontrol.com
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "Yogi's Pest Control <noreply@yogispestcontrol.com>",
      to: email,
      subject: "Your inspection is booked! - Yogi's Pest Control",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1a2332; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f5c542; margin: 0; font-size: 24px;">You're All Set, ${name}!</h1>
            <p style="color: #94a3b8; margin: 8px 0 0;">Your free pest inspection is booked</p>
          </div>

          <div style="padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 20px;">
              <p style="margin: 0 0 4px; font-size: 13px; color: #16a34a; font-weight: 600;">YOUR APPOINTMENT</p>
              <p style="margin: 0; font-size: 20px; font-weight: 700; color: #166534;">${date}</p>
              <p style="margin: 4px 0 0; font-size: 16px; color: #166534;">${time}</p>
            </div>

            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              A member of our team will call you shortly to confirm your appointment. Here's what to expect:
            </p>

            <ul style="font-size: 14px; line-height: 2; color: #334155; padding-left: 20px;">
              <li>A licensed technician will inspect your property</li>
              <li>You'll receive a detailed treatment plan</li>
              <li>No obligation — the inspection is 100% free</li>
            </ul>

            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              Need to reschedule? Just call us:
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
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}
