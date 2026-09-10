import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Technology",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Hydrogen power, engineered for the field."
        description="Cartridge-based fuel cells that swap in seconds, run silently, and keep operators independent of diesel logistics."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
          Rise Mission Power systems combine a ruggedized fuel cell stack with
          sealed hydrogen cartridges. The architecture is built for contested
          and austere environments: no acoustic signature at the point of use,
          indoor-safe exhaust, and runtime that scales with fuel on hand rather
          than generator maintenance cycles.
        </p>
      </section>
    </>
  );
}
