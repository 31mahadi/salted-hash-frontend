import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { getBlogs } from "@/lib/api";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Cybersecurity Blog",
  description: "Stay informed with the latest cybersecurity insights, threat intelligence, and security best practices from SaltedHash experts.",
  keywords: [
    "cybersecurity blog",
    "security news",
    "threat intelligence",
    "security best practices",
  ],
  url: "/blog",
});

export default async function BlogPage() {
  const blogs = await getBlogs();

  // Group blogs by category
  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

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
                  Security Insights
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70">
                Expert analysis, threat intelligence, and best practices to help you stay ahead 
                in the ever-evolving cybersecurity landscape.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want personalized security insights?"
        description="Subscribe to our newsletter for exclusive content, webinars, and early access to security reports."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        variant="card"
      />
    </>
  );
}

