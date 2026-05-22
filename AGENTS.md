# AGENTS.md — By Jawad

Persistent context for AI agents working in this repository.

## What we are building

**Jawad Jalal's portfolio and lead-generation site** for a specialist who designs and builds **landing pages and portfolio websites** for creatives, SaaS founders, and brands.

| Attribute | Value |
|-----------|-------|
| Brand direction | **Cinematic Mission** — editorial print meets mission-control UI |
| Visual system | **Dark-first · strict monochrome · editorial halftone** (black/white only in marketing UI) |
| Business goal | Convert visitors into **booked calls** or **project inquiries** |
| 3-second emotion | *"This person is operating at a different level."* |

**Positioning (locked):** Agency-level output with AI-assisted precision. Jawad only builds portfolios and landing pages — the two highest-stakes pages on the internet.

---

## Current project phase

| Done | Not done yet |
|------|--------------|
| Next.js 14 scaffold pushed to GitHub | Full visual design / UI implementation |
| Design token system documented | Design tokens wired into Tailwind / `globals.css` |
| Copy framework + CTA matrix locked | Wireframes finalized and approved |
| IA sitemap + page briefs | Case studies, testimonials, tool logos |
| Homepage content hierarchy + v1 wireframe spec | Custom monogram logo file |
| Tier 2 launch strategy locked | Client case studies, testimonials |
| Hero halftone poster assets (`brand_assets/hero/`) | Hero video loop (Phase 2), Spline orbit (optional) |
| HTML prototypes + wireframe specs in `docs/` | Production homepage sections beyond scaffold |

**You are pre-build.** The app is a scaffold with placeholder content. Do not invent new sections, copy, or brand colors. Implement from the docs — do not freestyle the product direction.

---

## Source of truth (read before UI work)

Consult these in order when planning or building:

| Priority | Document | Purpose |
|----------|----------|---------|
| 1 | [`docs/design-token-system.md`](docs/design-token-system.md) | Colors, type, spacing, motion, halftone effects |
| 2 | [`docs/homepage-content-hierarchy.md`](docs/homepage-content-hierarchy.md) | Locked homepage sections, copy blocks, schemas |
| 3 | [`docs/cta-messaging-matrix.md`](docs/cta-messaging-matrix.md) | Locked labels and CTA destinations |
| 4 | [`docs/ia-sitemap.md`](docs/ia-sitemap.md) | Routes, section maps, global chrome |
| 5 | [`docs/page-briefs.md`](docs/page-briefs.md) | Per-page content requirements |
| 6 | [`docs/homepage-conversion-flow.md`](docs/homepage-conversion-flow.md) | Funnel goals and proof-first rationale |
| 7 | [`docs/portfolio-component-token-spec.md`](docs/portfolio-component-token-spec.md) | Component → token mapping for build |
| 8 | [`docs/design-token-showcase.html`](docs/design-token-showcase.html) | Visual token reference (open in browser) |
| 9 | [`docs/homepage-wireframe-spec.html`](docs/homepage-wireframe-spec.html) | Low-fi wireframe frames |
| 10 | [`docs/hero-prototype.html`](docs/hero-prototype.html) | Hero layer stack + halftone reference |
| — | [`docs/launch-strategy-v1.md`](docs/launch-strategy-v1.md) | v1 constraints: pricing, Option B work, deferred sections |

Supporting: [`docs/seo-page-map.md`](docs/seo-page-map.md) · [`docs/homepage-hero-interaction-audit.md`](docs/homepage-hero-interaction-audit.md) · [`docs/hero-contrast-qa.md`](docs/hero-contrast-qa.md)

---

## Site map

```
/                           Homepage (The Pitch)
├── /work                   Work index (The Proof)
│   └── /work/[slug]        Case study detail
├── /services               Services (The Offer)
├── /about                  About (The Person)
├── /journal                Journal index (The Authority)
│   └── /journal/[slug]     Article detail
├── /contact                Contact (The Conversion)
└── /404                    Error recovery
```

**Global primary CTA:** Book a Call → `/contact#book`  
**Global secondary CTA:** Start an Inquiry → `/contact`

---

## Homepage structure (locked — v1 proof-first)

Do not reorder without explicit instruction:

```
nav → hero → trust → work → process → tools → cta → footer
```

**v1 constraints:** Option B work (1 live project + coming soon) · No testimonials · Trust strip is copy-only · Tools in `#tools` section.

Services snapshot is **not** on the homepage. Use a text bridge: `View Services` → `/services`.

**Starter pricing:** Portfolio £500–1k · Landing pages £1k–3k (see `docs/launch-strategy-v1.md`).

**Logo:** Interim wordmark "Jawad" until monogram ready.

**Locked hero copy:**

| Element | Copy |
|---------|------|
| Kicker | Orbit-ready web design |
| Headline | Landing pages. Out of this world. |
| Subheadline | I design and build high-converting landing pages, portfolio websites, and modern web experiences for brands and creators. |
| Primary CTA | Launch Your Website → `/contact` |
| Secondary CTA | Explore Missions → `/work` |

---

## Design system rules (non-negotiable)

### Color
- **0% chromatic accent** in marketing UI — no violet SaaS palette, no Tailwind default blue/indigo
- Core: `ink.white` `#FAFAFA` · `ink.black` `#000000`
- Surfaces: `#000000` base · `#0A0A0A` elevated · `#141414` floating
- Semantic colors (success, error, warning, info) **only** for forms and system feedback

### Typography
- **Display / headings:** Space Grotesk
- **Body:** Inter
- **Kickers / metadata:** JetBrains Mono in `neutral.400` — never colored

### Effects
- Halftone dot texture at section edges and on images
- SVG grain overlay (~3% opacity)
- Pure black-alpha shadows only

### Motion
- Animate **only** `transform` and `opacity`
- Never use `transition-all`
- Respect `prefers-reduced-motion`

### CTAs (dark-first)
- Primary: white fill `#FAFAFA` · black label `#000000` · hover `#E5E5E5`
- Focus: `2px solid #FAFAFA` outline, `2px` offset

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion, GSAP + ScrollTrigger, Lenis |
| Content | MDX in `content/journal/` |
| Backend | Supabase, Resend (contact) |

### Dev commands

```bash
npm install
cp .env.example .env.local   # fill keys before contact/supabase features
npm run dev                  # http://localhost:3000
```

### Key directories

```
app/              Routes and pages
components/       ui, layout, sections, animations, forms, 3d
lib/              utils, supabase, validations, site config
content/          MDX journal posts
brand_assets/     Real brand images (check here before placeholders)
docs/             Strategy, tokens, copy, wireframes, prototypes
prototypes/       Local HTML experiments (not deployed)
scripts/          Asset tooling (e.g. export-hero-assets.mjs)
```

---

## Brand assets

Check `brand_assets/` before using placeholders.

**Hero (ready):** `brand_assets/hero/spaceman-grab-poster.webp` (+ mobile, @2x, JPG fallbacks)  
**Composition:** Spaceman anchors **right**; headline + CTAs sit **left**.  
**Regenerate:** `node scripts/export-hero-assets.mjs`

**Still needed for launch:** logo/monogram, tool logos (6–8), project screenshots, testimonial photos, case study content.

---

## Implementation gaps (do not ignore)

The scaffold predates the token system. When implementing design:

1. Replace generic shadcn violet `--primary` in `app/globals.css` with monochrome tokens from `docs/design-token-system.md`
2. Extend `tailwind.config.ts` per the Tailwind snippet in the design token doc
3. Update `lib/site.ts` copy to match locked messaging (currently generic placeholder)
4. Build homepage sections per `docs/homepage-content-hierarchy.md`, not the current placeholder in `app/page.tsx`

---

## Agent workflow

### Before wireframing
- Read homepage content hierarchy + conversion flow + wireframe spec HTML
- Use existing hero assets and halftone direction — do not introduce color accents

### Before building UI
- Read design token system + component token spec
- Match prototypes in `docs/hero-prototype.html` and `prototypes/hero-halftone.html` for hero behavior
- Use locked copy from CTA matrix — do not rewrite headlines

### Before adding sections or pages
- Check IA sitemap and page briefs — if it's not listed, don't add it

### Scope discipline
- Minimize diff; match existing code conventions in `components/` and `app/`
- Do not commit unless explicitly asked
- Do not create new markdown docs unless asked

---

## Decision filters (apply to every design choice)

1. Does this feel like 1% craft?
2. Does it support conversion (CTA hierarchy readable in 3s)?
3. Would an art director stop scrolling?
4. Is it monochrome in marketing UI?
5. Is it documented in `docs/`?

If any answer is no, stop and consult the relevant doc.
