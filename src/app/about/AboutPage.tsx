"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import RevealText from "@/components/animations/RevealText";
import MagneticButton from "@/components/animations/MagneticButton";

export default function AboutPage() {
  const values = [
    {
      id: "01",
      title: "Data-First Thinking",
      desc: "Every decision we make is backed by hard data, not gut feelings. We test, measure, and optimize to ensure maximum ROI for our clients."
    },
    {
      id: "02",
      title: "Radical Transparency",
      desc: "No hidden fees, no vanity metrics. We provide clear, honest reporting so you always know exactly where your budget is going and what it's achieving."
    },
    {
      id: "03",
      title: "Speed of Execution",
      desc: "In the digital world, speed wins. We move fast, deploying campaigns and iterating quickly to capitalize on market opportunities before they fade."
    },
    {
      id: "04",
      title: "Creative Bravery",
      desc: "Safe marketing goes unnoticed. We take calculated creative risks that capture attention, evoke emotion, and drive meaningful action from your audience."
    },
    {
      id: "05",
      title: "Client Partnerships",
      desc: "We don't work for you; we work with you. We view ourselves as an extension of your team, deeply invested in your long-term business success."
    },
    {
      id: "06",
      title: "Continuous Learning",
      desc: "The digital landscape changes daily. Our team is constantly learning, adapting, and mastering new platforms and strategies to keep you ahead of the curve."
    }
  ];

  const roles = [
    { title: "Avadesh Agarwal", dept: "Founder & Growth Lead", gradient: "from-magenta to-purple-600" },
    { title: "Performance Marketing", dept: "Media Buying", gradient: "from-blue-500 to-cyan-400" },
    { title: "Creative & Content", dept: "Design & Copy", gradient: "from-orange-500 to-yellow-400" },
    { title: "Technology & Dev", dept: "Engineering", gradient: "from-green-500 to-teal-400" }
  ];

  return (
    <main className="bg-paper min-h-screen">
      {/* 1. Hero */}
      <section className="bg-paper min-h-[70vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn>
          <span className="text-eyebrow mb-6 block">About us</span>
        </FadeIn>
        <h1 className="text-display text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] leading-[0.85]">
          <RevealText>
            <span>We don&apos;t do</span>
            <span>
              <span className="text-accent-word lowercase pr-4">average.</span>
            </span>
          </RevealText>
        </h1>
      </section>

      {/* 2. Mission Statement */}
      <section className="bg-paper px-5 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <span className="text-eyebrow block mb-8">Our story</span>
            <p className="text-3xl md:text-4xl leading-snug font-medium">
              Vayam Media was founded by Avadesh Agarwal out of a frustration with agencies that prioritize vanity metrics over real business growth. We saw a gap for a true performance growth partner.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-lg leading-relaxed text-ink/70 space-y-6">
              <p>
                We believe that modern marketing requires a perfect blend of data-driven creativity and relentless execution. It&apos;s not just about running ads or building websites; it&apos;s about engineering growth systems that scale efficiently and predictably.
              </p>
              <p>
                Our approach is rooted in transparent reporting and treating our clients&apos; budgets as if they were our own. We refuse to hide behind complex jargon or confusing dashboards. If a campaign isn&apos;t working, we tell you, we fix it, and we move forward together.
              </p>
              <p>
                Today, Vayam Media is led by Avadesh Agarwal and a collective of senior digital specialists spanning Jaipur, Churu, and remote locations globally, all united by one goal: driving measurable success for ambitious brands.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Values Grid */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <span className="text-eyebrow block mb-6 text-paper/70">What drives us</span>
          <h2 className="text-display text-5xl md:text-7xl leading-none">
            Principles over <span className="text-accent-word lowercase">platitudes</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((val, i) => (
            <FadeIn key={val.id} delay={i * 0.1} className="rule-t border-paper/20 pt-6">
              <span className="text-eyebrow text-magenta">{val.id}</span>
              <h3 className="text-display text-2xl mt-4">{val.title}</h3>
              <p className="text-sm text-paper/60 mt-3 leading-relaxed">
                {val.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. Team / Culture */}
      <section className="bg-paper px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="text-eyebrow block mb-6 text-ink/70">The team</span>
            <h2 className="text-display text-5xl md:text-7xl leading-none mb-8">
              Small team, <span className="text-accent-word lowercase">big reach.</span>
            </h2>
            <p className="text-xl text-ink/80 leading-relaxed">
              We operate as a lean, senior-only collective. When you partner with Vayam Media, you get direct access to experts who actually do the work. No bloated account management layers, and definitely no juniors learning on your budget.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {roles.map((role, i) => (
            <FadeIn key={role.title} delay={i * 0.1} className="group cursor-pointer">
              <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${role.gradient} mb-6 transition-transform duration-500 group-hover:scale-[0.98]`} />
              <h4 className="text-display text-xl">{role.title}</h4>
              <p className="text-sm text-ink/60 mt-1 uppercase tracking-wider">{role.dept}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center text-center">
        <FadeIn className="flex flex-col items-center">
          <span className="text-eyebrow block mb-8 text-paper/80">Join us</span>
          <h2 className="text-display text-5xl md:text-7xl leading-[0.9] max-w-4xl mb-12">
            Want to build something that actually works?
          </h2>
          <Link href="/contact">
            <MagneticButton className="btn-pill-outline border-paper text-paper hover:bg-paper hover:text-magenta transition-colors duration-300 px-8 py-4 text-sm tracking-widest uppercase block">
              Get in touch
            </MagneticButton>
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
