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
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yellow-400 font-semibold mb-3">
            EXPLORE KKZONE
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold">
            Shop by Categories
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose a category and discover products made for everyday life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                  <Icon
                    size={32}
                    className="text-yellow-400 group-hover:scale-110 transition"
                  />
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  {category.name}
                </h2>

                <p className="text-gray-400 mt-3">
                  {category.description}
                </p>

                <div className="text-yellow-400 font-semibold mt-6">
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
