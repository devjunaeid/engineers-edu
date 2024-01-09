import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { User } from "@/utils/postgreConnect";

async function loguser(credentials) {
  try {
    const user = await User.findOne({
      where: {
        user_id: credentials.user_id,
      }
    });
    if(!user){
      throw Error("Wrong Credential!!");
    }
    const passTest = bcrypt.compare(credentials.password, user.dataValues.password);
    if(!passTest) throw Error("Wrong Credential!!");
    return user;
  } catch (error) {
      throw new Error("Log in Failed!!!");
  }
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = loguser(credentials);
          return user;
        } catch (error) {
          throw new Error("Something went wrong!!");
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token, user}){
      if(user){
        token.uid = user.user_id;
        token.name = user.user_name;
        token.id = user.id;
        token.role = user.role;
        token.uimg = user.user_img;
      }
      return token;
    },
    async session({session, token}){
      if(token){
        session.uid = token.uid;
        session.name = token.name;
        session.id = token.id;
        session.role = token.role;
        session.uimg = token.uimg;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
