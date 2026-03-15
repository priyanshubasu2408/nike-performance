import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="text-xl font-black tracking-tighter mb-4">
          NIKE <span className="text-primary">PERFORMANCE</span>
        </div>
        <p className="text-background/50 max-w-sm">
          Our mission is to bring inspiration and innovation to every athlete* in
          the world. *If you have a body, you are an athlete.
        </p>
      </div>
      <div>
        <h4 className="font-bold uppercase mb-4 text-sm">Quick Links</h4>
        <ul className="text-background/50 text-sm space-y-2">
          <li><Link to="/products" className="hover:text-primary btn-tracking">Products</Link></li>
          <li><Link to="/about" className="hover:text-primary btn-tracking">About</Link></li>
          <li><Link to="/contact" className="hover:text-primary btn-tracking">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold uppercase mb-4 text-sm">Support</h4>
        <ul className="text-background/50 text-sm space-y-2">
          <li>Order Status</li>
          <li>Shipping & Delivery</li>
          <li>Returns</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-background/10 text-background/30 text-xs">
      © 2026 Nike Performance Store. Analytics Demo — Academic Project.
    </div>
  </footer>
);

export default Footer;
