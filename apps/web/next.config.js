/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@agree2disagree/ui', '@agree2disagree/database'],
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['localhost'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
