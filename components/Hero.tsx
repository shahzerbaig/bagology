const WHATSAPP_URL = 'https://wa.me/917045687803?text=Hi%20Bagology%2C%20I%27d%20like%20a%20quote%20on%20custom%20bags.';

const swatches = [
  { code: 'BOPP-L', label: 'BOPP Laminated', tone: 'bg-forest', textureClass: 'weave-texture' },
  { code: 'BOPP-M', label: 'Metallic BOPP', tone: 'bg-[#8a7326]', textureClass: 'weave-texture' },
  { code: 'NW-100', label: 'Non-Woven', tone: 'bg-leaf', textureClass: 'weave-texture' },
  { code: 'D-CUT', label: 'D-Cut', tone: 'bg-lime', textureClass: 'weave-texture' },
  { code: 'W-CUT', label: 'W-Cut / Vest', tone: 'bg-kraftdeep', textureClass: 'weave-texture' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-kraftline bg-paper kraft-grain">
      <div className="mx-auto max-w-content px-6 pb-16 pt-16 sm:pt-24">
        <p className="spec-label font-mono text-xs uppercase text-kraftdeep">
          Manufactured in Rajkot, India · Exported to the US &amp; Europe
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
          The Science of Smart Packaging.
        </h1>

        <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink/75 sm:text-xl">
          Bagology manufactures premium non-woven, BOPP and metallic BOPP bags —
          engineered for durability, printed for your brand, and shipped reliably
          to retailers, garment brands and distributors worldwide.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-7 py-3.5 font-body text-sm font-medium text-white shadow-sm transition hover:bg-leaf"
          >
            Get a Quote on WhatsApp
          </a>
          <a
            href="tel:+917045687803"
            className="rounded-full border border-ink/15 px-7 py-3.5 font-body text-sm font-medium text-ink transition hover:border-forest hover:text-forest"
          >
            Call +91 70456 87803
          </a>
        </div>

        {/* Signature element: material spec strip, echoing an actual fabric swatch card */}
        <div className="mt-16">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-kraftdeep">
            Product line / material spec
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {swatches.map((s) => (
              <div
                key={s.code}
                className={`group relative h-24 rounded-md ${s.tone} ${s.textureClass} overflow-hidden transition-transform hover:-translate-y-1`}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                    {s.code}
                  </span>
                  <span className="font-body text-xs font-medium text-white">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
