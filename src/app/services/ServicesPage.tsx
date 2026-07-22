"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import MagneticButton from '@/components/animations/MagneticButton';
import { cn } from '@/lib/utils';

// Services data
const services = [
  {
    num: "01",
    title: "Google Ads",
    description: "Dominating search intent with precision-engineered PPC campaigns across Search, Display, Shopping, and YouTube to capture high-converting traffic.",
    deliverables: ["Campaign architecture", "Keyword strategy", "Ad copy & extensions", "Bid optimization", "Conversion tracking"]
  },
  {
    num: "02",
    title: "Meta Ads",
    description: "Harnessing the power of Facebook and Instagram through scroll-stopping creative and sophisticated audience targeting to build profitable customer acquisition engines.",
    deliverables: ["Audience targeting", "Creative strategy", "A/B testing", "Retargeting funnels", "Performance dashboards"]
  },
  {
    num: "03",
    title: "Performance Marketing",
    description: "A holistic, data-driven approach to paid media that scales your revenue predictably through rigorous testing and full-funnel strategy.",
    deliverables: ["Channel mix planning", "Attribution modeling", "Budget allocation", "ROAS optimization", "Growth roadmaps"]
  },
  {
    num: "04",
    title: "SEO",
    description: "Securing prime real estate on search engines. We build sustainable organic visibility that compounds over time and drives high-intent traffic.",
    deliverables: ["Technical audits", "On-page optimization", "Content strategy", "Link building", "Rank tracking"]
  },
  {
    num: "05",
    title: "Shopify Development",
    description: "Architecting high-converting, lightning-fast e-commerce experiences on Shopify that turn casual browsers into loyal brand advocates.",
    deliverables: ["Custom themes", "App integrations", "Checkout optimization", "Migration support", "Speed optimization"]
  },
  {
    num: "06",
    title: "Website Development",
    description: "Building robust, scalable, and stunning digital platforms optimized for both user experience and search engine performance.",
    deliverables: ["UI/UX design", "Frontend development", "CMS integration", "Performance optimization", "Analytics setup"]
  },
  {
    num: "07",
    title: "Landing Pages",
    description: "Designing and developing hyper-focused landing pages engineered specifically to maximize conversion rates and reduce acquisition costs.",
    deliverables: ["Wireframing", "Copywriting", "A/B testing", "Heat-map analysis", "CRO recommendations"]
  },
  {
    num: "08",
    title: "Branding",
    description: "Forging memorable visual identities that capture your brand's essence and resonate deeply with your target demographic.",
    deliverables: ["Logo design", "Brand guidelines", "Color systems", "Typography", "Brand voice"]
  },
  {
    num: "09",
    title: "Social Media Management",
    description: "Cultivating engaged communities and amplifying your brand narrative across platforms with strategic, culturally relevant content.",
    deliverables: ["Content calendars", "Community management", "Engagement strategy", "Analytics reporting", "Trend monitoring"]
  },
  {
    num: "10",
    title: "Content Creation",
    description: "Producing compelling, high-quality assets that tell your story, educate your audience, and drive meaningful engagement.",
    deliverables: ["Photography direction", "Graphic design", "Copywriting", "Blog articles", "Email campaigns"]
  },
  {
    num: "11",
    title: "Video Editing",
    description: "Transforming raw footage into polished, platform-native video content designed to capture attention and maximize retention.",
    deliverables: ["Short-form edits", "Long-form content", "Motion graphics", "Subtitling", "Platform optimization"]
  },
  {
    num: "12",
    title: "AI Automation",
    description: "Streamlining operations and enhancing customer experiences by integrating intelligent automation into your critical business workflows.",
    deliverables: ["Chatbot development", "Email automation", "Lead scoring", "Reporting dashboards", "Process optimization"]
  }
];

const processSteps = [
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

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-paper w-full overflow-hidden">
      {/* 1. Hero */}
      <section className="bg-paper min-h-[70vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn y={20}>
          <p className="text-eyebrow text-ink/60 mb-6">Our services</p>
        </FadeIn>
        
        <RevealText className="text-[13.5vw] md:text-[11.5vw] text-display leading-none mb-8 text-ink">
          <span>Everything you need</span>
          <span>
            to <span className="text-accent-word lowercase">grow.</span>
          </span>
        </RevealText>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl font-medium">
            From first click to final conversion — we engineer every touchpoint for maximum impact.
          </p>
        </FadeIn>
      </section>

      {/* 2. Services Accordion */}
      <section className="bg-paper px-5 md:px-10 py-24 md:py-36">
        <div className="w-full">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={cn(
                "group cursor-pointer rule-t border-ink/15 transition-colors duration-300",
                idx === services.length - 1 && "border-b border-ink/15"
              )}
              onClick={() => toggleAccordion(idx)}
            >
              <div className="py-8 md:py-12 flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-eyebrow text-ink/40 group-hover:text-magenta transition-colors duration-300">
                    {service.num}
                  </span>
                  <h3 className="text-display text-3xl md:text-5xl text-ink group-hover:text-magenta transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                {/* Arrow Icon */}
                <div className="text-ink/40 group-hover:text-magenta transition-transform duration-500 ease-out flex items-center justify-center w-10 h-10">
                  <motion.svg
                    animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pt-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pl-0 md:pl-20">
                      <div>
                        <p className="text-ink/70 text-lg md:text-xl leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-eyebrow text-ink mb-6">Deliverables</h4>
                        <ul className="space-y-3">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="text-ink/80 flex items-start">
                              <span className="text-magenta mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Process Section */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="text-eyebrow text-paper/60 mb-6">How we work</p>
        </FadeIn>
        
        <FadeIn y={20} delay={0.1}>
          <h2 className="text-5xl md:text-7xl text-display mb-16 md:mb-24">
            Four steps to <span className="text-accent-word lowercase">liftoff</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {processSteps.map((step, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.1} y={30}>
              <div className="border-t border-paper/15 pt-8 h-full flex flex-col">
                <span className="text-display text-6xl text-magenta leading-none">{step.num}</span>
                <h3 className="text-display text-xl mt-6">{step.title}</h3>
                <p className="text-sm text-paper/60 mt-4 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="text-eyebrow text-paper/80 mb-6">Ready?</p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-5xl md:text-7xl text-display mb-12 max-w-4xl mx-auto">
            Let&apos;s find your unfair advantage.
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <MagneticButton strength={40}>
            <Link 
              href="/contact" 
              className="btn-pill bg-ink text-paper hover:bg-paper hover:text-ink px-8 py-4 inline-flex items-center justify-center text-sm font-medium uppercase tracking-wider transition-colors duration-300"
            >
              Start a project
            </Link>
          </MagneticButton>
        </FadeIn>
      </section>
    </main>
  );
}
