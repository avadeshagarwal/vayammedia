import { Metadata } from 'next';
import AboutPage from './AboutPage';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Vayam Media | Performance Marketing Agency',
  description: 'Learn about Vayam Media, founded by Avadesh Agarwal. A performance marketing & digital growth agency based in Rajasthan, serving globally.',
  alternates: {
    canonical: 'https://vayammedia.com/about',
  },
  openGraph: {
    title: 'About Vayam Media — Performance Marketing Agency',
    description: 'Founded by Avadesh Agarwal. Data-driven growth, transparency, and relentless execution for ambitious brands.',
    url: 'https://vayammedia.com/about',
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@id": "https://vayammedia.com/#organization"
  }
};

export default function About() {
  return (
    <>
      <JsonLd schema={aboutSchema} />
      <AboutPage />
    </>
  );
}
