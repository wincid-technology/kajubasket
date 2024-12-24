export default {
  // output: 'export',
  // Remove the `appDir` setting if you're not using the App Router
  // Or if using Next.js 13+ with App Router, keep it
  // experimental: {
  //   appDir: true, // Uncomment if using Next.js 13+ App Router
  // },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/login', // Redirect to the NextAuth sign-in route
        permanent: false,
      },
    ]
  },
};


                        