import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { servicesData } from "@/lib/services-data";
import { caseStudiesData } from "@/lib/case-studies-data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://vayammedia.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      tags: post.tags,
      url: `https://vayammedia.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);

  // Build related services list from frontmatter
  const relatedServices = (post.relatedServices || [])
    .map((slug) => servicesData.find((s) => s.slug === slug))
    .filter(Boolean);

  // Build related case studies list from frontmatter
  const relatedCaseStudies = (post.relatedCaseStudies || [])
    .map((slug) => caseStudiesData.find((cs) => cs.slug === slug))
    .filter(Boolean);

  // JSON-LD: BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Vayam Media",
      logo: {
        "@type": "ImageObject",
        url: "https://vayammedia.com/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vayammedia.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category.replace(/-/g, " "),
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vayammedia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://vayammedia.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://vayammedia.com/blog/${post.slug}`,
      },
    ],
  };

  // JSON-LD: FAQPage (extract FAQ sections from content if present)
  const faqMatches = post.content.match(
    /\*\*(.+?)\*\*\n\n([\s\S]+?)(?=\n\n\*\*|\n\n##|$)/g
  );
  const faqSchema =
    faqMatches && faqMatches.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqMatches.map((match) => {
            const lines = match.trim().split("\n\n");
            const question = lines[0]?.replace(/\*\*/g, "").trim() || "";
            const answer = lines.slice(1).join(" ").trim() || "";
            return {
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            };
          }),
        }
      : null;

  return (
    <>
      <JsonLd schema={blogPostingSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}
      <BlogPostClient
        post={post}
        relatedPosts={relatedPosts}
        relatedServices={relatedServices as { slug: string; title: string }[]}
        relatedCaseStudies={
          relatedCaseStudies as { slug: string; client: string; result: string }[]
        }
      />
    </>
  );
}
