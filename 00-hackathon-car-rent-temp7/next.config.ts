import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: ''
      },
      {
        protocol: 'https',
        hostname: '**',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: ''
      },
    ]
  },
};

export default nextConfig;