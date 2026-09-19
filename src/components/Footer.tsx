"use client";

// import Link from "next/link";
// import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
// import { Logo } from "./Logo";
// import { footer } from "@/lib/home-content";
// import { Reveal } from "@/components/motion/Reveal";

// const sage = "#6e7f42";
// const footerBg = "#0a0e0a";

// function SocialIcon({ name }: { name: "LinkedIn" | "YouTube" | "X" }) {
//   const className = "h-[16px] w-[16px]";
//   if (name === "LinkedIn") {
//     return (
//       <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
//         <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
//         <path
//           d="M8 10v7M8 7.5v.01M12 17v-4.5a2 2 0 1 1 4 0V17"
//           stroke="currentColor"
//           strokeWidth="1.75"
//           strokeLinecap="round"
//         />
//       </svg>
//     );
//   }
//   if (name === "YouTube") {
//     return (
//       <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
//         <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.75" />
//         <path
//           d="M10 9.5v5l5-2.5-5-2.5Z"
//           stroke="currentColor"
//           strokeWidth="1.75"
//           strokeLinejoin="round"
//         />
//       </svg>
//     );
//   }
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
//       <path
//         d="M5 5h4.2l3.3 4.6L16.5 5H19l-5.1 6.7L19.2 19h-4.2l-3.5-4.9L7.5 19H5l5.4-7.1L5 5Z"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function MissionFlagMark() {
//   return (
//     <svg
//       viewBox="0 0 28 20"
//       className="h-5 w-7 shrink-0 text-cream"
//       fill="none"
//       aria-hidden="true"
//     >
//       <rect x="0.5" y="0.5" width="27" height="19" rx="1.5" stroke="currentColor" strokeWidth="1" />
//       <rect x="1.5" y="1.5" width="10" height="8" fill={sage} opacity="0.85" />
//       <path
//         d="M6.5 3.2l.55 1.7h1.8l-1.45 1.05.55 1.7-1.45-1.05-1.45 1.05.55-1.7L4.15 4.9h1.8L6.5 3.2Z"
//         fill="currentColor"
//       />
//       <path
//         d="M13 3.5h13M13 6.5h13M13 9.5h13M2 12.5h24M2 15.5h24M2 18.5h24"
//         stroke="currentColor"
//         strokeWidth="1"
//         opacity="0.75"
//       />
//     </svg>
//   );
// }

// export function Footer() {
//   return (
//     <footer className="text-cream" style={{ background: footerBg }}>
//       <Reveal
//         variant="fade"
//         className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 lg:px-10"
//       >
//         <div className="sm:col-span-2 lg:col-span-1">
//           <Logo className="text-cream" />
//           <p className="mt-4 text-sm font-semibold tracking-wide text-sage">
//             {footer.tagline}
//           </p>
//           <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
//             {footer.blurb}
//           </p>
//           <div className="mt-6 flex gap-3">
//             {footer.social.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 aria-label={item.label}
//                 className="inline-flex size-10 items-center justify-center rounded-md border border-cream/20 text-cream/80 transition-colors hover:border-cream/40 hover:text-cream"
//               >
//                 <SocialIcon name={item.label as "LinkedIn" | "YouTube" | "X"} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {footer.groups.map((group) => (
//           <div key={group.heading}>
//             <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sage uppercase">
//               {group.heading}
//             </p>
//             <ul className="space-y-2.5 text-sm text-cream/80">
//               {group.links.map((item) => (
//                 <li key={`${group.heading}-${item.label}`}>
//                   <Link href={item.href} className="hover:text-cream">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div>
//           <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sage uppercase">
//             {footer.newsletter.heading}
//           </p>
//           <p className="text-sm leading-relaxed text-cream/70">
//             {footer.newsletter.body}
//           </p>
//           <form className="mt-4 flex" action="#" method="post">
//             <label className="sr-only" htmlFor="footer-email">
//               Email
//             </label>
//             <input
//               id="footer-email"
//               type="email"
//               name="email"
//               placeholder={footer.newsletter.placeholder}
//               className="min-h-11 flex-1 border border-cream/20 border-r-0 bg-[#0f140f] px-3 text-sm text-cream placeholder:text-cream/40 focus:border-sage focus:outline-none"
//             />
//             <button
//               type="submit"
//               aria-label="Subscribe"
//               className="inline-flex min-h-11 min-w-11 items-center justify-center text-cream transition-colors hover:opacity-90"
//               style={{ background: sage }}
//             >
//               <ArrowRight className="size-4" />
//             </button>
//           </form>

//           <ul className="mt-6 space-y-3 text-sm text-cream/75">
//             <li>
//               <a
//                 href={`mailto:${footer.contact.email}`}
//                 className="inline-flex items-center gap-2 hover:text-cream"
//               >
//                 <Mail className="size-4 shrink-0 text-sage" />
//                 {footer.contact.email}
//               </a>
//             </li>
//             <li>
//               <a
//                 href={footer.contact.phoneHref}
//                 className="inline-flex items-center gap-2 hover:text-cream"
//               >
//                 <Phone className="size-4 shrink-0 text-sage" />
//                 {footer.contact.phone}
//               </a>
//             </li>
//             <li className="inline-flex items-center gap-2">
//               <MapPin className="size-4 shrink-0 text-sage" />
//               {footer.contact.location}
//             </li>
//           </ul>
//         </div>
//       </Reveal>

//       <div className="border-t border-cream/10">
//         <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-6 text-center text-xs tracking-wide text-cream/50 lg:grid lg:grid-cols-3 lg:items-center lg:px-10 lg:text-left">
//           <p className="lg:justify-self-start">{footer.copyright}</p>

//           <nav
//             aria-label="Legal"
//             className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 lg:justify-self-center"
//           >
//             {footer.legal.map((item, index) => (
//               <span key={item.href + item.label} className="inline-flex items-center">
//                 {index > 0 ? (
//                   <span className="mx-2.5 text-cream/30" aria-hidden>
//                     |
//                   </span>
//                 ) : null}
//                 <Link href={item.href} className="hover:text-cream">
//                   {item.label}
//                 </Link>
//               </span>
//             ))}
//           </nav>

//           <p className="inline-flex items-center justify-center gap-2.5 lg:justify-self-end">
//             <MissionFlagMark />
//             <span>
//               {footer.badgeBefore}{" "}
//               <span className="text-sage">{footer.badgeAccent}</span>
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { AppLink } from "@/components/nav/AppLink";
import { footer } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const footerBg = "#061018";

function SocialIcon({ name }: { name: "LinkedIn" | "YouTube" | "X" }) {
  const className = "h-[28px] w-[28px]";

  if (name === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M8 10v7M8 7.5v.01M12 17v-4.5a2 2 0 1 1 4 0V17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M10 9.5v5l5-2.5-5-2.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5h4.2l3.3 4.6L16.5 5H19l-5.1 6.7L19.2 19h-4.2l-3.5-4.9L7.5 19H5l5.4-7.1L5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MissionFlagMark() {
  return (
    <svg
      viewBox="0 0 28 20"
      className="h-5 w-7 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="19"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1"
      />

      <rect
        x="1.5"
        y="1.5"
        width="10"
        height="8"
        fill={sage}
        opacity="0.85"
      />

      <path
        d="M6.5 3.2l.55 1.7h1.8l-1.45 1.05.55 1.7-1.45-1.05-1.45 1.05.55-1.7L4.15 4.9h1.8L6.5 3.2Z"
        fill="currentColor"
      />

      <path
        d="M13 3.5h13M13 6.5h13M13 9.5h13M2 12.5h24M2 15.5h24M2 18.5h24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.75"
      />
    </svg>
  );
}

function FooterNavGroups() {
  const [openHeading, setOpenHeading] = useState<string | null>(null);

  return (
    <>
      {/* Mobile / tablet accordion */}
      <div className="border-t border-white/15 lg:hidden">
        {footer.groups.map((group) => {
          const expanded = openHeading === group.heading;
          const panelId = `footer-nav-${group.heading
            .toLowerCase()
            .replace(/\s+/g, "-")}`;

          return (
            <div
              key={group.heading}
              className="border-b border-white/15"
            >
              <button
                type="button"
                className="flex w-full min-h-12 items-center justify-between gap-3 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() =>
                  setOpenHeading(expanded ? null : group.heading)
                }
              >
                <span className="font-display text-lg font-semibold tracking-wide text-white uppercase">
                  {group.heading}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-cream/70 transition-transform duration-200 ${
                    expanded ? "rotate-180 text-sage" : ""
                  }`}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </button>

              {expanded ? (
                <ul
                  id={panelId}
                  className="mobile-nav-accordion space-y-3 pb-4"
                >
                  {group.links.map((item) => (
                    <li key={`${group.heading}-${item.label}`}>
                      <AppLink
                        href={item.href}
                        className="block text-[15px] leading-5 text-white transition-colors hover:text-sage"
                      >
                        {item.label}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Desktop columns */}
      <div className="hidden gap-x-6 lg:grid lg:grid-cols-4 lg:px-2">
        {footer.groups.map((group) => (
          <div key={group.heading} className="min-w-0">
            <p className="font-display text-lg font-semibold tracking-wide text-white uppercase">
              {group.heading}
            </p>

            <div
              className="mt-3 h-[2px] w-9"
              style={{ background: sage }}
            />

            <ul className="mt-5 space-y-4">
              {group.links.map((item) => (
                <li key={`${group.heading}-${item.label}`}>
                  <AppLink
                    href={item.href}
                    className="text-[15px] leading-5 text-white transition-colors hover:text-sage"
                  >
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-cream"
      style={{ background: footerBg }}
    >
      {/* Main Footer */}
      <Reveal
        variant="fade"
        className="mx-auto grid w-full max-w-[1716px] gap-10 px-6 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_2.2fr_1.05fr] lg:gap-8 lg:px-10 lg:py-14"
      >
        {/* Brand */}
        <div className="lg:border-r lg:border-white/15 lg:pr-8 xl:pr-10">
          <Logo variant="onDark" />

          <p className="mt-6 text-lg font-semibold text-cream">
            {footer.tagline}
          </p>

          <p className="mt-5 max-w-[340px] text-mm leading-6 text-white">
            {footer.blurb}
          </p>

          <div className="mt-7 flex gap-3">
            {footer.social.map((item) => {
              const isPlaceholder = !item.href || item.href === "#";
              const className =
                "inline-flex size-11 items-center justify-center rounded-md border border-white/20 text-cream/85 transition-colors hover:border-sage hover:text-cream";

              if (isPlaceholder) {
                return (
                  <span
                    key={item.label}
                    aria-label={item.label}
                    className={className}
                  >
                    <SocialIcon
                      name={item.label as "LinkedIn" | "YouTube" | "X"}
                    />
                  </span>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className={className}
                >
                  <SocialIcon
                    name={item.label as "LinkedIn" | "YouTube" | "X"}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <FooterNavGroups />

        {/* Newsletter + Contact */}
        <div className="lg:border-l lg:border-white/15 lg:pl-8 xl:pl-10">
          <p className="font-display text-lg font-semibold tracking-wide text-white uppercase">
            {footer.newsletter.heading}
          </p>

          <div
            className="mt-3 h-[2px] w-9"
            style={{ background: sage }}
          />

          <p className="mt-5 max-w-[350px] text-mm leading-6 text-white">
            {footer.newsletter.body}
          </p>

          <form
            className="mt-5 flex h-12 max-w-[380px] overflow-hidden border border-white/20 rounded-sm"
            action="#"
            method="post"
          >
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>

            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder={footer.newsletter.placeholder}
              className="min-w-0 flex-1 bg-[#0b151b] px-4 text-mm text-cream outline-none placeholder:text-cream/40 focus:border-sage"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex w-12 shrink-0 items-center justify-center text-cream transition-opacity hover:opacity-85 bg-[#849363]"
              // style={{ background: sage }}
            >
              <ArrowRight className="size-5" />
            </button>
          </form>

          <ul className="mt-6 space-y-4 text-mm text-white">
            <li>
              <a
                href={`mailto:${footer.contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-sage"
              >
                <Mail className="size-[18px] shrink-0 text-sage" />
                <span>{footer.contact.email}</span>
              </a>
            </li>

            <li>
              <a
                href={footer.contact.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-sage"
              >
                <Phone className="size-[18px] shrink-0 text-sage" />
                <span>{footer.contact.phone}</span>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="size-[18px] shrink-0 text-sage" />
              <span>{footer.contact.location}</span>
            </li>
          </ul>
        </div>
      </Reveal>

      {/* Bottom */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1716px] flex-col gap-6 px-6 py-6 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-10">
          {/* Copyright */}
          <p className="text-center text-mm tracking-wide text-white lg:text-left">
            {footer.copyright}
          </p>

          {/* Legal */}
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center"
          >
            {footer.legal.map((item, index) => (
              <span
                key={item.href + item.label}
                className="inline-flex items-center"
              >
                {index > 0 && (
                  <span
                    className="mx-3 text-cream/25"
                    aria-hidden
                  >
                    |
                  </span>
                )}

                <AppLink
                  href={item.href}
                  className="text-mm text-white transition-colors hover:text-sage"
                >
                  {item.label}
                </AppLink>
              </span>
            ))}
          </nav>

          {/* Mission Badge */}
          <p className="inline-flex items-center justify-center gap-3 text-center lg:justify-self-end lg:text-left">
            <MissionFlagMark />

            <span className="font-display text-xs font-semibold tracking-wide text-white uppercase sm:text-sm">
              {footer.badgeBefore}{" "}
              <span style={{ color: sage }}>
                {footer.badgeAccent}
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}