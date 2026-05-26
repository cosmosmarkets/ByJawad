# Shared Chrome Spec — Wireframe v2

**Purpose:** Foundation layer every v2 HTML frame shares — tokens, nav, footer, buttons, logos.  
**Reference implementation:** [_chrome-reference.html](./_chrome-reference.html) · [_chrome.css](./_chrome.css) · [_chrome.js](./_chrome.js) · [homepage-wireframe-v2.html](./homepage-wireframe-v2.html)  
**Last updated:** May 2026

**Related:** [design-token-system.md](../design-token-system.md) · [portfolio-component-token-spec.md](../portfolio-component-token-spec.md) · [brand_assets/logo/README.md](../../brand_assets/logo/README.md)

---

## Canonical tokens (HTML wireframes)

Use hex from `design-token-system.md`. Stitch `.stitch/DESIGN.md` Material aliases are for generation only.

```css
:root {
  --paper-cream: #FCEAD4;
  --paper-cream-dark: #F5DFC4;
  --surface-card: #FFFFFF;
  --ink-black: #000000;
  --ink-muted: #5C4A3A;
  --ink-subtle: #8B7355;
  --ink-white: #FFFFFF;
  --heat-red: #E63946;
  --heat-red-dark: #C1121F;
  --accent-mustard: #F4B942;
  --accent-mustard-hover: #F7C948;
  --accent-mustard-active: #EAB308;
  --shadow-sticker: 4px 4px 0 #000000;
  --shadow-sticker-hover: 2px 2px 0 #000000;
  --shadow-poster: 8px 8px 0 #000000;
  --radius-sm: 8px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-pill: 9999px;
  --layout-max: 1280px;
  --nav-height: 64px;
  --nav-height-scrolled: 56px;
}
```

---

## Typography roles

| Role | Family | Usage |
|------|--------|-------|
| Display | Fredoka 600–700 | Logo fallback, H1–H3, buttons, poster caps |
| Script | Caveat 700 | Poster script only (*Ready to order?*) |
| Body | Inter 400–500 | Paragraphs, forms, FAQ answers |
| Kicker | JetBrains Mono 500 | Section labels; `#5C4A3A` on cream; black on red |

**Google Fonts load:**

```
Fredoka:wght@600;700 · Caveat:wght@700 · Inter:wght@400;500;600 · JetBrains+Mono:wght@500
```

---

## Layout

| Token | Value |
|-------|-------|
| Content max | 1280px (`.wrap`) |
| Gutter | 24px mobile / 48px desktop |
| Section padding | 48px mobile / 96px desktop |
| Red grid | 24px lines, `#C1121F` at ~35% opacity on `#E63946` |

Utility: `.wrap { max-width: var(--layout-max); margin: 0 auto; padding-inline: var(--gutter); }`

---

## Buttons (pill + sticker)

Base class `.btn` — Fredoka 600, 3px black border, pill radius.

| Class | Fill | Where |
|-------|------|-------|
| `.btn-mustard` | `#F4B942` | Primary on **red surfaces only** (hero, poster) |
| `.btn-white` | `#FFFFFF` | Secondary on red; header CTA on cream |

**Interaction (v2 required):**

| State | Transform | Shadow |
|-------|-----------|--------|
| Default | none | 4px 4px 0 #000 |
| Hover | translate(1px, 1px) | 2px 2px 0 #000 |
| Active | translate(4px, 4px) | none |
| Focus-visible | — | 2px black outline, 3px offset |

Animate **only** `transform`, `opacity`, `background-color`, `box-shadow`. Never `transition-all`.

---

## Global navigation

Fixed top bar; z-index 100.

| State | Background | Height | Border |
|-------|------------|--------|--------|
| Over red hero | Transparent | 64px | none |
| Scrolled | `rgba(252,234,212,0.92)` + blur 12px | 56px | 2px bottom black |

**Links (desktop):** Work · Services · About · Journal · Contact — Fredoka 600, black.

**Header CTA:** **Chat to the chef** → `/order` — white pill (`.btn-white`), compact padding.

**Mobile:** Logo + compact Chat to the chef + hamburger. Drawer slides from right; **Chat to the chef first**, then links. `aria-expanded`, Escape closes, body scroll locked when open.

---

## Logo surface mapping

From [brand_assets/logo/README.md](../../brand_assets/logo/README.md):

| Surface | Asset | When |
|---------|-------|------|
| Red hero nav (top) | `jawad-design-lockup-nav.svg` | Not scrolled over `#hero` |
| Cream nav (scrolled) | `jawad-design-lockup-black.svg` | After scroll threshold (~64px) |
| Footer / cream sections | `jawad-design-lockup-black.svg` | Always |

Path from `docs/wireframes-v2/`: `../../brand_assets/logo/...`

Swap via JS on scroll or CSS if nav always cream on non-red pages.

---

## Footer

| Block | Content |
|-------|---------|
| Brand | Black lockup + tagline |
| CTAs | Chat to the chef → `/order` · See what's cooking → `/work` |
| Explore column | Work · Services · About · Journal · Contact |
| Newsletter | Label **Get the recipe** · email input placeholder |
| Legal | © Jawad Jalal · London, UK |

Surface: cream, 2px black top border.

---

## Text links (cream sections)

`.text-link` — Fredoka 600, underline, black. Hover: opacity 0.85. Focus-visible ring.

---

## Red surface utilities

`.red-grid` — hero and poster bands.

`.poster` — tilt 2deg, 3px border, `shadow-poster`, Caveat script + Fredoka caps.

---

## Spec footer (every v2 page)

Dark `#000` band at document end with:

1. **v2 behaviors implemented** (checklist)
2. **Conversion heatmap** (if funnel page)
3. **Deferred to hi-fi**
4. **Deferred to production**
5. **Source doc links**

Pattern started in [homepage-wireframe-v2.html](./homepage-wireframe-v2.html) (`.spec-footer`).

---

## Future extraction (optional v2.1)

When 2+ route files exist, extract shared CSS to:

- `docs/wireframes-v2/_chrome.css`, or
- `docs/wireframes-v2/_chrome-reference.html`

Not a v2 exit blocker — inline duplication acceptable until wave 2 completes.

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Wave 0: extracted `_chrome.css`, `_chrome.js`, `_chrome-reference.html`; homepage refactored |
| May 2026 | Initial shared chrome spec from homepage v2 scaffold |
