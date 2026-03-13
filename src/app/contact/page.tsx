import type { Metadata } from 'next';
import { ContactPage } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Coria Heating & Air Conditioning | NYC',
  description: 'Contact Coria Heating & Air Conditioning for HVAC services in NYC. Get a free quote for heating, cooling, or air quality services. Call (718) 521-4904.',
  keywords: 'contact HVAC NYC, heating contractor Manhattan, AC repair Brooklyn, HVAC quote NYC',
};

export default function ContactPageRoute() {
  return <ContactPage />;
}
