export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a
            href="/"
            aria-label="EDALI — Accueil"
            className="group inline-flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-navy"
          >
            EDALI
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-accent-500 transition-transform duration-200 group-hover:scale-150"
            />
          </a>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} EDALI. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="/mentions-legales" className="hover:text-slate-900">Mentions légales</a>
            <a href="/cgu" className="hover:text-slate-900">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
