import { Metadata } from 'next';
import ServicesPage from './ServicesPage';

export const metadata: Metadata = {
  title: 'Services | Vayam Media',
  description: 'From first click to final conversion — we engineer every touchpoint for maximum impact. Explore our growth-driven services.',
};

export default function Page() {
  return <ServicesPage />;
}
