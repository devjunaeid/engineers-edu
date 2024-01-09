"use client";
import { SessionProvider } from "next-auth/react";

export default function NextAuthProviderFn({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
