import { motion } from 'framer-motion'
import {
  CheckCircle2,
  FileCheck2,
  Mic,
  ShieldCheck,
  Sparkles,
  Wand2,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-32 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Workflow
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            De la visite au PDF signé,{' '}
            <span className="text-gradient">en 3 étapes.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Pas de formation, pas de paperasse. Vous parlez, l'IA structure,
            vous signez.
          </p>
        </motion.div>

        <div className="relative mt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[23px] top-6 bottom-6 w-px md:left-1/2 md:-translate-x-1/2"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, #cbd5e1 0 6px, transparent 6px 14px)',
            }}
          />

          <div className="space-y-20 md:space-y-28">
            <Step
              index={0}
              number="01"
              icon={Mic}
              eyebrow="Étape 01 · Dicter"
              title="Parlez pendant la visite."
              description="Pièce par pièce, décrivez ce que vous voyez : matériaux, états, défauts. Whisper transcrit même les termes techniques du métier."
              bullets={[
                'Reconnaissance offline possible',
                'Vocabulaire immobilier FR',
                'Reprise à la volée',
              ]}
              visual={<DictateVisual />}
            />

            <Step
              index={1}
              number="02"
              icon={Wand2}
              eyebrow="Étape 02 · Structurer"
              title="L'IA organise tout, sans ressaisie."
              description="Claude identifie la pièce, l'élément, l'état et la vétusté. Vous relisez, corrigez au besoin. Zéro tableur, zéro copier-coller."
              bullets={[
                'Pièce · élément · état · vétusté',
                'Règles juridiques françaises',
                'Édition inline en 2 clics',
              ]}
              visual={<StructureVisual />}
              reversed
            />

            <Step
              index={2}
              number="03"
              icon={FileCheck2}
              eyebrow="Étape 03 · Signer"
              title="PDF pro, signé, envoyé."
              description="Génération instantanée, mise en page conforme, signature électronique locataire & bailleur. Archivage automatique dans votre espace."
              bullets={[
                'Signature qualifiée eIDAS',
                'Envoi par email au locataire',
                'Coffre-fort numérique',
              ]}
              visual={<SignedVisual />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

type StepProps = {
  index: number
  number: string
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  visual: ReactNode
  reversed?: boolean
}

function Step({
  index,
  number,
  icon: Icon,
  eyebrow,
  title,
  description,
  bullets,
  visual,
  reversed = false,
}: StepProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-0 z-10 md:left-1/2 md:-translate-x-1/2"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-400 font-mono text-sm font-bold text-white shadow-float ring-[6px] ring-white">
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: reversed ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={`pl-20 md:pl-0 ${
            reversed ? 'md:order-2 md:pl-12 lg:pl-16' : 'md:order-1 md:pr-12 lg:pr-16'
          }`}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-600">
            {eyebrow}
          </span>
          <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-slate-600">
            {description}
          </p>
          <ul className="mt-5 space-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-sm text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-400">
            <span>{number}</span>
            <span aria-hidden className="h-px w-8 bg-slate-300" />
            <span>sur 03</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`pl-20 md:pl-0 ${
            reversed ? 'md:order-1 md:pr-12 lg:pr-16' : 'md:order-2 md:pl-12 lg:pl-16'
          }`}
        >
          {visual}
        </motion.div>
      </div>

      <span className="sr-only">Étape {index + 1}</span>
    </div>
  )
}

function DictateVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent-500/15 to-accent-400/5 blur-2xl"
      />
      <div className="relative flex flex-col items-center rounded-2xl border border-slate-200/70 bg-white p-8 shadow-card">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600">
            Cuisine · 00:42
          </span>
        </div>

        <div className="relative mt-6 flex h-28 w-28 items-center justify-center">
          <motion.span
            aria-hidden
            className="absolute h-full w-full rounded-full bg-accent-500/20"
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.span
            aria-hidden
            className="absolute h-full w-full rounded-full bg-accent-500/15"
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.6,
            }}
          />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 shadow-float">
            <Mic className="h-8 w-8 text-white" strokeWidth={2} />
          </div>
        </div>

        <p className="mt-6 max-w-xs text-center text-sm leading-relaxed text-slate-600">
          <span className="font-semibold text-navy">"</span>
          Plan de travail en granit,{' '}
          <span className="rounded bg-accent-50 px-1 text-accent-700">
            bon état
          </span>
          . Four neuf, plaque induction...
          <span className="font-semibold text-navy">"</span>
        </p>
      </div>
    </div>
  )
}

function StructureVisual() {
  const rows = [
    { piece: 'Cuisine', element: 'Plan de travail', state: 'Bon état', tone: 'success' as const },
    { piece: 'Cuisine', element: 'Four', state: 'Neuf', tone: 'success' as const },
    { piece: 'Cuisine', element: 'Crédence', state: 'Vétusté moyenne', tone: 'warning' as const },
  ]

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent-500/10 to-accent-400/5 blur-2xl"
      />
      <div className="relative space-y-3 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-card">
        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Brouillon vocal
          </p>
          <p className="mt-1 text-sm leading-snug text-slate-700">
            "Plan de travail granit bon état four neuf crédence carreaux
            fissurés..."
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 py-1">
          <span aria-hidden className="h-px flex-1 bg-slate-200" />
          <motion.div
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-400 shadow-float"
          >
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </motion.div>
          <span aria-hidden className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="rounded-xl border border-accent-100 bg-accent-50/40 p-3">
          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-700">
            Structuré par Claude
          </p>
          <div className="space-y-1.5">
            {rows.map((row, i) => (
              <motion.div
                key={row.element}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.35 }}
                className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <span className="font-mono text-[10px] text-slate-400">
                  {row.piece}
                </span>
                <span className="font-medium text-navy text-sm flex-1 truncate">
                  {row.element}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    row.tone === 'success'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {row.state}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SignedVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-400/10 to-accent-400/10 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card">
        <div className="border-b border-slate-100 bg-slate-50/60 px-5 py-3">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              EDL_ENTRÉE · 14 pages
            </p>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
              <ShieldCheck className="h-3 w-3" />
              Signé
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="font-display text-[15px] font-bold tracking-tight text-navy">
            ÉTAT DES LIEUX D'ENTRÉE
          </p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            12 rue de Paris · 75011 · T3
          </p>

          <div className="mt-4 space-y-1.5">
            {[80, 65, 90, 72, 55].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-slate-100"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>

          <div className="mt-6 flex items-end justify-between border-t border-dashed border-slate-200 pt-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                Bailleur
              </p>
              <motion.svg
                viewBox="0 0 120 36"
                className="mt-1 h-8 w-24 text-navy"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
              >
                <motion.path
                  d="M4 24 C 14 6, 22 30, 32 18 S 50 6, 62 22 S 82 30, 96 14 S 112 24, 116 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>
            <div className="text-right">
              <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                Locataire
              </p>
              <motion.svg
                viewBox="0 0 120 36"
                className="mt-1 ml-auto h-8 w-24 text-navy"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.9, ease: 'easeInOut' }}
              >
                <motion.path
                  d="M6 20 C 20 8, 30 30, 46 18 S 72 28, 88 14 S 108 24, 114 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
