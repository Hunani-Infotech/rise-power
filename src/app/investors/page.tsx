import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Investors",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Building the hydrogen power stack."
        description="A CIMtech Green Energy company scaling portable fuel cells for defense, commercial, and consumer markets."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
          Rise Mission Power is expanding a field-validated platform from
          tactical programs into broader commercial and consumer channels. For
          investor materials and briefing requests, contact the team through
          the Contact Us form.
        </p>
      </section>
    </>
  );
}
