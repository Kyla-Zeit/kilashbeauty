// Works on GitHub Pages when you have basePath/assetPrefix set in next.config
// Falls back to relative root locally.
export function withBase(path: string): string {
  // If NEXT_PUBLIC_BASE_PATH is set (you can set it to "/kilashbeauty" in build env), use it.
  const envBase = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (envBase) return `${envBase}${path}`

  // Try to read assetPrefix injected by Next on the page (exported sites include this).
  if (typeof window !== 'undefined') {
    // @ts-ignore
    const prefix = (window.__NEXT_DATA__ && window.__NEXT_DATA__.assetPrefix) || ''
    return `${prefix}${path}`
  }

  return path
}
