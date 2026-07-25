"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import MagneticButton from '@/components/animations/MagneticButton';
import { cn } from '@/lib/utils';
import { LocationData } from '@/lib/locations-data';

export default function LocationDetailClient({ location }: { location: LocationData }) {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-paper w-full overflow-hidden">
      {/* 1. Hero */}
      <section className="bg-paper min-h-[70vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-eyebrow text-ink/40">Locations</span>
            <span className="text-ink/20">/</span>
            <span className="text-eyebrow text-ink/60">{location.city}</span>
          </div>
        </FadeIn>
        
        <h1 className="text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] text-display leading-none mb-8 text-ink">
          <RevealText>
            <span>Digital marketing</span>
            <span>
              <span className="text-accent-word lowercase">in {location.city}.</span>
            </span>
          </RevealText>
        </h1>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl font-medium">
            {location.description}
          </p>
        </FadeIn>
      </section>

      {/* 2. Benefits */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="text-eyebrow text-paper/60 mb-6">Why Partner With Us</p>
          <h2 className="text-5xl md:text-7xl text-display mb-16 md:mb-24">
            The Vayam <span className="text-accent-word lowercase">Advantage</span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {location.benefits.map((item, i) => (
            <FadeIn key={i} delay={0.1 * i} className="rule-t border-paper/15 pt-8">
              <div className="flex items-start">
                <span className="text-magenta mr-4 mt-2 w-2 h-2 rounded-full flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl text-display">{item}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="bg-paper text-ink px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="text-eyebrow text-ink/60 mb-6">Our Core Services</p>
          <h2 className="text-5xl md:text-7xl text-display mb-16 md:mb-24">
            Built to <span className="text-accent-word lowercase">scale</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {["Google Ads", "Meta Ads", "SEO", "Shopify Dev", "Performance", "Branding"].map((service, idx) => (
            <FadeIn key={idx} delay={0.1 * idx} y={30}>
              <div className="border-t border-ink/15 pt-8 h-full flex flex-col">
                <h3 className="text-display text-2xl mt-2">{service}</h3>
                <Link href="/services" className="mt-4 text-sm font-medium text-magenta hover:text-ink transition-colors">
                  Explore full services &rarr;
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. FAQs Accordion */}
      <section className="bg-paper px-5 md:px-10 pb-24 md:pb-36">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl text-display mb-16">
            Common <span className="text-accent-word lowercase">Questions</span>
          </h2>
        </FadeIn>
        <div className="w-full">
          {location.faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={cn(
                "group cursor-pointer rule-t border-ink/15 transition-colors duration-300",
                idx === location.faqs.length - 1 && "border-b border-ink/15"
              )}
              onClick={() => toggleFaq(idx)}
            >
              <div className="py-8 flex items-center justify-between">
                <h3 className="text-display text-2xl md:text-4xl text-ink group-hover:text-magenta transition-colors duration-300">
                  {faq.question}
                </h3>
                
                {/* Arrow Icon */}
                <div className="text-ink/40 group-hover:text-magenta transition-transform duration-500 ease-out flex items-center justify-center w-10 h-10 flex-shrink-0">
                  <motion.svg
                    animate={{ rotate: expandedFaqIndex === idx ? 180 : 0 }}
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
                {expandedFaqIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2">
                      <p className="text-ink/70 text-lg md:text-xl leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="text-eyebrow text-paper/80 mb-6">Ready to start?</p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-5xl md:text-7xl text-display mb-12 max-w-4xl mx-auto">
            Scale your business in {location.city}.
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
