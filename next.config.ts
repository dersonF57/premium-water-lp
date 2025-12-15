/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  images: { unoptimized: true },  
  trailingSlash: true,
  basePath: '/premium-water-lp',  
  assetPrefix: '/premium-water-lp/',  
};

export default nextConfig;