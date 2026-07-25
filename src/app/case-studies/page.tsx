import type { Metadata } from 'next';
import CaseStudiesPage from './CaseStudiesPage';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Performance Marketing Case Studies | Vayam Media',
  description: 'Proven growth results in Rajasthan & globally: 312% increase in qualified leads, 2.4x revenue growth, 67% lower CPA, and $2.1M pipeline generated.',
  alternates: {
    canonical: 'https://vayammedia.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies — Vayam Media Performance Proven Results',
    description: 'Explore real performance marketing case studies and growth metrics engineered by Vayam Media.',
    url: 'https://vayammedia.com/case-studies',
  },
};

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies & Client Results",
  "description": "Proven growth results engineered by Vayam Media.",
  "mainEntity": {
    "@id": "https://vayammedia.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd schema={caseStudiesSchema} />
      <CaseStudiesPage />
    </>
  );
}
