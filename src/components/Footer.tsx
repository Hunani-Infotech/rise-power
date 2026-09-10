import Link from "next/link";
import { Logo } from "./Logo";
import { products, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Portable hydrogen fuel cell systems for defense, disaster response,
            and remote operations. Canadian-engineered. Field-validated.
          </p>
          <p className="mt-6 text-xs tracking-wide text-muted uppercase">
            {site.parent} · {site.address.line1} · {site.address.city}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Products
          </p>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products#${product.slug}`}
                  className="hover:text-accent"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Company
          </p>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="hover:text-accent">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-accent">
                News & Insights
              </Link>
            </li>
            <li>
              <Link href="/datasheets" className="hover:text-accent">
                Datasheets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                Request a Briefing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 text-xs text-muted uppercase tracking-wide lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>
            Controlled goods compliant · Designed and manufactured in Canada ·
            Subject to Canadian export controls
          </p>
          <p className="flex gap-4">
            <span>© {new Date().getFullYear()} Rise Power, Inc.</span>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
