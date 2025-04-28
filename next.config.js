/** @type {import('next').NextConfig} */
module.exports = {
  // This is not a Next.js app, but this config helps with Vercel deployment
  trailingSlash: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/portfolio',
        destination: '/portfolio.html',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio.html',
        destination: '/portfolio',
        permanent: true,
      },
    ];
  },
};