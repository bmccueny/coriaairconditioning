'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, MapPin, Users, Award, Shield, CheckCircle, Clock, Star, Heart, Wrench } from 'lucide-react';
import { COMPANY, SERVICES, WHY_CHOOSE_US } from '@/lib/constants';
import { Button, Card, Badge, Container, Section } from '@/components/ui';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  {
    title: 'Trustworthiness',
    description: 'We earn your trust through honest work, transparent pricing, and reliable service every time.',
    icon: Shield,
    color: '#830f14',
  },
  {
    title: 'Community',
    description: 'As a family-owned business, we treat every customer like part of our extended family.',
    icon: Heart,
    color: '#830f14',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every job, from simple repairs to complex installations.',
    icon: Award,
    color: '#830f14',
  },
  {
    title: 'Reliability',
    description: '24/7 emergency service means we&apos;re always there when you need us most.',
    icon: Clock,
    color: '#830f14',
  },
];

const milestones = [
  { year: '1985', title: 'Founded', description: 'Coria Heating & AC established as a family business in Harlem, NYC.' },
  { year: '1995', title: 'Expanding Reach', description: 'Grew to serve all five NYC boroughs with a dedicated team of technicians.' },
  { year: '2005', title: 'Authorized Dealer', description: 'Became an authorized Lennox and Ice Air dealer, offering premium equipment.' },
  { year: '2015', title: '30 Years Strong', description: 'Celebrated three decades of service with thousands of satisfied customers.' },
  { year: '2025', title: '40+ Years', description: 'Continuing our legacy of excellence, now serving NYC and New Jersey.' },
];

export function AboutPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <Image
          src="/images/team.jpg"
          alt="Coria HVAC team with service van"
          fill
          className="object-cover"
          priority
          quality={85}
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
                About Coria HVAC
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]"
            >
              Your Trusted NYC
              <br />
              <span className="gradient-text-primary">HVAC Company</span>
              <br />
              Since 1985
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Family-owned and operated for over 40 years, Coria Heating and Air Conditioning
              has been keeping New York City comfortable with expert heating and cooling solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" href="/contact">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" href={`tel:${COMPANY.phoneRaw}`} icon={<Phone className="w-5 h-5" />}>
                {COMPANY.phone}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Our Story Section with Image */}
      <Section background="dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Badge variant="primary" size="md" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-poppins)]">
                Four Decades of
                <br />
                <span className="gradient-text">Keeping NYC Comfortable</span>
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Founded in 1985, Coria Heating and Air Conditioning began as a small family business
                  with a simple mission: provide honest, reliable HVAC services to our NYC community.
                </p>
                <p>
                  Over the past {COMPANY.yearsInBusiness}+ years, we&apos;ve grown to become one of the most trusted HVAC companies
                  in New York City, serving thousands of homeowners across Manhattan, Brooklyn, Queens,
                  the Bronx, Staten Island, and New Jersey.
                </p>
                <p>
                  What started as a father-son operation has evolved into a team of certified technicians
                  who carry forward the same values of honesty, quality, and customer-first service that
                  defined our founding. Today, we continue to invest in the latest technology and training
                  while treating every customer like family.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#830f14]/20">
                <Image
                  src="/images/team.jpg"
                  alt="Coria HVAC team"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-strong rounded-xl p-5">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-white">{COMPANY.yearsInBusiness}+</div>
                        <p className="text-gray-400 text-xs mt-1">Years of Service</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">5</div>
                        <p className="text-gray-400 text-xs mt-1">NYC Boroughs</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">24/7</div>
                        <p className="text-gray-400 text-xs mt-1">Emergency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values Section with Glass Cards */}
      <Section background="surface">
        <div className="noise-bg">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="primary" size="md" className="mb-4">
                What Drives Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
                Our <span className="gradient-text-primary">Core Values</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                The principles that guide everything we do, from the first call to the final inspection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="service-card"
                  >
                    <div className="glass rounded-2xl p-8 h-full text-center relative group hover:border-[#830f14]/30 transition-all duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-[#830f14]/15 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#830f14]/25 transition-colors">
                        <Icon className="w-8 h-8 text-[#830f14]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-poppins)]">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </div>
      </Section>

      {/* Timeline / Milestones */}
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
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
              <span className="gradient-text">{COMPANY.yearsInBusiness}+ Years</span> of Milestones
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A legacy built on trust, expertise, and an unwavering commitment to our community.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#830f14] via-[#830f14]/50 to-transparent hidden sm:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="glass rounded-xl p-6 inline-block">
                      <div className="text-[#830f14] font-bold text-2xl mb-1 font-[family-name:var(--font-poppins)]">
                        {milestone.year}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-[#830f14] border-4 border-[#0a0a0f] z-10 hidden sm:block" />

                  <div className="flex-1 hidden sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Expert Team & Credentials */}
      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Badge variant="primary" size="md" className="mb-4">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-[family-name:var(--font-poppins)]">
                Expert Technicians,
                <br />
                <span className="gradient-text-primary">Exceptional Service</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Certified HVAC technicians with 40+ years of combined experience',
                  'Ongoing training on the latest HVAC technologies',
                  'Lennox and Ice Air authorized dealer',
                  'Fully stocked service vehicles for fast repairs',
                  'Background-checked and drug-tested technicians',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#830f14]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#830f14]" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/maintenance.jpg"
                  alt="HVAC technician performing maintenance"
                  width={600}
                  height={300}
                  className="object-cover w-full h-[280px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/50 to-transparent" />
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-5 font-[family-name:var(--font-poppins)]">
                  Licenses & Certifications
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: Shield, text: 'Licensed & Insured Contractors' },
                    { icon: Award, text: 'Lennox Authorized Dealer' },
                    { icon: Star, text: 'Ice Air Authorized Dealer' },
                    { icon: CheckCircle, text: 'EPA Certified Technicians' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-[#830f14]" />
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Service Area with Borough Badges */}
      <Section background="dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="primary" size="md" className="mb-4">
              Coverage
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
              Our <span className="gradient-text-primary">Service Area</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Proudly serving all five NYC boroughs and beyond
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {COMPANY.serviceArea.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, type: 'spring', stiffness: 200 }}
              >
                <div className="glass rounded-xl px-8 py-4 text-center hover:border-[#830f14]/40 transition-all duration-300 group cursor-default">
                  <MapPin className="w-5 h-5 text-[#830f14] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-lg">{area}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/comfort-family.jpg"
          alt="Comfortable family in living room"
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#830f14]/30 via-transparent to-[#830f14]/30" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
              Ready to <span className="gradient-text-primary">Work with Us</span>?
            </h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Experience the difference {COMPANY.yearsInBusiness}+ years of dedicated service makes.
              Contact us today for all your heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="/contact">
                Get In Touch
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
