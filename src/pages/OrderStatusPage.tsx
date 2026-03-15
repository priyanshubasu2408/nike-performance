import { Link, useLocation } from "react-router-dom";
import { CheckCircle, Package, Truck, MapPin } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const steps = [
  { label: "Order Confirmed", icon: CheckCircle },
  { label: "Processing", icon: Package },
  { label: "Shipped", icon: Truck },
  { label: "Delivered", icon: MapPin },
];

const OrderStatusPage = () => {
  const location = useLocation();
  const order = location.state as {
    orderId: string;
    name: string;
    email: string;
    items: { name: string; quantity: number; price: number; size: string }[];
    total: number;
  } | null;

  const currentStep = 1; // Simulated: order just confirmed
  const progressValue = ((currentStep + 1) / steps.length) * 100;

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h1 className="heading-display text-4xl mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground">
          {order ? (
            <>Thank you, <span className="font-bold text-foreground">{order.name}</span>. Your order is being processed.</>
          ) : (
            "Your order has been placed successfully."
          )}
        </p>
        {order && (
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            Order ID: {order.orderId}
          </p>
        )}
      </div>

      {/* Progress Tracker */}
      <div className="mb-12">
        <Progress value={progressValue} className="h-2 mb-6" />
        <div className="grid grid-cols-4 gap-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i <= currentStep;
            return (
              <div key={step.label} className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 mb-2 border-2 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-foreground/20 text-muted-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Details */}
      {order && (
        <div className="border border-foreground/10 p-6 mb-8">
          <h2 className="font-bold uppercase tracking-widest text-sm mb-4">
            Order Details
          </h2>
          <div className="space-y-3 text-sm">
            {order.items.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity} (Size: {item.size})
                </span>
                <span className="font-bold">${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t border-foreground/10 pt-3 flex justify-between text-lg">
              <span className="font-bold">Total</span>
              <span className="font-black">${order.total}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-foreground/10 text-sm text-muted-foreground">
            <p>Confirmation sent to: <span className="text-foreground font-bold">{order.email}</span></p>
            <p>Estimated delivery: 3–5 business days</p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        <Link
          to="/products"
          className="btn-tracking flex-1 text-center bg-foreground text-background py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
        >
          Continue Shopping
        </Link>
        <Link
          to="/"
          className="btn-tracking flex-1 text-center border-2 border-foreground py-4 font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default OrderStatusPage;
