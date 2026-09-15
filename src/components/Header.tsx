// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useId, useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { Logo } from "./Logo";
// import { MegaMenuPanel } from "./nav/MegaMenuPanel";
// import { NavMegaItem } from "./nav/NavMegaItem";
// import { contactCta, megaNavItems } from "@/lib/home-content";
// import type { MegaLink, MegaNavItem } from "@/lib/nav-menu";

// /** Prefer flat `links`; else flatten legacy `columns` during data migration. */
// function resolveMegaLinks(item: MegaNavItem): readonly MegaLink[] {
//   if (item.links?.length) return item.links;
//   const columns = (
//     item as MegaNavItem & {
//       columns?: readonly { links: readonly MegaLink[] }[];
//     }
//   ).columns;
//   if (!columns?.length) return [];
//   if (columns.length === 1) return columns[0].links;
//   return columns.flatMap((column) => column.links);
// }

// export function Header() {
//   const pathname = usePathname();
//   const panelId = useId();
//   const [open, setOpen] = useState(false);
//   const [activeKey, setActiveKey] = useState<string | null>(null);
//   const [mobileExpandedKey, setMobileExpandedKey] = useState<string | null>(
//     null,
//   );
//   const isHome = pathname === "/";
//   const megaOpen = activeKey !== null;

//   const activeItem =
//     megaNavItems.find((item) => item.label === activeKey) ?? null;
//   const activeLinks = activeItem ? resolveMegaLinks(activeItem) : [];
//   const activeHasLinks = Boolean(activeLinks.length);

//   useEffect(() => {
//     setOpen(false);
//     setActiveKey(null);
//     setMobileExpandedKey(null);
//   }, [pathname]);

//   useEffect(() => {
//     if (!activeKey) return;

//     const onKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setActiveKey(null);
//     };

//     document.addEventListener("keydown", onKeyDown);
//     return () => document.removeEventListener("keydown", onKeyDown);
//   }, [activeKey]);

//   const linkColor = isHome
//     ? "text-white/80 hover:text-white"
//     : "text-ink/70 hover:text-ink";
//   const activeColor = isHome ? "text-white" : "text-ink";

//   const headerSurface = (() => {
//     if (isHome) {
//       if (megaOpen || open) {
//         return "header-animate-in absolute top-0 right-0 left-0 z-50 bg-ink/95 text-white backdrop-blur";
//       }
//       return "header-animate-in absolute top-0 right-0 left-0 z-50 bg-transparent text-white";
//     }
//     return "sticky top-0 z-50 border-b border-border bg-cream text-ink";
//   })();

//   const closeMega = () => setActiveKey(null);

//   return (
//     <header className={headerSurface} onMouseLeave={closeMega}>
//       <div className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-6 sm:gap-4 lg:px-10">
//         <div className="min-w-0 shrink">
//           <Logo className={isHome ? "text-white" : "text-ink"} />
//         </div>

//         <nav
//           className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
//           aria-label="Primary navigation"
//         >
//           {megaNavItems.map((item) => {
//             const routeActive = pathname.startsWith(item.href);
//             const isMegaActive = activeKey === item.label;
//             const highlight = isMegaActive || routeActive;

//             return (
//               <NavMegaItem
//                 key={item.label}
//                 item={item}
//                 isActive={isMegaActive}
//                 panelId={panelId}
//                 onActivate={() => setActiveKey(item.label)}
//                 className={`text-[12px] font-medium tracking-[0.14em] uppercase transition-colors xl:text-[13px] ${
//                   highlight ? activeColor : linkColor
//                 } ${
//                   isMegaActive
//                     ? "underline decoration-sage decoration-2 underline-offset-8"
//                     : ""
//                 }`}
//               />
//             );
//           })}
//         </nav>

//         <div className="flex shrink-0 items-center gap-2 sm:gap-3">
//           <Link
//             href={contactCta.href}
//             className={
//               isHome
//                 ? "hidden border border-white/70 px-5 py-2.5 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 lg:inline-flex"
//                 : "hidden bg-forest px-5 py-2.5 text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-ink lg:inline-flex"
//             }
//           >
//             {contactCta.label}
//           </Link>
//           <button
//             className={`flex min-h-11 min-w-11 items-center justify-center lg:hidden ${
//               isHome ? "text-white" : "text-ink"
//             }`}
//             aria-expanded={open}
//             aria-controls="site-menu"
//             aria-label={open ? "Close menu" : "Open menu"}
//             onClick={() => setOpen((value) => !value)}
//           >
//             {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
//           </button>
//         </div>
//       </div>

//       {activeHasLinks && activeItem ? (
//         <MegaMenuPanel
//           id={panelId}
//           title={activeItem.label}
//           links={activeLinks}
//           onNavigate={closeMega}
//         />
//       ) : null}

//       {open ? (
//         <div
//           id="site-menu"
//           className={
//             isHome
//               ? "mobile-nav-drawer flex max-h-[min(80vh,640px)] flex-col border-t border-white/15 bg-ink/95 backdrop-blur-md lg:hidden"
//               : "mobile-nav-drawer flex max-h-[min(80vh,640px)] flex-col border-t border-border bg-cream lg:hidden"
//           }
//         >
//           <nav
//             className="mx-auto w-full max-w-[1440px] flex-1 overflow-y-auto px-6 py-4"
//             aria-label="Mobile navigation"
//           >
//             <div className="flex flex-col gap-0.5">
//               {megaNavItems.map((item) => {
//                 const links = resolveMegaLinks(item);
//                 const hasLinks = links.length > 0;
//                 const expanded = mobileExpandedKey === item.label;
//                 const textClass = isHome ? "text-white/90" : "text-ink";
//                 const mutedClass = isHome ? "text-white/55" : "text-ink/55";
//                 const rowBorder = isHome
//                   ? "border-white/10"
//                   : "border-border/80";

//                 if (!hasLinks) {
//                   return (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setOpen(false)}
//                       className={`flex min-h-12 items-center py-3 text-base font-medium ${textClass}`}
//                     >
//                       {item.label}
//                     </Link>
//                   );
//                 }

//                 return (
//                   <div
//                     key={item.label}
//                     className={`border-b ${rowBorder} last:border-b-0`}
//                   >
//                     <div className="flex min-h-12 items-center gap-1">
//                       <Link
//                         href={item.href}
//                         onClick={() => setOpen(false)}
//                         className={`min-w-0 flex-1 py-3 text-base font-medium ${textClass}`}
//                       >
//                         {item.label}
//                       </Link>
//                       <button
//                         type="button"
//                         className={`flex min-h-12 min-w-12 items-center justify-center rounded-sm ${textClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage`}
//                         aria-expanded={expanded}
//                         aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
//                         onClick={() =>
//                           setMobileExpandedKey(expanded ? null : item.label)
//                         }
//                       >
//                         <ChevronDown
//                           className={`size-5 transition-transform duration-200 ${
//                             expanded ? "rotate-180" : ""
//                           } ${expanded ? "text-sage" : ""}`}
//                           strokeWidth={1.75}
//                           aria-hidden="true"
//                         />
//                       </button>
//                     </div>

//                     {expanded ? (
//                       <ul className="mobile-nav-accordion space-y-0.5 pb-4">
//                         <li>
//                           <Link
//                             href={item.href}
//                             onClick={() => setOpen(false)}
//                             className={`flex min-h-12 items-center gap-2 rounded-sm px-3 py-2.5 text-sm font-semibold tracking-wide text-sage uppercase transition-colors hover:bg-sage/10`}
//                           >
//                             {item.label} overview
//                             <span aria-hidden="true">→</span>
//                           </Link>
//                         </li>
//                         {links.map((link) => (
//                           <li key={`${link.href}-${link.label}`}>
//                             <Link
//                               href={link.href}
//                               onClick={() => setOpen(false)}
//                               className={`group flex min-h-12 flex-col justify-center rounded-sm px-3 py-2.5 transition-colors hover:bg-sage/10 focus-visible:bg-sage/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ${textClass}`}
//                             >
//                               <span className="text-[15px] font-medium group-hover:text-sage">
//                                 {link.label}
//                               </span>
//                               {link.description ? (
//                                 <span
//                                   className={`mt-0.5 text-sm leading-snug ${mutedClass}`}
//                                 >
//                                   {link.description}
//                                 </span>
//                               ) : null}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     ) : null}
//                   </div>
//                 );
//               })}
//             </div>
//           </nav>

//           <div
//             className={
//               isHome
//                 ? "sticky bottom-0 border-t border-white/10 bg-ink/95 px-6 py-4 backdrop-blur-md"
//                 : "sticky bottom-0 border-t border-border bg-cream px-6 py-4"
//             }
//           >
//             <Link
//               href={contactCta.href}
//               onClick={() => setOpen(false)}
//               className="flex min-h-12 items-center justify-center bg-forest px-5 py-3 text-center text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-ink"
//             >
//               {contactCta.label}
//             </Link>
//           </div>
//         </div>
//       ) : null}
//     </header>
//   );
// }





"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { MegaMenuPanel } from "./nav/MegaMenuPanel";
import { NavMegaItem } from "./nav/NavMegaItem";
import { contactCta, megaNavItems } from "@/lib/home-content";
import type { MegaLink, MegaNavItem } from "@/lib/nav-menu";

/** Prefer flat `links`; else flatten legacy `columns` during data migration. */
function resolveMegaLinks(item: MegaNavItem): readonly MegaLink[] {
  if (item.links?.length) return item.links;

  const columns = (
    item as MegaNavItem & {
      columns?: readonly { links: readonly MegaLink[] }[];
    }
  ).columns;

  if (!columns?.length) return [];
  if (columns.length === 1) return columns[0].links;

  return columns.flatMap((column) => column.links);
}

export function Header() {
  const pathname = usePathname();
  const panelId = useId();

  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [mobileExpandedKey, setMobileExpandedKey] = useState<string | null>(
    null,
  );

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const isHome = pathname === "/";
  const megaOpen = activeKey !== null;

  const activeItem =
    megaNavItems.find((item) => item.label === activeKey) ?? null;

  const activeLinks = activeItem ? resolveMegaLinks(activeItem) : [];
  const activeHasLinks = Boolean(activeLinks.length);

  /*
   * Smart sticky header:
   *
   * - At the top: transparent on homepage.
   * - Scrolled: premium dark translucent sticky surface.
   * - Scrolling down: hide.
   * - Scrolling up: show immediately.
   * - Open menus always keep the header visible.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        setIsScrolled(currentScrollY > 20);

        // Always show header at the very top.
        if (currentScrollY <= 20) {
          setIsVisible(true);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }

        // Never hide the header while a menu is open.
        if (megaOpen || open) {
          setIsVisible(true);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }

        // Scrolling down → hide.
        if (currentScrollY - previousScrollY > 8) {
          setIsVisible(false);
        }

        if (previousScrollY - currentScrollY > 8) {
          setIsVisible(true);
        }

        // Scrolling up → show immediately.
        if (currentScrollY < previousScrollY) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [megaOpen, open]);

  /*
   * Reset navigation state when the route changes.
   */
  useEffect(() => {
    setOpen(false);
    setActiveKey(null);
    setMobileExpandedKey(null);
    setIsVisible(true);
    setIsScrolled(window.scrollY > 20);
    lastScrollY.current = window.scrollY;
  }, [pathname]);

  /*
   * Escape closes the active mega menu.
   */
  useEffect(() => {
    if (!activeKey) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveKey(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeKey]);

  const linkColor = isHome
    ? "text-white/80 hover:text-white"
    : "text-ink/70 hover:text-ink";

  const activeColor = isHome ? "text-white" : "text-ink";

  /*
   * Header styling.
   *
   * Homepage:
   * - Top of page = transparent.
   * - After scrolling = dark glass/sticky surface.
   *
   * Inner pages:
   * - Always cream sticky surface.
   */
  const headerSurface = (() => {
    const visibilityClass = isVisible
      ? "translate-y-0 opacity-100"
      : "-translate-y-[110%] opacity-0";

    if (isHome) {
      const backgroundClass =
        megaOpen || open || isScrolled
          ? "border-b border-white/10 bg-[#07100d]/85 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
          : "bg-transparent text-white";

      return `fixed top-0 right-0 left-0 z-50 will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${visibilityClass} ${backgroundClass}`;
    }

    return `fixed top-0 right-0 left-0 z-50 will-change-transform border-b border-border bg-cream text-ink shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out ${visibilityClass}`;
  })();

  const closeMega = () => setActiveKey(null);

  return (
    <header className={headerSurface} onMouseLeave={closeMega}>
      <div className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-6 sm:gap-4 lg:px-10">
        {/* Logo */}
        <div className="min-w-0 shrink">
          <Logo className={isHome ? "text-white" : "text-ink"} />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
          aria-label="Primary navigation"
        >
          {megaNavItems.map((item) => {
            const itemPath = item.href.split("#")[0] || "/";
            const routeActive =
              itemPath !== "/" &&
              (pathname === itemPath || pathname.startsWith(`${itemPath}/`));
            const isMegaActive = activeKey === item.label;
            const highlight = isMegaActive || routeActive;

            return (
              <NavMegaItem
                key={item.label}
                item={item}
                isActive={isMegaActive}
                panelId={panelId}
                onActivate={() => {
                  setActiveKey(item.label);
                  setIsVisible(true);
                }}
                className={`text-[12px] font-medium tracking-[0.14em] uppercase transition-colors xl:text-[13px] ${highlight ? activeColor : linkColor
                  } ${isMegaActive
                    ? "underline decoration-sage decoration-2 underline-offset-8"
                    : ""
                  }`}
              />
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={contactCta.href}
            className={
              isHome
                ? "hidden border border-white/70 px-5 py-2.5 text-sm font-semibold tracking-wide text-white uppercase transition-all hover:border-white hover:bg-white/10 lg:inline-flex rounded-sm"
                : "hidden bg-forest px-5 py-2.5 text-sm font-semibold tracking-wide text-cream uppercase transition-all hover:bg-ink lg:inline-flex rounded-sm"}
          >
            {contactCta.label}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`flex min-h-11 min-w-11 items-center justify-center lg:hidden ${isHome ? "text-white" : "text-ink"
              }`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => {
              setOpen((value) => !value);
              setActiveKey(null);
              setIsVisible(true);
            }}
          >
            {open ? (
              <X size={22} strokeWidth={1.75} />
            ) : (
              <Menu size={22} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      {activeHasLinks && activeItem ? (
        <MegaMenuPanel
          id={panelId}
          title={activeItem.label}
          links={activeLinks}
          feature={activeItem.feature}
          viewAllHref={activeItem.href}
          onNavigate={closeMega}
        />
      ) : null}

      {/* Mobile Navigation */}
      {open ? (
        <div
          id="site-menu"
          className={
            isHome
              ? "mobile-nav-drawer flex max-h-[min(80vh,640px)] flex-col border-t border-white/15 bg-[#07100d]/97 backdrop-blur-xl lg:hidden"
              : "mobile-nav-drawer flex max-h-[min(80vh,640px)] flex-col border-t border-border bg-cream lg:hidden"
          }
        >
          <nav
            className="mx-auto w-full max-w-[1440px] flex-1 overflow-y-auto px-6 py-4"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-0.5">
              {megaNavItems.map((item) => {
                const links = resolveMegaLinks(item);
                const hasLinks = links.length > 0;
                const expanded = mobileExpandedKey === item.label;

                const textClass = isHome ? "text-white/90" : "text-ink";
                const mutedClass = isHome
                  ? "text-white/55"
                  : "text-ink/55";

                const rowBorder = isHome
                  ? "border-white/10"
                  : "border-border/80";

                if (!hasLinks) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-12 items-center py-3 text-base font-medium ${textClass}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className={`border-b ${rowBorder} last:border-b-0`}
                  >
                    <div className="flex min-h-12 items-center gap-1">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`min-w-0 flex-1 py-3 text-base font-medium ${textClass}`}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        className={`flex min-h-12 min-w-12 items-center justify-center rounded-sm ${textClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage`}
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"
                          } ${item.label} submenu`}
                        onClick={() =>
                          setMobileExpandedKey(
                            expanded ? null : item.label,
                          )
                        }
                      >
                        <ChevronDown
                          className={`size-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""
                            } ${expanded ? "text-sage" : ""}`}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {expanded ? (
                      <ul className="mobile-nav-accordion space-y-0.5 pb-4">
                        <li>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-12 items-center gap-2 rounded-sm px-3 py-2.5 text-sm font-semibold tracking-wide text-sage uppercase transition-colors hover:bg-sage/10"
                          >
                            {item.label} overview
                            <span aria-hidden="true">→</span>
                          </Link>
                        </li>

                        {links.map((link) => (
                          <li key={`${link.href}-${link.label}`}>
                            <Link
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className={`group flex min-h-12 flex-col justify-center rounded-sm px-3 py-2.5 transition-colors hover:bg-sage/10 focus-visible:bg-sage/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ${textClass}`}
                            >
                              <span className="text-[15px] font-medium group-hover:text-sage">
                                {link.label}
                              </span>

                              {link.description ? (
                                <span
                                  className={`mt-0.5 text-sm leading-snug ${mutedClass}`}
                                >
                                  {link.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div
            className={
              isHome
                ? "sticky bottom-0 border-t border-white/10 bg-[#07100d]/97 px-6 py-4 backdrop-blur-xl"
                : "sticky bottom-0 border-t border-border bg-cream px-6 py-4"
            }
          >
            <Link
              href={contactCta.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center bg-[#849363] px-5 py-3 text-center text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-ink rounded-sm"
            >
              {contactCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}