export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6">

        <div className="max-w-3xl">

          <span className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold mb-6">
            ⭐ Trusted Online Store
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Premium Products <br />
            <span className="text-yellow-400">For Everyday Life</span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-xl">
            Shop with confidence. Quality products, affordable prices,
            and fast delivery across Pakistan.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition">
              WhatsApp
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-gray-300">
            <span>✅ Fast Delivery</span>
            <span>✅ Trusted Seller</span>
            <span>✅ Premium Quality</span>
          </div>

        </div>

      </div>
    </section>
  );
}