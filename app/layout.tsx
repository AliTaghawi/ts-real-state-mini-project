import type { Metadata } from "next";
import Vazirmatn from "@/public/fonts/fonts";
import "./globals.css";
import { ChildrenType } from "@/types/types";
import Layout from "@/layout/Layout";
import ReduxProvider from "@/providers/ReduxProvider";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata: Metadata = {
  title: "Real state",
  description:
    "real state mini project for resume created with nextjs v 15 typescript tailwindcss redux",
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="fa" dir="rtl" className="dark:bg-gray-950 dark:text-neutral-200">
      <body className={Vazirmatn.className}>
        <NextAuthProvider>
          <ReduxProvider>
            <Layout>{children}</Layout>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
