/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['m.media-amazon.com'],
  }
}

module.exports = nextConfig
// npx json-server -p 8080 db.json
// 
