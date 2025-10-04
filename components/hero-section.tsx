// components/hero-section.tsx
'use client'

import { withBase } from '@/lib/basePath'
import { Button } from '@/components/ui/button'
import { Star, Users, Award } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  // Change this filename to any image you’ve placed in /public
  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100svh-64px)]"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          // Move the focal point down to show more of the lower eye/lashes
          // Tweak 55–70% to taste
          backgroundPosition: '50% 80%',
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 grid h-full place-items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full text-center py-20 md:py-24 lg:py-28">
          <h1 className="text-white font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">
            Transform Your Look with
          </h1>
          <h2 className="mt-2 text-purple-300 font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl">
            Stunning Lash Extensions
          </h2>

          <p className="mt-6 text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Professional, long-lasting eyelash extensions that enhance your natural beauty
            and boost your confidence.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#booking" aria-label="Book Your Appointment">
              <Button className="h-12 px-6 text-base md:h-14 md:px-8 md:text-lg font-semibold shadow-lg shadow-fuchsia-700/25">
                Book Your Appointment
              </Button>
            </Link>

            <Link href="#gallery" aria-label="View Gallery">
              <Button
                variant="outline"
                className="h-12 px-6 text-base md:h-14 md:px-8 md:text-lg bg-white/90 text-gray-900 hover:bg-white shadow"
              >
                View Gallery
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 md:mt-14 grid grid-cols-3 gap-6 sm:gap-8 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center text-white">
              <Star className="h-7 w-7 md:h-8 md:w-8 shrink-0" />
              <div className="leading-tight">
                <div className="text-2xl md:text-3xl font-semibold">5.0</div>
                <div className="text-sm md:text-base text-white/85">Average Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center text-white">
              <Users className="h-7 w-7 md:h-8 md:w-8 shrink-0" />
              <div className="leading-tight">
                <div className="text-2xl md:text-3xl font-semibold">500+</div>
                <div className="text-sm md:text-base text-white/85">Happy Clients</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center text-white">
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
