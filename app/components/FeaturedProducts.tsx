import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionTitle
        title="Featured Products"
        subtitle="Handpicked products loved by our customers."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            badge={product.badge}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}
