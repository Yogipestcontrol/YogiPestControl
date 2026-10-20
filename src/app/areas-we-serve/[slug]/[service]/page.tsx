import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { CITY_DATA } from "@/data/cities";
import { servicesData } from "@/data/services";
import { CITY_SERVICE_PAGES, getCityServicePage } from "@/data/city-services";
import { GOOGLE_PROFILE } from "@/data/reviews";
import { CTABanner } from "@/components/CTABanner";
import { ContentSections, FAQList, PriceTable, faqJsonLd } from "@/components/ContentBlocks";
import { SITE_CONFIG } from "@/lib/constants";
import { getCityHeroImage } from "@/lib/images";
import { pageMeta, breadcrumbJsonLd, BUSINESS_ID } from "@/lib/seo";

// Only city × service pairs with real search demand get a page; everything else 404s.
export const dynamicParams = false;

export async function generateStaticParams() {
  return CITY_SERVICE_PAGES.map((p) => ({ slug: p.citySlug, service: p.serviceSlug }));
}

type Params = Promise<{ slug: string; service: string }>;

function resolve(slug: string, serviceSlug: string) {
  const page = getCityServicePage(slug, serviceSlug);
  const city = CITY_DATA.find((c) => c.slug === slug);
  const service = servicesData.find((s) => s.slug === serviceSlug);
  if (!page || !city || !service) notFound();
  return { page, city, service };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const { page } = resolve(slug, serviceSlug);
  return pageMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/areas-we-serve/${page.citySlug}/${page.serviceSlug}`,
  });
}

export default async function CityServicePage({ params }: { params: Params }) {
  const { slug, service: serviceSlug } = await params;
  const { page, city, service } = resolve(slug, serviceSlug);
  const path = `/areas-we-serve/${city.slug}/${service.slug}`;

  return (
    <>
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image src={getCityHeroImage(city.slug)} alt="" fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:pb-32 sm:pt-20">
          <nav className="mb-6 text-sm text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas-we-serve" className="hover:text-white/70">Areas We Serve</Link>
            <span className="mx-2">/</span>
            <Link href={`/areas-we-serve/${city.slug}`} className="hover:text-white/70">{city.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{service.name}</span>
          </nav>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">
            <MapPin className="h-4 w-4 text-accent" />
            {city.name}, CA &middot; {GOOGLE_PROFILE.rating.toFixed(1)}★ on Google
          </div>
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{page.h1}</h1>
          <p className="mb-8 max-w-2xl text-lg text-white/70">{page.heroSubtext}</p>
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

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-12 rounded-xl border-l-4 border-accent bg-surface p-6">
                <p className="text-base leading-relaxed text-foreground">{page.summary}</p>
              </div>

              <ContentSections sections={page.sections} />
              <PriceTable rows={page.pricing} heading={`${service.name} Cost in ${city.name}`} />
              <FAQList faqs={page.faqs} heading={`${service.name} in ${city.name}: FAQs`} />

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href={`/areas-we-serve/${city.slug}`} className="font-medium text-primary hover:text-primary-light">
                  All pest control in {city.name}
                </Link>
                <Link href={`/services/${service.slug}`} className="font-medium text-primary hover:text-primary-light">
                  {service.name} across Orange County
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted">Page updated {page.updated}</p>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-32 rounded-xl border border-border bg-surface p-6">
                <h2 className="mb-2 text-lg font-bold text-foreground">{service.name} in {city.name}</h2>
                <p className="mb-4 text-sm text-muted">
                  Licensed operator {SITE_CONFIG.license}. Free inspection, same-day when available.
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
            </aside>
          </div>
        </div>
      </section>

      <CTABanner headline={`Need ${service.name.toLowerCase()} in ${city.name}?`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              ["Areas We Serve", "/areas-we-serve"],
              [city.name, `/areas-we-serve/${city.slug}`],
              [service.name, path],
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.h1,
            serviceType: service.name,
            description: page.summary,
            url: `${SITE_CONFIG.url}${path}`,
            provider: { "@id": BUSINESS_ID },
            areaServed: {
              "@type": "City",
              name: `${city.name}, CA`,
              geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faqs)) }}
      />
    </>
  );
}
