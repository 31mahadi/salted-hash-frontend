import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Cyber Risk Assessment", href: "/services/cyber-risk-assessment" },
    { label: "Penetration Testing", href: "/services/penetration-testing" },
    { label: "Cloud Security Audit", href: "/services/cloud-security-audit" },
    { label: "Compliance & Governance", href: "/services/compliance-governance" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-card/70 via-card/80 to-card/90 backdrop-blur-xl border-border/50 relative z-10">
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-purple/20 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CyberArmor
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-sm leading-relaxed">
              Fortify Your Digital Frontier. Empowering organizations with cutting-edge cybersecurity solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 transition-all">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
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
                <a href="mailto:contact@cyberarmor.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  contact@cyberarmor.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <a href="tel:+18002923726" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  +1 (800) CYBER-ARM
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
                  123 Security Boulevard<br />San Francisco, CA 94102
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-foreground/60 pt-4 border-t border-border/30">
            <p>&copy; {new Date().getFullYear()} CyberArmor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

