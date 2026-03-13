'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/constants';
import { Container } from '@/components/ui';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2a2a3a]">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#830f14]">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <span className="text-lg font-semibold text-white">
                {COMPANY.shortName}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Family owned and operated HVAC company serving New York and New Jersey for over {COMPANY.yearsInBusiness} years. Your comfort is our priority.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#830f14] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#830f14] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-gray-400 hover:text-[#830f14] transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#830f14] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#830f14] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/heating" className="text-gray-400 hover:text-[#830f14] transition-colors text-sm">
                  Furnace Repair & Installation
                </Link>
              </li>
              <li>
                <Link href="/cooling" className="text-gray-400 hover:text-[#830f14] transition-colors text-sm">
                  AC Repair & Installation
                </Link>
              </li>
              <li>
                <Link href="/cooling" className="text-gray-400 hover:text-[#830f14] transition-colors text-sm">
                  PTAC Units
                </Link>
              </li>
              <li>
                <Link href="/indoor-air-quality" className="text-gray-400 hover:text-[#830f14] transition-colors text-sm">
                  Duct Cleaning
                </Link>
              </li>
              <li>
                <Link href="/maintenance-plans" className="text-gray-400 hover:text-[#830f14] transition-colors text-sm">
                  Maintenance Plans
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Emergency Repairs</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#830f14] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {COMPANY.address}<br />
                  {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#830f14] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#830f14] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#830f14] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  24/7 Emergency Service<br />Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Area */}
        <div className="py-6 border-t border-[#2a2a3a]">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-gray-500 text-sm">Serving:</span>
            {COMPANY.serviceArea.map((area, index) => (
              <span
                key={area}
                className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-[#2a2a3a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-gray-400 text-sm">Google Reviews</span>
          </div>
          <p className="text-gray-500 text-sm">
            {COMPANY.licenseNumber}
          </p>
        </div>
      </Container>
    </footer>
  );
}
