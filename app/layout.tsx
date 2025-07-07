import type { Metadata } from "next";
import Vazirmatn from "@/public/fonts/fonts";
import "./globals.css";
import { ChildrenType } from "@/types/types";
import Layout from "@/layout/Layout";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Real state",
  description:
    "real state mini project for resume created with nextjs v 15 typescript tailwindcss redux",
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="fa" dir="rtl">
      <body className={Vazirmatn.className}>
        <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>
      </body>
    </html>
  );
}
