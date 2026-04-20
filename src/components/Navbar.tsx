export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="/"
          aria-label="EDALI — Accueil"
          className="group inline-flex items-center gap-1.5 font-display text-xl font-bold tracking-tight text-navy"
        >
          EDALI
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-accent-500 transition-transform duration-200 group-hover:scale-150"
          />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Fonctionnalités</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Comment ça marche</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Tarifs</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://app.edali.fr" className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:inline-block">Se connecter</a>
          <a href="https://app.edali.fr" className="inline-flex items-center rounded-xl bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800">
            Essayer gratuitement
          </a>
        </div>
      </nav>
    </header>
  )
}
