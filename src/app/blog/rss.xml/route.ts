import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://vayammedia.com";

export async function GET() {
  const posts = getAllPosts();

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <author>hello@vayammedia.com (${post.author})</author>
      <category>${post.category.replace(/-/g, " ")}</category>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Vayam Media Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Expert insights on performance marketing, SEO, Google Ads, and digital growth strategies for Indian businesses.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
