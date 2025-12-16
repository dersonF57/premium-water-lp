/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Essencial pro GitHub Pages
  },
  trailingSlash: true,
  basePath: '/premium-water-lp', // Nome exato do repo — resolve caminhos de imagens e assets
  assetPrefix: '/premium-water-lp/', // Mesmo valor
};

export default nextConfig;