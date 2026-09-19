"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/motion/Reveal";

const muted = "#66717d";

type FaqItem = {
  q: string;
  a: string;
};

function AnswerBody({ text }: { text: string }) {
  if (text.includes("listed on Datasheets")) {
    return (
      <>
        Rise Sentinel™, Rise Falcon™, Rise Titan™, and the Hydrogen Cartridge
        Kit. Specs and engineering targets are listed on{" "}
        <Link
          href="/datasheets"
          className="font-medium text-[#101820] underline decoration-[#d9dfe3] underline-offset-4 transition-colors hover:text-[#6e7f42] hover:decoration-[#6e7f42]"
        >
          Datasheets
        </Link>
        .
      </>
    );
  }

  if (text.includes("Contact page")) {
    return (
      <>
        Use Request a Briefing on the{" "}
        <Link
          href="/contact"
          className="font-medium text-[#101820] underline decoration-[#d9dfe3] underline-offset-4 transition-colors hover:text-[#6e7f42] hover:decoration-[#6e7f42]"
        >
          Contact
        </Link>{" "}
        page. Include mission profile, power draw, and deployment environment so
        we can tailor runtime and logistics guidance.
      </>
    );
  }

  if (text.includes("System Integration covers")) {
    return (
      <>
        Yes.{" "}
        <Link
          href="/capabilities/system-integration"
          className="font-medium text-[#101820] underline decoration-[#d9dfe3] underline-offset-4 transition-colors hover:text-[#6e7f42] hover:decoration-[#6e7f42]"
        >
          System Integration
        </Link>{" "}
        covers electronics, mounts, and field interfaces for drones, generators,
        and facility backup loads.
      </>
    );
  }

  return <>{text}</>;
}

type FaqAccordionProps = {
  items: readonly FaqItem[];
  /** Index open on first render; null keeps all closed */
  defaultOpenIndex?: number | null;
};

export function FaqAccordion({
  items,
  defaultOpenIndex = null,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="mt-5 border-t border-[#d9dfe3] sm:mt-6">
      {items.map((item, itemIndex) => {
        const isOpen = openIndex === itemIndex;

        return (
          <Reveal key={item.q} variant="up" delay={itemIndex * 40}>
            <div className="border-b border-[#d9dfe3]">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenIndex((current) =>
                    current === itemIndex ? null : itemIndex,
                  )
                }
                className="flex w-full cursor-pointer items-center justify-between gap-6 px-1 py-3.5 text-left outline-none sm:py-4"
              >
                <h3
                  className={`text-base font-semibold leading-snug transition-colors duration-300 sm:text-lg ${
                    isOpen ? "text-[#6e7f42]" : "text-[#101820]"
                  }`}
                >
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className={`flex size-7 shrink-0 items-center justify-center border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#6e7f42] bg-[#6e7f42] text-white"
                      : "border-[#d9dfe3] text-[#101820]"
                  }`}
                >
                  <Plus
                    className={`size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className={`pb-4 pr-12 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:pr-14 ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-1 opacity-0"
                    }`}
                  >
                    <p
                      className="text-left text-[15px] leading-[1.65] sm:text-base"
                      style={{ color: muted }}
                    >
                      <AnswerBody text={item.a} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
