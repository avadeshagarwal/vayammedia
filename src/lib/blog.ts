/**
 * Blog Content Layer - Abstraction for CMS Migration
 * 
 * This module reads blog posts from the local filesystem (MDX files with frontmatter).
 * To migrate to a headless CMS (Sanity, Payload, Contentful), replace the internal
 * implementation of these exported functions without changing their signatures.
 * 
 * All page components consume this API, so swapping the data source requires zero
 * changes to the presentation layer.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  updatedDate: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
  content: string;
  relatedServices?: string[];
  relatedCaseStudies?: string[];
  relatedLocations?: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  updatedDate: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
  relatedServices?: string[];
  relatedCaseStudies?: string[];
  relatedLocations?: string[];
}

function parseMdxFile(filePath: string): BlogPost {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    publishDate: data.publishDate,
    updatedDate: data.updatedDate,
    author: data.author,
    category: data.category,
    tags: data.tags || [],
    featuredImage: data.featuredImage || "",
    readingTime: data.readingTime || 5,
    content,
    relatedServices: data.relatedServices,
    relatedCaseStudies: data.relatedCaseStudies,
    relatedLocations: data.relatedLocations,
  };
}

/**
 * Get all blog posts, sorted by publish date (newest first).
 */
export function getAllPosts(): BlogPost[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    return parseMdxFile(filePath);
  });

  return posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

/**
 * Get all post metadata without content (lighter for index/listing pages).
 */
export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}

/**
 * Get a single post by slug. Returns null if not found.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Get all unique categories with their post counts.
 */
export function getAllCategories(): { slug: string; name: string; count: number }[] {
  const posts = getAllPostsMeta();
  const categoryMap = new Map<string, number>();

  for (const post of posts) {
    categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
  }

  return Array.from(categoryMap.entries()).map(([slug, count]) => ({
    slug,
    name: formatCategoryName(slug),
    count,
  }));
}

/**
 * Get all unique tags with their post counts.
 */
export function getAllTags(): { slug: string; name: string; count: number }[] {
  const posts = getAllPostsMeta();
  const tagMap = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }

  return Array.from(tagMap.entries()).map(([slug, count]) => ({
    slug,
    name: formatCategoryName(slug),
    count,
  }));
}

/**
 * Get posts filtered by category.
 */
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPostsMeta().filter((post) => post.category === category);
}

/**
 * Get posts filtered by tag.
 */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPostsMeta().filter((post) => post.tags.includes(tag));
}

/**
 * Get related posts for a given post (by shared tags/category, excluding itself).
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPostsMeta().filter((p) => p.slug !== slug);

  // Score posts by relevance (shared tags + same category)
  const scored = allPosts.map((post) => {
    let score = 0;
    if (post.category === currentPost.category) score += 3;
    for (const tag of post.tags) {
      if (currentPost.tags.includes(tag)) score += 1;
    }
    return { post, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

/**
 * Convert a kebab-case slug to a human-readable name.
 */
function formatCategoryName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
