"use client";

import {
  Headphones,
  Watch,
  Smartphone,
  Gift,
  Dog,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    { icon: Headphones, name: "Electronics" },
    { icon: Watch, name: "Watches" },
    { icon: Smartphone, name: "Mobile Accessories" },
    { icon: Gift, name: "Gift Items" },
    { icon: Dog, name: "Pet Supplies" },
    { icon: Home, name: "Home Essentials" },
  ];

  return (
    <section className="bg-zinc-950 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Shop by{" "}
            <span className="text-yellow-400">Categories</span>
          </h2>

          <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
            Find your favorite products quickly.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:border-yellow-400 transition-colors duration-300 cursor-pointer"
              >
                <div className="mx-auto w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-yellow-400 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                  />
                </div>

                <h3 className="text-white font-semibold mt-3 sm:mt-5 text-sm sm:text-base line-clamp-2">
                  {category.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
