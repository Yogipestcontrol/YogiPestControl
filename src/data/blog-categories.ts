export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "pest-prevention-tips",
    name: "Pest Prevention Tips",
    description:
      "Practical advice and proven strategies to keep pests out of your Orange County home and business. Learn prevention techniques from licensed pest control experts.",
  },
  {
    slug: "pest-identification",
    name: "Pest Identification",
    description:
      "Learn to identify common Orange County pests including rodents, ants, cockroaches, and spiders. Proper identification is the first step to effective pest control.",
  },
  {
    slug: "seasonal-pest-guides",
    name: "Seasonal Pest Guides",
    description:
      "Seasonal pest control guides for Orange County homeowners. Know which pests to expect each season and how to prepare your home year-round.",
  },
  {
    slug: "commercial-pest-control",
    name: "Commercial Pest Control",
    description:
      "Pest control solutions for Orange County businesses, restaurants, and commercial properties. Compliance guides, best practices, and industry-specific pest management.",
  },
  {
    slug: "orange-county-pest-news",
    name: "Orange County Pest News",
    description:
      "Local pest control news, trends, and updates for Orange County residents. Stay informed about pest activity and public health advisories in your area.",
  },
];
