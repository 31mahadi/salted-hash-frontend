// Centralized Theme Configuration
// Change the theme here to switch between light and dark modes

export type Theme = 'light' | 'dark';

// Current theme - change this to switch themes
export const CURRENT_THEME: Theme = 'dark';

// Theme configurations
export const THEMES = {
  light: {
    colors: {
      background: "#FFFFFF",
      foreground: "#1A1A1A",
      primary: {
        DEFAULT: "#2563EB",
        foreground: "#FFFFFF",
        glow: "#2563EB",
        light: "#3B82F6",
        dark: "#1D4ED8",
      },
      secondary: {
        DEFAULT: "#7C3AED",
        foreground: "#FFFFFF",
        glow: "#7C3AED",
        light: "#A78BFA",
        dark: "#5B21B6",
      },
      accent: {
        DEFAULT: "#DC2626",
        foreground: "#FFFFFF",
        light: "#EF4444",
        dark: "#B91C1C",
      },
      card: {
        DEFAULT: "rgba(255, 255, 255, 0.8)",
        foreground: "#1A1A1A",
        glass: "rgba(255, 255, 255, 0.6)",
      },
      border: "rgba(37, 99, 235, 0.2)",
      input: "rgba(255, 255, 255, 0.9)",
      ring: "#2563EB",
      purple: {
        DEFAULT: "#7C3AED",
        dark: "#5B21B6",
        light: "#A78BFA",
      },
    },
    gradients: {
      primary: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
      secondary: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      accent: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
      card: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)",
    },
    shadows: {
      glow: "0 0 20px rgba(37, 99, 235, 0.3), 0 0 40px rgba(37, 99, 235, 0.1)",
      card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      button: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    }
  },
  dark: {
    colors: {
      background: "#050A14",
      foreground: "#E2E8F0",
      primary: {
        DEFAULT: "#00D9FF",
        foreground: "#050A14",
        glow: "#00D9FF",
        light: "#33E3FF",
        dark: "#0099CC",
      },
      secondary: {
        DEFAULT: "#7C3AED",
        foreground: "#050A14",
        glow: "#7C3AED",
        light: "#A78BFA",
        dark: "#5B21B6",
      },
      accent: {
        DEFAULT: "#EC4899",
        foreground: "#050A14",
        light: "#F472B6",
        dark: "#BE185D",
      },
      card: {
        DEFAULT: "rgba(15, 23, 42, 0.7)",
        foreground: "#E2E8F0",
        glass: "rgba(15, 23, 42, 0.4)",
      },
      border: "rgba(0, 217, 255, 0.15)",
      input: "rgba(15, 23, 42, 0.9)",
      ring: "#00D9FF",
      purple: {
        DEFAULT: "#7C3AED",
        dark: "#5B21B6",
        light: "#A78BFA",
      },
    },
    gradients: {
      primary: "linear-gradient(135deg, #00D9FF 0%, #33E3FF 100%)",
      secondary: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      accent: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
      background: "linear-gradient(135deg, #050A14 0%, #0F172A 100%)",
      card: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)",
    },
    shadows: {
      glow: "0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
      card: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
      button: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
    }
  }
} as const;

// Get current theme configuration
export const getCurrentTheme = () => THEMES[CURRENT_THEME];

// Get theme-specific CSS variables
export const getThemeCSSVariables = () => {
  const theme = getCurrentTheme();
  const cssVars: Record<string, string> = {};
  
  // Flatten nested color object
  const flattenColors = (obj: any, prefix = '') => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        flattenColors(value, `${prefix}${key}-`);
      } else {
        cssVars[`--color-${prefix}${key}`] = value;
      }
    });
  };
  
  flattenColors(theme.colors);
  
  // Add gradients
  Object.keys(theme.gradients).forEach(key => {
    cssVars[`--gradient-${key}`] = theme.gradients[key as keyof typeof theme.gradients];
  });
  
  // Add shadows
  Object.keys(theme.shadows).forEach(key => {
    cssVars[`--shadow-${key}`] = theme.shadows[key as keyof typeof theme.shadows];
  });
  
  return cssVars;
};

// Export current theme colors for direct use
export const COLORS = getCurrentTheme().colors;
export const GRADIENTS = getCurrentTheme().gradients;
export const SHADOWS = getCurrentTheme().shadows;
