"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import RevealText from "@/components/animations/RevealText";
import MagneticButton from "@/components/animations/MagneticButton";
import type { BlogPost, BlogPostMeta } from "@/lib/blog";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPostMeta[];
  relatedServices: { slug: string; title: string }[];
  relatedCaseStudies: { slug: string; client: string; result: string }[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Simple markdown-to-HTML converter for blog content.
 * Handles headings, paragraphs, bold, lists, and horizontal rules.
 * Keeps the client bundle lightweight by avoiding heavy MDX runtimes.
 */
function renderMarkdown(content: string): string {
  const lines = content.split("\n");
  let html = "";
  let inList = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      html += `<h3 class="text-display text-2xl md:text-3xl mt-12 mb-4">${processInline(trimmed.slice(4))}</h3>`;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      html += `<h2 class="text-display text-3xl md:text-4xl mt-16 mb-6">${processInline(trimmed.slice(3))}</h2>`;
      continue;
    }

    // List items
    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html += '<ul class="space-y-3 my-6">';
        inList = true;
      }
      html += `<li class="flex items-start text-ink/80 text-lg leading-relaxed"><span class="text-magenta mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 inline-block"></span><span>${processInline(trimmed.slice(2))}</span></li>`;
      continue;
    }

    // Close list if needed
    if (inList) {
      html += "</ul>";
      inList = false;
    }

    // Regular paragraph
    html += `<p class="text-ink/70 text-lg md:text-xl leading-relaxed my-4">${processInline(trimmed)}</p>`;
  }

  if (inList) {
    html += "</ul>";
  }

  return html;
}

function processInline(text: string): string {
  // Bold
  let result = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink font-semibold">$1</strong>');
  // Inline code
  result = result.replace(/`(.+?)`/g, '<code class="bg-ink/5 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
  return result;
}

export default function BlogPostClient({
  post,
  relatedPosts,
  relatedServices,
  relatedCaseStudies,
}: Props) {
  return (
    <main className="min-h-screen bg-paper w-full overflow-hidden">
      {/* Hero */}
      <section className="bg-paper min-h-[60vh] flex flex-col justify-end px-5 md:px-10 pb-12 pt-32">
        <FadeIn y={20}>
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/blog"
              className="text-eyebrow text-ink/40 hover:text-magenta transition-colors"
            >
              Blog
            </Link>
            <span className="text-ink/20">/</span>
            <Link
              href={`/blog/category/${post.category}`}
              className="text-eyebrow text-ink/40 hover:text-magenta transition-colors"
            >
              {post.category.replace(/-/g, " ")}
            </Link>
          </div>
        </FadeIn>

        <h1 className="text-4xl md:text-6xl lg:text-7xl text-display leading-[1.05] mb-8 text-ink max-w-5xl">
          <RevealText>
            <span>{post.title}</span>
          </RevealText>
        </h1>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center gap-6 text-sm text-ink/50">
            <span>By {post.author}</span>
            <span className="text-ink/20">•</span>
            <time dateTime={post.publishDate}>
              {formatDate(post.publishDate)}
            </time>
            <span className="text-ink/20">•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </FadeIn>
      </section>

      {/* Article Content */}
      <section className="bg-paper px-5 md:px-10 py-16 md:py-24">
        <FadeIn>
          <article className="max-w-3xl mx-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(post.content),
              }}
            />
          </article>
        </FadeIn>
      </section>

      {/* Tags */}
      <section className="bg-paper px-5 md:px-10 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap gap-2 pt-8 border-t border-ink/10">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-ink/15 text-ink/60 hover:bg-ink hover:text-paper transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-ink text-paper px-5 md:px-10 py-16 md:py-24">
          <FadeIn>
            <p className="text-eyebrow text-paper/60 mb-8">Related Services</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block border-t border-paper/15 pt-6"
                >
                  <h3 className="text-display text-2xl group-hover:text-magenta transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-sm text-magenta mt-2 inline-block">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="bg-paper px-5 md:px-10 py-16 md:py-24">
          <FadeIn>
            <p className="text-eyebrow text-ink/60 mb-8">Related Case Studies</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group block border-t border-ink/15 pt-6"
                >
                  <h3 className="text-display text-2xl group-hover:text-magenta transition-colors">
                    {cs.client}
                  </h3>
                  <p className="text-ink/60 text-base mt-2">{cs.result}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-paper px-5 md:px-10 pb-16 md:pb-24">
          <FadeIn>
            <p className="text-eyebrow text-ink/60 mb-8">More Insights</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block"
                >
                  <span className="text-eyebrow text-xs text-magenta">
                    {rp.category.replace(/-/g, " ")}
                  </span>
                  <h3 className="text-display text-xl mt-2 group-hover:text-magenta transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-ink/50 text-sm mt-2">
                    {formatDate(rp.publishDate)}
                  </p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* CTA Band */}
      <section className="bg-magenta text-paper px-5 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center text-center">
        <FadeIn>
          <p className="text-eyebrow text-paper/80 mb-6">
            Ready to grow?
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-5xl md:text-7xl text-display mb-12 max-w-4xl mx-auto">
            Let&apos;s build your growth engine.
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
