const WHATSAPP_URL = 'https://wa.me/917045687803?text=Hi%20Bagology%2C%20I%27d%20like%20a%20quote%20on%20custom%20bags.';
const MAP_QUERY = encodeURIComponent(
  'Akansha Complex, 2nd Floor, Office No 233, Opposite Jaykay Hero Showroom, Gondal Road, Rajkot 360002'
);

export default function Contact() {
  return (
    <section id="contact" className="border-t border-kraftline bg-[#FBFAF7] py-20">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-kraftdeep">Contact</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink">
          Tell us what you need packaged.
        </h2>
        <p className="mt-4 max-w-xl font-body text-sm text-ink/70">
          Reach out by WhatsApp, call or email — we typically respond within one
          business day, including for enquiries from the US and Europe.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-forest px-6 py-3 font-body text-sm font-medium text-white transition hover:bg-leaf"
              >
                WhatsApp
              </a>
              <a
                href="tel:+917045687803"
                className="rounded-full border border-ink/15 px-6 py-3 font-body text-sm font-medium text-ink transition hover:border-forest hover:text-forest"
              >
                Call
              </a>
              <a
                href="mailto:harshseta.hs@gmail.com"
                className="rounded-full border border-ink/15 px-6 py-3 font-body text-sm font-medium text-ink transition hover:border-forest hover:text-forest"
              >
                Email
              </a>
            </div>

            <dl className="space-y-4 border-t border-kraftline pt-6 font-body text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-kraftdeep">Phone / WhatsApp</dt>
                <dd className="mt-1 text-ink/80">+91 70456 87803</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-kraftdeep">Email</dt>
                <dd className="mt-1 text-ink/80">harshseta.hs@gmail.com</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-kraftdeep">Address</dt>
                <dd className="mt-1 text-ink/80">
                  Akansha Complex, 2nd Floor, Office No 233,
                  <br />
                  Opposite Jaykay Hero Showroom, Gondal Road,
                  <br />
                  Rajkot 360002, Gujarat, India
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-kraftdeep">Hours</dt>
                <dd className="mt-1 text-ink/80">Monday – Saturday, 9:00 AM – 9:00 PM IST</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-kraftdeep">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href="https://www.instagram.com/bagology.eco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest underline underline-offset-2 hover:text-leaf"
                  >
                    @bagology.eco
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="h-80 overflow-hidden rounded-lg border border-kraftline lg:h-auto">
            <iframe
              title="Bagology location on Gondal Road, Rajkot"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
