import type { Metadata } from 'next';
import { AboutPage } from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Coria Heating & Air Conditioning | NYC HVAC Company',
  description: 'Learn about Coria Heating & Air Conditioning, a family-owned HVAC company serving NYC for over 40 years. Trusted heating and cooling professionals.',
  keywords: 'about HVAC company NYC, family owned HVAC, Coria Heating, HVAC company Manhattan, HVAC professionals Brooklyn',
};

export default function AboutPageRoute() {
  return <AboutPage />;
}
