/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // warnerdentalteam.com/review → Google review form (used on the front-desk QR card)
  async redirects() {
    return [
      {
        source: '/review',
        destination:
          'https://search.google.com/local/writereview?placeid=ChIJTVW5tilvVFMRRRiRBrs50ds',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;