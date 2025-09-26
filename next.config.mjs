// next.config.mjs
/** @type {import('next').NextConfig} */

const repo = 'kilashbeauty'
const isProd = process.env.NODE_ENV === 'production'
const base = isProd ? `/${repo}` : ''

export default {
  output: 'export',          // Next 14 way to static-export
  basePath: base,            // routes live under /kilashbeauty
  assetPrefix: base + '/',   // assets load from /kilashbeauty/_next/...
  images: { unoptimized: true },
  trailingSlash: true
}
