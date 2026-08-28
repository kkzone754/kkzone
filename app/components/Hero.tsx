"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-b from-black via-zinc-950 to-black text-white overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-yellow-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 -right-40 w-125 h-125 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold text-sm shadow-lg">
            ⭐ Trusted Premium Store
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
            Smart Shopping.
            <br />
            <span className="text-yellow-400">
              Premium Living.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-8">
            Discover premium gadgets, accessories and everyday essentials
            with trusted quality, affordable prices and fast delivery
            across Pakistan.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold shadow-xl"
            >
              🛒 Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition"
            >
              📦 Browse Categories
            </motion.button>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-12 text-gray-300">
            <span>🚚 Fast Delivery</span>
            <span>⭐ Premium Quality</span>
            <span>🔒 Secure Checkout</span>
            <span>💬 WhatsApp Support</span>
          </div>

        </motion.div>

        {/* Product */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/products/watch.png"
              alt="Luxury Watch"
              width={520}
              height={520}
              priority
              className="drop-shadow-[0_0_80px_rgba(250,204,21,0.35)]"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}