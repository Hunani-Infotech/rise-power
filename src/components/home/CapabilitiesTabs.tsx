"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/lib/home-content";
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";

export function CapabilitiesTabs() {
  const [activeId, setActiveId] = useState(capabilities.tabs[0]?.id ?? "engineering");
  const active =
    capabilities.tabs.find((tab) => tab.id === activeId) ?? capabilities.tabs[0];

  if (!active) return null;

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="text-[11px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: sage }}
        >
          {capabilities.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
          {capabilities.headingBefore}{" "}
          <span style={{ color: sage }}>{capabilities.headingAccent}</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#f3efe4]/70 sm:text-base">
          {capabilities.body}
        </p>
      </div>

      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-1"
        role="tablist"
        aria-label="Capabilities"
      >
        {capabilities.tabs.map((tab) => {
          const isActive = tab.id === active.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`px-4 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                isActive
                  ? "border-b-2 text-[#f3efe4]"
                  : "text-[#f3efe4]/55 hover:text-[#f3efe4]/85"
              }`}
              style={isActive ? { borderColor: sage, color: sage } : undefined}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="mt-10 grid flex-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
      >
        <div>
          <p
            className="text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: sage }}
          >
            {active.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight font-bold tracking-tight uppercase sm:text-4xl">
            {active.heading}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#f3efe4]/70">
            {active.body}
          </p>
          <Link
            href={active.cta.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase"
            style={{ color: sage }}
          >
            {active.cta.label}
            <ArrowRight className="size-4" />
          </Link>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {active.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{ color: sage }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-[#f3efe4]/85 uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#f3efe4]/55">
                  {stat.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <PlaceholderMedia
            label={capabilities.diagramImage}
            aspect="aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]"
          />
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {active.callouts.map((callout) => (
              <li
                key={callout.title}
                className="border border-white/10 bg-[#0f140f]/80 px-4 py-3"
              >
                <p
                  className="text-[10px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: sage }}
                >
                  {callout.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#f3efe4]/65">
                  {callout.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <blockquote className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-base leading-relaxed text-[#f3efe4]/85 italic sm:text-lg">
          “{active.quote.text}”
        </p>
        <footer className="shrink-0">
          <p
            className="font-display text-lg tracking-wide uppercase"
            style={{ color: sage }}
          >
            {active.quote.name}
          </p>
          <p className="mt-1 text-xs tracking-wide text-[#f3efe4]/55">
            {active.quote.role}
          </p>
        </footer>
      </blockquote>
    </div>
  );
}
