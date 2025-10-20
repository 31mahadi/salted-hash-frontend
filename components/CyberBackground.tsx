"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SecurityShield from "./SecurityShield";
import DataStream from "./DataStream";
import HexGrid from "./HexGrid";
import PulseWave from "./PulseWave";

export default function CyberBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-background to-primary/5" />
      
      {/* Hex Grid Layer */}
      <HexGrid />
      
      {/* Security Shield Formation */}
      <SecurityShield />
      
      {/* Data Streams */}
      <DataStream />
      
      {/* Pulse Waves */}
      <PulseWave />

      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px, 0px 0px, 0px 0px, 0px 0px",
            "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 4}px rgba(0, 255, 255, 0.6)`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scan Lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        style={{ height: "100px" }}
        animate={{
          y: ["-100%", "100vh"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-primary opacity-30" />
      <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-secondary opacity-30" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-secondary opacity-30" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-primary opacity-30" />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

