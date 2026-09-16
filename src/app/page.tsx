import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { pageMetadata, siteDescription, siteTitle } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${siteTitle} | Portable Hydrogen Fuel Cell Systems`,
    description: siteDescription,
    path: "/",
  }),
  title: {
    absolute: `${siteTitle} | Portable Hydrogen Fuel Cell Systems`,
  },
};

export default function Home() {
  return <HomePage />;
}
