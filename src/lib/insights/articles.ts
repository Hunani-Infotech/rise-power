import type { InsightArticle } from "./types";

export const insights: InsightArticle[] = [
  {
    slug: "phase-ii-development-milestone",
    title: "Rise Power Completes Phase II Development Milestone",
    date: "2026-02-10",
    displayDate: "Feb 10, 2026",
    category: "Company News",
    excerpt:
      "Rise Power engineering has reached a development milestone on the portable hydrogen power system, validating core performance targets ahead of schedule.",
    readTime: "7 min read",
    accentPhrase: "Phase II",
    hero: {
      src: "/media/company/mission-power.png",
      alt: "Rise Power mission hardware on the engineering bench",
    },
    relatedSlugs: [
      "field-testing-extended-runtime",
      "engineering-team-expansion",
    ],
    body: [
      {
        type: "paragraph",
        text: "In coastal British Columbia this winter, Rise Power closed Phase II of its portable hydrogen power development program. The milestone confirms that stack output, cartridge exchange timing, and acoustic signature now meet the thresholds set for man-portable and field-generator platforms—ahead of the original program schedule.",
      },
      {
        type: "paragraph",
        text: "Phase II was never a paper exercise. Engineers ran representative duty cycles on Rise Sentinel™ and Rise Titan™ hardware under loads that mirror communications, ISR support, and forward-position power draws. Cartridge swaps were timed with gloved hands. Acoustic measurements were taken at distances that matter to operators, not lab benches alone.",
      },
      {
        type: "heading",
        text: "What Phase II locked in",
      },
      {
        type: "paragraph",
        text: "Three performance gates defined the exit criteria. First, continuous stack output under sustained load without thermal derate. Second, tool-free cartridge exchange in roughly 30 seconds—restore full runtime without specialized training. Third, a sub-ambient acoustic profile consistent with low-signature operations: Sentinel targets below 70 dB; Titan holds silent continuous power with no diesel-like heat plume.",
      },
      {
        type: "pullQuote",
        text: "We do not declare a milestone when a slide says green. We declare it when the hardware holds the number in wet, cold, and contested conditions.",
        attribution: "Rise Power Engineering",
      },
      {
        type: "figure",
        src: "/media/products/product-sentinal.png",
        alt: "Rise Sentinel portable hydrogen power system",
        caption:
          "Rise Sentinel™ — man-portable hydrogen power with unlimited runtime via cartridge swap.",
      },
      {
        type: "heading",
        text: "From Surrey benches to program readiness",
      },
      {
        type: "paragraph",
        text: "All Phase II work was designed, built, and tested in Surrey, BC—Canadian manufacturing with a defense-grade discipline around safety: pressure vessels, leak detection, and thermal management engineered in from day one. Closing Phase II clears the path into extended field campaigns and production-intent builds across Sentinel, Falcon, and Titan.",
      },
      {
        type: "takeaways",
        items: [
          "Phase II validated stack output, ~30-second cartridge swap, and acoustic signature under field-representative loads.",
          "Sentinel and Titan duty cycles covered communications, ISR support, and forward-position power draws.",
          "Exit criteria were met ahead of schedule, unlocking production-intent hardware work.",
          "Development remains fully Canadian—designed, built, and tested in British Columbia.",
        ],
      },
    ],
  },
  {
    slug: "field-testing-extended-runtime",
    title: "Field Testing Validates Extended Runtime Targets",
    date: "2025-12-02",
    displayDate: "Dec 2, 2025",
    category: "Technology",
    excerpt:
      "Recent field testing has validated performance targets for the cartridge based fuel delivery system across a range of environmental conditions.",
    readTime: "6 min read",
    accentPhrase: "Extended Runtime",
    hero: {
      src: "/media/use-cases/uc-deployment.png",
      alt: "Field deployment of Rise Power portable hydrogen systems",
    },
    relatedSlugs: [
      "phase-ii-development-milestone",
      "cartridge-based-hydrogen-logistics",
    ],
    body: [
      {
        type: "paragraph",
        text: "Extended runtime is not a marketing claim at Rise Power—it is a logistics architecture. Recent field testing confirmed that cartridge-based fuel delivery sustains continuous load across coastal damp, cold mornings, and temperature swings that punish lithium packs and choke diesel generators.",
      },
      {
        type: "paragraph",
        text: "Operators completed cartridge exchanges in under 30 seconds and returned systems to full output without tools, bleed procedures, or specialized fuel handling. Across the campaign, units held continuous duty with no thermal or acoustic compromise relative to design targets.",
      },
      {
        type: "heading",
        text: "Conditions that break conventional power",
      },
      {
        type: "paragraph",
        text: "Diesel brings convoys, smell, and a heat signature. Lithium brings weight, cold-weather fade, and a hard stop when the pack is empty. Rise testing pushed Sentinel and Titan through load profiles that stay online for hours, then days—runtime scaled by pre-positioned cartridges rather than a fuel truck.",
      },
      {
        type: "pullQuote",
        text: "Unlimited runtime is a cartridge cadence. Swap in thirty seconds, stay on station, leave no acoustic or emissions trail at the point of use.",
      },
      {
        type: "figure",
        src: "/media/capabilities/field-deployment.jpg",
        alt: "Rise Power systems under field deployment conditions",
        caption:
          "Field deployment testing — continuous load, rapid cartridge swap, zero emissions at point of use.",
      },
      {
        type: "heading",
        text: "What the numbers held",
      },
      {
        type: "paragraph",
        text: "Swap times stayed under the 30-second gate with gloved operators. Acoustic readings remained consistent with low-signature doctrine. Point-of-use emissions stayed at zero—safe for enclosed shelters and tight command posts where diesel exhaust is a non-starter. Cartridges with 15-year shelf life meant test depots could stock fuel months ahead without degradation anxiety.",
      },
      {
        type: "takeaways",
        items: [
          "Cartridge swaps completed in under 30 seconds under field conditions.",
          "Continuous load sustained without thermal or acoustic compromise.",
          "Zero emissions at point of use supports indoor and enclosed-site operation.",
          "15-year cartridge shelf life enables pre-positioned fuel depots.",
        ],
      },
    ],
  },
  {
    slug: "hydrogen-power-defense-applications",
    title: "Understanding Hydrogen Power for Defense Applications",
    date: "2025-11-18",
    displayDate: "Nov 18, 2025",
    category: "Resources",
    excerpt:
      "A primer on hydrogen fuel cell technology for defense power applications, and how it compares to diesel and lithium alternatives.",
    readTime: "8 min read",
    accentPhrase: "Defense Applications",
    hero: {
      src: "/media/markets/defense-military.png",
      alt: "Defense and military power application context",
    },
    relatedSlugs: [
      "cartridge-based-hydrogen-logistics",
      "field-testing-extended-runtime",
    ],
    body: [
      {
        type: "paragraph",
        text: "Forward power still defaults to diesel generators and lithium packs. Both create structural failure modes in contested environments: fuel convoys that can be targeted, acoustic and thermal signatures that reveal position, and exhaust that rules out indoor or tented operation. Cartridge-based hydrogen changes the constraint set without asking operators to become fuel-cell technicians.",
      },
      {
        type: "paragraph",
        text: "Rise Power builds that platform as a product family. Sentinel covers man-portable tactical loads under 15 lbs with sub-70 dB acoustics. Falcon extends lithium-polymer drone endurance toward 4-plus hours and roughly 5× range for ISR and remote surveillance. Titan delivers 3 kW of silent, zero-heat-signature field generation across −20 to +50 °C.",
      },
      {
        type: "heading",
        text: "Signature, logistics, and indoor safety",
      },
      {
        type: "paragraph",
        text: "Operational security starts with what the enemy can hear, see, and smell. Hydrogen fuel cells at point of use produce electricity, heat managed within the envelope, and water—no diesel plume, no generator roar. Cartridges swap in about 30 seconds, stockpile for 15 years, and travel as modular units instead of bulk liquid fuel. Zero emissions at the point of use means shelters, medical tents, and command nodes can run power indoors without ventilation theater.",
      },
      {
        type: "pullQuote",
        text: "Diesel feeds the convoy problem. Lithium feeds the cliff. Cartridge hydrogen feeds the mission clock—quietly, cleanly, and without a specialist on every swap.",
        attribution: "Rise Power field doctrine",
      },
      {
        type: "figure",
        src: "/media/use-cases/uc-defence.png",
        alt: "Defense and security use of portable hydrogen power",
        caption:
          "Defense & security — silent portable power for bases, troops, and surveillance drones.",
      },
      {
        type: "heading",
        text: "Where each platform fits",
      },
      {
        type: "paragraph",
        text: "Deploy Sentinel or Titan to forward positions for communications and surveillance gear. Extend drone ISR with Falcon. Scale mission duration by staging cartridges, not by scheduling another fuel run. The same logistics spine—RFID-monitored, leak-proof cartridges—supports defense, disaster response, and remote infrastructure without rewriting the operator’s playbook.",
      },
      {
        type: "takeaways",
        items: [
          "Diesel and lithium create convoy, signature, and indoor-exhaust failure modes hydrogen avoids.",
          "Sentinel, Falcon, and Titan cover man-portable, drone, and 3 kW field-generator roles.",
          "Zero point-of-use emissions and silent operation support OPSEC and indoor deployment.",
          "30-second cartridge swaps and 15-year shelf life simplify forward logistics.",
        ],
      },
    ],
  },
  {
    slug: "engineering-team-expansion",
    title: "Rise Power Expands Engineering Team",
    date: "2025-10-05",
    displayDate: "Oct 5, 2025",
    category: "Company News",
    excerpt:
      "Rise Power is expanding the engineering team with additional power electronics and thermal management capacity.",
    readTime: "5 min read",
    accentPhrase: "Engineering Team",
    hero: {
      src: "/media/capabilities/engineering-development.jpg",
      alt: "Rise Power engineering and development workspace",
    },
    relatedSlugs: [
      "phase-ii-development-milestone",
      "hydrogen-power-defense-applications",
    ],
    body: [
      {
        type: "paragraph",
        text: "Rise Power is expanding its engineering bench with dedicated power electronics and thermal management capacity as Sentinel, Falcon, and Titan move from prototype rigor toward production-ready hardware. The hires deepen the Surrey, BC team that already owns design, build, test, and support under one roof.",
      },
      {
        type: "paragraph",
        text: "Portable hydrogen systems live or die on two disciplines often treated as afterthoughts: how cleanly electrons leave the stack, and how heat leaves the enclosure without creating a signature or a derate. Adding specialists in both areas accelerates the path from Phase milestones to fielded units that hold spec under load.",
      },
      {
        type: "heading",
        text: "Operator-first capacity, not headcount theater",
      },
      {
        type: "paragraph",
        text: "Every engineering decision at Rise starts with the end user and the operating environment—gloved swaps, cold starts, enclosed posts, and acoustic limits. New roles plug into that doctrine: power electronics for stable output across duty cycles; thermal management for silent continuous power on Titan and for man-portable envelopes on Sentinel without trading mass for cool-down.",
      },
      {
        type: "pullQuote",
        text: "Canadian manufacturing only scales if the engineering depth scales with it. We are hiring for the hard problems—power electronics and heat—because that is what field hardware demands.",
        attribution: "Rise Power Corp.",
      },
      {
        type: "figure",
        src: "/media/company/company-tm-1.png",
        alt: "Rise Power team and manufacturing leadership",
        caption:
          "Building depth in Surrey — power electronics and thermal management for production-intent platforms.",
      },
      {
        type: "heading",
        text: "What the expansion unlocks",
      },
      {
        type: "paragraph",
        text: "More parallel workstreams across the product family: Falcon’s cold-weather efficiency and whisper-quiet airtime; Sentinel’s sub-15 lb system weight and below-70 dB signature; Titan’s −20 to +50 °C operating window and zero heat signature. Safety remains engineered in—pressure vessels, leak detection, and thermal paths designed from day one, not bolted on for certification theater.",
      },
      {
        type: "takeaways",
        items: [
          "New capacity focuses on power electronics and thermal management.",
          "Expansion supports Sentinel, Falcon, and Titan moving toward production-ready hardware.",
          "Engineering remains operator-first and fully based in British Columbia.",
          "Safety systems stay designed-in: pressure, leak detection, and thermal management.",
        ],
      },
    ],
  },
  {
    slug: "cartridge-based-hydrogen-logistics",
    title: "Cartridge Based Fuel: Simplifying Hydrogen Logistics",
    date: "2025-09-12",
    displayDate: "Sep 12, 2025",
    category: "Technology",
    excerpt:
      "How a modular fuel cartridge approach solves the resupply problem in portable hydrogen deployment.",
    readTime: "7 min read",
    accentPhrase: "Hydrogen Logistics",
    hero: {
      src: "/media/products/hydrogen-cartridge-kit.png",
      alt: "Rise Power hydrogen cartridge kit",
    },
    relatedSlugs: [
      "field-testing-extended-runtime",
      "hydrogen-power-defense-applications",
    ],
    body: [
      {
        type: "paragraph",
        text: "Hydrogen’s reputation problem in the field is rarely the chemistry—it is the hose, the bottle farm, and the specialist who has to stand next to both. Rise Power’s modular cartridge approach collapses that complexity into a unit operators already understand: pick up fuel, swap it in, keep working.",
      },
      {
        type: "paragraph",
        text: "The Hydrogen Cartridge Kit is universal across Rise fuel-cell platforms—Sentinel, Falcon, Titan—so programs do not invent a new logistics SKU per product. Cartridges are leak-proof, lightweight, RFID-enabled for smart monitoring, and rated for a 15-year shelf life. Tool-free exchange restores full runtime in about 30 seconds.",
      },
      {
        type: "heading",
        text: "Resupply without the convoy",
      },
      {
        type: "paragraph",
        text: "Traditional liquid fuel ties mission duration to truck schedules and spill risk. Cartridge logistics invert the model: pre-position fuel at remote sites, emergency depots, and forward caches; operate for days; replenish by handing a sealed unit across a load plan instead of pumping. RFID monitoring keeps program leads aware of which cartridges are spent, staged, or still sealed on the shelf.",
      },
      {
        type: "pullQuote",
        text: "Stockpile for fifteen years. Swap without tools. See every cartridge on the network. That is hydrogen logistics built for operators, not for fueling specialists.",
      },
      {
        type: "figure",
        src: "/media/products/product-hydro-kit.png",
        alt: "Rise Power hydrogen cartridge kit product view",
        caption:
          "Hydrogen Cartridge Kit — universal compatibility, RFID monitoring, 15-year shelf life.",
      },
      {
        type: "heading",
        text: "One fuel spine across the family",
      },
      {
        type: "paragraph",
        text: "Because the same cartridge architecture feeds man-portable, drone-extender, and 3 kW generator roles, training and depot design stay simple. Zero emissions at point of use means spent cartridges leave water and silence behind—not exhaust in a tent. For defense, disaster response, and critical infrastructure alike, runtime becomes a packing list problem, not a generator maintenance problem.",
      },
      {
        type: "takeaways",
        items: [
          "Modular cartridges replace hose-and-bottle complexity with a 30-second, tool-free swap.",
          "Universal compatibility spans Sentinel, Falcon, and Titan.",
          "RFID smart monitoring keeps field fuel visible to program leads.",
          "15-year shelf life supports pre-positioned depots without fuel spoilage.",
        ],
      },
    ],
  },
];
