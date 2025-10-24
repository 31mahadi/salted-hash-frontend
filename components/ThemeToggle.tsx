"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
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
      className="relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <Sun 
            className={`h-4 w-4 transition-all duration-400 ${
              theme === 'dark' 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 rotate-90 scale-75 absolute'
            }`} 
          />
          <Moon 
            className={`h-4 w-4 transition-all duration-400 ${
              theme === 'light' 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-90 scale-75 absolute'
            }`} 
          />
        </div>
        <span className="transition-all duration-300">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      </div>
    </Button>
  );
}
