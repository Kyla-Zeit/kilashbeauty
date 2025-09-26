import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Absolutely love my lashes! The application was comfortable and the results are stunning. I get compliments everywhere I go.",
    rating: 5,
    service: "Volume Lashes",
  },
  {
    name: "Emily Chen",
    text: "Professional service and amazing attention to detail. My lashes look so natural yet glamorous. Highly recommend!",
    rating: 5,
    service: "Hybrid Lashes",
  },
  {
    name: "Jessica Martinez",
    text: "Best lash experience I've ever had! The studio is beautiful and the results exceeded my expectations. Will definitely be back!",
    rating: 5,
    service: "Classic Lashes",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it - hear from our satisfied clients about their lash extension experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-500 hover-lift animate-fade-up animate-delay-${(index + 2) * 100}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4 animate-fade-in-left animate-delay-300">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-secondary fill-current transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 text-pretty animate-fade-in animate-delay-400">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-border pt-4 animate-fade-in-right animate-delay-500">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
