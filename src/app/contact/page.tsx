import type { Metadata } from "next";
import ContactPage from "./ContactPage";
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Contact Vayam Media | Digital Marketing Agency Rajasthan",
  description: "Get in touch with founder Avadesh Agarwal. Vayam Media is a performance marketing agency serving Jaipur, Churu, Sikar, Bikaner, and globally.",
  alternates: {
    canonical: "https://vayammedia.com/contact",
  },
  openGraph: {
    title: "Contact Vayam Media — Start a Project",
    description: "Ready to scale your brand? Tell us about your project and we will respond within 24 hours.",
    url: "https://vayammedia.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Vayam Media",
  "description": "Get in touch with the Vayam Media team.",
  "mainEntity": {
    "@id": "https://vayammedia.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd schema={contactSchema} />
      <ContactPage />
    </>
  );
}
