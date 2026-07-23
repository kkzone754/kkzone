import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionTitle
        title="Featured Products"
        subtitle="Handpicked products loved by our customers."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <ProductCard name="Luxury Watch" price="Rs. 2,999" />
        <ProductCard name="Wireless Earbuds" price="Rs. 4,499" />
        <ProductCard name="Power Bank" price="Rs. 3,499" />
      </div>
    </section>
  );
}