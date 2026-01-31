import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/post/:id",
        destination: "/redirect.html?type=post&id=:id",
        permanent: false,
      },
      {
        source: "/community/alba-talk/:id",
        destination: "/redirect.html?type=alba-talk&id=:id",
        permanent: false,
      },
      {
        source: "/community/second-hand/:id",
        destination: "/redirect.html?type=second-hand&id=:id",
        permanent: false,
      },
      {
        source: "/community/business-promotion/:id",
        destination: "/redirect.html?type=business-promotion&id=:id",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
