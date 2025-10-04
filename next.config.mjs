// next.config.mjs
const repo = 'kilashbeauty'
const isProd = process.env.NODE_ENV === 'production'

export default {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
}
