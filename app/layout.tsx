import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = "https://kkzone.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KKZONE | Premium Products & Everyday Essentials",
    template: "%s | KKZONE",
  },
  description:
    "Shop gadgets, watches, mobile accessories, gifts, pet supplies and everyday essentials from KKZONE.",
  keywords: [
    "KKZONE",
    "KK ZONE",
    "online shopping Pakistan",
    "gadgets",
    "watches",
    "mobile accessories",
    "gift items",
    "pet supplies",
    "home essentials",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KKZONE | Premium Products & Everyday Essentials",
    description:
      "Discover gadgets, accessories and everyday essentials at KKZONE.",
    url: siteUrl,
    siteName: "KKZONE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "KKZONE | Premium Products & Everyday Essentials",
    description:
      "Discover gadgets, accessories and everyday essentials at KKZONE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen bg-black text-white"}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
