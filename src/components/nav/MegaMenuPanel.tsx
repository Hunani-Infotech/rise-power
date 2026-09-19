import { ArrowRight, ChevronRight } from "lucide-react";
import { AppLink } from "@/components/nav/AppLink";
import type { MegaFeature, MegaLink } from "@/lib/nav-menu";

/** Desktop mega drawers always render a 2×2 link grid for consistent height. */
const MEGA_LINK_SLOTS = 4;

type MegaMenuPanelProps = {
  id: string;
  title: string;
  links: readonly MegaLink[];
  feature?: MegaFeature;
  viewAllHref: string;
  onNavigate: () => void;
};

export function MegaMenuPanel({
  id,
  title,
  links,
  feature,
  viewAllHref,
  onNavigate,
}: MegaMenuPanelProps) {
  const visibleLinks = links.slice(0, MEGA_LINK_SLOTS);

  return (
    <div
      id={id}
      role="region"
      aria-label={`${title} menu`}
      className="mega-menu-panel absolute top-full right-0 left-0 z-40 bg-cream text-ink shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[1fr_320px] lg:items-stretch lg:gap-8 lg:px-10 lg:py-7">
        <div className="flex min-w-0 flex-col">
          <div className="mb-4 flex shrink-0 items-center justify-between border-b border-border pb-2.5">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.14em] text-sage uppercase">
                Explore
              </p>
              <h2 className="mt-1 font-display text-xl font-bold uppercase">
                {title}
              </h2>
            </div>

            <AppLink
              href={viewAllHref}
              onClick={onNavigate}
              className="hidden items-center gap-1 text-[13px] font-semibold tracking-[0.1em] text-sage uppercase transition-colors hover:text-ink sm:flex"
            >
              View all
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </AppLink>
          </div>

          <ul className="mega-menu-link-list grid grid-cols-1 content-start sm:grid-cols-2 sm:grid-rows-2">
            {visibleLinks.map((link) => (
              <li
                key={`${link.href}-${link.label}`}
                className="sm:odd:border-r sm:odd:border-border/80"
              >
                <AppLink
                  href={link.href}
                  onClick={onNavigate}
                  className="group flex h-full min-h-[72px] items-center justify-between border-b border-border/80 px-3 py-2.5 transition-colors hover:bg-sage/10 sm:px-4"
                >
                  <span className="min-w-0 pr-3">
                    <span className="block text-[17px] font-semibold text-ink transition-colors group-hover:text-sage sm:text-lg">
                      {link.label}
                    </span>

                    {link.description ? (
                      <span className="mt-0.5 line-clamp-2 block text-sm leading-snug text-ink/55">
                        {link.description}
                      </span>
                    ) : null}
                  </span>

                  <ChevronRight
                    className="size-4 shrink-0 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-sage"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        {feature ? (
          <div className="mega-menu-feature relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-sm bg-[#0b110d] p-6 text-cream lg:min-h-0">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 size-44 rounded-full border border-sage/20"
            />
            <div
              aria-hidden="true"
              className="absolute -top-8 -right-8 size-28 rounded-full border border-sage/15"
            />

            <div className="relative">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-sage uppercase">
                {title}
              </p>

              <h3 className="mt-3 max-w-[280px] font-display text-2xl leading-[1.05] font-bold uppercase">
                {feature.title}
              </h3>

              <p className="mt-3 line-clamp-3 max-w-[300px] text-sm leading-relaxed text-cream/65">
                {feature.body}
              </p>
            </div>

            <AppLink
              href={feature.href}
              onClick={onNavigate}
              className="relative mt-5 inline-flex w-fit items-center gap-2 border-b border-sage pb-2 text-[12px] font-semibold tracking-[0.1em] text-sage uppercase transition-colors hover:text-white"
            >
              {feature.cta}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </AppLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
