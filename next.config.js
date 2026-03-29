/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // static HTML export — works on Hostinger shared hosting
  trailingSlash: true,   // /about/ instead of /about — better for shared hosting
  images: {
    unoptimized: true,   // required for static export
  },
}

module.exports = nextConfig
