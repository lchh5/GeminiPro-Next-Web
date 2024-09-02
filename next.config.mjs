import webpack from "webpack";
import fs from 'fs';
import path from 'path';

const mode = process.env.BUILD_MODE ?? "standalone";
console.log("[Next] build mode", mode);

const disableChunk = !!process.env.DISABLE_CHUNK || mode === "export";
console.log("[Next] build with chunk: ", !disableChunk);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (disableChunk) {
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
      );
    }

    config.resolve.fallback = {
      child_process: false,
    };

    return config;
  },
  output: mode,
  images: {
    unoptimized: mode === "export",
  },
  experimental: {
    forceSwcTransforms: true,
  },
  async headers() {
    if (mode !== "export") {
      return [
        {
          source: "/api/:path*",
          headers: CorsHeaders,
        },
      ];
    }
    return [];
  },
  async rewrites() {
    if (mode !== "export") {
      return {
        beforeFiles: [
          {
            source: "/api/proxy/:path*",
            destination: "https://api.openai.com/:path*",
          },
          {
            source: "/google-fonts/:path*",
            destination: "https://fonts.googleapis.com/:path*",
          },
          {
            source: "/sharegpt",
            destination: "https://sharegpt.com/api/conversations",
          },
        ],
      };
    }
    return [];
  },
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: '/public/ads.txt',
        permanent: true,
      },
    ];
  },
};

const CorsHeaders = [
  { key: "Access-Control-Allow-Credentials", value: "true" },
  { key: "Access-Control-Allow-Origin", value: "*" },
  {
    key: "Access-Control-Allow-Methods",
    value: "*",
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "*",
  },
  {
    key: "Access-Control-Max-Age",
    value: "86400",
  },
];

export default nextConfig;
