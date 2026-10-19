import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // One canonical host: www.yogispestcontrol.com/* -> yogispestcontrol.com/*
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.yogispestcontrol.com" }],
        destination: "https://yogispestcontrol.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
