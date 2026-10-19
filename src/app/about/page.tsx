import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Leaf, Users, MapPin, Award } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { GuaranteeBadges } from "@/components/GuaranteeBadges";
import { SITE_CONFIG } from "@/lib/constants";
import { GOOGLE_PROFILE } from "@/data/reviews";
import { heroImages } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Yogi's Pest Control | Owner Yobani Arreola, Tustin CA",
  absoluteTitle: true,
  description:
    "Owner-operated by Yobani Arreola, a CA Structural Pest Control Board licensed operator (OPR 14866) based in Tustin, serving all of Orange County.",
  path: "/about",
});

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We use EPA-registered products applied according to the label, and we walk you through prep and re-entry times for kids and pets.",
  },
  {
    icon: Heart,
    title: "Customer-Centered",
    description:
      "We treat every home like our own. That means honest pricing, clear communication, and results you can count on.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "We use integrated pest management (IPM) techniques and eco-friendly products to minimize environmental impact.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every job is handled under a California Structural Pest Control Board license (OPR 14866). No call centers, no hand-offs.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "As a locally owned business, we are invested in keeping Orange County homes and businesses pest-free.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "We know Orange County pests inside and out. Our local knowledge means faster, more effective treatments.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.about}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            About Yogi&apos;s Pest Control
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Owner-operated pest control from Tustin. When you call Yogi&apos;s, you
            get Yobani: the licensed operator who does the inspection and the work.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Story
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                A Local Business, Not a Call Center
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Yogi&apos;s Pest Control is run by {SITE_CONFIG.owner}, a pest
                  control operator licensed by the California Structural Pest Control
                  Board (license {SITE_CONFIG.license}). The business is based in
                  Tustin and serves homes and businesses across Orange County.
                </p>
                <p>
                  Customers deal with Yobani directly, from the first call through the
                  inspection, treatment and follow-up visits. That&apos;s why so many
                  of our reviews mention him by name: same-day responses, honest
                  pricing, and work that holds up.
                </p>
                <p>
                  Most of our work is rodent control and exclusion (sealing the gaps
                  rats use to get into attics, crawlspaces and garages), recurring
                  home pest service, mosquitoes, fleas, bees and wasps, and wildlife
                  problems like skunks under the house.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { stat: `${GOOGLE_PROFILE.rating.toFixed(1)}★`, label: `${GOOGLE_PROFILE.reviewCount} Google reviews` },
                  { stat: SITE_CONFIG.license, label: "CA SPCB license" },
                  { stat: "Tustin", label: "Home base" },
                  { stat: "7 days", label: "8AM – 8PM" },
                ].map(({ stat, label }) => (
                  <div key={label} className="rounded-xl border border-border bg-surface p-4 text-center">
                    <div className="mb-1 text-xl font-extrabold text-primary">{stat}</div>
                    <div className="text-xs text-muted">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/heroes/real-photo-2.jpg"
                alt="Yobani Arreola, owner of Yogi's Pest Control, with his branded Yogi's Pest Control truck"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_85%]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Values */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Our Mission &amp; Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Everything we do is guided by our commitment to safety, quality, and
              community.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Service Area
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Proudly Serving All of Orange County
          </h2>
          <p className="mb-8 text-lg text-muted">
            From Anaheim and Irvine to Huntington Beach and Mission Viejo, we provide
            fast, reliable pest control to every city and community across Orange
            County, CA. No matter where you are, we are just a call away.
          </p>
          <Link
            href="/areas-we-serve"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
          >
            View All Service Areas <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <GuaranteeBadges />
      <CTABanner />
    </>
  );
}
