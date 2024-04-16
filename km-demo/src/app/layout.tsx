import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KingMidasGames",
  description: "demo site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body className={font.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
