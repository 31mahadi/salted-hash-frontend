"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award, Clock } from "lucide-react";

const iconMap = {
  shield: Shield,
  lock: Lock,
  award: Award,
  clock: Clock,
};

interface FeatureCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const Icon = iconMap[icon];
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card-glass to-transparent border border-primary/10 backdrop-blur-md relative overflow-hidden group-hover:border-primary/30 transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(0,217,255,0.15)] max-w-sm mx-auto">
        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 text-center">
          <motion.div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/10 via-purple/10 to-accent/5 border border-primary/20 mb-6 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {/* Pulsing Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Icon className="h-12 w-12 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]" />
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

