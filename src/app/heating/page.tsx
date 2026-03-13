import type { Metadata } from 'next';
import { HeatingServicesPage } from './HeatingServicesPage';

export const metadata: Metadata = {
  title: 'Heating Services NYC | Furnace Repair & Installation Manhattan',
  description: 'Expert heating services in NYC. Furnace repair, installation, heat pumps, and boiler services. 24/7 emergency heating repairs available.',
  keywords: 'heating repair NYC, furnace installation Manhattan, heat pump service, boiler repair Brooklyn, emergency heating NYC',
};

export default function HeatingPage() {
  return <HeatingServicesPage />;
}
