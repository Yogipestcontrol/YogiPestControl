import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CineVideo } from "@/components/home/CineVideo";

/**
 * Scene 1. Pinned for ~2 screens: a Veo night film of an OC home (something
 * scurries across the roof into the attic vent) dissolves, as you scroll, into the
 * real daylight photo of Yobani and his truck. Scroll-driven via CSS
 * (.cine-hero* in globals.css); without support, both lines simply show.
 */
export function NightToDayHero({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <section className="cine-hero relative h-[220svh] bg-[#0B1A14] text-white">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Night: the film */}
        <div className="cine-hero-night-video absolute inset-0">
          <CineVideo
            src="/cine/hero-night.mp4"
            tallSrc="/cine/hero-night-tall.mp4"
            poster="/cine/hero-night-poster.jpg"
            eager
            className="h-full w-full object-cover"
          />
        </div>

        {/* Morning: the real photo */}
        <div className="cine-hero-day absolute inset-0">
          <Image
            src="/images/heroes/real-photo-2.jpg"
            alt="Yobani Arreola, owner of Yogi's Pest Control, beside his service truck outside an Orange County home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_80%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A14]/80 via-[#0B1A14]/10 to-transparent" />
        </div>

        <div aria-hidden className="cine-vignette absolute inset-0" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0B1A14]/85 via-[#0B1A14]/35 to-transparent" />
        <div aria-hidden className="cine-grain absolute inset-0" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-20">
          <h1 className="mb-5 max-w-lg text-base font-semibold text-[#D4A843] sm:text-lg">
            Pest control in Orange County, run by the licensed owner you&apos;ll actually meet
          </h1>

          <div className="grid font-[family-name:var(--font-condensed)] font-extrabold uppercase leading-[0.86] [font-stretch:72%]">
            <p className="cine-hero-line1 col-start-1 row-start-1 text-[clamp(3.25rem,10vw,8.5rem)]">
              It&apos;s 2&nbsp;a.m.
              <br />
              Something&apos;s in
              <br />
              the attic.
            </p>
            <p className="cine-hero-line2 col-start-1 row-start-2 mt-4 text-[clamp(2.5rem,7vw,6rem)] text-[#D4A843] sm:row-start-1 sm:mt-0 sm:self-end sm:justify-self-end sm:text-right">
              By morning,
              <br />
              Yobani&apos;s in
              <br />
              your driveway.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A843] px-8 py-4 text-lg font-bold text-[#0B1A14] transition-colors hover:bg-[#E5BE5F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Phone className="h-5 w-5" /> Call {SITE_CONFIG.phone}
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Book a free inspection
            </Link>
          </div>
          <p className="mt-5 text-sm text-white/70">
            {rating.toFixed(1)} stars from {reviewCount} Google reviews. CA license {SITE_CONFIG.license}. Open 7 days, 8AM to 8PM.
          </p>
          <p aria-hidden className="cine-hero-cue mt-6 hidden text-xs text-white/50 sm:block">
            Scroll to morning
          </p>
        </div>
      </div>
    </section>
  );
}
