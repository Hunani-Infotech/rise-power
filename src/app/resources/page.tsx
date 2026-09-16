import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description:
    "Datasheets, news, and documentation for procurement, programs, and integration leads evaluating Rise Power systems.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Specs, insights, and field notes."
        description="Datasheets, news, and documentation for procurement, programs, and integration leads."
      />
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <Reveal variant="up">
          <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
            Download product specifications from{" "}
            <Link href="/datasheets" className="text-sage underline-offset-2 hover:underline">
              Datasheets
            </Link>
            , or read{" "}
            <Link href="/insights" className="text-sage underline-offset-2 hover:underline">
              News & Insights
            </Link>{" "}
            for updates from the field. For a tailored briefing,{" "}
            <Link href="/contact" className="text-sage underline-offset-2 hover:underline">
              Request a Briefing
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
