# Wave 1 — Homepage Layout Plan

**Route:** `/`  
**Artifact:** [homepage-wireframe-v2.html](./homepage-wireframe-v2.html)  
**Status:** Wave 1 complete (May 2026)  
**Last updated:** May 2026

**Prerequisites:** Wave 0 complete — [_chrome.css](./_chrome.css) · [_chrome.js](./_chrome.js) · [_chrome-reference.html](./_chrome-reference.html)

**Related:** [shared-chrome-spec.md](./shared-chrome-spec.md) · [homepage-wireframe-v1.md](../wireframes-v1/homepage-wireframe-v1.md) · [v2-exit-checklist.md](./v2-exit-checklist.md) · [v2-annotation-spec.md](./v2-annotation-spec.md) · [studio-kitchen-visual-direction.md](../studio-kitchen-visual-direction.md)

---

## Purpose

Wave 1 finishes the homepage v2 wireframe by:

1. **Layout personality** — editorial / poster composition (Excalidraw direction), not generic equal grids.
2. **Behaviors already scaffolded** — verify and polish per [v2-exit-checklist.md](./v2-exit-checklist.md) § Homepage.
3. **Copy lock** — use [homepage-wireframe-v1.md](../wireframes-v1/homepage-wireframe-v1.md); layout-only changes unless explicitly approved.

**Do not:** reorder sections · add testimonials or services snapshot · change global chrome in `_chrome.css` unless nav zigzag requires a small extension.

---

## Locked scroll order

```
nav → hero → trust → why-order → work → process → tools → cta → footer → spec-footer
```

**Analytics funnel:**

```
#hero → #trust → #why-order → #work → #process → #tools → #cta
```

---

## Where to implement

| Layer | File | Scope |
|-------|------|--------|
| Shared chrome | `_chrome.css` / `_chrome.js` | Nav zigzag edge only (if adopted); otherwise unchanged |
| Homepage layout | `homepage-wireframe-v2.html` `<style>` block | All section layout + hero type scale |
| Hero rotation | `homepage-wireframe-v2.html` inline `<script>` | Suffix crossfade only (keep local) |

---

## Excalidraw reference (hero + nav)

Your sketch direction — translate into CSS, not new copy.

| Idea | Keep | Refine on frame |
|------|------|-----------------|
| Nav zigzag / pinking-shear bottom | Yes — one signature chrome detail | Note behavior at scroll: straight 2px rule vs cream “apron” |
| Center nav + lockup + Chat to the chef | Yes | Add mobile frame: drawer CTA first |
| Huge display type | Yes | **Centered** poster stack — prefix / **mouth-watering** (script) / rotating suffix |
| Audience ribbon | Yes | Locked text inside band (see § Hero copy) |
| CTA word stress (ORDER / COOKING) | Yes | Same button labels; emphasize one word in Fredoka |
| Kitchen art | **No** | Hero is type-only (Excalidraw + Steak reference); no illustration column |
| Red grid full bleed | Yes | `#E63946` + 24px grid (`.red-grid` in `_chrome.css`) |

**Excalidraw frames to maintain:** Desktop 1200 · Mobile 375 · optional Nav scrolled (cream, black logo).

---

## Global layout rules (all sections)

- **Content max:** 1280px (`.wrap`) · gutter 24px mobile / 48px desktop.
- **Section padding:** 48px mobile / 96px desktop (`.section` in `_chrome.css`).
- **Surfaces:** Red bookends (`#hero`, `#cta`) · cream body · `paper-cream-dark` for subtle banding (`#tools` already uses it).
- **Motion:** Only `transform`, `opacity`, `background-color`, `box-shadow` — never `transition-all`.
- **Accent budget:** ~70% paper · ~25% ink · ~5% heat; mustard primary **on red only**.
- **One tilt:** reservation poster at `#cta` only — do not tilt work/why tiles.

---

## Section 0 — Navigation `nav`

**Current (Wave 0):** Transparent over red → cream blur at 64px · logo swap · mobile drawer. Standard straight bottom edge.

**Target layout (Wave 1 — optional creative pass):**

| Element | Layout intent |
|---------|----------------|
| Desktop | Lockup left · links centered · **Chat to the chef** white pill right |
| Mobile | Lockup + compact CTA + hamburger; drawer: CTA first, then links |
| Signature detail | Zigzag / pinking-shear bottom border where nav meets red hero |
| Scrolled | Height 56px · cream `rgba(252,234,212,0.92)` + blur · 2px black bottom · black lockup |

**Implementation tasks:**

- [x] If zigzag adopted: SVG or CSS clip-path on `.site-nav::after` (hero surface only); document scrolled-state transition in spec footer
- [x] Confirm link order: Work · Services · About · Journal · Contact
- [x] No **Place your order** in nav
- [x] Verify 375px: CTA visible without opening menu

**Copy (locked):** See [shared-chrome-spec.md](./shared-chrome-spec.md) § Global navigation.

**Exit:** [v2-exit-checklist.md](./v2-exit-checklist.md) — nav scroll, logo swap, mobile drawer.

---

## Section 1 — Hero `#hero`

**Current:** Centered poster hero · mega type · ink `#why-order` + `#work` · no illustration.

**Target layout (Excalidraw + Steak-inspired Studio Kitchen):**

### Copy stack (top → bottom)

| # | Element | Copy |
|---|---------|------|
| 1 | Kicker (mono on red) | Portfolio & landing page chef |
| 2 | Headline prefix | The kitchen for |
| 3 | Display emphasis | mouth-watering |
| 4 | Rotating suffix | portfolios · landing pages (~4s crossfade) |
| 5 | Subheadline | I cook portfolio websites and landing pages that taste incredible and convert for creatives, founders, and brands. |
| 6 | Audience ribbon | Creative freelancers · SaaS founders · Brands & agencies |
| 7 | CTAs | **Place your order** (mustard) · **See what's cooking** (white) |

**Reduced motion:** Static H1 — *The kitchen for mouth-watering portfolios and landing pages* (full line); no rotation.

### Layout intent

```
Desktop + mobile (centered single column)
┌─────────────────────────────────────────────────────────────┐
│ [nav — transparent, optional zigzag bottom]                  │
│                    kicker (mono, centered)                   │
│              ┌── tilted poster block (~−6°) ──┐              │
│              │  prefix: The kitchen for      │              │
│              │  script: mouth-watering       │              │
│              │  mega: portfolios | landing…  │              │
│              └───────────────────────────────┘              │
│                 subhead (max ~36–40rem, centered)            │
│              ┌ audience ribbon (centered) ─┐                │
│              └─────────────────────────────┘                │
│        [Place your order]  [See what's cooking]             │
│              white sawtooth → cream #trust                   │
└─────────────────────────────────────────────────────────────┘
red-grid · min-height 100svh · type scale clamp(3rem, 12vw, 7rem)
```

### Typography notes

- **Prefix:** Fredoka 600–700, smaller than mega suffix line.
- **Emphasis:** Caveat *mouth-watering* (mustard + black stroke); Fredoka mega on rotating suffix.
- **Subhead:** Inter, comfortable line-length; black on red.
- **Ribbon:** Distinct band (border or subtle fill) so audience line is scannable, not a second paragraph clone.
- **CTAs:** Optional `<span class="hero-cta-em">` on “order” / “cooking” for weight bump; labels unchanged.

### Implementation tasks

- [x] Restructure `.hero` markup: `.hero-copy` column with `.hero-headline` blocks + `.hero-audience-ribbon`
- [x] CSS type scale: `.hero-headline__prefix`, `.hero-headline__emphasis`, `.hero-rotate-word` (min-width for crossfade)
- [x] Style audience ribbon (flex row, wrap, middots, 2px border or cream-tint pill)
- [x] CTA row: mustard first, white second; min 44px tap targets mobile
- [x] Keep `#rotate` + existing rotation script; update reduced-motion to set full static headline on container if markup changes
- [x] No illustration column — centered `.hero-poster` only
- [x] `padding-top`: `calc(var(--nav-height) + …)` accounts for fixed nav + zigzag
- [x] Hero bottom sawtooth into `#trust` (white teeth on red)

**Exit:** Hero suffix rotation · reduced motion · mustard/white CTAs · conversion clarity in 3s.

---

## Section 2 — Trust `#trust`

**Current:** Dual poster blocks (Steak display-scale proof strip).

**Target layout (locked — Excalidraw + Steak audit):**

| Intent | Notes |
|--------|-------|
| Two sticker cards | White `surface.card` · 3px black border · `shadow.sticker` |
| Diagonal offset | Block A top-left · Block B bottom-right inside `.wrap` (desktop) |
| Mobile | Stack A → B → footnote |
| Type stack per block | Caveat script · Fredoka caps display · Inter support |
| Scale | ~50–60% of hero mega type — must not compete with `#hero` |

**Copy (locked):**

| Block | Script | Display | Support |
|-------|--------|---------|---------|
| A — speed | I cook | FAST FOOD | Dishes delivered in days not months. |
| B — quality & value | Agency-level | DISHES | at takeaway prices. |

**Footnote:** Specialist in portfolios and landing pages only.

**Implementation tasks:**

- [x] Dual-block markup + CSS grid offset
- [x] No CTA in section
- [x] Cream surface; no logos
- [x] No tilt (tilt reserved for `#cta` only)
- [x] Footnote below grid on all viewports

**Exit:** Readable proof strip; Steak display impact; does not compete with `#hero`.

---

## Section 3 — Why order `#why-order`

**Current:** Equal 3-column tile grid.

**Target layout (creative, still proof-teaser weight):**

| Intent | Notes |
|--------|-------|
| Asymmetric tiles | One featured tile (wider or taller) + two smaller — avoids SaaS pricing-row feel |
| Whole-tile links | No buttons inside cards; hover lift + sticker shadow |
| Lighter than `#work` | Smaller thumbs / icons placeholder per tile |

**Copy (locked):** See [homepage-wireframe-v1.md](../wireframes-v1/homepage-wireframe-v1.md) § Section 3 — three tiles + bridge **See the full menu** → `/services#why`.

**Implementation tasks:**

- [x] Grid: e.g. `1.2fr 1fr 1fr` or featured first child `grid-column: span 2` on desktop
- [x] `.why-tile` hover/focus unchanged (behavior done)
- [x] Kicker **Why order?** + H2 **Different orders, different dishes.**

**Exit:** Three whole-tile links + bridge.

---

## Section 4 — Work `#work`

**Current:** 1.2 / 0.8 grid — live card + coming soon aside.

**Target layout (portfolio moment):**

| Element | Layout intent |
|---------|----------------|
| Live card | Screenshot-dominant thumb (16:10); hover lift; **View project** text link |
| Coming soon | Secondary panel — label feel, not equal competitor card |
| Section | Kicker **From the pass** · H2 **My dishes** |

**Copy (locked):** Option B — By Jawad live card + coming soon copy · **Explore work** → `/work`.

**Implementation tasks:**

- [x] Enlarge `.card__thumb` visual weight on live card only
- [x] `.card--interactive:hover` (done) — no secondary image swap (defer hi-fi)
- [x] Optional: offset shadow or slight scale on live card desktop only

**Exit:** Option B layout · hover on live card · bridge to `/work`.

---

## Section 5 — Process `#process`

**Current:** Horizontal steps + connector desktop; vertical + left border mobile.

**Target layout:**

| Desktop | 5 steps in a row · 2px connector between step names |
| Mobile | Vertical stack · left border connector |
| Bridges | **See full process** · **View Services** |

**Copy (locked):** Five step names in v1 spec.

**Implementation tasks:**

- [x] Verify connector at 900px breakpoint (already scaffolded)
- [x] Optional: step “course cards” (white mini-cards on cream) for more personality — keep step names verbatim
- [x] `.process-bridges` flex wrap with gap

**Exit:** H desktop / V mobile + connector.

---

## Section 6 — Tools `#tools`

**Current:** Uniform 4×2 / 2×4 icon grid on `paper-cream-dark`.

**Target layout:**

| Intent | Notes |
|--------|-------|
| Pantry metaphor | Optional grouped clusters (build / design / motion) instead of 8 identical boxes |
| Scaffold minimum | Keep 4×2 / 2×4 if time-boxed — exit checklist requires grid behavior |

**Copy (locked):** Kicker **The pantry** · H2 **My ingredients** · subhead + 8 tools table in v1 MD.

**Implementation tasks:**

- [x] Keep `.tools-section` background
- [x] If clustering: 3 flex groups with headings (mono labels) — Build · Design · Motion
- [x] Tool cards: icon + name + role (mono)

**Exit:** 4×2 desktop · 2×4 mobile.

---

## Section 7 — Final CTA `#cta`

**Current:** Centered tilted `.poster` on red-grid (styles in `_chrome.css`).

**Target layout:**

| Element | Intent |
|---------|--------|
| Band | Full-width `.red-grid` |
| Poster | Single 2° tilt · Caveat script · Fredoka **PLACE YOUR ORDER** caps |
| CTAs | Mustard **Place your order** · OR · white **Chat to the chef** — both `/order` |

**Copy (locked):** See v1 § Section 7.

**Implementation tasks:**

- [x] Do not add second tilt elsewhere
- [x] Center `.poster-wrap`; max-width ~640px on poster
- [x] Script stroke per `.poster .script` in `_chrome.css`

**Exit:** Tilt · script · dual CTAs.

---

## Section 8 — Footer

**Current:** Wave 0 chrome — 3-column grid, newsletter, legal.

**Target layout:** No structural change for Wave 1 unless hero/nav zigzag needs footer spacing tweak.

**Implementation tasks:**

- [ ] Verify black lockup, tagline, CTAs, Explore, **Get the recipe**, © line
- [ ] Already in `_chrome.css` — no duplicate footer CSS in homepage file

---

## Spec footer

Update after layout pass:

- [x] List new layout decisions (zigzag nav, hero type scale, ribbon, asymmetric why-order, etc.)
- [x] Conversion heatmap unchanged unless zones shift
- [x] Deferrals: card image hover, GSAP, testimonials, production backends

---

## Suggested implementation order

| Phase | Scope | Est. focus |
|-------|--------|------------|
| **1** | Hero markup + type scale + ribbon + CTAs | Highest impact |
| **2** | Nav zigzag + scroll edge behavior | Chrome touch |
| **3** | Trust + why-order layout | Cream editorial |
| **4** | Work card emphasis | Proof section |
| **5** | Process / tools polish | Behaviors mostly done |
| **6** | Poster + spec footer update | Quick verify |
| **7** | Exit checklist @ 375 / 900 / 1200 | Sign-off |

---

## Review checklist

```bash
npx --yes serve "docs/wireframes-v2" -p 3000
```

Open: `http://localhost:3000/homepage-wireframe-v2.html`

| Viewport | Check |
|----------|--------|
| **375px** | Hero stack · drawer · ribbon wrap · CTAs tap size |
| **900px** | Process connector flip · grid breakpoints |
| **1200px** | Hero centered mega type · why-order asymmetry · work layout |

**Keyboard:** Tab through nav, tiles, CTAs · Escape closes drawer.

**Reduced motion:** OS setting on → static hero headline, no jarring motion.

---

## Wave 1 complete when

- [x] [v2-exit-checklist.md](./v2-exit-checklist.md) § Homepage — all items checked
- [x] Layout matches approved Excalidraw (hero + any section deltas noted in spec footer)
- [x] [README.md](./README.md) route status: `done`
- [x] No open interaction questions for mid-fi handoff on `/`

---

## Out of scope (Wave 1)

- Hero illustration (explicitly out of scope — type-only hero)
- Work card secondary image hover
- Spline / GSAP scroll scenes
- Testimonials
- Services snapshot on homepage
- Next.js `components/sections/hero.tsx` (mid-fi / Stage 1)
- Other routes (`/order`, etc.) — Wave 2+

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Initial Wave 1 homepage layout plan (hero Excalidraw direction + remaining sections) |
