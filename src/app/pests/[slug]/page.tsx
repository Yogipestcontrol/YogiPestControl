import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Search,
  RefreshCw,
  Bug,
} from "lucide-react";
import { pestsData } from "@/data/pests";
import { CTABanner } from "@/components/CTABanner";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { heroImages } from "@/lib/images";
import { pestImages } from "@/lib/pest-images";

export async function generateStaticParams() {
  return pestsData.map((pest) => ({ slug: pest.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pest = pestsData.find((p) => p.slug === slug);
  if (!pest) return {};
  return {
    title: `${pest.commonName} (${pest.scientificName}) - Identification & Control`,
    description: `Learn how to identify ${pest.commonName} (${pest.scientificName}) in Orange County. Signs, lifecycle, health risks, and professional treatment options from Yogi's Pest Control.`,
  };
}

export default async function PestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pest = pestsData.find((p) => p.slug === slug);

  if (!pest) {
    return <div className="py-32 text-center text-xl">Pest not found</div>;
  }

  const relatedService = SERVICES.find(
    (s) => s.slug === pest.relatedServiceSlug
  );

  const relatedPests = pestsData
    .filter(
      (p) =>
        p.relatedServiceSlug === pest.relatedServiceSlug &&
        p.slug !== pest.slug
    )
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.pests}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:pb-32 sm:pt-20">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/pests" className="hover:text-white/70">
              Pest Library
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{pest.commonName}</span>
          </nav>
          <h1 className="mb-2 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            {pest.commonName}
          </h1>
          <p className="mb-8 text-lg italic text-white/60">
            {pest.scientificName}
          </p>
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

      {/* Content */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Pest image */}
              {pestImages[pest.slug] && (
                <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl sm:h-80">
                  <Image
                    src={pestImages[pest.slug]}
                    alt={pest.commonName}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Description */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  About {pest.commonName}
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  {pest.description}
                </p>
              </div>

              {/* Identification */}
              <div className="mb-12">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  <Search className="h-6 w-6 text-primary" />
                  How to Identify {pest.commonName}
                </h2>
                <ul className="space-y-3">
                  {pest.identification.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lifecycle */}
              <div className="mb-12">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  Lifecycle
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  {pest.lifecycle}
                </p>
              </div>

              {/* Health Risks */}
              <div className="mb-12">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  Health &amp; Property Risks
                </h2>
                <ul className="space-y-3">
                  {pest.risks.map((risk, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA to related service */}
              {relatedService && (
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-8">
                  <h2 className="mb-2 text-xl font-bold text-foreground">
                    Need Help with {pest.commonName}?
                  </h2>
                  <p className="mb-6 text-sm text-muted">
                    Our professional {relatedService.name.toLowerCase()} service
                    eliminates {pest.commonName.toLowerCase()} and prevents them
                    from coming back. Schedule your free inspection today.
                  </p>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary-dark transition-all hover:bg-accent-light hover:shadow-lg"
                  >
                    View {relatedService.name} Service{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Contact card */}
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    Get a Free Quote
                  </h3>
                  <p className="mb-4 text-sm text-muted">
                    Same-day service available for {pest.commonName.toLowerCase()}{" "}
                    removal.
                  </p>
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

                {/* Related pests */}
                {relatedPests.length > 0 && (
                  <div className="rounded-xl border border-border bg-surface p-6">
                    <h3 className="mb-4 text-lg font-bold text-foreground">
                      Related Pests
                    </h3>
                    <ul className="space-y-3">
                      {relatedPests.map((rp) => (
                        <li key={rp.slug}>
                          <Link
                            href={`/pests/${rp.slug}`}
                            className="group flex items-center justify-between"
                          >
                            <div>
                              <span className="text-sm text-muted transition-colors group-hover:text-primary">
                                {rp.commonName}
                              </span>
                              <span className="block text-xs italic text-muted/60">
                                {rp.scientificName}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pest quiz CTA */}
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    Not Sure What Pest You Have?
                  </h3>
                  <p className="mb-4 text-sm text-muted">
                    Take our quick quiz to identify your pest.
                  </p>
                  <Link
                    href="/pest-quiz"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
                  >
                    Take the Quiz <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Browse all pests */}
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    Browse All Pests
                  </h3>
                  <p className="mb-4 text-sm text-muted">
                    View our complete pest identification library.
                  </p>
                  <Link
                    href="/pests"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
                  >
                    Pest Library <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Need ${pest.commonName} Removed?`}
        subtext="Schedule your free inspection today. We'll create a custom treatment plan for your property."
      />

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${pest.commonName} (${pest.scientificName}) - Identification & Control`,
            description: pest.description,
            author: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_CONFIG.url}/pests/${pest.slug}`,
            },
          }),
        }}
      />
    </>
  );
}
