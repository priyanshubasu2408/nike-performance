import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "credit_card",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`GA4 Event Trigger: purchase | Total Items: ${items.length} | Total: $${totalPrice}`);
    const orderId = `NP-${Date.now().toString(36).toUpperCase()}`;
    const orderItems = items.map((i) => ({
      name: i.product.name,
      quantity: i.quantity,
      price: i.product.price,
      size: i.size,
    }));
    clearCart();
    toast.success("Order placed successfully!");
    navigate("/order-status", {
      state: {
        orderId,
        name: form.name,
        email: form.email,
        items: orderItems,
        total: totalPrice,
      },
    });
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="heading-display text-4xl mb-12">Checkout</h1>

      {items.length > 0 && (
        <div className="mb-8 border-b border-foreground/10 pb-6 space-y-2">
          {items.map((item) => (
            <div key={item.product.id} className="flex justify-between text-sm">
              <span>
                {item.product.name} × {item.quantity} (Size: {item.size})
              </span>
              <span className="font-bold">
                ${item.product.price * item.quantity}
              </span>
            </div>
          ))}
          <div className="flex justify-between font-black text-lg pt-3 border-t border-foreground/10">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="w-full px-4 py-3 border-2 border-foreground/20 bg-background focus:outline-none focus:border-foreground"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="w-full px-4 py-3 border-2 border-foreground/20 bg-background focus:outline-none focus:border-foreground"
          required
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          className="w-full px-4 py-3 border-2 border-foreground/20 bg-background focus:outline-none focus:border-foreground"
          required
        />
        <select
          value={form.payment}
          onChange={(e) => update("payment", e.target.value)}
          className="w-full px-4 py-3 border-2 border-foreground/20 bg-background focus:outline-none focus:border-foreground"
        >
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="apple_pay">Apple Pay</option>
        </select>
        <button
          type="submit"
          id="purchase"
          className="btn-tracking w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest hover:opacity-90 mt-4"
        >
          Place Order
        </button>
      </form>
    </section>
  );
};

export default CheckoutPage;
