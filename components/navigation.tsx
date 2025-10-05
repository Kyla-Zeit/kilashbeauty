// components/navigation.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

/** Inline brand mark so it never 404s and spacing is pixel-perfect */
function BrandLogo({ className = "h-12 sm:h-14 md:h-16 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 80"
      className={className + " block"} // block prevents baseline cropping
      role="img"
      aria-label="KILASHBEAUTY logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        <linearGradient id="kb-gradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#2E7CF5" />
          <stop offset="1" stopColor="#EC6AD9" />
        </linearGradient>
      </defs>

      {/* Lash icon (left) — vertical alignment tuned */}
      <g transform="translate(12,18) scale(0.36)">
        <path
          d="M18 46c20-18 50-30 82-30 28 0 51 9 66 17 16 8 29 12 43 12 15 0 26-4 33-10
             -6 11-22 22-46 22-16 0-30-4-47-12-17-8-37-16-64-16-28 0-50 8-61 17z"
          fill="url(#kb-gradient)"
        />
        <path
          d="M104 70c11 7 25 12 46 12 22 0 39-8 52-17-10 18-33 31-65 31-24 0-43-7-57-17z"
          fill="url(#kb-gradient)"
        />
      </g>

      {/* Wordmark — final spacing so it sits nicely beside the icon */}
      <text
        x="104" y="50"
        fontFamily="Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif"
        fontSize="26" fontWeight="800" letterSpacing="2"
        fill="#111114"
      >
        KILASHBEAUTY
      </text>
    </svg>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Smooth-scroll and close the mobile menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      history.pushState(null, "", `#${id}`)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand — clickable logo goes home/top */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(false)
              window.scrollTo({ top: 0, behavior: "smooth" })
              history.pushState(null, "", "#home")
            }}
            className="flex items-center gap-3"
            aria-label="Go to top"
          >
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-200"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, "gallery")}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-300"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, "testimonials")}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-400"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-500"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side (desktop) */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in-right animate-delay-300">
            <a
              href="tel:+1234567890"
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (123) 456-7890
            </a>
            <Button className="hover-lift">Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-fade-in-right animate-delay-200">
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-up animate-delay-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-100"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, "gallery")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-200"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, "testimonials")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-300"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-400"
              >
                Contact
              </a>
              <div className="px-3 py-2 animate-fade-in animate-delay-500">
                <Button className="w-full hover-lift">Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
