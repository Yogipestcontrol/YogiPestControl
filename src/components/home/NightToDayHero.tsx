"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CineVideo } from "@/components/home/CineVideo";

/**
 * Scene 1. Pinned for ~2 screens: a Veo night film of an OC home (something
 * scurries into the attic vent) crossfades, once you scroll a little, into the real
 * daylight photo of Yobani and his truck. A tiny scroll listener flips the phase so
 * it behaves the same in every browser; the fades are plain CSS transitions.
 */
export function NightToDayHero({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const ref = useRef<HTMLElement>(null);
  const [day, setDay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const pinned = el.offsetHeight - window.innerHeight;
      const progress = pinned > 0 ? -rect.top / pinned : 0;
      setDay(progress > 0.3);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const fade = "transition-[opacity,transform] duration-[900ms] ease-out motion-reduce:transition-none";

  return (
    <section ref={ref} className="relative h-[200svh] bg-[#0B1A14] text-white">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Night: the film */}
        <div className={`absolute inset-0 ${fade} ${day ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}>
          <CineVideo
            src="/cine/hero-rat.mp4"
            tallSrc="/cine/hero-rat-tall.mp4"
            poster="/cine/hero-rat-poster.jpg"
            eager
            className="h-full w-full object-cover"
          />
        </div>

        {/* Morning: the real photo (shifted right on wide screens so Yobani stands clear of the headline) */}
        <div className={`absolute inset-0 lg:left-[34%] ${fade} ${day ? "opacity-100" : "opacity-0"}`}>
          <Image
            src="/images/heroes/real-photo-2.jpg"
            alt="Yobani Arreola, owner of Yogi's Pest Control, beside his service truck outside an Orange County home"
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover object-[50%_80%]"
          />
          <div aria-hidden className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-[#0B1A14] to-transparent lg:block" />
        </div>

        <div aria-hidden className="cine-vignette absolute inset-0" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0B1A14]/90 via-[#0B1A14]/45 to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0B1A14]/85 to-transparent" />
        <div aria-hidden className="cine-grain absolute inset-0" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-20">
          <h1 className="mb-6 max-w-xl">
            <span className="block text-sm font-semibold text-[#D4A843] sm:text-base">Yogi&apos;s Pest Control</span>
            <span className="mt-1 block text-xl font-bold leading-snug text-white sm:text-3xl">
              Licensed Orange County pest control, run by the owner who shows up
            </span>
          </h1>

          {/* Both lines share one grid cell and crossfade, so they never overlap. */}
          <div className="grid font-[family-name:var(--font-condensed)] font-extrabold uppercase leading-[0.86] [font-stretch:72%]">
            <p
              aria-hidden={day}
              className={`col-start-1 row-start-1 self-end text-[clamp(3rem,8vw,7rem)] ${fade} ${
                day ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              Rats in
              <br />
              the attic
              <br />
              at 2&nbsp;a.m.?
            </p>
            <p
              aria-hidden={!day}
              className={`col-start-1 row-start-1 self-end text-[clamp(3rem,8vw,7rem)] text-[#D4A843] ${fade} ${
                day ? "translate-y-0 opacity-100 delay-300" : "translate-y-6 opacity-0"
              }`}
            >
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
            {rating.toFixed(1)} stars from {reviewCount} reviews on Google and HomeAdvisor. CA license {SITE_CONFIG.license}. Open 7 days, 8AM to 8PM.
          </p>
        </div>
      </div>
    </section>
  );
}
