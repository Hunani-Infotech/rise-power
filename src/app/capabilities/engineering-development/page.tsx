import type { Metadata } from "next";
import { CapTabRedirect } from "../CapTabRedirect";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Engineering & Development",
  description:
    "Hydrogen power engineering from early-stage prototypes to production-ready hardware.",
  path: "/capabilities/engineering-development",
});

export default function EngineeringDevelopmentPage() {
  return <CapTabRedirect tab="engineering" />;
}
