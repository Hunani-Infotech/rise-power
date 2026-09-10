import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Consumer",
};

export default function ConsumerPage() {
  return (
    <>
      <PageHero
        eyebrow="Consumer"
        title="Portable power without the noise."
        description="Quiet hydrogen systems for off-grid living, recreation, and backup when the grid drops."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
          Consumer systems bring the same cartridge-based architecture to
          personal and recreational use. Run lights, communications, and
          appliances without generator noise or exhaust—designed for camps,
          cabins, and emergency kits that need to sit ready for years.
        </p>
      </section>
    </>
  );
}
