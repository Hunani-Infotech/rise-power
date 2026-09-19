import type { Metadata } from "next";
import { CapabilityDetail } from "@/components/capabilities/CapabilityDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Safety & Compliance",
  description:
    "Safety and compliance engineered into Rise Power hydrogen systems from day one.",
  path: "/capabilities/safety-compliance",
});

export default function SafetyCompliancePage() {
  return <CapabilityDetail tabId="safety" />;
}
