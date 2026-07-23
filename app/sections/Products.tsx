export default function Products() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Featured Products
        </h2>

        <p className="text-center text-gray-400 mt-3 mb-12">
          Discover our most popular products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-105 transition">
            <div className="h-48 bg-gray-800 rounded-xl"></div>
            <h3 className="text-2xl font-bold mt-5">
              Product 1
            </h3>
            <p className="text-yellow-400 text-xl mt-2">
              Rs. 0
            </p>
            <button className="mt-5 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold">
              Buy Now
            </button>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-105 transition">
            <div className="h-48 bg-gray-800 rounded-xl"></div>
            <h3 className="text-2xl font-bold mt-5">
              Product 2
            </h3>
            <p className="text-yellow-400 text-xl mt-2">
              Rs. 0
            </p>
            <button className="mt-5 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold">
              Buy Now
            </button>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-105 transition">
            <div className="h-48 bg-gray-800 rounded-xl"></div>
            <h3 className="text-2xl font-bold mt-5">
              Product 3
            </h3>
            <p className="text-yellow-400 text-xl mt-2">
              Rs. 0
            </p>
            <button className="mt-5 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}