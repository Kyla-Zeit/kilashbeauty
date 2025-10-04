// components/services-section.tsx
import Reveal from '@/components/Reveal'
import { Eye, Sparkles, Scissors } from 'lucide-react'

type Service = {
  title: string
  desc: string
  price: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  delay: number
}

const services: Service[] = [
  {
    title: 'Classic Set',
    desc: 'Natural, lightweight extensions that enhance your everyday look.',
    price: '$120',
    Icon: Eye,
    delay: 0,
  },
  {
    title: 'Hybrid Set',
    desc: 'A perfect blend of classic + volume for a soft, wispy finish.',
    price: '$160',
    Icon: Sparkles,
    delay: 100,
  },
  {
    title: 'Volume Set',
    desc: 'Full, fluffy fans for maximum drama and lux finish.',
    price: '$200',
    Icon: Scissors,
    delay: 200,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our Lash Services
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
            Customized lash sets that enhance your natural beauty—long-lasting, lightweight, and comfortable.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ title, desc, price, Icon, delay }) => (
            <Reveal
              key={title}
              className="rounded-2xl bg-white/90 backdrop-blur p-6 shadow-lg hover-lift border border-border"
              animation="fade-up"
              delay={delay}
              threshold={0.15}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-purple-500" />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              <p className="mt-5 text-lg font-semibold">{price}</p>
            </Reveal>
          ))}
        </div>

        {/* Footer blurb (optional) */}
        <Reveal animation="fade-up" delay={250}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Not sure what to book? We’ll help you choose the perfect set during your consultation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
