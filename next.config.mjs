/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',

  // You’re hosting under https://kyla-zeit.github.io/kilashbeauty/
  // so Next needs a basePath and assetPrefix
  basePath: '/kilashbeauty',
  assetPrefix: '/kilashbeauty/',

  // Next/Image has no server on Pages
  images: { unoptimized: true },

  // Optional but helps with static hosting
  trailingSlash: true,
};

export default nextConfig;
