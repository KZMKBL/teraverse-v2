import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 👇 KRİTİK EKLEME
  transpilePackages: ['gigaverse-sdk', 'gigaverse-engine'],
  // 👆 KRİTİK EKLEME

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
}

export default nextConfig
