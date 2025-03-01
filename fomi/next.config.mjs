/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ['legacy-js-api', 'import'],
  },
};

export default nextConfig;
