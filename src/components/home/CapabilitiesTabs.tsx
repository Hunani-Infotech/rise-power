"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Box,
  Crosshair,
  Leaf,
  Plug,
  Quote,
  Settings,
  Shield,
  Zap,
} from "lucide-react";
import { capabilities, type CapabilityTab } from "@/lib/home-content";
import { HASH_NAV_EVENT } from "@/components/HashScroll";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";
const text = "#f3efe4";
const muted = "rgba(243, 239, 228, 0.55)";
const cardBg = "#0f140f";

const tabIcons: Record<string, LucideIcon> = {
  engineering: Settings,
  integration: Plug,
  field: Crosshair,
  safety: Shield,
};

const statIcons: LucideIcon[] = [Zap, Shield, Box, Leaf];

const calloutPositions = [
  "left-3 top-3 sm:left-5 sm:top-5 text-left",
  "left-3 top-1/2 -translate-y-1/2 sm:left-5 text-left",
  "right-3 top-3 sm:right-5 sm:top-5 text-right",
  "bottom-3 right-3 sm:bottom-5 sm:right-5 text-right",
] as const;

function tabIdFromHash(hash: string): string | null {
  const value = hash.replace(/^#/, "");
  if (!value) return null;
  if (value === "capabilities") return capabilities.tabs[0]?.id ?? null;
  if (value.startsWith("capabilities-")) {
    const id = value.slice("capabilities-".length);
    return capabilities.tabs.some((tab) => tab.id === id) ? id : null;
  }
  return capabilities.tabs.some((tab) => tab.id === value) ? value : null;
}

export function CapabilitiesTabs() {
  const [activeId, setActiveId] = useState(
    capabilities.tabs[0]?.id ?? "engineering",
  );
  const active: CapabilityTab | undefined =
    capabilities.tabs.find((tab) => tab.id === activeId) ?? capabilities.tabs[0];

  useEffect(() => {
    const syncFromHash = () => {
      const next = tabIdFromHash(window.location.hash);
      if (next) setActiveId(next);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    window.addEventListener(HASH_NAV_EVENT, syncFromHash);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
      window.removeEventListener(HASH_NAV_EVENT, syncFromHash);
    };
  }, []);

  if (!active) return null;

  const diagramSrc = capabilities.diagramImageSrc;

  return (
    <div
      id={`capabilities-${active.id}`}
      className="mx-auto flex w-full max-w-[1440px] flex-1 scroll-mt-28 flex-col px-6 py-16 sm:py-20 lg:px-10 lg:py-24"
    >
      <Reveal variant="up" className="mx-auto max-w-3xl text-center">
        <p
          className="text-[16px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: sage }}
        >
          {capabilities.eyebrow}
        </p>
        <h2
          className="mt-3 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl"
          style={{ color: text }}
        >
          {capabilities.headingBefore}{" "}
          <span style={{ color: sage }}>{capabilities.headingAccent}</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: muted }}>
          {capabilities.body}
        </p>
      </Reveal>

      <div
        className="mt-10 overflow-hidden rounded-sm border border-white/10"
        style={{ background: cardBg }}
      >
        <div
          className="grid grid-cols-2 border-b border-white/10 lg:grid-cols-4"
          role="tablist"
          aria-label="Capabilities"
        >
          {capabilities.tabs.map((tab, index) => {
            const isActive = tab.id === active.id;
            const Icon = tabIcons[tab.id] ?? Settings;
            return (
              <button
                key={tab.id}
                id={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveId(tab.id);
                  if (typeof window !== "undefined") {
                    window.history.replaceState(
                      null,
                      "",
                      `#${tab.id}`,
                    );
                  }
                }}
                className={`relative flex min-h-11 items-center justify-center gap-2.5 px-3 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors sm:px-4 sm:py-5 ${
                  index % 2 === 1 ? "border-l border-white/10" : ""
                } ${index > 0 ? "lg:border-l lg:border-white/10" : ""} ${
                  index >= 2 ? "border-t border-white/10 lg:border-t-0" : ""
                } ${
                  isActive
                    ? "text-[#f3efe4]"
                    : "text-[#f3efe4]/45 hover:text-[#f3efe4]/75"
                }`}
              >
                <Icon
                  className="size-4 shrink-0 sm:size-[22px]"
                  strokeWidth={1.75}
                  style={{ color: isActive ? sage : undefined }}
                  aria-hidden
                />
                <span className="text-center leading-tight">{tab.label}</span>
                {isActive ? (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5"
                    style={{ background: sage }}
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <Reveal
          key={active.id}
          variant="fade"
          delay={40}
          className="grid gap-8 p-6 sm:p-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch xl:gap-10 xl:p-10"
        >
          <div role="tabpanel" className="flex flex-col">
            <p
              className="text-[14px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: sage }}
            >
              {active.eyebrow}
            </p>
            <h3
              className="mt-3 font-display text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-[2rem]"
              style={{ color: text }}
            >
              {active.heading}
            </h3>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed"
              style={{ color: muted }}
            >
              {active.body}
            </p>

            <Link
              href={active.cta.href}
              className="mt-8 inline-flex w-fit min-h-11 items-center gap-2 border px-5 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#6e7f42]/12 rounded-sm"
              style={{ borderColor: sage, color: sage }}
            >
              {active.cta.label}
              <ArrowRight className="size-3.5" strokeWidth={2} aria-hidden />
            </Link>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-4 lg:gap-x-5">
              {active.stats.map((stat, i) => {
                const StatIcon = statIcons[i % statIcons.length]!;
                return (
                  <div key={stat.label} className="flex flex-col items-start">
                    <div
                      className="mb-3 grid size-9 place-items-center rounded-full border sm:size-10"
                      style={{ borderColor: sage }}
                      aria-hidden
                    >
                      <StatIcon
                        className="size-4"
                        strokeWidth={1.75}
                        style={{ color: sage }}
                      />
                    </div>
                    <p
                      className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
                      style={{ color: text }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-1.5 text-[12px] font-semibold tracking-[0.16em] uppercase"
                      style={{ color: sage }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="mt-1 text-xs leading-relaxed"
                      style={{ color: muted }}
                    >
                      {stat.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative min-h-[18rem] overflow-hidden rounded-sm bg-[#0a0e0a] sm:min-h-[22rem] lg:min-h-full">
              {diagramSrc ? (
                <Image
                  src={diagramSrc}
                  alt={capabilities.diagramImage}
                  fill
                  quality={75}
                  className="object-contain object-center p-4 sm:p-6"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              ) : (
                <PlaceholderMedia
                  label={capabilities.diagramImage}
                  className="absolute inset-0 min-h-full"
                />
              )}

              {/* Absolute overlays from md up */}
              <ul className="pointer-events-none absolute inset-0 z-10 hidden md:block">
                {active.callouts.map((callout, i) => (
                  <li
                    key={callout.title}
                    className={`absolute max-w-[38%] ${calloutPositions[i] ?? calloutPositions[0]}`}
                  >
                    <p
                      className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                      style={{ color: sage }}
                    >
                      {callout.title}
                    </p>
                    <p
                      className="mt-0.5 text-xs leading-snug"
                      style={{ color: "#ffffff" }}
                    >
                      {callout.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Static stack below diagram on small screens */}
            <ul className="grid gap-3 md:hidden">
              {active.callouts.map((callout) => (
                <li
                  key={callout.title}
                  className="border border-white/10 px-4 py-3"
                >
                  <p
                    className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                    style={{ color: sage }}
                  >
                    {callout.title}
                  </p>
                  <p
                    className="mt-1 text-xs leading-snug"
                    style={{ color: "#ffffff" }}
                  >
                    {callout.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {active.quote ? (
          <blockquote className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-7 lg:px-10">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <Quote
                className="mt-0.5 size-8 shrink-0 sm:size-10"
                strokeWidth={1.5}
                style={{ color: sage }}
                aria-hidden
              />
              <p
                className="text-base leading-relaxed italic sm:text-lg"
                style={{ color: text }}
              >
                {active.quote.text}
              </p>
            </div>
            <footer className="flex shrink-0 items-center gap-3 sm:max-w-[16rem]">
              <Shield
                className="size-8 shrink-0"
                strokeWidth={1.5}
                style={{ color: sage }}
                aria-hidden
              />
              <div>
                <p
                  className="text-sm font-semibold tracking-[0.12em] uppercase"
                  style={{ color: sage }}
                >
                  {active.quote.name}
                </p>
                <p className="mt-1 text-xs leading-snug" style={{ color: muted }}>
                  {active.quote.role}
                </p>
              </div>
            </footer>
          </blockquote>
        ) : null}
      </div>
    </div>
  );
}
