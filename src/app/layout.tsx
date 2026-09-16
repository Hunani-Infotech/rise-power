import type { Metadata, Viewport } from "next";
import { Barlow, Rajdhani } from "next/font/google";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { HashScroll } from "@/components/HashScroll";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content";
import { siteDescription, siteTitle } from "@/lib/seo";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/media/brand/rise-power-logo.png`,
  image: `${site.url}/media/brand/rise-power-logo.png`,
  description: siteDescription,
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
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.name,
  publisher: site.parent,
  category: "technology",
  keywords: [
    "hydrogen fuel cell",
    "portable power",
    "tactical power",
    "defense energy",
    "disaster response",
    "critical infrastructure",
    "Rise Power",
    "CIMtech Green Energy",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#6e7f42" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${barlow.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <HashScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <ClosingCta />
        <Footer />
        <DeferredAnalytics />
      </body>
    </html>
  );
}
