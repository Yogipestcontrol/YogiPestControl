// Shapes for the Phase 2 ranking content. Data lives in:
//   city-content.ts     — upgrades for priority city pages (/areas-we-serve/[slug])
//   service-content.ts  — upgrades for service pages (/services/[slug])
//   city-services.ts    — city × service pages (/areas-we-serve/[slug]/[service])

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentSection {
  /** Rendered as an H2. Should contain the target query naturally. */
  heading: string;
  /** Paragraphs. Plain text; no HTML or markdown. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
  /** Optional internal link rendered under the section. */
  link?: { href: string; label: string };
}

export interface PriceRow {
  item: string;
  /** e.g. "$150 – $350". Must agree with /pest-control-cost. */
  range: string;
  note?: string;
}

/** Descriptive internal link, e.g. { href: "/services/mosquito-control", anchor: "mosquito control in Costa Mesa" }. */
export interface AnchorLink {
  href: string;
  anchor: string;
}

export interface CityContent {
  /** Must match a slug in CITY_DATA. */
  slug: string;
  /** ≤ 60 chars, WITHOUT the brand (the site template appends "| Yogi's Pest Control"). */
  metaTitle: string;
  /** 140–155 chars. */
  metaDescription: string;
  /** One or two sentences under the H1. */
  heroSubtext: string;
  /** Pest-by-pest H2 sections specific to this city (3–5). */
  sections: ContentSection[];
  /** Real neighborhoods / villages / areas in the city. */
  neighborhoods: string[];
  /** 3–5 most-requested services in this city, with descriptive anchors. */
  topServices: AnchorLink[];
  /** Typical local price ranges. */
  pricing: PriceRow[];
  /** Additional FAQs (appended after the existing 3). */
  extraFaqs: FAQ[];
  /** Slugs of neighboring cities that have pages. */
  nearby: string[];
  /** YYYY-MM-DD */
  updated: string;
}

export interface ServiceContent {
  /** Must match a slug in servicesData. */
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** Extra H2 sections rendered after the existing overview. */
  sections: ContentSection[];
  pricing: PriceRow[];
  /** Appended after the existing FAQs. */
  extraFaqs: FAQ[];
  /** City pages to link with descriptive anchors ("rodent control in Costa Mesa"). */
  cityLinks: AnchorLink[];
  /** Related pest-library and blog pages. */
  related: AnchorLink[];
  updated: string;
}

export interface CityServicePage {
  citySlug: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtext: string;
  /** A 2–3 sentence direct answer shown first (quotable by AI assistants). */
  summary: string;
  sections: ContentSection[];
  pricing: PriceRow[];
  faqs: FAQ[];
  updated: string;
}
