import type { MetadataRoute } from "next";
import { categoriesData } from "@/services/categoriesData";
import { allServiceSlugs } from "@/services/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hyontechnologies.online";

  // ─── Static pages ────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // ─── Category pages ──────────────────────────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = categoriesData.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ─── Service pages ───────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = allServiceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...servicePages];
}
