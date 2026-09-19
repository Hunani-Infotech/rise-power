import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 80, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "three"],
  },
  async redirects() {
    return [
      // Live-site resource paths
      {
        source: "/resources/datasheets",
        destination: "/datasheets",
        permanent: false,
      },
      {
        source: "/insights/articles",
        destination: "/insights",
        permanent: false,
      },
      // Investor PDF aliases (live root paths → local media)
      {
        source: "/rise-power-deck.pdf",
        destination: "/media/investors/rise-power-deck.pdf",
        permanent: false,
      },
      {
        source: "/rise-power-one-pager.pdf",
        destination: "/media/investors/rise-power-one-pager.pdf",
        permanent: false,
      },
      {
        source: "/careers",
        destination: "/contact",
        permanent: false,
      },
      // Legacy About Us paths → Company
      {
        source: "/about",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/aboutus",
        destination: "/company",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
