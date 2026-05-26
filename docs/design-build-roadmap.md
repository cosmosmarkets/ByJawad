# Design Build Roadmap — Wireframe to Production

**Project:** Jawad Jalal — Portfolio & Landing Page Specialist  
**Brand:** Studio Kitchen (copy + visual locked)  
**Status:** Copy + visual docs locked · Code implementation pending  
**Last updated:** May 2026

**Copy canonical:** [voice-and-copy-framework.md](./voice-and-copy-framework.md)

**Companion deliverable:** [Design_Build_Roadmap.docx](./Design_Build_Roadmap.docx) (stakeholder review format)

---

## Executive summary

This roadmap defines a **six-stage pipeline** from low-fidelity wireframes through production launch. Each stage has explicit tools, outputs, exit criteria, and mapping to the Next.js 14 stack already scaffolded in this repository.

| Stage | Name | Primary output | Primary tools |
|-------|------|----------------|---------------|
| 0a | Wireframe v1 | Structure frames (all routes) | HTML wireframe specs in `docs/` |
| 0b | Wireframe v2 | Interaction + component annotations | HTML wireframes v2 |
| 0c | Wireframe v3 | Build-ready handoff | Approved wireframes + sign-off |
| 1 | Mid-fi | Full site skeleton in code | Next.js, Tailwind, shadcn, static content |
| 2 | Hi-fi | Experience tier | Framer Motion, GSAP, Lenis, Spline, hero video |
| 3 | Production maturity | Launch-ready site | Supabase, Resend, Calendly, SEO, Vercel |

**Gate rule:** Do not start the next stage until the current stage passes its exit checklist.

**Source of truth (read before any stage):**

1. [voice-and-copy-framework.md](./voice-and-copy-framework.md)
2. [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md)
3. [design-token-system.md](./design-token-system.md)
4. [homepage-content-hierarchy.md](./homepage-content-hierarchy.md)
5. [cta-messaging-matrix.md](./cta-messaging-matrix.md)
6. [ia-sitemap.md](./ia-sitemap.md)
7. [launch-strategy-v1.md](./launch-strategy-v1.md)

---

## Naming glossary (read first)

Two different uses of "v1" appear in this project. **Do not conflate them.**

| Term | Meaning | Where defined |
|------|---------|---------------|
| **Wireframe v1** | First low-fi pass: IA, section order, grayscale blocks only | This roadmap · Stage 0a |
| **Wireframe v2** | Second pass: interactions, states, field schemas | This roadmap · Stage 0b |
| **Wireframe v3** | Third pass: spacing, type labels, anchors, build handoff | This roadmap · Stage 0c |
| **Launch content scope** | What ships at first public launch (Option B work, no testimonials, interim wordmark) | [launch-strategy-v1.md](./launch-strategy-v1.md) |
| **Phase 2 (hero)** | Hero Blender video loop assets (not wireframe version) | [brand_assets/hero/README.md](../brand_assets/hero/README.md) |

**Rule:** Wireframe v1/v2/v3 describe **design iteration**. Launch content scope describes **content and features at production maturity**.

---

## End-to-end pipeline

```
Wireframe v1 (structure)
    -> Wireframe v2 (interaction)
        -> Wireframe v3 (approved handoff)
            -> Mid-fi (bulk Next.js build)
                -> Hi-fi (experience tier)
                    -> Production maturity (launch)
```

### Stage dependency diagram

| From | To | Blocker if skipped |
|------|-----|-------------------|
| Wireframe v3 | Mid-fi | Wrong layout, rework in code |
| Mid-fi | Hi-fi | Motion on broken structure |
| Hi-fi | Production | Launch without craft baseline |
| Mid-fi | Production | Allowed for backend-only sprint; verify tokens first |

---

## Stage 0 — Low-fi wireframes (v1 → v2 → v3)

**Purpose:** Lock layout, section order, copy placement, and responsive behavior **before** production UI.

**Tools (wireframes are not Next.js pages):**

- HTML frame specs in `docs/` (pattern: [homepage-wireframe-spec.html](./homepage-wireframe-spec.html))
- Copy: [homepage-content-hierarchy.md](./homepage-content-hierarchy.md), [page-briefs.md](./page-briefs.md), [cta-messaging-matrix.md](./cta-messaging-matrix.md)
- Hero reference: [hero-prototype.html](./hero-prototype.html), [prototypes/hero-halftone.html](../prototypes/hero-halftone.html)
- Breakpoints: **375px mobile**, **1200px desktop**

**Visual rules for all wireframe passes:**

- v1: Grayscale blocks + structure annotations only
- v2+: Studio Kitchen tokens from [design-token-system.md](./design-token-system.md) (paper / ink / heat)
- Locked copy pasted verbatim (no rewrites)
- Do not add sections not in [ia-sitemap.md](./ia-sitemap.md)

**v2 documentation hub:** [wireframes-v2/README.md](./wireframes-v2/README.md)

---

### Wireframe v1 — Structure pass

**Goal:** Prove IA and funnel order; establish desktop + mobile frames per route.

#### Page matrix (v1)

| Route | Status (May 2026) | v1 deliverable file (target) |
|-------|-------------------|------------------------------|
| `/` Homepage | **Done** | [homepage-wireframe-spec.html](./homepage-wireframe-spec.html) — review only |
| `/work` | Not started | `docs/wireframes-v1/work-wireframe-v1.html` |
| `/work/[slug]` | Not started | `docs/wireframes-v1/case-study-wireframe-v1.html` |
| `/services` | Not started | `docs/wireframes-v1/services-wireframe-v1.html` |
| `/about` | Not started | `docs/wireframes-v1/about-wireframe-v1.html` |
| `/journal` | Not started | `docs/wireframes-v1/journal-index-wireframe-v1.html` |
| `/journal/[slug]` | Not started | `docs/wireframes-v1/journal-article-wireframe-v1.html` |
| `/contact` | Not started | `docs/wireframes-v1/contact-wireframe-v1.html` |
| `/404` | Not started | `docs/wireframes-v1/404-wireframe-v1.html` |
| Global chrome | Partial | Header + footer on every frame |

#### Homepage v1 (locked section order)

```
nav -> hero -> trust -> why-order -> work -> process -> tools -> cta -> footer
```

**Not on homepage v1 frames:** Services snapshot section · Testimonials.

#### Per-page v1 section checklist

| Page | Sections to frame |
|------|-------------------|
| Work | Hero · filter/tags (optional) · project grid · CTA band |
| Case study | 8 blocks per IA: hero · overview · problem · approach · result · gallery · related · CTA |
| Services | Hero · portfolio package · landing package · add-ons · process `#process` · FAQ · CTA |
| About | Hero · story · stack · process · photo placeholder · personal · CTA |
| Journal index | Hero · featured · grid · newsletter · CTA |
| Journal article | Hero · body · related · CTA |
| Contact | Hero · Calendly block · form · response promise · FAQ |
| 404 | Headline · Return home · See what's cooking · Place your order · quick links |

#### Wireframe v1 exit checklist

- [ ] All routes have desktop (1200px) + mobile (375px) frames
- [ ] Homepage proof-first order unchanged
- [ ] Locked copy pasted from page briefs / CTA matrix (no rewrites)
- [ ] Global header/footer on every page frame
- [ ] Hero composition: centered mega-type poster on red (homepage — no illustration)

---

### Wireframe v2 — Interaction + component pass

**Goal:** Styled scrollable HTML with demonstrated behaviors, fields, and states so mid-fi needs no guesswork.

**Documentation (canonical):** [wireframes-v2/README.md](./wireframes-v2/README.md) · [pipeline-overview.md](./wireframes-v2/pipeline-overview.md) · [v2-annotation-spec.md](./wireframes-v2/v2-annotation-spec.md) · [v2-exit-checklist.md](./wireframes-v2/v2-exit-checklist.md)

**Format:** One responsive scrollable HTML page per route (not dual static frames). Review at 375 / 900 / 1200px.

#### Deliverable files (v2)

| Route | Target file |
|-------|-------------|
| `/` | `docs/wireframes-v2/homepage-wireframe-v2.html` |
| `/order` | `docs/wireframes-v2/order-wireframe-v2.html` |
| `/work` | `docs/wireframes-v2/work-wireframe-v2.html` |
| `/work/[slug]` | `docs/wireframes-v2/case-study-wireframe-v2.html` |
| `/services` | `docs/wireframes-v2/services-wireframe-v2.html` |
| `/about` | `docs/wireframes-v2/about-wireframe-v2.html` |
| `/journal` | `docs/wireframes-v2/journal-index-wireframe-v2.html` |
| `/journal/[slug]` | `docs/wireframes-v2/journal-article-wireframe-v2.html` |
| `/contact` | `docs/wireframes-v2/contact-wireframe-v2.html` |
| `/404` | `docs/wireframes-v2/404-wireframe-v2.html` |

#### Annotations to add on every v2 frame

See [v2-annotation-spec.md](./wireframes-v2/v2-annotation-spec.md). Summary:

| Category | Spec source | What to implement |
|----------|-------------|-------------------|
| Nav scroll | [shared-chrome-spec.md](./wireframes-v2/shared-chrome-spec.md) | Transparent over red hero → cream blur on scroll; height shrink; logo swap |
| Hero layers | [studio-kitchen-hero-prototype.html](./studio-kitchen-hero-prototype.html) | L0 red grid · L1 centered poster type · L2 scrim (if needed) · L3 copy stack |
| Hero suffix | [homepage-wireframe-v1.md](./wireframes-v1/homepage-wireframe-v1.md) | Crossfade portfolios ↔ landing pages; reduced-motion static line |
| `#why-order` | homepage-wireframe-v1.md | Whole-tile links → `/services#why-*` |
| Work cards | [homepage-content-hierarchy.md](./homepage-content-hierarchy.md) | Option B; hover; secondary image deferred |
| Process | page-briefs | 5 steps; horizontal desktop / vertical mobile; connector |
| Tools | launch-strategy-v1 | 8 cards 4×2 desktop; 2×4 mobile |
| CTAs | v1 CTA model · [cta-messaging-matrix.md](./cta-messaging-matrix.md) | Mustard on red; Chat to the chef → `/order` in header |
| Mobile nav | shared-chrome-spec | Hamburger → drawer; Chat to the chef first |
| Forms | order + contact v1 specs | Field types, required flags, validation (semantic colors) |
| FAQ accordion | services-wireframe-v1.md | Open/close; one open on mobile |
| Exit risk | homepage-content-hierarchy heatmap | Spec footer per route |

#### Wireframe v2 exit checklist

Full checklist: [v2-exit-checklist.md](./wireframes-v2/v2-exit-checklist.md). Summary:

- [ ] Developer can implement mid-fi without open interaction questions
- [ ] Kitchen hero placeholder (not legacy spaceman assets)
- [ ] All CTA labels match v1 session model (`/order`)
- [ ] Hover/focus states on interactive elements
- [ ] Mobile drawer behavior working
- [ ] Spec footer on every v2 HTML file

---

### Wireframe v3 — Build-ready handoff

**Goal:** Final low-fi approval with tokens, anchors, and deferrals explicit.

**Documentation:** [v3-handoff-spec.md](./wireframes-v2/v3-handoff-spec.md)

#### Deliverable files (v3)

Same routes as v2, under `docs/wireframes-v3/`:

- `homepage-wireframe-v3.html` (canonical approved homepage)
- `order-wireframe-v3.html` through `404-wireframe-v3.html`

Alternatively: promote v2 files in place with a **v3 changelog** block in each HTML footer.

#### v3 additions (on top of v2)

| Addition | Source |
|----------|--------|
| Section IDs | `#hero`, `#trust`, `#why-order`, `#work`, `#process`, `#tools`, `#cta` |
| Type scale labels | display (Fredoka) · body (Inter) · kicker (JetBrains Mono) · script (Caveat, poster only) |
| Spacing tokens | `section-v-desktop`, gutter, `content-max` 1280px |
| Deferred to hi-fi | Hero video · GSAP scroll scenes · Spline |
| Deferred to production | Calendly live URL · Supabase form · testimonials when 2+ quotes |
| Conversion sign-off | [homepage-conversion-flow.md](./homepage-conversion-flow.md) |

#### Wireframe v3 exit checklist (sync with page-briefs)

- [x] Homepage: v1 sections mapped (includes `#why-order`; no testimonials; `#tools` present)
- [x] Work: grid + card hover states documented
- [x] Case study: 8-block template documented
- [x] Services: 2 packages + add-ons + FAQ
- [x] About: 6 sections
- [x] Journal: index + article template
- [x] Contact: Calendly + form layout
- [x] 404: recovery layout
- [x] Global header/footer on all pages
- [x] No open layout questions
- [x] Design + content + conversion review complete

**Authority:** [wireframes-v3/README.md](./wireframes-v3/README.md) · regenerate via `node scripts/promote-wireframes-v3.mjs`

---

## Stage 1 — Mid-fi (bulk of the build)

**Purpose:** Real site in Next.js — Studio Kitchen tokens (paper + ink + heat), all sections, all routes, locked copy, red hero + cream body. **Experience tier intentionally thin.**

### Tech stack mapping (mid-fi)

| Layer | Technology | Repository path | Mid-fi scope |
|-------|------------|-----------------|--------------|
| Framework | Next.js 14 App Router | `app/` | Server Components default |
| Language | TypeScript | `*.ts`, `*.tsx` | Strict |
| Styling | Tailwind 3 + CSS variables | `app/globals.css`, `tailwind.config.ts` | Monochrome tokens |
| UI primitives | shadcn/ui + Radix + CVA | `components/ui/` | Remap buttons, inputs, cards |
| Layout | Container, Navbar, Footer | `components/layout/` | Token spec + nav order fix |
| Sections | Homepage + page headers | `components/sections/` | One file per homepage section |
| Content | Static TS / MDX stubs | `lib/content/`, `content/journal/` | Locked copy |
| Images | next/image | `brand_assets/hero/` | Poster + mobile crop |
| Motion | Framer Motion (minimal) | `components/animations/motion-wrapper.tsx` | Section fade-in only |
| **Excluded** | GSAP, Lenis, Spline, hero video | — | Stub or omit |

### Mid-fi implementation slices (order)

#### Slice 1 — Foundation

| Task | File |
|------|------|
| Extend Tailwind colors/fonts | `tailwind.config.ts` |
| Replace violet CSS vars | `app/globals.css` |
| Halftone + grain utilities | `app/globals.css` |
| Load Space Grotesk, Inter, JetBrains Mono | `app/layout.tsx` |
| SEO site config | `lib/site.ts` from [seo-page-map.md](./seo-page-map.md) |

#### Slice 2 — Global chrome

| Task | File |
|------|------|
| Nav order: Work · About · Services · Journal · Contact | `components/layout/navbar.tsx` |
| Book a Call -> `/contact#book` | `components/layout/navbar.tsx` |
| Scroll state (client island) | `components/layout/navbar.tsx` |
| Footer columns, newsletter shell, legal | `components/layout/footer.tsx` |

#### Slice 3 — Homepage

| Section | Component (create) |
|---------|-------------------|
| Hero (poster L0 + scrim + copy) | `components/sections/hero.tsx` |
| Trust strip | `components/sections/trust-strip.tsx` |
| Selected work (Option B) | `components/sections/selected-work.tsx` |
| Process | `components/sections/process.tsx` |
| Tools | `components/sections/tools-showcase.tsx` |
| Final CTA | `components/sections/final-cta.tsx` |
| Compose | `app/page.tsx` |

#### Slice 4 — Inner pages

| Route | File |
|-------|------|
| `/work` | `app/work/page.tsx` |
| `/work/by-jawad` | `app/work/[slug]/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/journal` | `app/journal/page.tsx` |
| `/journal/[slug]` | `app/journal/[slug]/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/404` | `app/not-found.tsx` |

Use `components/sections/page-header.tsx` for inner page heroes.

#### Slice 5 — Content data

| Data | File |
|------|------|
| Work projects (By Jawad + coming soon) | `lib/content/work.ts` |
| Process steps | `lib/content/process.ts` |
| Tools list | `lib/content/tools.ts` |
| Journal stubs | `content/journal/*.mdx` |

### Mid-fi file conventions

```
components/sections/     # Homepage + reusable section blocks
lib/content/             # Static content modules
docs/wireframes-v1/      # Low-fi v1 HTML (not deployed)
docs/wireframes-v2/      # Interaction annotations
docs/wireframes-v3/      # Approved handoff
```

### Mid-fi exit checklist

- [ ] All routes render at 375px and 1200px with locked copy
- [ ] Marketing UI uses v2 accent tiers only (no violet `--primary`, no unapproved chromatic)
- [ ] Screenshot compare passes vs wireframe v3
- [ ] Lighthouse accessibility baseline pass
- [ ] `npm run build` succeeds
- [ ] Hero uses `spaceman-grab-poster.webp` (not placeholder gradients)

### Known scaffold gaps (fix in slice 1–3)

| File | Issue |
|------|-------|
| `app/globals.css` | Violet `--primary` / `--brand` |
| `tailwind.config.ts` | Missing ink/neutral/surface |
| `lib/site.ts` | Generic placeholder metadata |
| `components/sections/hero.tsx` | Wrong copy + chromatic gradients |
| `components/layout/navbar.tsx` | Wrong CTA style; missing scroll behavior |

---

## Stage 2 — Hi-fi (experience tier)

**Purpose:** Studio Kitchen visual craft (TBD) — motion, illustration, bold type. Copy locked per [voice-and-copy-framework.md](./voice-and-copy-framework.md). Backend may remain stubbed.

### Tech stack mapping (hi-fi)

| Capability | Tool | Repository path |
|------------|------|-----------------|
| Smooth scroll | Lenis | `components/animations/lenis-provider.tsx` |
| Scroll scenes | GSAP + ScrollTrigger | `components/animations/gsap-provider.tsx` |
| Micro-interactions | Framer Motion | Section + card components |
| 3D accent | Spline | `components/3d/spline-placeholder.tsx` |
| Hero video | HTML video + poster fallback | `components/sections/hero.tsx` |
| Texture | SVG halftone + grain | `app/globals.css` utilities |

### Hi-fi work packages (priority)

| # | Package | Details |
|---|---------|---------|
| 1 | Hero immersion | Ken Burns on poster; optional `.webm` swap; scrim tuning; headline pull toward hand |
| 2 | Nav choreography | transparent -> `.nav-blur`; height shrink |
| 3 | Process timeline | GSAP orbit connector; reduced-motion static fallback |
| 4 | Work cards | Halftone image overlay; shadow.1 -> shadow.2 on hover |
| 5 | Tools grid | `surface.elevated` cards; logo SVGs when available |
| 6 | Page motion | Staggered homepage section enter; lighter on inner pages |
| 7 | Spline orbit (optional) | Desktop only; lazy-load; max 1 pointer; off on mobile |

### Motion hard rules

- Animate **only** `transform` and `opacity`
- Never use `transition-all`
- Honor `prefers-reduced-motion: reduce`
- Validate hero contrast: [hero-contrast-qa.md](./hero-contrast-qa.md)

### Hi-fi exit checklist

- [ ] Matches [design-token-showcase.html](./design-token-showcase.html)
- [ ] Hero matches [prototypes/hero-halftone.html](../prototypes/hero-halftone.html)
- [ ] Hero contrast QA passed
- [ ] No CLS from motion or lazy 3D
- [ ] Homepage scroll feels "1% craft"

---

## Stage 3 — Production maturity (almost final website)

**Purpose:** Launch-ready integrations, SEO, performance, and proof content — under **launch content scope** unless explicitly expanded.

### Tech stack mapping (production)

| Area | Tool | Repository path |
|------|------|-----------------|
| Contact persistence | Supabase | `lib/supabase/` |
| Form mutation | Server Actions + Zod | `app/actions/contact.ts`, `lib/validations/contact.ts` |
| Email | Resend | `app/api/contact/route.ts` |
| Booking | Calendly embed | `app/contact/page.tsx` `#book` |
| Journal | MDX + next-mdx-remote | `content/journal/`, `app/journal/[slug]/page.tsx` |
| SEO | Metadata API | Per-route `metadata` / `generateMetadata` |
| Sitemap | `app/sitemap.ts` | From seo-page-map |
| Robots | `app/robots.ts` | — |
| Deploy | Vercel | `.env.local` from `.env.example` |
| Analytics | GA4 or Plausible | Conversion events on hero, book, form |

### Production content upgrades (post-launch scope)

| Asset | Trigger |
|-------|---------|
| Custom monogram | Design ready |
| 3+ client case studies | Expand work grid |
| `#testimonials` section | 2+ authentic quotes |
| Tool logo SVGs | Brand assets folder |
| Hero video loop | `spaceman-grab-headline.webm` in brand_assets |

### Production exit checklist

- [ ] Tokens verified (no mid-fi regressions)
- [ ] Calendly live at `/contact#book`
- [ ] Contact form delivers via Resend
- [ ] Custom monogram replaces interim wordmark
- [ ] Core Web Vitals green on homepage
- [ ] All pages in sitemap with correct metadata
- [ ] JSON-LD where applicable
- [ ] 404 recovery tested
- [ ] Env vars set on Vercel (no secrets in repo)

---

## Tech stack matrix (tool x stage)

| Tool | Wireframe | Mid-fi | Hi-fi | Production |
|------|-----------|--------|-------|------------|
| HTML wireframe specs | Primary | Reference | Reference | Archive |
| Figma (optional) | Optional | — | — | — |
| Next.js 14 | — | Primary | Primary | Primary |
| TypeScript | — | Primary | Primary | Primary |
| Tailwind CSS | — | Primary | Primary | Primary |
| shadcn/ui | — | Primary | Primary | Primary |
| next/image | — | Primary | Primary | Primary |
| Framer Motion | — | Light | Primary | Primary |
| GSAP | — | — | Primary | Primary |
| Lenis | — | — | Primary | Optional |
| Spline | — | — | Optional | Optional |
| Supabase | — | — | — | Primary |
| Resend | — | — | — | Primary |
| MDX | — | Stubs | Stubs | Primary |
| Vercel | — | Preview | Preview | Primary |

---

## Traceability — homepage sections

| Section | ID | Source doc | Mid-fi component | Hi-fi additions | Production |
|---------|-----|------------|------------------|-----------------|------------|
| Navigation | `nav` | portfolio-component-token-spec §1 | `components/layout/navbar.tsx` | Scroll blur/shrink | Calendly on Book CTA |
| Hero | `#hero` | homepage-hero-interaction-audit | `components/sections/hero.tsx` | Video, Spline, Ken Burns | OG image, LCP |
| Trust | `#trust` | homepage-content-hierarchy | `components/sections/trust-strip.tsx` | — | — |
| Work | `#work` | launch-strategy-v1 Option B | `components/sections/selected-work.tsx` | Card motion, halftone | Real case studies |
| Process | `#process` | page-briefs §1.4 | `components/sections/process.tsx` | GSAP timeline | — |
| Tools | `#tools` | launch-strategy-v1 | `components/sections/tools-showcase.tsx` | Logo SVGs | — |
| Final CTA | `#cta` | cta-messaging-matrix | `components/sections/final-cta.tsx` | — | Analytics events |
| Footer | — | ia-sitemap | `components/layout/footer.tsx` | — | Newsletter backend |

---

## Traceability — all routes

| Route | Wireframe v1 file | Mid-fi page | Primary doc |
|-------|-------------------|-------------|-------------|
| `/` | homepage-wireframe-spec.html | `app/page.tsx` | homepage-content-hierarchy |
| `/work` | work-wireframe-v1.html | `app/work/page.tsx` | page-briefs §2 |
| `/work/[slug]` | case-study-wireframe-v1.html | `app/work/[slug]/page.tsx` | ia-sitemap case study |
| `/services` | services-wireframe-v1.html | `app/services/page.tsx` | page-briefs §4 |
| `/about` | about-wireframe-v1.html | `app/about/page.tsx` | About_Page_Copy + page-briefs §5 |
| `/journal` | journal-index-wireframe-v1.html | `app/journal/page.tsx` | page-briefs §6 |
| `/journal/[slug]` | journal-article-wireframe-v1.html | `app/journal/[slug]/page.tsx` | page-briefs §6 |
| `/contact` | contact-wireframe-v1.html | `app/contact/page.tsx` | ia-sitemap Contact |
| `/404` | 404-wireframe-v1.html | `app/not-found.tsx` | ia-sitemap 404 |

---

## Risk register

| Risk | Impact | Mitigation |
|------|--------|------------|
| Wireframe v1/v2/v3 vs launch content scope confusion | Wrong features at wrong stage | Use naming glossary; label files `wireframes-vN/` |
| Building mid-fi before v3 approval | Rework | Gate mid-fi on v3 checklist |
| Spline / video on mobile | Perf + CLS | Desktop-only 3D; poster fallback; reduced motion |
| Missing tool logos | Empty tools grid | Text-only cards in mid-fi; SVGs in hi-fi/production |
| Testimonials deferred but added early | Trust without proof | Launch content scope: 2+ quotes required |
| Violet scaffold tokens | Brand break | Slice 1 foundation before sections |
| Nav link order drift | IA mismatch | Locked: Work · About · Services · Journal · Contact |

---

## Suggested timeline (week-based, no fixed dates)

| Week | Focus | Stage |
|------|-------|-------|
| A | Complete wireframe v1 for all inner routes | 0a |
| B | Wireframe v2 annotations (all routes) | 0b |
| C | Wireframe v3 sign-off + conversion review | 0c |
| D | Mid-fi slices 1–2 (tokens + chrome) | 1 |
| E | Mid-fi slice 3 (homepage) | 1 |
| F | Mid-fi slices 4–5 (inner pages + content) | 1 |
| G | Hi-fi packages 1–4 (hero, nav, process, work) | 2 |
| H | Hi-fi packages 5–7 + QA | 2 |
| I | Production backend + SEO | 3 |
| J | Production assets + deploy + CWV | 3 |

Adjust overlap only after exit checklists pass.

---

## Dev commands (reference)

```bash
npm install
cp .env.example .env.local   # before contact/supabase
npm run dev                  # http://localhost:3000
npm run build
node scripts/export-hero-assets.mjs   # regenerate hero WebP/JPG
```

**Visual verification:**

- Wireframes: open HTML in browser at 375 / 1200 viewport
- Mid-fi / hi-fi: compare to `docs/homepage-wireframe-spec.html` and `docs/design-token-showcase.html`
- Hero: compare to `prototypes/hero-halftone.html`

---

## Related documents

| Document | Role in roadmap |
|----------|-----------------|
| [design-token-system.md](./design-token-system.md) | Canonical tokens |
| [portfolio-component-token-spec.md](./portfolio-component-token-spec.md) | Component mapping |
| [homepage-wireframe-spec.html](./homepage-wireframe-spec.html) | Homepage wireframe v1 (done) |
| [launch-strategy-v1.md](./launch-strategy-v1.md) | Launch content scope |
| [homepage-conversion-flow.md](./homepage-conversion-flow.md) | Funnel + v3 sign-off |
| [README.md](./README.md) | Docs index |

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Initial design-build-roadmap.md — six-stage pipeline, wireframe v1–v3, mid-fi, hi-fi, production |
