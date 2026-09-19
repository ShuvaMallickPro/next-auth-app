import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/mongoclient";
import { dbConnect } from "./lib/mongo";
import { userModel } from "./models/user-model";
import mongoose from "mongoose";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        if (credentials === null) return null;
        await dbConnect();
        try {
          console.log("Auth.ts Credentials=>", credentials);
          console.log("DB: =>", mongoose.connection.name);
          console.log("Collection: =>", userModel.collection.name);
          const user = await userModel.findOne({ email: credentials?.email });
          console.log("Auth.ts User => ", user);
          if (user) {
            const isMatch = user?.password === credentials.password;

            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
