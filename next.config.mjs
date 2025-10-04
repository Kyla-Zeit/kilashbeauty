// next.config.mjs
const repo = 'kilashbeauty'
const isProd = process.env.NODE_ENV === 'production'
export default {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
}
