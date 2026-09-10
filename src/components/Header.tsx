"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 right-0 left-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Logo />

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium tracking-wide transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-accent px-5 py-2.5 text-[13px] font-semibold tracking-wide text-background transition-colors hover:bg-accent-hover"
          >
            Request a Briefing
          </Link>
        </nav>

        <button
          className="flex min-h-11 min-w-11 items-center justify-center text-xs font-semibold uppercase tracking-[0.16em] text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/85"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-accent px-5 py-3 text-center text-sm font-semibold text-background"
            >
              Request a Briefing
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
