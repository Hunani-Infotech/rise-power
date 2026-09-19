import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Procurement FAQ",
  description:
    "Answers for procurement and program teams evaluating Rise Power hydrogen systems.",
  path: "/resources/faq",
});

const faqs = [
  {
    q: "What products are available for evaluation?",
    a: "Rise Sentinel™, Rise Falcon™, Rise Titan™, and the Hydrogen Cartridge Kit. Specs and engineering targets are listed on Datasheets.",
  },
  {
    q: "How do we request a capability briefing?",
    a: "Use Request a Briefing on the Contact page. Include mission profile, power draw, and deployment environment so we can tailor runtime and logistics guidance.",
  },
  {
    q: "Are systems suitable for indoor or enclosed use?",
    a: "Yes — zero exhaust at point of use supports indoor-safe and shelter deployments where diesel is restricted.",
  },
  {
    q: "Where can we download specifications?",
    a: "Product datasheets are available in the Resource Center under Datasheets. Investor materials are on the Investors page.",
  },
  {
    q: "Do you support integration with existing platforms?",
    a: "Yes. System Integration covers electronics, mounts, and field interfaces for drones, generators, and facility backup loads.",
  },
] as const;

export default function ProcurementFaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Procurement FAQ"
        description="Straight answers for procurement, programs, and integration leads evaluating Rise Power systems."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10 lg:py-20">
        <Reveal variant="up">
          <ul className="mx-auto max-w-3xl space-y-8">
            {faqs.map((item) => (
              <li key={item.q} className="border-b border-border pb-8 last:border-b-0">
                <h2 className="text-lg font-semibold text-ink">{item.q}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-12 max-w-3xl text-base text-muted">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="font-medium text-sage underline-offset-2 hover:underline"
            >
              Request a Briefing
            </Link>{" "}
            or browse{" "}
            <Link
              href="/datasheets"
              className="font-medium text-sage underline-offset-2 hover:underline"
            >
              Datasheets
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
