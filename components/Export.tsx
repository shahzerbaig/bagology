const highlights = [
  'International quality standards',
  'Custom branding & private label',
  'Bulk export orders',
  'Reliable packaging & documentation',
  'Timely worldwide shipping',
  'Flexible MOQ for export clients',
];

const industries = [
  'Garment & Fashion Brands',
  'Retail Stores',
  'Supermarkets',
  'Pharmacies',
  'Corporate Organizations',
  'Events & Exhibitions',
  'Educational Institutions',
  'FMCG Brands',
];

export default function Export() {
  return (
    <section id="export" className="bg-forest py-20 text-white">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime">Export</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Built for wholesalers and distributors sourcing internationally.
            </h2>
            <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-white/75">
              We manufacture and export premium-quality non-woven and BOPP bags
              to international markets, ensuring global quality standards,
              secure packaging and on-time shipments — with customized
              solutions for distributors, wholesalers, retailers and
              importers across the US and Europe.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 font-body text-sm text-white/90">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime">Industries we serve</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/20 px-4 py-2 font-body text-xs text-white/85"
                >
                  {i}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-white/15 weave-texture p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-lime">Services</p>
              <ul className="mt-3 space-y-2 font-body text-sm text-white/90">
                <li>Custom logo &amp; brand printing</li>
                <li>Bag design &amp; size customization</li>
                <li>Corporate &amp; promotional packaging</li>
                <li>OEM &amp; private label manufacturing</li>
                <li>Pan-India delivery &amp; export shipping</li>
                <li>Eco-friendly packaging consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
