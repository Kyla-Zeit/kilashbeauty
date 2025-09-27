// components/hero-section.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Star, Award, Users } from 'lucide-react'
import { withBase } from '@/lib/basePath'

export function HeroSection() {
  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Lower the focal point so the eye sits lower */}
 <div
  className="
    absolute inset-0 bg-cover
    bg-[position:center_88%]
    sm:bg-[position:center_90%]
    md:bg-[position:center_94%]
    lg:bg-[position:center_97%]
    xl:bg-[position:center_99%]
  "
  style={{ backgroundImage: `url(${bg})` }}
/>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full viewport minus header; push content down with padding */}
        <div className="min-h-[calc(100svh-72px)] flex flex-col items-center pt-28 md:pt-40 lg:pt-52 pb-16">
          <div className="max-w-5xl text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
                           animate-fade-up animate-delay-100">
              Transform Your Look with{' '}
              <span className="text-purple-300">Stunning Lash Extensions</span>
            </h1>

            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg
                          animate-fade-up animate-delay-200">
              Professional, long-lasting eyelash extensions that enhance your natural beauty
              and boost your confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center
                            animate-fade-up animate-delay-300">
              <Button size="lg">Book Your Appointment</Button>
              <Button variant="outline" size="lg">View Gallery</Button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-white/80 max-w-xl mx-auto
                            animate-fade-up animate-delay-400">
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
