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
  const [theme, setTheme] = useState<Theme>('dark');

  // Apply theme CSS variables to document
  useEffect(() => {
    const cssVars = getThemeCSSVariables();
    const root = document.documentElement;
    
    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
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
