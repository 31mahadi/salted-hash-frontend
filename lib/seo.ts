import { Metadata } from "next";
import { SEOMetadata } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cyberarmor.com";
const companyName = "CyberArmor";

export function generateSEO({
  title,
  description,
  keywords = [],
  image = "/images/og-default.jpg",
  url = "",
}: SEOMetadata): Metadata {
  const fullTitle = title.includes(companyName) ? title : `${title} | ${companyName}`;
  const fullUrl = `${baseUrl}${url}`;
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: companyName }],
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: companyName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
      creator: "@cyberarmor",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateJSONLD(type: string, data: any) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
  };

  return {
    ...baseSchema,
    ...data,
  };
}

export function generateBlogPostSchema(blog: any) {
  return generateJSONLD("BlogPosting", {
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: companyName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
  });
}

export function generateOrganizationSchema() {
  return generateJSONLD("Organization", {
    name: companyName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Fortify Your Digital Frontier",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-CYBER-ARM",
      contactType: "customer service",
    },
    sameAs: [
      "https://twitter.com/cyberarmor",
      "https://linkedin.com/company/cyberarmor",
    ],
  });
}

