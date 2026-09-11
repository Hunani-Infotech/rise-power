"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { contactCta, navItems } from "@/lib/home-content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkColor = isHome
    ? "text-white/80 hover:text-white"
    : "text-ink/70 hover:text-ink";
  const activeColor = isHome ? "text-white" : "text-ink";

  return (
    <header
      className={
        isHome
          ? "absolute top-0 right-0 left-0 z-50 bg-transparent text-white"
          : "sticky top-0 z-50 border-b border-border bg-cream text-ink"
      }
    >
      <div className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 overflow-hidden px-6 sm:gap-4 lg:px-10">
        <div className="min-w-0 shrink">
          <Logo className={isHome ? "text-white" : "text-ink"} />
        </div>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] font-medium tracking-[0.14em] uppercase transition-colors xl:text-[13px] ${
                  active ? activeColor : linkColor
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={contactCta.href}
            className={
              isHome
                ? "hidden border border-white/70 px-5 py-2.5 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 lg:inline-flex"
                : "hidden bg-forest px-5 py-2.5 text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-ink lg:inline-flex"
            }
          >
            {contactCta.label}
          </Link>
          <button
            className={`flex min-h-11 min-w-11 items-center justify-center lg:hidden ${
              isHome ? "text-white" : "text-ink"
            }`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="site-menu"
          className={
            isHome
              ? "border-t border-white/15 bg-ink/95 px-6 py-6 backdrop-blur-md lg:hidden"
              : "border-t border-border bg-cream px-6 py-6 lg:hidden"
          }
        >
          <nav
            className="mx-auto flex max-w-[1440px] flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-base ${isHome ? "text-white/85" : "text-ink/85"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactCta.href}
              onClick={() => setOpen(false)}
              className="mt-3 bg-forest px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              {contactCta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
