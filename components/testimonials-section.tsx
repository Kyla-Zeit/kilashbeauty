// components/testimonials-section.tsx
'use client'

import Reveal from '@/components/Reveal'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
}

const testimonials: Testimonial[] = [
  {
    name: 'Ariana P.',
    role: 'Classic Set',
    quote:
      'So lightweight and natural. I woke up looking put together for once. Zero irritation, 10/10.',
    rating: 5,
  },
  {
    name: 'Maya R.',
    role: 'Hybrid Set',
    quote:
      'Perfect balance of soft and full. They lasted through a beach trip and way too many selfies.',
    rating: 5,
  },
  {
    name: 'Jasmin K.',
    role: 'Volume Set',
    quote:
      'Fluffy, dramatic, and still comfy. Got compliments all week. Booking my refill already.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-muted/30 scroll-mt-24 md:scroll-mt-28"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal animation="animate-fade-up" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Love
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real results, real confidence. Here’s what our clients say after their lash sessions.
            </p>
          </div>
        </Reveal>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              animation="animate-fade-up"
              delay={(i + 1) * 70}           // small stagger, faster
              threshold={0.2}
              rootMargin="0px 0px -10% 0px"
            >
              <Card className="h-full hover-lift transition-all duration-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{t.name}</CardTitle>
                    <Quote className="w-5 h-5 text-primary/70" />
                  </div>
                  <CardDescription>{t.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/90">{t.quote}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${
                          idx < t.rating ? 'text-primary fill-primary' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Subtle CTA */}
        <Reveal animation="animate-fade-in" delay={400} threshold={0.2}>
          <p className="text-center text-sm text-muted-foreground mt-12">
            Ready for your own transformation? Refills recommended every 2–3 weeks for best results.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
