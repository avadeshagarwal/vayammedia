import { MetadataRoute } from "next";
import { servicesData } from "@/lib/services-data";
import { locationsData } from "@/lib/locations-data";
import { caseStudiesData } from "@/lib/case-studies-data";
import { getAllPostsMeta, getAllCategories, getAllTags } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vayammedia.com";
  const posts = getAllPostsMeta();
  const categories = getAllCategories();
  const tags = getAllTags();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...servicesData.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locationsData.map((location) => ({
      url: `${baseUrl}/locations/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudiesData.map((cs) => ({
      url: `${baseUrl}/case-studies/${cs.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...categories.map((cat) => ({
      url: `${baseUrl}/blog/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...tags.map((tag) => ({
      url: `${baseUrl}/blog/tag/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),
  ];
}
