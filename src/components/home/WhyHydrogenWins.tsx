// import Image from "next/image";
// import type { LucideIcon } from "lucide-react";
// import {
//   Droplets,
//   Globe,
//   Leaf,
//   Lock,
//   RefreshCw,
//   ShieldCheck,
//   Timer,
//   TrendingUp,
//   VolumeX,
//   Wrench,
// } from "lucide-react";
// import { whyHydrogenWins } from "@/lib/home-content";
// import { Reveal, RevealStagger } from "@/components/motion/Reveal";
// import { PlaceholderMedia } from "./PlaceholderMedia";

// const sage = "#6e7f42";
// const cream = "#f7f5ef";
// const charcoal = "#141a14";

// const rowIcons: LucideIcon[] = [VolumeX, Leaf, Wrench, RefreshCw, Timer];
// const benefitIcons: LucideIcon[] = [Leaf, VolumeX, Wrench, Timer];
// const iconBarIcons: LucideIcon[] = [
//   ShieldCheck,
//   TrendingUp,
//   Droplets,
//   Globe,
//   Lock,
// ];

// function CircledIcon({ icon: Icon }: { icon: LucideIcon }) {
//   return (
//     <span
//       className="grid size-10 shrink-0 place-items-center rounded-full border"
//       style={{ borderColor: sage, color: sage }}
//       aria-hidden
//     >
//       <Icon className="size-[18px]" strokeWidth={1.6} />
//     </span>
//   );
// }

// export function WhyHydrogenWins() {
//   const {
//     eyebrow,
//     headingBefore,
//     headingAccent,
//     headingAfter,
//     body,
//     tableHeading,
//     columns,
//     rows,
//     benefits,
//     iconBar,
//     image,
//     imageSrc,
//   } = whyHydrogenWins;

//   return (
//     <section
//       id="why-hydrogen-wins"
//       className="w-full py-16 sm:py-20 lg:py-24"
//       style={{ background: cream }}
//     >
//       <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//         {/* Header */}
//         <Reveal variant="up">
//           <p
//             className="text-center font-display text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
//             style={{ color: sage }}
//           >
//             {eyebrow}
//           </p>
//           <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight text-[#141a14] uppercase sm:text-5xl lg:text-6xl">
//             {headingBefore}{" "}
//             <span style={{ color: sage }}>{headingAccent}</span> {headingAfter}
//           </h2>
//           <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
//             {body}
//           </p>
//         </Reveal>

//         {/* Main grid */}
//         <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-10">
//           {/* Comparison table */}
//           <Reveal variant="left" className="min-w-0 w-full">
//             <div
//               className="overflow-hidden rounded-md p-5 sm:p-6"
//               style={{ background: charcoal }}
//             >
//               <h3
//                 className="text-center text-sm font-bold tracking-[0.18em] uppercase sm:text-base"
//                 style={{ color: sage }}
//               >
//                 {tableHeading}
//               </h3>

//               <div className="mt-5 overflow-x-auto">
//                 <div className="min-w-[32rem]">
//                   <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-0 text-[11px] font-semibold tracking-[0.14em] uppercase">
//                     {columns.map((col, i) => (
//                       <div
//                         key={col}
//                         className={`px-2 py-3 sm:px-3 ${
//                           i === 1
//                             ? "rounded-t-lg border border-b-0"
//                             : "text-[#f3efe4]/55"
//                         }`}
//                         style={
//                           i === 1
//                             ? {
//                                 color: sage,
//                                 borderColor: sage,
//                                 boxShadow: `0 0 18px ${sage}33, inset 0 0 12px ${sage}14`,
//                               }
//                             : undefined
//                         }
//                       >
//                         {col}
//                       </div>
//                     ))}
//                   </div>

//                   {rows.map((row, index) => {
//                     const Icon = rowIcons[index] ?? Leaf;
//                     const isLast = index === rows.length - 1;
//                     return (
//                       <div
//                         key={row.metric}
//                         className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-[#2a3228]"
//                       >
//                         <div className="flex items-center gap-2.5 px-2 py-3.5 text-sm text-[#f3efe4] sm:gap-3 sm:px-3 sm:py-4">
//                           <Icon
//                             className="hidden size-4 shrink-0 sm:block sm:size-[18px]"
//                             strokeWidth={1.6}
//                             style={{ color: sage }}
//                             aria-hidden
//                           />
//                           <span className="font-medium">{row.metric}</span>
//                         </div>
//                         <div
//                           className={`flex items-center gap-2 px-2 py-3.5 text-sm font-semibold sm:px-3 sm:py-4 ${
//                             isLast ? "rounded-b-lg border border-t-0" : "border-x"
//                           }`}
//                           style={{
//                             color: sage,
//                             borderColor: sage,
//                             boxShadow: `0 0 18px ${sage}22, inset 0 0 10px ${sage}10`,
//                           }}
//                         >
//                           <span
//                             className="size-1.5 shrink-0 rounded-full"
//                             style={{ background: sage }}
//                             aria-hidden
//                           />
//                           {row.hydrogen}
//                         </div>
//                         <div className="flex items-center px-2 py-3.5 text-sm text-[#f3efe4]/45 sm:px-3 sm:py-4">
//                           {row.diesel}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           {/* Image + benefits */}
//           <Reveal variant="right" delay={100} className="min-w-0 w-full">
//             <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
//               {imageSrc ? (
//                 <Image
//                   src={imageSrc}
//                   alt={image}
//                   fill
//                   quality={75}
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 45vw"
//                 />
//               ) : (
//                 <PlaceholderMedia
//                   label={image}
//                   className="absolute inset-0 min-h-full"
//                 />
//               )}
//             </div>

//             <ul className="mt-6 space-y-5">
//               {benefits.map((benefit, index) => {
//                 const Icon = benefitIcons[index] ?? Leaf;
//                 return (
//                   <li key={benefit.title} className="flex gap-3.5">
//                     <CircledIcon icon={Icon} />
//                     <div>
//                       <p className="text-sm font-semibold tracking-[0.12em] text-[#141a14] uppercase">
//                         {benefit.title}
//                       </p>
//                       <p className="mt-1 text-sm leading-relaxed text-[#5c584e]">
//                         {benefit.body}
//                       </p>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </Reveal>
//         </div>

//         {/* Bottom icon bar */}
//         <RevealStagger
//           className="mt-12 grid grid-cols-2 gap-6 border-t border-[#ddd8cc] pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 [&>*:last-child]:col-span-2 [&>*:last-child]:justify-self-center sm:[&>*:last-child]:col-span-1 sm:[&>*:last-child]:justify-self-auto"
//           step={80}
//           variant="up"
//         >
//           {iconBar.map((item, index) => {
//             const Icon = iconBarIcons[index] ?? ShieldCheck;
//             return (
//               <div
//                 key={item.title}
//                 className="flex flex-col items-center text-center"
//               >
//                 <CircledIcon icon={Icon} />
//                 <p className="mt-3 text-[11px] font-semibold tracking-[0.16em] text-[#141a14] uppercase">
//                   {item.title}
//                 </p>
//                 <p className="mt-1.5 max-w-[12rem] text-xs leading-relaxed text-[#5c584e]">
//                   {item.body}
//                 </p>
//               </div>
//             );
//           })}
//         </RevealStagger>
//       </div>
//     </section>
//   );
// }




import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import {
  Droplets,
  Leaf,
  Lock,
  RefreshCw,
  ShieldCheck,
  Timer,
  TrendingUp,
  VolumeX,
  Wrench,
} from "lucide-react";

import { whyHydrogenWins } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";
const cream = "#f7f5ef";
const charcoal = "#071219";
const border = "#dfe2dc";

const rowIcons: LucideIcon[] = [
  VolumeX,
  Leaf,
  Wrench,
  RefreshCw,
  Timer,
];

const benefitIcons: LucideIcon[] = [
  Leaf,
  VolumeX,
  Wrench,
  Timer,
];

const iconBarIcons: LucideIcon[] = [
  ShieldCheck,
  TrendingUp,
  Droplets,
  Leaf,
  Lock,
];

function CircledIcon({
  icon: Icon,
  size = "normal",
}: {
  icon: LucideIcon;
  size?: "normal" | "large";
}) {
  return (
    <span
      className={
        size === "large"
          ? "grid size-[54px] shrink-0 place-items-center rounded-full border"
          : "grid size-10 shrink-0 place-items-center rounded-full border"
      }
      style={{
        borderColor: "#a6bd78",
        color: sage,
      }}
      aria-hidden
    >
      <Icon
        className={size === "large" ? "size-6" : "size-[18px]"}
        strokeWidth={1.65}
      />
    </span>
  );
}

export function WhyHydrogenWins() {
  const {
    eyebrow,
    headingBefore,
    headingAccent,
    headingAfter,
    body,
    tableHeading,
    columns,
    rows,
    benefits,
    iconBar,
    image,
    imageSrc,
  } = whyHydrogenWins;

  return (
    <section
      id="why-hydrogen-wins"
      className="w-full overflow-hidden py-14 sm:py-16 lg:py-[76px]"
      style={{ background: cream }}
    >
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10">
        {/* -------------------------------------------------
            HEADER
        ------------------------------------------------- */}
        <Reveal variant="up">
          <p
            className="text-center font-display text-[11px] font-bold tracking-[0.25em] uppercase sm:text-[16px]"
            style={{ color: sage }}
          >
            {eyebrow}
          </p>

          <h2
            className="
              mt-3
              text-center
              font-display
              text-[40px]
              leading-[0.88]
              font-bold
              tracking-[-0.025em]
              uppercase
              text-[#080b09]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.25rem]
              xl:text-[4.65rem]
            "
          >
            {headingBefore}{" "}
            <span style={{ color: sage }}>{headingAccent}</span>
            {headingAfter ? ` ${headingAfter}` : ""}
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[850px]
              text-center
              text-[14px]
              leading-[1.55]
              text-[#26333c]
              sm:text-base
              lg:text-[17px]
            "
          >
            {body}
          </p>
        </Reveal>

        {/* -------------------------------------------------
            MAIN CONTENT
        ------------------------------------------------- */}
        <div
          className="
            mt-9
            grid
            gap-4
            lg:mt-6
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-4
            xl:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* =================================================
              LEFT — HYDROGEN VS DIESEL
          ================================================= */}
          <Reveal
            variant="left"
            className="min-w-0 w-full"
          >
            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-[14px]
                border
                p-5
                sm:p-6
                lg:p-7
              "
              style={{
                background: charcoal,
                borderColor: "#243039",
              }}
            >
              {/* subtle technical glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle at 60% 45%, rgba(110,127,66,.18), transparent 42%)",
                }}
              />

              <div className="relative">
                <h3
                  className="
                    font-display
                    text-[20px]
                    font-bold
                    tracking-[0.04em]
                    uppercase
                    sm:text-[22px]
                    lg:text-[30px]
                  "
                >
                  <span style={{ color: sage }}>
                    {tableHeading.split(" ")[0]}
                  </span>{" "}
                  <span className="text-[#eef1ed]">
                    {tableHeading.substring(
                      tableHeading.indexOf(" ") + 1,
                    )}
                  </span>
                </h3>

                <div className="mt-5 overflow-x-auto">
                  <div className="min-w-[560px]">
                    {/* TABLE HEADER */}
                    <div className="grid grid-cols-[1.18fr_1fr_1fr]">
                      {columns.map((column, index) => (
                        <div
                          key={column}
                          className={`
                            relative
                            flex
                            min-h-[45px]
                            items-center
                            px-3
                            text-[20px]
                            font-bold
                            tracking-[0.12em]
                            uppercase
                            ${
                              index === 1
                                ? "justify-center border-x border-t"
                                : ""
                            }
                          `}
                          style={
                            index === 1
                              ? {
                                  color: "#91b642",
                                  borderColor: sage,
                                  background:
                                    "rgba(110,127,66,.10)",
                                }
                              : {
                                  color:
                                    index === 0
                                      ? "#bfc4c0"
                                      : "#aeb5b1",
                                }
                          }
                        >
                          {column}

                          {/* green diamond indicator */}
                          {index === 1 && (
                            <span
                              className="
                                absolute
                                -bottom-[5px]
                                left-1/2
                                size-[10px]
                                -translate-x-1/2
                                rotate-45
                              "
                              style={{ background: sage }}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* TABLE ROWS */}
                    {rows.map((row, index) => {
                      const Icon = rowIcons[index] ?? Leaf;
                      const isLast = index === rows.length - 1;

                      return (
                        <div
                          key={row.metric}
                          className="grid grid-cols-[1.18fr_1fr_1fr]"
                        >
                          {/* Metric */}
                          <div
                            className="
                              flex
                              min-h-[66px]
                              items-center
                              gap-3
                              border-t
                              border-[#29343a]
                              px-3
                              text-[14px]
                              font-medium
                              text-[#f1f3ef]
                              sm:text-[20px]
                            "
                          >
                            <Icon
                              className="size-[20px] shrink-0"
                              strokeWidth={1.55}
                              style={{ color: "#91b642" }}
                              aria-hidden
                            />

                            <span>{row.metric}</span>
                          </div>

                          {/* Hydrogen */}
                          <div
                            className={`
                              flex
                              min-h-[66px]
                              items-center
                              gap-3
                              border-x
                              border-t
                              px-4
                              text-[14px]
                              font-semibold
                              sm:text-[20px]
                              ${
                                isLast
                                  ? "rounded-b-none"
                                  : ""
                              }
                            `}
                            style={{
                              color: "#f1f3ef",
                              borderColor: sage,
                              background:
                                "rgba(110,127,66,.105)",
                              boxShadow:
                                "inset 0 0 25px rgba(110,127,66,.06)",
                            }}
                          >
                            <span
                              className="size-2 shrink-0 rounded-full"
                              style={{ background: "#8fbc27" }}
                            />

                            <span>{row.hydrogen}</span>
                          </div>

                          {/* Diesel */}
                          <div
                            className="
                              flex
                              min-h-[66px]
                              items-center
                              border-t
                              border-[#29343a]
                              px-4
                              text-[14px]
                              font-medium
                              text-[#edf0ed]
                              sm:text-[20px]
                            "
                          >
                            {row.diesel}
                          </div>
                        </div>
                      );
                    })}

                    {/* Close hydrogen column */}
                    <div
                      className="pointer-events-none absolute"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Bottom hydrogen border */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[38.6%]
                    hidden
                    h-[66px]
                    w-[30.9%]
                    border-x
                    border-b
                    lg:block
                  "
                  style={{
                    borderColor: sage,
                  }}
                />
              </div>
            </div>
          </Reveal>

          {/* =================================================
              RIGHT — IMAGE + BENEFITS
          ================================================= */}
          <Reveal
            variant="right"
            delay={100}
            className="min-w-0 w-full"
          >
            <div
              className="
                overflow-hidden
                rounded-[14px]
                border
                bg-white
              "
              style={{ borderColor: border }}
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/6.65] w-full overflow-hidden">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={image}
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                ) : (
                  <PlaceholderMedia
                    label={image}
                    className="absolute inset-0 min-h-full"
                  />
                )}

                {/* subtle image gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-16
                    bg-gradient-to-t
                    from-black/10
                    to-transparent
                  "
                />
              </div>

              {/* BENEFITS */}
              <div className="px-6 sm:px-7 lg:px-8">
                <ul>
                  {benefits.map((benefit, index) => {
                    const Icon =
                      benefitIcons[index] ?? Leaf;

                    return (
                      <li
                        key={benefit.title}
                        className="
                          flex
                          items-center
                          gap-4
                          border-b
                          py-4
                          last:border-b-0
                          sm:gap-5
                          sm:py-[15px]
                        "
                        style={{ borderColor: "#e3e6e1" }}
                      >
                        <CircledIcon
                          icon={Icon}
                          size="normal"
                        />

                        <div className="min-w-0">
                          <p
                            className="
                              text-[12px]
                              font-bold
                              tracking-[0.05em]
                              uppercase
                              sm:text-[15px]
                            "
                            style={{ color: sage }}
                          >
                            {benefit.title}
                          </p>

                          <p
                            className="
                              mt-0.5
                              max-w-[500px]
                              text-[12px]
                              leading-[1.45]
                              text-[#17222a]
                              sm:text-[13px]
                            "
                          >
                            {benefit.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* -------------------------------------------------
            BOTTOM ADVANTAGE BAR
        ------------------------------------------------- */}
        <RevealStagger
          className="
            mt-4
            grid
            grid-cols-2
            overflow-hidden
            rounded-[14px]
            border
            bg-white
            sm:grid-cols-3
            lg:grid-cols-5
          "
          step={70}
          variant="up"
        >
          {iconBar.map((item, index) => {
            const Icon =
              iconBarIcons[index] ?? ShieldCheck;

            return (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[88px]
                  items-center
                  gap-3
                  border-b
                  p-4
                  sm:p-5
                  lg:border-b-0
                  lg:border-r
                  lg:last:border-r-0
                "
                style={{ borderColor: "#e0e3de" }}
              >
                <CircledIcon icon={Icon} />

                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.07em]
                      uppercase
                      sm:text-[16px]
                    "
                    style={{ color: "#151a17" }}
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      leading-[1.4]
                      text-[#505852]
                      sm:text-[11px]
                    "
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}