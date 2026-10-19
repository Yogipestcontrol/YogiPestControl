import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-accent">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">
          This page has bugged out
        </h1>
        <p className="mt-4 text-lg text-muted">
          We couldn&apos;t find that page. It may have moved, or the link may be wrong.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-light"
          >
            Go to the homepage <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={SITE_CONFIG.phoneTel}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            <Phone className="h-5 w-5" /> {SITE_CONFIG.phone}
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/services" className="text-primary hover:text-primary-light">Services</Link>
          <Link href="/areas-we-serve" className="text-primary hover:text-primary-light">Service Areas</Link>
          <Link href="/pests" className="text-primary hover:text-primary-light">Pest Library</Link>
          <Link href="/pest-control-cost" className="text-primary hover:text-primary-light">Pricing</Link>
          <Link href="/contact" className="text-primary hover:text-primary-light">Contact</Link>
        </div>
      </div>
    </section>
  );
}
