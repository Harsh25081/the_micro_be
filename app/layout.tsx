import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import React from "react";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Microbe Diagnostic Laboratories Private Limited",
  description:
    "Get reliable health tests with home collection. Fast results, trusted diagnostics.",
  // generator: "v0.app",
  keywords: [
    "health tests",
    "lab tests",
    "home collection",
    "health checkup",
    "online lab",
  ],
  authors: [{ name: "Microbe" }],
  icons: {
    icon: [
      {
        url: "/Microbe-Logo-32x32.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Microbe-Logo-32x32.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      // {
      //   url: "/icon.svg",
      //   type: "image/svg+xml",
      // },
    ],
    apple: "/Microbe-Logo-32x32.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
