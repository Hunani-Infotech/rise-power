// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import type { MegaLink } from "@/lib/nav-menu";

// export type MegaMenuPanelProps = {
//   title?: string;
//   links: readonly MegaLink[];
//   onNavigate?: () => void;
//   id?: string;
// };

// export function MegaMenuPanel({
//   title,
//   links,
//   onNavigate,
//   id,
// }: MegaMenuPanelProps) {
//   return (
//     <div
//       id={id}
//       role="region"
//       aria-label={title ? `${title} submenu` : "Submenu"}
//       className="mega-menu-panel absolute top-full right-0 left-0 z-50 border-t border-border bg-cream text-ink shadow-[0_18px_40px_rgba(10,14,10,0.14)]"
//     >
//       <div className="mx-auto w-full max-w-[560px] px-6 py-6 sm:py-7 lg:px-8">
//         {title ? (
//           <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-sage uppercase">
//             {title}
//           </p>
//         ) : null}

//         <ul className="mega-menu-link-list flex flex-col gap-1">
//           {links.map((link) => (
//             <li key={`${link.href}-${link.label}`}>
//               <Link
//                 href={link.href}
//                 onClick={onNavigate}
//                 className="mega-menu-link group relative flex min-h-14 items-center gap-3 rounded-sm py-3 pr-3 pl-4 outline-none transition-colors hover:bg-sage/10 focus-visible:bg-sage/10 focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
//               >
//                 <span
//                   aria-hidden="true"
//                   className="absolute top-2 bottom-2 left-0 w-[3px] origin-center scale-y-0 rounded-full bg-sage transition-transform duration-200 group-hover:scale-y-100 group-focus-visible:scale-y-100"
//                 />
//                 <span className="min-w-0 flex-1">
//                   <span className="block text-[15px] font-medium text-[#0a0e0a] transition-colors group-hover:text-sage sm:text-base">
//                     {link.label}
//                   </span>
//                   {link.description ? (
//                     <span className="mt-0.5 block text-sm leading-snug text-[#141a14]/60">
//                       {link.description}
//                     </span>
//                   ) : null}
//                 </span>
//                 <ArrowRight
//                   className="size-4 shrink-0 text-[#141a14]/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-sage"
//                   strokeWidth={1.75}
//                   aria-hidden="true"
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { MegaFeature, MegaLink } from "@/lib/nav-menu";

type MegaMenuPanelProps = {
  id: string;
  title: string;
  links: readonly MegaLink[];
  feature?: MegaFeature;
  onNavigate: () => void;
};

export function MegaMenuPanel({
  id,
  title,
  links,
  feature,
  onNavigate,
}: MegaMenuPanelProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label={`${title} menu`}
      className="absolute top-full right-0 left-0 z-40 border-t border-white/10 bg-[#f7f5ef] text-[#141a14] shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[1fr_360px] lg:px-10 lg:py-10">
        {/* LINKS */}
        <div className="min-w-0">
          <div className="mb-5 flex items-center justify-between border-b border-[#dcd8ce] pb-3">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#6e7f42] uppercase">
                Explore
              </p>
              <h2 className="mt-1 font-display text-xl font-bold uppercase">
                {title}
              </h2>
            </div>

            <Link
              href={links[0]?.href ?? "#"}
              onClick={onNavigate}
              className="hidden items-center gap-1 text-[10px] font-semibold tracking-[0.14em] text-[#6e7f42] uppercase transition-colors hover:text-[#141a14] sm:flex"
            >
              View all
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                onClick={onNavigate}
                className="group flex min-h-[70px] items-center justify-between border-b border-[#e5e1d8] py-3 transition-colors hover:bg-[#efede5]"
              >
                <span className="min-w-0 pr-4">
                  <span className="block text-[13px] font-semibold text-[#171b17] transition-colors group-hover:text-[#6e7f42]">
                    {link.label}
                  </span>

                  {link.description && (
                    <span className="mt-1 block max-w-[330px] text-[11px] leading-relaxed text-[#77736a]">
                      {link.description}
                    </span>
                  )}
                </span>

                <ChevronRight
                  className="size-4 shrink-0 text-[#aaa69c] transition-all group-hover:translate-x-1 group-hover:text-[#6e7f42]"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* FEATURE */}
        {feature && (
          <div className="relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-sm bg-[#0b110d] p-7 text-[#f3efe4]">
            <div className="absolute -right-16 -top-16 size-44 rounded-full border border-[#6e7f42]/20" />
            <div className="absolute -right-8 -top-8 size-28 rounded-full border border-[#6e7f42]/15" />

            <div className="relative">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[#8ba64d] uppercase">
                {title}
              </p>

              <h3 className="mt-4 max-w-[280px] font-display text-2xl leading-[1.05] font-bold uppercase">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-[300px] text-xs leading-relaxed text-[#f3efe4]/65">
                {feature.body}
              </p>
            </div>

            <Link
              href={feature.href}
              onClick={onNavigate}
              className="relative mt-6 inline-flex w-fit items-center gap-2 border-b border-[#6e7f42] pb-2 text-[10px] font-semibold tracking-[0.15em] text-[#9bb65b] uppercase transition-colors hover:text-white"
            >
              {feature.cta}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}