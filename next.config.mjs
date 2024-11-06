/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.shopify.com'], // Add the allowed domain here
    },
};

export default nextConfig;
