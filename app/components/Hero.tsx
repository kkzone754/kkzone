import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side */}
        <div>
          <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
            Premium Online Shopping
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Shop Smarter <br />
            with <span className="text-yellow-400">KKZONE</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            Discover premium products at affordable prices with fast delivery
            and trusted quality.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="KKZONE Logo"
            width={450}
            height={450}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}