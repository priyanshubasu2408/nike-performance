import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductsPage = () => (
  <section className="max-w-7xl mx-auto py-16 px-6">
    <h1 className="heading-display text-4xl mb-2">All Products</h1>
    <p className="text-muted-foreground mb-12">
      Performance gear engineered for the relentless.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </section>
);

export default ProductsPage;
