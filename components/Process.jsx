const steps = [
  {
    title: "Tell me about yourself",
    body: "Fill short intake form with your best work, goals, and references.",
  },
  {
    title: "I design and build",
    body: "First draft usually lands within a week, then we iterate fast.",
  },
  {
    title: "You launch",
    body: "Final handoff includes deploy setup and ownership transfer.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-28 border-y border-forest/10 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.14em] text-forest mb-4">Process</p>
        <h2 className="font-display tracking-[-0.025em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] max-w-xl">
          Three steps to site you are proud of.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {steps.map((step, i) => (
            <article key={step.title} className="bg-white border border-forest/10 rounded-sm p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-riso mb-3">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl tracking-[-0.02em]">{step.title}</h3>
              <p className="text-sm text-ink/75 leading-relaxed mt-3">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
