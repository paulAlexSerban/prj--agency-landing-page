/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["."],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

if (process.env.ENV_NAME === 'production') {
  nextConfig.basePath = process.env.BASE_PATH;
}

module.exports = nextConfig;
