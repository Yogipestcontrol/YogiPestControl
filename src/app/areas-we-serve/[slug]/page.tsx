import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { CITY_DATA } from "@/data/cities";
import { CTABanner } from "@/components/CTABanner";
import { GuaranteeBadges } from "@/components/GuaranteeBadges";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { getCityHeroImage } from "@/lib/images";

export async function generateStaticParams() {
  return CITY_DATA.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);

  if (!city) {
    return <div className="py-32 text-center text-xl">City not found</div>;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={getCityHeroImage(slug)}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:pb-32 sm:pt-20">
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas-we-serve" className="hover:text-white/70">Areas We Serve</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{city.name}</span>
          </nav>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">
            <MapPin className="h-4 w-4 text-accent" />
            {city.name}, {city.state}
          </div>
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            Pest Control in {city.name}, CA
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/70">
            Professional pest control services for homes and businesses in {city.name}. Same-day service, eco-friendly treatments, 100% satisfaction guaranteed.
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

      <GuaranteeBadges />

      {/* Content */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* City overview */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Pest Control Services in {city.name}
                </h2>
                <p className="text-base leading-relaxed text-muted">{city.content}</p>
              </div>

              {/* Services available */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Services Available in {city.name}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Google Maps */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Serving {city.name} & Surrounding Areas
                </h2>
                <div className="overflow-hidden rounded-xl border border-border">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d${city.lng}!3d${city.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${city.name}, CA`}
                  />
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Pest Control FAQs for {city.name}
                </h2>
                <div className="space-y-4">
                  {city.faqs.map((faq, i) => (
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
              <div className="sticky top-32 space-y-6">
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    Get a Free Quote in {city.name}
                  </h3>
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
        headline={`Need Pest Control in ${city.name}?`}
        subtext="Schedule your free inspection today. We serve all of Orange County with same-day availability."
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: SITE_CONFIG.name,
            telephone: SITE_CONFIG.phone,
            email: SITE_CONFIG.email,
            url: SITE_CONFIG.url,
            areaServed: {
              "@type": "City",
              name: `${city.name}, CA`,
              geo: {
                "@type": "GeoCoordinates",
                latitude: city.lat,
                longitude: city.lng,
              },
            },
            openingHours: "Mo-Su 08:00-20:00",
            priceRange: "$$",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: city.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </>
  );
}
