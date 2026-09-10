import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Canadian engineered. Field validated."
        description="Rise Power is engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company built on a 20 plus year Canadian advanced manufacturing track record."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
          Rise Power builds portable hydrogen fuel cell power systems for
          defense, disaster response, remote operations, and critical
          infrastructure. Learn more about the mission, values, and team on the{" "}
          <Link href="/about" className="text-sage underline-offset-2 hover:underline">
            About
          </Link>{" "}
          page.
        </p>
      </section>
    </>
  );
}
