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

<pre>
kilashbeauty/
│── app/
│   │── layout.tsx
│   │── page.tsx
│   │── globals.css
│   │── components/
│   │   │── Reveal.tsx
│   │   │── navigation.tsx
│   │   │── hero-section.tsx
│   │   │── services-section.tsx
│   │   │── gallery-section.tsx
│   │   │── testimonials-section.tsx
│   │   └── contact-section.tsx
│   │── ui/
│   │   └── button.tsx
│   │── hooks/
│   │── lib/
│   │   └── basePath.ts
│
│── public/
│   │── logo-kilashbeauty.svg
│   │── favicon.ico
│   └── assets/
│       │── *.jpg
│       └── *.png
│
│── tailwind.config.ts
│── postcss.config.js
│── package.json
└── README.md
</pre>




---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React** + **TypeScript**
- **Tailwind CSS v4** (+ small utility layer for animations & edge-feather)
- **Lucide Icons**
- Optional: **shadcn/ui**-style button variants
