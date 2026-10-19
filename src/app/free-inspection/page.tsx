import Image from "next/image";
import { Phone, CheckCircle, Shield, Clock, Leaf, Star } from "lucide-react";
import { GuaranteeBadges } from "@/components/GuaranteeBadges";
import { FreeInspectionForm } from "@/components/FreeInspectionForm";
import { SITE_CONFIG } from "@/lib/constants";
import { GOOGLE_PROFILE } from "@/data/reviews";
import { heroImages } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Free Pest Inspection in Orange County",
  description:
    "Get a free, no-obligation pest inspection and exact quote from a licensed Orange County operator. Same-day service often available. Call 714-323-8262.",
  path: "/free-inspection",
});

const trustPoints = [
  { icon: Clock, text: "Same-Day Service Available" },
  { icon: Shield, text: `CA Licensed Operator (${SITE_CONFIG.license})` },
  { icon: Leaf, text: "EPA-Registered Products, Applied Per Label" },
  { icon: CheckCircle, text: "100% Satisfaction Guarantee" },
  { icon: Star, text: `${GOOGLE_PROFILE.rating.toFixed(1)} Stars on Google (${GOOGLE_PROFILE.reviewCount} reviews)` },
];

export default function FreeInspectionPage() {
  return (
    <>
      {/* Hero with inline form — simplified landing page */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.freeInspection}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-20 sm:pb-40 sm:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left — Value Prop */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">
                <Star className="h-4 w-4 text-accent" />
                Limited Time Offer
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Get Your{" "}
                <span className="text-accent">100% Free</span> Pest Inspection
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
                Owner-operated, licensed pest control based in Tustin. We&apos;ll
                inspect your property, identify the problem, and give you an exact
                quote — all at no cost and with no obligation.
              </p>

              {/* Trust Points */}
              <ul className="space-y-3">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-white/80">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center gap-2 text-lg font-bold text-accent hover:text-accent-light"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Right — Inline Form */}
            <div className="glass-card rounded-2xl p-8 !bg-white/95 dark:!bg-surface/95">
              <h2 className="mb-2 text-xl font-bold text-foreground">
                Book Your Free Inspection
              </h2>
              <p className="mb-6 text-sm text-muted">
                Fill out this quick form and we&apos;ll call you within 30 minutes to
                confirm your appointment.
              </p>
              <FreeInspectionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <GuaranteeBadges />

      {/* Social Proof Strip */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
            <div className="mb-4 flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-7 w-7 fill-accent text-accent"
                />
              ))}
            </div>
            <p className="mb-2 text-2xl font-bold text-foreground">
              {GOOGLE_PROFILE.rating.toFixed(1)} out of 5 Stars on Google
            </p>
            <p className="mb-6 text-muted">
              From {GOOGLE_PROFILE.reviewCount} verified Google reviews.{" "}
              <a href={GOOGLE_PROFILE.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-primary-light">
                Read them on Google
              </a>
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { stat: SITE_CONFIG.license, label: "CA SPCB License" },
                { stat: "34", label: "OC Cities Served" },
                { stat: "Same Day", label: "Response Time" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-primary">{stat}</div>
                  <div className="text-sm text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              What&apos;s Included in Your Free Inspection
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Full Property Assessment",
                desc: "Our licensed technician inspects your entire property inside and out, identifying all pest activity and entry points.",
              },
              {
                title: "Pest Identification",
                desc: "We identify the exact species, determine the severity of the infestation, and explain the risks involved.",
              },
              {
                title: "Custom Treatment Plan",
                desc: "You receive a detailed treatment plan tailored to your property, including recommended methods and timeline.",
              },
              {
                title: "Exact Price Quote",
                desc: "A transparent, itemized quote with no hidden fees. You know exactly what you will pay before any work begins.",
              },
              {
                title: "Prevention Advice",
                desc: "Tips and recommendations to prevent future infestations, including entry point sealing and habitat modification.",
              },
              {
                title: "No Obligation",
                desc: "The inspection and quote are completely free. There is zero pressure to commit — the decision is entirely yours.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Don&apos;t Wait — Pests Won&apos;t
          </h2>
          <p className="mb-8 text-lg text-white/70">
            The longer you wait, the worse it gets. Book your free inspection now
            and take the first step toward a pest-free home.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#top"
              className="rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary-dark transition-all hover:bg-accent-light hover:shadow-lg"
            >
              Book Free Inspection Now
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
