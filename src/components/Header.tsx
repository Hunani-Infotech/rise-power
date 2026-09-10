"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navItems } from "@/lib/home-content";

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
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-6 lg:px-10">
        <Logo className={isHome ? "text-white" : "text-ink"} />

        <nav
          className="hidden items-center gap-4 lg:flex xl:gap-6"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium transition-colors ${
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
            href="/contact"
            className="bg-forest px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink sm:px-5"
          >
            Contact Us
          </Link>
          <button
            className={`flex min-h-11 min-w-11 items-center justify-center ${
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
              ? "border-t border-white/15 bg-ink/95 px-6 py-6 backdrop-blur-md"
              : "border-t border-border bg-cream px-6 py-6"
          }
        >
          <nav
            className="mx-auto flex max-w-[1440px] flex-col gap-1 lg:px-4"
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
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-forest px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
