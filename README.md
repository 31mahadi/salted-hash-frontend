# CyberArmor Frontend

**Fortify Your Digital Frontier**

A premium, SSR-first Next.js 14 frontend for a cybersecurity company, featuring beautiful animations, comprehensive service pages, and a clean, scalable architecture.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0055)

---

## 🚀 Features

- **Next.js 14 App Router** - SSR-first with Server Components
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Rich animations with accessibility support
- **shadcn/ui** - Beautiful, accessible Radix-based components
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD schema
- **Mock API Layer** - Local JSON data simulating backend calls
- **Responsive Design** - Mobile-first, works on all devices
- **Accessibility** - WCAG compliant, keyboard navigation, reduced motion support

---

## 📁 Project Structure

```
cyberarmor-frontend/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   ├── services/            # Services pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── blog/                # Blog list & detail pages
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   ├── privacy-policy/      # Privacy policy
│   └── terms-of-service/    # Terms of service
├── components/              # React components
│   ├── ui/                  # shadcn/ui base components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── BlogCard.tsx
│   ├── ContactForm.tsx
│   ├── TestimonialCarousel.tsx
│   └── ...
├── lib/                     # Utility libraries
│   ├── api.ts              # Mock API functions
│   ├── seo.ts              # SEO utilities
│   ├── motion.ts           # Framer Motion variants
│   └── utils.ts            # Helper functions
├── types/                   # TypeScript type definitions
│   └── index.ts
├── public/
│   └── data/               # JSON mock data
│       ├── services.json
│       ├── blogs.json
│       ├── company.json
│       ├── testimonials.json
│       └── auth.json
└── ...
```

---

## 🎨 Design System

**Color Palette:**
- Background: `#0B1120` (Dark navy)
- Primary: `#00F0FF` (Neon cyan)
- Secondary: `#38BDF8` (Sky blue)
- Text: `#E2E8F0` (Light gray)

**Typography:**
- Font: Inter (Google Fonts)
- Headings: Bold, gradient text effects
- Body: 16px base, responsive scaling

**Components:**
- Cards with hover effects and neon glows
- Animated buttons with gradient borders
- Smooth page transitions
- Scroll-triggered animations

---

## 🛠️ Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. **Clone the repository:**
   ```bash
   cd salted-hash-frontend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

```bash
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

---

## 🗂️ Mock Data

The project uses local JSON files in `/public/data` to simulate API responses:

### Services (`services.json`)
- Cyber Risk Assessment
- Penetration Testing
- Cloud Security Audit
- Compliance & Governance
- Incident Response & Recovery

### Blogs (`blogs.json`)
- 6+ articles on cybersecurity topics
- Categories: Threat Intelligence, Cloud Security, Application Security, etc.

### Company (`company.json`)
- Mission, Vision, Story
- Team members
- Company milestones
- Core values

### Testimonials (`testimonials.json`)
- 6 client testimonials with ratings

### Authentication (`auth.json`)
- Demo credentials for testing login functionality

**Demo Login:**
- Email: `demo@cyberarmor.com`
- Password: `Demo@123`

---

## 🎭 Animation Features

All animations respect `prefers-reduced-motion` for accessibility:

- **Page Transitions** - Smooth fade and slide effects
- **Scroll Reveals** - Elements animate into view on scroll
- **Hover Effects** - Neon glows, scale transforms
- **Testimonial Carousel** - Auto-play with swipe gestures
- **Form Animations** - Success/error states with motion

---

## 🔒 Pages Overview

### Public Pages
- **Home (/)** - Hero, services preview, features, testimonials, CTA
- **Services (/services)** - Service listing and detail pages
- **About (/about)** - Mission, vision, team, milestones
- **Blog (/blog)** - Articles with categories and tags
- **Contact (/contact)** - Form with company information

### Authentication
- **Login (/login)** - Email/password authentication
- **Register (/register)** - User registration form

### Legal
- **Privacy Policy (/privacy-policy)**
- **Terms of Service (/terms-of-service)**

---

## 🧪 SEO & Performance

- **Metadata API** - Dynamic meta tags per page
- **Open Graph Tags** - Social media sharing optimization
- **JSON-LD Schema** - Structured data for search engines
- **Server Components** - Fast initial page loads
- **Static Generation** - Blog and service pages pre-rendered
- **Image Optimization** - Next.js Image component ready

---

## 🎯 Future Enhancements (Backend Integration)

This frontend is designed to integrate seamlessly with a NestJS backend:

1. Replace mock API functions in `lib/api.ts` with real HTTP calls
2. Add authentication with JWT tokens
3. Implement real-time notifications via WebSocket
4. Connect to a CMS for blog management
5. Add analytics and monitoring

**API Integration Points:**
- `/api/services` - Service listing
- `/api/blog` - Blog posts
- `/api/contact` - Contact form submission
- `/api/auth/login` - User authentication
- `/api/auth/register` - User registration

---

## 🤝 Contributing

This is a demonstration project. For production use:

1. Replace mock data with real API endpoints
2. Add proper authentication and session management
3. Implement form validation and error handling
4. Add analytics and monitoring
5. Configure environment variables
6. Set up CI/CD pipeline

---

## 📄 License

This project is provided as-is for demonstration purposes.

---

## 📞 Contact

**CyberArmor**  
Email: contact@cyberarmor.com  
Phone: +1 (800) CYBER-ARM  
Website: [https://cyberarmor.com](https://cyberarmor.com)

---

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **Radix UI** - Accessible primitives

---

**Built with ❤️ for cybersecurity professionals**

