import type { MetadataRoute } from "next";
import { siteDescription, siteTitle } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: "Rise Power",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f0e8",
    theme_color: "#6e7f42",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
