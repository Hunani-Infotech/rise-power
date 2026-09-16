import type { Metadata } from "next";
import { site } from "@/lib/content";

export const siteTitle = "Rise Mission Power";
export const siteDescription =
  "Mobile tactical power for defense and critical missions. Portable hydrogen fuel cell systems built for autonomous operations—silent, clean, and mission-ready.";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: site.name,
      locale: "en_CA",
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
