
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'

/* Inline KilashBeauty logo (transparent, gradient) */
function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2 h-8 select-none">
      <svg
        viewBox="0 0 56 40"
        aria-hidden="true"
        className="h-5 w-auto shrink-0"
      >
        <defs>
          <linearGradient id="kb-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />   {/* violet-600 */}
            <stop offset="100%" stopColor="#EC4899" /> {/* pink-500 */}
          </linearGradient>
        </defs>
        {/* Lash swoosh */}
        <path
          d="M4 26c6-10 18-16 28-16s22 6 28 16"
          fill="none"
          stroke="url(#kb-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent dot */}
        <circle cx="48" cy="12" r="3" fill="url(#kb-grad)" />
      </svg>

      {!compact && (
        <span
          className="font-semibold tracking-widest text-base leading-none
                     bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent"
          style={{ letterSpacing: '0.12em' }}
        >
          KILASHBEAUTY
        </span>
      )}
    </div>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Smooth-scroll + close mobile menu + keep hash
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.pushState(null, '', `#${id}`)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand (clickable to home) */}
          <div className="flex-shrink-0 animate-fade-in-left animate-delay-100">
            <Link href="/" aria-label="KilashBeauty — Home">
              <LogoMark />
            </Link>
          </div>

          {/* Desktop links (Home removed, About -> Testimonials) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-200"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, 'gallery')}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-300"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, 'testimonials')}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-400"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-500"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right (desktop) */}
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-up animate-delay-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-100"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, 'gallery')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-200"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, 'testimonials')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-300"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
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
