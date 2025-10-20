import { Variants } from "framer-motion";

// Check if user prefers reduced motion
export const prefersReducedMotion = 
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fade in variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: prefersReducedMotion ? 0 : 0.6 }
  },
};

// Fade in up variants
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "easeOut"
    }
  },
};

// Fade in down variants
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "easeOut"
    }
  },
};

// Scale in variants
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: prefersReducedMotion ? 1 : 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: "easeOut"
    }
  },
};

// Stagger container variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
      delayChildren: prefersReducedMotion ? 0 : 0.2,
    },
  },
};

// Stagger item variants
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: "easeOut"
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: prefersReducedMotion ? 0 : -50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "easeOut"
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: prefersReducedMotion ? 0 : 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "easeOut"
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 10 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: "easeInOut"
    },
  },
  exit: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : -10,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.3,
      ease: "easeInOut"
    },
  },
};

// Hover scale effect
export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: prefersReducedMotion ? 1 : 1.05,
    transition: { duration: 0.2 }
  },
};

// Hover glow effect
export const hoverGlow = {
  rest: { 
    boxShadow: "0 0 0 rgba(0, 240, 255, 0)",
  },
  hover: { 
    boxShadow: prefersReducedMotion 
      ? "0 0 0 rgba(0, 240, 255, 0)"
      : "0 0 20px rgba(0, 240, 255, 0.5)",
    transition: { duration: 0.3 }
  },
};

// Cinematic entrance
export const cinematicEntrance: Variants = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 50,
    filter: prefersReducedMotion ? "none" : "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: prefersReducedMotion ? 0 : 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

// Card lift effect
export const cardLift: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: prefersReducedMotion ? 0 : -12,
    scale: prefersReducedMotion ? 1 : 1.02,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

