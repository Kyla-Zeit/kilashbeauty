# KilashBeauty

A modern lash studio website built with **Next.js, React, and Tailwind CSS**.  
Designed for clean visuals, smooth section-based navigation, and classy on-scroll animations.

👉 **Live site:** https://kyla-zeit.github.io/kilashbeauty

---

## 🚀 Features

- **Responsive** across desktop, tablet, and mobile
- **Smooth scroll** navigation (anchors + sticky header offset)
- **On-scroll reveal** animations (IntersectionObserver)
- **Hero, Services, Gallery, Testimonials, Contact** sections
- **Custom brand logo** + gradient color system
- **Accessible**: prefers-reduced-motion fallback disables animations
- Ready to **deploy on GitHub Pages** (static export)

---

## 📂 Project Structure

kilashbeauty/
│── app/
│   │── layout.tsx            # Root layout: fonts, providers, global CSS
│   │── page.tsx              # Homepage (assembles all sections)
│   │── globals.css           # Tailwind v4 tokens + utilities
│   │── components/
│   │   │── Reveal.tsx        # IntersectionObserver reveal wrapper
│   │   │── navigation.tsx    # Sticky navbar with smooth-scroll links
│   │   │── hero-section.tsx  # Hero with feathered background
│   │   │── services-section.tsx
│   │   │── gallery-section.tsx
│   │   │── testimonials-section.tsx
│   │   └── contact-section.tsx
│   │── ui/
│   │   └── button.tsx        # shadcn/ui-style button
│   │── hooks/                # (optional)
│   │── lib/
│   │   └── basePath.ts       # withBase() helper for static export paths
│
│── public/
│   │── logo-kilashbeauty.svg
│   │── favicon.ico
│   └── assets/               # Images used by hero/gallery
│       │── *.jpg
│       └── *.png
│
│── tailwind.config.ts
│── postcss.config.js
│── package.json
└── README.md



---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React** + **TypeScript**
- **Tailwind CSS v4** (+ small utility layer for animations & edge-feather)
- **Lucide Icons**
- Optional: **shadcn/ui**-style button variants
