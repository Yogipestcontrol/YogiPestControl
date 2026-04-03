import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, AlertTriangle, Wrench, ShieldCheck } from "lucide-react";
import { servicesData } from "@/data/services";
import { CTABanner } from "@/components/CTABanner";
import { GuaranteeBadges } from "@/components/GuaranteeBadges";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { serviceHeroImages } from "@/lib/images";

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="py-32 text-center text-xl">Service not found</div>;
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        {serviceHeroImages[service.slug] && (
          <Image
            src={serviceHeroImages[service.slug]}
            alt={`${service.name} in Orange County`}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:pb-32 sm:pt-20">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white/70">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{service.name}</span>
          </nav>
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            {service.heroHeadline}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/70">{service.heroSubtext}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary-dark transition-all hover:bg-accent-light hover:shadow-lg"
            >
              Book Free Inspection <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" /> Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <GuaranteeBadges />

      {/* Content */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">About {service.name}</h2>
                <p className="text-base leading-relaxed text-muted">{service.content.overview}</p>
              </div>

              {/* Signs */}
              <div className="mb-12">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                  Signs You Need {service.name}
                </h2>
                <ul className="space-y-3">
                  {service.content.signs.map((sign, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Health risks */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Health & Property Risks</h2>
                <ul className="space-y-3">
                  {service.content.risks.map((risk, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our process */}
              <div className="mb-12">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  <Wrench className="h-6 w-6 text-primary" />
                  Our Treatment Process
                </h2>
                <ol className="space-y-4">
                  {service.content.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-sm text-muted">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Prevention */}
              <div className="mb-12">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  Prevention Tips
                </h2>
                <ul className="space-y-3">
                  {service.content.prevention.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group rounded-lg border border-border bg-surface"
                    >
                      <summary className="cursor-pointer px-6 py-4 text-base font-semibold text-foreground">
                        {faq.question}
                      </summary>
                      <div className="px-6 pb-4 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick contact card */}
              <div className="sticky top-32 space-y-6">
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-2 text-lg font-bold text-foreground">Get a Free Quote</h3>
                  <p className="mb-4 text-sm text-muted">Same-day service available</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/book"
                      className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-primary-dark transition-all hover:bg-accent-light"
                    >
                      Book Free Inspection
                    </Link>
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light"
                    >
                      <Phone className="h-4 w-4" /> {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                {/* Related services */}
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-4 text-lg font-bold text-foreground">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map((rs) => (
                      <li key={rs.slug}>
                        <Link
                          href={`/services/${rs.slug}`}
                          className="flex items-center justify-between text-sm text-muted transition-colors hover:text-primary"
                        >
                          {rs.name}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pest quiz CTA */}
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
                  <h3 className="mb-2 text-base font-bold text-foreground">Not Sure What Pest You Have?</h3>
                  <p className="mb-4 text-sm text-muted">Take our quick quiz to identify your pest.</p>
                  <Link
                    href="/pest-quiz"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
                  >
                    Take the Quiz <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Need ${service.name}?`}
        subtext="Schedule your free inspection today. We'll create a custom treatment plan for your property."
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.metaDescription,
            provider: {
              "@type": "LocalBusiness",
              name: SITE_CONFIG.name,
              telephone: SITE_CONFIG.phone,
              areaServed: {
                "@type": "County",
                name: "Orange County, CA",
              },
            },
            areaServed: {
              "@type": "County",
              name: "Orange County, CA",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
