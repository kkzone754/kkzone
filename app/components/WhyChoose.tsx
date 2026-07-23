export default function WhyChoose() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Quick and reliable delivery across Pakistan.",
    },
    {
      icon: "🛡️",
      title: "Trusted Quality",
      desc: "Every product is carefully selected.",
    },
    {
      icon: "💳",
      title: "Secure Shopping",
      desc: "Safe and secure shopping experience.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "We're always here to help you.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Why Choose KKZONE?
        </h2>

        <p className="text-gray-400 mt-4">
          Shopping made simple, secure and reliable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 transition duration-300"
          >
            <div className="text-5xl">{item.icon}</div>

            <h3 className="text-xl font-bold text-white mt-5">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}