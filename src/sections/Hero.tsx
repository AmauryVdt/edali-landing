import { motion } from 'framer-motion'
import { ArrowRight, FileText, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-accent-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-64 -left-40 h-[440px] w-[440px] rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 lg:pt-36 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50/80 px-3 py-1.5 text-xs font-medium text-accent-700 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Propulsé par Claude & Whisper
            </motion.div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight text-navy sm:text-6xl lg:text-[5.25rem]">
              L'état des lieux,
              <br />
              <span className="font-medium italic text-slate-500">de </span>
              <span className="whitespace-nowrap">
                3h à <span className="text-gradient font-extrabold">30 min</span>.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Dictez vos observations pièce par pièce. L'IA structure l'état, la
              catégorie et la vétusté. Vous générez un{' '}
              <strong className="font-semibold text-navy">PDF pro signé</strong>{' '}
              en un clic.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.edali.fr"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-base font-semibold text-white shadow-float transition duration-200 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
              >
                Essayer gratuitement
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-navy transition duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
              >
                <Play className="h-4 w-4 fill-navy" />
                Voir la démo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-accent-400 to-accent-600" />
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-accent-500 to-navy" />
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-navy to-navy-900" />
                </div>
                <span>
                  <strong className="font-semibold text-navy">200+</strong>{' '}
                  agences nous font confiance
                </span>
              </div>
              <span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" />
              <span>
                Sans CB ·{' '}
                <strong className="font-semibold text-navy">2 EDL</strong> offerts
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroMockup() {
  const bars = [30, 60, 45, 80, 55, 70, 40, 90, 65, 75, 50, 85, 60, 45, 70, 55, 80, 65, 40, 75, 50, 85, 60, 70, 45, 80, 55, 65]

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent-500/20 to-accent-400/10 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-modal">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <div className="ml-3 flex-1 truncate font-mono text-xs text-slate-400">
            app.edali.fr / edl-034 — Salon
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Pièce en cours
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-navy">
                Salon · 24m²
              </h3>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-semibold text-red-600">
                Enregistrement
              </span>
            </div>
          </div>

          <div className="mt-5 flex h-16 items-center gap-1">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 origin-center rounded-full bg-gradient-to-t from-accent-500 to-accent-400"
                style={{ height: `${h}%` }}
                animate={{ scaleY: [1, 1.35, 0.75, 1.15, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: i * 0.04,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-2 font-mono text-[10px] font-semibold tracking-wider text-slate-400">
              TRANSCRIPTION LIVE
            </p>
            <p className="text-sm leading-relaxed text-navy">
              "Parquet chêne,{' '}
              <span className="rounded bg-accent-100 px-1 text-accent-700">
                bon état
              </span>
              , légères rayures en zone de passage. Peinture murale,{' '}
              <span className="rounded bg-accent-100 px-1 text-accent-700">
                vétusté moyenne
              </span>
              , traces près de l'interrupteur..."
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 160, damping: 18 }}
        className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-float sm:-left-10"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-400">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">EDL_Rue-Paris.pdf</p>
          <p className="text-xs text-slate-500">Généré en 2.3s · Signé</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 160, damping: 18 }}
        className="absolute -top-5 -right-3 flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-white shadow-float sm:-right-6"
      >
        <Sparkles className="h-4 w-4 text-accent-400" />
        <span className="text-sm font-medium">EDALI a structuré 12 pièces</span>
      </motion.div>
    </div>
  )
}
