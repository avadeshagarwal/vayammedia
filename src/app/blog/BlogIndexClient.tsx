"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import RevealText from "@/components/animations/RevealText";
import type { BlogPostMeta } from "@/lib/blog";

interface Props {
  posts: BlogPostMeta[];
  categories: { slug: string; name: string; count: number }[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexClient({ posts, categories }: Props) {
  return (
    <main className="min-h-screen bg-paper w-full overflow-hidden">
      {/* Hero */}
      <section className="bg-paper min-h-[70vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn>
          <span className="text-eyebrow text-ink/60 mb-6 block">
            Insights &amp; Strategy
          </span>
        </FadeIn>

        <h1 className="text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] text-display leading-none mb-8 text-ink">
          <RevealText>
            <span>Marketing</span>
            <span>
              <span className="text-accent-word lowercase">insights.</span>
            </span>
          </RevealText>
        </h1>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl font-medium">
            Actionable strategies, data-driven analysis, and expert perspectives
            on digital marketing and growth.
          </p>
        </FadeIn>
      </section>

      {/* Categories */}
      <section className="bg-paper px-5 md:px-10 pb-8">
        <FadeIn>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="text-eyebrow text-sm px-4 py-2 rounded-full border border-ink/15 bg-ink text-paper transition-colors"
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="text-eyebrow text-sm px-4 py-2 rounded-full border border-ink/15 hover:bg-ink hover:text-paper transition-colors"
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Posts Grid */}
      <section className="bg-paper px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, idx) => (
            <FadeIn key={post.slug} delay={idx * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <article className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-eyebrow text-xs text-magenta uppercase tracking-wider">
                      {post.category.replace(/-/g, " ")}
                    </span>
                    <span className="text-ink/20">•</span>
                    <span className="text-eyebrow text-xs text-ink/50">
                      {post.readingTime} min read
                    </span>
                  </div>

                  <h2 className="text-display text-2xl md:text-3xl mb-4 group-hover:text-magenta transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-ink/60 text-base leading-relaxed mb-6 flex-grow">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-ink/10">
                    <span className="text-sm text-ink/50">
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="text-sm font-medium text-magenta group-hover:translate-x-1 transition-transform duration-300">
                      Read article →
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
