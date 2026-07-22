import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Vayam Media",
  description: "Get in touch with Vayam Media. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function Page() {
  return <ContactPage />;
}
