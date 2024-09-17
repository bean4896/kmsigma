'use client'
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
const font = Open_Sans({ subsets: ["latin"] });

import { LanguageProvider } from "@/context/LanguageContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body className={font.className}>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </body>
      </html>
    </>
  );
}
