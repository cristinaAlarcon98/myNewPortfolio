import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules\/(?!gsap)/, // Exclude gsap from being transpiled
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });
    return config;
  },
};

export default nextConfig;
