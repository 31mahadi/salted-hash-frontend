// Company Configuration Utility
// This file ensures all company information is centralized and consistent

import { 
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_ADDRESS,
  BUSINESS_HOURS,
  EMERGENCY_CONTACT,
  SOCIAL_LINKS,
  CERTIFICATIONS,
  COMPANY_STATS
} from "./constants";

// Export a comprehensive company configuration object
export const COMPANY_CONFIG = {
  // Basic Info
  name: COMPANY_NAME,
  tagline: COMPANY_TAGLINE,
  
  // Contact Information
  contact: {
    email: COMPANY_EMAIL,
    phone: {
      display: COMPANY_PHONE_DISPLAY,
      tel: COMPANY_PHONE_TEL
    },
    address: COMPANY_ADDRESS,
    businessHours: BUSINESS_HOURS,
    emergency: EMERGENCY_CONTACT
  },
  
  // Social Media
  social: SOCIAL_LINKS,
  
  // Certifications
  certifications: CERTIFICATIONS,
  
  // Company Stats
  stats: COMPANY_STATS,
  
  // SEO Information
  seo: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://saltedhash.com",
    description: `${COMPANY_TAGLINE}. Empowering organizations with cutting-edge cybersecurity solutions.`,
    keywords: [
      "cybersecurity",
      "penetration testing", 
      "cloud security",
      "compliance",
      "incident response",
      "risk assessment",
      "SOC 2",
      "ISO 27001"
    ]
  }
};

// Helper functions for common use cases
export const getContactInfo = () => COMPANY_CONFIG.contact;
export const getSocialLinks = () => COMPANY_CONFIG.social;
export const getCompanyStats = () => COMPANY_CONFIG.stats;
export const getCertifications = () => COMPANY_CONFIG.certifications;

// Validation function to ensure all required fields are present
export const validateCompanyConfig = () => {
  const required = [
    'name', 'tagline', 'contact.email', 'contact.phone.display', 
    'contact.address.full', 'social.twitter', 'social.linkedin'
  ];
  
  const missing = required.filter(field => {
    const value = field.split('.').reduce((obj, key) => obj?.[key], COMPANY_CONFIG);
    return !value;
  });
  
  if (missing.length > 0) {
    console.warn('Missing required company configuration fields:', missing);
    return false;
  }
  
  return true;
};

// Export individual constants for backward compatibility
export {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_ADDRESS,
  BUSINESS_HOURS,
  EMERGENCY_CONTACT,
  SOCIAL_LINKS,
  CERTIFICATIONS,
  COMPANY_STATS
};
