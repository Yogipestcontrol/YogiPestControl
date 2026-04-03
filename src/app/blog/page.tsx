import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { AnimateIn, StaggerGrid, StaggerItem } from "@/components/animations";
import { CTABanner } from "@/components/CTABanner";
import { blogPosts } from "@/data/blog-posts";
import { blogCategories } from "@/data/blog-categories";
import { heroImages } from "@/lib/images";
import { blogImages } from "@/lib/blog-images";

export const metadata: Metadata = {
  title: "Pest Control Blog | Tips & Guides for Orange County",
  description:
    "Expert pest control tips, identification guides, and seasonal advice for Orange County homeowners. Stay informed with the latest from Yogi's Pest Control.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-primary">
        <Image src={heroImages.blog} alt="" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/50 to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 text-center sm:pb-28 sm:pt-40">
          <AnimateIn delay={0.1} direction="none">
            <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              Expert Insights
            </span>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <h1 className="mx-auto max-w-4xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pest Control Blog
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.5}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Expert tips, identification guides, and seasonal advice to keep your
              Orange County home pest-free.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ CATEGORY FILTERS ═══ */}
      <section className="border-b border-border bg-surface py-5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-semibold text-foreground">Filter:</span>
            <Link
              href="/blog"
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white"
            >
              All Posts
            </Link>
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED POST ═══ */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AnimateIn>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:shadow-xl md:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden md:h-auto md:min-h-[360px]">
                <Image
                  src={blogImages[featuredPost.slug] || heroImages.blog}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <Tag className="h-3 w-3" /> {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Calendar className="h-3 w-3" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-accent">Latest Post</span>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{featuredPost.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read Article <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ ALL POSTS GRID ═══ */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AnimateIn>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">All Articles</span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              More From Our Blog
            </h2>
          </AnimateIn>

          <StaggerGrid className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={blogImages[post.slug] || heroImages.blog}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-sm">
                      <Tag className="h-3 w-3" /> {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-2 flex items-center gap-1 text-xs text-muted">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <h3 className="mb-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read More <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        headline="Need Professional Pest Control?"
        subtext="Our team is ready to help. Book your free inspection today."
      />
    </>
  );
}
