/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,   // /about/ instead of /about — cleaner URLs
  images: {
    unoptimized: true,   // Hostinger Node.js — no image optimisation server needed
  },
  experimental: {
    // Prevent webpack from bundling nodemailer — use Node.js require() instead
    serverComponentsExternalPackages: ['nodemailer'],
  },
}

module.exports = nextConfig
