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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
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
                  Cybersecurity Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70">
                From risk assessment to incident response, we provide end-to-end security solutions 
                designed to protect your organization against evolving cyber threats.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} className="mb-16">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-purple/20 flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                        {service.id}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h2>
                      <p className="text-foreground/70">{service.shortDescription}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Services Include:</h3>
                      <ul className="space-y-3">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium">{item.name}</span>
                              <p className="text-sm text-foreground/70 mt-1">{item.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-purple">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-purple text-white font-semibold rounded-lg hover:from-primary/90 hover:to-purple/90 transition-all duration-300"
                    >
                      Book Consultation
                    </a>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </AnimatedSection>
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
        variant="background"
      />
    </>
  );
}

