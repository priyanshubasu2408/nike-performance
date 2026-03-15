import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0]);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card product_click block"
      data-name={product.name}
      data-price={product.price}
      onClick={() =>
        console.log(`GA4 Event Trigger: product_click | Item: ${product.name}`)
      }
    >
      <div className="bg-secondary aspect-square mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-bold uppercase tracking-tight text-sm">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground">{product.category}</p>
        </div>
        <span className="font-bold tabular-nums">${product.price}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          id="add_to_cart"
          onClick={handleAddToCart}
          className="btn-tracking flex-1 bg-foreground text-background py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
        >
          Add to Cart
        </button>
        <span className="btn-tracking border-2 border-foreground px-4 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background inline-flex items-center">
          View
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
