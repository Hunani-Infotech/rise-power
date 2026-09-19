import type { Metadata } from "next";
import { CapTabRedirect } from "../CapTabRedirect";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Field Deployment",
  description:
    "Rapid field deployment with end-to-end logistics support for austere environments.",
  path: "/capabilities/field-deployment",
});

export default function FieldDeploymentPage() {
  return <CapTabRedirect tab="field" />;
}
