"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, RotateCcw, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const locationOptions = [
  { label: "Kitchen", value: "kitchen", image: "/images/quiz/kitchen.jpg" },
  { label: "Bathroom", value: "bathroom", image: "/images/quiz/bathroom.jpg" },
  { label: "Attic", value: "attic", image: "/images/quiz/attic.jpg" },
  { label: "Yard", value: "yard", image: "/images/quiz/yard.jpg" },
  { label: "Bedroom", value: "bedroom", image: "/images/quiz/bedroom.jpg" },
  { label: "Garage", value: "garage", image: "/images/quiz/garage.jpg" },
];

const appearanceOptions = [
  { label: "Small with antennae", value: "antennae", image: "/images/pests/ant.jpg" },
  { label: "Large and furry", value: "furry", image: "/images/pests/raccoon.jpg" },
  { label: "Tiny jumping insect", value: "jumping", image: "/images/pests/flea.jpg" },
  { label: "Flying insect", value: "flying", image: "/images/pests/fly.jpg" },
  { label: "Has 8 legs", value: "eight-legs", image: "/images/pests/spider-black-widow.jpg" },
  { label: "Crawls fast", value: "crawls-fast", image: "/images/pests/cockroach.jpg" },
];

const quantityOptions = [
  { label: "Just one", value: "one", image: null, icon: "1" },
  { label: "A few", value: "few", image: null, icon: "3-5" },
  { label: "Many / Infestation", value: "many", image: null, icon: "10+" },
];

interface QuizResult {
  name: string;
  slug: string;
  description: string;
  serviceSlug: string;
  serviceName: string;
  image: string;
}

const resultMap: Record<string, QuizResult> = {
  "kitchen-antennae": { name: "Argentine Ants", slug: "argentine-ants", description: "Small trailing ants in the kitchen are most likely Argentine ants. They form massive colonies and are attracted to sweet foods and moisture.", serviceSlug: "ant-control", serviceName: "Ant Control", image: "/images/pests/ant.jpg" },
  "kitchen-crawls-fast": { name: "German Cockroaches", slug: "german-cockroaches", description: "Fast-moving insects in the kitchen are likely German cockroaches. They thrive in warm, humid areas near food and water sources.", serviceSlug: "cockroach-control", serviceName: "Cockroach Control", image: "/images/pests/cockroach.jpg" },
  "kitchen-flying": { name: "House Flies", slug: "house-flies", description: "Flying insects in the kitchen are most commonly house flies, attracted to food and organic waste.", serviceSlug: "fly-control", serviceName: "Fly Control", image: "/images/pests/fly.jpg" },
  "bathroom-antennae": { name: "Argentine Ants", slug: "argentine-ants", description: "Ants in the bathroom are typically Argentine ants attracted to moisture. They commonly trail along pipes and baseboards.", serviceSlug: "ant-control", serviceName: "Ant Control", image: "/images/pests/ant.jpg" },
  "bathroom-crawls-fast": { name: "American Cockroaches", slug: "american-cockroaches", description: "Large, fast-crawling insects in the bathroom are likely American cockroaches. They enter through drains and thrive in moist environments.", serviceSlug: "cockroach-control", serviceName: "Cockroach Control", image: "/images/pests/american-cockroach.jpg" },
  "bathroom-eight-legs": { name: "Black Widows", slug: "black-widows", description: "Spiders in dark, sheltered bathroom areas could be black widows. Check for messy webs in corners and under cabinets.", serviceSlug: "spider-control", serviceName: "Spider Control", image: "/images/pests/spider-black-widow.jpg" },
  "attic-furry": { name: "Roof Rats", slug: "roof-rats", description: "Large furry animals in the attic are most likely roof rats. They are excellent climbers and frequently nest in attic insulation.", serviceSlug: "rodent-control", serviceName: "Rodent Control", image: "/images/pests/roof-rat.jpg" },
  "attic-crawls-fast": { name: "Squirrels", slug: "squirrels", description: "Fast-moving creatures in the attic during daytime are likely squirrels. They gnaw constantly and can cause serious structural damage.", serviceSlug: "wildlife-trapping", serviceName: "Wildlife Trapping", image: "/images/pests/squirrel.jpg" },
  "attic-eight-legs": { name: "Black Widows", slug: "black-widows", description: "Eight-legged creatures in attics may be black widows or brown recluses. Both prefer dark, undisturbed spaces.", serviceSlug: "spider-control", serviceName: "Spider Control", image: "/images/pests/spider-black-widow.jpg" },
  "yard-antennae": { name: "Fire Ants", slug: "fire-ants", description: "Ants in the yard, especially with visible mounds, are likely fire ants. Their stings are painful and can cause allergic reactions.", serviceSlug: "ant-control", serviceName: "Ant Control", image: "/images/pests/fire-ant.jpg" },
  "yard-furry": { name: "Raccoons", slug: "raccoons", description: "Large furry animals in the yard at night are likely raccoons. They raid trash cans and can become aggressive.", serviceSlug: "wildlife-trapping", serviceName: "Wildlife Trapping", image: "/images/pests/raccoon.jpg" },
  "yard-jumping": { name: "Fleas", slug: "fleas", description: "Tiny jumping insects in the yard are likely fleas, especially if you have pets.", serviceSlug: "tick-flea-treatment", serviceName: "Tick & Flea Treatment", image: "/images/pests/flea.jpg" },
  "yard-flying": { name: "Yellow Jackets", slug: "yellow-jackets", description: "Aggressive flying insects in the yard are likely yellow jackets. They often nest underground and become aggressive in late summer.", serviceSlug: "wasp-control", serviceName: "Wasp Control", image: "/images/pests/yellow-jacket.jpg" },
  "yard-eight-legs": { name: "Ticks", slug: "ticks", description: "Eight-legged creatures in the yard are likely ticks. They wait in tall grass for hosts to pass by.", serviceSlug: "tick-flea-treatment", serviceName: "Tick & Flea Treatment", image: "/images/pests/tick.jpg" },
  "bedroom-jumping": { name: "Bed Bugs", slug: "bed-bugs", description: "Tiny insects in the bedroom that leave itchy bites are likely bed bugs. They hide in mattress seams and feed at night.", serviceSlug: "bed-bug-treatment", serviceName: "Bed Bug Treatment", image: "/images/pests/bed-bug.jpg" },
  "bedroom-antennae": { name: "Bed Bugs", slug: "bed-bugs", description: "Small insects near beds are likely bed bugs. Check mattress seams and headboards for dark fecal spots.", serviceSlug: "bed-bug-treatment", serviceName: "Bed Bug Treatment", image: "/images/pests/bed-bug.jpg" },
  "bedroom-crawls-fast": { name: "German Cockroaches", slug: "german-cockroaches", description: "Fast-crawling insects in bedrooms may be cockroaches that have spread from the kitchen.", serviceSlug: "cockroach-control", serviceName: "Cockroach Control", image: "/images/pests/cockroach.jpg" },
  "bedroom-eight-legs": { name: "Brown Recluses", slug: "brown-recluses", description: "Spiders in the bedroom, especially in closets, could be brown recluses. Their bites can be serious.", serviceSlug: "spider-control", serviceName: "Spider Control", image: "/images/pests/spider-brown-recluse.jpg" },
  "garage-furry": { name: "Opossums", slug: "opossums", description: "Large furry animals in the garage are likely opossums or raccoons seeking shelter.", serviceSlug: "wildlife-trapping", serviceName: "Wildlife Trapping", image: "/images/pests/opossum.jpg" },
  "garage-eight-legs": { name: "Black Widows", slug: "black-widows", description: "Spiders in the garage, especially dark corners, are frequently black widows.", serviceSlug: "spider-control", serviceName: "Spider Control", image: "/images/pests/spider-black-widow.jpg" },
  "garage-crawls-fast": { name: "American Cockroaches", slug: "american-cockroaches", description: "Fast-crawling insects in the garage are likely American cockroaches.", serviceSlug: "cockroach-control", serviceName: "Cockroach Control", image: "/images/pests/american-cockroach.jpg" },
  "garage-antennae": { name: "Argentine Ants", slug: "argentine-ants", description: "Trailing ants in the garage are likely Argentine ants entering through foundation cracks.", serviceSlug: "ant-control", serviceName: "Ant Control", image: "/images/pests/ant.jpg" },
};

const fallbacks: Record<string, QuizResult> = {
  antennae: { name: "Argentine Ants", slug: "argentine-ants", description: "Based on your description, you likely have an ant problem. Argentine ants are the most common species in Orange County.", serviceSlug: "ant-control", serviceName: "Ant Control", image: "/images/pests/ant.jpg" },
  furry: { name: "Roof Rats", slug: "roof-rats", description: "Based on your description, you may have a rodent or wildlife issue.", serviceSlug: "rodent-control", serviceName: "Rodent Control", image: "/images/pests/roof-rat.jpg" },
  jumping: { name: "Fleas", slug: "fleas", description: "Tiny jumping insects are most commonly fleas, especially in homes with pets.", serviceSlug: "tick-flea-treatment", serviceName: "Tick & Flea Treatment", image: "/images/pests/flea.jpg" },
  flying: { name: "House Flies", slug: "house-flies", description: "Flying insects indoors are commonly house flies or fruit flies.", serviceSlug: "fly-control", serviceName: "Fly Control", image: "/images/pests/fly.jpg" },
  "eight-legs": { name: "Black Widows", slug: "black-widows", description: "Eight-legged pests are spiders or ticks. In OC, black widows are the most concerning.", serviceSlug: "spider-control", serviceName: "Spider Control", image: "/images/pests/spider-black-widow.jpg" },
  "crawls-fast": { name: "German Cockroaches", slug: "german-cockroaches", description: "Fast-crawling pests are typically cockroaches.", serviceSlug: "cockroach-control", serviceName: "Cockroach Control", image: "/images/pests/cockroach.jpg" },
};

export default function PestQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function getResult(): QuizResult {
    const [location, appearance, quantity] = answers;
    const key = `${location}-${appearance}`;
    const result = resultMap[key] || fallbacks[appearance] || {
      name: "Unknown Pest", slug: "argentine-ants",
      description: "We couldn't make a definitive identification. We recommend scheduling a free inspection.",
      serviceSlug: "ant-control", serviceName: "Pest Control", image: "/images/pests/ant.jpg",
    };
    if (quantity === "many") {
      return { ...result, description: result.description + " Given the large numbers, this indicates an established infestation requiring professional treatment." };
    }
    return result;
  }

  function handleSelect(value: string) {
    setAnswers([...answers, value]);
    setStep(step + 1);
  }

  const showResult = step >= 3;
  const result = showResult ? getResult() : null;

  const currentOptions: { label: string; value: string; image: string | null; icon?: string }[] =
    step === 0 ? locationOptions : step === 1 ? appearanceOptions : quantityOptions;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <img src="/images/heroes/hero-quiz.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 text-center sm:pb-24 sm:pt-20">
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
            Interactive Tool
          </span>
          <h1 className="mx-auto max-w-3xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Pest Do I Have?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Answer 3 quick questions to identify your pest. It only takes 30 seconds.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Progress */}
          {!showResult && (
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="font-semibold text-foreground">Step {step + 1} of 3</span>
                <span className="text-muted">{Math.round(((step + 1) / 3) * 100)}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${((step + 1) / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Steps */}
          {!showResult && (
            <div>
              <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
                {step === 0 ? "Where are you seeing it?" : step === 1 ? "What does it look like?" : "How many have you seen?"}
              </h2>
              <div className={`grid gap-4 ${currentOptions.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                {currentOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                  >
                    {option.image ? (
                      <div className="relative h-36 w-full overflow-hidden sm:h-40">
                        <img
                          src={option.image}
                          alt={option.label}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute bottom-3 left-0 right-0 text-center text-base font-bold text-white">
                          {option.label}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 p-8">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 font-[family-name:var(--font-display)] text-2xl font-extrabold text-primary">
                          {option.icon}
                        </span>
                        <span className="text-base font-semibold text-foreground group-hover:text-primary">
                          {option.label}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => { setStep(step - 1); setAnswers(answers.slice(0, -1)); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" /> Go Back
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Result */}
          {showResult && result && (
            <div className="text-center">
              <div className="mx-auto mb-8 h-48 w-48 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl sm:h-56 sm:w-56">
                <img src={result.image} alt={result.name} className="h-full w-full object-cover" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-foreground sm:text-4xl">
                You Likely Have: <span className="text-primary">{result.name}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                {result.description}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-primary-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_8px_25px_rgba(212,168,67,0.4)]"
                >
                  Book Free Inspection <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/30 px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
                >
                  <Phone className="h-5 w-5" /> Call {SITE_CONFIG.phone}
                </a>
              </div>

              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href={`/pests/${result.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
                  Learn About {result.name} <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="hidden text-muted sm:inline">|</span>
                <Link href={`/services/${result.serviceSlug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
                  View {result.serviceName} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 border-t border-border pt-8">
                <button
                  onClick={() => { setStep(0); setAnswers([]); }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
                >
                  <RotateCcw className="h-4 w-4" /> Take the Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
