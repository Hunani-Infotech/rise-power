import type { Metadata } from "next";
import { CapTabRedirect } from "../CapTabRedirect";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "System Integration",
  description:
    "Integration with existing platforms, mounts, and field power interfaces.",
  path: "/capabilities/system-integration",
});

export default function SystemIntegrationPage() {
  return <CapTabRedirect tab="integration" />;
}
