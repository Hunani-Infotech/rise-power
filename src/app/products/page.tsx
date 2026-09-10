import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Four products. One cartridge ecosystem."
        description="Engineered for defense, disaster response, remote operations, and critical backup."
      />

      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="space-y-20">
          {products.map((product, index) => (
            <article
              key={product.slug}
              id={product.slug}
              className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={`relative aspect-4/3 overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="image-grade object-cover"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-accent uppercase">
                  {product.number}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight uppercase lg:text-5xl">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm tracking-wide text-accent uppercase">
                  {product.tagline}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/85">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border border-border bg-surface p-10 text-center lg:p-16">
          <h2 className="font-display text-4xl tracking-tight uppercase">
            Engineered as a system
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Every Rise Power product is designed as a complete system. Power
            generation, fuel delivery, controls, and enclosure working together.
          </p>
          <div className="mt-8">
            <Button href="/datasheets">Download Specs</Button>
          </div>
        </div>
      </div>
    </>
  );
}
