# CyberArmor Frontend - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
cd /Users/mahadihassan/Projects/salted-hash/salted-hash-frontend
pnpm install
```

If you don't have pnpm installed:
```bash
npm install -g pnpm
```

### 2. Run Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 3. Explore the Application

**Key Pages:**
- **Home**: http://localhost:3000
- **Services**: http://localhost:3000/services
- **About**: http://localhost:3000/about
- **Blog**: http://localhost:3000/blog
- **Contact**: http://localhost:3000/contact
- **Login**: http://localhost:3000/login

**Demo Login Credentials:**
- Email: `demo@cyberarmor.com`
- Password: `Demo@123`

---

## 📂 Project Overview

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix-based)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Key Features

✅ **SSR-First Architecture** - Server-side rendering for optimal performance  
✅ **SEO Optimized** - Meta tags, Open Graph, JSON-LD schema  
✅ **Fully Responsive** - Mobile-first design  
✅ **Accessible** - WCAG compliant, keyboard navigation  
✅ **Animation Rich** - Framer Motion with reduced motion support  
✅ **Type Safe** - Full TypeScript coverage  

---

## 🎨 Design System

### Colors
- **Background**: `#0B1120` (Dark navy)
- **Primary**: `#00F0FF` (Neon cyan)
- **Secondary**: `#38BDF8` (Sky blue)
- **Text**: `#E2E8F0` (Light gray)

### Components
- Custom cards with hover effects
- Animated buttons with gradient borders
- Smooth page transitions
- Testimonial carousel with auto-play

---

## 📁 File Structure

```
app/                  # Next.js pages (App Router)
components/           # Reusable React components
  ui/                # shadcn/ui base components
lib/                 # Utilities (API, SEO, animations)
types/               # TypeScript definitions
public/data/         # JSON mock data (simulates API)
```

---

## 🔧 Mock Data

The application uses JSON files for mock data:

- **services.json** - 5 cybersecurity services
- **blogs.json** - 6 blog articles
- **company.json** - Company info, team, milestones
- **testimonials.json** - 6 client testimonials
- **auth.json** - Demo user credentials

---

## 🎯 Next Steps

### For Development
1. **Customize Branding** - Update colors in `tailwind.config.ts`
2. **Add Content** - Edit JSON files in `public/data/`
3. **Modify Pages** - Update components in `app/`
4. **Add Images** - Place in `public/images/`

### For Production
1. **Connect Backend API** - Replace mock API in `lib/api.ts`
2. **Add Real Authentication** - Implement JWT/session management
3. **Configure Environment Variables** - Copy `.env.example` to `.env.local`
4. **Set Up Analytics** - Add Google Analytics or similar
5. **Deploy** - Vercel, Netlify, or your preferred platform

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
pnpm dev -p 3001  # Run on different port
```

**Module not found errors?**
```bash
rm -rf node_modules .next
pnpm install
```

**Styling not working?**
```bash
# Ensure Tailwind is configured
pnpm tailwindcss init -p
```

---

## 📚 Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com)

---

## 🤝 Need Help?

Check the full [README.md](./README.md) for detailed documentation.

**Happy coding! 🎉**

