/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ This tells Vercel/Next.js to skip ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;