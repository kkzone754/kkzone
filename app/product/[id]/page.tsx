import Link from "next/link";
import { products } from "../../data/products";
import ProductClient from "./ProductClient";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">

          <div className="text-6xl mb-6">
            📦
          </div>

          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>

          <Link
            href="/shop"
            className="inline-block mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Back to Shop
          </Link>

        </div>
      </main>
    );
  }

  return <ProductClient product={product} />;
}