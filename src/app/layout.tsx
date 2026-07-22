import type { Metadata } from "next";
import { archivoBlack, inter, instrumentSerif } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vayam Media — Growth Driven Digital Marketing Agency",
  description:
    "Vayam Media is a growth-driven digital marketing agency. Google Ads, Meta Ads, Performance Marketing, SEO, Development, Branding — engineered for results.",
  openGraph: {
    title: "Vayam Media — Fuel your digital growth.",
    description:
      "Growth-driven digital marketing agency. Engineered for results, measured properly.",
    url: "https://vayammedia.com",
    siteName: "Vayam Media",
    type: "website",
  },
  authors: [{ name: "Avadesh Agarwal", url: "https://instagram.com/vayammedia" }],
  twitter: {
    card: "summary_large_image",
    title: "Vayam Media — Fuel your digital growth.",
    description:
      "Growth-driven digital marketing agency. Engineered for results, measured properly.",
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
