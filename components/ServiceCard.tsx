"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Bug, Cloud, FileCheck, Siren, LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/types";
import { scaleIn } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "bug": Bug,
  "cloud": Cloud,
  "file-check": FileCheck,
  "siren": Siren,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || ShieldCheck;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group"
    >
      <Card className="h-full relative overflow-hidden backdrop-blur-md bg-card-glass border border-primary/10 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(0,217,255,0.25),inset_0_0_30px_rgba(124,58,237,0.1)] hover:scale-[1.02]">
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: "linear-gradient(110deg, transparent 0%, transparent 40%, rgba(0,217,255,0.15) 50%, transparent 60%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Inner Glow */}
        <div className="absolute inset-[1px] rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="relative z-10">
          <motion.div 
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 via-purple/10 to-accent/5 flex items-center justify-center mb-5 relative overflow-hidden group-hover:scale-105 transition-all duration-500 border border-primary/20"
            whileHover={{ 
              boxShadow: "0 0 30px rgba(0,217,255,0.4), inset 0 0 20px rgba(124,58,237,0.2)",
            }}
          >
            {/* Icon Background Pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20 rounded-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Icon className="h-8 w-8 text-primary relative z-10 drop-shadow-[0_0_12px_rgba(0,217,255,0.9)]" />
          </motion.div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardDescription className="text-base text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
            {service.shortDescription}
          </CardDescription>
        </CardContent>
        <CardFooter className="relative z-10">
          <Link href={`/services/${service.slug}`} className="w-full">
            <Button variant="ghost" className="w-full group/btn hover:bg-primary/10 transition-all duration-300">
              <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent font-semibold">
                Learn More
              </span>
              <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform group-hover/btn:translate-x-2" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

