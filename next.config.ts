import type { NextConfig } from "next";

// На GitHub Pages сайт живёт по адресу kremkaz.github.io/portfolio — префикс приходит
// из GitHub Actions (NEXT_PUBLIC_BASE_PATH). Локально он пустой и сайт открывается с корня.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
