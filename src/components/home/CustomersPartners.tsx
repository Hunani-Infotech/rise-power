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
import { SnapCarousel } from "./SnapCarousel";

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

type CaseItem = (typeof customerPartners.cases)[number];

function CaseCard({ item, index }: { item: CaseItem; index: number }) {
  const CategoryIcon = categoryIcons[index] ?? Shield;
  const icons = statIcons[index] ?? statIcons[0];

  return (
    <article
      className="group flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[12px] border transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: charcoal,
        borderColor: "#23323a",
      }}
    >
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

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div
            className="shrink-0 font-display text-[2.5rem] font-bold leading-[0.5] sm:text-[3rem] xl:text-[50px]"
            style={{ color: "#8bb52e" }}
            aria-hidden
          >
            “
          </div>

          <h3 className="type-card-title mt-0 line-clamp-3 min-h-[4.5rem] text-white">
            {item.title}
          </h3>

          <p className="type-card-body-on-dark mt-3 line-clamp-3 min-h-[4.5rem] !text-white">
            {item.body}
          </p>

          <div className="mt-auto flex min-w-0 flex-col gap-3 border-t border-white/15 pt-4 sm:grid sm:grid-cols-[repeat(3,minmax(0,1fr))] sm:gap-0">
            {item.stats.map((stat, statIndex) => {
              const StatIcon = icons[statIndex];

              return (
                <div
                  key={`${item.category}-${stat.value}`}
                  className={`min-w-0 overflow-hidden sm:px-2 sm:first:pl-0 sm:last:pr-0 ${
                    statIndex < item.stats.length - 1
                      ? "sm:border-r sm:border-white/15"
                      : ""
                  }`}
                >
                  <div className="flex min-w-0 items-start gap-2 sm:gap-1.5">
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
                        className="max-w-full text-[10px] font-bold leading-[1.05] tracking-[-0.015em] text-white sm:text-xs"
                        style={{
                          overflowWrap: "anywhere",
                        }}
                      >
                        {stat.value}
                      </p>

                      <p
                        className="mt-1 max-w-full text-[9px] font-semibold leading-[1.2] tracking-[0.01em] text-white uppercase sm:text-[10px]"
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

        <Link
          href={item.href}
          className="group/link flex min-h-[48px] shrink-0 items-center justify-between border-t px-4 transition-colors hover:bg-white/[0.035] sm:px-5"
          style={{ borderColor: "rgba(255,255,255,.13)" }}
        >
          <span className="type-cta-ghost text-white">
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
}

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

  const marqueePartners = [...partners, ...partners];

  return (
    <section
      id="customer-partners"
      className="w-full overflow-hidden"
      style={{ background: cream }}
    >
      <div className="mx-auto w-full max-w-[1760px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <Reveal variant="up">
          <p className="type-eyebrow text-center" style={{ color: sage }}>
            {eyebrow}
          </p>

          <h2 className="type-section-h2 mt-3 text-center text-[#080b09]">
            {headingBefore}{" "}
            <span style={{ color: sage }}>{headingAccent}</span>
          </h2>

          <p className="type-section-body mx-auto mt-5 max-w-[820px] text-center">
            {body}
          </p>
        </Reveal>

        <div className="mt-9 xl:hidden">
          <SnapCarousel
            ariaLabel="Customer success cases"
            showArrows
            showDots
            loop
            autoPlayMs={5000}
            itemClassName="w-[min(100%,22rem)] sm:w-[min(100%,26rem)] md:w-[min(70vw,28rem)] shrink-0"
          >
            {cases.map((item, index) => (
              <CaseCard key={item.category} item={item} index={index} />
            ))}
          </SnapCarousel>
        </div>

        <RevealStagger
          className="mt-9 hidden items-stretch gap-4 xl:mt-6 xl:grid xl:grid-cols-2 xl:gap-4 2xl:grid-cols-4 2xl:gap-5"
          step={70}
          variant="up"
        >
          {cases.map((item, index) => (
            <CaseCard key={item.category} item={item} index={index} />
          ))}
        </RevealStagger>
      </div>

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

            <div className="partner-marquee mt-7 lg:mt-6">
              <div className="partner-marquee__track">
                {marqueePartners.map((partner, index) => {
                  const PartnerIcon =
                    partnerIcons[index % partnerIcons.length] ?? Cog;

                  return (
                    <div
                      key={`${partner}-${index}`}
                      className="flex shrink-0 items-center gap-3 px-5 py-2"
                    >
                      <PartnerIcon
                        className="size-[28px] shrink-0 text-[#414840] sm:size-[32px]"
                        strokeWidth={1.35}
                        aria-hidden
                      />

                      <span className="whitespace-nowrap text-[10px] font-bold leading-[1.15] tracking-[0.03em] text-[#171b18] uppercase sm:text-[13px]">
                        {partner}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
