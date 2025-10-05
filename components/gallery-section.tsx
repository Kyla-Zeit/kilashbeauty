'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Reveal from '@/components/Reveal'

const galleryImages = [
  {
    src: '/beautiful-classic-eyelash-extensions-natural-look-.jpg',
    alt: 'Classic lash extensions',
    category: 'classic',
  },
  {
    src: '/dramatic-volume-eyelash-extensions-full-coverage-g.jpg',
    alt: 'Volume lash extensions',
    category: 'volume',
  },
  {
    src: '/hybrid-eyelash-extensions-textured-natural-fullnes.jpg',
    alt: 'Hybrid lash extensions',
    category: 'hybrid',
  },
  {
    src: '/before-and-after-eyelash-extensions-transformation.jpg',
    alt: 'Before and after transformation',
    category: 'before-after',
  },
  {
    src: '/close-up-beautiful-eyelash-extensions-professional.jpg',
    alt: 'Professional lash application',
    category: 'classic',
  },
  {
    src: '/stunning-volume-lashes-dramatic-eye-makeup-beauty.jpg',
    alt: 'Stunning volume lashes',
    category: 'volume',
  },
]

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'classic', label: 'Classic' },
  { id: 'volume', label: 'Volume' },
  { id: 'hybrid', label: 'Hybrid' },
  { id: 'before-after', label: 'Before & After' },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-muted/30 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading (animates when scrolled into view) */}
        <Reveal animation="animate-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Beautiful Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See the stunning transformations we create for our clients. Each set is customized to
              enhance your natural beauty.
            </p>
          </div>
        </Reveal>

        {/* Filter Buttons (staggered on scroll) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Reveal
              key={category.id}
              animation="animate-fade-up"
              delay={(index + 3) * 70} // keep same visual cadence
              threshold={0.15}
              rootMargin="0px 0px -10% 0px"
            >
              <Button
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="mb-2 hover-lift"
              >
                {category.label}
              </Button>
            </Reveal>
          ))}
        </div>

        {/* Gallery Grid (cards scale-in on scroll, staggered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Reveal
              key={`${image.src}-${index}`}
              animation="animate-scale-in"
              delay={((index % 6) + 1) * 70}
              threshold={0.12}
              rootMargin="0px 0px -10% 0px"
            >
              <div className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover-lift">
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button variant="secondary" size="sm" className="hover-lift">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA (on-scroll) */}
        <Reveal animation="animate-fade-up" delay={420}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover-lift bg-transparent">
              View More on Instagram
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
