"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import MagneticButton from '@/components/animations/MagneticButton';
import { cn } from '@/lib/utils';
import { ServiceData, processSteps } from '@/lib/services-data';

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  // Splitting title for RevealText safely
  const titleParts = service.title.split(' ');
  const firstPart = titleParts.slice(0, Math.ceil(titleParts.length / 2)).join(' ');
  const secondPart = titleParts.slice(Math.ceil(titleParts.length / 2)).join(' ');

  return (
    <main className="min-h-screen bg-paper w-full overflow-hidden">
      {/* 1. Hero */}
      <section className="bg-paper min-h-[70vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn y={20}>
          <div className="flex items-center gap-4 mb-6">
            <Link href="/services" className="text-eyebrow text-ink/40 hover:text-magenta transition-colors">
              Services
            </Link>
            <span className="text-ink/20">/</span>
            <span className="text-eyebrow text-ink/60">{service.title}</span>
          </div>
        </FadeIn>
        
        <h1 className="text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] text-display leading-none mb-8 text-ink">
          <RevealText>
            <span>{firstPart}</span>
            <span>
              <span className="text-accent-word lowercase">{secondPart || 'Services.'}</span>
            </span>
          </RevealText>
        </h1>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl font-medium">
            {service.description}
          </p>
        </FadeIn>
      </section>

      {/* 2. Deliverables */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="text-eyebrow text-paper/60 mb-6">What you get</p>
          <h2 className="text-5xl md:text-7xl text-display mb-16 md:mb-24">
            Our <span className="text-accent-word lowercase">Deliverables</span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {service.deliverables.map((item, i) => (
            <FadeIn key={i} delay={0.1 * i} className="rule-t border-paper/15 pt-8">
              <div className="flex items-start">
                <span className="text-magenta mr-4 mt-2 w-2 h-2 rounded-full flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl text-display">{item}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. Process Section */}
      <section className="bg-paper text-ink px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="text-eyebrow text-ink/60 mb-6">How we work</p>
        </FadeIn>
        
        <FadeIn y={20} delay={0.1}>
          <h2 className="text-5xl md:text-7xl text-display mb-16 md:mb-24">
            Four steps to <span className="text-accent-word lowercase">liftoff</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {processSteps.map((step, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.1} y={30}>
              <div className="border-t border-ink/15 pt-8 h-full flex flex-col">
                <span className="text-display text-6xl text-magenta leading-none">{step.num}</span>
                <h3 className="text-display text-xl mt-6">{step.title}</h3>
                <p className="text-sm text-ink/60 mt-4 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
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
          {service.faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={cn(
                "group cursor-pointer rule-t border-ink/15 transition-colors duration-300",
                idx === service.faqs.length - 1 && "border-b border-ink/15"
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
            Scale your {service.title.toLowerCase()} efforts.
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
