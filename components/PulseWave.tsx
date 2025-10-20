"use client";

import { motion } from "framer-motion";

export default function PulseWave() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border-2 border-primary/30"
          style={{
            width: "100px",
            height: "100px",
          }}
          animate={{
            width: ["100px", "1200px"],
            height: ["100px", "1200px"],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

