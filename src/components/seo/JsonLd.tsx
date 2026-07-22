import React from "react";

export default function JsonLd() {
  const schema = {
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
          "name": "Avadesh Agarwal",
          "jobTitle": "Founder & Growth Lead",
          "sameAs": ["https://instagram.com/vayammedia"]
        },
        "sameAs": [
          "https://instagram.com/vayammedia"
        ],
        "description": "Vayam Media is a growth-driven digital marketing agency specializing in Google Ads, Meta Ads, Performance Marketing, SEO, Shopify & Website Development, Branding, and AI Automation."
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vayammedia.com/#localbusiness",
        "name": "Vayam Media",
        "url": "https://vayammedia.com",
        "telephone": "+917976439089",
        "email": "avadeshagarwal2@gmail.com",
        "priceRange": "$$$",
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302017",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Churu",
            "addressRegion": "Rajasthan",
            "postalCode": "331001",
            "addressCountry": "IN"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing & Performance Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads Management",
                "description": "High-converting PPC search, shopping, display, and YouTube campaigns."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Meta Ads (Facebook & Instagram)",
                "description": "Scalable paid social campaigns engineered for ROI."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Marketing",
                "description": "Full-funnel digital growth and acquisition strategies."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO (Search Engine Optimization)",
                "description": "Organic search visibility compounding long-term traffic and leads."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Development",
                "description": "Custom high-performance Shopify e-commerce store development."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Development & Landing Pages",
                "description": "High-converting bespoke website design and CRO landing pages."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
