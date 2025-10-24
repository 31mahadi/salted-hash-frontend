"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function RetinalScan() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning(true);
      setProgress(0);
      
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 4;
        });
      }, 60);
      
      setTimeout(() => {
        setScanning(false);
        clearInterval(progressInterval);
      }, 3500);
    }, 8000);
    
    setTimeout(() => {
      setScanning(true);
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 4, 100));
      }, 60);
      setTimeout(() => {
        setScanning(false);
        clearInterval(progressInterval);
      }, 3500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-[15%] right-[8%] opacity-5 dark:opacity-10 pointer-events-none hidden lg:block z-0">
      <motion.div
        className="relative w-28 h-28 xl:w-32 xl:h-32"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        {/* Scanner Display */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/15 to-pink-800/15 backdrop-blur-sm rounded-lg border border-accent/10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/2 via-transparent to-transparent rounded-lg" />
        </div>

        {/* ACTUAL EYE (Using Eye Icon) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Large eye icon */}
            <Eye 
              className="w-14 h-14 xl:w-16 xl:h-16 text-accent/20" 
              strokeWidth={1}
            />
            
            {/* Detailed iris overlay */}
            <svg
              viewBox="0 0 100 100"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 xl:w-10 xl:h-10"
              fill="none"
            >
              {/* Iris rings */}
              {[28, 24, 20, 16, 12, 8].map((r, i) => (
                <motion.circle
                  key={`iris-${i}`}
                  cx="50"
                  cy="50"
                  r={r}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-accent"
                  opacity={0.5 - i * 0.06}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: scanning ? 1 : 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                />
              ))}
              
              {/* Pupil */}
              <motion.circle
                cx="50"
                cy="50"
                r="6"
                fill="currentColor"
                className="text-accent"
                animate={{
                  r: scanning ? [6, 5, 6] : 6,
                }}
                transition={{
                  duration: 2,
                  repeat: scanning ? Infinity : 0,
                }}
              />
              
              {/* Iris radial lines */}
              {[...Array(24)].map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const x1 = 50 + Math.cos(angle) * 8;
                const y1 = 50 + Math.sin(angle) * 8;
                const x2 = 50 + Math.cos(angle) * 28;
                const y2 = 50 + Math.sin(angle) * 28;

                return (
                  <motion.line
                    key={`radial-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-accent"
                    opacity="0.15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: scanning ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.01 }}
                  />
                );
              })}
              
              {/* Blood vessel simulation */}
              <motion.path
                d="M 30 25 Q 35 28 38 35"
                stroke="#EC4899"
                strokeWidth="0.8"
                opacity="0.4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scanning ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <motion.path
                d="M 70 28 Q 65 32 62 38"
                stroke="#EC4899"
                strokeWidth="0.8"
                opacity="0.4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scanning ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              />
            </svg>
          </div>
        </div>

        {/* Rotating Targeting Reticle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: scanning ? 360 : 0,
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: scanning ? Infinity : 0,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-20 h-20 xl:w-24 xl:h-24">
            {/* Main reticle circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
              strokeDasharray="3 3"
              opacity="0.4"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent"
              opacity="0.25"
            />
            
            {/* Crosshairs */}
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-accent" opacity="0.3" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.3" className="text-accent" opacity="0.3" />
            
            {/* Corner markers */}
            {[0, 90, 180, 270].map((rotation) => (
              <g key={rotation} transform={`rotate(${rotation} 50 50)`}>
                <line x1="50" y1="5" x2="50" y2="12" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <line x1="47" y1="8" x2="53" y2="8" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Scanning Lasers */}
        {scanning && (
          <>
            {/* Horizontal scan */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-2/3 h-1 z-20"
              style={{
                background: "linear-gradient(to right, transparent, rgba(236,72,153,0.3), #EC4899, rgba(236,72,153,0.3), transparent)",
                boxShadow: "0 0 20px 3px rgba(236,72,153,0.9), 0 0 40px 5px rgba(236,72,153,0.5)",
                filter: "blur(0.5px)",
              }}
              animate={{
                top: ["20%", "80%"],
              }}
              transition={{
                duration: 1.8,
                repeat: 2,
                ease: "linear",
              }}
            />
            
            {/* Vertical scan */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-2/3 w-1 z-20"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(236,72,153,0.3), #EC4899, rgba(236,72,153,0.3), transparent)",
                boxShadow: "0 0 20px 3px rgba(236,72,153,0.9), 0 0 40px 5px rgba(236,72,153,0.5)",
                filter: "blur(0.5px)",
              }}
              animate={{
                left: ["20%", "80%"],
              }}
              transition={{
                duration: 1.8,
                repeat: 2,
                ease: "linear",
                delay: 0.3,
              }}
            />
          </>
        )}

        {/* Analysis Points */}
        {scanning && progress > 50 && (
          <>
            {[
              { x: 42, y: 45 },
              { x: 58, y: 45 },
              { x: 42, y: 55 },
              { x: 58, y: 55 },
              { x: 50, y: 50 },
            ].map((point, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-accent z-10"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  boxShadow: "0 0 10px rgba(236,72,153,1)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.15, type: "spring" }}
              />
            ))}
          </>
        )}

        {/* Measurement Grid */}
        {scanning && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[0.4, 0.6, 0.8, 1].map((scale) => (
              <motion.div
                key={scale}
                className="absolute w-32 h-32 rounded-full border border-accent"
                style={{ opacity: 0.15 }}
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale, opacity: 0.15 }}
                transition={{ duration: 0.5, delay: scale * 0.3 }}
              />
            ))}
          </div>
        )}

        {/* Precision Grid */}
        <div className="absolute inset-0 opacity-12">
          {[...Array(8)].map((_, i) => (
            <div
              key={`grid-h-${i}`}
              className="absolute left-0 right-0 h-px bg-accent"
              style={{ top: `${(i + 1) * 11}%` }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`grid-v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-accent"
              style={{ left: `${(i + 1) * 11}%` }}
            />
          ))}
        </div>

        {/* Scanner Frame */}
        <div className="absolute inset-0 border-2 border-accent/30 rounded-lg">
          {/* L-bracket corners */}
          {[
            { top: 0, left: 0 },
            { top: 0, right: 0 },
            { bottom: 0, left: 0 },
            { bottom: 0, right: 0 },
          ].map((pos, i) => (
            <div key={i} className="absolute w-14 h-14" style={pos}>
              <div className={`absolute ${pos.top === 0 ? "top-0" : "bottom-0"} ${pos.left === 0 ? "left-0" : "right-0"} w-14 h-1 bg-accent shadow-lg shadow-accent/50`} />
              <div className={`absolute ${pos.top === 0 ? "top-0" : "bottom-0"} ${pos.left === 0 ? "left-0" : "right-0"} w-1 h-14 bg-accent shadow-lg shadow-accent/50`} />
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
            className="w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full bg-accent"
            animate={{
              opacity: scanning ? [1, 0.3, 1] : 0.5,
              scale: scanning ? [1, 1.4, 1] : 1,
              boxShadow: scanning 
                ? ["0 0 3px rgba(236,72,153,0.5)", "0 0 8px rgba(236,72,153,1)", "0 0 3px rgba(236,72,153,0.5)"]
                : "0 0 3px rgba(236,72,153,0.3)",
            }}
            transition={{
              duration: 1,
              repeat: scanning ? Infinity : 0,
            }}
          />
          <span className="text-[8px] xl:text-[10px] font-mono text-accent tracking-wider">
            {scanning ? `IRIS ${progress}%` : "READY"}
          </span>
        </motion.div>

        {/* Results */}
        <motion.div
          className="absolute -bottom-10 xl:-bottom-12 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: scanning && progress >= 100 ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="bg-accent/5 backdrop-blur-sm border border-accent/20 rounded px-1 py-0.5 xl:px-2 xl:py-1 inline-block">
            <div className="text-[8px] xl:text-[10px] font-mono text-accent font-bold">
              ✓ MATCH
            </div>
            <div className="text-[6px] xl:text-[8px] text-accent/70 mt-0.5">
              99.9% • 2048-BIT
            </div>
          </div>
        </motion.div>

        {/* Ambient Glow */}
        <motion.div
          className="absolute inset-0 rounded-lg blur-3xl bg-accent/10 -z-10"
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
