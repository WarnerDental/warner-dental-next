import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Serves /robots.txt — lets search engines and AI assistants crawl the site
// and points them to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
