import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import {
  ClerkProvider
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AutoQuest",
  description: "Find your dream car with AutoQuest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        <main className="min-h-screen ">
          {children}
        </main>
        <footer className="bg-blue-50 p-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with ♥️ by  <Link href="https://x.com/mnraza1907">MN Raza</Link></p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
