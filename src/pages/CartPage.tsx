import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h1 className="heading-display text-3xl mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some gear to get started.
        </p>
        <Link
          to="/products"
          className="btn-tracking inline-block bg-foreground text-background px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
        >
          Shop Now
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="heading-display text-4xl mb-12">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-6 border-b border-foreground/10 pb-6"
            >
              <div className="w-24 h-24 bg-secondary flex-shrink-0 overflow-hidden">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold uppercase tracking-tight">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Size: {item.size}
                    </p>
                  </div>
                  <p className="font-bold tabular-nums">
                    ${item.product.price * item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="btn-tracking p-1 border border-foreground/20 hover:border-foreground"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold tabular-nums w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="btn-tracking p-1 border border-foreground/20 hover:border-foreground"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="btn-tracking ml-auto p-1 text-muted-foreground hover:text-primary"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted p-8">
          <h2 className="font-bold uppercase tracking-widest text-sm mb-6">
            Order Summary
          </h2>
          <div className="space-y-3 text-sm mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">${totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-bold">FREE</span>
            </div>
            <div className="border-t border-foreground/10 pt-3 flex justify-between text-lg">
              <span className="font-bold">Total</span>
              <span className="font-black">${totalPrice}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="btn-tracking block w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest text-center hover:bg-primary hover:text-primary-foreground"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
