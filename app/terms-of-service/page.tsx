import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Terms of Service",
  description: "CyberArmor's terms of service and user agreement.",
  url: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-foreground/70 mb-8">
                Last Updated: October 19, 2025
              </p>

              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    By accessing or using CyberArmor's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    CyberArmor provides cybersecurity assessment, penetration testing, compliance consulting, and incident response services. Our services are provided "as is" and are subject to availability.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use our services for any unlawful purpose</li>
                    <li>Cooperate with security assessments and recommendations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Confidentiality</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We maintain strict confidentiality regarding all client information, security assessments, and vulnerabilities discovered. Both parties agree to maintain confidentiality as outlined in separate non-disclosure agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    CyberArmor shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the fees paid for the specific service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    All content, trademarks, and intellectual property on our website and in our reports belong to CyberArmor. You may not reproduce, distribute, or create derivative works without explicit permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    For questions about these Terms of Service, please contact us at{" "}
                    <a href="mailto:legal@cyberarmor.com" className="text-primary hover:text-secondary">
                      legal@cyberarmor.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

