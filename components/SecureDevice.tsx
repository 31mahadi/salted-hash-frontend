"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SecureDevice() {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning(true);
      setTimeout(() => setScanning(false), 4000);
    }, 8000);
    setTimeout(() => {
      setScanning(true);
      setTimeout(() => setScanning(false), 4000);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-[25%] left-[10%] opacity-30 pointer-events-none hidden lg:block">
      <motion.div
        className="relative w-44 h-44 xl:w-52 xl:h-52"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        {/* Realistic Device Outlines */}
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {/* Smartphone (left) */}
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            {/* Phone body */}
            <motion.rect
              x="70"
              y="100"
              width="60"
              height="110"
              rx="8"
              className="text-primary"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
            />
            {/* Screen */}
            <motion.rect
              x="75"
              y="108"
              width="50"
              height="86"
              rx="4"
              className="text-primary"
              strokeWidth="1"
              opacity="0.5"
              fill="rgba(0, 217, 255, 0.05)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 3 }}
            />
            {/* Notch */}
            <rect
              x="90"
              y="110"
              width="20"
              height="3"
              rx="1.5"
              className="fill-primary"
              opacity="0.4"
            />
            {/* Camera */}
            <circle
              cx="113"
              cy="111.5"
              r="1.5"
              className="fill-primary"
              opacity="0.6"
            />
            {/* Home indicator */}
            <rect
              x="92"
              y="200"
              width="16"
              height="2"
              rx="1"
              className="fill-primary"
              opacity="0.4"
            />
          </motion.g>

          {/* Laptop (right) */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 1 }}
          >
            {/* Screen */}
            <motion.rect
              x="160"
              y="90"
              width="90"
              height="70"
              rx="4"
              className="text-primary"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2.9 }}
            />
            {/* Display area */}
            <motion.rect
              x="165"
              y="95"
              width="80"
              height="60"
              rx="2"
              className="text-primary"
              strokeWidth="1"
              opacity="0.5"
              fill="rgba(0, 217, 255, 0.05)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 3.2 }}
            />
            {/* Camera dot */}
            <circle
              cx="205"
              cy="92"
              r="1.5"
              className="fill-primary"
              opacity="0.6"
            />
            {/* Keyboard base */}
            <motion.path
              d="M 165 165 L 155 175 L 255 175 L 245 165 Z"
              className="text-primary"
              strokeWidth="2"
              fill="rgba(0, 217, 255, 0.03)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 3.3 }}
            />
            {/* Trackpad */}
            <rect
              x="190"
              y="167"
              width="20"
              height="6"
              rx="1"
              className="stroke-primary"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </motion.g>

          {/* Central Shield */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8, type: "spring" }}
          >
            {/* Shield outline */}
            <motion.path
              d="M 150 130 L 135 135 L 135 155 Q 135 165 145 170 L 150 172 L 155 170 Q 165 165 165 155 L 165 135 Z"
              className="text-accent"
              strokeWidth="2.5"
              fill="rgba(236, 72, 153, 0.08)"
              animate={{
                fill: scanning
                  ? ["rgba(236, 72, 153, 0.08)", "rgba(236, 72, 153, 0.15)", "rgba(236, 72, 153, 0.08)"]
                  : "rgba(236, 72, 153, 0.08)",
              }}
              transition={{
                duration: 2,
                repeat: scanning ? Infinity : 0,
              }}
            />
            {/* Shield checkmark */}
            <motion.path
              d="M 142 150 L 148 156 L 158 142"
              className="text-accent"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 4 }}
            />
          </motion.g>

          {/* Connection Lines (when scanning) */}
          {scanning && (
            <motion.g>
              {/* Phone to Shield */}
              <motion.path
                d="M 130 155 L 135 151"
                className="text-primary"
                strokeWidth="1"
                opacity="0.6"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Laptop to Shield */}
              <motion.path
                d="M 160 151 L 165 155"
                className="text-primary"
                strokeWidth="1"
                opacity="0.6"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.g>
          )}

          {/* Encryption Circle */}
          <motion.circle
            cx="150"
            cy="150"
            r="75"
            className="text-primary"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              rotate: scanning ? 360 : 0,
            }}
            transition={{ 
              pathLength: { duration: 2, delay: 3.5 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
            style={{ transformOrigin: "150px 150px" }}
          />

          {/* Security Nodes */}
          {[
            { angle: 0, label: "SSL" },
            { angle: 90, label: "2FA" },
            { angle: 180, label: "VPN" },
            { angle: 270, label: "FW" },
          ].map((node, i) => {
            const radian = (node.angle * Math.PI) / 180;
            const x = 150 + Math.cos(radian) * 85;
            const y = 150 + Math.sin(radian) * 85;

            return (
              <motion.g key={node.angle}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="8"
                  className="text-primary"
                  strokeWidth="1.5"
                  fill="rgba(0, 217, 255, 0.1)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: scanning ? [1, 1.3, 1] : 1,
                    opacity: 1,
                  }}
                  transition={{
                    scale: {
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: scanning ? Infinity : 0,
                    },
                    opacity: { delay: 4 + i * 0.1 },
                  }}
                />
                <text
                  x={x}
                  y={y + 2}
                  textAnchor="middle"
                  className="text-primary text-[8px] font-mono font-bold"
                  fill="currentColor"
                  opacity="0.8"
                >
                  {node.label}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Scanning Pulse Waves */}
        {scanning && (
          <>
            {[0, 1, 2].map((wave) => (
              <motion.div
                key={wave}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
                style={{ width: "40%", height: "40%" }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{
                  scale: 2.5,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  delay: wave * 0.6,
                  repeat: Infinity,
                  repeatDelay: 1.8,
                }}
              />
            ))}
          </>
        )}

        {/* Data Transfer Animation */}
        {scanning && (
          <>
            {/* Particles from phone */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`particle-phone-${i}`}
                className="absolute w-1 h-1 rounded-full bg-primary"
                style={{
                  left: "33%",
                  top: "55%",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  x: [0, 40],
                  y: [0, -5],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            ))}
            
            {/* Particles from laptop */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`particle-laptop-${i}`}
                className="absolute w-1 h-1 rounded-full bg-primary"
                style={{
                  left: "67%",
                  top: "45%",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  x: [0, -40],
                  y: [0, 5],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3 + 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            ))}
          </>
        )}

        {/* Status Display */}
        <motion.div
          className="absolute -top-8 xl:-top-10 left-0 right-0 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-primary"
            animate={{
              opacity: scanning ? [1, 0.3, 1] : 0.3,
              scale: scanning ? [1, 1.4, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: scanning ? Infinity : 0,
            }}
          />
          <span className="text-[10px] xl:text-xs font-mono text-primary tracking-wider">
            {scanning ? "SECURING ENDPOINTS..." : "PROTECTED"}
          </span>
        </motion.div>

        {/* Security Status */}
        <motion.div
          className="absolute -bottom-12 xl:-bottom-14 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: scanning ? [0, 0, 0, 1] : [1, 0],
          }}
          transition={{
            duration: 0.5,
            delay: scanning ? 3.5 : 0,
          }}
        >
          <div className="text-xs xl:text-sm font-mono text-primary font-bold text-center">
            ALL DEVICES SECURED
          </div>
          <div className="text-[10px] xl:text-xs text-primary/70 mt-1 text-center flex items-center justify-center gap-2">
            <span>256-BIT AES</span>
            <span>•</span>
            <span>ENCRYPTED</span>
          </div>
        </motion.div>

        {/* Ambient Glow */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl bg-primary/10"
          animate={{
            opacity: scanning ? [0.1, 0.3, 0.1] : 0.1,
            scale: scanning ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
}
