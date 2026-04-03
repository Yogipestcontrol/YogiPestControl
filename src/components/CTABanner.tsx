"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { SITE_CONFIG } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export function CTABanner({
  headline = "Ready to Get Rid of Pests?",
  subtext = "Schedule your free inspection today. Same-day service available.",
}: {
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
      <Image
        src={heroImages.services}
        alt=""
        fill
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/80 to-primary/90" />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <AnimateIn delay={0.2}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{subtext}</p>
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-primary-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_8px_25px_rgba(212,168,67,0.4)]"
            >
              Book Free Inspection
            </Link>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
