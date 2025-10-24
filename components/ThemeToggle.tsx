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
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-2">
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="light"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </motion.div>
          ) : (
            <motion.div
              key="dark"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <Moon className="h-4 w-4" />
              <span>Dark</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Button>
  );
}
