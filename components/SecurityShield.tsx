"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SecurityShield() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Create hexagonal shield pattern
  const hexagons = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    radius: 50 + i * 30,
    count: 6 + i * 3,
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20">
      <motion.div
        className="relative"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* Central Shield Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          {/* Inner Glow */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/30 to-purple/30 blur-2xl" />
          
          {/* Shield Icon */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M12 2L3 7v5c0 5 3 9 9 11 6-2 9-6 9-11V7l-9-5z"
              className="stroke-primary"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Hexagonal Rings */}
        {hexagons.map((hex) => (
          <motion.div
            key={hex.id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: hex.id % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 30 + hex.id * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: hex.count }).map((_, i) => {
              const angle = (i * 360) / hex.count;
              const x = Math.cos((angle * Math.PI) / 180) * hex.radius;
              const y = Math.sin((angle * Math.PI) / 180) * hex.radius;

              return (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  <div className="w-full h-full bg-primary rounded-sm rotate-45" />
                </motion.div>
              );
            })}
          </motion.div>
        ))}

        {/* Orbital Paths */}
        {[150, 220, 300].map((radius, index) => (
          <motion.div
            key={radius}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary/20 rounded-full"
            style={{ width: radius * 2, height: radius * 2 }}
            animate={{
              rotate: index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 40 + index * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"
              style={{
                boxShadow: "0 0 10px currentColor",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

