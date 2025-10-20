# CyberArmor Frontend - Visual Structure

```
cyberarmor-frontend/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript config
│   ├── tailwind.config.ts        # Tailwind theme
│   ├── next.config.mjs           # Next.js config
│   ├── postcss.config.mjs        # PostCSS config
│   ├── components.json           # shadcn/ui config
│   ├── .eslintrc.json            # ESLint rules
│   └── .gitignore                # Git ignore
│
├── 📚 Documentation
│   ├── README.md                 # Main documentation
│   ├── QUICKSTART.md             # Quick start guide
│   ├── PROJECT_SUMMARY.md        # Project overview
│   └── STRUCTURE.md              # This file
│
├── 🎨 App Directory (Next.js 14 App Router)
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── loading.tsx               # Loading state
│   ├── not-found.tsx             # 404 page
│   │
│   ├── 🛡️ services/
│   │   ├── page.tsx              # Services list
│   │   └── [slug]/
│   │       └── page.tsx          # Service detail (dynamic)
│   │
│   ├── 📖 blog/
│   │   ├── page.tsx              # Blog list
│   │   └── [slug]/
│   │       └── page.tsx          # Blog post (dynamic)
│   │
│   ├── 👥 about/
│   │   └── page.tsx              # About page
│   │
│   ├── 📧 contact/
│   │   └── page.tsx              # Contact page
│   │
│   ├── 🔐 Auth Pages
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   └── register/
│   │       └── page.tsx          # Register page
│   │
│   └── 📜 Legal Pages
│       ├── privacy-policy/
│       │   └── page.tsx          # Privacy policy
│       └── terms-of-service/
│           └── page.tsx          # Terms of service
│
├── 🧩 Components
│   ├── Navbar.tsx                # Navigation bar
│   ├── Footer.tsx                # Footer section
│   ├── HeroSection.tsx           # Hero with animations
│   ├── AnimatedSection.tsx       # Scroll reveal wrapper
│   ├── SectionTitle.tsx          # Section headers
│   ├── ServiceCard.tsx           # Service card component
│   ├── BlogCard.tsx              # Blog card component
│   ├── CTASection.tsx            # Call-to-action section
│   ├── TestimonialCarousel.tsx   # Testimonial slider
│   ├── ContactForm.tsx           # Contact form
│   │
│   └── ui/                       # shadcn/ui Components
│       ├── button.tsx            # Button component
│       ├── input.tsx             # Input field
│       ├── textarea.tsx          # Textarea field
│       ├── label.tsx             # Form label
│       └── card.tsx              # Card component
│
├── 🛠️ Lib (Utilities)
│   ├── api.ts                    # Mock API functions
│   ├── seo.ts                    # SEO utilities
│   ├── motion.ts                 # Animation variants
│   └── utils.ts                  # Helper functions
│
├── 📘 Types
│   └── index.ts                  # TypeScript interfaces
│
└── 📂 Public
    └── data/                     # Mock JSON Data
        ├── services.json         # 5 services
        ├── blogs.json            # 6 blog posts
        ├── company.json          # Company info
        ├── testimonials.json     # 6 testimonials
        └── auth.json             # Demo users
```

---

## 🗺️ Page Routing

```
/ (Home)
├── /services (Services List)
│   ├── /services/cyber-risk-assessment
│   ├── /services/penetration-testing
│   ├── /services/cloud-security-audit
│   ├── /services/compliance-governance
│   └── /services/incident-response-recovery
│
├── /about (About)
│
├── /contact (Contact)
│
├── /blog (Blog List)
│   ├── /blog/zero-trust-architecture-2025
│   ├── /blog/ai-powered-cyber-threats
│   ├── /blog/ransomware-defense-strategies
│   ├── /blog/cloud-security-best-practices
│   ├── /blog/supply-chain-security-risks
│   └── /blog/security-awareness-training
│
├── /login (Login)
│
├── /register (Register)
│
├── /privacy-policy (Privacy Policy)
│
└── /terms-of-service (Terms of Service)
```

---

## 🎨 Component Hierarchy

```
RootLayout
└── Navbar (client)
    └── Mobile Menu (animated)

Home Page (/)
├── HeroSection (animated grid background)
├── Services Preview Section
│   └── ServiceCard × 3 (animated)
├── Why Choose Us Section
│   └── Feature Cards × 4 (animated)
├── Testimonials Section
│   └── TestimonialCarousel (auto-play)
└── CTASection

Services Page
├── Services Grid
│   └── ServiceCard × 5
└── CTASection

Service Detail Page
├── Hero Banner
├── Overview Section
├── Benefits & Use Cases
└── CTASection

Blog Page
├── Blog Grid
│   └── BlogCard × 6
└── CTASection

Blog Detail Page
├── Hero Section
├── Article Content
├── Tags
└── CTASection

About Page
├── Mission & Vision
├── Our Story
├── Values Grid
├── Milestones Timeline
├── Leadership Team
└── CTASection

Contact Page
├── Contact Form (animated)
├── Contact Information
└── Map Placeholder

Login/Register Pages
├── Animated Background
├── Form (with validation)
└── Demo Credentials

Footer
├── Brand Section
├── Navigation Links
├── Contact Info
└── Copyright
```

---

## 🔄 Data Flow

```
User Request
    ↓
Next.js Server
    ↓
App Router (SSR/SSG)
    ↓
lib/api.ts (Mock API Layer)
    ↓
public/data/*.json
    ↓
Components (with Types)
    ↓
Rendered Page (HTML + CSS + JS)
    ↓
Framer Motion Animations
    ↓
User Interaction
```

---

## 🎯 Technology Stack Layers

```
┌─────────────────────────────────────┐
│   User Interface (Browser)          │
├─────────────────────────────────────┤
│   Framer Motion (Animations)        │
├─────────────────────────────────────┤
│   shadcn/ui + Lucide (Components)   │
├─────────────────────────────────────┤
│   Tailwind CSS (Styling)            │
├─────────────────────────────────────┤
│   React Components (TypeScript)     │
├─────────────────────────────────────┤
│   Next.js 14 App Router (SSR/SSG)   │
├─────────────────────────────────────┤
│   Node.js Runtime                   │
├─────────────────────────────────────┤
│   Mock API Layer (lib/api.ts)       │
├─────────────────────────────────────┤
│   JSON Data Files (public/data/)    │
└─────────────────────────────────────┘
```

---

## 🚀 Deployment Architecture

```
                    ┌──────────────┐
                    │   Vercel     │
                    │   (CDN)      │
                    └──────┬───────┘
                           │
                ┌──────────▼──────────┐
                │   Next.js Server    │
                │   (SSR Engine)      │
                └──────────┬──────────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
     ┌──────────┐   ┌──────────┐   ┌──────────┐
     │  Static  │   │  Server  │   │   API    │
     │  Pages   │   │Components│   │  Routes  │
     └──────────┘   └──────────┘   └──────────┘
```

---

## 📊 Feature Matrix

| Feature                  | Status | Location              |
|--------------------------|--------|-----------------------|
| SSR/SSG                  | ✅     | All pages             |
| TypeScript               | ✅     | Entire project        |
| Tailwind CSS             | ✅     | All components        |
| Framer Motion            | ✅     | Animated components   |
| SEO Optimization         | ✅     | lib/seo.ts            |
| Responsive Design        | ✅     | All pages             |
| Accessibility            | ✅     | All components        |
| Mock API                 | ✅     | lib/api.ts            |
| Form Validation          | ✅     | Contact/Auth forms    |
| Dynamic Routes           | ✅     | Services, Blog        |
| 404 Page                 | ✅     | app/not-found.tsx     |
| Loading States           | ✅     | app/loading.tsx       |
| Animation Support        | ✅     | lib/motion.ts         |
| Dark Theme               | ✅     | tailwind.config.ts    |

---

**This structure provides a complete, production-ready frontend foundation! 🎉**

