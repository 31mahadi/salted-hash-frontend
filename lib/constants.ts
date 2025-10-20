// Application Constants

// Base URLs
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

// Data paths
export const DATA_PATH = process.env.NEXT_PUBLIC_DATA_PATH || "/data";

// Company information
export const COMPANY_NAME = "CyberArmor";
export const COMPANY_TAGLINE = "Fortify Your Digital Frontier";
export const COMPANY_EMAIL = "contact@cyberarmor.com";
export const COMPANY_PHONE = "+1 (800) CYBER-ARM";

// Social media links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/cyberarmor",
  linkedin: "https://linkedin.com/company/cyberarmor",
  github: "https://github.com/cyberarmor",
};

// Feature flags
export const FEATURES = {
  analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  chat: process.env.NEXT_PUBLIC_ENABLE_CHAT === "true",
};

// API endpoints (for future backend integration)
export const API_ENDPOINTS = {
  services: "/api/services",
  blogs: "/api/blog",
  contact: "/api/contact",
  auth: {
    login: "/api/auth/login",
    register: "/api/auth/register",
    logout: "/api/auth/logout",
  },
};

// Animation settings
export const ANIMATION_DURATION = 0.6;
export const STAGGER_DELAY = 0.1;

// Pagination
export const ITEMS_PER_PAGE = 12;

