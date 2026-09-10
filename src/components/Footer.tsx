import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { footer } from "@/lib/home-content";

function SocialIcon({ name }: { name: "LinkedIn" | "YouTube" | "X" }) {
  const className = "h-[18px] w-[18px]";
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
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
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.75" />
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
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 5h4.2l3.3 4.6L16.5 5H19l-5.1 6.7L19.2 19h-4.2l-3.5-4.9L7.5 19H5l5.4-7.1L5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0f140f] text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-[1.2fr_2fr_1.1fr] lg:px-10">
        <div>
          <Logo className="text-cream" />
          <p className="mt-4 text-sm font-semibold tracking-wide text-sage">
            {footer.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {footer.blurb}
          </p>
          <div className="mt-6 flex gap-4">
            {footer.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-cream/80 transition-colors hover:text-cream"
              >
                <SocialIcon name={item.label as "LinkedIn" | "YouTube" | "X"} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footer.groups.map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sage uppercase">
                {group.heading}
              </p>
              <ul className="space-y-2.5 text-sm text-cream/80">
                {group.links.map((item) => (
                  <li key={`${group.heading}-${item.label}`}>
                    <Link href={item.href} className="hover:text-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sage uppercase">
            {footer.newsletter.heading}
          </p>
          <p className="text-sm leading-relaxed text-cream/70">
            {footer.newsletter.body}
          </p>
          <form className="mt-4 flex gap-2" action="#" method="post">
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder={footer.newsletter.placeholder}
              className="min-h-11 flex-1 border border-cream/20 bg-transparent px-3 text-sm text-cream placeholder:text-cream/40 focus:border-sage focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex min-h-11 min-w-11 items-center justify-center bg-sage text-cream transition-colors hover:bg-sage-dark"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>

          <ul className="mt-6 space-y-3 text-sm text-cream/75">
            <li>
              <a
                href={`mailto:${footer.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-cream"
              >
                <Mail className="size-4 text-sage" />
                {footer.contact.email}
              </a>
            </li>
            <li>
              <a
                href={footer.contact.phoneHref}
                className="inline-flex items-center gap-2 hover:text-cream"
              >
                <Phone className="size-4 text-sage" />
                {footer.contact.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-sage" />
              {footer.contact.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-6 text-xs tracking-wide text-cream/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap gap-4">
            {footer.legal.map((item) => (
              <Link key={item.href + item.label} href={item.href} className="hover:text-cream">
                {item.label}
              </Link>
            ))}
          </div>
          <p>{footer.copyright}</p>
          <p>
            {footer.badgeBefore}{" "}
            <span className="text-sage">{footer.badgeAccent}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
