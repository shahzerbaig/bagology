export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[240px_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-kraftdeep">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
            Packaging built to carry your brand.
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 font-body text-base leading-relaxed text-ink/75">
          <p>
            At Bagology, we specialize in manufacturing premium-quality non-woven
            bags that combine durability, functionality and sustainability. We
            believe packaging is more than something that carries a product —
            it&apos;s a chance to strengthen a brand and leave a lasting impression.
          </p>
          <p>
            With advanced manufacturing capability, strict quality control and a
            customer-first approach, we deliver customized packaging solutions for
            retailers, garment brands, supermarkets, corporate organizations,
            pharmacies and event businesses — across India and, increasingly,
            for partners in the US and Europe.
          </p>
          <p>
            Our focus on innovation, on-time delivery and eco-friendly practices
            helps businesses replace single-use plastic with reusable,
            high-quality bags that reflect their identity while contributing to a
            greener supply chain.
          </p>
        </div>
      </div>
    </section>
  );
}
