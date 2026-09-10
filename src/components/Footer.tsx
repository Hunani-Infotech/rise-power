import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/content";

function SocialIcon({ name }: { name: "linkedin" | "youtube" | "facebook" | "instagram" }) {
  const className = "h-[18px] w-[18px]";
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 10v7M8 7.5v.01M12 17v-4.5a2 2 0 1 1 4 0V17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M10 9.5v5l5-2.5-5-2.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <path d="M13 8h2V6h-2a3 3 0 0 0-3 3v2H8v2h2v5h2v-5h2.2l.4-2H12V9a1 1 0 0 1 1-1Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/defense", label: "Defense" },
  { href: "/commercial", label: "Commercial" },
];

const companyLinks = [
  { href: "/consumer", label: "Consumer" },
  { href: "/products", label: "Products" },
  { href: "/investors", label: "Investors" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "LinkedIn", name: "linkedin" as const },
  { href: "#", label: "YouTube", name: "youtube" as const },
  { href: "#", label: "Facebook", name: "facebook" as const },
  { href: "#", label: "Instagram", name: "instagram" as const },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Logo className="text-cream" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            Portable hydrogen fuel cell systems for defense, disaster response,
            and remote operations. Canadian-engineered. Field-validated.
          </p>
          <p className="mt-6 text-xs tracking-wide text-cream/50">
            {site.parent} · {site.address.line1} · {site.address.city}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sage uppercase">
            Explore
          </p>
          <ul className="space-y-2.5 text-sm text-cream/80">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sage uppercase">
            Company
          </p>
          <ul className="space-y-2.5 text-sm text-cream/80">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] gap-5 px-6 pb-10 lg:px-10">
        {socialLinks.map(({ href, label, name }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-cream/80 transition-colors hover:text-cream"
          >
            <SocialIcon name={name} />
          </a>
        ))}
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 text-xs tracking-wide text-cream/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>
            Controlled goods compliant · Designed and manufactured in Canada ·
            Subject to Canadian export controls
          </p>
          <p className="flex gap-4">
            <span>© {new Date().getFullYear()} Rise Mission Power</span>
            <Link href="/privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
