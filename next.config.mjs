/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverExternalPackages: ['mongoose']
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'mongoose']
    return config
  },
}

export default nextConfig
