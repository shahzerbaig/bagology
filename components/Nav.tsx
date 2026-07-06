const WHATSAPP_URL = 'https://wa.me/917045687803?text=Hi%20Bagology%2C%20I%27d%20like%20a%20quote%20on%20custom%20bags.';
const PROMO_URL = "https://malicc.com/";

function PromoStrip() {
  return (
    <a
      href={PROMO_URL}
      target="_blank"
      rel="noopener"
      className="block bg-[#1A1A1A] px-6 py-2 text-center text-xs font-medium text-[rgba(255,255,255,0.92)] transition-colors hover:bg-[#262626] sm:text-[0.82rem]"
    >
      <span className="opacity-80">Every body deserves a website.</span>{" "}
      <span className="font-semibold underline decoration-[rgba(255,255,255,0.4)] underline-offset-2">
        Get your own wesite for free from Malicc →
      </span>
    </a>
  );
}

export default function Nav() {
  return (
    <>
    {/* <PromoStrip /> */}
    <header className="sticky top-0 z-50 border-b border-kraftline bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-forest">BAGOLOGY</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-kraftdeep sm:inline">
            non-woven &amp; BOPP
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm text-ink/80 md:flex">
          <a href="#products" className="transition hover:text-forest">Products</a>
          <a href="#export" className="transition hover:text-forest">Export</a>
          <a href="#why" className="transition hover:text-forest">Why Us</a>
          <a href="#contact" className="transition hover:text-forest">Contact</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-forest px-5 py-2.5 font-body text-sm font-medium text-white transition hover:bg-leaf"
        >
          WhatsApp Us
        </a>
      </div>
    </header>
    </>
  );
}
