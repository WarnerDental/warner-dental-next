import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { SERVICES } from "@/lib/services";

// Serves /sitemap.xml. Submit this URL in Google Search Console.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["", "/about", "/services", "/new-patients", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const services = SERVICES.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...core, ...services];
}
