import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

/** Last substantive site-wide content update (sitemap lastmod). */
export const CONTENT_UPDATED = "2026-10-19";

export const BUSINESS_ID = `${SITE_CONFIG.url}/#business`;
export const DEFAULT_OG_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Yobani Arreola of Yogi's Pest Control with his service truck",
};
const BRAND_SUFFIX = /\s*[|–—-]\s*Yogi'?s Pest Control.*$/i;

/** Strip a trailing "| Yogi's Pest Control" so the root title template doesn't add it twice. */
export function withoutBrand(title: string): string {
  return title.replace(BRAND_SUFFIX, "").trim();
}

/**
 * Per-page metadata with a canonical URL and complete Open Graph / Twitter tags.
 * (A page's `openGraph` replaces the parent's object entirely, so every page needs
 * the full set, not just the fields that differ.)
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is, without the "| Yogi's Pest Control" template. */
  absoluteTitle?: boolean;
  image?: string;
  type?: "website" | "article";
  locale?: "en_US" | "es_US";
  publishedTime?: string;
  modifiedTime?: string;
  languages?: Record<string, string>;
}): Metadata {
  const title = opts.absoluteTitle ? opts.title : withoutBrand(opts.title);
  const fullTitle = opts.absoluteTitle ? title : `${title} | ${SITE_CONFIG.name}`;
  const url = opts.path === "/" ? "/" : opts.path.replace(/\/$/, "");
  const images = [opts.image ? { url: opts.image } : DEFAULT_OG_IMAGE];

  return {
    title: opts.absoluteTitle ? { absolute: title } : title,
    description: opts.description,
    alternates: {
      canonical: url,
      ...(opts.languages ? { languages: opts.languages } : {}),
    },
    openGraph: {
      type: opts.type ?? "website",
      locale: opts.locale ?? "en_US",
      siteName: SITE_CONFIG.name,
      url,
      title: fullTitle,
      description: opts.description,
      images,
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: images.map((i) => i.url),
    },
  };
}

/** BreadcrumbList JSON-LD from [name, path] pairs (Home is added automatically). */
export function breadcrumbJsonLd(items: [name: string, path: string][]) {
  const all: [string, string][] = [["Home", "/"], ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_CONFIG.url}${path === "/" ? "" : path}`,
    })),
  };
}
