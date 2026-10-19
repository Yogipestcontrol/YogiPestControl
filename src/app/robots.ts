import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ must stay crawlable: it serves the CSS/JS Google needs to render pages.
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://yogispestcontrol.com/sitemap.xml",
  };
}
