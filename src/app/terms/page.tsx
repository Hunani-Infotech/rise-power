import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms of use for the Rise Power website, product specifications, and Canadian export control notices.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use." />
      <div className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-muted lg:px-10">
        <Reveal variant="up">
          <p>
            Content on this website is provided for informational purposes for
            procurement, programs, and integration leads evaluating Rise Power
            systems. Product specifications are subject to change. Systems are
            subject to Canadian export controls and controlled goods compliance.
          </p>
          <p className="mt-4">
            A CIMtech Green Energy company. Designed and manufactured in Canada.
          </p>
        </Reveal>
      </div>
    </>
  );
}
