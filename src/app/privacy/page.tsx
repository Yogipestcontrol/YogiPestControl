import { LegalPage } from "@/components/LegalPage";
import { SITE_CONFIG } from "@/lib/constants";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Yogi's Pest Control collects, uses and protects the information you share through our website, forms and phone calls.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 19, 2026">
      <p>
        {SITE_CONFIG.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a pest control business based in
        Tustin, California. This policy explains what information we collect through{" "}
        {SITE_CONFIG.url.replace("https://", "")} and how we use it.
      </p>

      <h2>Information you give us</h2>
      <p>
        When you fill out our contact, booking or free-inspection forms we receive the details you
        enter: your name, phone number, email address, city, the pest problem you describe, and any
        notes (which may include your service address). We use this only to respond to you,
        schedule and perform service, and send you a confirmation of your request.
      </p>

      <h2>Information collected automatically</h2>
      <p>
        We use Google Analytics to understand how visitors use the site (pages viewed, approximate
        location, device and browser type, and actions such as clicking our phone number or
        submitting a form). Google Analytics uses cookies. You can opt out with the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics opt-out browser add-on
        </a>
        .
      </p>

      <h2>How your information is shared</h2>
      <ul>
        <li>
          Form submissions are delivered to us by email through our email provider (Resend), which
          processes them on our behalf.
        </li>
        <li>Website usage data is processed by Google Analytics.</li>
        <li>
          We do not sell or rent your personal information, and we do not share it for
          cross-context behavioral advertising.
        </li>
        <li>We may disclose information if required by law.</li>
      </ul>

      <h2>Your California privacy rights</h2>
      <p>
        California residents may ask to know what personal information we hold about them, ask us to
        correct or delete it, and opt out of any sale or sharing (we do neither). To make a request,
        contact us using the details below. We won&apos;t discriminate against you for exercising
        these rights.
      </p>

      <h2>Retention and security</h2>
      <p>
        We keep customer and lead information only as long as needed to provide service, keep
        business records and meet legal requirements (for example, California pesticide application
        records). We use reasonable safeguards, but no website or email system is completely secure.
      </p>

      <h2>Children</h2>
      <p>Our site is not directed to children under 13, and we don&apos;t knowingly collect their information.</p>

      <h2>Contact us</h2>
      <p>
        Questions or requests: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> or{" "}
        <a href={SITE_CONFIG.phoneTel}>{SITE_CONFIG.phone}</a>.
      </p>
    </LegalPage>
  );
}
