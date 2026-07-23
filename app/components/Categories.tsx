export default function Categories() {
  const categories = [
    { icon: "🎧", name: "Electronics" },
    { icon: "⌚", name: "Watches" },
    { icon: "📱", name: "Mobile Accessories" },
    { icon: "🎁", name: "Gift Items" },
    { icon: "🐶", name: "Pet Supplies" },
    { icon: "🏠", name: "Home Essentials" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Shop by Categories
        </h2>

        <p className="text-gray-400 mt-4">
          Find your favorite products quickly.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl">{category.icon}</div>

            <h3 className="text-white font-semibold mt-4">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}