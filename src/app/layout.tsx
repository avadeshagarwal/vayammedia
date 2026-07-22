import type { Metadata } from "next";
import { archivoBlack, inter, instrumentSerif } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vayammedia.com"),
  title: {
    default: "Vayam Media — Growth Driven Digital Marketing Agency",
    template: "%s | Vayam Media",
  },
  description:
    "Vayam Media is a growth-driven digital marketing agency founded by Avadesh Agarwal. Google Ads, Meta Ads, Performance Marketing, SEO, Shopify Development, Branding, AI Automation.",
  keywords: [
    "Vayam Media",
    "Avadesh Agarwal",
    "Digital Marketing Agency India",
    "Performance Marketing Agency",
    "Google Ads Agency Jaipur",
    "Meta Ads Agency",
    "SEO Services Rajasthan",
    "Shopify Development Agency",
    "Website Development",
    "Landing Page CRO",
    "AI Automation Agency",
  ],
  authors: [{ name: "Avadesh Agarwal", url: "https://instagram.com/vayammedia" }],
  creator: "Avadesh Agarwal",
  publisher: "Vayam Media",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vayam Media — Growth Driven Digital Marketing Agency",
    description:
      "Engineered for results. Performance marketing, Google Ads, Meta Ads, SEO, Shopify, and Branding.",
    url: "https://vayammedia.com",
    siteName: "Vayam Media",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vayam Media — Fuel your digital growth.",
    description:
      "Growth-driven digital marketing agency founded by Avadesh Agarwal.",
    creator: "@vayammedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body>
        <SmoothScroll>
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
