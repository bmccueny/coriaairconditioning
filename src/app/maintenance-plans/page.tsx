import type { Metadata } from 'next';
import { MaintenancePlansPage } from './MaintenancePlansPageClient';

export const metadata: Metadata = {
  title: 'HVAC Maintenance Plans NYC | Service Agreements | Coria Heating & AC',
  description: 'Protect your HVAC investment with our maintenance plans. Annual tune-ups, priority service, and discounted repairs. Save money and extend equipment life.',
  keywords: 'HVAC maintenance plans NYC, service agreements, annual HVAC maintenance, furnace maintenance NYC, AC maintenance plans',
};

export default function MaintenancePlansPageRoute() {
  return <MaintenancePlansPage />;
}
