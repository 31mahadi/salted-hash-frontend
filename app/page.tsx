import Link from "next/link";
import HeroSectionV2 from "@/components/HeroSectionV2";
import SectionTitle from "@/components/SectionTitle";
import ServiceCardV2 from "@/components/ServiceCardV2";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import { getServices, getTestimonials } from "@/lib/api";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  const services = await getServices();
  const testimonials = await getTestimonials();
  
  // Get top 3 services for preview
  const featuredServices = services.slice(0, 3);

  const features = [
    {
      icon: "shield" as const,
      title: "Trust",
      description: "Industry-leading security experts with proven track record protecting Fortune 500 companies.",
    },
    {
      icon: "lock" as const,
      title: "Innovation",
      description: "Cutting-edge tools and methodologies to stay ahead of emerging threats.",
    },
    {
      icon: "award" as const,
      title: "Compliance",
      description: "SOC 2, ISO 27001, HIPAA, and PCI-DSS certified for complete peace of mind.",
    },
    {
      icon: "clock" as const,
      title: "24/7 Defense",
      description: "Round-the-clock monitoring and incident response when you need it most.",
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth snap-container">
      {/* Hero Section */}
      <section className="snap-start snap-always h-screen">
        <div className="pt-20 h-full">
          <HeroSectionV2 />
        </div>
      </section>

      {/* Services Preview */}
      <section className="snap-start h-screen flex items-center bg-gradient-to-b from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          <AnimatedSection className="mb-16">
            <SectionTitle
              title={
                <span className="bg-gradient-to-r from-primary via-purple to-accent bg-clip-text text-transparent">
                  Our Security Services
                </span>
              }
              subtitle="Comprehensive cybersecurity solutions tailored to your business needs"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
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
                View All Services
              </span>
              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="snap-start h-screen flex items-center bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute top-1/4 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          <AnimatedSection className="mb-16">
            <SectionTitle
              title="Why Choose CyberArmor"
              subtitle="Trusted by industry leaders for mission-critical security"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="snap-start h-screen flex items-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
          <AnimatedSection className="mb-12">
            <SectionTitle
              title="What Our Clients Say"
              subtitle="Trusted by organizations worldwide"
              centered
            />
          </AnimatedSection>

          <div className="flex-1 flex items-center w-full">
            <div className="w-full">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-start h-screen flex items-center">
        <CTASection />
      </section>
    </div>
  );
}

