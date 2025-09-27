const repo = 'kilashbeauty'
const isProd = process.env.NODE_ENV === 'production'
const base = isProd ? `/${repo}` : ''

export default {
  output: 'export',
  basePath: base,
  assetPrefix: base + '/',
  images: { unoptimized: true },
  trailingSlash: true,
}
