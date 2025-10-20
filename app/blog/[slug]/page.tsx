import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { getBlogs, getBlogBySlug } from "@/lib/api";
import { generateSEO, generateBlogPostSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    return {};
  }

  return generateSEO({
    title: blog.title,
    description: blog.excerpt,
    keywords: [...blog.tags, "cybersecurity", "security"],
    url: `/blog/${blog.slug}`,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const blogSchema = generateBlogPostSchema(blog);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {blog.category}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-foreground/60">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <article className="max-w-4xl mx-auto">
              {/* Excerpt */}
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>

              {/* Main Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {blog.content}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-foreground/60" />
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need expert security guidance?"
        description="Our team can help you implement the strategies discussed in this article."
        primaryButtonText="Contact Security Experts"
        primaryButtonHref="/contact"
      />
    </>
  );
}

