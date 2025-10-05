// components/brand-logo.tsx
import * as React from "react"

export default function BrandLogo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 80"
      className={className}
      role="img"
      aria-label="KILASHBEAUTY logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        <linearGradient id="kb-gradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#2E7CF5" />
          <stop offset="1" stopColor="#EC6AD9" />
        </linearGradient>
      </defs>

      {/* Lash icon (left) */}
      <g transform="translate(12,18) scale(0.36)">
        <path
          d="M18 46c20-18 50-30 82-30 28 0 51 9 66 17 16 8 29 12 43 12 15 0 26-4 33-10
             -6 11-22 22-46 22-16 0-30-4-47-12-17-8-37-16-64-16-28 0-50 8-61 17z"
          fill="url(#kb-gradient)"
        />
        <path
          d="M104 70c11 7 25 12 46 12 22 0 39-8 52-17-10 18-33 31-65 31-24 0-43-7-57-17z"
          fill="url(#kb-gradient)"
        />
      </g>

      {/* Wordmark (icon is left of text) */}
      <text
        x="104" y="50"
        fontFamily="Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif"
        fontSize="26" fontWeight="800" letterSpacing="2"
        fill="#111114"
      >
        KILASHBEAUTY
      </text>
    </svg>
  )
}
