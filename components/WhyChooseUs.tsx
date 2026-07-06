const points = [
  {
    title: 'Premium quality manufacturing',
    body: 'High-grade non-woven and BOPP bags produced with strict quality control.',
  },
  {
    title: 'Customized packaging solutions',
    body: 'Tailor-made sizes, colors, printing and branding to match your specification.',
  },
  {
    title: 'Competitive pricing at scale',
    body: 'Cost-effective solutions with high-volume manufacturing capacity and flexible MOQs.',
  },
  {
    title: 'Timely delivery & export support',
    body: 'Reliable Pan-India distribution and international export with on-time shipments.',
  },
  {
    title: 'Eco-friendly & customer-focused',
    body: 'Sustainable packaging backed by dedicated support and long-term partnership.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-content px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-kraftdeep">Why choose Bagology</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink">
        Five reasons buyers reorder.
      </h2>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-kraftline bg-kraftline sm:grid-cols-2 lg:grid-cols-5">
        {points.map((p, idx) => (
          <div key={p.title} className="bg-white p-6">
            <span className="font-mono text-xs text-lime">{String(idx + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 font-display text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
