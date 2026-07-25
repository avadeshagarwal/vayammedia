# Vayam Media - Permanent SEO Development Standards

This document serves as the single source of truth for all SEO-related development standards for the Vayam Media project. **Every future page and component must adhere strictly to these rules.**

## 1. Metadata API (Next.js)
- **Rule:** Every page must export a `generateMetadata` function (for dynamic pages) or a `metadata` object (for static pages).
- **Required Fields:** `title`, `description`, `alternates.canonical`.
- **OpenGraph:** Always include `openGraph` properties (`title`, `description`, `url`, `type`).
- **Titles:** Must be keyword-rich but natural (e.g., "Digital Marketing Services in Jaipur | Vayam Media"). Do not exceed 60 characters.
- **Descriptions:** Must be compelling, conversion-focused, and contain primary keywords. Do not exceed 160 characters.

## 2. Semantic HTML & Headings
- **Rule:** One, and only one, strictly visible `<h1>` tag per page.
- **Hidden Text:** Do NOT use `sr-only` or hidden elements to stuff keywords. All H1s must be visually rendered in the UI.
- **Hierarchy:** Ensure perfect sequential heading hierarchy (`<h2>` follows `<h1>`, `<h3>` follows `<h2>`). Do not skip heading levels.
- **Structure:** Always wrap main content in `<main>`, distinct sections in `<section>`, and standalone content in `<article>`.

## 3. Structured Data (JSON-LD)
- **Rule:** Use the `JsonLd` component to inject schema precisely on the page level. DO NOT inject page-specific schemas globally in `layout.tsx`.
- **Validation:** JSON-LD must output valid format without errors when tested in the Rich Results Test.
- **Schemas Used:**
  - `Organization` & `ProfessionalService`: Homepage and About pages.
  - `Service`: Individual service pages.
  - `FAQPage`: On every page that contains accordion-style Q&A.
  - `Article` / `Review`: Case Studies and Blog pages.

## 4. Internal Linking & Crawlability
- **Anchor Text:** Use descriptive, keyword-rich anchor texts for internal links (e.g., "See our Google Ads services" instead of "Click here").
- **Canonicalization:** Every page must have a self-referencing absolute canonical tag to prevent duplicate content issues.
- **Sitemap:** Every new route must be dynamically added to `src/app/sitemap.ts`.
- **Robots.txt:** Never disallow `/_next/` or any static assets, ensuring Googlebot can fully render the page and its animations.

## 5. UI, UX, and Visual Integrity
- **Rule:** **SEO updates must NEVER alter the approved UI, UX, layout, typography, animations, colors, or spacing.**
- **Components:** Reuse existing components (`RevealText`, `FadeIn`, `MagneticButton`) exactly as designed when building new pages.

## 6. Core Web Vitals & Performance
- **Rule:** All pages must pass Core Web Vitals thresholds (LCP < 2.5s, FID < 100ms, CLS < 0.1).
- **Optimization:** Leverage Next.js `generateStaticParams` for dynamic routes to ensure SSG (Static Site Generation) and instant TTFB.
- **Images:** All images must use the Next.js `<Image>` component with appropriate sizing, `priority` (for LCP), and descriptive `alt` text.

## 7. The SEO Quality Gate (Pre-Commit Checklist)
Before any commit is made for SEO implementation, the following Quality Gate must be passed:
1. `npm run build` succeeds without errors.
2. TypeScript compiles without errors.
3. ESLint passes without errors.
4. Metadata is uniquely defined for all touched pages.
5. JSON-LD schemas are valid.
6. Canonical tags are present and accurate.
7. Sitemap is updated.
8. No visual or UI regressions exist (verify components in browser if necessary).
