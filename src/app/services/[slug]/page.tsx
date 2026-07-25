import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './ServiceDetailClient';
import JsonLd from '@/components/seo/JsonLd';
import { servicesData } from '@/lib/services-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {};
  }

  return {
    title: `${service.title} Services | Vayam Media`,
    description: service.description,
    alternates: {
      canonical: `https://vayammedia.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Services — Vayam Media`,
      description: service.description,
      url: `https://vayammedia.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "@id": "https://vayammedia.com/#organization"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
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
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />
      <ServiceDetailClient service={service} />
    </>
  );
}
