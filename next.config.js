/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Allow images from example.com
  },
  // Any other configurations you need
};

module.exports = nextConfig;