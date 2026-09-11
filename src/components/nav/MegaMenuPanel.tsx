import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaLink } from "@/lib/nav-menu";

export type MegaMenuPanelProps = {
  title?: string;
  links: readonly MegaLink[];
  onNavigate?: () => void;
  id?: string;
};

export function MegaMenuPanel({
  title,
  links,
  onNavigate,
  id,
}: MegaMenuPanelProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label={title ? `${title} submenu` : "Submenu"}
      className="mega-menu-panel absolute top-full right-0 left-0 z-50 border-t border-border bg-cream text-ink shadow-[0_18px_40px_rgba(10,14,10,0.14)]"
    >
      <div className="mx-auto w-full max-w-[560px] px-6 py-6 sm:py-7 lg:px-8">
        {title ? (
          <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-sage uppercase">
            {title}
          </p>
        ) : null}

        <ul className="mega-menu-link-list flex flex-col gap-1">
          {links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="mega-menu-link group relative flex min-h-14 items-center gap-3 rounded-sm py-3 pr-3 pl-4 outline-none transition-colors hover:bg-sage/10 focus-visible:bg-sage/10 focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-0 w-[3px] origin-center scale-y-0 rounded-full bg-sage transition-transform duration-200 group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-medium text-[#0a0e0a] transition-colors group-hover:text-sage sm:text-base">
                    {link.label}
                  </span>
                  {link.description ? (
                    <span className="mt-0.5 block text-sm leading-snug text-[#141a14]/60">
                      {link.description}
                    </span>
                  ) : null}
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-[#141a14]/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-sage"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
