# DESIGN_CONTEXT — edali.fr

> Brief complet pour guider Magic MCP (21st.dev) et le skill ui-ux-pro-max dans la génération des sections de la landing.

---

## 🎯 Produit : EDL Pro

**Pitch** : EDL Pro est un SaaS français d'**États Des Lieux** (inspections immobilières) pour professionnels de l'immobilier (agences, gestionnaires, administrateurs de biens).

**Valeur clé** : Dictée vocale → transcription Whisper → structuration IA (Claude) → PDF professionnel signé. Passage de **3h à 30min** par EDL.

**Public cible** :
- Agents immobiliers
- Gestionnaires locatifs
- Administrateurs de biens
- Syndics

**Ton & voix** : Professionnel, rassurant, orienté gain de temps. Vocabulaire français du métier ("état des lieux", "bien", "locataire", "bailleur", "vétusté").

**App** : disponible sur `app.edali.fr` (PWA). La landing (`edali.fr`) dirige vers l'app pour l'inscription/connexion.

---

## 🎨 Design tokens (identiques à l'app)

### Couleurs

```
Navy (base sombre) :
  navy        #0F172A   ← texte principal, hero sombre
  navy-800    #0a1220
  navy-900    #060c17

Accent blue (primaire EDLAI) :
  accent-500  #1B4FD8   ← CTA, liens, highlights
  accent-600  #1740C9   ← hover states
  accent-400  #60A5FA   ← gradient end
  accent-50   #EFF6FF   ← badges background

Neutrals (slate) :
  text        #0F172A
  muted       #64748B
  border      #E2E8F0
  bg          #F8FAFC
  surface     #FFFFFF

États :
  success   #10B981
  warning   #F59E0B
  error     #EF4444
```

**Gradient signature** : `linear-gradient(135deg, #1B4FD8 0%, #60A5FA 100%)` (utiliser `.text-gradient` déjà défini en CSS).

### Typographie

- **Display / Headings** : **Syne** (500, 600, 700, 800) — moderne, éditoriale, donne du caractère
- **Body** : **DM Sans** (400, 500, 600, 700, 800) — lisible, pro
- **Mono / Technique** : **IBM Plex Mono** (pour chiffres, code, données)

Letter-spacing headings : `-0.02em`.

### Shadows

- `shadow-card` : subtle, pour les cards au repos
- `shadow-float` : hover CTA, elevation moyenne avec teinte bleue
- `shadow-modal` : élévation forte
- `shadow-glow` : effet lumineux autour d'un élément clé (nouveauté landing)

### Border radius

- Inputs / boutons : `rounded-xl` (12px) à `rounded-2xl` (16px)
- Cards : `rounded-2xl`
- Pills / badges : `rounded-full`

---

## 🎭 Mood visuel cible

**Base** : **Corporate premium** (type Stripe, Linear, Resend)

**Touches** : **Playful / touchy** (micro-animations fluides, un élément "wow" par section sans saturer)

### Inspirations
- **Stripe** (stripe.com) : grid subtil, typo soignée, gradients mesh
- **Linear** (linear.app) : hero dark minimal, typography-first
- **Resend** (resend.com) : feel premium, animations au scroll
- **Vercel** (vercel.com) : dark sections alternées, fonts crispy
- **Framer** (framer.com) : touches playful (orbes, grains, kinetic type)

### À FAIRE
✅ Gradients mesh subtils en background (bleus/navy)
✅ Micro-animations sur hover (scale, translate-y, opacity)
✅ Scroll-triggered animations (fade-in, slide-up) via Framer Motion
✅ Grid/dot background pour aérer les sections
✅ Glow discret sur CTA primaire
✅ Un "wow element" par section (orbe animée, mockup 3D, typo kinetic, sparkline...)
✅ Typo hero à plusieurs tailles (mixer Syne display avec weights variés)
✅ Alternance de fonds (white → slate-50 → navy dark) pour rythmer

### À ÉVITER
❌ Néon / couleurs fluo (on n'est pas crypto)
❌ Dark mode forcé partout (base blanche, sections navy ponctuelles)
❌ Gradients violet/rose façon AI générique (garder la palette navy/blue)
❌ Emojis en icônes (utiliser lucide-react)
❌ Animations lourdes ou GIFs (tout en CSS/Framer Motion)
❌ Copies marketing creuses ("blazingly fast", "revolutionary"...)
❌ Reproduire le minimalisme austère de l'app → la landing doit séduire, pas juste informer

---

## 🏗️ Stack technique

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS 4** (config CSS-first dans `src/index.css`)
- **Framer Motion** (animations)
- **lucide-react** (icônes)
- **clsx + tailwind-merge** (helper `cn()` dans `src/lib/utils.ts`)
- Alias `@/` → `src/`

Fonts chargées dans `index.html` via Google Fonts (DM Sans, Syne, IBM Plex Mono).

---

## 📐 Structure de la landing (à remplir itérativement)

```
App.tsx
 ├── Navbar               (components/Navbar.tsx)   ✅ placeholder OK
 ├── Hero                 (sections/Hero.tsx)       🔄 à régénérer
 ├── Features             (sections/Features.tsx)   🔄 à régénérer
 ├── HowItWorks           (sections/HowItWorks.tsx) 🔄 à régénérer
 ├── Pricing              (sections/Pricing.tsx)    🔄 à régénérer
 ├── CTA                  (sections/CTA.tsx)        🔄 à régénérer
 └── Footer               (sections/Footer.tsx)     ✅ placeholder OK
```

### Sections à générer (priorités)

**P0 — Hero**
- Headline puissant sur le gain de temps
- Sous-titre produit-first ("dictée vocale → PDF")
- 2 CTA (primaire "Essayer gratuitement", secondaire "Voir démo")
- Élément visuel fort : mockup de l'app en action, ou animation typo, ou orb gradient

**P0 — Features (3-6 cards)**
Points clés à couvrir :
- Dictée vocale intelligente (Whisper)
- Structuration automatique (Claude)
- PDF pro avec signature électronique
- Pièces pré-configurées par type de bien
- Photos annotées + compression
- Mode hors-ligne (PWA)

**P1 — How It Works (3 étapes)**
1. 🎙️ Dictez vos observations dans chaque pièce
2. 🤖 L'IA structure automatiquement (état, catégorie, vétusté)
3. 📄 Générez le PDF signé en 1 clic

**P1 — Pricing**
3 plans (ex: Free / Pro / Agency) avec features et CTA par plan.

**P1 — Social proof**
Témoignages clients + logos agences (à rajouter si dispo).

**P0 — CTA final**
Section navy/dark, message direct, CTA unique.

---

## ✅ Pre-delivery checklist (ui-ux-pro-max style)

- [ ] Aucun emoji en icône (utiliser lucide-react : `<Mic />`, `<FileText />`, `<Sparkles />`, etc.)
- [ ] `cursor-pointer` implicite sur tout clickable (Tailwind gère via `<a>`/`<button>`)
- [ ] Hover states avec transitions smooth (150-300ms)
- [ ] Contraste texte WCAG AA (4.5:1 minimum)
- [ ] Focus states visibles pour navigation clavier
- [ ] `prefers-reduced-motion` respecté (déjà dans `index.css`)
- [ ] Responsive : 375px, 768px, 1024px, 1440px
- [ ] Meta OG pour partage social
- [ ] Lighthouse > 95 sur mobile

---

## 🔗 Liens utiles

- App : https://app.edali.fr
- Repo app (pour référence code) : `~/Code/Projects/edl-pro`
- Docs tokens app : `~/Code/Projects/edl-pro/src/index.css`
