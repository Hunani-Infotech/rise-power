// import Image from "next/image";
// import Link from "next/link";
// import type { LucideIcon } from "lucide-react";
// import {
//   ArrowRight,
//   Award,
//   Cog,
//   Cross,
//   Droplets,
//   Gauge,
//   Globe,
//   Handshake,
//   Leaf,
//   Pickaxe,
//   Quote,
//   RadioTower,
//   Shield,
//   ShieldCheck,
//   Signal,
//   Timer,
//   Users,
//   VolumeX,
//   Wrench,
// } from "lucide-react";
// import { customerPartners, productUiLabels } from "@/lib/home-content";
// import { Reveal, RevealStagger } from "@/components/motion/Reveal";
// import { PlaceholderMedia } from "./PlaceholderMedia";

// const sage = "#6e7f42";
// const cream = "#f7f5ef";
// const charcoal = "#141a14";
// const partnerBarBg = "#ebe8e0";

// const categoryIcons: LucideIcon[] = [Shield, RadioTower, Pickaxe, Cross];

// const statIcons: LucideIcon[][] = [
//   [Timer, ShieldCheck, Leaf],
//   [RadioTower, Signal, Droplets],
//   [Gauge, Wrench, ShieldCheck],
//   [Timer, VolumeX, Users],
// ];

// const partnerIcons: LucideIcon[] = [
//   Cog,
//   Handshake,
//   ShieldCheck,
//   Globe,
//   Award,
// ];

// export function CustomersPartners() {
//   const {
//     eyebrow,
//     headingBefore,
//     headingAccent,
//     body,
//     cases,
//     partnerHeading,
//     partners,
//   } = customerPartners;

//   return (
//     <section id="customer-partners" className="w-full" style={{ background: cream }}>
//       <div className="mx-auto max-w-[1440px] px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
//         <Reveal variant="up">
//           <p
//             className="text-center font-display text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
//             style={{ color: sage }}
//           >
//             {eyebrow}
//           </p>
//           <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight text-[#141a14] uppercase sm:text-5xl lg:text-6xl">
//             {headingBefore}{" "}
//             <span style={{ color: sage }}>{headingAccent}</span>
//           </h2>
//           <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
//             {body}
//           </p>
//         </Reveal>

//         <RevealStagger
//           className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
//           step={90}
//           variant="up"
//         >
//           {cases.map((item, index) => {
//             const CategoryIcon = categoryIcons[index] ?? Shield;
//             const icons = statIcons[index] ?? statIcons[0];

//             return (
//               <article
//                 key={item.category}
//                 className="motion-hover-lift flex flex-col overflow-hidden rounded-md text-[#f3efe4]"
//                 style={{ background: charcoal }}
//               >
//                 <div className="relative aspect-[16/10] w-full shrink-0">
//                   {item.imageSrc ? (
//                     <Image
//                       src={item.imageSrc}
//                       alt={item.image}
//                       fill
//                       quality={75}
//                       className="object-cover"
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                     />
//                   ) : (
//                     <PlaceholderMedia
//                       label={item.image}
//                       className="absolute inset-0 min-h-full"
//                     />
//                   )}
//                   <div className="absolute top-3 left-3 z-10">
//                     <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b0e0c]/85 px-2.5 py-1 backdrop-blur-sm">
//                       <CategoryIcon
//                         className="size-3.5 shrink-0"
//                         strokeWidth={1.8}
//                         style={{ color: sage }}
//                       />
//                       <span className="text-[9px] font-semibold tracking-[0.14em] text-white uppercase">
//                         {item.category}
//                       </span>
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-1 flex-col p-5">
//                   <Quote
//                     className="size-5"
//                     strokeWidth={1.6}
//                     style={{ color: sage }}
//                     aria-hidden
//                   />
//                   <h3 className="mt-2 font-display text-xl leading-tight font-bold tracking-tight text-white">
//                     {item.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-[#f3efe4]/65">
//                     {item.body}
//                   </p>

//                   <ul className="mt-5 space-y-3 border-t border-white/10 pt-4">
//                     {item.stats.map((stat, i) => {
//                       const StatIcon = icons[i];
//                       return (
//                         <li key={stat.value} className="flex items-start gap-2.5">
//                           {StatIcon ? (
//                             <StatIcon
//                               className="mt-0.5 size-4 shrink-0"
//                               strokeWidth={1.7}
//                               style={{ color: sage }}
//                             />
//                           ) : null}
//                           <div className="min-w-0">
//                             <p className="text-[13px] leading-snug font-semibold tracking-wide text-white">
//                               {stat.value}
//                             </p>
//                             <p className="text-[11px] leading-snug text-[#f3efe4]/55">
//                               {stat.label}
//                             </p>
//                           </div>
//                         </li>
//                       );
//                     })}
//                   </ul>

//                   <Link
//                     href={item.href}
//                     className="mt-auto flex w-full items-center justify-between pt-6 text-[11px] font-semibold tracking-[0.16em] uppercase sm:text-xs"
//                     style={{ color: sage }}
//                   >
//                     <span>{productUiLabels.viewSuccessStory}</span>
//                     <ArrowRight className="size-4 shrink-0" strokeWidth={1.8} />
//                   </Link>
//                 </div>
//               </article>
//             );
//           })}
//         </RevealStagger>
//       </div>

//       <Reveal variant="fade" delay={80}>
//         <div style={{ background: partnerBarBg }}>
//           <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
//             <p className="text-center font-display text-[11px] font-semibold tracking-[0.28em] text-[#4a463c] uppercase sm:text-xs">
//               {partnerHeading}
//             </p>
//             <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
//               {partners.map((partner, index) => {
//                 const PartnerIcon = partnerIcons[index] ?? Cog;
//                 const showDivider = index < partners.length - 1;
//                 return (
//                   <div
//                     key={partner}
//                     className={`flex items-center justify-center gap-2.5 ${
//                       showDivider ? "lg:border-r lg:border-[#c9c4b8]" : ""
//                     }`}
//                   >
//                     <PartnerIcon
//                       className="size-4 shrink-0 text-[#4a463c]"
//                       strokeWidth={1.6}
//                       aria-hidden
//                     />
//                     <span className="text-[10px] font-semibold tracking-[0.14em] text-[#4a463c] uppercase sm:text-[11px]">
//                       {partner}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </Reveal>
//     </section>
//   );
// }




import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Cog,
  Cross,
  Gauge,
  Globe,
  Handshake,
  Leaf,
  Pickaxe,
  RadioTower,
  Shield,
  ShieldCheck,
  Signal,
  Timer,
  Users,
  VolumeX,
  Wrench,
} from "lucide-react";
import { customerPartners, productUiLabels } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";
const cream = "#f7f5ef";
const charcoal = "#06141d";

const categoryIcons: LucideIcon[] = [Shield, RadioTower, Pickaxe, Cross];

const statIcons: LucideIcon[][] = [
  [Timer, ShieldCheck, Leaf],
  [RadioTower, Signal, Leaf],
  [Gauge, Wrench, ShieldCheck],
  [Timer, VolumeX, Users],
];

const partnerIcons: LucideIcon[] = [Cog, Handshake, ShieldCheck, Globe, Award];

export function CustomersPartners() {
  const {
    eyebrow,
    headingBefore,
    headingAccent,
    body,
    cases,
    partnerHeading,
    partners,
  } = customerPartners;

  return (
    <section
      id="customer-partners"
      className="w-full overflow-hidden"
      style={{ background: cream }}
    >
      <div className="mx-auto w-full max-w-[1760px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <Reveal variant="up">
          <p
            className="text-center font-display text-[16px] font-bold tracking-[0.24em] uppercase"
            style={{ color: sage }}
          >
            {eyebrow}
          </p>

          <h2 className="mt-3 text-center font-display text-[38px] leading-[0.9] font-bold tracking-[-0.025em] text-[#080b09] uppercase sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem]">
            {headingBefore}{" "}
            <span style={{ color: sage }}>{headingAccent}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-center text-[14px] leading-[1.55] text-[#24313a] sm:text-base lg:text-[17px]">
            {body}
          </p>
        </Reveal>

        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-6 lg:gap-4 xl:grid-cols-4 2xl:gap-5"
          step={80}
          variant="up"
        >
          {cases.map((item, index) => {
            const CategoryIcon = categoryIcons[index] ?? Shield;
            const icons = statIcons[index] ?? statIcons[0];

            return (
              <article
                key={item.category}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[12px] border transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: charcoal,
                  borderColor: "#23323a",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[1.5/1] w-full shrink-0 overflow-hidden">
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.image}
                      fill
                      quality={85}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <PlaceholderMedia
                      label={item.image}
                      className="absolute inset-0 min-h-full"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06141d]/25 to-transparent" />

                  <div className="absolute top-3 left-3 z-10 max-w-[calc(100%-24px)]">
                    <span
                      className="inline-flex max-w-full items-center gap-2 rounded-[5px] border px-2.5 py-1.5 backdrop-blur-md"
                      style={{
                        background: "rgba(4,13,18,.88)",
                        borderColor: `${sage}99`,
                      }}
                    >
                      <CategoryIcon
                        className="size-[14px] shrink-0"
                        strokeWidth={1.8}
                        style={{ color: "#8eaf3e" }}
                      />

                      <span className="truncate text-[9px] font-bold tracking-[0.1em] text-white uppercase">
                        {item.category}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div
                      className="font-display text-[50px] font-bold leading-[0.5]"
                      style={{ color: "#8bb52e" }}
                      aria-hidden
                    >
                      “
                    </div>

                    <h3 className="mt-0 min-h-[48px] font-display text-[17px] leading-[1.04] font-bold tracking-[-0.01em] text-white uppercase sm:text-[18px] lg:text-[22px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 min-h-[68px] text-[12px] leading-[1.5] text-[#e9eeeb]/80 sm:text-[14px]">
                      {item.body}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 grid min-w-0 grid-cols-[repeat(3,minmax(0,1fr))] border-t border-white/15 pt-4">
                      {item.stats.map((stat, statIndex) => {
                        const StatIcon = icons[statIndex];

                        return (
                          <div
                            key={`${item.category}-${stat.value}`}
                            className={`min-w-0 overflow-hidden px-2 first:pl-0 last:pr-0 ${statIndex < item.stats.length - 1
                                ? "border-r border-white/15"
                                : ""
                              }`}
                          >
                            <div className="flex min-w-0 items-start gap-1 sm:gap-1.5">
                              {StatIcon && (
                                <StatIcon
                                  className="mt-0.5 size-[14px] shrink-0 sm:size-[15px]"
                                  strokeWidth={1.7}
                                  style={{ color: "#8bb52e" }}
                                  aria-hidden
                                />
                              )}

                              <div className="min-w-0 flex-1">
                                <p
                                  className="max-w-full text-[9px] font-bold leading-[1.05] tracking-[-0.015em] text-white sm:text-[10px] md:text-[12px]"
                                  style={{
                                    overflowWrap: "anywhere",
                                  }}
                                >
                                  {stat.value}
                                </p>

                                <p
                                  className="mt-1 max-w-full text-[7px] font-semibold leading-[1.2] tracking-[0.01em] text-[#e7ebe8]/80 uppercase sm:text-[8px]"
                                  style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                  }}
                                >
                                  {stat.label}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={item.href}
                    className="group/link flex min-h-[48px] items-center justify-between border-t px-4 transition-colors hover:bg-white/[0.035] sm:px-5"
                    style={{ borderColor: "rgba(255,255,255,.13)" }}
                  >
                    <span className="text-[9px] font-bold tracking-[0.08em] text-white uppercase sm:text-[10px]">
                      {productUiLabels.viewSuccessStory}
                    </span>

                    <ArrowRight
                      className="size-4 shrink-0 transition-transform group-hover/link:translate-x-1"
                      strokeWidth={1.8}
                      style={{ color: "#8bb52e" }}
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </RevealStagger>
      </div>

      {/* Partner Bar */}
      <Reveal variant="fade" delay={80}>
        <div className="border-t border-[#dedbd3] bg-[#fbfaf7]">
          <div className="mx-auto w-full max-w-[1760px] px-4 py-8 sm:px-6 sm:py-9 lg:px-8">
            <div className="flex items-center gap-5">
              <div className="hidden h-px flex-1 bg-[#d8d5cd] lg:block" />

              <p className="shrink-0 text-center font-display text-[15px] font-bold tracking-[0.04em] text-[#171b18] uppercase sm:text-[17px] lg:text-[19px]">
                {partnerHeading}
              </p>

              <div className="hidden h-px flex-1 bg-[#d8d5cd] lg:block" />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:mt-6 lg:grid-cols-5 lg:gap-0">
              {partners.map((partner, index) => {
                const PartnerIcon = partnerIcons[index] ?? Cog;

                return (
                  <div
                    key={partner}
                    className={`flex min-h-[58px] items-center justify-center gap-3 px-3 lg:px-5 ${index < partners.length - 1
                        ? "lg:border-r lg:border-[#d8d5cd]"
                        : ""
                      }`}
                  >
                    <PartnerIcon
                      className="size-[32px] shrink-0 text-[#414840] sm:size-[36px]"
                      strokeWidth={1.35}
                      aria-hidden
                    />

                    <span className="max-w-[155px] text-[10px] font-bold leading-[1.15] tracking-[0.03em] text-[#171b18] uppercase sm:text-[15px]">
                      {partner}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}