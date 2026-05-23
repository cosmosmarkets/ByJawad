# Portfolio Component Token Specification — Studio Kitchen

**Brand:** Jawad Jalal · Portfolio & Landing Page Specialist  
**Direction:** Warm paper studio · red poster bookends · mustard CTAs  
**Last updated:** May 2026

**Sources:** [design-token-system.md](./design-token-system.md) · [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md) · [design-token-showcase-v3.html](./design-token-showcase-v3.html) · [voice-and-copy-framework.md](./voice-and-copy-framework.md) · [ia-sitemap.md](./ia-sitemap.md) · [page-briefs.md](./page-briefs.md)

---

## Purpose

Maps portfolio UI components to the **Studio Kitchen** token architecture. Use dot notation (`color.paper.cream`). Showcase class names in [design-token-showcase-v3.html](./design-token-showcase-v3.html) are the visual reference for build.

---

## Semantic alias reference

| Brief term | Canonical token | Notes |
|------------|-----------------|-------|
| Primary button (on red) | `color.accent.mustard` + `color.ink.black` label | `.btn-mustard` |
| Secondary button (on red) | `color.surface.card` + `color.ink.black` | `.btn-white` |
| Primary button (on cream) | `color.ink.black` fill + white label OR mustard per context | Header/footer: black or white pill |
| Hero background | `color.heat.red` + grid texture | Homepage + contact only |
| Page background | `color.paper.cream` | Default body |
| Card surface | `color.surface.card` | Dishes, ingredients, services rows |
| Kicker | `font.mono` · `color.ink.muted` | Never colored on cream |

---

## Global conventions

| Concern | Token / rule |
|---------|----------------|
| Theme default | Light — `color.paper.cream` body |
| Content width | `layout.max` (1280px) |
| Horizontal padding | `layout.gutter` — 24px mobile / 48px desktop |
| Section vertical rhythm | `space.16`–`space.24` between major sections |
| Borders | `border.width.default` (2px) cards · `border.width.bold` (3px) buttons/poster |
| Motion | `motion.duration.fast` hover · `motion.duration.rotate` suffix · animate **transform + opacity only** |
| Reduced motion | Static headline `portfolios and landing pages`; no button translate |
| Focus | `2px solid color.ink.black` · `2px` offset |

**Showcase class map (v3):** `.red-grid` · `.btn-mustard` · `.btn-white` · `.card` · `.poster` · `.kicker` · `.display` · `.script` · `.mono`

---

## 1. Navigation (`GlobalNav`)

**Links:** Work · Services · About · Journal · Contact · **Primary CTA:** Book a Call → `/contact#book`

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `nav.container` | background | `color.paper.cream` | Solid on cream pages |
| `nav.container` | border-bottom | `color.border.default` | 2px black |
| `nav.container` | height | `space.16` | 64px target |
| `nav.container` | padding-x | `layout.gutter` | |
| `nav.logo` | font-family | `font.display` | Fredoka 700 |
| `nav.logo` | font-size | 1.25rem | Interim wordmark "Jawad" |
| `nav.logo` | color | `color.ink.black` | |
| `nav.links` | font-family | `font.display` | Fredoka 600 |
| `nav.links` | color | `color.ink.black` | Hover: underline or `translateY(-1px)` |
| `nav.cta` | variant | `.btn-white` on cream | White pill, black border, sticker shadow |
| `nav.mobilePanel` | background | `color.paper.cream` | Full-screen stack |

**On red hero (homepage top):** Nav sits over red — cream or white bar optional; logo + links stay black for contrast.

---

## 2. Hero (`HomeHero`, `ContactHero`)

**Routes:** `/` · `/contact` only — red surface.

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `hero.section` | background | `color.heat.red` + grid | Class `.red-grid` |
| `hero.section` | min-height | 90vh | Full viewport feel |
| `hero.kicker` | font | `font.mono` · `font.size.kicker` | Black on red |
| `hero.headline` | font | `font.display` · `font.size.display` | Fredoka 700 black |
| `hero.rotateWord` | transition | `motion.duration.rotate` | Opacity fade; 4s hold |
| `hero.subhead` | font | `font.body` · `font.size.body-lg` | Inter black |
| `hero.audience` | font | `font.size.small` | Inter, slightly muted |
| `hero.primaryCta` | class | `.btn-mustard` | Place your order |
| `hero.secondaryCta` | class | `.btn-white` | See what's cooking |
| `hero.illustration` | border | `border.width.bold` | White card placeholder until art ships |
| `hero.layout` | grid | 1.1fr / 0.9fr @ ≥900px | Copy left · illustration right |

**Prototype:** [studio-kitchen-hero-prototype.html](./studio-kitchen-hero-prototype.html)

---

## 3. Buttons

### 3.1 Mustard primary (`.btn-mustard`)

| Property | Token |
|----------|-------|
| background | `color.accent.mustard` |
| hover | `color.accent.mustard.hover` |
| active | `color.accent.mustard.active` + translate(4px,4px) |
| color | `color.ink.black` |
| border | 3px `color.ink.black` |
| radius | `radius.pill` |
| shadow | `shadow.sticker` → `shadow.sticker.hover` on hover |
| font | `font.display` 600 |

### 3.2 White secondary (`.btn-white`)

| Property | Token |
|----------|-------|
| background | `color.surface.card` |
| border / shadow | Same as mustard |
| font | `font.display` 600 |

### 3.3 Text link (cream sections)

| Property | Token |
|----------|-------|
| color | `color.ink.black` |
| hover | underline + `opacity` 0.85 |
| font | `font.display` 600 |

---

## 4. Trust strip (`TrustStrip`)

| Part | Token |
|------|-------|
| background | `color.paper.cream` |
| primary line | `font.display` · `font.size.h3` · `color.ink.black` |
| supporting | `font.body` · `color.ink.muted` |
| alignment | centered |
| padding-y | `space.12` |

Copy-only — no logos in v1.

---

## 5. Dish cards (`#work` — My dishes)

| Part | Property | Token |
|------|----------|-------|
| `dishes.section` | background | `color.paper.cream` |
| `dishes.kicker` | text | From the pass |
| `dishes.heading` | font | `font.display` · `font.size.h2` — **My dishes** |
| `dishes.card` | background | `color.surface.card` |
| `dishes.card` | border | 2px `color.border.default` |
| `dishes.card` | radius | `radius.lg` |
| `dishes.card` | shadow | none (flat card) |
| `dishes.thumb` | border | 2px black · `radius.sm` |
| `dishes.title` | font | `font.display` 600 |
| `dishes.meta` | font | `font.body` · `color.ink.muted` |
| `dishes.comingSoon` | opacity | 0.85 |

Hover: optional `translateY(-2px)` + `shadow.sticker` — transform only.

---

## 6. Process timeline (`#process`)

| Part | Token |
|------|-------|
| background | `color.paper.cream` |
| kicker | The recipe |
| heading | Five courses. Five days. |
| step label | `font.display` 600 |
| connector | 2px `color.ink.black` dashed or solid line |
| CTA | text link → `/services#process` |

---

## 7. Ingredient cards (`#tools` — My ingredients)

| Part | Property | Token |
|------|----------|-------|
| `ingredients.section` | background | `color.paper.cream.dark` (optional band) |
| `ingredients.kicker` | The pantry |
| `ingredients.heading` | **My ingredients** |
| `ingredients.card` | same as dish card |
| `ingredients.icon` | logo or emoji placeholder |
| `ingredients.role` | `font.mono` · small · `color.ink.muted` |

Grid: `repeat(auto-fit, minmax(240px, 1fr))`.

---

## 8. Reservation poster (`#cta`)

| Part | Property | Token |
|------|----------|-------|
| `poster.section` | background | `color.heat.red` + `.red-grid` |
| `poster.panel` | transform | rotate(2deg) |
| `poster.panel` | border | 3px black |
| `poster.panel` | shadow | `shadow.poster` |
| `poster.script` | font | `font.script` · white + black stroke |
| `poster.shout` | font | `font.display` caps — PLACE YOUR ORDER |
| `poster.subline` | font | `font.body` · white |
| `poster.primaryCta` | `.btn-mustard` | Book a Call |
| `poster.secondaryCta` | `.btn-white` | Start an Inquiry |
| `poster.separator` | OR · `font.display` 600 |

---

## 9. Footer (`GlobalFooter`)

| Part | Token |
|------|-------|
| background | `color.paper.cream` |
| column headings | `font.display` 600 |
| links | `font.body` · `color.ink.muted` → black hover |
| legal | `font.size.small` · `color.ink.subtle` |
| CT_URL top | `color.border.subtle` |

---

## 10. Forms (contact)

| Part | Token |
|------|-------|
| input bg | `color.surface.card` |
| input border | 2px `color.border.default` |
| input focus | 2px black ring |
| label | `font.body` 500 |
| error | `color.error.500` |
| success | `color.success.500` |
| submit | `.btn-mustard` on cream OR black pill per page context |

Contact hero uses red band above cream form body.

---

## 11. Inner page heroes (cream)

**Routes:** `/work`, `/services`, `/about`, `/journal`, `/contact` (below red band), `/404`

| Part | Token |
|------|-------|
| background | `color.paper.cream` |
| headline | `font.display` · `color.ink.black` |
| kicker | `font.mono` · `color.ink.muted` |
| CTA | `.btn-mustard` or black primary per matrix |

No red grid on inner heroes except contact top band.

---

## 12. Effects

| Effect | Implementation |
|--------|----------------|
| Red grid | `linear-gradient` 24px grid · `heat.red.dark` at 35% opacity |
| Sticker shadow | Hard offset — no blur |
| Poster tilt | Single use on `#cta` only — not on dish cards |
| Grain | Optional 3% noise on cream — defer to hi-fi |

**Retired:** halftone dots · spaceman L0 · spectral cyan · flare gold (Mission Control)

---

## Build checklist

- [ ] Wire Fredoka, Caveat, Inter, JetBrains Mono in `app/layout.tsx`
- [ ] Replace `globals.css` / `tailwind.config.ts` with tokens from [design-token-system.md](./design-token-system.md)
- [ ] Hero suffix rotation with reduced-motion fallback
- [ ] Section IDs: `#work`, `#process`, `#tools`, `#cta` unchanged for IA
- [ ] Kitchen illustration slot in hero (placeholder until `brand_assets/` art)

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Full rewrite for Studio Kitchen — supersedes Mission Control component spec |
