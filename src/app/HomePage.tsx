'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import Marquee from '@/components/animations/Marquee';
import MagneticButton from '@/components/animations/MagneticButton';
import CountUp from '@/components/animations/CountUp';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const [brandName, setBrandName] = useState('');
  const [volume, setVolume] = useState(1);
  
  const handleAmplify = () => {
    setVolume((prev) => (prev < 3 ? prev + 1 : 1));
  };
  
  const displayBrand = brandName.trim() === '' ? 'Your brand' : brandName;
  
  const services = [
    'Google Ads', 'Meta Ads', 'Performance Marketing', 'SEO', 
    'Shopify Development', 'Website Development', 'Landing Pages', 'Branding', 
    'Social Media Management', 'Content Creation', 'Video Editing', 'AI Automation'
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);
  const dbValue = useTransform(scrollYProgress, [0, 1], [40, 120]);
  const dbDisplay = useTransform(dbValue, (v) => `${Math.round(v)} dB`);
  const [scrollProgress, setScrollProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setScrollProgress(v));

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-paper text-ink min-h-svh flex flex-col justify-end px-5 md:px-10 pb-10 pt-32 relative">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
          <span className="text-eyebrow rotate-90 origin-center mb-8">Scroll</span>
          <div className="w-[1px] h-24 bg-ink/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-ink"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              style={{ height: '50%' }}
            />
          </div>
        </div>

        <div className="max-w-[90vw]">
          <span className="text-eyebrow block mb-6">Vayam Media — Growth Driven Digital Marketing Agency</span>
          <h1 className="text-display text-[13.5vw] md:text-[11.5vw] leading-none mb-8">
            <RevealText stagger={0.1}>
              <span>Fuel your</span>
              <span>
                digital <span className="text-accent-word">growth.</span>
              </span>
            </RevealText>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-20">
            <FadeIn delay={0.8} className="max-w-md">
              <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
                We are a results-focused agency that ignores the noise and double-downs on what actually scales revenue. No fluff, just pure performance.
              </p>
            </FadeIn>
            
            <FadeIn delay={1} className="flex items-center gap-6 shrink-0">
              <Link href="/contact" className="btn-pill inline-flex items-center justify-center px-8 py-4 bg-ink text-paper rounded-full hover:bg-magenta transition-colors duration-300">
                Start a project
              </Link>
              <Link href="/services" className="link-sweep font-medium text-ink relative overflow-hidden group">
                See services
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Client Marquee */}
      <section className="bg-ink text-paper py-8 border-t border-paper/10 overflow-hidden">
        <Marquee duration="40s" className="flex items-center">
          {["Zenith Labs", "Prism Commerce", "Nova Fitness", "Craft & Co.", "Meridian Tech", "Oasis Living", "Vertex Studios", "Spark Finance", "Bloom Organics", "Atlas Ventures"].map((client, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              <span className="text-2xl md:text-3xl font-medium px-8">{client}</span>
              <span className="w-2 h-2 rounded-full bg-magenta block" />
            </div>
          ))}
        </Marquee>
      </section>

      {/* 3. Services List */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <div className="mb-20">
          <span className="text-eyebrow block mb-6 text-paper/70">What we deliver</span>
          <h2 className="text-display text-5xl md:text-7xl">
            Twelve ways to scale <span className="text-accent-word">impact</span>
          </h2>
        </div>
        
        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn key={service} delay={index * 0.05}>
              <Link href="/services" className="group flex items-center justify-between py-6 md:py-8 rule-t border-paper/20 transition-colors duration-500 hover:text-magenta">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-eyebrow text-paper/50 group-hover:text-magenta/50 transition-colors duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-medium tracking-tight">
                    {service}
                  </h3>
                </div>
                <div className="text-3xl md:text-5xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  →
                </div>
              </Link>
            </FadeIn>
          ))}
          <div className="rule-t border-paper/20 w-full h-px" />
        </div>
      </section>

      {/* 4. Brand Demo / Interactive Section */}
      <section className="bg-paper text-ink px-5 md:px-10 py-24 md:py-36 overflow-hidden">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <span className="text-eyebrow block mb-6 text-ink/70">The live demo</span>
            <h2 className="text-display text-5xl md:text-7xl">
              Your brand, but <span className="text-accent-word">amplified</span>
            </h2>
            <p className="mt-8 text-lg max-w-md text-ink/80">
              Type your brand name below to see how we crank up the volume and make you unignorable in a crowded digital space.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-eyebrow bg-ink/5 px-4 py-2 rounded-full">Vol {volume}/3</span>
            <button 
              onClick={handleAmplify}
              className="btn-pill-outline px-6 py-3 rounded-full border border-ink hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              Amplify
            </button>
          </div>
        </div>

        <div className="mb-24">
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            maxLength={18}
            placeholder="Type your brand..."
            className="w-full bg-transparent border-b-2 border-ink pb-4 text-4xl md:text-6xl text-display outline-none placeholder:text-ink/20 focus:border-magenta transition-colors rounded-none"
          />
        </div>

        <div className="flex flex-col gap-6 w-screen relative -left-5 md:-left-10 pb-16">
          <div className="border-t border-ink/10 pt-4">
            <Marquee duration="26s">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center whitespace-nowrap">
                  <span className="text-[11vw] md:text-[7.5vw] text-display px-8 text-ink leading-none">{displayBrand}</span>
                  <span className="w-4 h-4 rounded-full bg-magenta block" />
                </div>
              ))}
            </Marquee>
          </div>
          
          <motion.div 
            className="border-t border-ink/10 pt-4"
            animate={{ opacity: volume >= 2 ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Marquee duration="29s" reverse>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center whitespace-nowrap">
                  <span className="text-[11vw] md:text-[7.5vw] text-display px-8 text-hollow leading-none">{displayBrand}</span>
                  <span className="w-4 h-4 rounded-full bg-magenta block" />
                </div>
              ))}
            </Marquee>
          </motion.div>
          
          <motion.div 
            className="border-t border-ink/10 pt-4"
            animate={{ opacity: volume >= 3 ? 1 : 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <Marquee duration="32s">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center whitespace-nowrap">
                  <span className="text-[11vw] md:text-[7.5vw] text-display px-8 text-magenta leading-none">{displayBrand}</span>
                  <span className="w-4 h-4 rounded-full bg-magenta block" />
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium hover:text-magenta transition-colors group">
            Like the sound of that? Start a project 
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* 5. Testimonial + Stats */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-32">
        <span className="text-eyebrow block mb-12 text-paper/70">Don&apos;t take our word for it</span>
        
        <div className="mb-32 max-w-5xl">
          <FadeIn>
            <blockquote className="text-4xl md:text-6xl lg:text-7xl leading-tight font-medium mb-10">
              &ldquo;Vayam Media didn&apos;t just build our campaigns; they re-engineered our entire <span className="text-accent-word text-magenta">acquisition strategy.</span> The growth has been nothing short of exponential.&rdquo;
            </blockquote>
            <cite className="text-lg md:text-xl text-paper/60 not-italic block">
              — Sarah Jenkins, CMO at Prism Commerce
            </cite>
          </FadeIn>
        </div>

        <div>
          <span className="text-eyebrow block mb-12 text-paper/70">The receipts</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            <FadeIn delay={0.1}>
              <div className="rule-t border-paper/20 pt-5 flex flex-col gap-2">
                <span className="text-5xl md:text-7xl text-display">
                  <CountUp end={48} suffix="+" duration={2} />
                </span>
                <span className="text-sm md:text-base text-paper/60">Brands Scaled</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rule-t border-paper/20 pt-5 flex flex-col gap-2">
                <span className="text-5xl md:text-7xl text-display">
                  <CountUp end={320} suffix="M" duration={2} />
                </span>
                <span className="text-sm md:text-base text-paper/60">Ad Impressions</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="rule-t border-paper/20 pt-5 flex flex-col gap-2">
                <span className="text-5xl md:text-7xl text-display">
                  <CountUp end={12} duration={2} />
                </span>
                <span className="text-sm md:text-base text-paper/60">Industry Recognitions</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="rule-t border-paper/20 pt-5 flex flex-col gap-2">
                <span className="text-5xl md:text-7xl text-display">
                  <CountUp end={6} duration={2} />
                </span>
                <span className="text-sm md:text-base text-paper/60">Countries Served</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Scroll-Pinned Section */}
      <section ref={scrollRef} className="h-[300vh] bg-paper relative">
        <div className="sticky top-0 h-svh flex flex-col justify-between overflow-hidden pt-32 pb-10 px-5 md:px-10">
          <div className="flex-1 flex items-center justify-center relative">
            <motion.h2 
              className="absolute text-3xl md:text-5xl lg:text-7xl text-center max-w-4xl font-serif italic text-ink/80"
              style={{ opacity: opacity1 }}
            >
              &ldquo;we tried the safe route once. the results were forgettable.&rdquo;
            </motion.h2>
            
            <motion.h2 
              className="absolute text-[12vw] md:text-[10vw] leading-none text-display text-center"
              style={{ opacity: opacity2 }}
            >
              So now we <span className="text-magenta">perform.</span>
            </motion.h2>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between items-end mb-4 text-ink/60 font-mono text-sm">
              <span>Output Level</span>
              <motion.span>
                {dbDisplay}
              </motion.span>
            </div>
            <div className="flex items-end gap-1 md:gap-2 h-24">
              {[...Array(28)].map((_, i) => {
                const base = Math.sin((i / 28) * Math.PI) * 20;
                const factor = Math.max(0.1, scrollProgress * 1.5);
                const height = `${Math.min(100, Math.max(10, (base + 5) * factor * 5))}%`;
                
                return (
                  <div
                    key={i}
                    className={`flex-1 origin-bottom transition-all duration-100 ${i >= 22 ? 'bg-magenta' : 'bg-ink'}`}
                    style={{ height }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <span className="text-eyebrow block mb-8 opacity-80">New business</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-display max-w-5xl mb-16 leading-tight">
          Ready to outperform your competition?
        </h2>
        
        <MagneticButton strength={40}>
          <Link 
            href="/contact" 
            className="w-40 h-40 md:w-56 md:h-56 bg-ink text-paper rounded-full flex items-center justify-center text-xl md:text-2xl font-medium transition-transform duration-300 hover:scale-105"
          >
            Let&apos;s talk
          </Link>
        </MagneticButton>
      </section>
    </main>
  );
}
