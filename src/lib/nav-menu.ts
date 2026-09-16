export type MegaLink = {
  label: string;
  href: string;
  description?: string;
};

export type MegaFeature = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export type MegaNavItem = {
  label: string;
  href: string;
  /** Single flat list for the mega drawer — 4 to 6 links max */
  links?: readonly MegaLink[];
  /** Optional one highlight card (NOT extra link columns) */
  feature?: MegaFeature;
};

export const megaNavItems: readonly MegaNavItem[] = [
  {
    label: "Products",
    href: "/products",
    links: [
      {
        label: "Rise Sentinel™",
        href: "/products#sentinel",
        description: "Man-portable hydrogen power for forward operations.",
      },
      {
        label: "Rise Falcon™",
        href: "/products#falcon",
        description: "Hydrogen range extender for industrial drones.",
      },
      {
        label: "Rise Titan™",
        href: "/products#titan",
        description: "3 kW silent hydrogen generator for sustained ops.",
      },
      {
        label: "Hydrogen Cartridge Kit",
        href: "/products#cartridge-kit",
        description: "Universal slim hydrogen cartridges with quick-connect.",
      },
    ],
    feature: {
      title: "View All Products",
      body: "Four products. One cartridge ecosystem. Engineered for defense, disaster response, remote operations, and critical backup.",
      href: "/products",
      cta: "View All Products",
    },
  },

  {
    label: "Capabilities",
    href: "/capabilities",
    links: [
      {
        label: "Engineering",
        href: "/capabilities#engineering",
        description: "From early-stage prototypes to production-ready hardware.",
      },
      {
        label: "Integration",
        href: "/capabilities#integration",
        description: "Works with existing platforms and infrastructure.",
      },
      {
        label: "Field",
        href: "/capabilities#field",
        description: "Rapid field deployment with end-to-end logistics support.",
      },
      {
        label: "Safety",
        href: "/capabilities#safety",
        description: "Safety and compliance engineered in from day one.",
      },
    ],
    feature: {
      title: "Our Capabilities",
      body: "Engineering, integration, field deployment, and safety — built for real operating environments.",
      href: "/capabilities",
      cta: "See Capabilities",
    },
  },

  {
    label: "Use Cases",
    href: "/use-cases",
    links: [
      {
        label: "Defense & Security",
        href: "/use-cases#defense-security",
        description:
          "Silent portable power for bases, troops, and surveillance drones.",
      },
      {
        label: "Remote Operations",
        href: "/use-cases#remote-operations",
        description: "Sustained power where fuel resupply is difficult.",
      },
      {
        label: "Disaster Response",
        href: "/use-cases#disaster-response",
        description: "Indoor-safe emergency power when the grid drops.",
      },
      {
        label: "Critical Infrastructure",
        href: "/use-cases#critical-infrastructure",
        description: "Mission-duration backup for facilities that cannot drop.",
      },
    ],
    feature: {
      title: "Deployed Where It Matters",
      body: "See how Rise Power systems perform across real operating environments.",
      href: "/use-cases",
      cta: "View All Use Cases",
    },
  },

  {
    label: "Company",
    href: "/company",
    links: [
      {
        label: "About Us",
        href: "/company",
        description: "Canadian engineered. Field validated.",
      },
      {
        label: "Leadership",
        href: "/company#leadership",
        description: "The team behind the systems.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Request a briefing with our team.",
      },
    ],
    feature: {
      title: "Canadian-Built, Field-Validated",
      body: "Engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company.",
      href: "/company#leadership",
      cta: "Meet the Team",
    },
  },

  {
    label: "Resources",
    href: "/datasheets",
    links: [
      {
        label: "Datasheets",
        href: "/datasheets",
        description: "Engineering targets and specifications, beta-stage.",
      },
      {
        label: "News & Insights",
        href: "/insights",
        description: "Technical articles and field analysis.",
      },
      {
        label: "Resource Center",
        href: "/resources",
        description: "Specs, insights, and field notes.",
      },
    ],
    feature: {
      title: "View All Resources",
      body: "Datasheets and insights for procurement, programs, and integration leads.",
      href: "/datasheets",
      cta: "Browse Datasheets",
    },
  },

  {
    label: "Investors",
    href: "/investors",
    links: [
      {
        label: "Investor Deck",
        href: "/media/investors/rise-power-deck.pdf",
        description: "Download the Rise Power investor briefing (PDF).",
      },
      {
        label: "Company One-Pager",
        href: "/media/investors/rise-power-one-pager.pdf",
        description: "Revenue forecast and company overview (PDF).",
      },
      {
        label: "Press & Updates",
        href: "/investors#press",
        description: "Company news, milestones, and press releases.",
      },
    ],
    feature: {
      title: "View All Investors",
      body: "Materials and contact for qualified investors evaluating the round.",
      href: "/investors",
      cta: "Investor Overview",
    },
  },
];
