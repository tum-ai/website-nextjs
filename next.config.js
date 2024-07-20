/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tum-ai.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/join-us",
        destination: "https://join.tum-ai.com",
        permanent: true,
      },
      {
        source: "/education",
        destination: "https://education.tum-ai.com",
        permanent: true,
      },
      {
        source: "/venture",
        destination: "/e-lab",
        permanent: true,
      },
      {
        source: "/datenschutz",
        destination: "/data-privacy",
        permanent: true,
      },
      {
        source: "/impressum",
        destination: "/imprint",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
