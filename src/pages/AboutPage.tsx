const AboutPage = () => (
  <section className="max-w-4xl mx-auto py-20 px-6">
    <h1 className="heading-display text-4xl mb-8">About Nike Performance</h1>
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>
        Nike Performance Store is an academic demonstration project designed to
        showcase web analytics implementation in a realistic e-commerce
        environment. Every interaction on this site — from product clicks to
        purchases — is instrumented for tracking and analysis.
      </p>
      <p>
        Our mission mirrors the spirit of athletic excellence: to bring
        inspiration and innovation to every athlete in the world. We believe that
        if you have a body, you are an athlete. This philosophy drives every
        product we design and every experience we create.
      </p>
      <p>
        The performance collection features cutting-edge sportswear engineered
        for maximum velocity, comfort, and durability. From responsive foam
        midsoles to sweat-wicking Dri-FIT technology, every detail is optimized
        for peak performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {[
          { stat: "6+", label: "Product Categories" },
          { stat: "100%", label: "Analytics Coverage" },
          { stat: "GA4", label: "Event Tracking" },
        ].map((item) => (
          <div key={item.label} className="border-t-2 border-foreground pt-4">
            <p className="text-4xl font-black text-foreground">{item.stat}</p>
            <p className="text-sm uppercase tracking-widest font-bold mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutPage;
