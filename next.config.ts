import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rbz8uawq0m.ufs.sh",
        pathname: "/f/**", // 해당 경로 전체 허용
      },
    ],
  },
};

export default nextConfig;
