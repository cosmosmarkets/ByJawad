# Page Matrix — Wireframe v2

**Purpose:** Route-by-route scope from v1 input → v2 output → v3 promotion.  
**Last updated:** May 2026

**Related:** [v2-annotation-spec.md](./v2-annotation-spec.md) · [v2-exit-checklist.md](./v2-exit-checklist.md) · [wireframes-v1/index.html](../wireframes-v1/index.html)

**Status enums:** `not started` · `scaffold` · `in review` · `done` · `approved` (v3)

---

## Summary matrix

| Route | v1 source | v2 HTML | Status | Blocker |
|-------|-----------|---------|--------|---------|
| `/` | [homepage-wireframe-v1.md](../wireframes-v1/homepage-wireframe-v1.md) · [homepage-wireframe-spec.html](../homepage-wireframe-spec.html) | [homepage-wireframe-v2.html](./homepage-wireframe-v2.html) | **done** | — |
| `/order` | [order-wireframe-v1.md](../wireframes-v1/order-wireframe-v1.md) · [order-wireframe-v1.html](../wireframes-v1/order-wireframe-v1.html) | [order-wireframe-v2.html](./order-wireframe-v2.html) | **done** | — |
| `/contact` | [contact-wireframe-v1.html](../wireframes-v1/contact-wireframe-v1.html) | [contact-wireframe-v2.html](./contact-wireframe-v2.html) | **done** | — |
| `/services` | [services-wireframe-v1.md](../wireframes-v1/services-wireframe-v1.md) · [services-wireframe-v1.html](../wireframes-v1/services-wireframe-v1.html) | [services-wireframe-v2.html](./services-wireframe-v2.html) | **done** | — |
| `/work` | [work-wireframe-v1.md](../wireframes-v1/work-wireframe-v1.md) · [work-wireframe-v1.html](../wireframes-v1/work-wireframe-v1.html) | [work-wireframe-v2.html](./work-wireframe-v2.html) | **done** | — |
| `/work/[slug]` | [case-study-wireframe-v1.html](../wireframes-v1/case-study-wireframe-v1.html) | [case-study-wireframe-v2.html](./case-study-wireframe-v2.html) | **done** | — |
| `/404` | [404-wireframe-v1.html](../wireframes-v1/404-wireframe-v1.html) | [404-wireframe-v2.html](./404-wireframe-v2.html) | **done** | — |
| `/about` | [page-briefs.md](../page-briefs.md) §5 | [about-wireframe-v2.html](./about-wireframe-v2.html) | **done** | — |
| `/journal` | [page-briefs.md](../page-briefs.md) §6 | [journal-index-wireframe-v2.html](./journal-index-wireframe-v2.html) | **done** | — |
| `/journal/[slug]` | [page-briefs.md](../page-briefs.md) §7 | [journal-article-wireframe-v2.html](./journal-article-wireframe-v2.html) | **done** | — |

---

## Wave order

1. `/` (scaffold)
2. `/order` + `/contact`
3. `/services`
4. `/work` + `/work/[slug]` + `/404`
5. `/about` + `/journal` (after v1 frames)

---

## `/` Homepage

**Locked scroll order:**

```
nav → hero → trust → why-order → work → process → tools → cta → footer
```

**Section IDs:** `#hero` `#trust` `#why-order` `#work` `#process` `#tools` `#cta`

**v2-only behaviors:**

- Nav scroll + logo swap
- Mobile drawer
- Hero layers + suffix rotation
- Mustard/white CTAs on red
- `#why-order` whole-tile links
- Work Option B hover
- Process H/V connector
- Tools 4×2 / 2×4
- Poster tilt
- Conversion spec footer

**Copy:** [homepage-wireframe-v1.md](../wireframes-v1/homepage-wireframe-v1.md) — do not rewrite.

**Exit items:** [v2-exit-checklist.md](./v2-exit-checklist.md) § Homepage

---

## `/order`

**Locked scroll order:**

```
nav → hero → form → socials → book → footer
```

**Anchors:** `#hero` `#form` `#socials` `#book`

**Surface:** Cream page (not red poster hero).

**v2-only behaviors:**

- Global chrome (cream nav default or scroll from short hero)
- Inquiry form fields + required flags
- Validation error / success UI states (semantic colors)
- Social links block
- Calendly **Call the chef** placeholder at `#book`
- Spec footer

**Copy:** [order-wireframe-v1.md](../wireframes-v1/order-wireframe-v1.md)

**Inbound:** Chat to the chef · Place your order (poster/hero) → this route

---

## `/contact`

**Locked sections (v1 HTML):** Red hero · Calendly · inquiry form · response promise · FAQ · footer

**v2-only behaviors:**

- Red hero (same layer stack as homepage, contact copy)
- Form states
- FAQ accordion
- Anchor `#book` for Calendly if used
- Spec footer

**Copy:** [page-briefs.md](../page-briefs.md) · contact v1 HTML

---

## `/services`

**Locked scroll order:**

```
nav → hero → why → portfolio → landing → addons → process → faq → cta → footer
```

**Anchors:** `#why` `#why-portfolio` `#why-landing` `#why-brands` `#portfolio` `#landing` `#addons` `#process` `#faq` `#cta`

**Surface:** Cream hero (not red).

**v2-only behaviors:**

- FAQ accordion (one open on mobile)
- Hash scroll highlight when arriving from homepage `#why-order` tiles
- Package card hover/focus
- Process timeline (reuse homepage pattern)
- Chat to the chef CTAs → `/order` (no Place your order on this page)
- Spec footer

**Copy:** [services-wireframe-v1.md](../wireframes-v1/services-wireframe-v1.md)

---

## `/work`

**Locked sections:** Hero · filter/tags (optional, disabled until N>1) · project grid · CTA band

**v2-only behaviors:**

- Option B grid styled (1 live + coming soon)
- Card hover
- Filter noted as deferred when multiple projects
- Spec footer

**Copy:** [work-wireframe-v1.md](../wireframes-v1/work-wireframe-v1.md)

---

## `/work/[slug]` Case study

**Locked blocks (8):** hero · overview · problem · approach · result · gallery · related · CTA

**v2-only behaviors:**

- Typography hierarchy on cream
- Gallery placeholder grid
- CTA band (Chat to the chef / inquiry)
- Spec footer

**Copy:** [ia-sitemap.md](../ia-sitemap.md) · [page-briefs.md](../page-briefs.md)

---

## `/404`

**Locked recovery:** Headline · Return home · See what's cooking · Place your order · quick links

**v2-only behaviors:**

- Studio Kitchen styling
- Recovery CTAs with button states
- Spec footer

**Copy:** v1 [404-wireframe-v1.html](../wireframes-v1/404-wireframe-v1.html)

---

## `/about`

**Locked scroll order:**

```
nav → hero → story → stack → process → photo → personal → cta → footer
```

**Section IDs:** `#hero` `#story` `#stack` `#process` `#photo` `#personal` `#cta`

**v2 behaviors:** Cream hero · Work With Me → `/contact` · stack grid · condensed process · avatar placeholder

**Copy:** [cta-messaging-matrix.md](../cta-messaging-matrix.md) · [page-briefs.md](../page-briefs.md) §5

**v3:** [about-wireframe-v3.html](../wireframes-v3/about-wireframe-v3.html) — **approved**

---

## `/journal`

**Locked scroll order:**

```
nav → hero → featured → grid → newsletter → cta → footer
```

**Section IDs:** `#hero` `#featured` `#grid` `#newsletter` `#cta`

**v2 behaviors:** Featured + grid cards · newsletter placeholder · seed post links

**Copy:** [page-briefs.md](../page-briefs.md) §6

**v3:** [journal-index-wireframe-v3.html](../wireframes-v3/journal-index-wireframe-v3.html) — **approved**

---

## `/journal/[slug]`

**Locked blocks:** `#hero` · `#body` · `#mid-cta` · `#end-cta` · `#related`

**v2 behaviors:** MDX body placeholder · mid-article CTA → `/services` · end CTA Book a Call

**Copy:** [page-briefs.md](../page-briefs.md) §7

**v3:** [journal-article-wireframe-v3.html](../wireframes-v3/journal-article-wireframe-v3.html) — **approved**

---

## Promotion to v3

When route status = `done` and v2 exit passes:

1. Copy HTML to `docs/wireframes-v3/{route}-wireframe-v3.html`
2. Add v3 labels per [v3-handoff-spec.md](./v3-handoff-spec.md)
3. Update [README.md](./README.md) status to `approved`

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Initial matrix; `/order`; `#why-order`; homepage scaffold status |
