import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h1 className="heading-display text-3xl mb-4">Product Not Found</h1>
      </div>
    );
  }

  const handleAdd = () => {
    const size = selectedSize || product.sizes[0];
    addToCart(product, size);
    toast.success(`${product.name} added to cart`);
  };

  const handleBuyNow = () => {
    const size = selectedSize || product.sizes[0];
    addToCart(product, size);
    console.log("GA4 Event Trigger: buy_now");
    navigate("/checkout");
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-secondary aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            {product.category}
          </p>
          <h1 className="heading-display text-4xl mb-2">{product.name}</h1>
          <p className="text-3xl font-black mb-6">${product.price}</p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-3">
              Select Size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`btn-tracking px-4 py-2 border-2 text-sm font-bold uppercase ${
                    selectedSize === size
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/20 hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              id="add_to_cart"
              onClick={handleAdd}
              className="btn-tracking flex-1 bg-foreground text-background py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
            >
              Add to Cart
            </button>
            <button
              id="buy_now"
              onClick={handleBuyNow}
              className="btn-tracking flex-1 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest hover:opacity-90"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
