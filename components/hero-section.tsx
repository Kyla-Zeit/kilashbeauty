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
    bg-[position:center_42%]   /* lower number = image goes DOWN */
    sm:bg-[position:center_38%]
    md:bg-[position:center_34%]
    lg:bg-[position:center_30%]
    xl:bg-[position:center_28%]
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
<div className="mt-8 grid w-full max-w-5xl grid-cols-3 items-center gap-8 text-white/95">
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
      </div>
    </section>
  )
}
