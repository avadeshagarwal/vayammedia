import type { Metadata } from 'next';
import CaseStudiesPage from './CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Case Studies & Client Results',
  description: 'Proven growth results: 312% increase in qualified leads, 2.4x revenue growth, 67% lower CPA, and $2.1M pipeline generated for client brands.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies — Vayam Media Performance Proven Results',
    description: 'Explore real performance marketing case studies and growth metrics engineered by Vayam Media.',
    url: 'https://vayammedia.com/case-studies',
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
