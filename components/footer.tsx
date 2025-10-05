import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">KilashBeauty</h3>
            <p className="text-muted-foreground text-pretty max-w-md">
              Transform your look with our professional eyelash extension services. We specialize in creating beautiful,
              natural-looking lashes that enhance your unique beauty.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Classic Lashes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Volume Lashes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Hybrid Lashes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Lash Fills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Aftercare
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 KilashBeauty. All rights reserved.</p>
{/* Right: Tagline with heart */}
          <p className="flex items-center gap-2">
            Made with
            <span
              aria-hidden="true"
              className="text-base leading-none bg-gradient-to-r from-[#2E7CF5] to-[#EC6AD9] bg-clip-text text-transparent"
              title="love"
            >
              ♥
            </span>
            for beautiful lashes
          </p>
        </div>
      </div>
    </footer>
  )
}
