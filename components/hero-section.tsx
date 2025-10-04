'use client'

import { Button } from '@/components/ui/button'
import { Star, Users, Award } from 'lucide-react'
import { withBase } from '@/lib/basePath'
import React from 'react'

export function HeroSection() {
  // Background image (served from /public); withBase adds the repo base path for GitHub Pages
  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section id="home" className="relative overflow-hidden min-h-[calc(100svh-64px)]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          // push the eye lower in view; tweak 70–85% to taste
          backgroundPosition: '50% 80%',
        }}
        aria-hidden
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto grid h-full place-items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-center py-16 sm:py-24 lg:py-28">
          <h1 className="animate-fade-up text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Look with
            <br />
            <span className="text-purple-300">Stunning Lash Extensions</span>
          </h1>

          <p className="animate-fade-up animate-delay-200 mt-6 text-white/90 text-base sm:text-lg max-w-3xl mx-auto">
            Professional, long-lasting eyelash extensions that enhance your natural beauty
            and boost your confidence.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up animate-delay-300 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="px-6 py-3 text-base md:px-8 md:py-4 md:text-lg bg-fuchsia-700 hover:bg-fuchsia-600 text-white shadow"
            >
              Book Your Appointment
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="px-6 py-3 text-base md:px-8 md:py-4 md:text-lg bg-white/90 text-gray-900 hover:bg-white shadow"
            >
              View Gallery
            </Button>
          </div>

          {/* Stats — bigger icons + numbers only */}
          <div className="animate-fade-up animate-delay-500 mt-10 grid w-full max-w-5xl grid-cols-3 items-center gap-8 text-white/95 mx-auto">
            {/* Rating */}
            <div className="flex items-center justify-center gap-3">
              <Star className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" aria-hidden />
              <div className="text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-none">5.0</div>
                <div className="text-sm sm:text-base opacity-90">Average Rating</div>
              </div>
            </div>

            {/* Clients */}
            <div className="flex items-center justify-center gap-3">
              <Users className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" aria-hidden />
              <div className="text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-none">500+</div>
                <div className="text-sm sm:text-base opacity-90">Happy Clients</div>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-center justify-center gap-3">
              <Award className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" aria-hidden />
              <div className="text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-none">3+</div>
                <div className="text-sm sm:text-base opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
