"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import CyberBackground from "./CyberBackground";
import TrustBadge from "./TrustBadge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero shadow-hero">
      {/* Cyber Background */}
      <CyberBackground />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 backdrop-blur-md border border-primary/30 shadow-card">
              <Logo size="sm" showText={false} />
              <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Enterprise Cybersecurity Excellence
              </span>
              <Zap className="h-4 w-4 text-accent animate-pulse" />
            </div>
          </motion.div>

          {/* Headline with Glitch Effect */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight relative"
          >
            <span className="relative inline-block">
              Fortify Your{" "}
              <span 
                className="relative inline-block bg-gradient-primary bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                  animation: "text-shimmer 3s ease-in-out infinite",
                }}
              >
                Digital Frontier
              </span>
            </span>
            <motion.div
              className="absolute -inset-1 bg-gradient-primary opacity-20 blur-2xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>

          {/* Subheadline with Elegant Typography */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Enterprise-grade cybersecurity that{" "}
            <span className="text-primary font-medium">protects what matters most</span>
            . Seamless defense architecture built on{" "}
            <span className="text-purple font-medium">trust</span>,{" "}
            <span className="text-accent font-medium">innovation</span>, and{" "}
            <span className="text-primary font-medium">precision</span>.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-button"
              >
                <span className="relative z-10 flex items-center">
                  Get a Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-secondary"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold group shadow-card"
              >
                <Lock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators - Refined */}
          <motion.div
            variants={staggerItem}
            className="mt-20 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
          >
            {[
              { text: "SOC 2 Type II Certified" },
              { text: "ISO 27001 Compliant" },
              { text: "24/7 Incident Response" },
              { text: "Zero-Trust Architecture" },
            ].map((item, index) => (
              <TrustBadge
                key={item.text}
                icon={<Logo size="sm" showText={false} />}
                text={item.text}
                index={index}
              />
            ))}
          </motion.div>

          {/* Stats - Enterprise Grade */}
          <motion.div
            variants={staggerItem}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Enterprise Clients", sublabel: "Fortune 1000 Companies" },
              { value: "99.9%", label: "Threat Detection Rate", sublabel: "Real-time Protection" },
              { value: "<15min", label: "Response Time", sublabel: "24/7 Global Coverage" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2 }}
              >
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card-glass to-transparent border border-primary/10 backdrop-blur-sm relative overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
                  
                  <motion.div 
                    className="text-4xl md:text-5xl font-black mb-2"
                    style={{
                      background: "linear-gradient(135deg, #00D9FF 0%, #7C3AED 50%, #EC4899 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-foreground/50 font-light">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border-2 border-purple/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-16 h-16 border-2 border-accent/30 rounded-full"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </section>
  );
}

