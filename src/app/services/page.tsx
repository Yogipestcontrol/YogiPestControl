import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { SERVICES } from "@/lib/constants";
import { heroImages } from "@/lib/images";
import { servicePestImages } from "@/lib/pest-images";

export const metadata: Metadata = {
  title: "Pest Control Services in Orange County, CA",
  description:
    "Complete pest control services for Orange County homes and businesses. Rodents, ants, cockroaches, bed bugs, wildlife removal, exclusion repairs & more. Call 714-323-8262.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.services}
          alt="Yogi's Pest Control team"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Our Pest Control Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            From rodents to wildlife, we provide comprehensive pest management solutions
            for homes and businesses throughout Orange County, CA.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden bg-surface-alt">
                  <Image
                    src={servicePestImages[service.slug] || "/images/pests/rat.jpg"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary">
                    {service.name}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-muted">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
