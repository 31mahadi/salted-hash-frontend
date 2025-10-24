"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Theme, THEMES, getThemeCSSVariables } from "@/lib/theme-config";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: typeof THEMES.light.colors;
  gradients: typeof THEMES.light.gradients;
  shadows: typeof THEMES.light.shadows;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize from localStorage or default to dark
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'dark';
    }
    return 'dark';
  });

  // Apply theme CSS variables to document
  useEffect(() => {
    const cssVars = getThemeCSSVariables(theme);
    const root = document.documentElement;
    
    // Apply CSS variables
    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Update Tailwind classes
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

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
      {children}
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
