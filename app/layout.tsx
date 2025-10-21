import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateSEO, generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSEO({
  title: "CyberArmor - Fortify Your Digital Frontier",
  description: "Next-generation cybersecurity assessment and protection. Expert services in penetration testing, cloud security, compliance, and incident response.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "cloud security",
    "compliance",
    "incident response",
    "risk assessment",
    "SOC 2",
    "ISO 27001",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

