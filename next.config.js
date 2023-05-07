/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
