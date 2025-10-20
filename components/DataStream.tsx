"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DataStream() {
  const [streams, setStreams] = useState<{ id: number; left: string; duration: number }[]>([]);

  useEffect(() => {
    // Generate random data streams
    const newStreams = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 20,
    }));
    setStreams(newStreams);
  }, []);

  const securityTerms = [
    "SHA-256",
    "AES-256",
    "RSA-4096",
    "TLS 1.3",
    "OAuth 2.0",
    "JWT",
    "MFA",
    "HTTPS",
    "SSL",
    "VPN",
    "FIREWALL",
    "IDS/IPS",
    "SIEM",
    "ZERO-TRUST",
    "ENCRYPTED",
    "SECURE",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 w-px opacity-20"
          style={{ left: stream.left }}
          animate={{
            y: ["0vh", "100vh"],
          }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          <div className="flex flex-col gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="text-[8px] font-mono text-primary opacity-40 whitespace-nowrap transform rotate-90"
              >
                {securityTerms[Math.floor(Math.random() * securityTerms.length)]}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

