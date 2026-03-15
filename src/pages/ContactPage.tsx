import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("GA4 Event Trigger: contact_submit");
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="heading-display text-4xl mb-4">Contact Us</h1>
      <p className="text-muted-foreground mb-12">
        Have a question? We'd love to hear from you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
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
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={6}
          className="w-full px-4 py-3 border-2 border-foreground/20 bg-background focus:outline-none focus:border-foreground resize-none"
          required
        />
        <button
          type="submit"
          id="contact_submit"
          className="btn-tracking w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
