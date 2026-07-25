"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import MagneticButton from '@/components/animations/MagneticButton';
import { cn } from '@/lib/utils';
import { CaseStudyData } from '@/lib/case-studies-data';

export default function CaseStudyDetailClient({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <main className="min-h-screen bg-paper w-full overflow-hidden">
      {/* 1. Hero */}
      <section className="bg-paper min-h-[70vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn y={20}>
          <div className="flex items-center gap-4 mb-6">
            <Link href="/case-studies" className="text-eyebrow text-ink/40 hover:text-magenta transition-colors">
              Case Studies
            </Link>
            <span className="text-ink/20">/</span>
            <span className="text-eyebrow text-ink/60">{caseStudy.client}</span>
          </div>
        </FadeIn>
        
        <h1 className="text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] text-display leading-none mb-8 text-ink">
          <RevealText>
            <span>{caseStudy.client}</span>
          </RevealText>
        </h1>

        <FadeIn delay={0.4}>
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl font-medium">
              <span className="text-ink font-semibold">Services:</span> {caseStudy.services}
            </p>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl font-medium">
              <span className="text-ink font-semibold">Industry:</span> {caseStudy.industry}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 2. Visual Banner */}
      <section className="px-5 md:px-10 pb-24 md:pb-36">
        <FadeIn>
          <div className={cn("w-full aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br", caseStudy.gradient)} />
        </FadeIn>
      </section>

      {/* 3. The Challenge & Solution */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn>
            <p className="text-eyebrow text-paper/60 mb-6">The Challenge</p>
            <p className="text-xl md:text-3xl leading-relaxed text-paper">
              {caseStudy.challenge}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-eyebrow text-paper/60 mb-6">The Solution</p>
            <ul className="space-y-6">
              {caseStudy.solution.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-magenta mr-4 mt-2 w-2 h-2 rounded-full flex-shrink-0" />
                  <span className="text-lg md:text-xl text-paper/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 4. Metrics Grid */}
      <section className="bg-paper text-ink px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="text-eyebrow text-ink/60 mb-12 text-center">The Results</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">
          {caseStudy.metrics.map((metric, idx) => (
            <FadeIn key={idx} delay={0.1 * idx} y={30} className="text-center">
              <div className="border-t border-ink/15 pt-8">
                <span className="text-display text-5xl md:text-7xl text-magenta block mb-4">
                  {metric.value}
                </span>
                <h3 className="text-lg text-ink/70 font-medium uppercase tracking-wider">{metric.label}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. Testimonial */}
      <section className="bg-paper text-ink px-5 md:px-10 pb-24 md:pb-36 max-w-4xl mx-auto text-center">
        <FadeIn>
          <blockquote className="mb-8">
            <p className="text-display text-3xl md:text-5xl leading-tight text-ink">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </p>
          </blockquote>
          <cite className="text-lg text-ink/70 not-italic font-medium">
            — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
          </cite>
        </FadeIn>
      </section>

      {/* 6. CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="text-eyebrow text-paper/80 mb-6">Want results like these?</p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-5xl md:text-7xl text-display mb-12 max-w-4xl mx-auto">
            Let&apos;s write your success story.
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
