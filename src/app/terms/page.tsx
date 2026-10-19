import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { SITE_CONFIG } from "@/lib/constants";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Use",
  description: "Terms for using the Yogi's Pest Control website, online booking requests and price estimates.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="October 19, 2026">
      <p>
        These terms apply to your use of the {SITE_CONFIG.name} website. By using the site you agree
        to them.
      </p>

      <h2>Booking requests</h2>
      <p>
        Submitting a booking or inspection form is a request, not a confirmed appointment. We&apos;ll
        contact you to confirm a time. Service itself is governed by the agreement or work order you
        receive for your job.
      </p>

      <h2>Prices and information</h2>
      <p>
        Prices on this site, including our <Link href="/pest-control-cost">pricing guide</Link>, are
        general estimates for Orange County. Your actual price depends on the inspection, the pest,
        the size of the property and the treatment needed, and is confirmed before work begins.
        Articles and pest guides are general information, not a substitute for an on-site inspection.
      </p>

      <h2>Licensing</h2>
      <p>
        {SITE_CONFIG.name} operates under California Structural Pest Control Board license{" "}
        {SITE_CONFIG.license}. You can verify licenses at{" "}
        <a href="https://www.pestboard.ca.gov" target="_blank" rel="noopener noreferrer">
          pestboard.ca.gov
        </a>
        .
      </p>

      <h2>Reviews and third-party links</h2>
      <p>
        Reviews shown on this site come from our public Google Business Profile. Links to other sites
        are provided for convenience; we aren&apos;t responsible for their content.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The website is provided &ldquo;as is&rdquo;. To the extent allowed by law, we aren&apos;t
        liable for damages arising from use of the website itself. This doesn&apos;t limit any rights
        you have under your service agreement or California law.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> &middot;{" "}
        <a href={SITE_CONFIG.phoneTel}>{SITE_CONFIG.phone}</a>. See also our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
