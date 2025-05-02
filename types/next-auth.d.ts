import NextAuth, { DefaultSession, DefaultUser, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    nickName?: string;
  }

  interface User extends DefaultUser {
    accessToken: string;
    refreshToken: string;
    nickName: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string;
    refreshToken?: string;
    nickName?: string;
  }
}
