import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Defense",
};

export default function DefensePage() {
  return (
    <>
      <PageHero
        eyebrow="Defense"
        title="Silent power for the mission."
        description="Tactical hydrogen systems for forward positions, ISR platforms, and command posts that cannot afford diesel signatures."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
          Defense operators use Rise Mission Power to cut fuel-convoy risk and
          eliminate the acoustic and thermal signatures of conventional
          generators. Portable units support communications, surveillance, and
          unmanned systems while remaining quiet and indoor-safe.
        </p>
      </section>
    </>
  );
}
