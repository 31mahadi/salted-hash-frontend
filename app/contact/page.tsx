import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { getCompanyInfo } from "@/lib/api";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Contact Us",
  description: "Get in touch with CyberArmor's security experts. Schedule a free consultation or request a risk assessment.",
  keywords: ["contact", "cybersecurity consultation", "security assessment"],
  url: "/contact",
});

export default async function ContactPage() {
  const company = await getCompanyInfo();

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
                  Get In Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70">
                Have questions about our services? Need a security assessment? 
                Our team is here to help. Contact us today for a free consultation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection>
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href={`tel:${company.contact.phone}`}
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        {company.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-foreground/70">{company.contact.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-foreground/70">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        24/7 Emergency Response Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
                  <h3 className="font-semibold mb-2 text-primary">Security Emergency?</h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    For urgent security incidents, our incident response team is available 24/7/365.
                  </p>
                  <a
                    href="tel:+18002927376"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Emergency Hotline
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground/70">Map Integration Placeholder</p>
                  <p className="text-sm text-foreground/50">San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

