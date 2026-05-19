const includes = [
  "Custom design around your work",
  "Up to 5 pages",
  "Mobile-first responsive build",
  "Contact form wired and ready",
  "Vercel hosting handoff",
  "2 revision rounds",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.14em] text-forest mb-4">Pricing</p>
        <h2 className="font-display tracking-[-0.025em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] max-w-xl">
          One price. No bloat. No retainers.
        </h2>

        <article className="bg-white border border-forest/12 rounded-sm p-8 mt-10">
          <div className="flex flex-wrap items-end gap-4">
            <h3 className="font-display text-3xl tracking-[-0.02em]">The Portfolio Site</h3>
            <p className="font-display text-4xl tracking-[-0.03em] text-forest">$300</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 mt-6 text-sm text-ink/80">
            {includes.map((item) => (
              <li key={item} className="before:content-['✓'] before:text-riso before:font-bold before:mr-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
