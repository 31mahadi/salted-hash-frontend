import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { getServices } from "@/lib/api";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Cybersecurity Services",
  description: "Comprehensive cybersecurity services including penetration testing, cloud security audits, risk assessments, compliance, and incident response.",
  keywords: [
    "cybersecurity services",
    "penetration testing",
    "cloud security",
    "risk assessment",
    "compliance",
  ],
  url: "/services",
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-lg md:text-xl text-foreground/70">
                From risk assessment to incident response, we provide end-to-end security solutions 
                designed to protect your organization against evolving cyber threats.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need help choosing the right service?"
        description="Our security experts are here to help. Get a free consultation to discuss your specific needs."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
      />
    </>
  );
}

