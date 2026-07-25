import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyDetailClient from './CaseStudyDetailClient';
import JsonLd from '@/components/seo/JsonLd';
import { caseStudiesData } from '@/lib/case-studies-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = caseStudiesData.find((cs) => cs.slug === params.slug);
  
  if (!caseStudy) {
    return {};
  }

  const title = `${caseStudy.client} Case Study | Vayam Media`;
  const description = `Discover how Vayam Media helped ${caseStudy.client} achieve ${caseStudy.result} with ${caseStudy.services}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://vayammedia.com/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://vayammedia.com/case-studies/${caseStudy.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = caseStudiesData.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${caseStudy.client} Case Study - ${caseStudy.result}`,
    "description": caseStudy.challenge,
    "author": {
      "@type": "Organization",
      "name": "Vayam Media"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vayam Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vayammedia.com/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://vayammedia.com/case-studies/${caseStudy.slug}`
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Vayam Media"
    },
    "author": {
      "@type": "Person",
      "name": caseStudy.testimonial.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": caseStudy.testimonial.quote
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={reviewSchema} />
      <CaseStudyDetailClient caseStudy={caseStudy} />
    </>
  );
}
