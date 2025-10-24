"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroSectionV2 from "@/components/HeroSectionV2";
import SectionTitle from "@/components/SectionTitle";
import ServiceCardV2 from "@/components/ServiceCardV2";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import ScrollSnapObserver from "@/components/ScrollSnapObserver";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/lib/useSmoothScroll";
import { getServices, getTestimonials } from "@/lib/api.client";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Service, Testimonial } from "@/types";

export default function HomePage() {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useSmoothScroll();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, testimonialsData] = await Promise.all([
          getServices(),
          getTestimonials()
        ]);
        setServices(servicesData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // Get top 3 services for preview
  const featuredServices = services.slice(0, 3);

  const features = [
    {
      icon: "award" as const,
      title: "Certified Experts",
      description: "Certified cybersecurity experts (CEH, OSCP, CISSP, CHFI, ISO 27001 Lead Auditor)",
    },
    {
      icon: "shield" as const,
      title: "Proven Track Record",
      description: "Proven track record with startups, banks, and enterprises",
    },
    {
      icon: "clock" as const,
      title: "24/7 Monitoring",
      description: "24/7 monitoring and managed security solutions",
    },
    {
      icon: "lock" as const,
      title: "Transparent Reporting",
      description: "Transparent reporting with actionable insights",
    },
  ];

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <div 
        ref={containerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth snap-container md:block hidden"
      >
      <ScrollSnapObserver containerRef={containerRef} />
      {/* Hero Section */}
      <section className="snap-start snap-always h-screen">
        <div className="pt-16 h-full">
          <HeroSectionV2 />
        </div>
      </section>

      {/* Services Preview */}
      <section className="snap-start h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-primary/5 relative overflow-hidden py-8 md:py-0">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <AnimatedSection className="mb-8 md:mb-16">
            <SectionTitle
              title="Key Services"
              subtitle="Comprehensive cybersecurity solutions tailored to your business needs"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-8 md:mb-16 justify-items-center">
            {featuredServices.map((service, index) => (
              <ServiceCardV2 key={service.id} service={service} index={index} />
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary/10 to-purple/10 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group"
            >
              <span className="font-semibold bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                Explore All Services
              </span>
              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="snap-start h-screen flex items-center justify-center bg-background relative overflow-hidden py-8 md:py-0">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute top-1/4 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <AnimatedSection className="mb-8 md:mb-16">
            <SectionTitle
              title="Why Choose SaltedHash"
              subtitle="Trusted by industry leaders for mission-critical security"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="snap-start h-screen flex items-center justify-center bg-background py-8 md:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <AnimatedSection className="mb-8 md:mb-12">
            <SectionTitle
              title="What Our Clients Say"
              subtitle="Trusted by organizations worldwide"
              centered
            />
          </AnimatedSection>

          <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-4xl">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-start h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-card/70 relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Icon */}
            <div className="flex justify-center mb-6 md:mb-8">
              <Logo size="lg" showText={false} />
            </div>

            {/* Enhanced Content */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 relative px-4">
              <span 
                className="relative inline-block"
                style={{
                  background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #FF0080 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "text-shimmer 3s linear infinite",
                }}
              >
                Don&apos;t Wait for a Breach — Strengthen Your Security Today
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Let&apos;s secure your future together. Get a free consultation and risk assessment.
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <Link href="/contact">
                <Button size="lg" className="group px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto">
                  Book a Consultation Now
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="snap-start h-screen flex items-end justify-center bg-gradient-to-b from-card/70 via-card/80 to-card/90 relative">
        <motion.div 
          className="w-full relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <Footer />
        </motion.div>
      </section>
    </div>

    {/* Mobile/Tablet Layout - No Snap Scrolling */}
    <div className="md:hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="pt-16 w-full h-full">
          <HeroSectionV2 />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <AnimatedSection className="mb-12">
            <SectionTitle
              title="Our Security Services"
              subtitle="Comprehensive cybersecurity solutions tailored to your business needs"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-items-center">
            {featuredServices.map((service, index) => (
              <ServiceCardV2 key={service.id} service={service} index={index} />
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary/10 to-purple/10 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group"
            >
              <span className="font-semibold bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                Explore All Services
              </span>
              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute top-1/4 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <AnimatedSection className="mb-12">
            <SectionTitle
              title="Why Choose SaltedHash"
              subtitle="Trusted by industry leaders for mission-critical security"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <AnimatedSection className="mb-12">
            <SectionTitle
              title="What Our Clients Say"
              subtitle="Trusted by organizations worldwide"
              centered
            />
          </AnimatedSection>

          <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-4xl">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-background to-card/70 relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Icon */}
            <div className="flex justify-center mb-8">
              <Logo size="lg" showText={false} />
            </div>

            {/* Enhanced Content */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative px-4">
              <span 
                className="relative inline-block"
                style={{
                  background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #FF0080 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "text-shimmer 3s linear infinite",
                }}
              >
                Don&apos;t Wait for a Breach — Strengthen Your Security Today
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Let&apos;s secure your future together. Get a free consultation and risk assessment.
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
              <Link href="/contact">
                <Button size="lg" className="group px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  Book a Consultation Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 bg-gradient-to-b from-card/70 via-card/80 to-card/90 relative">
        <motion.div 
          className="w-full relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <Footer />
        </motion.div>
      </section>
    </div>
    </>
  );
}

