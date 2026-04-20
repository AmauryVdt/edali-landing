import { motion } from 'framer-motion'
import {
  Camera,
  FileSignature,
  LayoutGrid,
  MicVocal,
  Sparkles,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Fonctionnalités
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Tout ce qu'il faut pour{' '}
            <span className="text-gradient">boucler un EDL</span> sans friction.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            De la dictée à la signature, EDALI automatise chaque étape
            chronophage. Vous gardez le contrôle, l'IA fait le reste.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto]">
          <FeatureCard
            index={0}
            icon={MicVocal}
            title="Dictée vocale intelligente"
            description="Parlez naturellement pendant que vous visitez. Whisper transcrit en temps réel, même dans le vocabulaire métier (vétusté, tapée, chambranle)."
            className="md:row-span-2"
            accent
          >
            <VoiceVisual />
          </FeatureCard>

          <FeatureCard
            index={1}
            icon={Sparkles}
            title="Structuration automatique"
            description="Claude détecte la pièce, l'élément, son état et sa catégorie. Zéro ressaisie."
          >
            <StructuringVisual />
          </FeatureCard>

          <FeatureCard
            index={2}
            icon={FileSignature}
            title="PDF signé en 1 clic"
            description="Document conforme prêt à envoyer au locataire, signature électronique incluse."
          >
            <PdfVisual />
          </FeatureCard>

          <FeatureCard
            index={3}
            icon={LayoutGrid}
            title="Pièces pré-configurées"
            description="Templates adaptés : studio, T2, maison, local pro. Ajoutez vos propres modèles."
          />

          <FeatureCard
            index={4}
            icon={Camera}
            title="Photos annotées"
            description="Ajoutez cadres, flèches et commentaires. Compression auto sans perte visible."
          />

          <FeatureCard
            index={5}
            icon={WifiOff}
            title="Mode hors-ligne (PWA)"
            description="Travaillez dans n'importe quel logement, même sans réseau. Tout se synchronise dès que vous revenez en ligne — aucune donnée perdue."
            className="md:col-span-3"
            wide
          >
            <OfflineVisual />
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

type FeatureCardProps = {
  index: number
  icon: LucideIcon
  title: string
  description: string
  className?: string
  accent?: boolean
  wide?: boolean
  children?: React.ReactNode
}

function FeatureCard({
  index,
  icon: Icon,
  title,
  description,
  className = '',
  accent = false,
  wide = false,
  children,
}: FeatureCardProps) {
  const base = accent
    ? 'bg-navy text-white border-navy-800'
    : 'bg-white text-navy border-slate-200/70'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-float sm:p-7 ${base} ${className}`}
    >
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
          accent
            ? 'bg-white/10 text-accent-400 ring-1 ring-white/10'
            : 'bg-accent-50 text-accent-600 ring-1 ring-accent-100'
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>

      <div className={wide ? 'mt-5 max-w-xl' : 'mt-5'}>
        <h3
          className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
            accent ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-[0.95rem] leading-relaxed ${
            accent ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      </div>

      {children && <div className="mt-6 flex-1">{children}</div>}
    </motion.div>
  )
}

function VoiceVisual() {
  const bars = [35, 65, 45, 80, 55, 70, 40, 90, 60, 75, 50, 85, 60, 45, 70, 55, 80, 65]

  return (
    <div className="relative flex h-full flex-col justify-end">
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-10 h-40 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-300">
            Salon · 00:42
          </span>
        </div>
        <div className="mt-4 flex h-12 items-center gap-1">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 origin-center rounded-full bg-gradient-to-t from-accent-500 to-accent-300"
              style={{ height: `${h}%` }}
              animate={{ scaleY: [1, 1.3, 0.8, 1.15, 1] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.05,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <p className="mt-4 text-[13px] leading-snug text-slate-300">
          "Mur peinture blanche,{' '}
          <span className="rounded bg-accent-500/30 px-1 text-white">bon état</span>
          , petite éraflure près de la prise."
        </p>
      </div>
    </div>
  )
}

function StructuringVisual() {
  return (
    <div className="flex flex-col gap-2">
      {[
        { label: 'Parquet', state: 'Bon état', tone: 'success' },
        { label: 'Peinture', state: 'Vétusté moyenne', tone: 'warning' },
        { label: 'Robinetterie', state: 'Neuf', tone: 'success' },
      ].map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
          className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2"
        >
          <span className="font-mono text-[11px] text-slate-500">{row.label}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
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
  )
}

function PdfVisual() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-400">
        <FileSignature className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-navy">
          EDL_Entree_12-rue-Paris.pdf
        </p>
        <p className="text-[11px] text-slate-500">14 pages · Signé le 18/04</p>
      </div>
      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
        Signé
      </span>
    </div>
  )
}

function OfflineVisual() {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-500">
      <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        <span className="font-medium">Hors-ligne · 3 EDL en attente</span>
      </div>
      <span aria-hidden className="text-slate-300">→</span>
      <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="font-medium">Synchronisé</span>
      </div>
    </div>
  )
}
