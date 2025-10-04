'use client'

import { Button } from '@/components/ui/button'
import { Star, Award, Users } from 'lucide-react'
import { withBase } from '@/lib/basePath'

export function HeroSection() {
  // Your image lives in /public; withBase handles the GitHub Pages basePath
  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background: push the eye LOWER by using a SMALLER Y% */}
      <div
        className="
          absolute inset-0 bg-cover
          bg-[position:center_28%]
          sm:bg-[position:center_24%]
          md:bg-[position:center_22%]
          lg:bg-[position:center_20%]
          xl:bg-[position:center_18%]
        "
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Darken image for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full viewport minus header; pad top so text isn’t jammed */}
        <div className="min-h-[calc(100svh-72px)] flex flex-col items-center pt-28 md:pt-40 lg:pt-52 pb-16">
          <div className="max-w-5xl text-center">
            <h1
              className="
                text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
                animate-fade-up animate-delay-100
              "
            >
              Transform Your Look with{' '}
              <span className="text-purple-300">Stunning Lash Extensions</span>
            </h1>

            <p
              className="
                mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg
                animate-fade-up animate-delay-200
              "
            >
              Professional, long-lasting eyelash extensions that enhance your natural beauty
              and boost your confidence.
            </p>

            {/* CTAs — bigger */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-up animate-delay-300">
              <Button className="h-16 px-10 text-xl rounded-xl shadow-lg shadow-black/10">
                Book Your Appointment
              </Button>
              <Button variant="outline" className="h-16 px-10 text-xl rounded-xl">
                View Gallery
              </Button>
            </div>

            {/* Stats — bigger icons and type */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-white/90 max-w-2xl mx-auto animate-fade-up animate-delay-400">
              <div className="flex items-center justify-center gap-3">
                <Star className="h-8 w-8" />
                <div className="text-left leading-tight">
                  <div className="text-xl font-semibold">5.0</div>
                  <div className="text-sm md:text-base">Average Rating</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Users className="h-8 w-8" />
                <div className="text-left leading-tight">
                  <div className="text-xl font-semibold">500+</div>
                  <div className="text-sm md:text-base">Happy Clients</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Award className="h-8 w-8" />
                <div className="text-left leading-tight">
                  <div className="text-xl font-semibold">3+</div>
                  <div className="text-sm md:text-base">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
