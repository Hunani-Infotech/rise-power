import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Commercial",
};

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Reliable power off the grid."
        description="Clean, quiet generation for remote sites, construction, and infrastructure that cannot wait on diesel resupply."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
          Commercial teams deploy Rise Mission Power where generator noise,
          emissions, and fuel logistics are operational constraints. Cartridge
          swaps keep sites running without the maintenance burden of diesel
          fleets or the runtime limits of lithium-only packs.
        </p>
      </section>
    </>
  );
}
