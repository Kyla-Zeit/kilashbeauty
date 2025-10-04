// lib/basePath.ts
const base =
  process.env.NODE_ENV === 'production' ? '/kilashbeauty' : ''

/** Prefix any `/something` path so it works on GitHub Pages. */
export function withBase(path: string) {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
