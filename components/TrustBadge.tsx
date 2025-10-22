"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
  index: number;
}

export default function TrustBadge({ icon, text, index }: TrustBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 + index * 0.15, duration: 0.5 }}
      whileHover={{ 
        scale: 1.08,
        boxShadow: "0 0 25px rgba(0, 217, 255, 0.4)",
      }}
      className="relative group"
    >
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-br from-card-glass to-card-glass/50 border border-primary/20 backdrop-blur-lg relative overflow-hidden">
        {/* Shimmer on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.1), transparent)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        
        <div className="relative z-10 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
          <Check className="h-4 w-4 text-primary" strokeWidth={3} />
        </div>
        <span className="text-sm font-medium relative z-10">{text}</span>
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 rounded-tr-xl" />
      </div>
    </motion.div>
  );
}

