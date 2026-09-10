import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datasheets",
};

export default function DatasheetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Download specs."
        description="Request a capability briefing and we will send product datasheets, runtime data, and a deployment summary for your operating environment."
      />

      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.slug} className="border border-border bg-surface p-8">
              <p className="text-xs tracking-[0.18em] text-accent uppercase">
                {product.number}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-wide uppercase">
                {product.name}
              </h2>
              <p className="mt-3 text-sm text-muted">{product.description}</p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">
                  Request Datasheet
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
