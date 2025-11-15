import type { NextConfig } from 'next'
import path from 'path' // Path modülünü ekliyoruz

// Alt projelerimizin nerede olduğunu belirtiyoruz (node_modules içinde)
const GIGA_SDK_PATH = path.resolve('./node_modules/gigaverse-sdk')
const GIGA_ENGINE_PATH = path.resolve('./node_modules/gigaverse-engine')

const nextConfig: NextConfig = {
    // 1. Next.js'e bu paketleri derlemesini söylüyoruz
    transpilePackages: ['gigaverse-sdk', 'gigaverse-engine'],

    // 2. Webpack'e bu paketleri nerede bulacağını kesin olarak söylüyoruz (KRİTİK)
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            // 'gigaverse-sdk' çağrıldığında doğrudan kaynak koduna git
            'gigaverse-sdk': GIGA_SDK_PATH,
            // 'gigaverse-engine' çağrıldığında doğrudan kaynak koduna git
            'gigaverse-engine': GIGA_ENGINE_PATH,
        }
        return config
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
    },
}

export default nextConfig
