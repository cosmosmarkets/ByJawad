# Design Token System — Cinematic Mission

**Brand:** Jawad Jalal · Portfolio & Landing Page Specialist  
**Direction:** Dark-first · Strict monochrome · Editorial halftone  
**Last updated:** May 2026  
**Companion:** [design-token-showcase.html](./design-token-showcase.html) — visual swatches, specimens, components

---

## POSITIONING

> Agency-level output with AI-assisted precision — every interaction, every scroll, every breakpoint considered. I only build portfolios and landing pages — the two highest-stakes pages on the internet.

**3-second emotion:** *"This person is operating at a different level."*

| Pillar | Token implication |
|--------|-------------------|
| **Confident** | Sharp black/white contrast; white primary CTAs on black; headline scale dominates |
| **Intentional** | Zero chromatic accent in UI; halftone and typography carry personality |
| **Energetic** | Kinetic motion + halftone texture at section edges; mono kickers, not colored text |
| **Cinematic** | Layered neutral surfaces; grain + halftone overlays; scroll-paced rhythm |

**Visual north star:** Editorial print meets mission-control UI — Swiss poster restraint, halftone dot texture, typographic authority. "Space" = contrast and texture, not nebula color.

**Accent budget:** **0% chromatic** in marketing UI. Semantic colors only for forms and system feedback.

**Decision filters (apply to every token choice):**
1. Does this feel like 1% craft?
2. Does it support conversion (CTA hierarchy readable in 3s)?
3. Would an art director stop scrolling?

---

## COLOR PALETTE

### 1. Ink (monochrome core)

| Token | Hex | Usage |
|-------|-----|-------|
| `color.ink.white` | `#FAFAFA` | Primary CTA fill, primary text (dark mode), active nav, links on dark |
| `color.ink.black` | `#000000` | Canvas, CTA label text, inverted mode background |

**Why no chromatic primary:** Memorable through contrast and texture, not another violet SaaS palette. White ink on black reads instantly as premium and editorial.

**CTA spec (dark-first):**
- Fill: `ink.white` `#FAFAFA`
- Label: `ink.black` `#000000`
- Hover: `#E5E5E5` fill, no glow
- Focus: `2px solid #FAFAFA` outline, `2px` offset

---

### 2. Neutral — True Gray (warm-neutral, no blue cast)

| Token | Hex | Usage |
|-------|-----|-------|
| `color.neutral.50` | `#FAFAFA` | Light mode page bg |
| `color.neutral.100` | `#F5F5F5` | Light mode elevated |
| `color.neutral.200` | `#E5E5E5` | Borders (light), CTA hover |
| `color.neutral.300` | `#D4D4D4` | Disabled (light) |
| `color.neutral.400` | `#A3A3A3` | Muted text, placeholders |
| `color.neutral.500` | `#737373` | Secondary text (dark) |
| `color.neutral.600` | `#525252` | Subtle borders |
| `color.neutral.700` | `#404040` | Input borders, dividers |
| `color.neutral.800` | `#262626` | Card borders, elevated edges |
| `color.neutral.900` | `#171717` | Deep panels |
| `color.neutral.950` | `#0A0A0A` | Near-black surfaces |

**Text hierarchy (dark-first default):**

| Role | Token | Hex |
|------|-------|-----|
| Primary | `color.text.primary` | `#FAFAFA` |
| Secondary | `color.text.secondary` | `#A3A3A3` |
| Muted | `color.text.muted` | `#737373` |
| Inverse | `color.text.inverse` | `#000000` |

**Surface hierarchy (dark-first):**

| Layer | Token | Hex |
|-------|-------|-----|
| Base | `color.surface.base` | `#000000` |
| Elevated | `color.surface.elevated` | `#0A0A0A` |
| Floating | `color.surface.floating` | `#141414` |
| Overlay | `color.surface.overlay` | `rgba(0, 0, 0, 0.72)` |

**Border tokens:**

| Token | Hex | Usage |
|-------|-----|-------|
| `color.border.subtle` | `#262626` | Cards, sections |
| `color.border.default` | `#404040` | Inputs, ghost buttons |

---

### 3. Semantic (forms & system only)

Never use for decoration, kickers, or marketing accents.

| Role | Base token | Hex (500) | Usage |
|------|------------|-----------|-------|
| Success | `color.success.500` | `#34D399` | Form success, positive validation |
| Warning | `color.warning.500` | `#FBBF24` | Alerts, budget notes |
| Error | `color.error.500` | `#F87171` | Validation, destructive actions |
| Info | `color.info.500` | `#60A5FA` | Tooltips, neutral info |

---

### 4. Dark Mode & Light Mode Mapping

**Default theme:** Dark-first (`data-theme="dark"`).

| Element | Dark (default) | Light (`data-theme="light"`) |
|---------|----------------|------------------------------|
| Page background | `surface.base` `#000000` | `neutral.50` `#FAFAFA` |
| Card background | `surface.elevated` `#0A0A0A` | `#FFFFFF` |
| Primary text | `text.primary` `#FAFAFA` | `ink.black` `#000000` |
| Primary CTA | White fill / black text | Black fill / white text |
| Secondary CTA | `border.default` outline | `border.default` outline |
| Border | `#262626` / `#404040` | `neutral.200` `#E5E5E5` |

---

## TYPOGRAPHY

### 1. Display / Heading — Space Grotesk

**Stack:** `'Space Grotesk', system-ui, sans-serif`  
**Why:** Geometric, sharp, editorial — carries personality without color.

**Usage:** Display, H1–H4, nav labels, CTA button text, section headings.

---

### 2. Body — Inter

**Stack:** `'Inter', system-ui, sans-serif`  
**Why:** Maximum readability at 16px for case studies, journal, service bullets.

**Usage:** Body, small, captions, form labels, FAQ answers.

---

### 3. Accent / Mono — JetBrains Mono

**Stack:** `'JetBrains Mono', ui-monospace, monospace`  
**Why:** Mission-log kickers, stats, category labels — technical credibility in monochrome.

**Usage:** Kickers (uppercase, `neutral.400` — not colored), metadata, timeline markers.

---

### 4. Type Scale (1.25 major third)

| Token | Size | Line-height | Letter-spacing | Weight | CSS variable |
|-------|------|-------------|----------------|--------|--------------|
| `font.size.display` | 96px | 1.0 | −0.025em | 800 | `--font-display` |
| `font.size.h1` | 72px | 1.05 | −0.02em | 700 | `--font-h1` |
| `font.size.h2` | 48px | 1.1 | −0.015em | 700 | `--font-h2` |
| `font.size.h3` | 36px | 1.15 | −0.01em | 600 | `--font-h3` |
| `font.size.h4` | 24px | 1.25 | 0 | 600 | `--font-h4` |
| `font.size.body-lg` | 20px | 1.5 | 0 | 400 | `--font-body-lg` |
| `font.size.body` | 16px | 1.5 | 0 | 400 | `--font-body` |
| `font.size.small` | 14px | 1.4 | 0 | 400 | `--font-small` |
| `font.size.caption` | 12px | 1.4 | 0.02em | 500 | `--font-caption` |

**Responsive clamp (recommended):**

```css
--font-display: clamp(3rem, 8vw, 6rem);
--font-h1: clamp(2.5rem, 6vw, 4.5rem);
--font-h2: clamp(2rem, 4vw, 3rem);
```

---

## SPACING SYSTEM

**Base unit:** `4px` (`--space-unit`)

| Token | Value | px |
|-------|-------|-----|
| `space.0` | 0 | 0 |
| `space.1` | 1× | 4 |
| `space.2` | 2× | 8 |
| `space.3` | 3× | 12 |
| `space.4` | 4× | 16 |
| `space.5` | 5× | 20 |
| `space.6` | 6× | 24 |
| `space.8` | 8× | 32 |
| `space.10` | 10× | 40 |
| `space.12` | 12× | 48 |
| `space.16` | 16× | 64 |
| `space.20` | 20× | 80 |
| `space.24` | 24× | 96 |

**Layout tokens:**

| Token | Value |
|-------|-------|
| `layout.section-y.desktop` | 120px |
| `layout.section-y.tablet` | 80px |
| `layout.section-y.mobile` | 48px |
| `layout.content-max` | 1280px |
| `layout.grid.columns` | 12 |
| `layout.grid.gutter` | 24px |

---

## SHADOW SYSTEM

Pure black alpha only — no chromatic tint.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow.1` | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)` | Cards |
| `shadow.2` | `0 4px 6px rgba(0,0,0,0.14), 0 2px 4px rgba(0,0,0,0.1)` | Dropdowns |
| `shadow.3` | `0 10px 15px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.12)` | Modals |
| `shadow.4` | `0 20px 25px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.14)` | Toasts |

---

## BORDER RADIUS

| Token | Value | Usage |
|-------|-------|-------|
| `radius.none` | 0px | Editorial images, full-bleed media |
| `radius.sm` | 4px | Inputs, small chips |
| `radius.md` | 8px | Buttons |
| `radius.lg` | 12px | Cards |
| `radius.xl` | 16px | Large cards, modals |
| `radius.2xl` | 24px | Feature sections |
| `radius.full` | 999px | Pills, badges |

---

## EFFECTS

| Token | Value | Usage |
|-------|-------|-------|
| `effect.grain` | SVG noise @ 3% opacity | Global filmic texture |
| `effect.halftone` | Dot grid SVG, 6px pitch, 10% opacity, `mix-blend-mode: overlay` | Section corners, card accents |
| `effect.halftone.hero` | Dot grid 8px pitch, 12% opacity, edge/corner only | Hero bands, large feature blocks |
| `effect.halftone.image` | Halftone on image overlay, `soft-light` | Project thumbnails |
| `effect.blur.nav` | `backdrop-filter: blur(12px)` | Sticky header |
| `effect.blur.overlay` | `backdrop-filter: blur(20px)` | Modals, mobile menu |
| `effect.gradient.subtle` | `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(250,250,250,0.02), transparent)` | Optional hero depth — max 2% white |
| `effect.image-overlay` | `linear-gradient(to top, rgba(0,0,0,0.65), transparent)` | Project thumbnails |

**Halftone SVG pattern (reference):**

```svg
<pattern id="halftone" width="6" height="6" patternUnits="userSpaceOnUse">
  <circle cx="3" cy="3" r="1.2" fill="white"/>
</pattern>
```

---

## TRANSITIONS

| Token | Value |
|-------|-------|
| `motion.easing.default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `motion.easing.enter` | `cubic-bezier(0, 0, 0.2, 1)` |
| `motion.easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` |
| `motion.easing.bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `motion.duration.75` | 75ms |
| `motion.duration.150` | 150ms |
| `motion.duration.200` | 200ms |
| `motion.duration.300` | 300ms |
| `motion.duration.500` | 500ms |
| `motion.duration.700` | 700ms |

**Rules:** Animate only `transform` and `opacity`. Never `transition-all`. Hover: 150ms default; enter animations: 300ms enter easing.

---

## CSS CUSTOM PROPERTIES (copy-paste)

```css
:root {
  /* Ink */
  --color-ink-white: #FAFAFA;
  --color-ink-black: #000000;
  /* Surfaces (dark-first) */
  --color-surface-base: #000000;
  --color-surface-elevated: #0A0A0A;
  --color-surface-floating: #141414;
  /* Text */
  --color-text-primary: #FAFAFA;
  --color-text-secondary: #A3A3A3;
  --color-text-muted: #737373;
  /* Borders */
  --color-border-subtle: #262626;
  --color-border-default: #404040;
  /* Typography */
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  /* Space */
  --space-unit: 4px;
  --layout-max: 1280px;
  /* Motion */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  /* Halftone */
  --halftone-opacity: 0.1;
  --halftone-opacity-hero: 0.12;
}
```

---

## ADOPTION — Page Section Mapping

| Page / section | Tokens to apply |
|----------------|-----------------|
| **Hero** (`#hero`) | `font.display`, mono kicker `text.secondary`, `surface.base`, `effect.halftone.hero` corner, white CTA (`ink.white` / `ink.black`) |
| **Trust strip** (`#trust`) | `font.body` primary line, `font.body` or `text.muted` supporting; `space.8` padding; copy-only v1 |
| **Selected work** (`#work`) | `radius.lg` cards, `shadow.1` → `shadow.2` hover, `effect.halftone.image` on thumbnails, `radius.none` images |
| **Process** (`#process`) | White timeline nodes, `font.mono` day labels, `border.subtle` connectors |
| **Tools** (`#tools`) | `surface.elevated` cards, `font.mono` tool names in `neutral.400`, grayscale logos, `radius.lg` |
| **Testimonials** (v2) | `surface.elevated`, `radius.xl`, `font.body` quotes — deferred v1 |
| **Final CTA** (`#cta`) | `surface.floating`, white primary + outline secondary |
| **Header** | `effect.blur.nav`, `border.subtle` bottom, white CTA |
| **Contact form** | `radius.sm` inputs, `border.default` borders, `error.500` validation only |
| **Journal cards** | `radius.lg`, `font.mono` category in `neutral.400`, link hover underline white |

---

## TAILWIND EXTENSION (future build)

```js
// tailwind.config extend snippet
colors: {
  ink: { white: '#FAFAFA', black: '#000000' },
  neutral: {
    50: '#FAFAFA', 100: '#F5F5F5', 200: '#E5E5E5', 300: '#D4D4D4',
    400: '#A3A3A3', 500: '#737373', 600: '#525252', 700: '#404040',
    800: '#262626', 900: '#171717', 950: '#0A0A0A',
  },
  surface: { base: '#000000', elevated: '#0A0A0A', floating: '#141414' },
},
fontFamily: {
  display: ['Space Grotesk', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
},
```

---

## RELATED DOCUMENTS

- [Personal Brand Strategy North Star](../About%20Me/Personal_Brand_Strategy_North_Star.md)
- [CTA & Messaging Matrix](./cta-messaging-matrix.md)
- [Page Content Briefs](./page-briefs.md)
- [IA Sitemap](./ia-sitemap.md)
