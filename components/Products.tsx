const products = [
  {
    code: 'BOPP-L',
    name: 'BOPP Laminated Bags',
    points: ['Glossy finish with premium printing', 'Multiple sizes and GSM options'],
  },
  {
    code: 'BOPP-M',
    name: 'Metallic BOPP Bags',
    points: ['Gold, silver, rose gold and custom colors', 'Premium finish for luxury and festive packaging'],
  },
  {
    code: 'NW-100',
    name: 'Non-Woven Bags',
    points: ['Durable, reusable and eco-friendly', 'Custom branding and printing available'],
  },
  {
    code: 'D-CUT',
    name: 'D-Cut Bags',
    points: ['Strong and lightweight', 'Multiple sizes, colors and loop-handle options'],
  },
  {
    code: 'W-CUT',
    name: 'W-Cut (Vest) Bags',
    points: ['Cost-effective shopping bags', 'Ideal for supermarkets, grocery and retail'],
  },
];

export default function Products() {
  return (
    <section id="products" className="border-y border-kraftline bg-[#FBFAF7] py-20">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-kraftdeep">Product range</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink">
          Five bag formats, engineered and printed to spec.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.code}
              className="rounded-lg border border-kraftline bg-white p-6 transition hover:border-leaf/50 hover:shadow-sm"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-kraftdeep">
                {p.code}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{p.name}</h3>
              <ul className="mt-3 space-y-1.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 font-body text-sm text-ink/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-lg border border-dashed border-kraftdeep/40 bg-transparent p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Custom logo &amp; brand printing
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              Bag design and size customization, OEM and private-label
              manufacturing, and bulk wholesale supply — built around your
              specification and MOQ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
