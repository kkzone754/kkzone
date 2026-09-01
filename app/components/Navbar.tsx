"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-2xl font-extrabold tracking-wide shrink-0"
        >
          <span className="text-yellow-400">KK</span>ZONE
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link
            href="/shop"
            className="hover:text-yellow-400 transition"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="hover:text-yellow-400 transition"
          >
            Categories
          </Link>

          <Link
            href="/#about"
            className="hover:text-yellow-400 transition"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </Link>
        </div>

        {/* Cart + Shop */}
        <div className="flex items-center gap-2 sm:gap-3">

          <Link
            href="/cart"
            className="relative border border-zinc-700 px-3 sm:px-4 py-2 rounded-full hover:border-yellow-400 transition text-lg sm:text-base"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-yellow-400 text-black text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/shop"
            className="bg-yellow-400 text-black px-3 sm:px-5 py-2 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition"
          >
            Shop Now
          </Link>

        </div>

      </div>
    </nav>
  );
}
