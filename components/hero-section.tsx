import { Button } from "@/components/ui/button"
import { Star, Award, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-woman-with-stunning-eyelash-extensions-c.jpg"
          alt="Beautiful eyelash extensions"
          className="w-full h-full object-cover animate-fade-in animate-delay-100"
        />
        <div className="absolute inset-0 bg-black/40 animate-fade-in animate-delay-200"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-up animate-delay-300">
          Transform Your Look with
          <span className="text-secondary block mt-2 animate-fade-up animate-delay-400">Stunning Lash Extensions</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto opacity-90 animate-fade-up animate-delay-500">
          Professional, long-lasting eyelash extensions that enhance your natural beauty and boost your confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up animate-delay-600">
          <Button size="lg" className="text-lg px-8 py-4 hover-lift">
            Book Your Appointment
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover-lift"
          >
            View Gallery
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center animate-fade-in-left animate-delay-300">
            <div className="flex items-center mb-2">
              <Star className="w-6 h-6 text-secondary mr-2" />
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <p className="text-sm opacity-90">Average Rating</p>
          </div>
          <div className="flex flex-col items-center animate-fade-up animate-delay-400">
            <div className="flex items-center mb-2">
              <Users className="w-6 h-6 text-secondary mr-2" />
              <span className="text-2xl font-bold">500+</span>
            </div>
            <p className="text-sm opacity-90">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in-right animate-delay-500">
            <div className="flex items-center mb-2">
              <Award className="w-6 h-6 text-secondary mr-2" />
              <span className="text-2xl font-bold">3+</span>
            </div>
            <p className="text-sm opacity-90">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
