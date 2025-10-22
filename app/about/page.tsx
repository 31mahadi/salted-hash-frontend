import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { getCompanyInfo } from "@/lib/api";
import { generateSEO } from "@/lib/seo";
import { Handshake, Lock, Award, Lightbulb } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "About SaltedHash",
  description: "Learn about SaltedHash's mission, vision, and values. Meet our expert team of cybersecurity professionals.",
  keywords: ["about saltedhash", "cybersecurity company", "security team", "mission"],
  url: "/about",
});

const valueIcons = {
  handshake: Handshake,
  lock: Lock,
  award: Award,
  lightbulb: Lightbulb,
};

export default async function AboutPage() {
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
                  About SaltedHash
                </span>
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                {company.tagline}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {company.mission}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {company.vision}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {company.story}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionTitle
              title="Our Values"
              subtitle="The principles that guide everything we do"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {company.values.map((value, index) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons] || Award;
              return (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionTitle
              title="Our Journey"
              subtitle="Key milestones in our company's growth"
              centered
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-8">
              {company.milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 0.1}>
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                        <span className="text-primary font-bold">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-foreground/70">{milestone.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionTitle
              title="Leadership Team"
              subtitle="Meet the experts behind SaltedHash"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {company.team.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to work with us?"
        description="Join hundreds of organizations that trust SaltedHash to protect their digital assets."
        variant="background"
      />
    </>
  );
}

