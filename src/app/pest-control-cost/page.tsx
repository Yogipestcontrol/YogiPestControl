import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DollarSign, Home, Bug, Ruler, RotateCcw } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { GuaranteeBadges } from "@/components/GuaranteeBadges";
import { SITE_CONFIG } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "How Much Does Pest Control Cost in Orange County? | Pricing Guide",
  description:
    "Find out how much pest control costs in Orange County, CA. Transparent pricing for rodents, ants, cockroaches, bed bugs, and more. Free inspections. Call 714-323-8262.",
  keywords:
    "how much does pest control cost orange county, pest control pricing, exterminator cost orange county ca",
};

const priceRanges = [
  { service: "General Pest Control", oneTime: "$150 – $250", recurring: "$80 – $150/mo" },
  { service: "Rodent Control", oneTime: "$200 – $500", recurring: "$100 – $200/mo" },
  { service: "Cockroach Control", oneTime: "$150 – $300", recurring: "$80 – $150/mo" },
  { service: "Ant Control", oneTime: "$150 – $250", recurring: "$75 – $125/mo" },
  { service: "Bed Bug Treatment", oneTime: "$500 – $1,500", recurring: "N/A" },
  { service: "Wasp / Bee Removal", oneTime: "$150 – $500", recurring: "N/A" },
  { service: "Spider Control", oneTime: "$150 – $250", recurring: "$75 – $125/mo" },
  { service: "Mosquito Control", oneTime: "$150 – $300", recurring: "$100 – $175/mo" },
  { service: "Tick & Flea Treatment", oneTime: "$200 – $400", recurring: "$100 – $150/mo" },
  { service: "Wildlife Trapping", oneTime: "$250 – $600", recurring: "N/A" },
  { service: "Dead Animal Removal", oneTime: "$150 – $400", recurring: "N/A" },
  { service: "Exclusion Repairs", oneTime: "$300 – $1,500+", recurring: "N/A" },
  { service: "Attic Cleanout", oneTime: "$500 – $3,000+", recurring: "N/A" },
];

const costFactors = [
  {
    icon: Bug,
    title: "Type of Pest",
    description:
      "Different pests require different treatments. Common ants cost less to treat than bed bugs or wildlife, which need specialized equipment and techniques.",
  },
  {
    icon: Ruler,
    title: "Property Size",
    description:
      "Larger homes and commercial properties require more product and more time, which increases the overall cost of treatment.",
  },
  {
    icon: Home,
    title: "Severity of Infestation",
    description:
      "A minor ant trail costs less to treat than a full-blown rodent infestation. The worse the problem, the more extensive the treatment needed.",
  },
  {
    icon: RotateCcw,
    title: "One-Time vs. Recurring",
    description:
      "Recurring maintenance plans offer a lower per-visit cost and help prevent re-infestations, making them more cost-effective long-term.",
  },
];

const costFaqs = [
  {
    question: "How much does a pest control inspection cost?",
    answer:
      "At Yogi's Pest Control, inspections are always free. We will assess your property, identify the pest problem, and provide a detailed quote at no charge and with no obligation.",
  },
  {
    question: "Is a recurring pest control plan worth the cost?",
    answer:
      "Yes, for most homeowners. Recurring plans are more cost-effective per visit and provide continuous protection. They are especially valuable in Orange County where year-round warm weather keeps pests active.",
  },
  {
    question: "Why do bed bug treatments cost more than other services?",
    answer:
      "Bed bugs require specialized heat treatments or multiple chemical applications to fully eradicate. The treatment process is more labor-intensive and requires specialized equipment, which increases the cost.",
  },
  {
    question: "Do you offer payment plans or financing?",
    answer:
      "We offer flexible payment options for larger treatments. Contact us to discuss payment arrangements that work for your budget.",
  },
  {
    question: "Will my homeowner's insurance cover pest control?",
    answer:
      "Most homeowner's insurance policies do not cover pest control or pest damage. However, some policies may cover damage caused by certain pests. Check with your insurance provider for specific coverage details.",
  },
];

export default function PestControlCostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: costFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.cost}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            How Much Does Pest Control Cost in Orange County?
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Transparent pricing with no hidden fees. Get a clear picture of pest
            control costs before you book, or get a free, no-obligation quote.
          </p>
        </div>
      </section>

      <GuaranteeBadges />

      {/* Price Table */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Price Ranges by Service
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Prices vary based on property size, severity, and treatment method.
              These ranges give you a general idea of what to expect.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">
                    Service
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">
                    One-Time
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">
                    Recurring
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceRanges.map(({ service, oneTime, recurring }, i) => (
                  <tr
                    key={service}
                    className={`border-t border-border ${
                      i % 2 === 0 ? "bg-surface" : "bg-background"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {service}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">{oneTime}</td>
                    <td className="px-6 py-4 text-sm text-muted">{recurring}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            * Prices are estimates for Orange County, CA. Your exact cost depends
            on a free on-site inspection. Prices subject to change.
          </p>
        </div>
      </section>

      {/* Factors that affect cost */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              What Affects Pest Control Cost?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Several factors determine the final price of your pest control service.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {costFactors.map(({ icon: Icon, title, description }) => (
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

      {/* Get Your Exact Quote CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <DollarSign className="h-4 w-4" />
            Free Quote
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Get Your Exact Quote
          </h2>
          <p className="mb-8 text-lg text-muted">
            Every pest problem is unique. Book a free inspection and get an exact,
            no-obligation quote tailored to your property and situation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary-dark transition-all hover:bg-accent-light hover:shadow-lg"
            >
              Book Free Inspection <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Cost FAQs */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Common Cost Questions
            </h2>
          </div>
          <div className="space-y-4">
            {costFaqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-xl border border-border bg-surface transition-shadow hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
