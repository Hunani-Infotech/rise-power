import type { Metadata } from "next";
import { CapabilitiesTabs } from "@/components/home/CapabilitiesTabs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Capabilities",
  description:
    "Engineering, integration, field deployment, and safety — hydrogen power systems built for real operating environments.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <main id="capabilities" className="cv-auto scroll-mt-28 bg-[#141a14] text-[#f3efe4]">
      <CapabilitiesTabs />
    </main>
  );
}
