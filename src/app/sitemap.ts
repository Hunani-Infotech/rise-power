import type { MetadataRoute } from "next";
import { insights, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/use-cases",
    "/insights",
    "/contact",
    "/datasheets",
    "/privacy",
    "/terms",
  ];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
    })),
    ...insights.map((article) => ({
      url: `${site.url}/insights/${article.slug}`,
      lastModified: new Date(article.date),
    })),
  ];
}
