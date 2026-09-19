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

      {/* Overall dark mood */}
      <div className="absolute inset-0 bg-[#061018]/55" />

      {/* Left text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061018]/95 via-[#061018]/70 to-transparent" />

      {/* Right side slight dark */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#061018]/45 via-transparent to-transparent" />

      {/* Bottom cinematic fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061018]/75 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1716px] px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="grid items-center xl:grid-cols-[1.45fr_0.7fr] xl:gap-8">
          {/* Story — shown once */}
          <div className="max-w-[780px]">
            <Reveal variant="up">
              <h2 className="type-section-h2">
                {closingCta.headingBefore}
                <br />
                <span style={{ color: sage }}>{closingCta.headingAccent}</span>
              </h2>

              <p className="type-section-body mt-4 max-w-[650px] !text-white sm:mt-6">
                {closingCta.body}
              </p>
            </Reveal>

            <RevealStagger
              className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4 sm:mt-9 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-6 lg:mt-11"
              step={70}
              variant="up"
              baseDelay={40}
            >
              {closingCta.chips.map((chip, index) => {
                const Icon = chipIcons[index] ?? ShieldCheck;

                return (
                  <div
                    key={chip.title}
                    className="group relative flex min-w-0 items-start gap-2.5 sm:gap-3"
                  >
                    <span
                      className="relative grid size-9 shrink-0 place-items-center rounded-full sm:size-11"
                      aria-hidden
                    >
                      <span
                        className="absolute inset-0 rounded-full opacity-35 transition-opacity duration-300 group-hover:opacity-60"
                        style={{
                          background: `radial-gradient(circle, ${sage}40 0%, transparent 72%)`,
                        }}
                      />
                      <span
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: `${sage}70` }}
                      />
                      <span className="absolute inset-[2px] rounded-full border border-white/10 bg-[#061018]/40" />
                      <Icon
                        className="relative size-4 sm:size-[18px]"
                        strokeWidth={1.45}
                        style={{ color: cream }}
                      />
                    </span>

                    <div className="min-w-0 pt-0.5">
                      <p className="type-card-label text-[10px] leading-tight text-white sm:text-[11px]">
                        {chip.title}
                      </p>
                      <p className="type-card-body-on-dark mt-0.5 hidden sm:block">
                        {chip.subtitle}
                      </p>
                      <span
                        className="mt-1.5 hidden h-px w-6 origin-left transition-transform duration-300 group-hover:scale-x-125 sm:mt-2 sm:block"
                        style={{ background: sage }}
                        aria-hidden
                      />
                    </div>
                  </div>
                );
              })}
            </RevealStagger>
          </div>

          {/* Actions only — no repeated headline/body */}
          <Reveal variant="right" delay={120} className="mt-8 sm:mt-10 lg:mt-0">
            <div className="border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <p className="type-eyebrow text-white">
                {closingCta.panelEyebrow}
              </p>

              <div className="mt-4 flex max-w-[430px] flex-col gap-2.5 sm:mt-6 sm:gap-3">
                <Link
                  href={closingCta.primaryCta.href}
                  className="type-cta motion-hover-glow inline-flex min-h-11 items-center justify-center gap-3 rounded-sm bg-[#849363] px-6 transition-transform hover:-translate-y-0.5 sm:min-h-12"
                  style={{ color: cream }}
                >
                  {closingCta.primaryCta.label}
                  <ArrowRight className="size-5" />
                </Link>

                <Link
                  href={closingCta.secondaryCta.href}
                  className="type-cta inline-flex min-h-11 items-center justify-center gap-3 rounded-sm border border-[#f3efe4]/50 px-6 text-[#f3efe4] transition-colors hover:bg-white/10 sm:min-h-12"
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
  );
}
