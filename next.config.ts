import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // O drive do projeto está formatado em exFAT, que não suporta as
    // operações de reparse point usadas pelo enhanced-resolve para checar
    // symlinks a cada módulo (causa EISDIR em readlink no Windows).
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
