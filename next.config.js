/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/admin/login",
        destination: "https://next-pizza-restaurant-tau.vercel.app/admin",
      },
    ];
  },
};

module.exports = nextConfig;
