const LOGO_URL = "https://yogis-pest-control.vercel.app/images/logo-full.jpg";
const BRAND = {
  dark: "#1a2332",
  gold: "#d4a843",
  goldLight: "#f5c542",
  green: "#16a34a",
  greenBg: "#f0fdf4",
  greenBorder: "#bbf7d0",
  greenDark: "#166534",
  text: "#1e293b",
  textLight: "#475569",
  muted: "#94a3b8",
  border: "#e2e8f0",
  bg: "#f8fafc",
  white: "#ffffff",
};

function emailWrapper(content: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yogi's Pest Control</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.bg}; font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: ${BRAND.bg};">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding-bottom: 24px;">
              <img src="${LOGO_URL}" alt="Yogi's Pest Control" width="80" height="80" style="display: block; border-radius: 50%; border: 3px solid ${BRAND.gold};" />
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background: ${BRAND.white}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 24px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 13px; font-weight: 600; color: ${BRAND.text};">
                Yogi's Pest Control
              </p>
              <p style="margin: 0 0 4px; font-size: 12px; color: ${BRAND.muted};">
                Licensed &amp; Insured &bull; Orange County, CA
              </p>
              <p style="margin: 0 0 16px; font-size: 12px; color: ${BRAND.muted};">
                <a href="tel:7143238262" style="color: ${BRAND.muted}; text-decoration: none;">(714) 323-8262</a>
                &nbsp;&bull;&nbsp;
                <a href="https://yogispestcontrol.com" style="color: ${BRAND.muted}; text-decoration: none;">yogispestcontrol.com</a>
              </p>
              <div style="width: 40px; height: 2px; background: ${BRAND.border}; margin: 0 auto 16px;"></div>
              <p style="margin: 0; font-size: 11px; color: ${BRAND.muted};">
                &copy; ${new Date().getFullYear()} Yogi's Pest Control. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function headerBanner(title: string, subtitle?: string) {
  return `
    <td style="background: linear-gradient(135deg, ${BRAND.dark} 0%, #243447 100%); padding: 40px 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: ${BRAND.white}; letter-spacing: -0.3px;">
        ${title}
      </h1>
      ${subtitle ? `<p style="margin: 10px 0 0; font-size: 14px; color: ${BRAND.muted}; line-height: 1.5;">${subtitle}</p>` : ""}
    </td>`;
}

function infoRow(label: string, value: string, isLink?: { type: "email" | "phone" }) {
  let displayValue = value;
  if (isLink?.type === "email") {
    displayValue = `<a href="mailto:${value}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${value}</a>`;
  } else if (isLink?.type === "phone") {
    displayValue = `<a href="tel:${value}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${value}</a>`;
  }
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid ${BRAND.border}; font-size: 13px; color: ${BRAND.muted}; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; width: 130px; vertical-align: top;">
        ${label}
      </td>
      <td style="padding: 14px 0; border-bottom: 1px solid ${BRAND.border}; font-size: 14px; color: ${BRAND.text}; font-weight: 500;">
        ${displayValue}
      </td>
    </tr>`;
}

function ctaButton(text: string, href: string, style: "primary" | "gold" = "primary") {
  const bg = style === "gold" ? BRAND.goldLight : BRAND.dark;
  const color = style === "gold" ? BRAND.dark : BRAND.goldLight;
  return `
    <div style="text-align: center; margin: 32px 0 8px;">
      <a href="${href}" style="display: inline-block; background: ${bg}; color: ${color}; padding: 14px 40px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px; letter-spacing: 0.2px;">
        ${text}
      </a>
    </div>`;
}

// ─── INTERNAL EMAILS (to Yobani) ────────────────────────────────────────

export function contactLeadEmail(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}) {
  return emailWrapper(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>${headerBanner("New Contact Lead", "A potential customer just reached out")}</tr>
      <tr>
        <td style="padding: 32px;">
          <!-- Priority Badge -->
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="display: inline-block; background: #fef3c7; color: #92400e; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
              Respond within 30 min
            </span>
          </div>

          <!-- Lead Details -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${infoRow("Name", data.name)}
            ${infoRow("Phone", data.phone, { type: "phone" })}
            ${infoRow("Email", data.email, { type: "email" })}
            ${infoRow("Service", data.service || "Not specified")}
          </table>

          <!-- Message -->
          <div style="margin-top: 24px; padding: 20px; background: ${BRAND.bg}; border-radius: 12px; border-left: 4px solid ${BRAND.gold};">
            <p style="margin: 0 0 6px; font-size: 11px; color: ${BRAND.muted}; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Customer Message</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.7; color: ${BRAND.text};">${data.message}</p>
          </div>

          ${ctaButton(`Call ${data.name.split(" ")[0]} Now`, `tel:${data.phone}`)}

          <p style="margin-top: 24px; font-size: 11px; color: ${BRAND.muted}; text-align: center;">
            Submitted ${data.timestamp} via yogispestcontrol.com
          </p>
        </td>
      </tr>
    </table>
  `);
}

export function bookingLeadEmail(data: {
  name: string;
  email: string;
  phone: string;
  pestType: string;
  city: string;
  date: string;
  time: string;
  notes: string;
  timestamp: string;
}) {
  return emailWrapper(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>${headerBanner("New Inspection Booking", "A customer just scheduled a free inspection")}</tr>
      <tr>
        <td style="padding: 32px;">
          <!-- Appointment Card -->
          <div style="background: ${BRAND.greenBg}; border: 1px solid ${BRAND.greenBorder}; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 28px;">
            <p style="margin: 0 0 2px; font-size: 11px; color: ${BRAND.green}; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Scheduled Appointment</p>
            <p style="margin: 0; font-size: 20px; font-weight: 800; color: ${BRAND.greenDark}; letter-spacing: -0.3px;">${data.date}</p>
            <p style="margin: 4px 0 0; font-size: 15px; color: ${BRAND.greenDark}; font-weight: 600;">${data.time}</p>
          </div>

          <!-- Customer Details -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${infoRow("Customer", data.name)}
            ${infoRow("Phone", data.phone, { type: "phone" })}
            ${infoRow("Email", data.email, { type: "email" })}
            ${infoRow("Pest Type", `<span style="display: inline-block; background: #fef3c7; color: #92400e; padding: 3px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;">${data.pestType}</span>`)}
            ${infoRow("City", data.city)}
          </table>

          ${data.notes ? `
          <div style="margin-top: 24px; padding: 20px; background: ${BRAND.bg}; border-radius: 12px; border-left: 4px solid ${BRAND.gold};">
            <p style="margin: 0 0 6px; font-size: 11px; color: ${BRAND.muted}; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Customer Notes</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.7; color: ${BRAND.text};">${data.notes}</p>
          </div>` : ""}

          ${ctaButton(`Call ${data.name.split(" ")[0]} to Confirm`, `tel:${data.phone}`)}

          <p style="margin-top: 24px; font-size: 11px; color: ${BRAND.muted}; text-align: center;">
            Booked ${data.timestamp} via yogispestcontrol.com
          </p>
        </td>
      </tr>
    </table>
  `);
}

// ─── CUSTOMER EMAILS ────────────────────────────────────────────────────

export function contactConfirmationEmail(data: { name: string }) {
  const firstName = data.name.split(" ")[0];
  return emailWrapper(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>${headerBanner(`Thanks for reaching out, ${firstName}!`, "We received your message and will respond shortly")}</tr>
      <tr>
        <td style="padding: 32px;">
          <p style="font-size: 15px; line-height: 1.7; color: ${BRAND.textLight}; margin: 0 0 16px;">
            A member of our team will get back to you within <strong style="color: ${BRAND.text};">30 minutes</strong> during business hours. We take every inquiry seriously and look forward to helping you.
          </p>

          <!-- What Happens Next -->
          <div style="margin: 24px 0; padding: 24px; background: ${BRAND.bg}; border-radius: 12px;">
            <p style="margin: 0 0 16px; font-size: 13px; font-weight: 700; color: ${BRAND.text}; text-transform: uppercase; letter-spacing: 0.5px;">What Happens Next</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                  <div style="width: 24px; height: 24px; background: ${BRAND.dark}; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700; color: ${BRAND.goldLight};">1</div>
                </td>
                <td style="padding: 8px 0 8px 12px; font-size: 14px; color: ${BRAND.textLight}; line-height: 1.5;">
                  <strong style="color: ${BRAND.text};">We review your message</strong> and assign the right specialist
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                  <div style="width: 24px; height: 24px; background: ${BRAND.dark}; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700; color: ${BRAND.goldLight};">2</div>
                </td>
                <td style="padding: 8px 0 8px 12px; font-size: 14px; color: ${BRAND.textLight}; line-height: 1.5;">
                  <strong style="color: ${BRAND.text};">We'll call or email you</strong> to discuss your situation
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                  <div style="width: 24px; height: 24px; background: ${BRAND.dark}; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700; color: ${BRAND.goldLight};">3</div>
                </td>
                <td style="padding: 8px 0 8px 12px; font-size: 14px; color: ${BRAND.textLight}; line-height: 1.5;">
                  <strong style="color: ${BRAND.text};">Free inspection &amp; custom plan</strong> tailored to your property
                </td>
              </tr>
            </table>
          </div>

          <p style="font-size: 14px; color: ${BRAND.textLight}; margin: 0 0 4px; text-align: center;">
            Need help sooner? Call us directly:
          </p>

          ${ctaButton("Call (714) 323-8262", "tel:7143238262", "gold")}

          <!-- Trust Badges -->
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid ${BRAND.border};">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="33%" style="text-align: center; padding: 8px;">
                  <p style="margin: 0; font-size: 18px;">&#9989;</p>
                  <p style="margin: 4px 0 0; font-size: 11px; color: ${BRAND.muted}; font-weight: 600;">Licensed<br/>& Insured</p>
                </td>
                <td width="33%" style="text-align: center; padding: 8px;">
                  <p style="margin: 0; font-size: 18px;">&#9889;</p>
                  <p style="margin: 4px 0 0; font-size: 11px; color: ${BRAND.muted}; font-weight: 600;">Same-Day<br/>Service</p>
                </td>
                <td width="33%" style="text-align: center; padding: 8px;">
                  <p style="margin: 0; font-size: 18px;">&#127793;</p>
                  <p style="margin: 4px 0 0; font-size: 11px; color: ${BRAND.muted}; font-weight: 600;">Eco-Friendly<br/>Options</p>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  `);
}

export function bookingConfirmationEmail(data: {
  name: string;
  date: string;
  time: string;
  pestType: string;
  city: string;
}) {
  const firstName = data.name.split(" ")[0];
  return emailWrapper(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>${headerBanner(`You're all set, ${firstName}!`, "Your free pest inspection has been scheduled")}</tr>
      <tr>
        <td style="padding: 32px;">
          <!-- Appointment Card -->
          <div style="background: ${BRAND.greenBg}; border: 2px solid ${BRAND.greenBorder}; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 28px;">
            <p style="margin: 0 0 4px; font-size: 11px; color: ${BRAND.green}; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Your Appointment</p>
            <p style="margin: 0; font-size: 22px; font-weight: 800; color: ${BRAND.greenDark}; letter-spacing: -0.3px;">${data.date}</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: ${BRAND.greenDark}; font-weight: 600;">${data.time}</p>
            <div style="width: 40px; height: 2px; background: ${BRAND.greenBorder}; margin: 12px auto;"></div>
            <p style="margin: 0; font-size: 13px; color: ${BRAND.green};">
              <strong>${data.pestType}</strong> &bull; ${data.city}
            </p>
          </div>

          <!-- What to Expect -->
          <div style="margin: 0 0 24px; padding: 24px; background: ${BRAND.bg}; border-radius: 12px;">
            <p style="margin: 0 0 16px; font-size: 13px; font-weight: 700; color: ${BRAND.text}; text-transform: uppercase; letter-spacing: 0.5px;">What to Expect</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                  <div style="width: 24px; height: 24px; background: ${BRAND.dark}; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700; color: ${BRAND.goldLight};">1</div>
                </td>
                <td style="padding: 8px 0 8px 12px; font-size: 14px; color: ${BRAND.textLight}; line-height: 1.5;">
                  <strong style="color: ${BRAND.text};">Confirmation call</strong> — we'll call you to verify the details
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                  <div style="width: 24px; height: 24px; background: ${BRAND.dark}; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700; color: ${BRAND.goldLight};">2</div>
                </td>
                <td style="padding: 8px 0 8px 12px; font-size: 14px; color: ${BRAND.textLight}; line-height: 1.5;">
                  <strong style="color: ${BRAND.text};">Thorough inspection</strong> — a licensed tech inspects your property
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                  <div style="width: 24px; height: 24px; background: ${BRAND.dark}; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700; color: ${BRAND.goldLight};">3</div>
                </td>
                <td style="padding: 8px 0 8px 12px; font-size: 14px; color: ${BRAND.textLight}; line-height: 1.5;">
                  <strong style="color: ${BRAND.text};">Custom treatment plan</strong> — with transparent pricing, no surprises
                </td>
              </tr>
            </table>
          </div>

          <!-- Guarantee -->
          <div style="text-align: center; margin-bottom: 24px; padding: 16px; background: #fef3c7; border-radius: 12px;">
            <p style="margin: 0; font-size: 14px; color: #92400e; font-weight: 600;">
              100% Free Inspection &bull; No Obligation &bull; No Pressure
            </p>
          </div>

          <p style="font-size: 14px; color: ${BRAND.textLight}; margin: 0 0 4px; text-align: center;">
            Need to reschedule? No problem — just call us:
          </p>

          ${ctaButton("Call (714) 323-8262", "tel:7143238262", "gold")}

          <!-- Trust Badges -->
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid ${BRAND.border};">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="33%" style="text-align: center; padding: 8px;">
                  <p style="margin: 0; font-size: 18px;">&#9989;</p>
                  <p style="margin: 4px 0 0; font-size: 11px; color: ${BRAND.muted}; font-weight: 600;">Licensed<br/>& Insured</p>
                </td>
                <td width="33%" style="text-align: center; padding: 8px;">
                  <p style="margin: 0; font-size: 18px;">&#11088;</p>
                  <p style="margin: 4px 0 0; font-size: 11px; color: ${BRAND.muted}; font-weight: 600;">5-Star<br/>Rated</p>
                </td>
                <td width="33%" style="text-align: center; padding: 8px;">
                  <p style="margin: 0; font-size: 18px;">&#128170;</p>
                  <p style="margin: 4px 0 0; font-size: 11px; color: ${BRAND.muted}; font-weight: 600;">Satisfaction<br/>Guaranteed</p>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  `);
}
