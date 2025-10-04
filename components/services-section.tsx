'use client'
import Reveal from '@/components/Reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Sparkles, Heart, Scissors, ShieldCheck } from "lucide-react"

export function ServicesSection() {
  const services = [
  {
    icon: Eye,
    title: "Classic Lashes",
    description: "Natural-looking extensions with one lash applied to each natural lash for subtle enhancement.",
    duration: "2-2.5 hours",
    price: "From $120",
    features: ["Natural look", "Perfect for beginners", "Low maintenance", "Lasts 4-6 weeks"],
    Icon: Sparkles,
      delay: 0 as const,
  },
  {
    icon: Sparkles,
    title: "Volume Lashes",
    description: "Multiple lightweight lashes applied to each natural lash for dramatic, full coverage.",
    duration: "2.5-3 hours",
    price: "From $180",
    features: ["Dramatic volume", "Customizable fullness", "Lightweight feel", "Lasts 4-6 weeks"],
    popular: true,
 Icon: ShieldCheck,
      delay: 200 as const,
  },
  {
    icon: Heart,
    title: "Hybrid Lashes",
    description: "Perfect blend of classic and volume techniques for textured, natural-looking fullness.",
    duration: "2.5 hours",
    price: "From $150",
    features: ["Best of both worlds", "Textured appearance", "Versatile styling", "Lasts 4-6 weeks"],
       Icon: Scissors,
      delay: 100 as const,
  },
]

 return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
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
              <div className="mt-5 text-lg font-semibold">{price}</div>
            </Reveal>
          ))}
        </div>

        {/* Footer blurb */}
        <Reveal className="mt-10 text-center" animation="fade-up" delay={200}>
          <p className="text-sm text-muted-foreground">
            Patch test available upon request. Refills recommended every 2–3 weeks.
          </p>
        </Reveal>
      </div>
    </section>
  )
}