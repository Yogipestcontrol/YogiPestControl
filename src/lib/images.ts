// Service page hero images — Gemini Imagen 4.0 generated
export const serviceHeroImages: Record<string, string> = {
  "rodent-control": "/images/services/rodent-control-hero.jpg",
  "cockroach-control": "/images/services/cockroach-control-hero.jpg",
  "ant-control": "/images/services/ant-control-hero.jpg",
  "wasp-control": "/images/services/wasp-control-hero.jpg",
  "bee-removal": "/images/services/bee-removal-hero.jpg",
  "mosquito-control": "/images/services/mosquito-control-hero.jpg",
  "fly-control": "/images/services/fly-control.webp",
  "spider-control": "/images/services/spider-control-hero.jpg",
  "tick-flea-treatment": "/images/services/tick-flea-treatment.jpeg",
  "exclusion-repairs": "/images/services/exclusion-repairs-hero.jpg",
  "attic-cleanout": "/images/services/attic-cleanout.jpg",
  "bed-bug-treatment": "/images/services/bed-bug-treatment-hero.jpg",
  "wildlife-trapping": "/images/services/wildlife-trapping-hero.jpg",
  "dead-animal-removal": "/images/services/dead-animal-removal-hero.jpg",
};

// Service card thumbnails — pulled from existing site
export const serviceCardImages: Record<string, string> = {
  "rodent-control": "/images/services/rodent-control.webp",
  "cockroach-control": "/images/services/cockroach-control.jpg",
  "ant-control": "/images/services/ant-control.jpg",
  "wasp-control": "/images/services/wasp-control.jpg",
  "bee-removal": "/images/services/bee-removal.webp",
  "mosquito-control": "/images/services/mosquito-control.jpg",
  "fly-control": "/images/services/fly-control.webp",
  "spider-control": "/images/services/spider-control.avif",
  "tick-flea-treatment": "/images/services/tick-flea-treatment.jpeg",
  "exclusion-repairs": "/images/services/exclusion-repairs-hero.jpg",
  "attic-cleanout": "/images/services/attic-cleanout.jpg",
  "bed-bug-treatment": "/images/services/bed-bug-treatment-hero.jpg",
  "wildlife-trapping": "/images/services/wildlife-trapping.webp",
  "dead-animal-removal": "/images/services/dead-animal-removal-hero.jpg",
};

// Page-specific hero images — Gemini Imagen 4.0 generated (each page unique)
export const heroImages = {
  homepage: "/images/heroes/hero-main.jpg",
  services: "/images/heroes/hero-services.jpg",
  about: "/images/heroes/hero-about.jpg",
  blog: "/images/heroes/hero-blog.jpg",
  areas: "/images/heroes/hero-areas.jpg",
  pests: "/images/heroes/hero-pests.jpg",
  quiz: "/images/heroes/hero-quiz.jpg",
  faq: "/images/heroes/hero-faq.jpg",
  reviews: "/images/heroes/hero-reviews.jpg",
  cost: "/images/heroes/hero-cost.jpg",
  contact: "/images/heroes/hero-contact.jpg",
  book: "/images/heroes/hero-book.jpg",
  freeInspection: "/images/heroes/hero-free-inspection.jpg",
  // Real photos from existing site
  team: "/images/heroes/team-photo.jpg",
  realPhoto1: "/images/heroes/real-photo-1.jpg",
  realPhoto2: "/images/heroes/real-photo-2.jpg",
  realPhoto3: "/images/heroes/real-photo-3.jpg",
};

// City hero images — Gemini Imagen 4.0 generated (one per city)
export function getCityHeroImage(slug: string): string {
  return `/images/cities/${slug}.jpg`;
}

// Logo
export const logos = {
  transparent: "/images/logo.png",
  full: "/images/logo-full.jpg",
};
