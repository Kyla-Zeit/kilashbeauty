// components/brand-logo.tsx
'use client'

import * as React from 'react'
import clsx from 'clsx'

type BrandLogoProps = {
  className?: string
  /** Set true to hide the wordmark and show only the icon (handy on tight layouts). */
  compact?: boolean
}

/**
 * KilashBeauty navbar logo: gradient lash “swoosh” + wordmark.
 * Transparent background, scales crisply at any size.
 */
export default function BrandLogo({ className, compact = false }: BrandLogoProps) {
  return (
    <div className={clsx('flex items-center gap-2 select-none', className)}>
      {/* Icon mark */}
      <svg
        width="28"
        height="20"
        viewBox="0 0 56 40"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="kb-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />   {/* violet-600 */}
            <stop offset="100%" stopColor="#EC4899" /> {/* pink-500 */}
          </linearGradient>
        </defs>

        {/* Lash swoosh */}
        <path
          d="M4 26c6-10 18-16 28-16s22 6 28 16"
          fill="none"
          stroke="url(#kb-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent dot */}
        <circle cx="48" cy="12" r="3" fill="url(#kb-grad)" />
      </svg>

      {/* Wordmark */}
      {!compact && (
        <span
          className="font-semibold tracking-widest text-base leading-none
                     bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent"
          style={{ letterSpacing: '0.12em' }}
        >
          KILASHBEAUTY
        </span>
      )}
    </div>
  )
}
