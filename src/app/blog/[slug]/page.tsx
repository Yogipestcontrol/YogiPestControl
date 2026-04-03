import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Phone } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { SITE_CONFIG } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";
import { blogCategories } from "@/data/blog-categories";
import { heroImages } from "@/lib/images";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="py-32 text-center text-xl">Post not found</div>;
  }

  const category = blogCategories.find((c) => c.name === post.category);
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Convert markdown-style content to paragraphs
  const contentSections = post.content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mb-4 mt-10 text-2xl font-bold text-foreground"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="mb-6 text-base leading-relaxed text-muted">
        {block}
      </p>
    );
  });

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
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:pb-32 sm:pt-20">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white/70">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{post.title}</span>
          </nav>
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-white/60">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main article */}
            <article className="lg:col-span-2">
              <div className="prose-custom">{contentSections}</div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Contact CTA */}
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    Need Pest Control Help?
                  </h3>
                  <p className="mb-4 text-sm text-muted">
                    Schedule a free inspection with our Orange County experts.
                  </p>
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

                {/* Related posts */}
                {relatedPosts.length > 0 && (
                  <div className="rounded-xl border border-border bg-surface p-6">
                    <h3 className="mb-4 text-lg font-bold text-foreground">
                      Related Articles
                    </h3>
                    <ul className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <li key={rp.slug}>
                          <Link
                            href={`/blog/${rp.slug}`}
                            className="group flex items-start justify-between gap-2"
                          >
                            <span className="text-sm text-muted transition-colors group-hover:text-primary">
                              {rp.title}
                            </span>
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Category link */}
                {category && (
                  <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
                    <h3 className="mb-2 text-base font-bold text-foreground">
                      Browse {category.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted">
                      More articles in this category.
                    </p>
                    <Link
                      href={`/blog/category/${category.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
                    >
                      View All <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.publishedAt,
            author: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
            },
          }),
        }}
      />
    </>
  );
}
