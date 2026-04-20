/**
 * TODO: à remplacer via Magic MCP + ui-ux-pro-max
 * Brief : CTA final premium, fond navy avec gradient mesh ou orbe animée.
 */
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Prêt à gagner 3h par état des lieux ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Essai gratuit — aucune carte requise. Section à régénérer avec Magic MCP.
        </p>
        <a href="https://app.edali.fr" className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-navy shadow-float transition hover:-translate-y-0.5">
          Démarrer gratuitement
        </a>
      </div>
    </section>
  )
}
