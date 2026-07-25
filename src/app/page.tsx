import { Metadata } from 'next';
import HomePage from './HomePage';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Vayam Media | Digital Marketing Agency in Rajasthan',
  description: 'Vayam Media is a results-focused, growth-driven digital marketing agency in Rajasthan specializing in Performance Marketing, SEO, Shopify Development, and Branding.',
  alternates: {
    canonical: 'https://vayammedia.com',
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vayammedia.com/#organization",
      "name": "Vayam Media",
      "url": "https://vayammedia.com",
      "logo": "https://vayammedia.com/logo.png",
      "email": "avadeshagarwal2@gmail.com",
      "telephone": "+917976439089",
      "founder": {
        "@type": "Person",
        "name": "Avadesh Agarwal"
      },
      "sameAs": ["https://instagram.com/vayammedia"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://vayammedia.com/#localbusiness",
      "name": "Vayam Media",
      "url": "https://vayammedia.com",
      "telephone": "+917976439089",
      "email": "avadeshagarwal2@gmail.com",
      "priceRange": "$$$",
      "areaServed": [
        { "@type": "State", "name": "Rajasthan" },
        { "@type": "Country", "name": "India" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd schema={homeSchema} />
      <HomePage />
    </>
  );
}
