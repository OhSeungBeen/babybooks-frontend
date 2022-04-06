const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://localhost:8080/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
