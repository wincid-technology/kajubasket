/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', // Matches all paths
      },
    ],
  },
};

// module.exports = {
//   webpack(config, { isServer }) {
//     if (!isServer) {
//       config.devtool = 'source-map'; // Enable source maps for the client-side
//     }
//     return config;
//   },
// };


export default nextConfig;
