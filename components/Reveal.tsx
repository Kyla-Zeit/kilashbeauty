'use client'

import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'

type TagName = keyof JSX.IntrinsicElements

type RevealProps = {
  /** Which element to render (div by default) */
  as?: TagName
  /** Tailwind animation utility to apply when visible */
  animation?: 'animate-fade-up' | 'animate-fade-in' | 'animate-fade-in-left' | 'animate-fade-in-right' | 'animate-scale-in'
  /** Optional extra classes */
  className?: string
  /** Delay in ms (inline style) */
  delay?: number
  /** IntersectionObserver options */
  threshold?: number
  rootMargin?: string
  /** If false, animation will replay when you scroll away and back */
  once?: boolean
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

export default function Reveal({
  as = 'div',
  animation = 'animate-fade-up',
  className,
  delay = 0,
  threshold = 0.18,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  children,
  ...rest
}: RevealProps) {
  const Tag = as as any
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined') return

    // start hidden
    el.classList.add('animate-on-scroll')

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.remove('animate-on-scroll')
            el.classList.add(animation)
            if (once) io.unobserve(el)
          } else if (!once) {
            el.classList.remove(animation)
            el.classList.add('animate-on-scroll')
          }
        })
      },
      { threshold, root: null, rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [animation, threshold, rootMargin, once])

  return (
    <Tag
      ref={ref as any}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={clsx(className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
