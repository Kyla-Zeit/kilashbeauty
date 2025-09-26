"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-fade-in-left animate-delay-100">
            <h1 className="text-2xl font-bold text-primary">LuxeLash Studio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-200"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-300"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-400"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-500"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-600"
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-up animate-delay-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-100"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-200"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-300"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-400"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-500"
              >
                Contact
              </a>
              <div className="px-3 py-2 animate-fade-in animate-delay-600">
                <Button className="w-full hover-lift">Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
