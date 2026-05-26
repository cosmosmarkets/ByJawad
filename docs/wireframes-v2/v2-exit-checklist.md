# v2 Exit Checklist — Gate to Wireframe v3

**Purpose:** Copy-paste review gate before promoting any route to v3.  
**Stage:** 0b exit → 0c entry  
**Last updated:** May 2026

**Related:** [page-matrix.md](./page-matrix.md) · [v3-handoff-spec.md](./v3-handoff-spec.md)

---

## Global gates (every funnel route)

Apply to each v2 HTML file before marking route `done`.

- [ ] Scrollable responsive HTML exists at `docs/wireframes-v2/{route}-wireframe-v2.html`
- [ ] Section order matches v1 spec / [page-matrix.md](./page-matrix.md) — no reorder
- [ ] Locked copy verbatim (link to v1 MD — no rewrites)
- [ ] Studio Kitchen tokens applied (cream/red/mustard — no grayscale blocks, no Mission Control)
- [ ] [shared-chrome-spec.md](./shared-chrome-spec.md): nav, footer, buttons, typography
- [ ] Header CTA: **Chat to the chef** → `/order`
- [ ] **Place your order** only on red surfaces (homepage hero + poster; 404 recovery if specified)
- [ ] All links and buttons have `:hover` and `:focus-visible` states
- [ ] Mobile drawer: Chat to the chef first; Escape closes; `aria-expanded` correct
- [ ] No `transition-all`
- [ ] `.spec-footer` present: behaviors, deferrals, sources
- [ ] Mid-fi developer has **no open interaction questions** for this route

**Review viewports:** 375px · 900px · 1200px

**Review method:**

```bash
npx --yes serve "docs/wireframes-v2" -p 3000
```

---

## Funnel slice gate (all routes complete)

Before declaring **Stage 0b complete**:

- [x] `/` homepage — done
- [x] `/order` — done
- [x] `/contact` — done
- [x] `/services` — done
- [x] `/work` — done
- [x] `/work/[slug]` template — done
- [x] `/404` — done
- [x] Design + content + conversion review complete (2026-05-25)
- [x] [README.md](./README.md) status table updated
- [x] `/about` · `/journal` · `/journal/[slug]` v2 complete (all-10 scope)

---

## Per-route gates

### Homepage `/`

- [x] Nav transparent → cream blur + height shrink on scroll
- [x] Logo swap nav → black lockup when scrolled
- [x] Hero suffix rotation; reduced-motion static line
- [x] Hero CTAs: Place your order (mustard) · See what's cooking (white)
- [x] `#why-order`: three whole-tile links + bridge to `/services#why`
- [x] Work Option B: 1 card + coming soon; hover on live card
- [x] Process: horizontal desktop + vertical mobile + connector
- [x] Tools: 4×2 desktop / 2×4 mobile
- [x] Poster: tilt, script, dual CTAs (Book a Call · Start an Inquiry per CTA matrix)
- [x] Conversion heatmap in spec footer (surface rhythm documented)

### `/order`

- [x] Cream surface throughout
- [x] Form fields match order-wireframe-v1.md schema
- [x] Required fields marked
- [x] Error state example (semantic red)
- [x] Success state example (semantic green)
- [x] `#socials` block present
- [x] `#book` Calendly placeholder (Call the chef)
- [x] No live POST / Calendly URL required

### `/contact`

- [x] Red hero with contact copy
- [x] Inquiry form + field states
- [x] FAQ accordion functional
- [x] Calendly block present

### `/services`

- [x] Cream hero
- [x] All `#why-*` anchors present
- [x] Hash arrival highlight documented or implemented
- [x] Portfolio + landing + add-ons sections
- [x] FAQ accordion (7 items from v1)
- [x] Chat to the chef CTAs → `/order` only (no mustard primary)

### `/work`

- [x] Option B layout styled
- [x] Coming soon panel
- [x] Card hover
- [x] Filter/tags deferred note if single project

### `/work/[slug]`

- [x] All 8 blocks present
- [x] Gallery placeholders
- [x] Bottom CTA band

### `/404`

- [x] Recovery headline + CTAs styled
- [x] Place your order on red or as specified in v1

### `/about`

- [x] Sections: hero · story · stack · process · photo · personal · cta
- [x] Work With Me → `/contact` · See what's cooking → `/work`
- [x] Chat to the chef → `/order` in nav only

### `/journal`

- [x] Sections: hero · featured · grid · newsletter · cta
- [x] Seed article cards + categories noted
- [x] Newsletter deferred to production

### `/journal/[slug]`

- [x] Blocks: hero · body · mid-cta · end-cta · related
- [x] Mid CTA → `/services` · end → Book a Call + View Services

---

## Sign-off

| Role | Name | Date | Notes |
|------|------|------|-------|
| Design | Jawad Jalal | 2026-05-25 | Studio Kitchen tokens + behaviors |
| Content | Jawad Jalal | 2026-05-25 | Locked copy verified |
| Conversion | Jawad Jalal | 2026-05-25 | CTA model + heatmap |

**Stage 0b complete.** v3 promoted → [wireframes-v3/README.md](../wireframes-v3/README.md).

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Initial checklist; `/order`; Studio Kitchen; scrollable v2 |
