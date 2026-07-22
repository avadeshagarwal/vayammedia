import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Vayam Media | Growth Driven Digital Marketing Agency',
  description: 'Vayam Media is a results-focused, growth-driven digital marketing agency specializing in Performance Marketing, SEO, Shopify Development, and Branding.',
};

export default function Page() {
  return <HomePage />;
}
