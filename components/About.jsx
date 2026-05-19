export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28 border-y border-forest/10 bg-white/50">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.14em] text-forest mb-4">Hey — I&apos;m Jawad</p>
        <img
          src="/brand_assets/jawad-avatar.svg"
          alt="Jawad avatar"
          className="w-full max-w-md border border-forest/10 rounded-sm bg-cream-muted p-4 mb-8"
          width="400"
          height="250"
        />
        <h2 className="font-display tracking-[-0.025em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.06]">
          I build 3D worlds by day, and portfolio sites that convert by night.
        </h2>
        <p className="text-base leading-[1.7] text-ink/80 mt-6">
          Product + growth background means each page pushes toward real inquiries,
          not only visual polish.
        </p>
      </div>
    </section>
  );
}
