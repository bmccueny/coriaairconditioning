'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Flame, Wrench, Zap, Thermometer, AlertTriangle, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { COMPANY, BRANDS } from '@/lib/constants';
import { Button, Card, Badge, Container, Section } from '@/components/ui';

const heatingServices = [
  {
    title: 'Furnace Repair',
    description: 'Fast and reliable furnace repair services. We diagnose and fix all furnace issues to restore your home\'s warmth.',
    icon: Wrench,
    features: ['Same-day repairs', 'All furnace brands', 'Emergency service', 'Upfront pricing'],
  },
  {
    title: 'Furnace Installation',
    description: 'Professional furnace installation with top-quality Lennox systems. Expert installation for optimal performance.',
    icon: Zap,
    features: ['Free estimates', 'Lennox authorized dealer', 'Financing available', 'Professional installation'],
  },
  {
    title: 'Heat Pump Service',
    description: 'Heat pump repair, installation, and maintenance for year-round comfort. Efficient heating and cooling solutions.',
    icon: Thermometer,
    features: ['Repair & installation', 'Maintenance plans', 'Energy efficient', 'All brands serviced'],
  },
  {
    title: 'Boiler Service',
    description: 'Expert boiler repair and installation services. Keep your home warm with reliable boiler systems.',
    icon: Flame,
    features: ['Boiler repair', 'New boiler installation', 'Radiator service', '24/7 emergency'],
  },
  {
    title: 'Emergency Heating Repairs',
    description: '24/7 emergency heating repairs when you need them most. Fast response to restore your heat.',
    icon: AlertTriangle,
    features: ['24/7 availability', 'Fast response', 'All repairs', 'Guaranteed work'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HeatingServicesPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
        <Image
          src="/images/heating-system.jpg"
          alt="Modern heating system installation"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/80 to-[#0a0a0f]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/40" />

        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 max-w-3xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="primary" size="md">
                <Flame className="w-4 h-4" />
                Heating Services
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              Expert{' '}
              <span className="gradient-text">Heating Services</span>{' '}
              in NYC
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Keep your NYC home warm and comfortable all winter long. Expert furnace repair,
              heat pump, and boiler services from trusted professionals with {COMPANY.yearsInBusiness}+ years of experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" href="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" href={`tel:${COMPANY.phoneRaw}`} icon={<Phone className="w-5 h-5" />}>
                {COMPANY.phone}
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-8 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#830f14]" />
                <span className="text-sm font-medium">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#830f14]" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#830f14]" />
                <span className="text-sm font-medium">{COMPANY.yearsInBusiness}+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Services Section */}
      <Section background="dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="md" className="mb-4">
              Our Services
            </Badge>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="gradient-text">Heating Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From emergency repairs to full system installations, we keep NYC warm.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heatingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Card variant="glass" hover padding="lg" className="service-card h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-[#830f14]/15 border border-[#830f14]/20 flex items-center justify-center mb-5 group-hover:bg-[#830f14]/25 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#830f14]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#830f14] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Split Layout: Why Professional + Comfort Image */}
      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Badge variant="primary" size="md" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="gradient-text">Professional</span> Heating Service
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                When it comes to your home&apos;s heating system, professional service isn&apos;t just a luxury&mdash;it&apos;s a necessity.
                Our certified technicians ensure your system operates safely, efficiently, and reliably.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Safety', text: 'Professional technicians identify and fix gas leaks, carbon monoxide risks, and electrical hazards' },
                  { label: 'Efficiency', text: 'Proper installation and maintenance can reduce energy bills by up to 30%' },
                  { label: 'Longevity', text: 'Regular professional service extends the life of your heating system' },
                  { label: 'Warranty', text: 'Many manufacturers require professional service to maintain warranty coverage' },
                  { label: 'Peace of Mind', text: 'Licensed and insured professionals stand behind their work' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#830f14] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      <span className="text-white font-semibold">{item.label}:</span> {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/comfort-family.jpg"
                  alt="Family enjoying a warm and comfortable home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
              </div>

              {/* Floating glass card over image */}
              <div className="absolute -bottom-6 -left-6 right-12 md:right-auto md:w-72">
                <Card variant="glass" padding="md" className="glass-strong">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#830f14]/20 flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-[#830f14]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Trusted by NYC</p>
                      <p className="text-gray-400 text-xs">{COMPANY.yearsInBusiness}+ years serving the community</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Maintenance Section with Background Noise */}
      <section className="relative py-20 md:py-28 noise-bg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <Badge variant="primary" size="md" className="mb-4">
              Maintenance
            </Badge>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              The Importance of <span className="gradient-text">Heating Maintenance</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Regular maintenance is the key to reliable performance and lower energy costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Prevent Breakdowns',
                description: 'Regular maintenance catches small problems before they become expensive emergency repairs. Stay ahead of issues.',
                icon: Shield,
              },
              {
                title: 'Improve Efficiency',
                description: 'A well-maintained heating system uses less energy, saving you money on monthly utility bills year after year.',
                icon: Zap,
              },
              {
                title: 'Extend Equipment Life',
                description: 'Proper maintenance can add 5-10 years to your heating system\'s lifespan, protecting your investment.',
                icon: Clock,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                >
                  <Card variant="glass" hover padding="lg" className="service-card h-full text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#830f14]/15 border border-[#830f14]/20 flex items-center justify-center mb-5 mx-auto">
                      <Icon className="w-7 h-7 text-[#830f14]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" href="/maintenance-plans">
              View Maintenance Plans
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Brands Section */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-white mb-4">
              Brands We <span className="gradient-text">Service</span>
            </h2>
            <p className="text-gray-400">
              Authorized dealers and certified technicians for top HVAC brands
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {BRANDS.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Badge variant="secondary" size="md" className="glass text-base px-6 py-3">
                  {brand}
                </Badge>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section with Image Background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/team.jpg"
          alt="Coria HVAC team with service van"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/85 to-[#0a0a0f]/95" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-2xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need <span className="gradient-text">Heating Repair?</span>
            </h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              Don&apos;t wait until the cold sets in. Our expert technicians are ready to keep your home warm and comfortable. Get a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" href={`tel:${COMPANY.phoneRaw}`} icon={<Phone className="w-5 h-5" />}>
                {COMPANY.phone}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
