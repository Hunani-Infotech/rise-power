"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { MegaLink, MegaNavItem } from "@/lib/nav-menu";

export type NavMegaItemProps = {
  item: MegaNavItem;
  isActive: boolean;
  className?: string;
  chevronClassName?: string;
  panelId?: string;
  onActivate?: () => void;
};

function itemHasLinks(item: MegaNavItem): boolean {
  if (item.links?.length) return true;
  const columns = (
    item as MegaNavItem & {
      columns?: readonly { links: readonly MegaLink[] }[];
    }
  ).columns;
  return Boolean(columns?.some((column) => column.links.length));
}

/**
 * Desktop mega-nav trigger only. The shared MegaMenuPanel lives under Header.
 */
export function NavMegaItem({
  item,
  isActive,
  className = "",
  chevronClassName = "",
  panelId,
  onActivate,
}: NavMegaItemProps) {
  const hasLinks = itemHasLinks(item);

  if (!hasLinks) {
    return (
      <Link
        href={item.href}
        className={className}
        onMouseEnter={onActivate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      className={`inline-flex items-center gap-1 ${className}`}
      onMouseEnter={onActivate}
      aria-expanded={isActive}
      aria-haspopup="true"
      aria-controls={isActive ? panelId : undefined}
    >
      {item.label}
      <ChevronDown
        className={`size-3.5 shrink-0 transition-transform duration-200 ${
          isActive ? "rotate-180" : ""
        } ${chevronClassName}`}
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </Link>
  );
}
