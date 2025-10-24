import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Cookie Policy",
  description: "SaltedHash's cookie policy and usage information.",
  url: "/cookie-policy",
});

export default function CookiePolicyPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-foreground/70 mb-8">
                Last Updated: January 15, 2025
              </p>

              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We use cookies to enhance browsing experience, analyze traffic, and personalize content. By continuing, you consent to cookie use. You may disable cookies in browser settings.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand user behavior</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies for personalized content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        These cookies remember your choices and preferences to provide a more personalized experience.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                    <li>Cookie preferences: Use our cookie banner to manage your preferences</li>
                    <li>Third-party tools: Use browser extensions to block specific cookies</li>
                    <li>Opt-out: Contact us to opt out of non-essential cookies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Some cookies on our website are set by third-party services such as Google Analytics, social media platforms, and advertising networks. These cookies are subject to the respective third parties&apos; privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    If you have questions about our use of cookies, please contact us at{" "}
                    <a href="mailto:contact@saltedhash.com" className="text-primary hover:text-secondary">
                      contact@saltedhash.com
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
