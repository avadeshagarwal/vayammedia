import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexClient from "../../BlogIndexClient";
import JsonLd from "@/components/seo/JsonLd";
import { getAllTags, getAllCategories, getPostsByTag } from "@/lib/blog";

interface Props {
  params: { tag: string };
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag: tag.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tags = getAllTags();
  const tag = tags.find((t) => t.slug === params.tag);

  if (!tag) return {};

  return {
    title: `Articles Tagged "${tag.name}" — Vayam Media Blog`,
    description: `Browse articles tagged with "${tag.name.toLowerCase()}" on the Vayam Media blog.`,
    alternates: {
      canonical: `https://vayammedia.com/blog/tag/${params.tag}`,
    },
    openGraph: {
      title: `#${tag.name} — Vayam Media Blog`,
      description: `Articles tagged "${tag.name.toLowerCase()}".`,
      url: `https://vayammedia.com/blog/tag/${params.tag}`,
    },
  };
}

export default function TagPage({ params }: Props) {
  const tags = getAllTags();
  const tag = tags.find((t) => t.slug === params.tag);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTag(params.tag);
  const categories = getAllCategories();

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
        name: `#${tag.name}`,
        item: `https://vayammedia.com/blog/tag/${params.tag}`,
      },
    ],
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <BlogIndexClient posts={posts} categories={categories} />
    </>
  );
}
