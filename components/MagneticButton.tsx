"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function MagneticButton({
  children,
  variant = "default",
  size = "lg",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative"
    >
      <Button
        variant={variant}
        size={size}
        className={`relative overflow-hidden ${className}`}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={false}
          whileHover={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(0,217,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(0,217,255,0.5) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Button>
    </motion.div>
  );
}

