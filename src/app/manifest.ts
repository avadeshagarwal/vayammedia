import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vayam Media — Growth Driven Digital Marketing Agency",
    short_name: "Vayam Media",
    description:
      "Growth Driven Digital Marketing Agency founded by Avadesh Agarwal. Google Ads, Meta Ads, Performance Marketing, SEO, Shopify Development, Branding.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf8",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
