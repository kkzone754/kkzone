import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

type ShopPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ShopPage({
  searchParams,
}: ShopPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category;

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory
      )
    : products;

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yellow-400 font-semibold mb-3">
            KKZONE STORE
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold">
            {selectedCategory
              ? `${selectedCategory} Products`
              : "Shop All Products"}
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {selectedCategory
              ? `Explore our ${selectedCategory.toLowerCase()} collection.`
              : "Explore our collection of premium products at affordable prices."}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="text-6xl mb-6">📦</div>

            <h2 className="text-2xl font-bold">
              No products found
            </h2>

            <p className="text-gray-400 mt-3">
             We don&apos;t have products in this category yet.
            </p>

            <a
              href="/shop"
              className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              View All Products
            </a>
          </div>
        )}

      </div>
    </main>
  );
}