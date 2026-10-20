import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { NightToDayHero } from "@/components/home/NightToDayHero";
import { ThreatDeck } from "@/components/home/ThreatDeck";
import { JobSteps } from "@/components/home/JobSteps";
import { CoverageMap } from "@/components/home/CoverageMap";
import { faqJsonLd } from "@/components/ContentBlocks";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { GOOGLE_PROFILE, GOOGLE_REVIEWS, HOMEADVISOR_PROFILE, TOTAL_REVIEWS } from "@/data/reviews";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pest Control in Orange County, CA | Yogi's Pest Control",
  absoluteTitle: true,
  description:
    "Licensed, owner-operated pest control in Orange County, based in Tustin. Rodents, ants, roaches, bees, mosquitoes & wildlife. 5.0 on Google. Call 714-323-8262.",
  path: "/",
  languages: { "en-US": "/", "es-US": "/es", "x-default": "/" },
});

// Short reviews read well side by side; the long rodent stories are used in JobSteps.
const wallReviews = GOOGLE_REVIEWS.filter((r) => r.text.length < 260);

const FAQS = [
  {
    question: "How much does pest control cost in Orange County?",
    answer:
      "A one-time treatment in Orange County typically runs $150 to $300 depending on the pest and the size of the property. Recurring plans typically run $100 to $200 per visit. Inspections are free, so you get an exact quote before any work starts.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Often, yes. We're based in Tustin and work 7 days a week, 8 AM to 8 PM, so same-day visits are usually possible across Orange County. For rodents, bees or wasps, call (714) 323-8262 and we'll tell you the soonest time we can be there.",
  },
  {
    question: "Are your treatments safe around kids and pets?",
    answer:
      "We use EPA-registered products and Integrated Pest Management (IPM) techniques that keep chemical use to what the job needs. Every product is applied according to its label and California Department of Pesticide Regulation rules, and we tell you how long kids and pets should stay off treated areas (usually until sprays have dried).",
  },
  {
    question: "What areas do you serve?",
    answer:
      "All 34 cities in Orange County, from our base in Tustin. We work most often in Irvine, Costa Mesa, Newport Beach, Santa Ana, Orange, Garden Grove, Anaheim, Fullerton, Buena Park, Stanton and Huntington Beach, for homes and businesses.",
  },
  {
    question: "What pests do you handle?",
    answer:
      "Roof rats, Norway rats and mice, Argentine ants and fire ants, German and American cockroaches, bed bugs, black widows and other spiders, wasps and bees, mosquitoes, flies, fleas and ticks, and wildlife such as raccoons, opossums, skunks and squirrels.",
  },
  {
    question: "Is Yogi's Pest Control licensed?",
    answer: `Yes. Owner Yobani Arreola is licensed by the California Structural Pest Control Board (operator license ${SITE_CONFIG.license}). You can verify any license at pestboard.ca.gov.`,
  },
];

export default function Home() {
  return (
    <>
      <NightToDayHero rating={GOOGLE_PROFILE.rating} reviewCount={TOTAL_REVIEWS} />

      <ThreatDeck />

      <JobSteps />

      {/* Meet Yobani */}
      <section className="cine-curtain bg-[#EEF2EC] py-20 text-[#10201A] sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:order-2">
            <Image
              src="/images/heroes/real-photo-1.jpg"
              alt="Yobani in a protective bee suit removing a honey bee colony from inside a wall"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-condensed)] text-[clamp(2.25rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] [font-stretch:75%]">
              The person you call is the person who shows up
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-[#10201A]/75">
              <p>
                Yogi&apos;s Pest Control is Yobani Arreola, a pest control operator licensed by the California Structural
                Pest Control Board ({SITE_CONFIG.license}). He answers the phone, does the inspection and does the work.
              </p>
              <p>
                That&apos;s why customers mention him by name: a skunk smell traced the same day at no charge, 16 roof rats
                cleared from an attic, a monthly plan that finally felt personal after years with a big company.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/about" className="text-base font-semibold text-[#1B4332] underline decoration-[#1B4332]/25 underline-offset-4 hover:decoration-[#1B4332]">
                More about Yobani
              </Link>
              <Link href="/reviews" className="text-base font-semibold text-[#1B4332] underline decoration-[#1B4332]/25 underline-offset-4 hover:decoration-[#1B4332]">
                Customer reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative bg-[#1B4332] pb-28 pt-20 text-white sm:pb-36 sm:pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-[family-name:var(--font-condensed)] text-[clamp(2.25rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] [font-stretch:75%]">
              {TOTAL_REVIEWS} reviews, every one five stars
            </h2>
            <a
              href={GOOGLE_PROFILE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-base font-semibold text-[#D4A843] hover:text-[#E5BE5F]"
            >
              Read all {GOOGLE_PROFILE.reviewCount} on Google
            </a>
          </div>
          <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
            {wallReviews.map((r) => (
              <figure key={r.name + r.date} className="mb-6 break-inside-avoid rounded-lg bg-white/[0.06] p-6">
                <div className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4A843] text-[#D4A843]" />
                  ))}
                </div>
                <blockquote className="mt-3 leading-relaxed text-white/90">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm text-white/55">{r.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/60">
            Also rated {HOMEADVISOR_PROFILE.rating.toFixed(1)} from {HOMEADVISOR_PROFILE.reviewCount} reviews on HomeAdvisor.{" "}
            <Link href="/reviews" className="font-semibold text-white underline underline-offset-4">
              See all reviews
            </Link>
          </p>
        </div>
      </section>

      <CoverageMap />

      {/* Services index + FAQ */}
      <section className="relative bg-[#0B1A14] pb-28 pt-20 text-white sm:pb-36 sm:pt-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <div>
            <h2 className="text-2xl font-bold">Services</h2>
            <ul className="mt-5 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/85 hover:text-[#D4A843] hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 text-sm">
              <Link href="/pest-control-cost" className="block font-semibold text-white/85 hover:text-[#D4A843] hover:underline">
                Pricing guide
              </Link>
              <Link href="/pest-quiz" className="block font-semibold text-white/85 hover:text-[#D4A843] hover:underline">
                Not sure what you have? Take the 3-question quiz
              </Link>
              <Link href="/es" className="block font-semibold text-white/85 hover:text-[#D4A843] hover:underline" hrefLang="es">
                Servicio en español
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-condensed)] text-[clamp(2rem,4vw,3.25rem)] font-extrabold uppercase leading-[0.95] [font-stretch:75%]">
              Questions people ask first
            </h2>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {FAQS.map((f) => (
                <details key={f.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4A843]">
                    {f.question}
                    <span aria-hidden className="text-2xl leading-none text-[#D4A843] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl leading-relaxed text-white/70">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing call */}
      <section className="cine-curtain bg-[#D4A843] py-20 text-[#0B1A14] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="max-w-xl text-lg text-[#0B1A14]/75">Hearing it again tonight? Call now and we&apos;ll tell you the soonest we can be there.</p>
          <a
            href={SITE_CONFIG.phoneTel}
            className="mt-4 inline-flex items-center gap-4 font-[family-name:var(--font-condensed)] text-[clamp(3rem,10vw,8rem)] font-extrabold leading-none text-[#1B4332] [font-stretch:70%] hover:text-[#0B1A14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1A14]"
          >
            <Phone className="h-[0.6em] w-[0.6em]" aria-hidden />
            {SITE_CONFIG.phone}
          </a>
          <p className="mt-6 text-[#0B1A14]/75">
            Or{" "}
            <Link href="/book" className="font-semibold text-[#0B1A14] underline underline-offset-4">
              book a free inspection online
            </Link>
            . Open 7 days, 8AM to 8PM.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
    </>
  );
}
