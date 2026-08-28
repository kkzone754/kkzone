import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KKZONE",
  description: "Premium Products • Trusted Quality • Fast Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
       <CartProvider>
  {children}
</CartProvider>
      </body>
    </html>
  );
}