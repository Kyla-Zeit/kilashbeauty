// components/hero-section.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Star, Award, Users } from 'lucide-react'
import { withBase } from '@/lib/basePath'

export function HeroSection() {
  // Tweak these two if you change your header size or want more/less push
  const HEADER_H = 72      // your nav height in px
  const CONTENT_PUSH = 32  // extra visual nudge for the text (px)

  // Move the photo DOWN by raising the background-position Y
  // 50% = center, 60% shows a lower portion of the image
  const bgY = '60%'

  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section
      id="home"
      // Full viewport minus the fixed header; keep some top padding for breathing room
      className="relative overflow-hidden"
      style={{
        minHeight: `calc(100svh - ${HEADER_H}px)`,
        paddingTop: `max(16px, env(safe-area-inset-top))`
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: `center ${bgY}`
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Center the block vertically, then nudge it DOWN a bit */}
        <div className="grid h-full place-items-center">
          <div
            className="max-w-5xl text-center"
            style={{ transform: `translateY(${CONTENT_PUSH}px)` }}
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Look with{' '}
              <span className="text-purple-300">Stunning Lash Extensions</span>
            </h1>

            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg">
              Professional, long-lasting eyelash extensions that enhance your natural beauty
              and boost your confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button size="lg">Book Your Appointment</Button>
              <Button variant="outline" size="lg">View Gallery</Button>
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
