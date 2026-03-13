'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Clock, DollarSign, Wrench, CheckCircle, Star, Zap, Thermometer, Settings, FileCheck, Wind, Droplets } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { Button, Card, Badge, Container, Section } from '@/components/ui';

const plans = [
  {
    name: 'Silver',
    description: 'Essential maintenance for budget-conscious homeowners',
    price: '$19.99',
    period: '/mo',
    features: [
      '1 annual tune-up visit',
      '15% discount on repairs',
      'Priority scheduling',
      'Filter replacement discounts',
      'Seasonal service reminders',
    ],
    popular: false,
  },
  {
    name: 'Gold',
    description: 'Complete coverage for optimal year-round performance',
    price: '$34.99',
    period: '/mo',
    features: [
      '2 annual tune-ups (spring & fall)',
      '20% discount on all repairs',
      'Same-day service availability',
      'Free filter replacements',
      'Extended parts warranty',
      '24/7 emergency hotline',
    ],
    popular: true,
  },
  {
    name: 'Platinum',
    description: 'Premium protection for total peace of mind',
    price: '$54.99',
    period: '/mo',
    features: [
      'Unlimited tune-up visits',
      '25% discount on all repairs',
      '4-hour emergency response',
      'Free filter replacements',
      'Full parts & labor warranty',
      'Waived diagnostic fees',
      'Annual loyalty credit ($50)',
    ],
    popular: false,
  },
];

const benefits = [
  {
    title: 'Lower Energy Bills',
    description: 'Well-maintained systems run up to 25% more efficiently, saving you money every month.',
    icon: DollarSign,
  },
  {
    title: 'Fewer Breakdowns',
    description: 'Regular maintenance catches small issues before they become expensive emergency repairs.',
    icon: Wrench,
  },
  {
    title: 'Extended Equipment Life',
    description: 'Proper maintenance can add 5-10 years to your HVAC system\'s lifespan.',
    icon: Shield,
  },
  {
    title: 'Priority Response',
    description: 'Plan members get priority scheduling and faster emergency response times.',
    icon: Clock,
  },
];

const includedServices = [
  { label: 'Complete system inspection', icon: FileCheck },
  { label: 'Thermostat calibration', icon: Thermometer },
  { label: 'Filter inspection & replacement', icon: Wind },
  { label: 'Electrical connections check', icon: Zap },
  { label: 'Refrigerant level check', icon: Settings },
  { label: 'Heat exchanger inspection', icon: Shield },
  { label: 'Blower motor cleaning', icon: Wind },
  { label: 'Condensate drain cleaning', icon: Droplets },
  { label: 'Safety controls testing', icon: CheckCircle },
  { label: 'Performance optimization', icon: Star },
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

export function MaintenancePlansPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <Image
          src="/images/maintenance.jpg"
          alt="HVAC technician performing maintenance"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/80 to-[#0a0a0f]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/40" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="primary" size="md">
                Maintenance Plans
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Protect Your <span className="gradient-text">HVAC Investment</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Keep your home comfortable year-round with our comprehensive maintenance plans.
              Save money, extend equipment life, and enjoy priority service when you need it most.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" href="/contact">
                Choose Your Plan
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
                <Shield className="w-5 h-5 text-[#830f14]" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#830f14]" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#830f14]" />
                <span>Priority Service</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Why Get a Maintenance Plan */}
      <Section background="dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" size="md" className="mb-4">
              The Smart Choice
            </Badge>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Get a Maintenance Plan?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Regular HVAC maintenance pays for itself — and then some.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card variant="glass" hover padding="lg" className="service-card h-full text-center">
                    <div className="w-14 h-14 rounded-xl bg-[#830f14]/20 flex items-center justify-center mb-5 mx-auto">
                      <Icon className="w-7 h-7 text-[#830f14]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Pricing Plans */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" size="md" className="mb-4">
              Simple Pricing
            </Badge>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Flexible plans to fit every budget. All plans include comprehensive tune-ups and priority service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={plan.popular ? 'md:-mt-4 md:mb-[-16px]' : ''}
              >
                <Card
                  variant="glass"
                  padding="lg"
                  className={`h-full relative glass ${
                    plan.popular
                      ? 'border-2 border-[#830f14] shadow-lg shadow-[#830f14]/20 glass-strong'
                      : 'border border-[#2a2a3a]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge variant="primary" size="md">
                        <Star className="w-3.5 h-3.5 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="text-center mb-8 pt-2">
                    <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 text-lg">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#830f14]' : 'text-gray-500'}`} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    fullWidth
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="lg"
                    href="/contact"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section background="dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" size="md" className="mb-4">
              Comprehensive Care
            </Badge>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What&apos;s Included in Every Tune-Up
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our thorough maintenance covers every critical aspect of your HVAC system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {includedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card variant="glass" padding="md" className="glass flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#830f14]/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#830f14]" />
                    </div>
                    <span className="text-gray-300 font-medium">{service.label}</span>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Benefits Section with Image */}
      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" size="md" className="mb-4">
                Peace of Mind
              </Badge>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Comfort You Can <span className="gradient-text">Count On</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                With a {COMPANY.shortName} maintenance plan, you never have to worry about
                unexpected breakdowns or costly emergency repairs. Our certified technicians
                keep your system running at peak performance, so you can focus on what matters most.
              </p>

              <div className="space-y-5">
                {[
                  { text: 'No surprise breakdowns during extreme weather', icon: Thermometer },
                  { text: 'Lower monthly energy bills year-round', icon: DollarSign },
                  { text: 'Extended equipment warranty protection', icon: Shield },
                  { text: 'VIP scheduling — skip the wait', icon: Clock },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#830f14]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#830f14]" />
                    </div>
                    <span className="text-gray-300 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/comfort-family.jpg"
                  alt="Family enjoying reliable home comfort"
                  fill
                  className="object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 via-transparent to-transparent" />
              </div>
              {/* Floating testimonial card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-4 md:left-6 max-w-xs"
              >
                <Card variant="glass" padding="md" className="glass-strong">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    &quot;The Gold plan has saved us hundreds. No more surprise repairs!&quot;
                  </p>
                  <p className="text-xs text-gray-500 mt-2">— Michael R., Manhattan</p>
                </Card>
              </motion.div>
            </motion.div>
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
              Start Protecting Your <span className="gradient-text">Investment</span> Today
            </h2>
            <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
              Join hundreds of NYC homeowners who trust {COMPANY.shortName} to keep
              their homes comfortable all year long.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="/contact">
                Sign Up for a Plan
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
