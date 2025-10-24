import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary-DEFAULT)",
          foreground: "var(--color-primary-foreground)",
          glow: "var(--color-primary-glow)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary-DEFAULT)",
          foreground: "var(--color-secondary-foreground)",
          glow: "var(--color-secondary-glow)",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent-DEFAULT)",
          foreground: "var(--color-accent-foreground)",
          light: "var(--color-accent-light)",
          dark: "var(--color-accent-dark)",
        },
        card: {
          DEFAULT: "var(--color-card-DEFAULT)",
          foreground: "var(--color-card-foreground)",
          glass: "var(--color-card-glass)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        purple: {
          DEFAULT: "var(--color-purple-DEFAULT)",
          dark: "var(--color-purple-dark)",
          light: "var(--color-purple-light)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "var(--shadow-glow)",
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "text-shimmer": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "glitch": "glitch 0.3s ease-in-out infinite",
        "scan-line": "scan-line 4s linear infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-background": "var(--gradient-background)",
        "gradient-card": "var(--gradient-card)",
        "gradient-hero": "var(--gradient-hero)",
      },
      boxShadow: {
        "glow": "var(--shadow-glow)",
        "card": "var(--shadow-card)",
        "button": "var(--shadow-button)",
        "hero": "var(--shadow-hero)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

