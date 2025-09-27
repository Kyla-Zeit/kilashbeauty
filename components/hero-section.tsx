'use client'

import { Button } from '@/components/ui/button'
import { Star, Award, Users } from 'lucide-react'
import { withBase } from '@/lib/basePath'

export function HeroSection() {
  const bg = withBase('/beautiful-woman-with-stunning-eyelash-extensions-c.jpg')

  return (
    <section id="home" className="relative min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-fade-in animate-delay-100"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-black/40 animate-fade-in animate-delay-200" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full pt-28 sm:pt-32 lg:pt-40">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-up animate-delay-300">
            Transform Your Look with
            <span className="text-purple-300"> Stunning Lash Extensions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80 animate-fade-up animate-delay-500">
            Professional, long-lasting eyelash extensions that enhance your
            natural beauty and boost your confidence.
          </p>

          <div className="mt-6 flex gap-3 animate-fade-up animate-delay-600">
            <Button size="lg">Book Your Appointment</Button>
            <Button variant="outline" size="lg">View Gallery</Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 items-center gap-4 text-white/80">
            <div className="flex items-center gap-2 animate-fade-up animate-delay-300">
              <Star className="h-5 w-5" />
              <div>
                <div className="text-sm font-semibold">5.0</div>
                <div className="text-xs">Average Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-2 animate-fade-up animate-delay-400">
              <Users className="h-5 w-5" />
              <div>
                <div className="text-sm font-semibold">500+</div>
                <div className="text-xs">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-2 animate-fade-up animate-delay-500">
              <Award className="h-5 w-5" />
              <div>
                <div className="text-sm font-semibold">3+</div>
                <div className="text-xs">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
