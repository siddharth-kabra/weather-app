// import { verifyPassword } from "@/lib/auth";
// import { connectToDatabase } from "@/lib/db";
import NextAuth, { AuthOptions } from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  session: {
    jwt: true,
  },
  providers: [
    // CredentialsProvider({
    //   async authorize(credentials) {
    //     const client = await connectToDatabase();
    //     const usersCollection = client.db().collection("mealUsers");
    //     const user = await usersCollection.findOne({
    //       email: credentials.email,
    //     });
    //     if (!user) {
    //       client.close();
    //       throw new Error("No user found!");
    //     }
    //     const isValid = await verifyPassword(
    //       credentials.password,
    //       user.password
    //     );
    //     if (!isValid) {
    //       throw new Error("Could not log you in!");
    //     }
    //     client.close();
    //     return {
    //       email: user.email,
    //     };
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth',
  },
};

const handler = NextAuth(authOptions as AuthOptions);
export { handler as GET, handler as POST };
