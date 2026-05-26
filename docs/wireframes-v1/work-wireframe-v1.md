# Work Wireframe v1

**Route:** `/work`  
**Brand:** Studio Kitchen  
**Status:** Wireframe v1 spec (structure + locked copy)  
**Last updated:** May 2026

**Related:** [homepage-wireframe-v1.md](./homepage-wireframe-v1.md) · [order-wireframe-v1.md](./order-wireframe-v1.md) · [work-wireframe-v1.html](./work-wireframe-v1.html) · [launch-strategy-v1.md](../launch-strategy-v1.md)

**Deliverable format:** Grayscale HTML frames · Desktop **1200px** + Mobile **375px** · No tokens, hover states, or motion in v1.

---

## Page role

| Attribute | Spec |
|-----------|------|
| **Funnel job** | Proof catalog · deepen trust · route to case study or conversion |
| **Surface rule** | **Cream hero** (not red) |
| **Launch strategy** | **Option B:** 1 live card + coming soon. No fake client projects. |
| **Primary conversion** | **View project** → `/work/by-jawad` |
| **Secondary conversion** | **Make an order** → `/order` |

---

## CTA model on `/work`

| Label | Where | Destination |
|-------|--------|-------------|
| **Chat to the chef** | Header, `#cta`, footer | `/order` |
| **Make an order** | Hero primary only | `/order` |
| **View Services** | Hero secondary, `#cta` secondary | `/services` |
| **View project** | Live card only | `/work/by-jawad` |
| **Place your order** | Not on this page | — |

---

## Locked scroll order

```
nav → hero → [filters ghost] → grid → cta → footer
```

| Section | Anchor |
|---------|--------|
| Hero | `#hero` |
| Filters (optional) | `#filters` |
| Project grid | `#grid` |
| CTA band | `#cta` |

---

## Global chrome

| Element | Spec |
|---------|------|
| Nav order | Work · Services · About · Journal · Contact |
| Active | **Work** |
| Header CTA | **Chat to the chef** → `/order` |
| Footer | Same as [homepage-wireframe-v1.md](./homepage-wireframe-v1.md) |

---

## Section 1 — Hero `#hero`

**Surface:** Cream · black type

| Element | Copy |
|---------|------|
| **Kicker** | From the pass |
| **Headline** | Selected work. Portfolios and landing pages that perform. |
| **Subheadline** | Case studies with the problem, approach, and results. One live project at launch, more on the way. |
| **Primary CTA** | **Make an order** → `/order` |
| **Secondary CTA** | **View Services** → `/services` |

---

## Section 2 — Filters `#filters` (optional v1)

Ghost/disabled or omitted: All · Portfolio · Landing page · SaaS · Brand.

Activate in v2 when multiple projects exist.

---

## Section 3 — Grid `#grid` (Option B)

**Layout (desktop):** Live card + coming soon panel side by side.  
**Layout (mobile):** Stacked.

### Live card — By Jawad

| Field | Copy |
|-------|------|
| Tag | Portfolio · LIVE |
| Title | By Jawad |
| Description | The site you're on. Studio Kitchen voice, conversion-first. |
| Card CTA | **View project** → `/work/by-jawad` |
| Result tag | Optional, honest only (no fake metrics) |

### Coming soon panel

| Field | Copy |
|-------|------|
| Heading | Next out of the kitchen |
| Body | Case studies added as projects ship. |
| CTA | Optional: **Chat to the chef** → `/order` |

**Do not add** placeholder client cards at v1.

---

## Section 4 — CTA `#cta`

**Surface:** Cream band

| Element | Copy |
|---------|------|
| **Heading** | Want results like these? |
| **Subline** | Tell me what you're building. I reply within 24 hours. |
| **Primary** | **Chat to the chef** → `/order` |
| **Secondary** | **View Services** → `/services` |

---

## Section 5 — Footer

Standard global footer.

---

## SEO

| Field | Copy |
|-------|------|
| **Title** | Portfolio and Landing Page Case Studies. Jawad Jalal |
| **Meta** | Selected web design projects. Portfolios and landing pages with strategy, approach, and results. |

---

## Mobile summary (375px)

| Section | Behavior |
|---------|----------|
| Nav | Logo + Chat to the chef + hamburger |
| Hero | Stack · full-width CTAs |
| Grid | By Jawad card, then coming soon |
| `#cta` | Stacked buttons |
| Footer | 2-column grid |

---

## Visitor journeys

**A — Homepage proof:** See what's cooking → `/work` → View project → `/work/by-jawad` → Chat to the chef → `/order`

**B — Ready to hire:** `/work` → Make an order → `/order`

**C — Pricing context:** `/work` → View Services → `/services`

---

## Wireframe v1 exit checklist

- [x] Desktop 1200px + mobile 375px frames
- [x] Option B only: 1 live + coming soon
- [x] **View project** not View case study
- [x] **Make an order** on hero → `/order`
- [x] No mission/space/halftone copy
- [x] Global header/footer with updated CTAs
- [x] Filters ghosted or omitted

---

## Gaps vs HTML (resolved)

HTML frame [work-wireframe-v1.html](./work-wireframe-v1.html) synced to this spec May 2026.

---

## Changelog (wireframe session)

| Change | Notes |
|--------|-------|
| Hero primary | **Make an order** → `/order` |
| Option B | By Jawad + Next out of the kitchen |
| Card CTA | View project → `by-jawad` |
| CTAs | Chat to the chef replaces Book a Call |
