import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description:
    "How Rise Power collects and uses information submitted through briefing requests and email.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy." />
      <div className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-muted lg:px-10">
        <Reveal variant="up">
          <p>
            Rise Power collects only the information you submit through the briefing
            form or by email. We use that information to respond to procurement,
            program, and integration inquiries. We do not sell personal data.
          </p>
          <p className="mt-4">
            Questions about this policy can be sent to info@risepower.com.
          </p>
        </Reveal>
      </div>
    </>
  );
}
