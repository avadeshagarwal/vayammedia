import { Metadata } from 'next';
import ServicesPage from './ServicesPage';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Vayam Media',
  description: 'Full-service digital agency offerings in Rajasthan: Google Ads, Meta Ads, Performance Marketing, SEO, Shopify Development, Landing Page CRO, and Branding.',
  alternates: {
    canonical: 'https://vayammedia.com/services',
  },
  openGraph: {
    title: 'Services — Vayam Media Performance Marketing & Development',
    description: 'Explore 12 high-impact growth services engineered to scale your digital presence and revenue predictably.',
    url: 'https://vayammedia.com/services',
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Google Ads Management"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Meta Ads (Facebook & Instagram)"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Performance Marketing"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "SEO (Search Engine Optimization)"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Shopify Development"
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd schema={servicesSchema} />
      <ServicesPage />
    </>
  );
}
