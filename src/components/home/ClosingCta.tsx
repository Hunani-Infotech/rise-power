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

const sage = "#6e7f42";
const cream = "#f3efe4";

const chipIcons: LucideIcon[] = [ShieldCheck, VolumeX, RefreshCw, Lock];

export function ClosingCta() {
  return (
    <section
      id="demo"
      className="relative w-full overflow-hidden py-16 text-[#f3efe4] sm:py-20 lg:py-24"
    >
      <Image
        src={closingCta.imageSrc ?? "/media/cta/closing.jpg"}
        alt={closingCta.image}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-[#0b0e0c]/72" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0b0e0c]/85 via-[#0b0e0c]/45 to-[#0b0e0c]/70" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0b0e0c]/80 via-transparent to-[#0b0e0c]/35" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <h2 className="max-w-xl font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              {closingCta.headingBefore}
              <br />
              <span style={{ color: sage }}>{closingCta.headingAccent}</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#f3efe4]/80 sm:text-base">
              {closingCta.body}
            </p>
          </div>

          <div className="border border-white/15 bg-[#0b0e0c]/55 p-6 backdrop-blur-md sm:p-8">
            <p
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: sage }}
            >
              {closingCta.panelEyebrow}
            </p>
            <h3 className="mt-3 font-display text-2xl leading-tight font-semibold tracking-tight text-white sm:text-3xl">
              {closingCta.panelHeading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f3efe4]/75">
              {closingCta.panelBody}
            </p>
            <div className="mt-6 flex flex-col gap-3 lg:flex-row">
              <Link
                href={closingCta.primaryCta.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold tracking-wide uppercase"
                style={{ background: sage, color: cream }}
              >
                {closingCta.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={closingCta.secondaryCta.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#f3efe4]/70 px-6 text-sm font-semibold tracking-wide text-[#f3efe4] uppercase transition-colors hover:bg-[#f3efe4]/10"
              >
                <Download className="size-4" />
                {closingCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:mt-16">
          {closingCta.chips.map((chip, index) => {
            const Icon = chipIcons[index] ?? ShieldCheck;
            return (
              <div key={chip.title} className="flex flex-col items-start gap-3">
                <span
                  className="grid size-11 place-items-center rounded-full border"
                  style={{ borderColor: `${sage}99`, color: sage }}
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <div>
                  <p
                    className="text-[11px] font-semibold tracking-[0.14em] uppercase"
                    style={{ color: sage }}
                  >
                    {chip.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-[#f3efe4]/70">
                    {chip.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
