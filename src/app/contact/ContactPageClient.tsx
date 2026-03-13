'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/constants';
import { Button, Card, Badge, Container, Section, Input, Textarea, Select } from '@/components/ui';

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

const serviceOptions = SERVICES.map((s) => ({ value: s.slug, label: s.title }));

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.serviceType,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <Image
          src="/images/hero-hvac.jpg"
          alt="HVAC technician on NYC rooftop"
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
            className="relative z-10 text-center max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="primary" size="md">
                Contact Us
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]"
            >
              Let&apos;s Keep You
              <br />
              <span className="gradient-text-primary">Comfortable</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Get in touch with our expert team for all your HVAC needs.
              We&apos;re here to help with heating, cooling, and air quality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-6 text-gray-300"
            >
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 text-white hover:text-[#830f14] transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{COMPANY.phone}</span>
              </a>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#830f14]" />
                <span>24/7 Emergency Available</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Emergency Banner */}
      <div className="relative bg-[#830f14] py-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#830f14] via-[#a01118] to-[#830f14]" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-white"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
              </span>
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold text-lg">HVAC Emergency?</span>
            </div>
            <span className="text-white/80 hidden sm:inline">|</span>
            <span className="text-white/90">We offer 24/7 emergency repairs &mdash; no extra charge for calls.</span>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-[#830f14] font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>
        </Container>
      </div>

      {/* Contact Form + Info Section */}
      <Section background="dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-strong rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-[family-name:var(--font-poppins)]">
                  Send Us a <span className="gradient-text-primary">Message</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3 font-[family-name:var(--font-poppins)]">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                      Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Full Name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="(718) 555-1234"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                      <Select
                        label="Service Type"
                        options={serviceOptions}
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        required
                      />
                    </div>

                    <Textarea
                      label="Message"
                      placeholder="Tell us about your HVAC needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />

                    <Button
                      type="submit"
                      size="lg"
                      fullWidth
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Contact Details Card */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6 font-[family-name:var(--font-poppins)]">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#830f14]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#830f14]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400">
                        {COMPANY.address}<br />
                        {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#830f14]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#830f14]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a
                        href={`tel:${COMPANY.phoneRaw}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#830f14]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#830f14]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#830f14]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#830f14]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM<br />
                        Saturday: 9:00 AM &ndash; 4:00 PM<br />
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 font-[family-name:var(--font-poppins)]">
                  Our Services
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 text-[#830f14] group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-sm">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Google Maps Section */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <Badge variant="primary" size="md" className="mb-4">
              Find Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
              Our <span className="gradient-text-primary">Location</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Serving Manhattan, Brooklyn, Queens, Bronx, Staten Island, and New Jersey from our Harlem headquarters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.2!2d-73.9447!3d40.8178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5f31e2c8b51%3A0x5b7e8e1b1a0b6b0a!2s204+W+140th+St%2C+New+York%2C+NY+10030!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coria Heating and Air Conditioning location"
              className="w-full"
            />
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
