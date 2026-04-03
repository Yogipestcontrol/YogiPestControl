import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { CITY_DATA } from "@/data/cities";
import { pestsData } from "@/data/pests";
import { blogPosts } from "@/data/blog-posts";
import { blogCategories } from "@/data/blog-categories";

const BASE_URL = "https://yogispestcontrol.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/areas-we-serve`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/pests`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/free-inspection`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pest-control-cost`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/pest-quiz`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = CITY_DATA.map((city) => ({
    url: `${BASE_URL}/areas-we-serve/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: city.priority === "high" ? 0.9 : city.priority === "medium" ? 0.8 : 0.7,
  }));

  // Pest pages
  const pestPages: MetadataRoute.Sitemap = pestsData.map((pest) => ({
    url: `${BASE_URL}/pests/${pest.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog categories
  const categoryPages: MetadataRoute.Sitemap = blogCategories.map((cat) => ({
    url: `${BASE_URL}/blog/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...pestPages,
    ...blogPages,
    ...categoryPages,
  ];
}
