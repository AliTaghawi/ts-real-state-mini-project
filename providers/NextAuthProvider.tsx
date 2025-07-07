"use client";

import { ChildrenType } from "@/types/types";
import { SessionProvider } from "next-auth/react";

const NextAuthProvider = ({ children }: ChildrenType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
