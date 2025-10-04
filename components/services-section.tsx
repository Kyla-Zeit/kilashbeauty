'use client'

import Reveal from '@/components/Reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Sparkles, Heart } from "lucide-react"

const services = [
  {
    icon: Eye,
    title: "Classic Lashes",
    description: "Natural-looking extensions with one lash applied to each natural lash for subtle enhancement.",
    duration: "2-2.5 hours",
    price: "From $120",
    features: ["Natural look", "Perfect for beginners", "Low maintenance", "Lasts 4-6 weeks"],
  },
  {
    icon: Sparkles,
    title: "Volume Lashes",
    description: "Multiple lightweight lashes applied to each natural lash for dramatic, full coverage.",
    duration: "2.5-3 hours",
    price: "From $180",
    features: ["Dramatic volume", "Customizable fullness", "Lightweight feel", "Lasts 4-6 weeks"],
    popular: true,
  },
  {
    icon: Heart,
    title: "Hybrid Lashes",
    description: "Perfect blend of classic and volume techniques for textured, natural-looking fullness.",
    duration: "2.5 hours",
    price: "From $150",
    features: ["Best of both worlds", "Textured appearance", "Versatile styling", "Lasts 4-6 weeks"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our range of professional eyelash extension services, each tailored to enhance your unique
            beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-lg transition-all duration-500 hover-lift animate-fade-up animate-delay-${(index + 2) * 100}`}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground animate-scale-in animate-delay-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center transition-all-smooth hover:bg-primary/20 hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full mt-6 hover-lift" variant={service.popular ? "default" : "outline"}>
                  Book {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up animate-delay-600">
          <p className="text-muted-foreground mb-4">
            All services include complimentary consultation and aftercare instructions
          </p>
          <Button variant="outline" size="lg" className="hover-lift bg-transparent">
            View Full Price List
          </Button>
        </div>
      </div>
    </section>
  )
}
