'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Smooth-scroll and close the mobile menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo now clickable -> scrolls to #home */}
          <div className="flex-shrink-0 animate-fade-in-left animate-delay-100">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              aria-label="Go to Home"
              className="inline-block text-2xl font-bold text-primary"
            >
              LuxeLash Studio
            </a>
          </div>

          {/* Desktop Navigation (Home removed; About -> Testimonials earlier) */}
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
