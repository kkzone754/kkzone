"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  badge: string;
  colors?: string[];
};

type ProductClientProps = {
  product: Product;
};

export default function ProductClient({
  product,
}: ProductClientProps) {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || ""
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      color: selectedColor || undefined,
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello KKZONE!

I want to order:

Product: ${product.name}
Color: ${selectedColor || "Not specified"}
Quantity: ${quantity}
Price: ${product.price}

Please confirm my order.`
  );

  return (
    <main className="min-h-screen bg-black text-white py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <Link
          href="/shop"
          className="inline-block text-gray-400 hover:text-yellow-400 transition mb-6 sm:mb-10 text-sm sm:text-base"
        >
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start md:items-center">

          {/* Product Image */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 flex items-center justify-center aspect-square min-h-80 sm:min-h-96 md:min-h-auto">

            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              className="object-contain w-auto h-auto max-w-full max-h-full"
              priority
            />

            <span className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-yellow-400 text-black px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm">
              {product.badge}
            </span>

          </div>

          {/* Product Information */}
          <div>

            <p className="text-yellow-400 font-semibold text-sm sm:text-base">
              {product.category}
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 sm:mt-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4 sm:mt-5 text-sm sm:text-base">
              <span className="text-yellow-400">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="text-gray-400">
                {product.rating} / 5
              </span>
            </div>

            {/* Price */}
            <p className="text-yellow-400 text-3xl sm:text-4xl font-extrabold mt-6 sm:mt-8">
              {product.price}
            </p>

            {/* Color Selection */}
            {product.colors &&
              product.colors.length > 0 && (
                <div className="mt-6 sm:mt-8">

                  <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                    Select Color
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-3">

                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() =>
                          setSelectedColor(color)
                        }
                        className={`px-4 sm:px-5 py-2 sm:py-3 rounded-xl border font-semibold transition text-sm sm:text-base ${
                          selectedColor === color
                            ? "bg-yellow-400 text-black border-yellow-400"
                            : "border-zinc-700 text-gray-300 hover:border-yellow-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))}

                  </div>

                </div>
              )}

            {/* Quantity */}
            <div className="mt-6 sm:mt-8">

              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                Quantity
              </h3>

              <div className="flex items-center w-fit border border-zinc-700 rounded-xl overflow-hidden">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="px-4 sm:px-5 py-2 sm:py-3 text-lg sm:text-xl hover:bg-zinc-800 transition"
                >
                  −
                </button>

                <span className="px-5 sm:px-6 py-2 sm:py-3 font-bold min-w-12 sm:min-w-16 text-center">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="px-4 sm:px-5 py-2 sm:py-3 text-lg sm:text-xl hover:bg-zinc-800 transition"
                >
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-300 hover:scale-105 transition text-sm sm:text-base"
              >
                Add to Cart 🛒
              </button>

              <a
                href={`https://wa.me/923218258573?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition text-sm sm:text-base text-center"
              >
                Order on WhatsApp 📲
              </a>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
