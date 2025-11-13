import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "**",
      // },
      // {
      //   protocol: "http",
      //   hostname: "**",
      // },
    ],
  },
};

export default nextConfig;
