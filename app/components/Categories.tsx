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
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Shop by{" "}
            <span className="text-yellow-400">Categories</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Find your favorite products quickly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 transition-colors duration-300 cursor-pointer"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                  <Icon
                    size={30}
                    className="text-yellow-400"
                  />
                </div>

                <h3 className="text-white font-semibold mt-5">
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