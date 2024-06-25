/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.daisyui.com"], // Tambahkan domain yang diizinkan di sini
  },
  async rewrites() {
    return [
      {
        source: "/images/webp/:slug*",
        destination: "/images/webp/:slug*", // Ensure correct path mapping
      },
    ];
  },
};

export default nextConfig;
