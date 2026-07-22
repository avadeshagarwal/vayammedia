import { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vayam Media, founded by Avadesh Agarwal. A performance marketing & digital growth agency based in Jaipur, Churu, and Remote globally.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Vayam Media — Performance Marketing Agency',
    description: 'Founded by Avadesh Agarwal. Data-driven growth, transparency, and relentless execution for ambitious brands.',
    url: 'https://vayammedia.com/about',
  },
};

export default function About() {
  return <AboutPage />;
}
