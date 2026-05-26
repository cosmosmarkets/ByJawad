# v2 Annotation Spec — Behavior Catalog

**Purpose:** What every wireframe v2 HTML frame must implement or document.  
**Stage:** 0b · Wireframe v2  
**Last updated:** May 2026

**Related:** [shared-chrome-spec.md](./shared-chrome-spec.md) · [page-matrix.md](./page-matrix.md) · [v2-exit-checklist.md](./v2-exit-checklist.md)

---

## How to use this doc

For each category below:

1. **Behavior** — what the user sees / what mid-fi must build
2. **Token / component ref** — where values live
3. **HTML note** — how v2 wireframe demonstrates it
4. **v3 label** — what gets explicit token callouts in Stage 0c (not required in v2)

Global rules apply to **all routes** unless a page subsection says otherwise.

---

## Global rules

| Rule | Source |
|------|--------|
| Locked copy verbatim — no rewrites | v1 `.md` specs · [voice-and-copy-framework.md](../voice-and-copy-framework.md) |
| Animate only `transform` and `opacity` (plus `background-color` / `box-shadow` on buttons) | [design-token-system.md](../design-token-system.md) |
| Never `transition-all` | design-token-system |
| Mustard primary **on red only** | [studio-kitchen-visual-direction.md](../studio-kitchen-visual-direction.md) |
| Header CTA: **Chat to the chef** → `/order` | [homepage-wireframe-v1.md](../wireframes-v1/homepage-wireframe-v1.md) |
| **Place your order** on red hero + poster only | v1 CTA model |
| No Mission Control / spaceman assets | AGENTS.md · visual direction |

---

## 1. Nav scroll

| | |
|---|---|
| **Behavior** | Fixed nav starts transparent/minimal over red hero. After ~64px scroll: cream background, 12px backdrop blur, 2px black bottom border, height shrinks 64px → 56px. |
| **Token ref** | [shared-chrome-spec.md](./shared-chrome-spec.md) · [.stitch/DESIGN.md](../../.stitch/DESIGN.md) Navigation |
| **HTML note** | Toggle class `.is-scrolled` on `#site-nav` via `scroll` listener. On cream-only pages (e.g. `/order`), nav may default to scrolled state. |
| **v3 label** | `nav.container` height tokens, blur px |

**Test:** Scroll homepage — nav visibly changes; CTA remains Chat to the chef.

---

## 2. Logo swap

| | |
|---|---|
| **Behavior** | Over red hero: `jawad-design-lockup-nav.svg`. When scrolled (cream nav): `jawad-design-lockup-black.svg`. |
| **Token ref** | [brand_assets/logo/README.md](../../brand_assets/logo/README.md) |
| **HTML note** | Swap `#nav-logo` `src` in same scroll handler as nav state. |
| **v3 label** | Surface mapping table in spec footer |

---

## 3. Mobile nav (drawer)

| | |
|---|---|
| **Behavior** | Hamburger opens full-height panel from right. **Chat to the chef** is first interactive element, then nav links. Backdrop dimmed. Escape closes. `aria-expanded` on menu button. |
| **Token ref** | shared-chrome · portfolio-component-token-spec §1 |
| **HTML note** | `#mobile-drawer` + `.is-open` class; lock `body` overflow when open. |
| **v3 label** | `nav.mobilePanel` background token |

**Test:** 375px width — open drawer, tab to CTA, press Escape.

---

## 4. Hero layers (homepage + contact red heroes)

| Layer | Content |
|-------|---------|
| L0 | `.red-grid` full-width background |
| L1 | Centered `.hero-poster` — tilted mega type block (optional ~−6° desktop) |
| L2 | Light scrim only if contrast fails on script stroke |
| L3 | Stack: kicker → headline (prefix + script accent + rotate) → subhead → audience ribbon → CTAs |

| | |
|---|---|
| **Behavior** | Do **not** use spaceman/orbit stack or hero illustration column. |
| **Token ref** | [studio-kitchen-hero-prototype.html](../studio-kitchen-hero-prototype.html) · [steak-studio-reference.md](./steak-studio-reference.md) |
| **HTML note** | Single centered column; `clamp(3rem, 12vw, 7rem)` on mega lines; white sawtooth into `#trust`. |
| **v3 label** | Layer IDs in annotation overlay |

**Deferred hi-fi:** Hero video only (no hero illustration in v1).

---

## 5. Hero suffix rotation

| | |
|---|---|
| **Behavior** | Crossfade **portfolios** ↔ **landing pages** only; ~4000ms hold; 400ms opacity fade. `aria-live="polite"` on suffix span. |
| **Reduced motion** | Static: *The kitchen for mouth-watering portfolios and landing pages* |
| **Copy ref** | [homepage-wireframe-v1.md](../wireframes-v1/homepage-wireframe-v1.md) § Hero |
| **HTML note** | `#rotate` + `matchMedia('(prefers-reduced-motion: reduce)')` bail-out. |
| **v3 label** | `motion.duration.rotate`, `motion.duration.hold` |

---

## 5.5 Trust strip (`#trust`)

| Layer | Content |
|-------|---------|
| Surface | `paper.cream` |
| Block A | Script *I cook* · display **FAST FOOD** · support: days-not-months |
| Block B | Script *Agency-level* · display **DISHES** · support: at takeaway prices. |
| Footnote | Specialist in portfolios and landing pages only. |

| | |
|---|---|
| **Layout** | Two white sticker cards; diagonal offset desktop · stack mobile. No tilt. No CTA. No logos. |
| **Type scale** | Display ~`clamp(1.75rem, 5vw, 3.25rem)` — sub-hero (~50–60% of hero mega). |
| **Steak ref** | Founders' impact strip → dual display-scale proof blocks |
| **Copy ref** | [homepage-content-hierarchy.md](../homepage-content-hierarchy.md) § Trust |

---

## 6. CTAs (buttons)

| Variant | Fill | Surfaces |
|---------|------|----------|
| Mustard primary | `#F4B942` | Red hero, red poster |
| White secondary | `#FFFFFF` | Red hero, red poster, header on cream |
| White header | `#FFFFFF` | Chat to the chef globally |

| | |
|---|---|
| **Behavior** | Sticker shadow press on hover/active (see shared-chrome). Focus-visible ring on all. |
| **Token ref** | portfolio-component-token-spec §3 · shared-chrome |
| **HTML note** | `.btn-mustard` / `.btn-white` |
| **v3 label** | `shadow.sticker`, `border.width.bold` |

**CTA matrix:** [cta-messaging-matrix.md](../cta-messaging-matrix.md) — wireframe session overrides header to `/order`.

---

## 7. `#why-order` tiles (homepage)

| | |
|---|---|
| **Behavior** | Three tiles as single `<a href="...">` each — not buttons inside cards. Whole tile clickable. Hover: translateY(-2px) + sticker shadow. Focus-visible ring. |
| **Links** | `/services#why-portfolio`, `#why-landing`, `#why-brands` · bridge → `/services#why` |
| **Copy ref** | homepage-wireframe-v1.md § Section 3 |
| **HTML note** | `.why-tile` as block link; `cursor: pointer` |
| **v3 label** | `radius.lg`, hover transform token |

---

## 8. Work cards (Option B)

| Field | Live card | Coming soon |
|-------|-----------|-------------|
| Thumb | Screenshot placeholder | — |
| Meta | Portfolio | — |
| Title | By Jawad | Next out of the kitchen |
| Description | Studio Kitchen voice… | Case studies added… |
| CTA | View project → `/work/by-jawad` | — |
| Section CTA | Explore work → `/work` | |

| | |
|---|---|
| **Behavior** | Hover lift on live card only. **Do not** implement secondary image swap in v2 — annotate in spec footer for when 2+ live projects exist. |
| **Token ref** | portfolio-component-token-spec §5 · [launch-strategy-v1.md](../launch-strategy-v1.md) |
| **HTML note** | `.card--interactive:hover` |
| **v3 label** | Dish card field schema table |

---

## 9. Process timeline

| | |
|---|---|
| **Behavior** | 5 steps with locked names. Desktop: horizontal row + 2px connector between steps. Mobile: vertical stack + left border connector. |
| **Bridges** | See full process → `/services#process` · View Services → `/services` |
| **Copy ref** | homepage-wireframe-v1.md § Process |
| **HTML note** | `.process-steps` flex direction breakpoint 900px |
| **v3 label** | Connector stroke token |

Steps: Prep the brief · First taste · Plate the design · In the oven · Serve & hand off

---

## 10. Tools grid

| | |
|---|---|
| **Behavior** | 8 tools with name + one-line role. Desktop: 4 columns × 2 rows. Mobile: 2 columns × 4 rows. |
| **Copy ref** | homepage-wireframe-v1.md § Tools |
| **HTML note** | `.tools-grid` `repeat(4,1fr)` / `repeat(2,1fr)` |
| **v3 label** | Grid gutter token |

Tools: Cursor, Claude, Figma, Next.js, Tailwind CSS, Spline, GSAP, Supabase

---

## 11. Reservation poster (`#cta`)

| | |
|---|---|
| **Behavior** | Red grid band; inner panel tilt 2°; Caveat *Ready to order?*; Fredoka **PLACE YOUR ORDER**; mustard + white CTAs with OR — both → `/order`. |
| **Token ref** | portfolio-component-token-spec §8 |
| **HTML note** | `.poster` + `.poster-section.red-grid` |
| **v3 label** | `shadow.poster`, script stroke |

---

## 12. FAQ accordion (services, contact)

| | |
|---|---|
| **Behavior** | Expand/collapse per item. Mobile: one open at a time (recommended). Keyboard: Enter/Space toggles; focus visible on trigger. |
| **Copy ref** | [services-wireframe-v1.md](../wireframes-v1/services-wireframe-v1.md) § FAQ |
| **HTML note** | `<button aria-expanded>` + panel; optional `<details>` if semantics clear |
| **v3 label** | Accordion spacing |

**Services v2 extra:** On hash load from homepage tiles (`#why-portfolio`, etc.), scroll target into view + optional brief highlight.

---

## 13. Forms (`/order`, `/contact`)

| | |
|---|---|
| **Behavior** | Show field types, labels, required `*`, placeholder text. Document **error** and **success** states with semantic colors only (no live POST). |
| **Semantic colors** | Error `#EF4444` · Success `#22C55E` |
| **Copy ref** | [order-wireframe-v1.md](../wireframes-v1/order-wireframe-v1.md) · contact v1 HTML |
| **HTML note** | Separate mini-sections or toggle classes: `.field--error`, `.field--success`; submit disabled state optional |
| **v3 label** | Input `radius.sm`, focus ring offset |

**Order page sections:** `#hero` · `#form` · `#socials` · `#book` (Calendly placeholder) · footer

**Deferred production:** Supabase, Resend, live Calendly URL

---

## 14. Conversion annotations (spec footer)

Per-page exit-risk from [homepage-content-hierarchy.md](../homepage-content-hierarchy.md) (homepage) or page role (other routes).

**Homepage heatmap:**

| Zone | Risk | Cause |
|------|------|-------|
| `#hero` | High | Unclear offer / audience |
| `#work` | Medium-high | Weak thumb / outcomes |
| `#process` | Medium | Timeline credibility |
| `#trust`, `#tools`, `#cta` | Low | — |

Include in `.spec-footer` on each v2 HTML file.

---

## 15. Motion (global)

| | |
|---|---|
| **Allowed** | `transform`, `opacity`; button `background-color`, `box-shadow` |
| **Forbidden** | `transition-all`, layout-thrashing properties |
| **Reduced motion** | Disable suffix rotation, button translate, drawer slide optional (instant open OK) |
| **v3 label** | `motion.easing.default` |

---

## Spec footer pattern (required)

Every v2 HTML file ends with `<aside class="spec-footer">` containing:

```markdown
## v2 behaviors (implemented)
- [ ] Nav scroll …
- [ ] …

## Conversion heatmap (if applicable)
- High: …

## Deferred to hi-fi
- Card image hover · Spline · GSAP

## Deferred to production
- Calendly live URL · Supabase submit · testimonials

## Sources
- v1 spec path · DESIGN.md · presentation
```

Copy checklist items from [v2-exit-checklist.md](./v2-exit-checklist.md) for that route.

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Initial behavior catalog; Studio Kitchen; kitchen hero layers |
