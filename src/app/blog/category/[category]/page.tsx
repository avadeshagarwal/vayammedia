import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexClient from "../../BlogIndexClient";
import JsonLd from "@/components/seo/JsonLd";
import { getAllCategories, getPostsByCategory } from "@/lib/blog";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === params.category);

  if (!category) return {};

  return {
    title: `${category.name} Articles — Vayam Media Blog`,
    description: `Read expert articles on ${category.name.toLowerCase()} from the Vayam Media team. Strategies, guides, and insights for ambitious brands.`,
    alternates: {
      canonical: `https://vayammedia.com/blog/category/${params.category}`,
    },
    openGraph: {
      title: `${category.name} — Vayam Media Blog`,
      description: `Expert ${category.name.toLowerCase()} articles and guides.`,
      url: `https://vayammedia.com/blog/category/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === params.category);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(params.category);

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
        name: category.name,
        item: `https://vayammedia.com/blog/category/${params.category}`,
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
