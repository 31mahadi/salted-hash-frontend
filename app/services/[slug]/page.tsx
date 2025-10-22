import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { getServices, getServiceBySlug } from "@/lib/api";
import { generateSEO } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  
  if (!service) {
    return {};
  }

  return generateSEO({
    title: service.title,
    description: service.longDescription,
    keywords: [service.title, "cybersecurity", "security service"],
    url: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                {service.shortDescription}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {service.longDescription}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Use Cases */}
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-8">Common Use Cases</h2>
              <ul className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{useCase}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to get started with ${service.title}?`}
        description="Contact our security experts to discuss how we can help protect your organization."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        variant="background"
      />
    </>
  );
}

