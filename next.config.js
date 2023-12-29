/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      
        domains: ['links.papareact.com'],
      remotePatterns: [
        {
          protocol: "http",
          hostname: "image.tmdb.org",
        },
      ],
    },
  };

module.exports = nextConfig
