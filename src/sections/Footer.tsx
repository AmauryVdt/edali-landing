export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="/" className="font-display text-lg font-bold tracking-tight">
            EDL<span className="text-accent-600">Pro</span>
          </a>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} EDL Pro. Tous droits réservés.
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
