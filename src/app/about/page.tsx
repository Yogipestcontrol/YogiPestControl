import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Leaf, Users, MapPin, Award } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { GuaranteeBadges } from "@/components/GuaranteeBadges";
import { SITE_CONFIG } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Yogi's Pest Control | Orange County's Trusted Exterminators",
  description:
    "Learn about Yogi's Pest Control — Orange County's trusted pest control company. Licensed, insured, eco-friendly treatments. Serving all 34 OC cities. Call 714-323-8262.",
};

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every treatment we use is EPA-approved and safe for your family, pets, and the environment. We never cut corners on safety.",
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
      "Our technicians are licensed, trained, and committed to delivering the highest standard of pest control service.",
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
            Orange County&apos;s trusted, locally owned pest control company.
            Licensed, insured, and committed to keeping your home pest-free.
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
                Built on Trust, Driven by Results
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Yogi&apos;s Pest Control was founded with a simple mission: provide
                  Orange County homeowners and businesses with honest, effective, and
                  affordable pest control solutions. We saw too many families getting
                  overcharged for subpar service, and we knew there was a better way.
                </p>
                <p>
                  Today, we proudly serve all 34 cities across Orange County with a
                  team of licensed, trained technicians who treat every home like their
                  own. From Anaheim to San Clemente, our reputation has been built one
                  satisfied customer at a time.
                </p>
                <p>
                  We specialize in eco-friendly treatments that are safe for families
                  and pets, using integrated pest management (IPM) techniques that
                  deliver lasting results without harsh chemicals.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "500+", label: "Happy Customers" },
                  { stat: "34", label: "OC Cities Served" },
                  { stat: "4.9/5", label: "Average Rating" },
                  { stat: "Same Day", label: "Response Time" },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <div className="mb-1 text-3xl font-extrabold text-primary">
                      {stat}
                    </div>
                    <div className="text-sm text-muted">{label}</div>
                  </div>
                ))}
              </div>
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

      {/* Team Section Placeholder */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Our licensed technicians are the backbone of Yogi&apos;s Pest Control.
              Every team member is background-checked, trained, and passionate about
              keeping Orange County pest-free.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Licensed Technicians",
                role: "Field Operations",
                desc: "Certified pest management professionals with years of hands-on experience in Orange County.",
              },
              {
                name: "Customer Support",
                role: "Scheduling & Support",
                desc: "Friendly, knowledgeable staff ready to answer your questions and schedule service at your convenience.",
              },
              {
                name: "Quality Assurance",
                role: "Inspections & Follow-Up",
                desc: "Dedicated team ensuring every treatment meets our high standards and your satisfaction is guaranteed.",
              },
            ].map(({ name, role, desc }) => (
              <div
                key={name}
                className="rounded-xl border border-border bg-surface p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-foreground">{name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{role}</p>
                <p className="text-sm leading-relaxed text-muted">{desc}</p>
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
