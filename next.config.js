/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/admin/login",
        destination: "/admin",
      },
    ];
  },
};

module.exports = nextConfig;
