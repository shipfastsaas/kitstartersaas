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
  images: {
    domains: ['ui-avatars.com', 'randomuser.me', 'avatars.githubusercontent.com'],
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'mongoose']
    return config
  },
}

export default nextConfig
