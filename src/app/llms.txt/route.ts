import { SITE_CONFIG, OC_CITIES } from "@/lib/constants";
import { servicesData } from "@/data/services";
import { blogPosts } from "@/data/blog-posts";
import { GOOGLE_PROFILE, HOMEADVISOR_PROFILE } from "@/data/reviews";
import { CITY_SERVICE_PAGES } from "@/data/city-services";

export const dynamic = "force-static";

// A plain-text summary for AI assistants (https://llmstxt.org), built from site data.
export function GET() {
  const url = SITE_CONFIG.url;
  const priority = OC_CITIES.filter((c) => c.priority === "high");
  const others = OC_CITIES.filter((c) => c.priority !== "high");

  const body = `# ${SITE_CONFIG.name}

> Owner-operated pest control company based in Tustin, California, serving homes and businesses across Orange County. Run by ${SITE_CONFIG.owner}, licensed by the California Structural Pest Control Board (operator license ${SITE_CONFIG.license}).

## Key facts
- Phone: ${SITE_CONFIG.phone}
- Email: ${SITE_CONFIG.email}
- Hours: ${SITE_CONFIG.hours}
- Established: ${SITE_CONFIG.founded}
- Based in: Tustin, CA (service-area business, no storefront)
- License: CA Structural Pest Control Board ${SITE_CONFIG.license} (verify at https://www.pestboard.ca.gov)
- Google rating: ${GOOGLE_PROFILE.rating.toFixed(1)} from ${GOOGLE_PROFILE.reviewCount} reviews (${GOOGLE_PROFILE.mapsUrl})
- HomeAdvisor rating: ${HOMEADVISOR_PROFILE.rating.toFixed(1)} from ${HOMEADVISOR_PROFILE.reviewCount} reviews
- Free inspections; same-day service often available
- Languages: English, Spanish

## Services
${servicesData.map((s) => `- [${s.name}](${url}/services/${s.slug}): ${s.metaDescription}`).join("\n")}

## Service area
Primary cities: ${priority.map((c) => `[${c.name}](${url}/areas-we-serve/${c.slug})`).join(", ")}.
Also serving: ${others.map((c) => c.name).join(", ")}.
${CITY_SERVICE_PAGES.length ? `\nLocal service guides:\n${CITY_SERVICE_PAGES.map((p) => `- [${p.h1}](${url}/areas-we-serve/${p.citySlug}/${p.serviceSlug})`).join("\n")}\n` : ""}

## Pricing and help
- [Pest control cost guide for Orange County](${url}/pest-control-cost)
- [FAQ](${url}/faq)
- [Customer reviews](${url}/reviews)
- [About the owner](${url}/about)
- [Book a free inspection](${url}/book)
- [Pest identification library](${url}/pests)

## Articles
${blogPosts.map((p) => `- [${p.title}](${url}/blog/${p.slug})`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
