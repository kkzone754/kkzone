import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionTitle
        title="Featured Products"
        subtitle="Handpicked products loved by our customers."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12">
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
