const stats = [
  { value: '1000+', label: 'Pan-India customers served' },
  { value: '2 yrs', label: 'In manufacturing operation' },
  { value: 'Export-ready', label: 'International quality standards' },
  { value: 'Flexible', label: 'MOQs for export clients' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-kraftline bg-forest">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.value}</p>
            <p className="mt-1 font-body text-xs text-white/70 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
