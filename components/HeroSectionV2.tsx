"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Zap } from "lucide-react";
import CyberGrid from "./CyberGrid";
import MagneticButton from "./MagneticButton";
import TrustBadge from "./TrustBadge";
import FingerprintScan from "./FingerprintScan";
import FaceScan from "./FaceScan";
import RetinalScan from "./RetinalScan";
import SecureDevice from "./SecureDevice";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export default function HeroSectionV2() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section
      className="relative h-full w-full flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Cinematic Background */}
      <CyberGrid />

      {/* Biometric Security Animations */}
      <FingerprintScan />
      <FaceScan />
      <RetinalScan />
      <SecureDevice />

      {/* Floating Shield Icon */}
      <motion.div
        className="absolute top-1/4 right-1/4 opacity-10"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Shield className="w-64 h-64 text-primary" strokeWidth={0.5} />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10"
        style={{ y: y1 }}
      >
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge with Entrance */}
          <motion.div variants={itemVariants} className="mb-10">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/5 via-purple/5 to-accent/5 border border-primary/20 backdrop-blur-xl"
              whileHover={{ scale: 1.05, borderColor: "rgba(0,217,255,0.4)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple to-accent bg-clip-text text-transparent">
                Enterprise Cybersecurity Excellence
              </span>
              <Zap className="h-4 w-4 text-accent" />
            </motion.div>
          </motion.div>

          {/* Main Headline with Light Sweep */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] relative"
          >
            <motion.span className="block">Fortify Your</motion.span>
            <motion.span
              className="block relative"
              style={{
                background:
                  "linear-gradient(135deg, #00D9FF 0%, #7C3AED 50%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Digital Frontier
            </motion.span>

            {/* Animated Glow Behind Text */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-30 -z-10"
              animate={{
                background: [
                  "radial-gradient(ellipse at 50% 50%, rgba(0,217,255,0.3) 0%, transparent 70%)",
                  "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.3) 0%, transparent 70%)",
                  "radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.3) 0%, transparent 70%)",
                  "radial-gradient(ellipse at 50% 50%, rgba(0,217,255,0.3) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.h1>

          {/* Subheadline with Blur Reveal */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Enterprise-grade cybersecurity that{" "}
            <motion.span
              className="text-primary font-medium"
              whileHover={{ scale: 1.05, display: "inline-block" }}
            >
              protects what matters most
            </motion.span>
            . Seamless defense architecture built on{" "}
            <span className="text-purple font-medium">trust</span>,{" "}
            <span className="text-accent font-medium">innovation</span>, and{" "}
            <span className="text-primary font-medium">precision</span>.
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link href="/contact">
              <MagneticButton className="group bg-gradient-to-r from-primary to-purple hover:from-primary/90 hover:to-purple/90 text-black font-bold px-10 py-7 text-lg border-0">
                Get a Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </MagneticButton>
            </Link>
            <Link href="/services">
              <MagneticButton
                variant="outline"
                className="border-2 border-primary hover:bg-primary/10 backdrop-blur-sm px-10 py-7 text-lg font-semibold"
              >
                <Lock className="mr-2 h-5 w-5" />
                Explore Services
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Trust Badges with Stagger */}
          <motion.div
            variants={heroVariants}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8"
          >
            {[
              { text: "SOC 2 Type II Certified" },
              { text: "ISO 27001 Compliant" },
              { text: "24/7 Incident Response" },
              { text: "Zero-Trust Architecture" },
            ].map((item, index) => (
              <motion.div key={item.text} variants={itemVariants}>
                <TrustBadge
                  icon={<Shield className="h-4 w-4" />}
                  text={item.text}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-background/80" />
    </motion.section>
  );
}

