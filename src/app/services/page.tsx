import { Metadata } from 'next';
import ServicesPage from './ServicesPage';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Full-service digital agency offerings: Google Ads, Meta Ads, Performance Marketing, SEO, Shopify Development, Landing Page CRO, Branding, Content Creation, and AI Automation.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services — Vayam Media Performance Marketing & Development',
    description: 'Explore 12 high-impact growth services engineered to scale your digital presence and revenue predictably.',
    url: 'https://vayammedia.com/services',
  },
};

export default function Page() {
  return <ServicesPage />;
}
