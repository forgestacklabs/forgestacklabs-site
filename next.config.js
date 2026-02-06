/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [];
  },

  async headers() {
    return [
      // ✅ Sitemap must be application/xml
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },

      // ✅ Robots.txt must be text/plain
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },

      // ✅ Default security headers (everything else)
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;