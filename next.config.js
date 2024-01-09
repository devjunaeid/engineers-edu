/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.csiamerica.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
