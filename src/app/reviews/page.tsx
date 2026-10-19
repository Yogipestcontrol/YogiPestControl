import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { heroImages } from "@/lib/images";
import { GOOGLE_PROFILE, GOOGLE_REVIEWS, HOMEADVISOR_PROFILE, reviewMonth } from "@/data/reviews";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Customer Reviews: 5.0 on Google",
  description:
    "Real Google reviews from Orange County customers. Rated 5.0 on Google for roof rats, rodent exclusion, fleas, skunks and monthly service.",
  path: "/reviews",
});

function StarRating({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${star <= rating ? "fill-accent text-accent" : "fill-border text-border"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
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
            Real reviews from real Orange County customers, straight from our Google
            Business Profile.
          </p>
        </div>
      </section>

      {/* Aggregate Rating */}
      <section className="border-b border-border bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
            <div>
              <div className="text-5xl font-extrabold text-foreground">
                {GOOGLE_PROFILE.rating.toFixed(1)}
              </div>
              <div className="mt-1 text-sm text-muted">out of 5 on Google</div>
            </div>
            <div>
              <StarRating rating={Math.round(GOOGLE_PROFILE.rating)} size="h-7 w-7" />
              <div className="mt-1 text-sm text-muted">
                {GOOGLE_PROFILE.reviewCount} Google reviews &middot; also{" "}
                {HOMEADVISOR_PROFILE.rating.toFixed(1)} from {HOMEADVISOR_PROFILE.reviewCount} reviews on
                HomeAdvisor
              </div>
              <a
                href={GOOGLE_PROFILE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light"
              >
                See all reviews on Google <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {GOOGLE_REVIEWS.map((review) => (
              <figure
                key={review.name + review.date}
                className="mb-6 break-inside-avoid rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <StarRating rating={review.rating} />
                  {review.service && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {review.service}
                    </span>
                  )}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted">
                    Google review &middot; {reviewMonth(review.date)}
                  </div>
                </figcaption>
              </figure>
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
            We&apos;re a small, owner-run business and every review helps other Orange
            County homeowners find us. It takes about a minute.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={GOOGLE_PROFILE.writeReviewUrl}
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
