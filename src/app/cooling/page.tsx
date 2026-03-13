import type { Metadata } from 'next';
import { CoolingServicesPage } from './CoolingServicesPage';

export const metadata: Metadata = {
  title: 'Cooling & AC Services NYC | AC Repair & Installation Manhattan',
  description: 'Expert cooling and AC services in NYC. AC repair, installation, maintenance, and PTAC units. Authorized Ice Air dealer serving Manhattan, Brooklyn, and all boroughs.',
  keywords: 'AC repair NYC, AC installation Manhattan, cooling services Brooklyn, PTAC units NYC, ductless mini-split',
};

export default function CoolingPage() {
  return <CoolingServicesPage />;
}
