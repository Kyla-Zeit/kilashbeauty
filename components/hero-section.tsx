// components/ui/hero-section.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Star, Award, Users } from 'lucide-react'
import { withBase } from '@/lib/basePath'

export function HeroSection() {
  // Adjust the image path to any file you placed in /public
  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100svh-64px)]" // change 64px if your header height differs
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid h-full place-items-center">
          <div className="max-w-5xl text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              Transform Your Look with{' '}
              <span className="text-purple-300">Stunning Lash Extensions</span>
            </h1>

            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg">
              Professional, long-lasting eyelash extensions that enhance your natural beauty and
              boost your confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button size="lg">Book Your Appointment</Button>
              <Button variant="outline" size="lg">
                View Gallery
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-white/80 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-sm font-semibold">5.0</div>
                  <div className="text-xs">Average Rating</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-sm font-semibold">500+</div>
                  <div className="text-xs">Happy Clients</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Award className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-sm font-semibold">3+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
