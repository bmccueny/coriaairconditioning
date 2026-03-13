'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Wind, Wrench, Droplets, Leaf, CheckCircle, AlertTriangle, Shield, Thermometer } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { Button, Card, Badge, Container, Section } from '@/components/ui';

const iaqServices = [
  {
    title: 'Duct Cleaning',
    description: 'Professional duct cleaning to remove dust, allergens, and contaminants from your entire HVAC system.',
    icon: Wind,
    features: ['Remove dust & debris', 'Reduce allergens', 'Improve airflow efficiency', 'Professional-grade equipment'],
  },
  {
    title: 'Humidifiers',
    description: 'Whole-home humidifier installation and maintenance to combat dry air during harsh NYC winters.',
    icon: Droplets,
    features: ['Whole-home systems', 'Automatic humidity control', 'Reduce dry skin & irritation', 'Protect wood furniture'],
  },
  {
    title: 'Air Purifiers',
    description: 'Advanced air purification systems that remove pollutants, allergens, and airborne pathogens.',
    icon: Leaf,
    features: ['HEPA filtration', 'Allergen elimination', 'Pathogen neutralization', 'Odor removal'],
  },
  {
    title: 'Ventilation',
    description: 'Proper ventilation solutions to exchange stale indoor air with fresh, filtered outdoor air.',
    icon: Thermometer,
    features: ['Fresh air exchange', 'Pollutant reduction', 'Energy-efficient ERVs', 'Code compliance'],
  },
  {
    title: 'Air Quality Testing',
    description: 'Comprehensive indoor air quality testing to identify pollutants, mold, and hidden air quality issues.',
    icon: Wrench,
    features: ['Pollutant identification', 'Expert lab analysis', 'Custom recommendations', 'Follow-up verification'],
  },
];

const healthBenefits = [
  { title: 'Reduced Allergies', description: 'Remove dust, pollen, and pet dander that trigger allergic reactions and respiratory distress.' },
  { title: 'Better Sleep Quality', description: 'Clean air with balanced humidity promotes better respiratory function and deeper, more restful sleep.' },
  { title: 'Less Illness', description: 'Air purification systems reduce the spread of airborne viruses, bacteria, and other pathogens.' },
  { title: 'Improved Comfort', description: 'Proper humidity and ventilation make your home feel more comfortable in every season.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function IndoorAirQualityPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <Image
          src="/images/air-quality.jpg"
          alt="Professional HVAC duct system"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/80 to-[#0a0a0f]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/50" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="primary" size="md">
                Indoor Air Quality Experts
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Breathe <span className="gradient-text">Cleaner, Healthier</span> Air at Home
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Professional indoor air quality solutions for NYC homes and businesses.
              From duct cleaning to advanced air purification — we make every breath count.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" href="/contact">
                Get Free IAQ Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" href={`tel:${COMPANY.phoneRaw}`} icon={<Phone className="w-5 h-5" />}>
                {COMPANY.phone}
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-6 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-[#830f14]" />
                <span>Certified IAQ Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#830f14]" />
                <span>Professional Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#830f14]" />
                <span>{COMPANY.yearsInBusiness}+ Years Experience</span>
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
            className="text-center mb-16"
          >
            <Badge variant="secondary" size="md" className="mb-4">
              Our Solutions
            </Badge>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Complete IAQ Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Everything you need for cleaner, healthier indoor air — backed by decades of expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iaqServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card variant="glass" hover padding="lg" className="service-card h-full">
                    <div className="w-14 h-14 rounded-xl bg-[#830f14]/20 flex items-center justify-center mb-5">
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

      {/* Why IAQ Matters — Split Layout with Image */}
      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/comfort-family.jpg"
                  alt="Family enjoying clean air in their comfortable home"
                  fill
                  className="object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-4 md:right-6"
              >
                <Card variant="glass" padding="md" className="glass-strong">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-yellow-500" />
                    <div>
                      <p className="text-2xl font-bold text-white">2-5x</p>
                      <p className="text-xs text-gray-400">Indoor vs outdoor<br />pollution levels</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" size="md" className="mb-4">
                Why It Matters
              </Badge>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Your Family Deserves <span className="gradient-text">Clean Air</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                The EPA ranks indoor air quality among the top 5 environmental risks to public health.
                Americans spend about 90% of their time indoors, where pollutant levels can be
                significantly higher than outside. Protect your family with professional IAQ solutions.
              </p>

              <div className="space-y-6">
                {healthBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#830f14]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-[#830f14]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Signs You Need IAQ */}
      <Section background="dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-white mb-4">
              Signs You Need IAQ Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              If you&apos;re experiencing any of these issues, it&apos;s time to call the experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Frequent allergies or asthma symptoms',
              'Dust buildup on surfaces quickly',
              'Musty or stale odors in your home',
              'Dry skin or irritated eyes',
              'Headaches when spending time at home',
              'Poor sleep quality',
              'Visible mold or mildew growth',
              'Excessive humidity or condensation',
            ].map((sign, index) => (
              <motion.div
                key={sign}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card variant="bordered" padding="md" className="glass h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#830f14] flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{sign}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#830f14]/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 noise-bg opacity-20" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Improve Your Indoor Air <span className="gradient-text">Today</span>
            </h2>
            <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
              Schedule a free consultation with our IAQ experts. We&apos;ll test your air quality
              and recommend the best solutions for your home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="/contact">
                Schedule Free Assessment
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
