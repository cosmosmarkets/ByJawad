# Wireframe Pipeline Overview — v1 → v2 → v3

**Project:** Jawad Jalal — Portfolio & Landing Page Specialist  
**Brand:** Studio Kitchen  
**Stage:** 0b (Wireframe v2) in progress  
**Last updated:** May 2026

**Hub:** [README.md](./README.md) · **Roadmap:** [design-build-roadmap.md](../design-build-roadmap.md)

---

## Purpose

This document explains why wireframes pass through three iterations before mid-fi Next.js build. It supplements the roadmap with **current project truth** (Studio Kitchen, `/order`, `#why-order`, scrollable v2 HTML).

**Gate rule:** Do not start the next stage until the current stage passes its exit checklist.

```
Wireframe v1 (structure)
    → Wireframe v2 (interaction + tokens)
        → Wireframe v3 (build-ready handoff)
            → Stage 1 Mid-fi (Next.js)
```

---

## Naming glossary

Do not conflate wireframe version with launch content scope.

| Term | Meaning | Where defined |
|------|---------|---------------|
| **Wireframe v1** | First low-fi pass: IA, section order, grayscale blocks | [wireframes-v1/](../wireframes-v1/) · Stage 0a |
| **Wireframe v2** | Second pass: Studio Kitchen tokens, interactions, field/state schemas | [wireframes-v2/](./) · Stage 0b |
| **Wireframe v3** | Third pass: spacing/type labels, deferrals explicit, sign-off | `docs/wireframes-v3/` · Stage 0c |
| **Launch content scope** | What ships at first public launch (Option B work, no testimonials) | [launch-strategy-v1.md](../launch-strategy-v1.md) |
| **Phase 2 (hero)** | Hero video only (optional); type-only hero — no illustration asset | [homepage-content-hierarchy.md](../homepage-content-hierarchy.md) |

---

## What each stage locks

### Wireframe v1 (Stage 0a) — Done for funnel slice

**Goal:** Prove IA and funnel order; establish desktop + mobile structure per route.

| Locked | Not in v1 |
|--------|-----------|
| Section order and anchors | Studio Kitchen color/type |
| Copy placement (verbatim from specs) | Nav scroll, hover, focus |
| Global header/footer chrome | Hero suffix rotation |
| CTA destinations (`/order` model) | Form validation states |
| Option B work (1 card + coming soon) | FAQ accordion behavior |

**Format:** Side-by-side **1200px + 375px** static frames in grayscale HTML, plus companion `.md` specs for canonical copy.

**Deliverables:** [wireframes-v1/index.html](../wireframes-v1/index.html)

---

### Wireframe v2 (Stage 0b) — In progress

**Goal:** Styled, scrollable HTML where behaviors can be **demonstrated** so mid-fi needs no interaction guesswork.

| Adds on top of v1 | Still deferred |
|-------------------|----------------|
| Studio Kitchen tokens (cream / ink / heat) | Lenis / GSAP scroll scenes |
| Fredoka, Caveat, Inter, JetBrains Mono | Spline, GSAP scroll scenes |
| Nav transparent → blur on scroll | Live Calendly URL |
| Mobile drawer (Chat to the chef first) | Supabase form POST |
| Hero suffix rotation + reduced motion | Testimonials section |
| Button hover/focus/active (sticker press) | Work card secondary image swap |
| `#why-order` tile affordances | About / Journal (v1 structure pending) |
| Process connector (H desktop / V mobile) | |
| Tools 4×2 / 2×4 grid | |
| Form field + error/success states (semantic) | |
| FAQ accordion open/close | |
| Spec footer (behaviors + deferrals) | |

**Format shift:** One **scrollable responsive HTML page** per route (not dual static frames). Review at 375px, 900px, and 1200px viewports.

**Annotation spec:** [v2-annotation-spec.md](./v2-annotation-spec.md)  
**Exit gate:** [v2-exit-checklist.md](./v2-exit-checklist.md)

---

### Wireframe v3 (Stage 0c) — Complete

**Goal:** Final low-fi approval with token labels, spacing callouts, and explicit deferrals before code.

**Hub:** [wireframes-v3/README.md](../wireframes-v3/README.md) · 10 routes **approved** (2026-05-25)

| Adds on top of v2 |
|-------------------|
| Section ID labels visible on frame |
| Type scale labels (Fredoka display, Inter body, mono kicker) |
| Spacing token callouts (`section-v-desktop`, `content-max`) |
| Component token names on key UI (`shadow.sticker`, `radius.lg`) |
| Deferral ledger (hi-fi vs production vs post-launch) |
| Conversion sign-off |

**Format:** Promoted copies under `docs/wireframes-v3/` or v3 changelog block in approved v2 files.

**Handoff spec:** [v3-handoff-spec.md](./v3-handoff-spec.md)

---

## Deliverable formats compared

| Stage | Primary artifact | Review method |
|-------|------------------|---------------|
| v1 | Grayscale dual-frame HTML + `.md` copy specs | Side-by-side 1200 / 375 static frames |
| v2 | Styled scrollable HTML per route | Local server; scroll; resize; test drawer/accordion |
| v3 | Approved v2 + annotation layer | Same as v2 + label overlay / expanded footer |
| Mid-fi | Next.js pages in `app/` | `npm run dev` |

---

## Tooling map (v2)

| Tool | Role in v2 |
|------|------------|
| [.stitch/DESIGN.md](../../.stitch/DESIGN.md) | Stitch generation + semantic design system (Gemini) |
| [design-token-system.md](../design-token-system.md) | **Canonical hex** for HTML wireframes |
| [portfolio-component-token-spec.md](../portfolio-component-token-spec.md) | Component → token mapping |
| [design-token-showcase-v3.html](../design-token-showcase-v3.html) | Visual component reference |
| [studio-kitchen-hero-prototype.html](../studio-kitchen-hero-prototype.html) | Hero, buttons, suffix rotation |
| [studio-kitchen-presentation.html](../studio-kitchen-presentation.html) | Stakeholder deck; slide 07 handoff |
| [brand_assets/logo/](../../brand_assets/logo/) | Nav/footer lockups |
| [wireframes-v1/](../wireframes-v1/) | Structure + locked copy source |
| Google Stitch (optional) | Screen generation; not a pipeline gate |

**Rule:** Repo hex in `design-token-system.md` wins over Material aliases in Stitch `DESIGN.md` when they differ.

---

## Execution waves (ordered work)

Work funnel-first. Do not block v2 funnel on About/Journal.

| Wave | Scope | Status (May 2026) |
|------|-------|-------------------|
| 0 | Shared chrome extracted | **Done** — [_chrome.css](./_chrome.css) · [_chrome.js](./_chrome.js) · [_chrome-reference.html](./_chrome-reference.html) · [shared-chrome-spec.md](./shared-chrome-spec.md) |
| 1 | Homepage `/` | **Scaffold** — [homepage-wireframe-v2.html](./homepage-wireframe-v2.html) · layout plan: [wave-1-homepage-layout-plan.md](./wave-1-homepage-layout-plan.md) |
| 2 | `/order` + `/contact` | Not started |
| 3 | `/services` | Not started |
| 4 | `/work` + `/work/[slug]` + `/404` | Not started |
| 5 | About + Journal | Blocked on v1 structure frames |

Within each wave: copy v1 section order → apply shared chrome → implement v2 behaviors from [v2-annotation-spec.md](./v2-annotation-spec.md) → add spec footer → run route checks in [v2-exit-checklist.md](./v2-exit-checklist.md).

---

## Anti-scope (all v2 work)

Do not add during wireframe passes:

- Testimonials section (deferred until 2+ quotes)
- Full services snapshot on homepage
- Mission Control / spaceman hero assets
- Sections or routes not in [ia-sitemap.md](../ia-sitemap.md)
- Copy rewrites (link to v1 MD / voice doc)
- `transition-all` or default Tailwind blue/indigo
- Place your order in global nav (red surfaces only)

---

## Source-of-truth read order (before any v2 frame)

1. [voice-and-copy-framework.md](../voice-and-copy-framework.md)
2. [studio-kitchen-visual-direction.md](../studio-kitchen-visual-direction.md)
3. [design-token-system.md](../design-token-system.md)
4. [homepage-content-hierarchy.md](../homepage-content-hierarchy.md)
5. [cta-messaging-matrix.md](../cta-messaging-matrix.md)
6. [ia-sitemap.md](../ia-sitemap.md)
7. [launch-strategy-v1.md](../launch-strategy-v1.md)
8. Relevant v1 wireframe spec in [wireframes-v1/](../wireframes-v1/)

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Initial v2 pipeline overview; Studio Kitchen; scrollable v2 format; `/order` + `#why-order` |
