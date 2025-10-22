import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Privacy Policy",
  description: "SaltedHash's privacy policy and data protection practices.",
  url: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-foreground/70 mb-8">
                Last Updated: October 19, 2025
              </p>

              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    CyberArmor ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Name, email address, and contact information</li>
                    <li>Company information and job title</li>
                    <li>Communication preferences</li>
                    <li>Information about your security infrastructure (with consent)</li>
                    <li>Payment and billing information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Conduct security assessments and vulnerability testing</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. We maintain SOC 2 Type II and ISO 27001 certifications to ensure the highest standards of data protection.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Information Sharing</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with your consent, to comply with legal obligations, to protect our rights, or with service providers who assist in our operations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@cyberarmor.com" className="text-primary hover:text-secondary">
                      privacy@cyberarmor.com
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

