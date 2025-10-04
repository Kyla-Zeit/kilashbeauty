// components/Reveal.tsx
'use client'

import React, { useEffect, useRef } from 'react'

type RevealProps = {
  children: React.ReactNode
  /** Extra classes for your wrapper */
  className?: string
  /** Wrapper tag */
  as?: keyof JSX.IntrinsicElements
  /** Which animation utility to use (matches your CSS: .animate-fade-up, etc.) */
  animation?: 'fade-up' | 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in'
  /** Animation delay in ms */
  delay?: number
  /** Reveal once (true) or replay when scrolling out/in (false) */
  once?: boolean
  /** IntersectionObserver threshold */
  threshold?: number
  /** IntersectionObserver rootMargin */
  rootMargin?: string
}

export default function Reveal({
  children,
  className = '',
  as = 'div',
  animation = 'fade-up',
  delay = 0,
  once = true,
  threshold = 0.2,
  rootMargin = '0px',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Start hidden, add the animation class, and set delay (if any)
    el.classList.add('animate-on-scroll')
    el.classList.add(`animate-${animation}`)
    if (delay) el.style.animationDelay = `${delay}ms`

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Play
            el.classList.remove('animate-on-scroll')
            if (once) io.unobserve(el)
          } else if (!once) {
            // Reset so it replays when it re-enters
            el.classList.add('animate-on-scroll')
          }
        })
      },
      { threshold, rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [animation, delay, once, threshold, rootMargin])

  const Tag = as as any
  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  )
}
