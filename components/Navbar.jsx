export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-md border-b border-forest/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-ink">
          By Jawad
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-ink/75 hover:text-forest">Build log</a>
          <a href="#process" className="text-ink/75 hover:text-forest">Process</a>
          <a href="#proof" className="text-ink/75 hover:text-forest">Proof</a>
          <a href="#pricing" className="text-ink/75 hover:text-forest">Pricing</a>
        </div>
        <a href="#intake-form" className="inline-flex items-center justify-center px-4 py-2 bg-forest text-cream text-sm font-semibold rounded-sm">
          Start project
        </a>
      </nav>
    </header>
  );
}
