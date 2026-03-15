import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const featured = products.slice(0, 3);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("GA4 Event Trigger: newsletter_signup");
    toast.success("Welcome to the insider list!");
    setEmail("");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero text-hero-foreground py-24 md:py-32 px-6 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            Move Faster.
            <br />
            Train Harder.
          </h1>
          <p className="max-w-md text-hero-foreground/60 mb-8 text-lg leading-relaxed">
            Engineered for the elite. Tested for the relentless. The new
            performance collection is here.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              id="shop_now"
              className="btn-tracking bg-background text-foreground px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
              onClick={() => console.log("GA4 Event Trigger: shop_now")}
            >
              Shop Now
            </Link>
            <Link
              to="/products"
              className="btn-tracking border-2 border-hero-foreground px-8 py-4 font-bold uppercase tracking-widest hover:bg-hero-foreground hover:text-hero"
            >
              View Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="heading-display text-3xl">Featured Gear</h2>
          <Link
            to="/products"
            className="nav-link hover:text-primary"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted py-20 px-6 border-y border-foreground/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="heading-display text-2xl mb-4">
            Join the Insider List
          </h2>
          <p className="text-muted-foreground mb-8">
            Get early access to drops and performance insights.
          </p>
          <form onSubmit={handleNewsletter} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 px-4 py-3 border-2 border-foreground bg-background focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              id="newsletter_signup"
              className="btn-tracking bg-foreground text-background px-8 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
            >
              Join
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
