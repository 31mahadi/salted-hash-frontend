// Centralized Theme Configuration
// Change the theme here to switch between light and dark modes

export type Theme = 'light' | 'dark';

// Current theme - change this to switch themes
export const CURRENT_THEME: Theme = 'dark';

// Theme configurations
export const THEMES = {
  light: {
    colors: {
      background: "#FAFBFC",
      foreground: "#0F172A",
      primary: {
        DEFAULT: "#0EA5E9",
        foreground: "#FFFFFF",
        glow: "#0EA5E9",
        light: "#38BDF8",
        dark: "#0284C7",
      },
      secondary: {
        DEFAULT: "#8B5CF6",
        foreground: "#FFFFFF",
        glow: "#8B5CF6",
        light: "#A78BFA",
        dark: "#7C3AED",
      },
      accent: {
        DEFAULT: "#F59E0B",
        foreground: "#FFFFFF",
        light: "#FBBF24",
        dark: "#D97706",
      },
      card: {
        DEFAULT: "rgba(255, 255, 255, 0.95)",
        foreground: "#0F172A",
        glass: "rgba(255, 255, 255, 0.8)",
      },
      border: "rgba(14, 165, 233, 0.2)",
      input: "rgba(255, 255, 255, 0.9)",
      ring: "#0EA5E9",
      purple: {
        DEFAULT: "#8B5CF6",
        dark: "#7C3AED",
        light: "#A78BFA",
      },
    },
    gradients: {
      primary: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 50%, #06B6D4 100%)",
      secondary: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 50%, #C084FC 100%)",
      accent: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #FCD34D 100%)",
      background: "linear-gradient(135deg, #FAFBFC 0%, #F1F5F9 50%, #E2E8F0 100%)",
      card: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
      hero: "linear-gradient(135deg, #FAFBFC 0%, #F1F5F9 25%, #E2E8F0 50%, #CBD5E1 75%, #94A3B8 100%)",
    },
    shadows: {
      glow: "0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
      card: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      button: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      hero: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(14, 165, 233, 0.1)",
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
      primary: "linear-gradient(135deg, #00D9FF 0%, #33E3FF 50%, #06B6D4 100%)",
      secondary: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #C084FC 100%)",
      accent: "linear-gradient(135deg, #EC4899 0%, #F472B6 50%, #F9A8D4 100%)",
      background: "linear-gradient(135deg, #050A14 0%, #0F172A 50%, #1E293B 100%)",
      card: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)",
      hero: "linear-gradient(135deg, #050A14 0%, #0F172A 25%, #1E293B 50%, #334155 75%, #475569 100%)",
    },
    shadows: {
      glow: "0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
      card: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
      button: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
      hero: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 217, 255, 0.1)",
    }
  }
} as const;

// Get current theme configuration
export const getCurrentTheme = () => THEMES[CURRENT_THEME];

// Get theme-specific CSS variables
export const getThemeCSSVariables = (themeName: Theme = CURRENT_THEME) => {
  const theme = THEMES[themeName];
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
