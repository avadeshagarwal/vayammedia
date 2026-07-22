"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import Marquee from '@/components/animations/Marquee';
import MagneticButton from '@/components/animations/MagneticButton';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    client: "Zenith Labs",
    services: "Google Ads • Landing Pages",
    result: "312% increase in qualified leads within 90 days",
    gradient: "from-magenta/80 to-purple-900"
  },
  {
    client: "Prism Commerce",
    services: "Shopify Development • SEO",
    result: "2.4x revenue growth after store relaunch",
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    client: "Nova Fitness",
    services: "Meta Ads • Content Creation",
    result: "Cost per acquisition reduced by 67%",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    client: "Meridian Tech",
    services: "Performance Marketing • AI Automation",
    result: "$2.1M in pipeline generated in Q1",
    gradient: "from-emerald-600 to-teal-400"
  }
];

const marqueeStats = [
  "312% More Leads", 
  "2.4x Revenue", 
  "67% Lower CPA", 
  "$2.1M Pipeline", 
  "48+ Brands Scaled", 
  "6 Countries"
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-paper min-h-[70vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn>
          <span className="text-eyebrow text-smoke mb-6 block">Our work</span>
        </FadeIn>
        <RevealText className="text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] text-display leading-none mb-6">
          <span>Results that</span>
          <span><span className="text-accent-word normal-case">speak.</span></span>
        </RevealText>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-ink/70 max-w-2xl mt-4">
            Every campaign has a story. Here are a few of ours.
          </p>
        </FadeIn>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-paper px-5 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {caseStudies.map((cs, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                  <div className={cn("absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105", cs.gradient)} />
                </div>
                <h3 className="text-display text-xl md:text-2xl">{cs.client}</h3>
                <p className="text-eyebrow text-smoke mt-3">{cs.services}</p>
                <p className="text-lg md:text-xl text-ink/70 mt-3">{cs.result}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Results Marquee */}
      <section className="bg-ink text-paper py-8 overflow-hidden">
        <Marquee duration="30s">
          {marqueeStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-8 mx-4">
              <span className="text-display text-2xl whitespace-nowrap">{stat}</span>
              <span className="w-2 h-2 rounded-full bg-magenta" />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Testimonials */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <span className="text-eyebrow text-smoke mb-12 block">Client voices</span>
        </FadeIn>
        
        <div className="flex flex-col gap-24">
          <FadeIn>
            <blockquote className="max-w-4xl">
              <p className="text-display text-3xl md:text-5xl leading-tight mb-8">
                &ldquo;Vayam Media didn&apos;t just run ads; they <span className="text-accent-word normal-case">redefined</span> our entire digital presence. The growth has been nothing short of exceptional.&rdquo;
              </p>
              <footer className="text-lg text-paper/70">
                — Sarah Jenkins, CMO at Zenith Labs
              </footer>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="max-w-4xl md:ml-auto text-left md:text-right">
              <p className="text-display text-3xl md:text-5xl leading-tight mb-8">
                &ldquo;Finding an agency that treats your ROI like their own is rare. Vayam proved to be that <span className="text-accent-word normal-case">partner</span> from day one.&rdquo;
              </p>
              <footer className="text-lg text-paper/70">
                — David Chen, Founder of Prism Commerce
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center text-center">
        <FadeIn>
          <span className="text-eyebrow text-paper/80 mb-6 block">Your turn</span>
          <h2 className="text-display text-5xl md:text-7xl mb-10">Want results like these?</h2>
          <MagneticButton strength={40}>
            <Link href="/contact" className="btn-pill inline-flex items-center justify-center bg-ink text-paper hover:bg-ink/80 px-8 py-4 text-sm uppercase tracking-widest font-medium">
              Start your story
            </Link>
          </MagneticButton>
        </FadeIn>
      </section>
    </main>
  );
}
