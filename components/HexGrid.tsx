"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HexGrid() {
  const [activeHex, setActiveHex] = useState<number | null>(null);

  // Generate hex grid
  const rows = 8;
  const cols = 12;
  const hexSize = 60;

  const hexagons = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexSize * 1.5;
      const y = row * hexSize * Math.sqrt(3) + (col % 2) * (hexSize * Math.sqrt(3) / 2);
      hexagons.push({ id: row * cols + col, x, y });
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHex(Math.floor(Math.random() * hexagons.length));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="hex-pattern"
            x="0"
            y="0"
            width={hexSize * 1.5}
            height={hexSize * Math.sqrt(3)}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${hexSize / 2} 0 L ${hexSize} ${hexSize * 0.25} L ${hexSize} ${hexSize * 0.75} L ${hexSize / 2} ${hexSize} L 0 ${hexSize * 0.75} L 0 ${hexSize * 0.25} Z`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hex-pattern)" />

        {hexagons.map((hex) => (
          <motion.path
            key={hex.id}
            d={`M ${hex.x + hexSize / 2} ${hex.y} L ${hex.x + hexSize} ${hex.y + hexSize * 0.25} L ${hex.x + hexSize} ${hex.y + hexSize * 0.75} L ${hex.x + hexSize / 2} ${hex.y + hexSize} L ${hex.x} ${hex.y + hexSize * 0.75} L ${hex.x} ${hex.y + hexSize * 0.25} Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeHex === hex.id ? [0, 0.6, 0] : 0,
            }}
            transition={{
              duration: 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

