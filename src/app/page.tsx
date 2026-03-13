'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  ArrowRight,
  Snowflake,
  Flame,
  Wind,
  Shield,
  Star,
  Clock,
  Award,
  Users,
  DollarSign,
  ChevronDown,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY, SERVICES, WHY_CHOOSE_US, TESTIMONIALS, BRANDS } from '@/lib/constants';
import { Button, Card, Badge, Container, Section } from '@/components/ui';

/* ─── Icon map ─── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Snowflake,
  Flame,
  Wind,
  Shield,
  Users,
  Award,
  Clock,
  Star,
  DollarSign,
};

/* ─── Service image map ─── */
const serviceImageMap: Record<string, string> = {
  cooling: '/images/cooling-ac.jpg',
  heating: '/images/heating-system.jpg',
  'indoor-air-quality': '/images/air-quality.jpg',
  'maintenance-plans': '/images/maintenance.jpg',
};

/* ─── Stats ─── */
const stats = [
  { value: '40+', label: 'Years Experience', icon: Award },
  { value: '5', label: 'Boroughs Served', icon: MapPin },
  { value: '24/7', label: 'Emergency Service', icon: Clock },
  { value: '100%', label: 'Satisfaction', icon: Star },
];

/* ─── Animation variants ─── */
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ─── Section heading component ─── */
function SectionHeading({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="text-center mb-14"
    >
      {badge && (
        <motion.div variants={fadeUp} className="mb-4">
          <Badge variant="primary" size="md">
            {badge}
          </Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ─── Animated counter ─── */
function AnimatedCounter({ value, label, icon: Icon }: { value: string; label: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      className="text-center group"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#830f14]/15 border border-[#830f14]/20 flex items-center justify-center group-hover:bg-[#830f14]/25 transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#830f14]" />
      </div>
      <span className="block text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-poppins)]">
        {value}
      </span>
      <p className="text-gray-400 mt-1 text-sm tracking-wide uppercase">{label}</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════ */
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <Image
            src="/images/hero-hvac.jpg"
            alt="HVAC technician on NYC rooftop"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[#0a0a0f]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]/40" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-bg pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#830f14]/15 rounded-full blur-[160px] pointer-events-none" />

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full">
          <Container className="pt-24 pb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <Badge variant="primary" size="md" className="backdrop-blur-sm">
                  {COMPANY.yearsInBusiness}+ Years Serving NYC
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight font-[family-name:var(--font-poppins)]"
              >
                Premium HVAC for{' '}
                <span className="gradient-text-primary">New York City</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Family-owned experts delivering fast, reliable heating &amp; cooling solutions
                across all five boroughs. Your comfort is our legacy.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="btn-glow" href="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" href={`tel:${COMPANY.phoneRaw}`} icon={<Phone className="w-5 h-5" />}>
                  {COMPANY.phone}
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#830f14]" />
                  Licensed &amp; Insured
                </span>
                <span className="hidden sm:inline text-gray-600">|</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#830f14]" />
                  Free Estimates
                </span>
                <span className="hidden sm:inline text-gray-600">|</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#830f14]" />
                  24/7 Emergency
                </span>
              </motion.div>
            </motion.div>
          </Container>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator"
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ──────────── STATS BAR ──────────── */}
      <Section background="surface" className="!py-12 border-y border-[#2a2a3a]/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ──────────── SERVICES ──────────── */}
      <Section background="dark">
        <Container>
          <SectionHeading
            badge="What We Do"
            title="Our HVAC Services"
            subtitle="Comprehensive heating and cooling solutions tailored for New York City homes and businesses"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Shield;
              const imageSrc = serviceImageMap[service.slug];

              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Card
                    variant="glass"
                    hover
                    padding="none"
                    className="h-full service-card group overflow-hidden"
                  >
                    {/* Card image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 rounded-xl glass-primary flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1 font-[family-name:var(--font-poppins)]">
                        {service.title}
                      </h3>
                      <p className="text-[#830f14] text-xs font-medium uppercase tracking-wider mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {service.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#830f14] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#830f14] transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* ──────────── COMFORT SPLIT ──────────── */}
      <Section background="surface" className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden image-shine">
                <Image
                  src="/images/comfort-family.jpg"
                  alt="Family enjoying comfortable home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0f]/40 via-transparent to-transparent" />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:right-6 glass-strong rounded-xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#830f14] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Trusted by NYC</p>
                    <p className="text-gray-400 text-xs">{COMPANY.yearsInBusiness}+ years of service</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Badge variant="primary" size="md" className="mb-4">
                  Your Comfort, Our Priority
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-poppins)]"
              >
                Keeping NYC{' '}
                <span className="gradient-text-primary">Comfortable</span>{' '}
                Since 1984
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 text-lg leading-relaxed mb-6"
              >
                From the sweltering summers to the freezing winters, Coria Heating &amp; AC
                has been the name New Yorkers trust. We combine decades of expertise with
                modern technology to keep your home at the perfect temperature year-round.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 leading-relaxed mb-8"
              >
                As a family-owned business, we understand that your home is your sanctuary.
                That&apos;s why we deliver personalized service, transparent pricing, and
                solutions that last&mdash;backed by our 100% satisfaction guarantee.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button size="lg" href="/contact">
                  Schedule Service
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="ghost" href="/about">
                  About Our Story
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ──────────── WHY CHOOSE US ──────────── */}
      <Section background="dark">
        <Container>
          <SectionHeading
            badge="The Coria Difference"
            title="Why Choose Coria Heating & AC"
            subtitle="Experience the difference of working with a family-owned business that puts your comfort first"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon] || Star;
              return (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card
                    variant="bordered"
                    padding="lg"
                    hover
                    className="h-full group relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#830f14]/0 to-[#830f14]/0 group-hover:from-[#830f14]/5 group-hover:to-transparent transition-all duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-[#830f14]/10 border border-[#830f14]/20 flex items-center justify-center mb-5 group-hover:bg-[#830f14]/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-[#830f14]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* ──────────── TEAM IMAGE BREAK ──────────── */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/team.jpg"
          alt="Coria Heating & AC team with service van"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/90 via-[#0a0a0f]/50 to-[#0a0a0f]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-[#830f14] font-medium text-sm uppercase tracking-widest mb-3"
              >
                Our Team
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-poppins)]"
              >
                Real People. Real <span className="gradient-text-primary">Expertise.</span>
              </motion.h2>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* ──────────── TESTIMONIALS ──────────── */}
      <Section background="dark">
        <Container>
          <SectionHeading
            badge="Reviews"
            title="What Our Customers Say"
            subtitle="Trusted by thousands of homeowners across New York City"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeUp}>
                <Card variant="glass" padding="lg" className="h-full relative">
                  {/* Quotation mark */}
                  <span className="absolute top-4 right-6 text-6xl text-[#830f14]/15 font-serif leading-none select-none">
                    &ldquo;
                  </span>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#830f14] to-[#5a0b0d] flex items-center justify-center shadow-lg shadow-[#830f14]/20">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ──────────── SERVICE AREA ──────────── */}
      <Section background="surface">
        <Container>
          <SectionHeading
            title="Serving All Five Boroughs & Beyond"
            subtitle="Wherever you are in the NYC metro area, we&rsquo;ve got you covered"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {[...COMPANY.boroughs, 'Nassau County', 'New Jersey'].map((area) => (
              <motion.div key={area} variants={scaleIn}>
                <Badge
                  variant="secondary"
                  size="md"
                  className="text-base px-6 py-2.5 hover:bg-[#830f14]/20 hover:border-[#830f14]/30 transition-colors duration-300 cursor-default"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#830f14]" />
                  {area}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ──────────── BRANDS ──────────── */}
      <Section background="dark" className="!py-12">
        <Container>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-xs uppercase tracking-[0.2em] mb-8"
          >
            Authorized Dealer Of
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            {BRANDS.map((brand) => (
              <motion.span
                key={brand}
                variants={fadeIn}
                className="text-gray-500 text-lg font-medium hover:text-white transition-colors duration-300 cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ──────────── CTA BANNER ──────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* BG gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />
        <div className="absolute inset-0 noise-bg pointer-events-none" />

        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#830f14]/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#830f14]/8 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]"
            >
              Ready to Stay{' '}
              <span className="gradient-text-primary">Comfortable?</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-300/80 mb-10 text-lg max-w-xl mx-auto leading-relaxed"
            >
              Get in touch with our expert team for a free, no-obligation quote on any
              HVAC service.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="btn-glow" href="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" href={`tel:${COMPANY.phoneRaw}`} icon={<Phone className="w-5 h-5" />}>
                {COMPANY.phone}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
