import type { MetadataRoute } from "next";
import { capabilityDetails } from "@/lib/capabilities";
import { insights, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/products", changeFrequency: "monthly", priority: 0.9 },
    { path: "/capabilities", changeFrequency: "monthly", priority: 0.9 },
    { path: "/use-cases", changeFrequency: "monthly", priority: 0.9 },
    { path: "/company", changeFrequency: "monthly", priority: 0.8 },
    { path: "/investors", changeFrequency: "weekly", priority: 0.8 },
    { path: "/datasheets", changeFrequency: "monthly", priority: 0.8 },
    { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
    { path: "/resources", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...capabilityDetails.map((capability) => ({
      url: `${site.url}/capabilities/${capability.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((article) => ({
      url: `${site.url}/insights/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
