# WedVisa Frontend

Premium marketing landing page for **WedVisa** — an AI-powered wedding visa platform. Built with a modern SaaS aesthetic (generous spacing, glassmorphism, elegant typography, and smooth motion) without copying any third-party branding or assets.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn-style UI primitives (Radix + CVA)
- Lucide React
- `next/font` (Inter + Playfair Display)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/                  # App Router layout + homepage
  components/
    landing/            # Homepage sections (hero, pricing, etc.)
    ui/                 # Reusable Button, Accordion
  lib/                  # utils + content data
  types/                # Shared TypeScript interfaces
```

## Homepage sections

1. Announcement bar  
2. Sticky glass navigation + Services mega menu  
3. Full-viewport hero with video background + curved divider  
4. How it works  
5. Features (alternating layout)  
6. Countries grid  
7. Testimonials carousel  
8. Pricing  
9. FAQ accordion  
10. Gradient CTA  
11. Multi-column footer + newsletter  

## Notes

- All product copy and visuals are original for WedVisa.
- Hero uses a free stock background video with a gradient fallback.
- Animations respect `prefers-reduced-motion`.
