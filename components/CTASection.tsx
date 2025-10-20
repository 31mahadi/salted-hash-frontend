"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title = "Ready to strengthen your cyber defenses?",
  description = "Let's secure your future together. Get a free consultation and risk assessment.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View Services",
  secondaryButtonHref = "/services",
}: CTASectionProps) {
  return (
    <section className="w-full h-full relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "30px 30px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={primaryButtonHref}>
              <Button size="lg" className="group">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={secondaryButtonHref}>
              <Button size="lg" variant="outline">
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

