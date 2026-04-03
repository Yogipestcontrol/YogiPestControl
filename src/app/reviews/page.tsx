import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { SITE_CONFIG } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Customer Reviews | Yogi's Pest Control Orange County",
  description:
    "See what Orange County homeowners say about Yogi's Pest Control. 4.9/5 star rating from verified customers. Read reviews and book your free inspection today.",
};

interface Review {
  name: string;
  city: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Sarah M.",
    city: "Irvine",
    date: "2025-11-15",
    rating: 5,
    text: "Yogi's was incredibly responsive. They came the same day I called and took care of our ant problem quickly. The technician was professional, explained everything, and the ants haven't come back since.",
  },
  {
    name: "David L.",
    city: "Huntington Beach",
    date: "2025-10-28",
    rating: 5,
    text: "Had a serious rodent issue in our attic. They did a thorough inspection, sealed all the entry points, and set up traps. Problem solved within a week. Highly recommend their exclusion repair service.",
  },
  {
    name: "Jennifer K.",
    city: "Anaheim",
    date: "2025-10-10",
    rating: 5,
    text: "We had wasps building nests around our patio every summer. Yogi's removed all the nests and treated the area so they wouldn't come back. Great service at a fair price.",
  },
  {
    name: "Michael R.",
    city: "Costa Mesa",
    date: "2025-09-22",
    rating: 5,
    text: "Finally found a pest control company I can trust. Transparent pricing, eco-friendly products, and they actually follow up to make sure the treatment worked. Five stars all the way.",
  },
  {
    name: "Lisa T.",
    city: "Fullerton",
    date: "2025-09-05",
    rating: 5,
    text: "Called about a cockroach problem and they had someone out within hours. The technician was thorough and explained what products he was using and why. Haven't seen a single roach since.",
  },
  {
    name: "Robert H.",
    city: "Newport Beach",
    date: "2025-08-18",
    rating: 4,
    text: "Very professional service. They handled our spider issue effectively. The only reason for 4 stars is scheduling took a couple of days, but the actual service was excellent.",
  },
  {
    name: "Amanda P.",
    city: "Orange",
    date: "2025-08-01",
    rating: 5,
    text: "We had bed bugs and were losing our minds. Yogi's came in, did a heat treatment, and completely eradicated them. Worth every penny. The peace of mind alone is priceless.",
  },
  {
    name: "Carlos G.",
    city: "Santa Ana",
    date: "2025-07-15",
    rating: 5,
    text: "As a restaurant owner, pest control is critical. Yogi's handles our commercial account and they are always reliable, discreet, and effective. Best pest control company in OC.",
  },
  {
    name: "Patricia W.",
    city: "Mission Viejo",
    date: "2025-07-02",
    rating: 5,
    text: "Had a family of raccoons in our attic. Yogi's humanely trapped and relocated them, then sealed up all the entry points. They even cleaned out the attic afterward. Amazing service.",
  },
  {
    name: "James D.",
    city: "Garden Grove",
    date: "2025-06-20",
    rating: 5,
    text: "I appreciate that they use eco-friendly products. With young kids in the house, that was a top priority for us. The flea treatment worked perfectly and my kids and dog are safe.",
  },
];

const totalReviews = reviews.length;
const averageRating =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) /
  10;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-accent text-accent"
              : "fill-border text-border"
          }`}
        />
      ))}
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ReviewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toString(),
      reviewCount: totalReviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
      },
      reviewBody: r.text,
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
          src={heroImages.reviews}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Customer Reviews
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            See why Orange County homeowners and businesses trust Yogi&apos;s Pest
            Control to keep their properties pest-free.
          </p>
        </div>
      </section>

      {/* Aggregate Rating */}
      <section className="border-b border-border bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
            <div>
              <div className="text-5xl font-extrabold text-foreground">
                {averageRating}
              </div>
              <div className="mt-1 text-sm text-muted">out of 5</div>
            </div>
            <div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-7 w-7 ${
                      star <= Math.round(averageRating)
                        ? "fill-accent text-accent"
                        : "fill-border text-border"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-1 text-sm text-muted">
                Based on {totalReviews} verified reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name + review.date}
                className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <StarRating rating={review.rating} />
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted">
                    {review.city}, CA &middot; {formatDate(review.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to leave a review */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Had a Great Experience?
          </h2>
          <p className="mb-8 text-lg text-muted">
            We&apos;d love to hear from you! Leave us a review and help other Orange
            County homeowners find trusted pest control.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE_CONFIG.social.google || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
            >
              Leave a Google Review <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Book Free Inspection
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
