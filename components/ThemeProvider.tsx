"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Theme, THEMES, getThemeCSSVariables } from "@/lib/theme-config";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: typeof THEMES.light.colors | typeof THEMES.dark.colors;
  gradients: typeof THEMES.light.gradients | typeof THEMES.dark.gradients;
  shadows: typeof THEMES.light.shadows | typeof THEMES.dark.shadows;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize theme from localStorage after hydration
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Apply theme CSS variables to document
  useEffect(() => {
    if (!mounted) return;
    
    const cssVars = getThemeCSSVariables(theme);
    const root = document.documentElement;
    
    // Start transition
    setIsTransitioning(true);
    root.classList.add('theme-transition');
    
    // Apply CSS variables
    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Update Tailwind classes
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Complete transition
    const timeout = setTimeout(() => {
      root.classList.remove('theme-transition');
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [theme, mounted]);

  const currentTheme = THEMES[theme];

  const value = {
    theme,
    setTheme,
    colors: currentTheme.colors,
    gradients: currentTheme.gradients,
    shadows: currentTheme.shadows,
  };

  return (
    <ThemeContext.Provider value={value}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.1
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            y: -20,
            transition: {
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          className="min-h-screen"
        >
          {/* Theme transition overlay */}
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-primary/5 via-purple/5 to-accent/5 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
