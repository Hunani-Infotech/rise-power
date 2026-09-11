import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Construction,
  Crosshair,
  Download,
  Pickaxe,
  Plane,
  Radio,
  RadioTower,
  Shield,
  Timer,
  Weight,
  Zap,
} from "lucide-react";
import {
  productUiLabels,
  type FeaturedProduct,
} from "@/lib/home-content";
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";

export type FeaturedProductRowProps = FeaturedProduct & {
  imageSrc?: string;
};

const fallbackIdealIcons = [Radio, Plane, Crosshair, Shield] as const;

function idealIconFor(item: string, index: number): LucideIcon {
  const lower = item.toLowerCase();
  if (lower.includes("comm")) return Radio;
  if (
    lower.includes("uav") ||
    lower.includes("drone") ||
    lower.includes("flight") ||
    lower.includes("aerial")
  ) {
    return Plane;
  }
  if (lower.includes("isr") || lower.includes("surveillance")) return Crosshair;
  if (lower.includes("command") || lower.includes("border") || lower.includes("security")) {
    return Shield;
  }
  if (lower.includes("construction")) return Construction;
  if (lower.includes("mining")) return Pickaxe;
  if (lower.includes("telecom")) return RadioTower;
  if (lower.includes("remote") || lower.includes("infra")) return Building2;
  return fallbackIdealIcons[index % fallbackIdealIcons.length];
}

type SpecRowProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  note: string;
  showDivider?: boolean;
};

function SpecRow({ icon: Icon, label, value, note, showDivider }: SpecRowProps) {
  return (
    <div
      className={`flex flex-col gap-1.5 py-4 first:pt-0 last:pb-0 ${
        showDivider ? "border-b border-[#ddd8cc]" : ""
      }`}
    >
      <Icon className="size-5" strokeWidth={1.6} style={{ color: sage }} />
      <p className="text-[10px] font-semibold tracking-[0.16em] text-[#1a1c16] uppercase">
        {label}
      </p>
      <p className="font-display text-2xl leading-none font-bold tracking-tight text-[#1a1c16]">
        {value}
      </p>
      <p className="text-[11px] leading-snug text-[#5c584e]">{note}</p>
    </div>
  );
}

export function FeaturedProductRow({
  name,
  trademark,
  subtitle,
  body,
  runtime,
  runtimeNote,
  weight,
  weightNote,
  power,
  powerNote,
  idealFor,
  detailsHref,
  datasheetHref,
  image,
  imageSrc,
}: FeaturedProductRowProps) {
  return (
    <article className="motion-hover-lift grid gap-0 overflow-hidden border border-[#ddd8cc] bg-white md:grid-cols-2 lg:grid-cols-[0.95fr_1.15fr_0.7fr_0.75fr]">
      {/* 1. Left copy */}
      <div className="flex flex-col justify-center border-b border-[#e4e0d6] p-6 sm:p-8 lg:border-r lg:border-b-0 lg:border-[#ddd8cc]">
        <h3
          className="font-display text-3xl font-bold tracking-[0.04em] uppercase sm:text-[2rem]"
          style={{ color: sage }}
        >
          {name}
          <span>{trademark}</span>
        </h3>
        <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-[#1a1c16] uppercase">
          {subtitle}
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#5c584e]">
          {body}
        </p>
        <Link
          href={detailsHref}
          className="mt-8 inline-flex w-fit min-h-11 items-center justify-center gap-2 border border-[#cfc9bb] bg-transparent px-5 text-sm font-semibold tracking-wide text-[#1a1c16] uppercase transition-colors hover:border-[#1a1c16]"
        >
          {productUiLabels.viewDetails}
          <ArrowRight className="size-4" strokeWidth={1.8} />
        </Link>
      </div>

      {/* 2. Product image */}
      <div className="relative min-h-[12rem] overflow-hidden border-b border-[#e4e0d6] lg:min-h-[22rem] lg:border-r lg:border-b-0 lg:border-[#ddd8cc]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={image}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 35vw"
          />
        ) : (
          <PlaceholderMedia
            label={image}
            className="absolute inset-0 min-h-full"
          />
        )}
      </div>

      {/* 3. Specs column — stacked rows */}
      <div className="flex flex-col justify-center border-b border-[#e4e0d6] p-6 sm:p-8 lg:border-r lg:border-b-0 lg:border-[#ddd8cc]">
        <SpecRow
          icon={Timer}
          label={productUiLabels.runtime}
          value={runtime}
          note={runtimeNote}
          showDivider
        />
        <SpecRow
          icon={Weight}
          label={productUiLabels.weight}
          value={weight}
          note={weightNote}
          showDivider
        />
        <SpecRow
          icon={Zap}
          label={productUiLabels.power}
          value={power}
          note={powerNote}
        />
      </div>

      {/* 4. Dark sidebar */}
      <div className="relative flex flex-col bg-[#141a14] p-6 text-[#f3efe4] sm:p-8">
        <span
          className="absolute inset-y-0 right-0 w-0.5"
          style={{ background: sage }}
          aria-hidden
        />
        <p
          className="text-[11px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: sage }}
        >
          {productUiLabels.idealFor}
        </p>
        <ul className="mt-4 flex-1 space-y-3 text-sm">
          {idealFor.map((item, index) => {
            const Icon = idealIconFor(item, index);
            return (
              <li key={item} className="flex items-start gap-2.5">
                <Icon
                  className="mt-0.5 size-3.5 shrink-0"
                  strokeWidth={1.7}
                  style={{ color: sage }}
                />
                <span className="leading-snug text-[#f3efe4]/90">{item}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 border-t border-[#f3efe4]/15 pt-5">
          <Link
            href={datasheetHref}
            className="inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase transition-opacity hover:opacity-80"
            style={{ color: sage }}
          >
            <Download className="size-4 shrink-0" strokeWidth={1.7} />
            {productUiLabels.downloadSpec}
          </Link>
        </div>
      </div>
    </article>
  );
}
