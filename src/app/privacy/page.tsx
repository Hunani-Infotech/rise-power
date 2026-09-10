import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy." />
      <div className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-muted lg:px-10">
        <p>
          Rise Power collects only the information you submit through the briefing
          form or by email. We use that information to respond to procurement,
          program, and integration inquiries. We do not sell personal data.
        </p>
        <p className="mt-4">
          Questions about this policy can be sent to info@risepower.com.
        </p>
      </div>
    </>
  );
}
