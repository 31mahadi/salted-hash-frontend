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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

