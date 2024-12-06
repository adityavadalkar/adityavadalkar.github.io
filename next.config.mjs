/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  // Add your existing configurations here
    basePath: '',
    trailingSlash: true,
    distDir: 'out',
    images: {
        unoptimized: true,
        domains: ['cdn.loom.com'],
      },
};

export default nextConfig;
