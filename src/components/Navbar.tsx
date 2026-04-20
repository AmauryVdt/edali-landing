export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-xl font-bold tracking-tight">
          EDL<span className="text-accent-600">Pro</span>
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
