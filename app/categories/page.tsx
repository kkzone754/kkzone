import Link from "next/link";
import {
  Headphones,
  Watch,
  Smartphone,
  Gift,
  Dog,
  Home,
} from "lucide-react";

const categories = [
  {
    icon: Headphones,
    name: "Electronics",
    description: "Earbuds, power banks and useful gadgets.",
  },
  {
    icon: Watch,
    name: "Watches",
    description: "Stylish watches for everyday use.",
  },
  {
    icon: Smartphone,
    name: "Mobile Accessories",
    description: "Accessories for your mobile devices.",
  },
  {
    icon: Gift,
    name: "Gift Items",
    description: "Useful and stylish gifts for everyone.",
  },
  {
    icon: Dog,
    name: "Pet Supplies",
    description: "Everyday products for your pets.",
  },
  {
    icon: Home,
    name: "Home Essentials",
    description: "Practical products for daily life.",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-14">
          <p className="text-yellow-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            EXPLORE KKZONE
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            Shop by Categories
          </h1>

          <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Choose a category and discover products made for everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                  <Icon
                    size={32}
                    className="text-yellow-400 group-hover:scale-110 transition"
                  />
                </div>

                <h2 className="text-lg sm:text-2xl font-bold mt-4 sm:mt-6 line-clamp-2">
                  {category.name}
                </h2>

                <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base line-clamp-3">
                  {category.description}
                </p>

                <div className="text-yellow-400 font-semibold mt-4 sm:mt-6 text-sm sm:text-base">
                  Browse Products →
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  );
}
