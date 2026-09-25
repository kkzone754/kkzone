import ShopClient from "./ShopClient";

type ShopPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category;

  return (
    <main className="min-h-screen bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-yellow-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            KKZONE STORE
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            Shop All Products
          </h1>
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Search, filter and explore the products available at KKZONE.
          </p>
        </div>

        <ShopClient initialCategory={selectedCategory} />
      </div>
    </main>
  );
}
