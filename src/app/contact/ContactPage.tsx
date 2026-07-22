"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import RevealText from "@/components/animations/RevealText";
import MagneticButton from "@/components/animations/MagneticButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-magenta selection:text-paper">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn>
          <p className="text-eyebrow mb-6">Contact</p>
        </FadeIn>
        <RevealText className="text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] text-display leading-[0.85] tracking-tight">
          <span>Let&apos;s</span>
          <span>
            <span className="text-accent-word normal-case">talk.</span>
          </span>
        </RevealText>
        <FadeIn delay={0.6}>
          <p className="mt-8 text-xl md:text-2xl max-w-xl text-ink/70">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </FadeIn>
      </section>

      {/* Contact Form + Info */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Form */}
          <div className="md:col-span-3">
            <FadeIn>
              {isSuccess ? (
                <div className="bg-paper p-8 border-2 border-ink/10 rounded-2xl flex flex-col items-center justify-center text-center min-h-[400px]">
                  <h3 className="text-display text-4xl mb-4">Message Sent</h3>
                  <p className="text-xl text-ink/70 mb-8">
                    Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
                    }}
                    className="btn-pill"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="sr-only">Your name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-lg focus:border-magenta focus:outline-none placeholder:text-ink/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-lg focus:border-magenta focus:outline-none placeholder:text-ink/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="sr-only">Company name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-lg focus:border-magenta focus:outline-none placeholder:text-ink/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="sr-only">Project budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-lg focus:border-magenta focus:outline-none text-ink appearance-none cursor-pointer transition-colors"
                      style={{ color: formData.budget ? "inherit" : "rgba(10, 10, 10, 0.3)" }}
                    >
                      <option value="" disabled>Select your budget</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                      <option value="$15,000 – $50,000">$15,000 – $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Your message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project"
                      className="w-full bg-transparent border-2 border-ink/20 rounded-xl p-4 text-lg min-h-[160px] focus:border-magenta focus:outline-none placeholder:text-ink/30 transition-colors resize-y"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <MagneticButton strength={0.2} className="inline-block">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-pill disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </button>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Info */}
          <div className="md:col-span-2 pt-12 md:pt-0 pl-0 md:pl-12 md:border-l-2 md:border-ink/10">
            <FadeIn delay={0.2}>
              <div>
                <p className="text-eyebrow mb-2">Founder</p>
                <p className="text-xl font-semibold">Avadesh Agarwal</p>
              </div>

              <div className="mt-8">
                <p className="text-eyebrow mb-2">Email</p>
                <a href="mailto:avadeshagarwal2@gmail.com" className="text-xl link-sweep inline-block">
                  avadeshagarwal2@gmail.com
                </a>
              </div>
              
              <div className="mt-8">
                <p className="text-eyebrow mb-2">Phone</p>
                <a href="tel:+917976439089" className="text-xl link-sweep inline-block">
                  +91 79764 39089
                </a>
              </div>

              <div className="mt-8">
                <p className="text-eyebrow mb-2">Offices</p>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Jaipur<br />
                  Churu<br />
                  Remote
                </p>
              </div>

              <div className="mt-8">
                <p className="text-eyebrow mb-2">Follow us</p>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="https://instagram.com/vayammedia" target="_blank" rel="noopener noreferrer" className="text-lg link-sweep inline-block">
                      Instagram (@vayammedia)
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg link-sweep inline-block">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg link-sweep inline-block">
                      Twitter/X
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="bg-ink text-paper px-5 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="text-eyebrow mb-6">Where to find us</p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h2 className="text-5xl md:text-7xl text-display">
            Rajasthan &amp; Remote,{" "}
            <span className="text-accent-word normal-case">one vision.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 rule-t border-paper/20 pt-16">
          <FadeIn delay={0.1}>
            <h3 className="text-display text-3xl mb-2">Churu</h3>
            <p className="text-sm text-paper/60">Station Road, Churu, Rajasthan 331001</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-display text-3xl mb-2">Sikar</h3>
            <p className="text-sm text-paper/60">Station Road, Sikar, Rajasthan 332001</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h3 className="text-display text-3xl mb-2">Jaipur</h3>
            <p className="text-sm text-paper/60">Malviya Nagar, Jaipur, Rajasthan 302017</p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h3 className="text-display text-3xl mb-2">Bikaner</h3>
            <p className="text-sm text-paper/60">Kote Gate, Bikaner, Rajasthan 334001</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="text-eyebrow mb-6">Prefer email?</p>
          <h2 className="text-4xl md:text-6xl text-display mb-12 max-w-3xl">
            Drop us a line at avadeshagarwal2@gmail.com
          </h2>
          <MagneticButton strength={0.3} className="inline-block">
            <a href="mailto:avadeshagarwal2@gmail.com" className="btn-pill-outline border-paper text-paper hover:bg-paper hover:text-magenta">
              Open email
            </a>
          </MagneticButton>
        </FadeIn>
      </section>
    </main>
  );
}
