// components/hero-section.tsx
'use client'

import Link from 'next/link'
import { withBase } from '@/lib/basePath'
import { Button } from '@/components/ui/button'
import { Star, Users, Award } from 'lucide-react'

export function HeroSection() {
  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative overflow-hidden min-h-[calc(100svh-64px)]"
    >
      {/* --- Background stack --- */}
      <div className="absolute inset-0">
        {/* Sharp base image */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-scale-in"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: '50% 30%',
          }}
        />

        {/* Blurred edges – masked so only the perimeter shows */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: '50% 65%',
            filter: 'blur(12px)',
            transform: 'scale(1.02)',
            // Show blur mostly at the edges; hide the center
            WebkitMaskImage:
              'radial-gradient(circle at center, rgba(0,0,0,0) 56%, rgba(0,0,0,1) 78%)',
            maskImage:
              'radial-gradient(circle at center, rgba(0,0,0,0) 56%, rgba(0,0,0,1) 78%)',
          }}
        />

        {/* Optional vignette to gently darken corners */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_160px_rgba(0,0,0,0.35)]" />
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/45 animate-fade-in animate-delay-200" />

      {/* --- Content --- */}
      <div className="relative z-10 grid h-full place-items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full text-center py-16 md:py-20 lg:py-24">
          <h1 className="text-white font-bold leading-tight text-4xl md:text-5xl lg:text-6xl animate-fade-up animate-delay-100">
            Transform Your Look with
          </h1>
          <h2 className="mt-2 text-purple-300 font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl animate-fade-up animate-delay-200">
            Stunning Lash Extensions
          </h2>

          <p className="mt-6 text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto animate-fade-up animate-delay-300">
            Professional, long-lasting eyelash extensions that enhance your natural beauty
            and boost your confidence.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#booking" aria-label="Book Your Appointment">
              <Button className="h-12 px-6 text-base md:h-14 md:px-8 md:text-lg font-semibold shadow-lg shadow-fuchsia-700/25 hover-lift animate-fade-up animate-delay-400">
                Book Your Appointment
              </Button>
            </Link>

            <Link href="#gallery" aria-label="View Gallery">
              <Button
                variant="outline"
                className="h-12 px-6 text-base md:h-14 md:px-8 md:text-lg bg-white/90 text-gray-900 hover:bg-white shadow hover-lift animate-fade-up animate-delay-500"
              >
                View Gallery
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 md:mt-14 grid grid-cols-3 gap-6 sm:gap-8 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center text-white animate-fade-up animate-delay-400">
              <Star className="h-7 w-7 md:h-8 md:w-8 shrink-0" />
              <div className="leading-tight">
                <div className="text-2xl md:text-3xl font-semibold">5.0</div>
                <div className="text-sm md:text-base text-white/85">Average Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center text-white animate-fade-up animate-delay-500">
              <Users className="h-7 w-7 md:h-8 md:w-8 shrink-0" />
              <div className="leading-tight">
                <div className="text-2xl md:text-3xl font-semibold">500+</div>
                <div className="text-sm md:text-base text-white/85">Happy Clients</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center text-white animate-fade-up animate-delay-600">
              <Award className="h-7 w-7 md:h-8 md:w-8 shrink-0" />
              <div className="leading-tight">
                <div className="text-2xl md:text-3xl font-semibold">3+</div>
                <div className="text-sm md:text-base text-white/85">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
