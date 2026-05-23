> **Superseded for copy and visual:** Use [voice-and-copy-framework.md](./voice-and-copy-framework.md) and [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md). This audit covers **legacy spaceman/orbit visuals** only.

# Homepage Hero — Space Interaction Audit

**Audited against:** [homepage-content-hierarchy.md](./homepage-content-hierarchy.md) · [homepage-conversion-flow.md](./homepage-conversion-flow.md) · [page-briefs.md](./page-briefs.md)  
**Concept:** Halftone spaceman (static L0, Blender loop Phase 2) reaching left toward headline + optional Spline “solar system” orbit sphere  
**Hero asset:** `brand_assets/hero/spaceman-grab-poster.webp` (Blender → halftone)  
**Date:** May 2026

---

## Executive summary

| Question | Verdict |
|----------|---------|
| Is the hierarchy **proof-first / conversion** still valid? | **Yes** — section order unchanged |
| Is the hierarchy **built for spaceman + headline grab**? | **Yes** — immersive layers; left grab focal matches halftone composition |
| Is it **built for orbit-a-sphere (solar system) interaction**? | **Partial** — “orbit” exists as copy/motif only, not as hero interaction layer |
| Can you ship both together? | **Yes**, with a **layered immersive hero** (see recommended stack below) |

---

## What you described vs what docs had

| Your intent | Previous hierarchy spec | Gap |
|-------------|-------------------------|-----|
| Spaceman **video in background** (full bleed) | Side panel “hero visual” placeholder | Video must be **layer 1**, not a column |
| Spaceman **grabs the headline** | Headline left column, separate from visual | Needs **shared focal point** + `data-grab-anchor` on headline |
| **Space-themed** immersive hero | Cinematic language in copy only | Needs cosmic scrim, star field, nav transparency rules |
| **Orbit a sphere** like solar system (Spline-style app) | Orbit connector on **process** timeline only | Needs dedicated `hero.orbitScene` layer + input model |
| 3-second clarity + CTAs | Locked copy + dual CTAs | Still valid — copy sits in **readable safe zone**, not inside 3D |

---

## Layer stack (recommended — now in hierarchy)

Bottom → top. This is what wireframes and build should follow.

```
┌─────────────────────────────────────────────────────────────┐
│  nav (transparent → solid on scroll)                        │
├─────────────────────────────────────────────────────────────┤
│  L0  hero.image / hero.video   Halftone poster (now) · loop (Phase 2)  │
│  L1  hero.orbitScene     Spline / WebGL solar orbit in left void (opt.)   │
│  L2  hero.cosmos         Light left scrim + grain (image has dark left)   │
│  L3  hero.content        Left column: headline → subhead → CTAs           │
└─────────────────────────────────────────────────────────────┘
```

### Grab focal point (desktop) — halftone composition

- **Spaceman anchors right**; hand reaches **up-left** into negative space.
- Place **headline** upper-left / center-left (grab target), max ~640px width.
- Stack below headline in same column: kicker (above headline) · subheadline · audience · CTAs.
- Background `object-position: right center` (desktop); `spaceman-grab-mobile.webp` on mobile.
- Light scrim only if contrast fails: `linear-gradient(90deg, rgba(0,0,0,0.35) 0%, transparent 55%)`.
- **Orbit sphere** sits in the **left-center void** (where the hand reaches), behind headline.

### Orbit sphere (Spline / similar)

| Role | Recommendation |
|------|----------------|
| **Decorative** (recommended v1) | Slow auto-orbit behind spaceman; pointer parallax only; no click targets on planets |
| **Interactive** (v2) | Drag to orbit camera around central sphere; max 1 pointer; disable on mobile |
| **Do not** | Put primary CTAs on orbiting nodes — hurts clarity and accessibility |

**Solar system mapping (optional metaphor, not required for launch):**

| Orbit node | Could represent | Link? |
|------------|-----------------|-------|
| Core sphere | Brand / “mission control” | `/` |
| Planet 1 | Work | `/work` |
| Planet 2 | Services | `/services` |
| Planet 3 | About | `/about` |
| Planet 4 | Journal | `/journal` |
| Planet 5 | Contact | `/contact` |

If you use clickable planets, duplicate links in nav/footer — orbit is **enhancement**, not sole navigation.

---

## Hierarchy compatibility by section

| Section | Space theme fit | Notes |
|---------|-----------------|-------|
| Nav | Strong | Transparent over hero image; solid on scroll |
| Hero | **Requires immersive model** | Updated in hierarchy + wireframe |
| Trust | Good | Tool logos; Spline in logo row reinforces stack |
| Work | Neutral | Screenshots lead; cosmic frame optional |
| Process | Good | Existing “orbit connector” motif aligns |
| Testimonials | Neutral | No change |
| Final CTA | Good | High-contrast band = “re-entry” rhythm break |
| Footer | Good | “Stay in orbit” newsletter already on-brand |

**Proof-first order:** Unchanged. Heavy hero motion does not delay `#work`.

---

## Risks and guardrails

| Risk | Mitigation |
|------|------------|
| Headline illegible on video | Left scrim + `text-shadow`; test WCAG contrast on headline |
| Motion sickness / performance | `prefers-reduced-motion`: poster image, static headline, no orbit drag |
| Mobile bandwidth | `hero.videoMobile` shorter loop or poster; orbit scene off |
| Grab misalignment | Export video with safe zone guide; tune `headlineGrab` CSS per breakpoint |
| SEO / clarity | Subheadline + audience chips stay plain language; space is visual layer |
| LCP | Poster on `<video>`, lazy-load Spline after first paint |

---

## Asset checklist

| Asset | Path | Status |
|-------|------|--------|
| Desktop poster (WebP) | `brand_assets/hero/spaceman-grab-poster.webp` | Ready |
| Retina poster | `brand_assets/hero/spaceman-grab-poster@2x.webp` | Ready |
| JPG fallback | `brand_assets/hero/spaceman-grab-poster.jpg` | Ready |
| Mobile crop | `brand_assets/hero/spaceman-grab-mobile.webp` | Ready |
| Desktop video (Phase 2) | `brand_assets/hero/spaceman-grab-headline.webm` | Pending — same crop, hand reaches left |
| Mobile video (Phase 2) | `brand_assets/hero/spaceman-grab-headline-mobile.webm` | Pending |
| Spline scene (optional) | `brand_assets/hero/solar-orbit.splinecode` or embed URL | Pending |

---

## Implementation status

| Deliverable | Status |
|-------------|--------|
| Hierarchy hero spec (layers + fields) | Updated in `homepage-content-hierarchy.md` |
| Wireframe hero (immersive layers) | Updated in `homepage-wireframe-spec.html` |
| Interactive prototype | `hero-prototype.html` (image-first L0 + optional video + CSS orbit) |
| Conversion flow | Still valid; hero visual line matches “spaceman + headline interaction” |

---

## Decision log

1. **Adopt immersive hero** over left/right split for space concept.
2. **Headline left** (hand reach target); spaceman **right** in halftone poster.
3. **Static halftone now**; Blender loop replaces L0 in Phase 2 (same poster as fallback).
4. **Orbit sphere = left void**, behind headline; optional interactive v2.
5. **Section order** stays proof-first; no new homepage sections required.
