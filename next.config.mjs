/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.gramedia.com',
                port: '',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
