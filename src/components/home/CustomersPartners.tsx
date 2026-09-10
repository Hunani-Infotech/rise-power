import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Cog,
  Cross,
  Droplets,
  Gauge,
  Globe,
  Handshake,
  Leaf,
  Pickaxe,
  Quote,
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
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";
const cream = "#f7f5ef";
const charcoal = "#141a14";
const partnerBarBg = "#ebe8e0";

const categoryIcons: LucideIcon[] = [Shield, RadioTower, Pickaxe, Cross];

const statIcons: LucideIcon[][] = [
  [Timer, ShieldCheck, Leaf],
  [RadioTower, Signal, Droplets],
  [Gauge, Wrench, ShieldCheck],
  [Timer, VolumeX, Users],
];

const partnerIcons: LucideIcon[] = [
  Cog,
  Handshake,
  ShieldCheck,
  Globe,
  Award,
];

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
    <section id="customer-partners" className="w-full" style={{ background: cream }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
        <p
          className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: sage }}
        >
          {eyebrow}
        </p>
        <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight text-[#141a14] uppercase sm:text-5xl lg:text-6xl">
          {headingBefore}{" "}
          <span style={{ color: sage }}>{headingAccent}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
          {body}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => {
            const CategoryIcon = categoryIcons[index] ?? Shield;
            const icons = statIcons[index] ?? statIcons[0];

            return (
              <article
                key={item.category}
                className="flex flex-col overflow-hidden rounded-md text-[#f3efe4]"
                style={{ background: charcoal }}
              >
                <div className="relative aspect-[16/10] w-full shrink-0">
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.image}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <PlaceholderMedia
                      label={item.image}
                      className="absolute inset-0 min-h-full"
                    />
                  )}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b0e0c]/85 px-2.5 py-1 backdrop-blur-sm">
                      <CategoryIcon
                        className="size-3.5 shrink-0"
                        strokeWidth={1.8}
                        style={{ color: sage }}
                      />
                      <span className="text-[9px] font-semibold tracking-[0.14em] text-white uppercase">
                        {item.category}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <Quote
                    className="size-5"
                    strokeWidth={1.6}
                    style={{ color: sage }}
                    aria-hidden
                  />
                  <h3 className="mt-2 font-display text-xl leading-tight font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#f3efe4]/65">
                    {item.body}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-white/10 pt-4">
                    {item.stats.map((stat, i) => {
                      const StatIcon = icons[i];
                      return (
                        <li key={stat.value} className="flex items-start gap-2.5">
                          {StatIcon ? (
                            <StatIcon
                              className="mt-0.5 size-4 shrink-0"
                              strokeWidth={1.7}
                              style={{ color: sage }}
                            />
                          ) : null}
                          <div className="min-w-0">
                            <p className="text-[13px] leading-snug font-semibold tracking-wide text-white">
                              {stat.value}
                            </p>
                            <p className="text-[11px] leading-snug text-[#f3efe4]/55">
                              {stat.label}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href={item.href}
                    className="mt-auto flex w-full items-center justify-between pt-6 text-[11px] font-semibold tracking-[0.16em] uppercase sm:text-xs"
                    style={{ color: sage }}
                  >
                    <span>{productUiLabels.viewSuccessStory}</span>
                    <ArrowRight className="size-4 shrink-0" strokeWidth={1.8} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div style={{ background: partnerBarBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-10 lg:px-10">
          <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-[#4a463c] uppercase">
            {partnerHeading}
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0 lg:flex-nowrap">
            {partners.map((partner, index) => {
              const PartnerIcon = partnerIcons[index] ?? Cog;
              const isLast = index === partners.length - 1;
              return (
                <div
                  key={partner}
                  className={`flex items-center gap-2.5 sm:px-4 lg:px-5 ${
                    isLast
                      ? ""
                      : "sm:border-r sm:border-[#c9c4b8]"
                  }`}
                >
                  <PartnerIcon
                    className="size-4 shrink-0 text-[#4a463c]"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-[#4a463c] uppercase sm:text-[11px]">
                    {partner}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
