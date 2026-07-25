import { Metadata } from "next";
import BlogIndexClient from "./BlogIndexClient";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPostsMeta, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights & Strategies",
  description:
    "Expert insights on performance marketing, SEO, Google Ads, and digital growth strategies for Indian businesses. Actionable guides from the Vayam Media team.",
  alternates: {
    canonical: "https://vayammedia.com/blog",
  },
  openGraph: {
    title: "Blog — Digital Marketing Insights | Vayam Media",
    description:
      "Actionable digital marketing insights, strategies, and case studies for ambitious brands.",
    url: "https://vayammedia.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPostsMeta();
  const categories = getAllCategories();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vayam Media Blog",
    description:
      "Expert insights on performance marketing, SEO, Google Ads, and digital growth strategies.",
    url: "https://vayammedia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Vayam Media",
    },
  };

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
    ],
  };

  return (
    <>
      <JsonLd schema={blogSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <BlogIndexClient posts={posts} categories={categories} />
    </>
  );
}
