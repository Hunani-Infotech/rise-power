import type { Metadata, Viewport } from "next";
import { Barlow, Rajdhani } from "next/font/google";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description:
    "Portable hydrogen power systems for defense and critical infrastructure.",
  email: site.email,
  telephone: "+1-604-807-4850",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Surrey",
    addressRegion: "BC",
    postalCode: "V3S 6C8",
    addressCountry: "CA",
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.parent,
  },
};

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

/** Display headings match the Figma mockup (Rajdhani Bold family). */
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rise Mission Power",
    template: "%s | Rise Mission Power",
  },
  description:
    "Mobile tactical power for defense and critical missions. Portable systems built for autonomous operations—silent, clean, and mission-ready.",
  openGraph: {
    title: "Rise Mission Power",
    description:
      "Mobile tactical power for defense and critical missions. Portable systems built for autonomous operations—silent, clean, and mission-ready.",
    siteName: "Rise Power",
    images: ["/media/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#6e7f42" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <ClosingCta />
        <Footer />
        <DeferredAnalytics />
      </body>
    </html>
  );
}
