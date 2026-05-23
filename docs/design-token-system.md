# Design Token System — Studio Kitchen

**Brand:** Jawad Jalal · Portfolio & Landing Page Specialist  
**Direction:** Warm paper studio · red poster bookends · mustard CTAs · Steak-inspired chunky UI  
**Last updated:** May 2026

**Visual brief:** [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md)  
**Copy:** [voice-and-copy-framework.md](./voice-and-copy-framework.md)  
**Showcase:** [design-token-showcase-v3.html](./design-token-showcase-v3.html)

---

## Positioning

**3-second emotion:** *Clear, confident, easy to work with.*

| Pillar | Token implication |
|--------|-------------------|
| **Warm** | Cream paper default; brown-muted secondary text |
| **Bold** | Fredoka display; 2–3px black borders; offset shadows |
| **Clear** | Red reserved for hero + reservation; proof cards stay white |
| **Conversion** | Mustard primary on red; plain header/footer CTAs on cream |

**Accent budget:**

| Tier | Share | Tokens | Allowed on |
|------|-------|--------|------------|
| **Paper** | ~70% | `paper.*`, `surface.card` | Section backgrounds, cards |
| **Ink** | ~25% | `ink.*`, borders | Type, strokes, shadows |
| **Heat** | ~5% | `heat.*`, `accent.mustard` | Hero, poster, primary CTA on red |

Semantic colors: forms and system feedback only.

---

## Color palette

### Paper

| Token | Hex | Usage |
|-------|-----|--------|
| `color.paper.cream` | `#FCEAD4` | Default page/section bg |
| `color.paper.cream.dark` | `#F5DFC4` | Alternating section (optional) |
| `color.surface.card` | `#FFFFFF` | Cards on cream |

### Ink

| Token | Hex | Usage |
|-------|-----|--------|
| `color.ink.black` | `#000000` | Headlines, borders, CTA labels |
| `color.ink.muted` | `#5C4A3A` | Secondary body on cream |
| `color.ink.subtle` | `#8B7355` | Placeholders, disabled |
| `color.ink.white` | `#FFFFFF` | Script on red, inverse text |

### Heat

| Token | Hex | Usage |
|-------|-----|--------|
| `color.heat.red` | `#E63946` | Hero bg, reservation poster, contact hero |
| `color.heat.red.dark` | `#C1121F` | Grid overlay on red |
| `color.accent.mustard` | `#F4B942` | Primary CTA fill on red |
| `color.accent.mustard.hover` | `#F7C948` | Mustard hover |
| `color.accent.mustard.active` | `#EAB308` | Mustard pressed |

### Semantic (forms only)

| Token | Hex |
|-------|-----|
| `color.success.500` | `#22C55E` |
| `color.error.500` | `#EF4444` |
| `color.warning.500` | `#F59E0B` |
| `color.info.500` | `#3B82F6` |

### Borders

| Token | Value | Usage |
|-------|-------|--------|
| `color.border.default` | `#000000` | Cards, buttons, inputs |
| `color.border.subtle` | `rgba(0,0,0,0.15)` | Dividers on cream |

---

## Typography

### Families

| Token | Stack | Role |
|-------|-------|------|
| `font.display` | `'Fredoka', system-ui, sans-serif` | Headlines, logo, buttons, poster caps |
| `font.script` | `'Caveat', cursive` | Poster script only |
| `font.body` | `'Inter', system-ui, sans-serif` | Body, forms |
| `font.mono` | `'JetBrains Mono', monospace` | Kickers, metadata |

### Scale

| Token | Size | Line height | Weight | Letter-spacing |
|-------|------|-------------|--------|--------------|
| `font.size.display` | clamp(2.75rem, 8vw, 5.5rem) | 1.05 | 700 | -0.02em |
| `font.size.h1` | clamp(2.25rem, 6vw, 4rem) | 1.08 | 700 | -0.02em |
| `font.size.h2` | clamp(1.75rem, 4vw, 3rem) | 1.1 | 700 | -0.015em |
| `font.size.h3` | 1.5rem | 1.2 | 600 | -0.01em |
| `font.size.script` | clamp(2rem, 5vw, 3.5rem) | 1.1 | 700 | 0 |
| `font.size.body-lg` | 1.25rem | 1.6 | 400 | 0 |
| `font.size.body` | 1rem | 1.6 | 400 | 0 |
| `font.size.small` | 0.875rem | 1.5 | 400 | 0 |
| `font.size.kicker` | 0.75rem | 1.4 | 500 | 0.08em |

### Script treatment

```css
.text-script {
  font-family: var(--font-script);
  font-weight: 700;
  color: var(--color-ink-white);
  -webkit-text-stroke: 1.5px var(--color-ink-black);
  paint-order: stroke fill;
}
```

---

## Spacing (4px base)

| Token | Value |
|-------|-------|
| `space.1` | 4px |
| `space.2` | 8px |
| `space.3` | 12px |
| `space.4` | 16px |
| `space.6` | 24px |
| `space.8` | 32px |
| `space.12` | 48px |
| `space.16` | 64px |
| `space.24` | 96px |
| `layout.max` | 1280px |
| `layout.gutter` | 24px (mobile) / 48px (desktop) |

---

## Radius

| Token | Value | Usage |
|-------|-------|--------|
| `radius.sm` | 8px | Inputs |
| `radius.md` | 12px | Small cards |
| `radius.lg` | 16px | Dish/ingredient cards |
| `radius.xl` | 20px | Poster container |
| `radius.pill` | 9999px | Buttons |

---

## Border & shadow

| Token | Value | Usage |
|-------|-------|--------|
| `border.width.default` | 2px | Cards on cream |
| `border.width.bold` | 3px | Buttons, poster |
| `shadow.sticker` | 4px 4px 0 #000000 | Primary/secondary pills |
| `shadow.sticker.hover` | 2px 2px 0 #000000 | Button hover |
| `shadow.poster` | 8px 8px 0 #000000 | Reservation band |

---

## Motion

| Token | Value |
|-------|-------|
| `motion.duration.fast` | 150ms |
| `motion.duration.base` | 300ms |
| `motion.duration.rotate` | 400ms |
| `motion.duration.hold` | 4000ms |
| `motion.easing.default` | cubic-bezier(0.4, 0, 0.2, 1) |

**Allowed properties:** `transform`, `opacity` only. Never `transition-all`.

**Reduced motion:** static headline; no suffix rotation; buttons skip translate.

---

## Section surface map

| Section / route | Background | Text |
|-----------------|------------|------|
| Homepage hero | `heat.red` | `ink.black` (headline), Inter subhead |
| Homepage body | `paper.cream` | `ink.black` / `ink.muted` |
| Homepage `#cta` | `heat.red` poster | script white, shout black |
| `/contact` hero | `heat.red` | same as homepage hero |
| Inner page heroes | `paper.cream` | `ink.black` |
| Footer | `paper.cream` | `ink.muted` |

---

## Component tokens (summary)

| Component | Key tokens |
|-----------|------------|
| Nav | Fredoka logo; ghost/white CTA by scroll surface |
| Hero | `heat.red` bg; `.btn-mustard` + `.btn-white` |
| Trust strip | `paper.cream`; Inter centered |
| Dish card | `surface.card`, `border.default`, `radius.lg` |
| Recipe step | icon + Fredoka title + Inter desc |
| Ingredient card | white card, mono kicker, grayscale logo |
| Poster CTA | tilt, `shadow.poster`, script + caps |
| Input | white bg, 2px black border, `radius.sm` |

Full mapping: [portfolio-component-token-spec.md](./portfolio-component-token-spec.md)

---

## CSS variables (`globals.css` target)

```css
:root {
  --color-paper-cream: #FCEAD4;
  --color-paper-cream-dark: #F5DFC4;
  --color-surface-card: #FFFFFF;
  --color-ink-black: #000000;
  --color-ink-muted: #5C4A3A;
  --color-ink-white: #FFFFFF;
  --color-heat-red: #E63946;
  --color-heat-red-dark: #C1121F;
  --color-accent-mustard: #F4B942;
  --color-accent-mustard-hover: #F7C948;
  --font-display: 'Fredoka', system-ui, sans-serif;
  --font-script: 'Caveat', cursive;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --shadow-sticker: 4px 4px 0 #000000;
  --radius-pill: 9999px;
  --layout-max: 1280px;
}
```

---

## Tailwind extension (`tailwind.config.ts` target)

```typescript
theme: {
  extend: {
    colors: {
      paper: { cream: '#FCEAD4', 'cream-dark': '#F5DFC4' },
      surface: { card: '#FFFFFF' },
      ink: { black: '#000000', muted: '#5C4A3A', white: '#FFFFFF' },
      heat: { red: '#E63946', 'red-dark': '#C1121F' },
      accent: { mustard: '#F4B942', 'mustard-hover': '#F7C948' },
    },
    fontFamily: {
      display: ['Fredoka', 'system-ui', 'sans-serif'],
      script: ['Caveat', 'cursive'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
    },
    boxShadow: {
      sticker: '4px 4px 0 #000000',
      'sticker-sm': '2px 2px 0 #000000',
      poster: '8px 8px 0 #000000',
    },
    borderWidth: {
      bold: '3px',
    },
  },
},
```

---

## Utility classes (showcase reference)

```css
.btn-mustard {
  background: var(--color-accent-mustard);
  color: var(--color-ink-black);
  border: 3px solid var(--color-ink-black);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-sticker);
  font-family: var(--font-display);
  font-weight: 600;
}
.btn-white {
  background: var(--color-surface-card);
  color: var(--color-ink-black);
  border: 3px solid var(--color-ink-black);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-sticker);
  font-family: var(--font-display);
  font-weight: 600;
}
.surface-red-grid {
  background-color: var(--color-heat-red);
  background-image:
    linear-gradient(var(--color-heat-red-dark) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-heat-red-dark) 1px, transparent 1px);
  background-size: 24px 24px;
}
.poster-tilt {
  transform: rotate(2deg);
}
```

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Studio Kitchen regen — replaces Mission Control Monochrome |
