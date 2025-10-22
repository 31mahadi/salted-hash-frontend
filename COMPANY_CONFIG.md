# Company Information Management

This document explains how to manage all company-related information in a centralized way.

## 📁 Centralized Configuration

All company information is managed from **one single file**: `lib/constants.ts`

### 🏢 Company Information

```typescript
// Basic company info
export const COMPANY_NAME = "SaltedHash";
export const COMPANY_TAGLINE = "Fortify Your Digital Frontier";
export const COMPANY_EMAIL = "contact@saltedhash.com";
export const COMPANY_PHONE_DISPLAY = "+1 (800) SALT-HASH";
export const COMPANY_PHONE_TEL = "+18002923726"; // For tel: links
```

### 📍 Address Information

```typescript
export const COMPANY_ADDRESS = {
  street: "123 Security Boulevard, Suite 500",
  city: "San Francisco", 
  state: "CA",
  zip: "94102",
  country: "United States",
  full: "123 Security Boulevard, Suite 500, San Francisco, CA 94102"
};
```

### 🕒 Business Hours

```typescript
export const BUSINESS_HOURS = {
  weekdays: "Monday - Friday: 9:00 AM - 6:00 PM PST",
  emergency: "24/7 Emergency Response Available", 
  timezone: "PST"
};
```

### 🚨 Emergency Contact

```typescript
export const EMERGENCY_CONTACT = {
  phone: "+18002927376",
  display: "Call Emergency Hotline",
  description: "For urgent security incidents, our incident response team is available 24/7/365."
};
```

### 📱 Social Media Links

```typescript
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/saltedhash",
  linkedin: "https://linkedin.com/company/saltedhash", 
  github: "https://github.com/saltedhash",
  facebook: "https://facebook.com/saltedhash",
  instagram: "https://instagram.com/saltedhash",
  youtube: "https://youtube.com/@saltedhash"
};
```

### 🏆 Certifications

```typescript
export const CERTIFICATIONS = {
  iso27001: "ISO 27001 Certified",
  soc2: "SOC 2 Type II Certified", 
  oscp: "OSCP Certified Team",
  cissp: "CISSP Certified Professionals"
};
```

### 📊 Company Stats

```typescript
export const COMPANY_STATS = {
  founded: "2018",
  clients: "500+",
  teamSize: "50+", 
  countries: "15+",
  incidentsResolved: "10,000+"
};
```

## 🔄 How to Update Company Information

### 1. **Change Contact Information**
To update email, phone, or address:
1. Open `lib/constants.ts`
2. Update the relevant constants
3. All components will automatically use the new information

### 2. **Update Social Media Links**
To change social media URLs:
1. Open `lib/constants.ts`
2. Update the `SOCIAL_LINKS` object
3. Footer and other components will reflect changes immediately

### 3. **Modify Business Hours**
To change business hours:
1. Open `lib/constants.ts`
2. Update the `BUSINESS_HOURS` object
3. Contact page will show updated hours

### 4. **Add New Social Platforms**
To add new social media platforms:
1. Add the new platform to `SOCIAL_LINKS` in `lib/constants.ts`
2. Update components that display social links (like Footer)
3. Add the corresponding icon from Lucide React

## 📋 Components Using Centralized Config

The following components automatically use the centralized configuration:

- **Footer** (`components/Footer.tsx`) - Contact info, social links, address
- **Contact Page** (`app/contact/page.tsx`) - All contact information
- **SEO Configuration** (`lib/seo.ts`) - Meta tags, structured data
- **Company Config Utility** (`lib/company-config.ts`) - Comprehensive config object

## ✅ Benefits

1. **Single Source of Truth**: All company info in one place
2. **Easy Updates**: Change once, update everywhere
3. **Consistency**: No risk of outdated information
4. **Maintainability**: Easy to manage and update
5. **Type Safety**: TypeScript ensures correct usage

## 🚀 Future Enhancements

- Environment-specific configurations
- Multi-language support
- Dynamic content loading
- Admin panel for easy updates

---

**Note**: Always update company information in `lib/constants.ts` first, then verify changes across all pages and components.
