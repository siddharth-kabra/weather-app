import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import StoreProvider from "./StoreProvider";
import HeaderComponent from "@/components/header";
import SidebarComponent from "@/components/side-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather",
  description: "Weather application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense>
        <StoreProvider>
          <body className={inter.className}>
            <div className="flex">
              <SidebarComponent />
              <div className="flex-1 min-h-screen bg-blue-50 flex flex-col">
                <HeaderComponent />
                {children}
              </div>
            </div>
          </body>
        </StoreProvider>
      </Suspense>
    </html>
  );
}
