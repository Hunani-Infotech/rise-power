// import type { Metadata } from "next";
// import Image from "next/image";
// import { PageHero } from "@/components/PageHero";
// import { useCases } from "@/lib/content";

// export const metadata: Metadata = {
//   title: "Use Cases",
// };

// export default function UseCasesPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="Use Cases"
//         title="Operating environments where Rise Power systems fit."
//         description="Silent portable power for defense, disaster response, remote operations, and critical infrastructure."
//       />

//       <div className="mx-auto max-w-[1440px] space-y-16 px-6 py-16 lg:px-10 lg:py-24">
//         {useCases.map((item, index) => (
//           <article
//             key={item.slug}
//             id={item.slug}
//             className="grid items-center gap-10 border-b border-border pb-16 lg:grid-cols-2"
//           >
//             <div
//               className={`relative aspect-4/3 overflow-hidden ${
//                 index % 2 === 1 ? "lg:order-2" : ""
//               }`}
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 sizes="(min-width: 1024px) 50vw, 100vw"
//                 className="image-grade-green object-cover"
//               />
//             </div>
//             <div>
//               <p className="text-xs tracking-[0.18em] text-accent uppercase">
//                 0{index + 1}
//               </p>
//               <h2 className="mt-3 font-display text-4xl tracking-tight uppercase">
//                 {item.title}
//               </h2>
//               <p className="mt-4 text-base leading-relaxed text-muted">
//                 {item.description}
//               </p>
//               <p className="mt-8 text-xs tracking-[0.18em] text-accent uppercase">
//                 How it works
//               </p>
//               <ol className="mt-4 space-y-3">
//                 {item.howItWorks.map((step, stepIndex) => (
//                   <li key={step} className="flex gap-4 text-sm text-foreground/85">
//                     <span className="w-6 font-display text-accent">
//                       {String(stepIndex + 1).padStart(2, "0")}
//                     </span>
//                     {step}
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </article>
//         ))}
//       </div>
//     </>
//   );
// }



import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Box,
  Clock3,
  Database,
  Leaf,
  Plane,
  Radio,
  Server,
  Settings2,
  ShieldCheck,
  Target,
  VolumeX,
} from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { products, useCases } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Use Cases",
  description:
    "Explore how Rise Power hydrogen systems support defense, remote operations, disaster response, and critical infrastructure.",
  path: "/use-cases",
});

const sage = "#6e7f42";
const dark = "#101713";
const muted = "#626a63";
const cream = "#f7f6f1";

/* Helpers*/

function SectionEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : "justify-start"
        }`}
    >
      <span
        className="font-display text-2xl leading-none"
        style={{ color: sage }}
        aria-hidden="true"
      >
        ⌁
      </span>

      <p
        className="text-mm font-semibold tracking-[0.2em] uppercase"
        style={{ color: sage }}
      >
        {children}
      </p>
    </div>
  );
}

function ProductArrow() {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#aeb4aa] transition-all duration-300 group-hover:border-[#6e7f42] group-hover:bg-[#6e7f42] group-hover:text-white">
      <ArrowRight className="size-4 transition-transform duration-300" />
    </span>
  );
}

/* Page*/

export default function UseCasesPage() {
  const defense =
    useCases.find(
      (item) =>
        item.slug === "defense" ||
        item.slug === "defense-security" ||
        item.title.toLowerCase().includes("defense"),
    ) ?? useCases[0];

  const overviewCases = useCases.map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    slug: item.slug,
    title: item.title,
    description: item.description,
    image: item.image,
  }));

  const productConnections = [
    {
      eyebrow: "RISE SENTINEL",
      title: "Built for extended missions.",
      description:
        "Scalable, swappable power for defense and critical operations.",
      image: products.find((product) => product.slug === "sentinel")?.image,
      href: "/products#sentinel",
    },
    {
      eyebrow: "H2 CARTRIDGE",
      title: "Energy on demand.",
      description:
        "Pre-positioned hydrogen for rapid refueling and extended runtime.",
      image:
        products.find(
          (product) =>
            product.slug.includes("cartridge") ||
            product.name.toLowerCase().includes("cartridge"),
        )?.image ?? products[3]?.image,
      href: "/products#cartridge-kit",
    },
    {
      eyebrow: "RISE FALCON",
      title: "Lightweight. High performance.",
      description:
        "Portable power for autonomous systems and mobile operations.",
      image: products.find((product) => product.slug === "falcon")?.image,
      href: "/products#falcon",
    },
    {
      eyebrow: "RISE TITAN",
      title: "High-capacity power for any environment.",
      description:
        "Clean, reliable energy for commercial and industrial use.",
      image: products.find((product) => product.slug === "titan")?.image,
      href: "/products#titan",
    },
  ];

  const defenseFeatures = [
    {
      icon: VolumeX,
      title: "Silent portable power",
    },
    {
      icon: Leaf,
      title: "Zero emissions at point of use",
    },
    {
      icon: Database,
      title: "Reduced fuel logistics",
    },
    {
      icon: Clock3,
      title: "Extended mission duration",
    },
    {
      icon: Plane,
      title: "Drone ISR endurance",
    },
  ];

  const deploymentRows = [
    {
      icon: Target,
      label: "Mission",
      value: "Forward operating base",
    },
    {
      icon: Box,
      label: "System",
      value: "Rise Sentinel™",
    },
    {
      icon: Settings2,
      label: "Application",
      value: "Communications + ISR",
    },
    {
      icon: Database,
      label: "Fuel",
      value: "Pre-positioned hydrogen cartridges",
    },
  ];

  return (
    <main className="bg-[#fbfaf7] text-[#101713]">
      {/* HERO*/}

      <section className="relative min-h-[480px] overflow-hidden bg-[#0a100e] text-white sm:min-h-[560px] lg:min-h-[640px]">
        {/* Background */}
        {defense?.image ? (
          <Image
            src={defense.image}
            alt="Hydrogen power supporting mission operations"
            fill
            priority
            sizes="100vw"
            className="hero-animate-media object-cover object-[center_15%]"
          />
        ) : null}

        {/* Dark cinematic overlays */}
        {/* <div className="absolute inset-0 bg-[#07100d]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/95 via-[#07100d]/70 to-[#07100d]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/80 via-transparent to-[#07100d]/20" /> */}

        {/* Left focused cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/95 via-[#07100d]/35 to-transparent" />

        {/* Bottom subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[480px] max-w-[1440px] items-center px-6 pt-28 pb-20 sm:min-h-[560px] lg:min-h-[750px] lg:px-10">
          <div className="hero-animate-copy max-w-[700px]">
              <SectionEyebrow>Use Cases</SectionEyebrow>

              <h1 className="mt-7 font-display text-[48px] leading-[0.9] font-bold tracking-tight uppercase sm:text-[64px] lg:text-[82px] xl:text-[94px]">
                Power Where
                <br />
                <span style={{ color: "#6e7f42" }}>The Mission</span>
                <br />
                <span style={{ color: "#6e7f42" }}>Takes You.</span>
              </h1>

              <p className="mt-7 max-w-[600px] text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                Hydrogen power engineered for the environments where
                conventional generators fall short.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#use-cases"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 bg-[#849363]"
                >
                  Explore Use Cases
                  <ArrowRight className="size-5" />
                </a>

                <a
                  href="#products"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-8 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 rounded-sm"
                >
                  View Products
                  <ArrowRight className="size-5" />
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* FOUR ENVIRONMENTS*/}

      <section
        id="use-cases"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-20 sm:py-24 lg:py-32"
      >
        {/* Decorative background lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <div className="absolute -left-24 -top-20 size-72 rounded-full border border-[#dfe5d8]" />
          <div className="absolute -left-16 -top-12 size-56 rounded-full border border-[#e5e9df]" />
          <div className="absolute -right-28 bottom-[-100px] size-80 rounded-full border border-[#dfe5d8]" />
          <div className="absolute -right-16 bottom-[-60px] size-64 rounded-full border border-[#e5e9df]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="fade">
            <div className="mx-auto max-w-5xl text-center">
              <SectionEyebrow center>Use Cases</SectionEyebrow>

              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                Four Environments.{" "}
                <span style={{ color: sage }}>One Power Platform.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-[#626a63] sm:text-lg">
                Hydrogen power engineered for the environments where
                conventional generators fall short.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:gap-4">
            {overviewCases.map((item, index) => (
              <Reveal
                key={item.slug}
                variant="fade"
                delay={index * 70}
              >
                <article
                  id={item.slug === defense?.slug ? undefined : item.slug}
                  className="group relative block min-h-[340px] sm:min-h-[400px] md:min-h-[360px] lg:min-h-[320px] scroll-mt-28 overflow-hidden rounded-xl bg-[#101713]"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  ) : null}

                  <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/90 via-[#07100d]/55 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-8 lg:p-9">
                    <div>
                      <div className="flex items-center gap-4">
                        <span
                          className="font-display text-4xl leading-none font-bold"
                          style={{ color: sage }}
                        >
                          {item.number}
                        </span>

                        <span
                          className="h-px w-16"
                          style={{ background: sage }}
                        />
                      </div>

                      <h3 className="mt-5 max-w-[340px] font-display text-3xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[390px] text-sm leading-relaxed text-white/80 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEFENSE & SECURITY FEATURE*/}

      {defense && (
        <section
          id={defense.slug}
          className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-16 sm:py-20 lg:py-0"
        >
          <div className="mx-auto grid max-w-[1440px] items-center gap-5 px-6 lg:grid-cols-[1fr_0.92fr] lg:px-10">
            {/* Image */}
            <Reveal variant="left">
              <div className="relative aspect-[1.03/1] overflow-hidden rounded-xl bg-[#dfe4dc]">
                <Image
                  src={defense.image}
                  alt={defense.title}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </Reveal>

            {/* Content */}
            <Reveal
              variant="right"
              delay={100}
              className="rounded-xl border border-[#e0e3dd] bg-white"
            >
              <div className="flex h-full flex-col p-7 sm:p-9 lg:p-11">
                <div className="flex items-center gap-3">
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: sage }}
                  >
                    ⌁
                  </span>

                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: sage }}
                  >
                    01
                  </span>

                  <span className="h-5 w-px bg-[#cfd4ce]" />

                  <p className="text-mm font-semibold tracking-[0.08em] text-[#59615b] uppercase">
                    Defense & Security
                  </p>
                </div>

                <h2 className="mt-7 font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:text-5xl">
                  Silent Power
                  <br />
                  <span style={{ color: sage }}>
                    For the Forward Edge.
                  </span>
                </h2>

                <p className="mt-4 text-base leading-relaxed text-[#646c65] sm:text-lg">
                  Portable hydrogen power for bases, troops, communications
                  and surveillance systems. Reduce fuel-convoy dependency
                  while eliminating the acoustic, thermal and emissions
                  signatures that compromise operational security.
                </p>

                {/* Feature list */}
                <div className="mt-7 grid border-y border-[#e1e3de] sm:grid-cols-2">
                  {defenseFeatures.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className={`flex items-center gap-4 py-5 ${index < defenseFeatures.length - 1
                          ? "border-b border-[#e1e3de]"
                          : ""
                          } ${index === 1
                            ? "sm:border-b"
                            : ""
                          }`}
                      >
                        <Icon
                          className="size-8 shrink-0"
                          strokeWidth={1.5}
                          style={{ color: sage }}
                        />

                        <span className="text-mm leading-snug text-[#303630]">
                          {feature.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto flex flex-col gap-6 pt-7 xl:flex-row xl:items-center">
                  <a
                    href="#deployment"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                    style={{ background: sage }}
                  >
                    Explore Defense Solutions
                    <ArrowRight className="size-5" />
                  </a>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8a9089] uppercase">
                      Featured Products
                    </p>

                    <div className="mt-2 flex items-center gap-3 text-sm font-semibold uppercase">
                      <span>SENTINEL</span>
                      <span style={{ color: sage }}>|</span>
                      <span>FALCON</span>
                      <span style={{ color: sage }}>|</span>
                      <span>TITAN</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* REPRESENTATIVE DEPLOYMENT*/}

      <section
        id="deployment"
        className="relative overflow-hidden bg-[#fbfaf7] py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          {/* Content */}
          <Reveal variant="left">
            <div>
              <SectionEyebrow>Representative Deployment</SectionEyebrow>

              <h2 className="mt-7 max-w-3xl font-display text-4xl leading-[0.94] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                Unlimited Silent Comms
                <br />
                <span style={{ color: sage }}>
                  At a Forward Operating Base.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#687068] sm:text-lg">
                Continuous power without fuel-convoy dependency. Swap
                cartridges and extend runtime as long as the mission
                requires.
              </p>

              {/* Deployment specification table */}
              <div className="mt-8 overflow-hidden rounded-lg border border-[#dfe3dd] bg-white">
                {deploymentRows.map((row, index) => {
                  const Icon = row.icon;

                  return (
                    <div
                      key={row.label}
                      className={`grid grid-cols-[64px_1fr] items-center gap-3 px-5 py-4 sm:grid-cols-[68px_180px_1fr] sm:px-6 ${index !== deploymentRows.length - 1
                        ? "border-b border-[#e3e6e1]"
                        : ""
                        }`}
                    >
                      <div className="flex items-center justify-center">
                        <Icon
                          className="size-7"
                          strokeWidth={1.5}
                          style={{ color: sage }}
                        />
                      </div>

                      <span className="text-mm font-semibold tracking-[0.08em] text-[#777f77] uppercase">
                        {row.label}
                      </span>

                      <span className="col-span-2 text-mm text-[#222922] sm:col-span-1">
                        {row.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-col gap-6 pt-7 xl:flex-row xl:items-center">
                <a
                  href="/products"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                  style={{ background: sage }}
                >
                  See Products
                  <ArrowRight className="size-5" />
                </a>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8a9089] uppercase">
                    Featured Products
                  </p>

                  <div className="mt-2 flex items-center gap-3 text-sm font-semibold uppercase">
                    <span>SENTINEL</span>
                    <span style={{ color: sage }}>|</span>
                    <span>FALCON</span>
                    <span style={{ color: sage }}>|</span>
                    <span>TITAN</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Deployment image */}
          <Reveal variant="right" delay={100}>
            <div className="relative aspect-[1.15/1] overflow-hidden rounded-xl bg-[#dfe4dc]">
              {defense?.image ? (
                <Image
                  src={defense.image}
                  alt="Representative forward operating base deployment"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              ) : null}

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* REAL MISSIONS — PRODUCT CONNECTION*/}

      <section
        id="products"
        className="relative overflow-hidden bg-[#fbfaf7] pt-0 pb-20 sm:pb-24 lg:pb-32"
      >
        {/* Decorative lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          aria-hidden="true"
        >
          <div className="absolute left-[-140px] top-[-80px] size-80 rounded-full border border-[#dfe5d8]" />
          <div className="absolute left-[-90px] top-[-30px] size-64 rounded-full border border-[#e5e9df]" />
          <div className="absolute right-[-120px] bottom-[-100px] size-80 rounded-full border border-[#dfe5d8]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="fade">
            <div className="mx-auto max-w-4xl text-center">
              <SectionEyebrow center>
                From Use Case to Solution
              </SectionEyebrow>

              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                Real Missions.{" "}
                <span style={{ color: sage }}>Real Power.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#626a63] sm:text-lg">
                Explore how each Rise product supports mission-critical
                operations across defense, commercial, consumer and more.
              </p>
            </div>
          </Reveal>

          {/* Product cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {productConnections.map((product, index) => (
              <Reveal
                key={product.eyebrow}
                variant="fade"
                delay={index * 70}
                className="h-full"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e0e3dd] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,30,20,0.08)]">
                  {/* Product image */}
                  <div className="relative aspect-[1.08/1] overflow-hidden bg-[#e6eae4]">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.eyebrow}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      />
                    ) : null}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>

                  {/* Product content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-display text-xl leading-none"
                        style={{ color: sage }}
                      >
                        ⌁
                      </span>

                      <p className="text-mm font-bold tracking-[0.08em] text-[#20251f] uppercase">
                        {product.eyebrow}
                      </p>
                    </div>

                    <h3 className="mt-5 font-display text-[26px] leading-[1.02] font-bold tracking-tight text-[#111713] uppercase">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#687068] sm:text-[15px]">
                      {product.description}
                    </p>

                    <div className="mt-auto pt-7">
                      <a
                        href={product.href}
                        className="inline-flex items-center gap-4 text-xs font-bold tracking-[0.08em] text-[#20251f] uppercase"
                      >
                        <span className="transition-colors group-hover:text-[#6e7f42]">
                          Learn More
                        </span>

                        <ProductArrow />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal variant="fade" delay={300}>
            <div className="mt-10 flex justify-center">
              <a
                href="/products"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-9 text-xs font-bold tracking-[0.1em] text-white uppercase transition-opacity hover:opacity-90"
                style={{ background: sage }}
              >
                <span>Explore All Products</span>

                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}