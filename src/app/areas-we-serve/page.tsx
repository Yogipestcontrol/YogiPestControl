import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { citiesData } from "@/data/cities";
import { OC_CITIES } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Areas We Serve in Orange County, CA",
  description:
    "Yogi's Pest Control serves all 34 cities in Orange County, CA. Find pest control services in your city — Anaheim, Irvine, Huntington Beach, and more. Call 714-323-8262.",
};

const priorityGroups = [
  { label: "High Priority Service Areas", priority: "high" as const },
  { label: "Mid-Size Cities", priority: "medium" as const },
  { label: "Communities We Serve", priority: "low" as const },
];

const cityPopMap = Object.fromEntries(
  OC_CITIES.map((c) => [c.slug, c.population])
);

export default function AreasWeServePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.areas}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Areas We Serve in Orange County
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Professional pest control services for every city and community across Orange County, CA. Click your city to learn more about local pest issues.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          {priorityGroups.map(({ label, priority }) => {
            const cities = citiesData.filter((c) => c.priority === priority);
            return (
              <div key={priority} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">{label}</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {cities.map((city) => {
                    const pop = cityPopMap[city.slug];
                    return (
                      <Link
                        key={city.slug}
                        href={`/areas-we-serve/${city.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <span className="font-semibold text-foreground group-hover:text-primary">{city.name}</span>
                            {pop && (
                              <span className="block text-xs text-muted">{(pop / 1000).toFixed(0)}K residents</span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner
        headline="Pest Problems in Your City?"
        subtext="No matter where you are in Orange County, we've got you covered with same-day service."
      />
    </>
  );
}
