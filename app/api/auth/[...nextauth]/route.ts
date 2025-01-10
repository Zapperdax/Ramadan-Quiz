// app/api/auth/[...nextauth]/route.ts
import NextAuth, { DefaultSession, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import User from "@/models/User"; // Adjust the path as per your project structure
import { JWT } from "next-auth/jwt";

// Extend the Session interface
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

const connectToDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI!;
  if (!mongoose.connection.readyState) {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  }
};

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // SignIn callback to handle MongoDB user creation or retrieval
    async signIn({ user }: { user: Session["user"] }) {
      await connectToDB();

      const existingUser = await User.findOne({ email: user.email });
      if (existingUser) {
        user.id = existingUser._id.toString();
      } else {
        // Save new user to MongoDB
        const newUser = await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
        });
        user.id = newUser._id.toString();
      }
      return true;
    },

    // Session callback to add MongoDB user ID to session
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string; // Use token.id instead of token.sub
      }
      return session;
    },

    // JWT callback to store MongoDB user ID in token
    async jwt({ token, user }: { token: JWT; user: Session["user"] }) {
      if (user) {
        token.id = user.id; // Store the MongoDB user ID in the token
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
