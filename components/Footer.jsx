export default function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl tracking-tight">By Jawad</p>
          <p className="text-sm text-ink/60">Portfolio sites for creative freelancers.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="https://weldroblox.com" target="_blank" rel="noopener noreferrer" className="pill-tag">Weld</a>
          <a href="https://cosmosmodels.co.uk" target="_blank" rel="noopener noreferrer" className="pill-tag">Cosmos Models</a>
          <a href="mailto:hello@byjawad.com" className="pill-tag">hello@byjawad.com</a>
        </div>
      </div>
    </footer>
  );
}
