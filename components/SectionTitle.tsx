"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface SectionTitleProps {
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = false 
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={centered ? "text-center" : ""}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
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
          {title}
        </span>
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple/20 blur-2xl -z-10"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </h2>
      {subtitle && (
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

