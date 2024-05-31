/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

// next.config.js

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Replace with your Sanity.io CDN domain
  },
  // Other configurations...
};
