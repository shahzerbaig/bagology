export default function Footer() {
  return (
    <footer className="border-t border-kraftline bg-ink py-10 text-white/70">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-white">BAGOLOGY</p>
          <p className="mt-1 font-body text-xs">The Science of Smart Packaging</p>
        </div>
        <p className="font-body text-xs">
          © {new Date().getFullYear()} Bagology. Rajkot, Gujarat, India.
        </p>
      </div>
    </footer>
  );
}
