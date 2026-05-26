# Wireframes v3 — Approval Layer (Stage 0c)

**Brand:** Studio Kitchen  
**Gate:** Mid-fi (Stage 1 / Next.js) starts only after this hub shows **approved** on all 10 routes.

Build-ready low-fi wireframes: v2 layout + **overlay labels** (`.show-v3-labels`) + token tables + deferral ledger + sign-off blocks.

**Handoff spec:** [../wireframes-v2/v3-handoff-spec.md](../wireframes-v2/v3-handoff-spec.md)  
**v2 source:** [../wireframes-v2/README.md](../wireframes-v2/README.md)  
**Mid-fi roadmap:** [../design-build-roadmap.md](../design-build-roadmap.md) Stage 1

---

## Route index (10 routes)

| Route | v3 HTML | v2 source | Status |
|-------|---------|-----------|--------|
| `/` | [homepage-wireframe-v3.html](./homepage-wireframe-v3.html) | homepage-wireframe-v2.html | **approved** |
| `/order` | [order-wireframe-v3.html](./order-wireframe-v3.html) | order-wireframe-v2.html | **approved** |
| `/contact` | [contact-wireframe-v3.html](./contact-wireframe-v3.html) | contact-wireframe-v2.html | **approved** |
| `/services` | [services-wireframe-v3.html](./services-wireframe-v3.html) | services-wireframe-v2.html | **approved** |
| `/work` | [work-wireframe-v3.html](./work-wireframe-v3.html) | work-wireframe-v2.html | **approved** |
| `/work/[slug]` | [case-study-wireframe-v3.html](./case-study-wireframe-v3.html) | case-study-wireframe-v2.html | **approved** |
| `/404` | [404-wireframe-v3.html](./404-wireframe-v3.html) | 404-wireframe-v2.html | **approved** |
| `/about` | [about-wireframe-v3.html](./about-wireframe-v3.html) | about-wireframe-v2.html | **approved** |
| `/journal` | [journal-index-wireframe-v3.html](./journal-index-wireframe-v3.html) | journal-index-wireframe-v2.html | **approved** |
| `/journal/[slug]` | [journal-article-wireframe-v3.html](./journal-article-wireframe-v3.html) | journal-article-wireframe-v2.html | **approved** |

---

## Shared v3 assets

| File | Purpose |
|------|---------|
| [_v3-labels.css](./_v3-labels.css) | Overlay label styles + spec-footer tables |
| [_v3-labels.js](./_v3-labels.js) | Inject `#section` labels + token hints; toggle toolbar |
| [../wireframes-v2/_chrome.css](../wireframes-v2/_chrome.css) | Studio Kitchen tokens + chrome |
| [../wireframes-v2/_chrome.js](../wireframes-v2/_chrome.js) | Nav, drawer, hash highlight |

**Regenerate v3 HTML from v2:** `node scripts/promote-wireframes-v3.mjs`

---

## Review instructions

1. Serve from repo root:

   ```bash
   npx --yes serve "." -p 3000
   ```

2. Open e.g. `http://localhost:3000/docs/wireframes-v3/homepage-wireframe-v3.html`

3. Viewports: **375px** · **900px** · **1200px**

4. Use **Toggle v3 labels** (bottom-right) to show/hide `#hero`, token callouts.

5. Read each file’s **spec footer**: token table · deferral ledger · v3 approval block.

---

## v3 exit checklist (Stage 0c complete)

- [x] All 10 v3 HTML files exist under `docs/wireframes-v3/`
- [x] Homepage: `#why-order` present; no testimonials
- [x] Work: Option B + hover documented
- [x] Case study: 8-block template labeled (`#hero` … `#cta`)
- [x] Services: packages + FAQ + `#why-*` anchors labeled
- [x] Contact + order: form layouts + states labeled
- [x] About: 6 sections + CTA labeled
- [x] Journal: index + article template labeled
- [x] 404: recovery layout labeled
- [x] Global chrome on all pages
- [x] Deferral ledger on every file
- [x] Conversion sign-off → [homepage-conversion-flow.md](../homepage-conversion-flow.md)
- [x] **No open layout or interaction questions**

**Sign-off (2026-05-25):**

| Role | Name | Notes |
|------|------|-------|
| Design | Jawad Jalal | Studio Kitchen tokens + overlay labels |
| Content | Jawad Jalal | Locked copy verified |
| Conversion | Jawad Jalal | Proof-first funnel + CTA matrix |

**Next:** Stage 1 Mid-fi — wire tokens in `app/globals.css`, `tailwind.config.ts`, build `components/sections/` per section IDs.

---

## Mid-fi read order

1. v3 HTML (this folder)
2. [design-token-system.md](../design-token-system.md)
3. [portfolio-component-token-spec.md](../portfolio-component-token-spec.md)
4. [page-briefs.md](../page-briefs.md)
5. [cta-messaging-matrix.md](../cta-messaging-matrix.md)
6. [ia-sitemap.md](../ia-sitemap.md)
7. [launch-strategy-v1.md](../launch-strategy-v1.md)

**Non-goals at mid-fi start:** Spline, Lenis, hero video, live form POST, testimonials.
