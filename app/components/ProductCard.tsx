"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
  rating?: number;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  badge,
  rating,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">

      <Link href={`/product/${id}`}>
        <div className="relative h-48 sm:h-56 lg:h-64 bg-zinc-800 flex items-center justify-center cursor-pointer overflow-hidden">

          <Image
            src={image}
            alt={name}
            width={220}
            height={220}
            className="object-contain group-hover:scale-110 transition duration-500 w-auto h-auto max-w-[90%] max-h-[90%]"
          />

          {badge && (
            <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </Link>

      <div className="p-4 sm:p-6 flex flex-col flex-1">

        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          <span>⭐⭐⭐⭐⭐</span>

          {rating && (
            <span className="text-gray-400 text-xs sm:text-sm">
              ({rating})
            </span>
          )}
        </div>

        <Link href={`/product/${id}`}>
          <h3 className="text-lg sm:text-xl font-bold text-white hover:text-yellow-400 transition line-clamp-2">
            {name}
          </h3>
        </Link>

        <p className="text-yellow-400 text-xl sm:text-2xl font-bold mt-3">
          {price}
        </p>

        <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-auto">

          <Link
            href={`/product/${id}`}
            className="flex-1 text-center border border-zinc-700 text-white py-2 sm:py-3 rounded-xl font-bold hover:border-yellow-400 hover:text-yellow-400 transition text-sm sm:text-base"
          >
            View
          </Link>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-yellow-400 text-black py-2 sm:py-3 rounded-xl font-bold hover:bg-yellow-300 transition text-sm sm:text-base"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}
