"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log('Current theme:', theme);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('Switching to:', newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="relative overflow-hidden"
        disabled
      >
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <span>Theme</span>
        </div>
      </Button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="relative overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple/10 to-accent/10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
        
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-md"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 1.2, opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        <div className="relative flex items-center gap-2">
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="light"
                initial={{ opacity: 0, rotate: -180, scale: 0.5, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 0, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.6
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  rotate: 180, 
                  scale: 0.5, 
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sun className="h-4 w-4" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  Light
                </motion.span>
              </motion.div>
            ) : (
              <motion.div
                key="dark"
                initial={{ opacity: 0, rotate: -180, scale: 0.5, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 0, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.6
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  rotate: 180, 
                  scale: 0.5, 
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Moon className="h-4 w-4" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  Dark
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Button>
    </motion.div>
  );
}
