import type { Metadata } from 'next';
import { IndoorAirQualityPage } from './IndoorAirQualityPageClient';

export const metadata: Metadata = {
  title: 'Indoor Air Quality Solutions NYC | Duct Cleaning & Air Purifiers',
  description: 'Breathe easier with indoor air quality solutions in NYC. Duct cleaning, humidifiers, air purifiers, and ventilation services. Improve your home\'s air today.',
  keywords: 'indoor air quality NYC, duct cleaning, air purifiers, humidifiers, ventilation NYC, air quality testing',
};

export default function IndoorAirQualityPageRoute() {
  return <IndoorAirQualityPage />;
}
