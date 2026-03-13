'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Snowflake, Wrench, Zap, Shield, CheckCircle, Clock, Thermometer, Star } from 'lucide-react';
import { COMPANY, BRANDS } from '@/lib/constants';
import { Button, Card, Badge, Container, Section } from '@/components/ui';

const coolingServices = [
  {
    title: 'AC Repair',
    description: 'Fast and reliable air conditioning repair services. We diagnose and fix all AC issues to restore your cool.',
    icon: Wrench,
    features: ['Same-day service', 'All brands', 'Emergency repairs', 'Upfront pricing'],
  },
  {
    title: 'AC Installation',
    description: 'Professional AC installation with top-quality systems. Expert installation for optimal cooling performance.',
    icon: Zap,
    features: ['Free estimates', 'Energy efficient models', 'Financing available', 'Professional install'],
  },
  {
    title: 'AC Maintenance',
    description: 'Annual maintenance to keep your AC running efficiently. Prevent breakdowns and extend equipment life.',
    icon: Shield,
    features: ['Spring checkups', 'Filter changes', 'Performance testing', 'Priority service'],
  },
  {
    title: 'PTAC Units',
    description: 'Specialized PTAC unit sales, installation, and repair. Perfect for NYC apartments and commercial spaces.',
    icon: Thermometer,
    features: ['Ice Air authorized dealer', 'Installation included', 'All sizes', 'Brand new units'],
  },
  {
    title: 'Ductless/Mini-Split Systems',
    description: 'Energy-efficient ductless systems for homes without ductwork. Flexible cooling solutions.',
    icon: Snowflake,
    features: ['No ductwork needed', 'Zone control', 'Energy efficient', 'Professional install'],
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

export function CoolingServicesPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
        <Image
          src="/images/cooling-ac.jpg"
          alt="Modern wall-mounted air conditioning unit"
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
                <Snowflake className="w-4 h-4" />
                Cooling Services
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              Cooling &{' '}
              <span className="gradient-text">AC Services</span>{' '}
              in NYC
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Stay cool all summer long with expert air conditioning services.
              AC repair, installation, and maintenance from trusted NYC professionals with {COMPANY.yearsInBusiness}+ years of experience.
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
                <span className="text-sm font-medium">Ice Air Authorized Dealer</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#830f14]" />
                <span className="text-sm font-medium">Licensed & Insured</span>
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
              Complete <span className="gradient-text">Cooling Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From emergency AC repairs to full system installations, we keep NYC cool.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coolingServices.map((service, index) => {
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

      {/* PTAC Specialization with Image */}
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
                <Star className="w-4 h-4" />
                Authorized Dealer
              </Badge>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-white mb-6">
                PTAC Unit <span className="gradient-text">Specialists</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are authorized dealers of Ice Air PTAC (Package Terminal Air Conditioner) units&mdash;the
                industry standard for NYC apartments, hotels, and commercial buildings.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                PTAC units are the most common cooling solution in New York City buildings.
                We sell, install, and service all Ice Air models with expert precision.
              </p>

              <div className="space-y-3">
                {[
                  'New Ice Air PTAC units for sale',
                  'Professional installation included',
                  'Repair and maintenance services',
                  'All unit sizes available',
                  'Competitive pricing',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#830f14] flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
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
                  src="/images/maintenance.jpg"
                  alt="HVAC technician performing maintenance on a unit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
              </div>

              {/* Floating glass card */}
              <div className="absolute -bottom-6 -left-6 right-12 md:right-auto md:w-80">
                <Card variant="glass" padding="md" className="glass-strong">
                  <h4 className="text-white font-semibold text-sm mb-3">Why Ice Air PTAC Units?</h4>
                  <div className="space-y-2">
                    {['Designed for NYC climate', 'Energy efficient', 'Quiet operation', 'Long-lasting durability'].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Snowflake className="w-3.5 h-3.5 text-[#830f14] flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Brands Section */}
      <Section background="dark">
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

      {/* Maintenance Section with Noise Background */}
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
              The Importance of <span className="gradient-text">AC Maintenance</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Regular maintenance keeps your AC running efficiently and prevents costly breakdowns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Lower Energy Bills',
                description: 'A well-maintained AC uses less energy, saving you money on cooling costs every month throughout the season.',
                icon: Zap,
              },
              {
                title: 'Prevent Breakdowns',
                description: 'Regular maintenance catches small issues before they become expensive emergency repairs during peak heat.',
                icon: Shield,
              },
              {
                title: 'Extend Equipment Life',
                description: 'Proper maintenance can add 5-10 years to your air conditioner\'s lifespan, protecting your investment.',
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
              Need <span className="gradient-text">AC Service?</span>
            </h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              Don&apos;t sweat it. Our expert technicians are ready to keep you cool and comfortable all summer long. Get a free quote today.
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
