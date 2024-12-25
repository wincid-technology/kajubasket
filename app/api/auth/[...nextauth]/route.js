import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to account page if signed in
      return url.startsWith(baseUrl) ? url : `${baseUrl}/account`;
    },
  },
  pages: {
    signIn: "/login", // Path to your custom sign-in page
  },
});

export { authHandler as GET, authHandler as POST };
