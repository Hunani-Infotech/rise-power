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
  /** Single flat list for the mega drawer — keep lean */
  links?: readonly MegaLink[];
  /** Optional one highlight card */
  feature?: MegaFeature;
};

/**
 * Primary navigation — client order + full page coverage from risepower.com.
 *
 * Products | Markets | Capabilities | Company | Resources | Investors | Careers
 * but every live destination is linked.
 */
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
        description: "Hydrogen range extender for ISR and UAV platforms.",
      },
      {
        label: "Rise Titan™",
        href: "/products#titan",
        description: "3 kW silent hydrogen generator for sustained ops.",
      },
      {
        label: "Hydrogen Cartridge Kit",
        href: "/products#cartridge-kit",
        description: "Universal slim cartridges with quick-connect.",
      },
    ],
    feature: {
      title: "All Products",
      body: "Four systems. One cartridge ecosystem. Engineered for defense, disaster response, and critical backup.",
      href: "/products",
      cta: "View All Products",
    },
  },

  /* No links → no desktop chevron / no mobile accordion */
  {
    label: "Markets",
    href: "/use-cases",
  },

  {
    label: "Capabilities",
    href: "/capabilities",
    links: [
      {
        label: "Engineering & Development",
        href: "/capabilities/engineering-development",
        description: "From prototypes to production-ready hardware.",
      },
      {
        label: "System Integration",
        href: "/capabilities/system-integration",
        description: "Works with existing platforms and infrastructure.",
      },
      {
        label: "Field Deployment",
        href: "/capabilities/field-deployment",
        description: "Rapid deployment with end-to-end logistics support.",
      },
      {
        label: "Safety & Compliance",
        href: "/capabilities/safety-compliance",
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
    label: "Company",
    href: "/company",
    links: [
      // {
      //   label: "About Rise Power",
      //   href: "/company",
      //   description: "The mission behind portable hydrogen power.",
      // },
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
      title: "Canadian-Built",
      body: "Engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company.",
      href: "/company",
      cta: "About Rise Power",
    },
  },

  {
    label: "Resources",
    href: "/resources",
    links: [
      {
        label: "Resource Center",
        href: "/resources",
        description: "Specs, insights, and field notes.",
      },
      {
        label: "Datasheets",
        href: "/resources/datasheets",
        description: "Engineering targets and specifications.",
      },
      {
        label: "Procurement FAQ",
        href: "/resources/faq",
        description: "Answers for procurement and program teams.",
      },
      {
        label: "Insights",
        href: "/insights",
        description: "Technical articles and field analysis.",
      },
    ],
    feature: {
      title: "Browse Resources",
      body: "Datasheets, FAQ, and insights for procurement, programs, and integration leads.",
      href: "/resources",
      cta: "Open Resource Center",
    },
  },

  {
    label: "Investors",
    href: "/investors",
    links: [
      {
        label: "Investor Overview",
        href: "/investors",
        description: "Materials for qualified investors.",
      },
      {
        label: "Investor Deck",
        href: "/rise-power-deck.pdf",
        description: "Download the Rise Power investor briefing (PDF).",
      },
      {
        label: "Company One-Pager",
        href: "/rise-power-one-pager.pdf",
        description: "Revenue forecast and company overview (PDF).",
      },
      {
        label: "Press & Updates",
        href: "/investors#press",
        description: "Company news, milestones, and press releases.",
      },
    ],
    feature: {
      title: "Investor Materials",
      body: "Deck, one-pager, and contact for qualified investors evaluating the round.",
      href: "/investors",
      cta: "Investor Overview",
    },
  },

  /* No links → no desktop chevron / no mobile accordion */
  {
    label: "Careers",
    href: "/contact",
  },
];
