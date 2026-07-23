import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: string;
};

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-64 bg-zinc-800 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt={name}
          width={180}
          height={180}
          className="group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          SALE
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-400 text-sm">(4.9)</span>
        </div>

        <h3 className="text-xl font-bold text-white">{name}</h3>

        <p className="text-yellow-400 text-2xl font-bold mt-3">
          {price}
        </p>

        <button className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}