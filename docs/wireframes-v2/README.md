# Wireframes v2 — Interaction Pass (Stage 0b)

**Brand:** Studio Kitchen  
**Gate:** Stage 0b complete · Stage 0c (v3) → [wireframes-v3/README.md](../wireframes-v3/README.md) — **approved** · Mid-fi may start.

Low-fi **scrollable HTML** with Studio Kitchen tokens, demonstrated behaviors, and spec footers. Supersedes grayscale-only v1 for implementation handoff.

**Pipeline:** [pipeline-overview.md](./pipeline-overview.md) · **Roadmap:** [design-build-roadmap.md](../design-build-roadmap.md) · **v1 hub:** [wireframes-v1/index.html](../wireframes-v1/index.html)

---

## Documentation index

1. [pipeline-overview.md](./pipeline-overview.md) — v1 → v2 → v3 narrative, waves, format shift
2. [steak-v2-side-by-side-audit.md](./steak-v2-side-by-side-audit.md) — Steak.studio ↔ homepage v2 gap analysis
3. [v2-annotation-spec.md](./v2-annotation-spec.md) — Complete behavior catalog
4. [shared-chrome-spec.md](./shared-chrome-spec.md) — Tokens, nav, footer, buttons, logos
5. [wave-1-homepage-layout-plan.md](./wave-1-homepage-layout-plan.md) — Wave 1 layout pass (hero + all sections)
6. [page-matrix.md](./page-matrix.md) — Route-by-route scope and status
7. [v2-exit-checklist.md](./v2-exit-checklist.md) — Gate to v3
8. [v3-handoff-spec.md](./v3-handoff-spec.md) — Stage 0c promotion and mid-fi package

---

## Wave 0 — shared chrome (complete)

Reusable assets for every v2 route:

| Asset | Purpose |
|-------|---------|
| [_chrome.css](./_chrome.css) | Tokens, nav, footer, buttons, utilities |
| [_chrome.js](./_chrome.js) | Nav scroll, logo swap, mobile drawer (`data-nav-surface` on `<html>`) |
| [_chrome-reference.html](./_chrome-reference.html) | Review all chrome behaviors before building routes |

**New route checklist:** link `_chrome.css` + `_chrome.js` · copy nav/drawer/footer blocks from reference · set `data-nav-surface="hero"` or `"cream"` · add page-specific `<style>` only.

---

## Route status

| Route | v2 HTML | Status |
|-------|---------|--------|
| `/` | [homepage-wireframe-v2.html](./homepage-wireframe-v2.html) | **approved** (v3) |
| `/` (steak.studio clone) | [homepage-wireframe-v2-steak.html](./homepage-wireframe-v2-steak.html) | **Framer reference** |
| `/order` | [order-wireframe-v2.html](./order-wireframe-v2.html) | **approved** (v3) |
| `/contact` | [contact-wireframe-v2.html](./contact-wireframe-v2.html) | **approved** (v3) |
| `/services` | [services-wireframe-v2.html](./services-wireframe-v2.html) | **approved** (v3) |
| `/work` | [work-wireframe-v2.html](./work-wireframe-v2.html) | **approved** (v3) |
| `/work/[slug]` | [case-study-wireframe-v2.html](./case-study-wireframe-v2.html) | **approved** (v3) |
| `/404` | [404-wireframe-v2.html](./404-wireframe-v2.html) | **approved** (v3) |
| `/about` | [about-wireframe-v2.html](./about-wireframe-v2.html) | **approved** (v3) |
| `/journal` | [journal-index-wireframe-v2.html](./journal-index-wireframe-v2.html) | **approved** (v3) |
| `/journal/[slug]` | [journal-article-wireframe-v2.html](./journal-article-wireframe-v2.html) | **approved** (v3) |

Status values: `not started` · `scaffold` · `in review` · `done` · `approved` (v3)

---

## File tree (target)

```
docs/wireframes-v2/
  README.md                      ← this hub
  pipeline-overview.md
  v2-annotation-spec.md
  shared-chrome-spec.md
  page-matrix.md
  v2-exit-checklist.md
  v3-handoff-spec.md
  _chrome.css                    ← Wave 0 shared styles
  _chrome.js                     ← Wave 0 shared behaviors
  _chrome-reference.html         ← Wave 0 review page
  homepage-wireframe-v2.html     ← Studio Kitchen IA (Phase 2)
  homepage-wireframe-v2-steak.html ← exact steak.studio Framer clone
  order-wireframe-v2.html
  contact-wireframe-v2.html
  services-wireframe-v2.html
  work-wireframe-v2.html
  case-study-wireframe-v2.html
  404-wireframe-v2.html
  about-wireframe-v2.html
  journal-index-wireframe-v2.html
  journal-article-wireframe-v2.html
```

**v3 hub:** [../wireframes-v3/README.md](../wireframes-v3/README.md)

---

## Review instructions

1. Serve locally:

   ```bash
   npx --yes serve "." -p 3000
   ```

   Funnel routes: `http://localhost:3000/docs/wireframes-v2/{route}-wireframe-v2.html`  
   Steak reference: `http://localhost:3000/public/wave1/steak/index.html`

2. Open [_chrome-reference.html](./_chrome-reference.html) first to verify shared chrome, then the route HTML (e.g. `http://localhost:3000/homepage-wireframe-v2.html`).

3. Test viewports: **375px** · **900px** · **1200px**.

4. Verify: nav scroll, mobile drawer, CTAs, section order, spec footer.

5. Run checklist: [v2-exit-checklist.md](./v2-exit-checklist.md).

**Format note:** v1 used side-by-side static 1200/375 frames. v2 uses one scrollable page per route so interactions can be exercised.

---

## Upstream sources

- Copy: [wireframes-v1/](../wireframes-v1/) MD specs (canonical)
- Tokens: [design-token-system.md](../design-token-system.md)
- Components: [portfolio-component-token-spec.md](../portfolio-component-token-spec.md)
- Visual: [design-token-showcase-v3.html](../design-token-showcase-v3.html) · [studio-kitchen-presentation.html](../studio-kitchen-presentation.html) (slide 07)
- Stitch: [.stitch/DESIGN.md](../../.stitch/DESIGN.md)
- Logos: [brand_assets/logo/](../../brand_assets/logo/)

---

## Homepage locked order

```
nav → hero → trust → why-order → work → process → tools → cta → footer
```

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Wave 0 shared chrome (`_chrome.css`, `_chrome.js`, reference page); homepage uses shared chrome |
| May 2026 | v2 documentation hub; homepage scaffold; pipeline docs 0b→0c |
