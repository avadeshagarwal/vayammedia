import type { Metadata } from 'next';
import CaseStudiesPage from './CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Case Studies | Vayam Media',
  description: 'Results that speak. Explore how Vayam Media drives growth for brands through Google Ads, Meta Ads, Performance Marketing, and Shopify Development.',
};

export default function Page() {
  return <CaseStudiesPage />;
}
