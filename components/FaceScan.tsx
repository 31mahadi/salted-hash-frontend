"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

export default function FaceScan() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [detectedPoints, setDetectedPoints] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning(true);
      setProgress(0);
      setDetectedPoints(0);
      
      // Simulate landmark detection
      const landmarkInterval = setInterval(() => {
        setDetectedPoints(prev => Math.min(prev + 1, 12));
      }, 250);
      
      // Progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 3;
        });
      }, 80);
      
      setTimeout(() => {
        setScanning(false);
        clearInterval(progressInterval);
        clearInterval(landmarkInterval);
      }, 4000);
    }, 9000);
    
    setTimeout(() => {
      setScanning(true);
      const landmarkInterval = setInterval(() => {
        setDetectedPoints(prev => Math.min(prev + 1, 12));
      }, 250);
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 3, 100));
      }, 80);
      setTimeout(() => {
        setScanning(false);
        clearInterval(progressInterval);
        clearInterval(landmarkInterval);
      }, 4000);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Facial landmark positions (realistic placement)
  const landmarks = [
    { x: 38, y: 35, label: "L-EYE", size: 4 },
    { x: 62, y: 35, label: "R-EYE", size: 4 },
    { x: 50, y: 48, label: "NOSE", size: 3 },
    { x: 42, y: 60, label: "M-L", size: 3 },
    { x: 58, y: 60, label: "M-R", size: 3 },
    { x: 28, y: 52, label: "CHEEK-L", size: 2.5 },
    { x: 72, y: 52, label: "CHEEK-R", size: 2.5 },
    { x: 33, y: 28, label: "BROW-L", size: 2.5 },
    { x: 67, y: 28, label: "BROW-R", size: 2.5 },
    { x: 22, y: 58, label: "JAW-L", size: 2.5 },
    { x: 78, y: 58, label: "JAW-R", size: 2.5 },
    { x: 50, y: 72, label: "CHIN", size: 3 },
  ];

  return (
    <div className="absolute top-[12%] right-[8%] opacity-10 pointer-events-none hidden lg:block z-0">
      <motion.div
        className="relative w-28 h-32 xl:w-32 xl:h-36"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        {/* Scanner Display Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 to-purple-800/15 backdrop-blur-sm rounded-lg border border-purple/10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple/2 via-transparent to-transparent rounded-lg" />
        </div>

        {/* ACTUAL FACE SILHOUETTE (Using User Icon) */}
        <div className="absolute inset-0 flex items-center justify-center pt-4 xl:pt-5">
          <div className="relative">
            {/* Large face icon */}
            <User 
              className="w-16 h-16 xl:w-20 xl:h-20 text-purple/20" 
              strokeWidth={1}
            />
            
            {/* Face mesh overlay */}
            <svg
              viewBox="0 0 160 160"
              className="absolute inset-0 w-16 h-16 xl:w-20 xl:h-20"
              fill="none"
            >
              {/* Facial contour lines */}
              <motion.ellipse
                cx="80"
                cy="70"
                rx="50"
                ry="65"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-purple"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scanning ? 1 : 0.3 }}
                transition={{ duration: 1 }}
              />
              
              {/* Horizontal mesh lines */}
              {[25, 35, 45, 55, 65, 75, 85, 95].map((y, i) => (
                <motion.path
                  key={`h-${i}`}
                  d={`M ${35 + i * 1.5} ${y} Q 80 ${y - 3} ${125 - i * 1.5} ${y}`}
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-purple"
                  opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: scanning ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                />
              ))}
              
              {/* Vertical mesh lines */}
              {[50, 65, 80, 95, 110].map((x, i) => (
                <motion.path
                  key={`v-${i}`}
                  d={`M ${x} 25 Q ${x} 70 ${x} 120`}
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-purple"
                  opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: scanning ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.05 }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Facial Landmark Detection Points */}
        {landmarks.slice(0, detectedPoints).map((point, i) => (
          <motion.div
            key={i}
            className="absolute z-10"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              {/* Main point */}
              <motion.div
                className="rounded-full bg-purple border-2 border-purple shadow-lg shadow-purple/50"
                style={{
                  width: `${point.size * 2}px`,
                  height: `${point.size * 2}px`,
                }}
                animate={{
                  scale: scanning ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-purple"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{
                  scale: 3,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
              
              {/* Label line and text */}
              <motion.div
                className="absolute top-full left-1/2 pt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: scanning ? 0.7 : 0 }}
              >
                <div className="w-px h-3 bg-purple/50 mx-auto" />
                <div className="text-[7px] font-mono text-purple whitespace-nowrap -translate-x-1/2">
                  {point.label}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Scanning Lines (Multiple Passes) */}
        {scanning && (
          <>
            {[0, 1, 2].map((pass) => (
              <motion.div
                key={pass}
                className="absolute left-0 right-0 z-20"
                initial={{ top: "10%" }}
                animate={{
                  top: ["10%", "90%"],
                }}
                transition={{
                  duration: 3,
                  delay: pass * 1,
                  ease: "linear",
                }}
              >
                <div 
                  className="h-1.5"
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(124,58,237,0.1), #7C3AED, rgba(124,58,237,0.1), transparent)",
                    boxShadow: "0 0 20px 3px rgba(124,58,237,0.8), 0 0 40px 5px rgba(124,58,237,0.4)",
                    filter: "blur(0.5px)",
                  }}
                />
              </motion.div>
            ))}
          </>
        )}

        {/* Analysis Grid */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(10)].map((_, i) => (
            <div
              key={`grid-h-${i}`}
              className="absolute left-0 right-0 h-px bg-purple"
              style={{ top: `${(i + 1) * 9}%` }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`grid-v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-purple"
              style={{ left: `${(i + 1) * 11}%` }}
            />
          ))}
        </div>

        {/* Scanner Frame */}
        <div className="absolute inset-0 border-2 border-purple/30 rounded-lg">
          {/* Enhanced corner brackets */}
          {[
            { top: 0, left: 0 },
            { top: 0, right: 0 },
            { bottom: 0, left: 0 },
            { bottom: 0, right: 0 },
          ].map((pos, i) => (
            <div key={i} className="absolute w-16 h-16" style={pos}>
              <div className={`absolute ${pos.top === 0 ? "top-0" : "bottom-0"} ${pos.left === 0 ? "left-0" : "right-0"} w-16 h-1 bg-purple shadow-lg shadow-purple/50`} />
              <div className={`absolute ${pos.top === 0 ? "top-0" : "bottom-0"} ${pos.left === 0 ? "left-0" : "right-0"} w-1 h-16 bg-purple shadow-lg shadow-purple/50`} />
              <div className={`absolute ${pos.top === 0 ? "top-2" : "bottom-2"} ${pos.left === 0 ? "left-2" : "right-2"} w-3 h-3 border ${pos.top === 0 ? "border-t" : "border-b"} ${pos.left === 0 ? "border-l" : "border-r"} border-purple`} />
            </div>
          ))}
        </div>

        {/* Status Display */}
        <motion.div
          className="absolute -top-6 xl:-top-8 left-0 right-0 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full bg-purple"
            animate={{
              opacity: scanning ? [1, 0.3, 1] : 0.5,
              scale: scanning ? [1, 1.4, 1] : 1,
              boxShadow: scanning 
                ? ["0 0 3px rgba(124,58,237,0.5)", "0 0 8px rgba(124,58,237,1)", "0 0 3px rgba(124,58,237,0.5)"]
                : "0 0 3px rgba(124,58,237,0.3)",
            }}
            transition={{
              duration: 1,
              repeat: scanning ? Infinity : 0,
            }}
          />
          <span className="text-[8px] xl:text-[10px] font-mono text-purple tracking-wider">
            {scanning ? `ANALYZE ${detectedPoints}/12` : "STANDBY"}
          </span>
        </motion.div>

        {/* Results Display */}
        <motion.div
          className="absolute -bottom-10 xl:-bottom-12 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: scanning && detectedPoints >= 12 ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="bg-purple/5 backdrop-blur-sm border border-purple/20 rounded px-1 py-0.5 xl:px-2 xl:py-1 inline-block">
            <div className="text-[8px] xl:text-[10px] font-mono text-purple font-bold">
              ✓ VERIFIED
            </div>
            <div className="text-[6px] xl:text-[8px] text-purple/70 mt-0.5">
              99.2% • 12 LAND
            </div>
          </div>
        </motion.div>

        {/* Ambient Glow */}
        <motion.div
          className="absolute inset-0 rounded-lg blur-3xl bg-purple/10 -z-10"
          animate={{
            opacity: scanning ? [0.2, 0.4, 0.2] : 0.1,
            scale: scanning ? [1, 1.15, 1] : 1,
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
