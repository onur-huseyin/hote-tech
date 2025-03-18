import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "aceternity.com"], // Unsplash resimlerini kullanmak için ekleyin
  },
  metadataBase: new URL("http://127.0.0.1:3000")
  /* config options here */
};

export default nextConfig;
