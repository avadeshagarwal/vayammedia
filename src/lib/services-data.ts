export interface ServiceData {
  num: string;
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    num: "01",
    slug: "google-ads",
    title: "Google Ads",
    description: "Dominating search intent with precision-engineered PPC campaigns across Search, Display, Shopping, and YouTube to capture high-converting traffic.",
    deliverables: ["Campaign architecture", "Keyword strategy", "Ad copy & extensions", "Bid optimization", "Conversion tracking"],
    faqs: [
      { question: "How long does it take to see results from Google Ads?", answer: "While you can get traffic immediately upon launch, it typically takes 2-4 weeks of data collection and optimization to hit target CPA/ROAS metrics." },
      { question: "What is your management fee structure?", answer: "We charge a flat monthly retainer or a percentage of ad spend, depending on the scale and complexity of your campaigns. We prioritize total transparency." }
    ]
  },
  {
    num: "02",
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Harnessing the power of Facebook and Instagram through scroll-stopping creative and sophisticated audience targeting to build profitable customer acquisition engines.",
    deliverables: ["Audience targeting", "Creative strategy", "A/B testing", "Retargeting funnels", "Performance dashboards"],
    faqs: [
      { question: "Do you create the ad creatives?", answer: "Yes, our creative team works in tandem with media buyers to design, test, and iterate high-converting image and video assets." },
      { question: "How do you handle iOS tracking issues?", answer: "We implement robust server-side tracking (Conversions API) and probabilistic modeling to ensure accurate attribution despite platform restrictions." }
    ]
  },
  {
    num: "03",
    slug: "performance-marketing",
    title: "Performance Marketing",
    description: "A holistic, data-driven approach to paid media that scales your revenue predictably through rigorous testing and full-funnel strategy.",
    deliverables: ["Channel mix planning", "Attribution modeling", "Budget allocation", "ROAS optimization", "Growth roadmaps"],
    faqs: [
      { question: "What exactly is performance marketing?", answer: "It is a comprehensive strategy focusing purely on measurable results—leads, sales, or clicks—ensuring every dollar spent has a clear ROI." }
    ]
  },
  {
    num: "04",
    slug: "seo",
    title: "SEO",
    description: "Securing prime real estate on search engines. We build sustainable organic visibility that compounds over time and drives high-intent traffic.",
    deliverables: ["Technical audits", "On-page optimization", "Content strategy", "Link building", "Rank tracking"],
    faqs: [
      { question: "When will my site rank on the first page?", answer: "SEO is a long-term investment. Most clients see significant improvements within 3 to 6 months, depending on industry competitiveness." }
    ]
  },
  {
    num: "05",
    slug: "shopify-development",
    title: "Shopify Development",
    description: "Architecting high-converting, lightning-fast e-commerce experiences on Shopify that turn casual browsers into loyal brand advocates.",
    deliverables: ["Custom themes", "App integrations", "Checkout optimization", "Migration support", "Speed optimization"],
    faqs: [
      { question: "Do you migrate sites from WooCommerce to Shopify?", answer: "Yes, we handle complete data migration, including products, customers, and orders, ensuring zero downtime and SEO retention." }
    ]
  },
  {
    num: "06",
    slug: "website-development",
    title: "Website Development",
    description: "Building robust, scalable, and stunning digital platforms optimized for both user experience and search engine performance.",
    deliverables: ["UI/UX design", "Frontend development", "CMS integration", "Performance optimization", "Analytics setup"],
    faqs: [
      { question: "What technologies do you use?", answer: "We specialize in modern stacks including Next.js, React, and standard WordPress, tailored strictly to your business requirements." }
    ]
  },
  {
    num: "07",
    slug: "landing-pages",
    title: "Landing Pages",
    description: "Designing and developing hyper-focused landing pages engineered specifically to maximize conversion rates and reduce acquisition costs.",
    deliverables: ["Wireframing", "Copywriting", "A/B testing", "Heat-map analysis", "CRO recommendations"],
    faqs: [
      { question: "Why do I need a separate landing page?", answer: "Landing pages strip away distractions (like navigation menus) and focus purely on a single conversion goal, significantly improving ad ROI." }
    ]
  },
  {
    num: "08",
    slug: "branding",
    title: "Branding",
    description: "Forging memorable visual identities that capture your brand's essence and resonate deeply with your target demographic.",
    deliverables: ["Logo design", "Brand guidelines", "Color systems", "Typography", "Brand voice"],
    faqs: [
      { question: "What is included in a branding package?", answer: "It includes visual identity (logo, colors, fonts) as well as strategic brand positioning, voice, and comprehensive usage guidelines." }
    ]
  },
  {
    num: "09",
    slug: "social-media-management",
    title: "Social Media Management",
    description: "Cultivating engaged communities and amplifying your brand narrative across platforms with strategic, culturally relevant content.",
    deliverables: ["Content calendars", "Community management", "Engagement strategy", "Analytics reporting", "Trend monitoring"],
    faqs: [
      { question: "Which platforms do you manage?", answer: "We focus on the platforms where your target audience lives, primarily Instagram, LinkedIn, Facebook, and Twitter." }
    ]
  },
  {
    num: "10",
    slug: "content-creation",
    title: "Content Creation",
    description: "Producing compelling, high-quality assets that tell your story, educate your audience, and drive meaningful engagement.",
    deliverables: ["Photography direction", "Graphic design", "Copywriting", "Blog articles", "Email campaigns"],
    faqs: [
      { question: "Do you write SEO-optimized content?", answer: "Yes, all textual content is researched and optimized for semantic search without sacrificing readability or brand voice." }
    ]
  },
  {
    num: "11",
    slug: "video-editing",
    title: "Video Editing",
    description: "Transforming raw footage into polished, platform-native video content designed to capture attention and maximize retention.",
    deliverables: ["Short-form edits", "Long-form content", "Motion graphics", "Subtitling", "Platform optimization"],
    faqs: [
      { question: "Do you edit for TikTok and Reels?", answer: "Absolutely. We specialize in fast-paced, high-retention short-form video formats optimized for modern social algorithms." }
    ]
  },
  {
    num: "12",
    slug: "ai-automation",
    title: "AI Automation",
    description: "Streamlining operations and enhancing customer experiences by integrating intelligent automation into your critical business workflows.",
    deliverables: ["Chatbot development", "Email automation", "Lead scoring", "Reporting dashboards", "Process optimization"],
    faqs: [
      { question: "How can AI help my agency/business?", answer: "AI can automate redundant tasks like initial customer inquiries, lead qualification, and reporting, freeing your team to focus on high-value work." }
    ]
  }
];

export const processSteps = [
  {
    num: "1",
    title: "Discover",
    desc: "We audit your current setup, study your market, and identify the gaps costing you growth."
  },
  {
    num: "2",
    title: "Strategize",
    desc: "We build a custom roadmap with clear KPIs, timelines, and budget allocations."
  },
  {
    num: "3",
    title: "Execute",
    desc: "We launch, test, and iterate — moving fast without breaking things."
  },
  {
    num: "4",
    title: "Scale",
    desc: "We double down on what works and expand into new channels and markets."
  }
];
