import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationDetailClient from './LocationDetailClient';
import JsonLd from '@/components/seo/JsonLd';
import { locationsData } from '@/lib/locations-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return locationsData.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locationsData.find((l) => l.slug === params.slug);
  
  if (!location) {
    return {};
  }

  return {
    title: `${location.title} | Vayam Media`,
    description: location.description,
    alternates: {
      canonical: `https://vayammedia.com/locations/${location.slug}`,
    },
    openGraph: {
      title: `${location.title} — Vayam Media`,
      description: location.description,
      url: `https://vayammedia.com/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = locationsData.find((l) => l.slug === params.slug);

  if (!location) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd schema={faqSchema} />
      <LocationDetailClient location={location} />
    </>
  );
}
