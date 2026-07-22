import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with founder Avadesh Agarwal & the Vayam Media team. Contact details: +91 79764 39089, avadeshagarwal2@gmail.com. Offices in Jaipur, Churu, and Remote.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Vayam Media — Start a Project",
    description: "Ready to scale your brand? Tell us about your project and we will respond within 24 hours.",
    url: "https://vayammedia.com/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
