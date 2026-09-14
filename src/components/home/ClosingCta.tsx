// import Image from "next/image";
// import Link from "next/link";
// import type { LucideIcon } from "lucide-react";
// import {
//   ArrowRight,
//   Download,
//   Lock,
//   RefreshCw,
//   ShieldCheck,
//   VolumeX,
// } from "lucide-react";
// import { closingCta } from "@/lib/home-content";
// import { Reveal, RevealStagger } from "@/components/motion/Reveal";

// const sage = "#6e7f42";
// const cream = "#f3efe4";

// const chipIcons: LucideIcon[] = [ShieldCheck, VolumeX, RefreshCw, Lock];

// export function ClosingCta() {
//   return (
//     <section
//       id="demo"
//       className="relative w-full overflow-hidden py-16 text-[#f3efe4] sm:py-20 lg:py-24"
//     >
//       <Image
//         src={closingCta.imageSrc ?? "/media/cta/closing.jpg"}
//         alt={closingCta.image}
//         fill
//         quality={75}
//         className="object-cover object-center"
//         sizes="100vw"
//         priority={false}
//       />
//       <div className="absolute inset-0 bg-[#0b0e0c]/72" />
//       <div className="absolute inset-0 bg-linear-to-r from-[#0b0e0c]/85 via-[#0b0e0c]/45 to-[#0b0e0c]/70" />
//       <div className="absolute inset-0 bg-linear-to-t from-[#0b0e0c]/80 via-transparent to-[#0b0e0c]/35" />

//       <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
//         <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
//           <Reveal variant="up">
//             <h2 className="max-w-xl font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
//               {closingCta.headingBefore}
//               <br />
//               <span style={{ color: sage }}>{closingCta.headingAccent}</span>
//             </h2>
//             <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#f3efe4]/80 sm:text-base">
//               {closingCta.body}
//             </p>
//           </Reveal>

//           <Reveal
//             variant="right"
//             delay={120}
//             className="border border-white/15 bg-[#0b0e0c]/55 p-6 backdrop-blur-md sm:p-8"
//           >
//             <p
//               className="text-[11px] font-semibold tracking-[0.2em] uppercase"
//               style={{ color: sage }}
//             >
//               {closingCta.panelEyebrow}
//             </p>
//             <h3 className="mt-3 font-display text-2xl leading-tight font-semibold tracking-tight text-white sm:text-3xl">
//               {closingCta.panelHeading}
//             </h3>
//             <p className="mt-3 text-sm leading-relaxed text-[#f3efe4]/75">
//               {closingCta.panelBody}
//             </p>
//             <div className="mt-6 flex flex-col gap-3 lg:flex-row">
//               <Link
//                 href={closingCta.primaryCta.href}
//                 className="motion-hover-glow inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold tracking-wide uppercase"
//                 style={{ background: sage, color: cream }}
//               >
//                 {closingCta.primaryCta.label}
//                 <ArrowRight className="size-4" />
//               </Link>
//               <Link
//                 href={closingCta.secondaryCta.href}
//                 className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#f3efe4]/70 px-6 text-sm font-semibold tracking-wide text-[#f3efe4] uppercase transition-colors hover:bg-[#f3efe4]/10"
//               >
//                 <Download className="size-4" />
//                 {closingCta.secondaryCta.label}
//               </Link>
//             </div>
//           </Reveal>
//         </div>

//         <RevealStagger
//           className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:mt-16"
//           step={80}
//           variant="up"
//           baseDelay={80}
//         >
//           {closingCta.chips.map((chip, index) => {
//             const Icon = chipIcons[index] ?? ShieldCheck;
//             return (
//               <div key={chip.title} className="flex flex-col items-start gap-3">
//                 <span
//                   className="grid size-11 place-items-center rounded-full border"
//                   style={{ borderColor: `${sage}99`, color: sage }}
//                   aria-hidden
//                 >
//                   <Icon className="size-5" strokeWidth={1.6} />
//                 </span>
//                 <div>
//                   <p
//                     className="text-[11px] font-semibold tracking-[0.14em] uppercase"
//                     style={{ color: sage }}
//                   >
//                     {chip.title}
//                   </p>
//                   <p className="mt-1 text-[12px] leading-snug text-[#f3efe4]/70">
//                     {chip.subtitle}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </RevealStagger>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Download,
  Lock,
  RefreshCw,
  ShieldCheck,
  VolumeX,
} from "lucide-react";
import { closingCta } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const cream = "#f3efe4";

const chipIcons: LucideIcon[] = [
  ShieldCheck,
  VolumeX,
  RefreshCw,
  Lock,
];

export function ClosingCta() {
  return (
    <>
      <section
        id="demo"
        className="relative w-full overflow-hidden text-[#f3efe4]"
      >
        <Image
          src={closingCta.imageSrc ?? "/media/cta/closing.jpg"}
          alt={closingCta.image}
          fill
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#061018]/75" />
        <div className="absolute inset-0 bg-linear-to-r from-[#061018]/95 via-[#061018]/60 to-[#061018]/35" />
        <div className="absolute inset-0 bg-linear-to-t from-[#061018]/90 via-transparent to-[#061018]/25" />

        <div className="relative mx-auto w-full max-w-[1716px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid items-center lg:grid-cols-[1.45fr_0.7fr] lg:gap-8">
            {/* Left */}
            <Reveal variant="up" className="max-w-[780px]">
              <h2 className="font-display text-[42px] leading-[0.9] font-bold tracking-[-0.025em] uppercase sm:text-5xl md:text-6xl lg:text-[4.4rem] xl:text-[4.8rem]">
                {closingCta.headingBefore}
                <br />
                <span style={{ color: sage }}>
                  {closingCta.headingAccent}
                </span>
              </h2>

              <p className="mt-6 max-w-[650px] text-sm leading-7 text-[#f3efe4]/85 sm:text-base lg:text-[17px]">
                {closingCta.body}
              </p>

              <RevealStagger
                className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:mt-11"
                step={70}
                variant="up"
                baseDelay={80}
              >
                {closingCta.chips.map((chip, index) => {
                  const Icon = chipIcons[index] ?? ShieldCheck;

                  return (
                    <div
                      key={chip.title}
                      className="flex min-w-0 items-start gap-3"
                    >
                      <span
                        className="grid size-10 shrink-0 place-items-center rounded-full border"
                        style={{
                          borderColor: `${sage}99`,
                          color: sage,
                        }}
                        aria-hidden
                      >
                        <Icon
                          className="size-[18px]"
                          strokeWidth={1.7}
                        />
                      </span>

                      <div className="min-w-0">
                        <p
                          className="text-[10px] font-semibold tracking-[0.12em] uppercase sm:text-[11px]"
                          style={{ color: sage }}
                        >
                          {chip.title}
                        </p>

                        <p className="mt-1 text-[11px] leading-[1.45] text-[#f3efe4]/70 sm:text-xs">
                          {chip.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </RevealStagger>
            </Reveal>

            {/* Right CTA */}
            <Reveal
              variant="right"
              delay={120}
              className="mt-10 lg:mt-0"
            >
              <div className="border-l border-white/15 pl-0 lg:pl-10">
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase sm:text-[16px]"
                  style={{ color: sage }}
                >
                  {closingCta.panelEyebrow}
                </p>

                <h3 className="mt-3 max-w-[430px] font-display text-[28px] leading-[1.05] font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
                  {closingCta.panelHeading}
                </h3>

                <p className="mt-4 max-w-[430px] text-sm leading-6 text-[#f3efe4]/75">
                  {closingCta.panelBody}
                </p>

                <div className="mt-6 flex max-w-[430px] flex-col gap-3">
                  <Link
                    href={closingCta.primaryCta.href}
                    className="motion-hover-glow inline-flex min-h-14 items-center justify-center gap-3 px-6 text-sm font-semibold tracking-[0.06em] uppercase transition-transform hover:-translate-y-0.5 rounded-sm"
                    style={{
                      background: sage,
                      color: cream,
                    }}
                  >
                    {closingCta.primaryCta.label}
                    <ArrowRight className="size-5" />
                  </Link>

                  <Link
                    href={closingCta.secondaryCta.href}
                    className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#f3efe4]/50 px-6 text-sm font-semibold tracking-[0.06em] text-[#f3efe4] uppercase transition-colors hover:bg-white/10 rounded-sm"
                  >
                    {closingCta.secondaryCta.label}
                    <Download className="size-5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}