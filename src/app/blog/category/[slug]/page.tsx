import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { blogPosts } from "@/data/blog-posts";
import { blogCategories } from "@/data/blog-categories";
import { heroImages } from "@/lib/images";

export async function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} | Pest Control Blog`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);

  if (!category) {
    return <div className="py-32 text-center text-xl">Category not found</div>;
  }

  const categoryPosts = blogPosts
    .filter((post) => post.category === category.name)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.blog}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white/70">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            {category.name}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            {category.description}
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-background py-8 border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-foreground">
              Filter by:
            </span>
            <Link
              href="/blog"
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-primary/30 hover:text-primary"
            >
              All Posts
            </Link>
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  cat.slug === slug
                    ? "bg-primary text-white"
                    : "border border-border bg-surface text-muted hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          {categoryPosts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg text-muted">
                No posts in this category yet. Check back soon!
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
              >
                View All Posts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex flex-1 flex-col p-8">
                    {/* Category badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Read More{" "}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
