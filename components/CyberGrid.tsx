"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function CyberGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Network nodes
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: (i % 5) * 25 + 10,
    y: Math.floor(i / 5) * 35 + 15,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Base */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, rgba(0,217,255,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, rgba(124,58,237,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, rgba(0,217,255,0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cyber Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,217,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,217,255,0)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Network Connections */}
        {nodes.map((node, i) => {
          if (i < nodes.length - 1) {
            const nextNode = nodes[i + 1];
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nextNode.x}%`}
                y2={`${nextNode.y}%`}
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
              />
            );
          }
          return null;
        })}

        {/* Network Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="currentColor"
            className="text-primary"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.id * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Parallax Light Rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-10, 10]),
          y: useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-10, 10]),
        }}
      >
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-purple/30 via-purple/10 to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Scan Line Effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

