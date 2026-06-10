import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, Info, Sparkles } from 'lucide-react'
import { useState } from 'react'

type BillingCycle = 'monthly' | 'yearly'

type Plan = {
  name: string
  tagline: string
  priceMonthly: number | null
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
  custom?: boolean
}

const plans: Plan[] = [
  {
    name: 'Solo',
    tagline: "Pour l'agent indépendant qui gère ses EDL en solo.",
    priceMonthly: 29,
    features: [
      '7 EDL par mois',
      'Transcription + structuration IA',
      'PDF signé électroniquement',
      'Mode hors-ligne (PWA)',
      'Support par email',
    ],
    cta: 'Commencer — 2 EDL offerts',
    ctaHref: 'https://app.edali.fr/signup?plan=solo',
  },
  {
    name: 'Pro',
    tagline: "Pour les agences jusqu'à 10 agents.",
    priceMonthly: 99,
    highlighted: true,
    features: [
      '30 EDL par mois (partagés)',
      "Jusqu'à 10 utilisateurs",
      'Templates personnalisés (logo agence)',
      'Export PDF branded',
      'Dashboard admin (stats par agent)',
      'Gestion des rôles',
      'Support prioritaire',
    ],
    cta: 'Commencez dès maintenant',
    ctaHref: 'https://app.edali.fr/signup?plan=pro',
  },
  {
    name: 'Entreprise',
    tagline: 'Pour les grands réseaux et franchises.',
    priceMonthly: null,
    custom: true,
    features: [
      'EDL illimités',
      'Utilisateurs illimités',
      'SSO / SAML',
      'API & intégrations',
      'Onboarding dédié',
      'SLA garanti',
    ],
    cta: 'Nous contacter',
    ctaHref: 'mailto:contact@edali.fr',
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>('monthly')

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-accent-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Tarifs
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Un plan pour chaque{' '}
            <span className="text-gradient">rythme de terrain.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Sans engagement. Annulable en un clic. Aucune carte requise pour
            essayer.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <BillingToggle billing={billing} onChange={setBilling} />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch lg:gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-slate-500"
        >
          <Info className="h-4 w-4 shrink-0 text-slate-400" />
          <span>
            EDL supplémentaires disponibles à partir de{' '}
            <strong className="font-semibold text-navy">4,99€</strong> — pas
            besoin de changer de plan.
          </span>
        </motion.p>
      </div>
    </section>
  )
}

function BillingToggle({
  billing,
  onChange,
}: {
  billing: BillingCycle
  onChange: (c: BillingCycle) => void
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Fréquence de facturation"
      className="relative inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-card"
    >
      {(['monthly', 'yearly'] as const).map((cycle) => {
        const active = billing === cycle
        return (
          <button
            key={cycle}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(cycle)}
            className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active ? 'text-white' : 'text-slate-600 hover:text-navy'
            }`}
          >
            {active && (
              <motion.span
                layoutId="billing-toggle-bg"
                className="absolute inset-0 rounded-full bg-navy shadow-float"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">
              {cycle === 'monthly' ? 'Mensuel' : 'Annuel'}
            </span>
            {cycle === 'yearly' && (
              <span
                className={`relative rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  active
                    ? 'bg-accent-400/30 text-accent-100'
                    : 'bg-emerald-50 text-emerald-700'
                }`}
              >
                −1 mois
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

function PlanCard({
  plan,
  billing,
  index,
}: {
  plan: Plan
  billing: BillingCycle
  index: number
}) {
  const featured = !!plan.highlighted

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative flex ${featured ? 'md:-my-4' : ''}`}
    >
      {featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent-500/40 via-accent-400/20 to-accent-500/40 opacity-70 blur-xl"
        />
      )}

      <div
        className={`relative flex w-full flex-col overflow-hidden rounded-2xl border p-7 transition duration-300 sm:p-8 ${
          featured
            ? 'border-navy-800 bg-navy text-white shadow-modal'
            : 'border-slate-200/70 bg-white text-navy shadow-card hover:-translate-y-0.5 hover:shadow-float'
        }`}
      >
        {featured && (
          <>
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-500/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-accent-400/20 blur-3xl"
            />
          </>
        )}

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3
              className={`font-display text-xl font-semibold tracking-tight ${
                featured ? 'text-white' : 'text-navy'
              }`}
            >
              {plan.name}
            </h3>
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-float">
                <Sparkles className="h-3 w-3" />
                Populaire
              </span>
            )}
          </div>
        </div>

        <p
          className={`relative mt-2 text-sm leading-relaxed ${
            featured ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {plan.tagline}
        </p>

        <div className="relative mt-6">
          <PriceDisplay plan={plan} billing={billing} featured={featured} />
        </div>

        <a
          href={plan.ctaHref}
          className={`group relative mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 ${
            featured
              ? 'bg-white text-navy shadow-glow hover:-translate-y-0.5 hover:bg-slate-50'
              : plan.custom
                ? 'border border-navy bg-white text-navy hover:bg-navy hover:text-white'
                : 'bg-navy text-white shadow-float hover:-translate-y-0.5 hover:bg-navy-800'
          }`}
        >
          {plan.cta}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>

        <div
          aria-hidden
          className={`relative my-7 h-px ${
            featured ? 'bg-white/10' : 'bg-slate-100'
          }`}
        />

        <p
          className={`relative mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest ${
            featured ? 'text-accent-300' : 'text-slate-400'
          }`}
        >
          Inclus
        </p>

        <ul className="relative space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-sm ${
                featured ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  featured
                    ? 'bg-accent-400/20 text-accent-300'
                    : 'bg-accent-50 text-accent-600'
                }`}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function PriceDisplay({
  plan,
  billing,
  featured,
}: {
  plan: Plan
  billing: BillingCycle
  featured: boolean
}) {
  if (plan.custom) {
    return (
      <div>
        <span
          className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${
            featured ? 'text-white' : 'text-navy'
          }`}
        >
          Sur devis
        </span>
        <p
          className={`mt-1 text-sm ${featured ? 'text-slate-300' : 'text-slate-500'}`}
        >
          Tarification adaptée à votre volume.
        </p>
      </div>
    )
  }

  const monthly = plan.priceMonthly!
  const displayPrice =
    billing === 'yearly' ? Math.round((monthly * 11) / 12) : monthly
  const yearlyTotal = monthly * 11

  return (
    <div className="relative min-h-[72px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={billing}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="flex items-baseline gap-1"
        >
          <span
            className={`font-display text-5xl font-bold tracking-tight sm:text-6xl ${
              featured ? 'text-white' : 'text-navy'
            }`}
          >
            {displayPrice}
          </span>
          <span
            className={`font-display text-2xl font-bold ${
              featured ? 'text-white' : 'text-navy'
            }`}
          >
            €
          </span>
          <span
            className={`ml-1 text-sm font-medium ${
              featured ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            / mois
          </span>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        {billing === 'yearly' ? (
          <motion.p
            key="yearly-hint"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, delay: 0.05 }}
            className={`mt-1 text-xs font-medium ${
              featured ? 'text-accent-200' : 'text-accent-600'
            }`}
          >
            Soit {yearlyTotal}€ facturés à l'année
          </motion.p>
        ) : (
          <motion.p
            key="monthly-hint"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, delay: 0.05 }}
            className={`mt-1 text-xs ${
              featured ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Sans engagement
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
