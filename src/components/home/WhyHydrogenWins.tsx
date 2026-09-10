import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Globe,
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
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";
const cream = "#f7f5ef";
const charcoal = "#141a14";

const rowIcons: LucideIcon[] = [VolumeX, Leaf, Wrench, RefreshCw, Timer];
const benefitIcons: LucideIcon[] = [Leaf, VolumeX, Wrench, Timer];
const iconBarIcons: LucideIcon[] = [
  ShieldCheck,
  TrendingUp,
  Droplets,
  Globe,
  Lock,
];

function CircledIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span
      className="grid size-10 shrink-0 place-items-center rounded-full border"
      style={{ borderColor: sage, color: sage }}
      aria-hidden
    >
      <Icon className="size-[18px]" strokeWidth={1.6} />
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
      className="w-full px-6 py-16 sm:py-20 lg:px-10 lg:py-24"
      style={{ background: cream }}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <p
          className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: sage }}
        >
          {eyebrow}
        </p>
        <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight text-[#141a14] uppercase sm:text-5xl lg:text-6xl">
          {headingBefore}{" "}
          <span style={{ color: sage }}>{headingAccent}</span> {headingAfter}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
          {body}
        </p>

        {/* Main grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          {/* Comparison table */}
          <div
            className="overflow-hidden rounded-2xl p-5 sm:p-6"
            style={{ background: charcoal }}
          >
            <h3
              className="text-center text-sm font-bold tracking-[0.18em] uppercase sm:text-base"
              style={{ color: sage }}
            >
              {tableHeading}
            </h3>

            <div className="mt-5 grid grid-cols-[1.2fr_1fr_1fr] gap-0 text-[11px] font-semibold tracking-[0.14em] uppercase">
              {columns.map((col, i) => (
                <div
                  key={col}
                  className={`px-2 py-3 sm:px-3 ${
                    i === 1
                      ? "rounded-t-lg border border-b-0"
                      : "text-[#f3efe4]/55"
                  }`}
                  style={
                    i === 1
                      ? {
                          color: sage,
                          borderColor: sage,
                          boxShadow: `0 0 18px ${sage}33, inset 0 0 12px ${sage}14`,
                        }
                      : undefined
                  }
                >
                  {col}
                </div>
              ))}
            </div>

            {rows.map((row, index) => {
              const Icon = rowIcons[index] ?? Leaf;
              const isLast = index === rows.length - 1;
              return (
                <div
                  key={row.metric}
                  className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-[#2a3228]"
                >
                  <div className="flex items-center gap-2.5 px-2 py-3.5 text-sm text-[#f3efe4] sm:gap-3 sm:px-3 sm:py-4">
                    <Icon
                      className="size-4 shrink-0 sm:size-[18px]"
                      strokeWidth={1.6}
                      style={{ color: sage }}
                      aria-hidden
                    />
                    <span className="font-medium">{row.metric}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 px-2 py-3.5 text-sm font-semibold sm:px-3 sm:py-4 ${
                      isLast ? "rounded-b-lg border border-t-0" : "border-x"
                    }`}
                    style={{
                      color: sage,
                      borderColor: sage,
                      boxShadow: `0 0 18px ${sage}22, inset 0 0 10px ${sage}10`,
                    }}
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ background: sage }}
                      aria-hidden
                    />
                    {row.hydrogen}
                  </div>
                  <div className="flex items-center px-2 py-3.5 text-sm text-[#f3efe4]/45 sm:px-3 sm:py-4">
                    {row.diesel}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image + benefits */}
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={image}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              ) : (
                <PlaceholderMedia
                  label={image}
                  className="absolute inset-0 min-h-full"
                />
              )}
            </div>

            <ul className="mt-6 space-y-5">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index] ?? Leaf;
                return (
                  <li key={benefit.title} className="flex gap-3.5">
                    <CircledIcon icon={Icon} />
                    <div>
                      <p className="text-sm font-semibold tracking-[0.12em] text-[#141a14] uppercase">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5c584e]">
                        {benefit.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom icon bar */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#ddd8cc] pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {iconBar.map((item, index) => {
            const Icon = iconBarIcons[index] ?? ShieldCheck;
            return (
              <div key={item.title} className="flex flex-col items-center text-center">
                <CircledIcon icon={Icon} />
                <p className="mt-3 text-[11px] font-semibold tracking-[0.16em] text-[#141a14] uppercase">
                  {item.title}
                </p>
                <p className="mt-1.5 max-w-[12rem] text-xs leading-relaxed text-[#5c584e]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
