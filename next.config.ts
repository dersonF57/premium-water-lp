/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Essencial: gera HTML estático pra GitHub Pages
  images: {
    unoptimized: true,  // Desliga otimização de imagens (GitHub Pages não suporta o loader do Next)
    // Se quiser remote images, adicione remotePatterns aqui
  },
  trailingSlash: true,  // Ajuda com links no GitHub Pages
  // basePath: '/nome-do-seu-repo',  // Descomente se for project site (ex: /trips)
  // assetPrefix: '/nome-do-seu-repo/',  // Descomente junto com basePath
};

export default nextConfig;
