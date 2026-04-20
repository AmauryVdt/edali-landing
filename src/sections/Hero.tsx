/**
 * TODO: à remplacer via Magic MCP + ui-ux-pro-max
 * Brief : Hero corporate premium avec touche playful.
 *  - Titre accrocheur sur le gain de temps (3h -> 30min)
 *  - Sous-titre : explique le voice-to-PDF pour pros de l'immo
 *  - CTA primaire + secondaire
 *  - Élément "wow" : gradient orb, mockup animé ou typo kinetic
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            IA propulsée par Claude & Whisper
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl lg:text-7xl">
            L'état des lieux<br />
            <span className="text-gradient">en 30 minutes</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Dictez vos observations, l'IA structure tout. PDF professionnel signé numériquement en un clic.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://app.edali.fr" className="inline-flex items-center justify-center rounded-xl bg-navy px-6 py-3.5 text-base font-semibold text-white shadow-float transition hover:-translate-y-0.5 hover:bg-navy-800">
              Démarrer gratuitement
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:border-slate-400">
              Voir une démo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
