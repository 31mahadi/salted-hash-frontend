"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { LogoFooter } from "@/components/Logo";
import { 
  COMPANY_EMAIL, 
  COMPANY_PHONE_DISPLAY, 
  COMPANY_PHONE_TEL, 
  COMPANY_ADDRESS,
  SOCIAL_LINKS 
} from "@/lib/constants";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Blog / Insights", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "Company Profile", href: "/about" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-t from-card/70 via-card/80 to-card/90 backdrop-blur-xl border-border/50 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      }}
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 cyber-grid opacity-40"
        style={{
          backgroundImage: 
            `linear-gradient(rgba(0, 255, 255, 0.08) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="mb-4">
              <LogoFooter />
            </div>
            <p className="text-foreground/70 mb-6 max-w-sm leading-relaxed mx-auto md:mx-0">
              Secure Your Tomorrow with Comprehensive Cybersecurity Solutions. Empowering organizations with cutting-edge cybersecurity solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 transition-all">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <a href={`tel:${COMPANY_PHONE_TEL}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Address</p>
                <p className="text-sm text-foreground/70">
                  {COMPANY_ADDRESS.full}
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-foreground/60 pt-4 border-t border-border/30">
            <p>&copy; {new Date().getFullYear()} SaltedHash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

