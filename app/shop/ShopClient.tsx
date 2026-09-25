"use client";

import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = [
  "All",
  "Electronics",
  "Watches",
  "Mobile Accessories",
  "Gift Items",
  "Pet Supplies",
  "Home Essentials",
];

type ShopClientProps = {
  initialCategory?: string;
};

export default function ShopClient({ initialCategory }: ShopClientProps) {
  const validInitialCategory =
    initialCategory && categories.includes(initialCategory)
      ? initialCategory
      : "All";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(validInitialCategory);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
        <label htmlFor="product-search" className="sr-only">
          Search products
        </label>

        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-yellow-400 transition"
        />

        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 mt-4">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 px-4 py-2 rounded-full border font-semibold text-sm transition ${
                category === item
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-zinc-700 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              badge={product.badge}
              rating={product.rating}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-5xl sm:text-6xl mb-6">🔎</div>
          <h2 className="text-xl sm:text-2xl font-bold">No products found</h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Try a different search or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition text-sm sm:text-base"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}
