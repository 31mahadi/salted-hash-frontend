// Application Constants

// Base URLs
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

// Data paths
export const DATA_PATH = process.env.NEXT_PUBLIC_DATA_PATH || "/data";

// Company information
export const COMPANY_NAME = "SaltedHash";
export const COMPANY_TAGLINE = "Fortify Your Digital Frontier";
export const COMPANY_EMAIL = "contact@saltedhash.com";
export const COMPANY_PHONE = "+1 (800) SALT-HASH";
export const COMPANY_PHONE_DISPLAY = "+1 (800) SALT-HASH";
export const COMPANY_PHONE_TEL = "+18002923726"; // For tel: links

// Company address
export const COMPANY_ADDRESS = {
  street: "123 Security Boulevard, Suite 500",
  city: "San Francisco",
  state: "CA",
  zip: "94102",
  country: "United States",
  full: "123 Security Boulevard, Suite 500, San Francisco, CA 94102"
};

// Business hours
export const BUSINESS_HOURS = {
  weekdays: "Monday - Friday: 9:00 AM - 6:00 PM PST",
  emergency: "24/7 Emergency Response Available",
  timezone: "PST"
};

// Emergency contact
export const EMERGENCY_CONTACT = {
  phone: "+18002927376",
  display: "Call Emergency Hotline",
  description: "For urgent security incidents, our incident response team is available 24/7/365."
};

// Social media links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/saltedhash",
  linkedin: "https://linkedin.com/company/saltedhash",
  github: "https://github.com/saltedhash",
  facebook: "https://facebook.com/saltedhash",
  instagram: "https://instagram.com/saltedhash",
  youtube: "https://youtube.com/@saltedhash"
};

// Company certifications and credentials
export const CERTIFICATIONS = {
  iso27001: "ISO 27001 Certified",
  soc2: "SOC 2 Type II Certified",
  oscp: "OSCP Certified Team",
  cissp: "CISSP Certified Professionals"
};

// Company stats
export const COMPANY_STATS = {
  founded: "2018",
  clients: "500+",
  teamSize: "50+",
  countries: "15+",
  incidentsResolved: "10,000+"
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

