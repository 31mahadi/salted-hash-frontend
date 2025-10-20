import Link from "next/link";
import { Shield, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Shield className="h-24 w-24 text-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">404</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-foreground/70 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to safety.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button size="lg" className="group">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-foreground/60 mb-4">Or explore these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-primary hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-primary hover:text-secondary transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-primary hover:text-secondary transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-primary hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

