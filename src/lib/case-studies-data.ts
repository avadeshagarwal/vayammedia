export interface CaseStudyData {
  slug: string;
  client: string;
  services: string;
  result: string;
  gradient: string;
  industry: string;
  challenge: string;
  solution: string[];
  metrics: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
}

export const caseStudiesData: CaseStudyData[] = [
  {
    slug: "zenith-labs",
    client: "Zenith Labs",
    services: "Google Ads • Landing Pages",
    result: "312% increase in qualified leads within 90 days",
    gradient: "from-magenta/80 to-purple-900",
    industry: "Healthcare & Pharmaceuticals",
    challenge: "Zenith Labs was struggling with high Customer Acquisition Costs (CAC) on Google Ads, paired with low conversion rates on their outdated landing pages.",
    solution: [
      "Completely restructured Google Ads campaigns using SKAGs (Single Keyword Ad Groups).",
      "Developed high-converting, CRO-optimized landing pages.",
      "Implemented strict negative keyword lists to eliminate wasted spend."
    ],
    metrics: [
      { label: "Increase in Leads", value: "312%" },
      { label: "Reduction in CAC", value: "43%" },
      { label: "Conversion Rate", value: "12.4%" }
    ],
    testimonial: {
      quote: "Vayam Media didn't just run ads; they redefined our entire digital presence. The growth has been nothing short of exceptional.",
      author: "Sarah Jenkins",
      role: "CMO"
    }
  },
  {
    slug: "prism-commerce",
    client: "Prism Commerce",
    services: "Shopify Development • SEO",
    result: "2.4x revenue growth after store relaunch",
    gradient: "from-blue-600 to-cyan-400",
    industry: "E-Commerce",
    challenge: "Prism Commerce had an aging WooCommerce site that suffered from slow load times, poor mobile UX, and stagnant organic traffic.",
    solution: [
      "Migrated the entire catalog to a headless Shopify architecture.",
      "Engineered blazing-fast load times (sub-1s LCP) to improve Core Web Vitals.",
      "Executed a full technical SEO audit and on-page optimization sprint."
    ],
    metrics: [
      { label: "Revenue Growth", value: "2.4x" },
      { label: "Organic Traffic Increase", value: "185%" },
      { label: "Bounce Rate Reduction", value: "22%" }
    ],
    testimonial: {
      quote: "Finding an agency that treats your ROI like their own is rare. Vayam proved to be that partner from day one.",
      author: "David Chen",
      role: "Founder"
    }
  },
  {
    slug: "nova-fitness",
    client: "Nova Fitness",
    services: "Meta Ads • Content Creation",
    result: "Cost per acquisition reduced by 67%",
    gradient: "from-orange-500 to-yellow-400",
    industry: "Health & Fitness",
    challenge: "Nova Fitness was burning cash on Meta Ads with ad fatigue and generic creatives that failed to resonate with their target audience.",
    solution: [
      "Deployed a rapid creative testing framework using UGC (User-Generated Content).",
      "Segmented audiences by fitness goals (weight loss, muscle gain).",
      "Implemented advanced retargeting funnels to capture abandoned cart users."
    ],
    metrics: [
      { label: "CPA Reduction", value: "67%" },
      { label: "ROAS (Return on Ad Spend)", value: "4.8x" },
      { label: "Engagement Rate", value: "+140%" }
    ],
    testimonial: {
      quote: "Our ads finally look like they belong in 2024. The creative strategy Vayam brought to the table completely changed our trajectory.",
      author: "Marcus Thorne",
      role: "CEO"
    }
  },
  {
    slug: "meridian-tech",
    client: "Meridian Tech",
    services: "Performance Marketing • AI Automation",
    result: "$2.1M in pipeline generated in Q1",
    gradient: "from-emerald-600 to-teal-400",
    industry: "B2B SaaS",
    challenge: "Meridian's sales team was spending too much time qualifying poor leads, while their paid marketing failed to generate high-intent enterprise pipeline.",
    solution: [
      "Launched Account-Based Marketing (ABM) campaigns on LinkedIn.",
      "Integrated AI automation to score and route leads instantly.",
      "Built multi-touch attribution models to track offline conversions."
    ],
    metrics: [
      { label: "Pipeline Generated", value: "$2.1M" },
      { label: "Lead Quality Score", value: "+85%" },
      { label: "Sales Cycle Reduction", value: "18 Days" }
    ],
    testimonial: {
      quote: "We went from cold calling to having our calendar booked with qualified enterprise demos. Absolutely game-changing.",
      author: "Elena Rostova",
      role: "VP of Sales"
    }
  }
];
