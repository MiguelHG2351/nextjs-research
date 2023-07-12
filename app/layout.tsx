import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidenav from "@/app/components/Sidenav";
import { Providers } from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className="min-h-screen flex bg-white" style={inter.style}>
          <div className="grid grid-cols-[200px_auto] w-full flex-1">
            <Sidenav />
            {children}
          </div>
        </body>
      </html>
    </Providers>
  );
}
