/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you have an alternate domain, redirect it to the primary domain
  async redirects() {
    return [
      // Example: Redirect alternate domain to primary
      // Uncomment and modify if you own multiple domains
      // {
      //   source: '/:path*',
      //   has: [
      //     {
      //       type: 'host',
      //       value: 'forgestack-labs.com', // alternate domain
      //     },
      //   ],
      //   destination: 'https://forgestacklabs.com/:path*',
      //   permanent: true, // 301 redirect
      // },
    ];
  },

  // Headers for additional SEO optimization
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;