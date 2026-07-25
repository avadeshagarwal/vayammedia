export interface LocationData {
  slug: string;
  city: string;
  title: string;
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const locationsData: LocationData[] = [
  {
    slug: "jaipur",
    city: "Jaipur",
    title: "Digital Marketing Agency in Jaipur",
    description: "Partner with Vayam Media, Jaipur's premier growth-driven digital marketing and performance marketing agency, to scale your local or global brand.",
    benefits: [
      "Deep understanding of Jaipur's market dynamics",
      "Proven track record scaling local D2C brands",
      "Full-funnel performance marketing expertise",
      "Dedicated account management"
    ],
    faqs: [
      { question: "Do you only work with businesses in Jaipur?", answer: "While we have a strong footprint in Jaipur, we work with ambitious brands across India and globally." },
      { question: "What digital marketing services do you offer in Jaipur?", answer: "We offer end-to-end services including Google Ads, Meta Ads, SEO, Shopify Development, and advanced Performance Marketing." }
    ]
  },
  {
    slug: "churu",
    city: "Churu",
    title: "Digital Marketing Agency in Churu",
    description: "Vayam Media is a performance-first digital marketing agency serving Churu. We help businesses transition to digital and accelerate their revenue.",
    benefits: [
      "Hyper-local market insights",
      "Cost-effective scaling strategies",
      "Modern website and Shopify development",
      "Transparent reporting and ROI tracking"
    ],
    faqs: [
      { question: "Why choose Vayam Media in Churu?", answer: "We bring metro-level performance marketing expertise and global standards to businesses in Churu, ensuring you outpace local competition." },
      { question: "Can you help traditional businesses go online?", answer: "Yes, we specialize in digital transformation, taking traditional retail and service businesses online with robust e-commerce and lead-gen systems." }
    ]
  },
  {
    slug: "sikar",
    city: "Sikar",
    title: "Digital Marketing Agency in Sikar",
    description: "Scale your business with Vayam Media, the top digital marketing agency in Sikar specializing in Google Ads, Meta Ads, and SEO.",
    benefits: [
      "Custom digital growth roadmaps",
      "Expertise in local SEO and Google Maps optimization",
      "High-converting landing page design",
      "Data-driven ad campaigns"
    ],
    faqs: [
      { question: "How can SEO help my Sikar-based business?", answer: "SEO ensures that when potential customers in Sikar (or beyond) search for your services, your business appears first on Google." },
      { question: "Do you handle social media marketing?", answer: "Yes, we build and manage highly engaged communities on Instagram and Facebook, tailored to your brand." }
    ]
  },
  {
    slug: "bikaner",
    city: "Bikaner",
    title: "Digital Marketing Agency in Bikaner",
    description: "Vayam Media engineers growth for businesses in Bikaner through cutting-edge performance marketing, SEO, and web development.",
    benefits: [
      "Advanced PPC and ROAS optimization",
      "E-commerce growth specialists",
      "Comprehensive digital strategy",
      "Direct communication with founders"
    ],
    faqs: [
      { question: "What makes Vayam Media different from other agencies in Bikaner?", answer: "We focus purely on metrics that matter—revenue and profit—rather than vanity metrics like likes or impressions." },
      { question: "Do you offer web design services?", answer: "Yes, we build custom, high-speed, and conversion-optimized websites and Shopify stores." }
    ]
  }
];
