"use client";

import { ChevronDown } from "lucide-react";
import { AppLink } from "@/components/nav/AppLink";
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
      <AppLink
        href={item.href}
        className={className}
        onMouseEnter={onActivate}
        onFocus={onActivate}
      >
        {item.label}
      </AppLink>
    );
  }

  return (
    <AppLink
      href={item.href}
      className={`inline-flex items-center gap-0.5 ${className}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      aria-expanded={isActive}
      aria-haspopup="true"
      aria-controls={isActive ? panelId : undefined}
    >
      <span>{item.label}</span>
      <ChevronDown
        className={`size-3 shrink-0 opacity-70 transition-transform duration-200 2xl:size-3.5 ${
          isActive ? "rotate-180" : ""
        } ${chevronClassName}`}
        strokeWidth={2}
        aria-hidden="true"
      />
    </AppLink>
  );
}
