import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Bug, Rat, Shield } from "lucide-react";
import { AnimateIn, StaggerGrid, StaggerItem } from "@/components/animations";
import { CTABanner } from "@/components/CTABanner";
import { pestsData } from "@/data/pests";
import { heroImages } from "@/lib/images";
import { pestImages } from "@/lib/pest-images";

export const metadata: Metadata = {
  title: "Pest Library: Identify Common Orange County Pests",
  description:
    "Identify common pests in Orange County, CA. Learn about ants, rats, cockroaches, spiders, wasps, bed bugs, wildlife, and more. Free pest identification help from Yogi's Pest Control.",
};

// Group pests by category
const pestCategories = [
  {
    name: "Rodents",
    icon: Rat,
    description: "Rats, mice, and other rodents that invade Orange County homes",
    pests: pestsData.filter((p) =>
      ["norway-rats", "roof-rats"].includes(p.slug)
    ),
  },
  {
    name: "Insects",
    icon: Bug,
    description: "Common household insects found throughout Orange County",
    pests: pestsData.filter((p) =>
      [
        "argentine-ants",
        "fire-ants",
        "german-cockroaches",
        "american-cockroaches",
        "mosquitoes",
        "house-flies",
        "bed-bugs",
        "fleas",
        "ticks",
      ].includes(p.slug)
    ),
  },
  {
    name: "Stinging Pests",
    icon: Shield,
    description: "Wasps, bees, and other stinging insects in Orange County",
    pests: pestsData.filter((p) =>
      ["paper-wasps", "yellow-jackets", "honeybees"].includes(p.slug)
    ),
  },
  {
    name: "Spiders",
    icon: Bug,
    description: "Common and venomous spiders found in Orange County homes",
    pests: pestsData.filter((p) =>
      ["black-widows", "brown-recluses"].includes(p.slug)
    ),
  },
  {
    name: "Wildlife",
    icon: Shield,
    description: "Nuisance wildlife that enters Orange County properties",
    pests: pestsData.filter((p) =>
      ["raccoons", "opossums", "squirrels"].includes(p.slug)
    ),
  },
];

export default function PestsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-primary">
        <Image
          src={heroImages.pests}
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/50 to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 text-center sm:pb-28 sm:pt-40">
          <AnimateIn delay={0.1} direction="none">
            <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              Identification Guide
            </span>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <h1 className="mx-auto max-w-4xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Orange County Pest Library
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.5}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Identify common pests, understand their behavior, and learn when
              to call a professional. Click any pest for detailed information.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ QUICK STATS ═══ */}
      <section className="border-b border-border bg-surface py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-16">
          <div className="text-center">
            <span className="text-2xl font-extrabold text-primary">{pestsData.length}</span>
            <p className="text-xs text-muted">Pest Profiles</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-extrabold text-primary">{pestCategories.length}</span>
            <p className="text-xs text-muted">Categories</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-extrabold text-primary">Free</span>
            <p className="text-xs text-muted">Pest ID Help</p>
          </div>
          <Link
            href="/pest-quiz"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-lg"
          >
            <Search className="h-4 w-4" />
            Take the Pest Quiz
          </Link>
        </div>
      </section>

      {/* ═══ PEST CATEGORIES ═══ */}
      {pestCategories.map((category, catIdx) => (
        <section
          key={category.name}
          className={`py-16 sm:py-20 ${catIdx % 2 === 0 ? "bg-background" : "bg-surface-alt"}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <AnimateIn>
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                    {category.name}
                  </span>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {category.description}
                  </h2>
                </div>
              </div>
            </AnimateIn>

            <StaggerGrid
              className={`grid gap-6 ${
                category.pests.length <= 3
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {category.pests.map((pest) => (
                <StaggerItem key={pest.slug}>
                  <Link
                    href={`/pests/${pest.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Image with gradient overlay and name */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={pestImages[pest.slug] || "/images/pests/rat.jpg"}
                        alt={pest.commonName}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-lg font-bold text-white">
                          {pest.commonName}
                        </h3>
                        <p className="text-xs italic text-white/70">
                          {pest.scientificName}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                        {pest.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary-light">
                          Full Profile{" "}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {category.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>
      ))}

      {/* ═══ QUIZ CTA ═══ */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="grid items-center lg:grid-cols-2">
              <div className="relative h-64 lg:h-full lg:min-h-[380px]">
                <Image
                  src={heroImages.quiz || heroImages.homepage}
                  alt="Identify your pest"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-12 lg:p-16">
                <AnimateIn>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                    Interactive Tool
                  </span>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Can&apos;t Identify Your Pest?
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    Answer 3 quick questions and we&apos;ll tell you exactly what
                    pest you&apos;re dealing with — plus recommended next steps.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/pest-quiz"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-xl"
                    >
                      Take the Pest Quiz <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        headline="Need Professional Pest Control?"
        subtext="Our licensed technicians handle every pest in the library above. Book your free inspection today."
      />
    </>
  );
}
