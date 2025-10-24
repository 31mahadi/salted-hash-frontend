"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Fingerprint } from "lucide-react";

export default function FingerprintScan() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning(true);
      setProgress(0);
      
      // Animate progress during scan
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
      }, 3000);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[10%] left-[5%] opacity-2 dark:opacity-4 pointer-events-none hidden lg:block z-0">
      <motion.div
        className="relative w-24 h-28 xl:w-28 xl:h-32"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        {/* Scanner Pad Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/2 to-slate-800/2 backdrop-blur-sm rounded-lg border border-primary/2">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0.5 via-transparent to-transparent rounded-lg" />
        </div>

        {/* ACTUAL FINGERPRINT (Large Icon as Print) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Fingerprint 
            className="w-16 h-16 xl:w-20 xl:h-20 text-primary/4" 
            strokeWidth={0.5}
          />
          
          {/* Additional fingerprint detail overlay */}
          <svg
            viewBox="0 0 200 200"
            className="absolute w-16 h-16 xl:w-20 xl:h-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          >
            {/* Detailed fingerprint ridges overlaying the icon */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              const offset = i * 8 + 40;
              return (
                <motion.ellipse
                  key={i}
                  cx="100"
                  cy="100"
                  rx={offset * 0.7}
                  ry={offset}
                  className="text-primary"
                  opacity={0.06 - i * 0.005}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: scanning ? 1 : 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Scanning Laser Line */}
        <motion.div
          className="absolute left-0 right-0 z-20"
          animate={{
            top: scanning ? ["5%", "95%"] : "5%",
          }}
          transition={{
            duration: 2.5,
            ease: "linear",
          }}
        >
          <div 
            className="h-1"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,217,255,0.05), var(--color-primary-DEFAULT), rgba(0,217,255,0.05), transparent)",
              boxShadow: "0 0 15px 2px rgba(0,217,255,0.3), 0 0 30px 5px rgba(0,217,255,0.15)",
              filter: "blur(1px)",
            }}
          />
          {/* Scan line reflection */}
          <div 
            className="h-0.5 mt-0.5"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,217,255,0.15), transparent)",
              filter: "blur(2px)",
            }}
          />
        </motion.div>

        {/* Scanned Area Highlight (shows what's been scanned) */}
        {scanning && (
          <motion.div
            className="absolute left-0 right-0 top-0 bg-primary/5"
            animate={{
              height: `${progress}%`,
            }}
            style={{
              boxShadow: "inset 0 0 30px rgba(0,217,255,0.2)",
            }}
          />
        )}

        {/* Precision Grid Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-15">
          {/* Vertical lines */}
          {[...Array(9)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-primary"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}
          {/* Horizontal lines */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-primary"
              style={{ top: `${(i + 1) * 8}%` }}
            />
          ))}
        </div>

        {/* Detection Points (minutiae) */}
        {scanning && progress > 40 && (
          <>
            {[
              { x: 45, y: 35, type: "bifurcation" },
              { x: 65, y: 45, type: "ending" },
              { x: 35, y: 55, type: "bifurcation" },
              { x: 55, y: 65, type: "ending" },
              { x: 42, y: 72, type: "bifurcation" },
              { x: 68, y: 58, type: "ending" },
            ].map((point, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Detection marker */}
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary shadow-lg shadow-primary/50" />
                  
                  {/* Ripple */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{
                      scale: 3,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Label */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-primary whitespace-nowrap">
                    {point.type === "bifurcation" ? "BIF" : "END"}
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}

        {/* Scanner Frame */}
        <div className="absolute inset-0 border-2 border-primary/30 rounded-lg">
          {/* Corner brackets with glow */}
          {[
            { top: 0, left: 0 },
            { top: 0, right: 0 },
            { bottom: 0, left: 0 },
            { bottom: 0, right: 0 },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-14 h-14"
              style={pos}
            >
              <div 
                className={`absolute ${pos.top === 0 ? "top-0" : "bottom-0"} ${pos.left === 0 ? "left-0" : "right-0"} w-14 h-1 bg-primary shadow-lg shadow-primary/50`}
              />
              <div 
                className={`absolute ${pos.top === 0 ? "top-0" : "bottom-0"} ${pos.left === 0 ? "left-0" : "right-0"} w-1 h-14 bg-primary shadow-lg shadow-primary/50`}
              />
            </div>
          ))}
          
          {/* Side alignment markers */}
          <div className="absolute top-1/2 -left-1 w-4 h-px bg-primary -translate-y-1/2" />
          <div className="absolute top-1/2 -right-1 w-4 h-px bg-primary -translate-y-1/2" />
        </div>

        {/* Progress Bar */}
        {scanning && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary shadow-lg shadow-primary/50"
                animate={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Status Indicator */}
        <motion.div
          className="absolute -top-6 xl:-top-8 left-0 right-0 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full bg-primary"
            animate={{
              opacity: scanning ? [1, 0.3, 1] : 0.5,
              scale: scanning ? [1, 1.3, 1] : 1,
              boxShadow: scanning 
                ? ["0 0 3px rgba(0,217,255,0.5)", "0 0 8px rgba(0,217,255,1)", "0 0 3px rgba(0,217,255,0.5)"]
                : "0 0 3px rgba(0,217,255,0.3)",
            }}
            transition={{
              duration: 1,
              repeat: scanning ? Infinity : 0,
            }}
          />
          <span className="text-[8px] xl:text-[10px] font-mono text-primary tracking-wider">
            {scanning ? `SCAN ${progress}%` : "READY"}
          </span>
        </motion.div>

        {/* Results Display */}
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
          <div className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded px-1 py-0.5 xl:px-2 xl:py-1 inline-block">
            <div className="text-[8px] xl:text-[10px] font-mono text-primary font-bold">
              ✓ MATCH
            </div>
            <div className="text-[6px] xl:text-[8px] text-primary/70 mt-0.5">
              98.7% • 42 PTS
            </div>
          </div>
        </motion.div>

        {/* Ambient Glow */}
        <motion.div
          className="absolute inset-0 rounded-lg blur-3xl bg-primary/10 -z-10"
          animate={{
            opacity: scanning ? [0.2, 0.4, 0.2] : 0.1,
            scale: scanning ? [1, 1.1, 1] : 1,
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
