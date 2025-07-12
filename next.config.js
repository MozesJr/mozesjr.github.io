/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Jika repository name bukan username.github.io, uncomment dan sesuaikan basePath
  // basePath: '/nama-repository-anda',
};

module.exports = nextConfig;
