import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useCases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Use Cases",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        title="Operating environments where Rise Power systems fit."
        description="Silent portable power for defense, disaster response, remote operations, and critical infrastructure."
      />

      <div className="mx-auto max-w-[1440px] space-y-16 px-6 py-16 lg:px-10 lg:py-24">
        {useCases.map((item, index) => (
          <article
            key={item.slug}
            id={item.slug}
            className="grid items-center gap-10 border-b border-border pb-16 lg:grid-cols-2"
          >
            <div
              className={`relative aspect-4/3 overflow-hidden ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="image-grade-green object-cover"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.18em] text-accent uppercase">
                0{index + 1}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight uppercase">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {item.description}
              </p>
              <p className="mt-8 text-xs tracking-[0.18em] text-accent uppercase">
                How it works
              </p>
              <ol className="mt-4 space-y-3">
                {item.howItWorks.map((step, stepIndex) => (
                  <li key={step} className="flex gap-4 text-sm text-foreground/85">
                    <span className="w-6 font-display text-accent">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
