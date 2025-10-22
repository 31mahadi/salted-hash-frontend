"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Bug, Cloud, FileCheck, Siren, LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "bug": Bug,
  "cloud": Cloud,
  "file-check": FileCheck,
  "siren": Siren,
};

interface ServiceCardV2Props {
  service: Service;
  index?: number;
}

export default function ServiceCardV2({ service, index = 0 }: ServiceCardV2Props) {
  const Icon = iconMap[service.icon] || ShieldCheck;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group perspective-1000"
    >
      <Card className="h-full relative overflow-hidden backdrop-blur-md bg-card-glass border border-primary/10 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,217,255,0.3),inset_0_0_40px_rgba(124,58,237,0.15)] max-w-sm mx-auto text-center">
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0,217,255,0.15) 0%, transparent 50%)",
          }}
        />

        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(0,217,255,0.3), transparent)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Inner Border */}
        <div className="absolute inset-[1px] rounded-lg bg-gradient-to-br from-background/95 via-background/98 to-background/95" />

        <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
          <CardHeader>
            {/* Icon with 3D Effect */}
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 via-purple/10 to-accent/5 flex items-center justify-center mb-6 relative overflow-hidden border border-primary/20 mx-auto"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 40px rgba(0,217,255,0.5), inset 0 0 30px rgba(124,58,237,0.3)",
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Rotating Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20 rounded-2xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Icon className="h-10 w-10 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(0,217,255,1)]" />
            </motion.div>

            <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className="text-base text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300 leading-relaxed">
              {service.shortDescription}
            </CardDescription>
          </CardContent>

          <CardFooter>
            <Link href={`/services/${service.slug}`} className="w-full">
              <Button
                variant="ghost"
                className="w-full group/btn hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Button Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                  initial={false}
                  whileHover={{
                    background: [
                      "linear-gradient(90deg, transparent, rgba(0,217,255,0.1), transparent)",
                      "linear-gradient(90deg, transparent 50%, rgba(0,217,255,0.1) 50%, transparent 100%)",
                    ],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />

                <span className="relative z-10 bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent font-semibold">
                  Learn More
                </span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 text-primary transition-transform group-hover/btn:translate-x-2" />
              </Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}

