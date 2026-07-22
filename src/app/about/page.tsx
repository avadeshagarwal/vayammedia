import { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About | Vayam Media',
  description: 'Growth Driven Digital Marketing Agency based in Mumbai, Delhi, Bangalore.',
};

export default function About() {
  return <AboutPage />;
}
