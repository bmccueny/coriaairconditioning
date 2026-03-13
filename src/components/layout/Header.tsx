'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, MapPin, Clock } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Heating', href: '/heating' },
  { name: 'Cooling', href: '/cooling' },
  { name: 'Air Quality', href: '/indoor-air-quality' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const servicesDropdown = [
  { name: 'Heating Services', href: '/heating', desc: 'Furnace, heat pump & boiler' },
  { name: 'Cooling Services', href: '/cooling', desc: 'AC repair, PTAC & mini-split' },
  { name: 'Indoor Air Quality', href: '/indoor-air-quality', desc: 'Duct cleaning & filtration' },
  { name: 'Maintenance Plans', href: '/maintenance-plans', desc: 'Protect your investment' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'
      }`}>
        <div className="h-full bg-[#830f14] flex items-center">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between text-white/90 text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                <span className="hidden sm:inline">{COMPANY.address}, {COMPANY.city}, {COMPANY.state}</span>
                <span className="sm:hidden">NYC</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                24/7 Emergency Service
              </span>
            </div>
            <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-[#0a0a0f]/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5'
            : 'top-10 bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="text-2xl lg:text-3xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight">
                Coria
              </span>
              <span className="hidden sm:block ml-2.5 pl-2.5 border-l border-white/20 leading-tight">
                <span className="block text-[11px] lg:text-xs font-medium text-gray-300 tracking-wide uppercase">Heating &</span>
                <span className="block text-[11px] lg:text-xs font-medium text-gray-300 tracking-wide uppercase -mt-0.5">Air Conditioning</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 xl:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#830f14] rounded-full group-hover:w-4/5 transition-all duration-300" />
                </Link>
              ))}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200">
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-72 bg-[#16161d] border border-[#2a2a3a] rounded-xl shadow-2xl shadow-black/60 overflow-hidden"
                    >
                      <div className="p-2">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 rounded-lg text-sm hover:bg-[#830f14]/15 transition-colors group"
                          >
                            <span className="text-white font-medium group-hover:text-[#e63946] transition-colors">{service.name}</span>
                            <span className="block text-xs text-gray-400 mt-0.5">{service.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#830f14]/20 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#830f14]" />
                </div>
                <span className="hidden xl:inline">{COMPANY.phone}</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-[#830f14] to-[#a01820] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#830f14]/30 transition-all duration-200 hover:scale-[1.02]"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="w-10 h-10 rounded-full bg-[#830f14] flex items-center justify-center"
              >
                <Phone className="w-4 h-4 text-white" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#0a0a0f]/95 backdrop-blur-xl border-l border-white/5 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-semibold text-white font-[family-name:var(--font-poppins)]">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Services</p>
                  {servicesDropdown.map((service, i) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navigation.length + i) * 0.05 }}
                    >
                      <Link
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-300">{service.name}</span>
                        <span className="block text-xs text-gray-500 mt-0.5">{service.desc}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center gap-3 px-4 py-3 text-[#e63946] font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    {COMPANY.phone}
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-[#830f14] to-[#a01820] text-white font-semibold rounded-xl"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
