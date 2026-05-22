# CLAUDE.md — By Jawad

Project-specific instructions for Claude and other AI agents in this repo.

## Project summary

Building **Jawad Jalal's portfolio site** — a conversion-focused marketing site for a **landing page and portfolio website specialist**. Brand: **Cinematic Mission**. Visual: **dark-first, strict black-and-white monochrome with editorial halftone texture**. Space/cosmic is conveyed through contrast and texture, not nebula colors.

**Primary conversions:** Book a Call · Start an Inquiry  
**Secondary conversions:** Explore Missions (→ `/work`) · View Case Study

---

## Phase: pre-design implementation

Planning and strategy are largely complete. Visual/UI build has not started.

| Complete | Pending |
|----------|---------|
| GitHub repo + Next.js scaffold | Wireframe approval |
| Design token system (documented) | Token adoption in CSS/Tailwind |
| Locked copy + CTA matrix | Full page designs |
| IA + page briefs + v1 wireframe + launch strategy | Client case studies, testimonials, monogram logo |
| Hero halftone poster assets | Hero video (Phase 2) |

**Default assumption:** implement from docs; do not invent product direction, new sections, or chromatic brand colors.

---

## Always read first

Before wireframing, designing, or building UI:

1. [`docs/design-token-system.md`](docs/design-token-system.md) — canonical tokens
2. [`docs/homepage-content-hierarchy.md`](docs/homepage-content-hierarchy.md) — locked homepage structure + copy
3. [`docs/cta-messaging-matrix.md`](docs/cta-messaging-matrix.md) — locked labels
4. [`docs/ia-sitemap.md`](docs/ia-sitemap.md) — routes and section maps

For visual reference: [`docs/design-token-showcase.html`](docs/design-token-showcase.html) · [`docs/homepage-wireframe-spec.html`](docs/homepage-wireframe-spec.html) · [`docs/hero-prototype.html`](docs/hero-prototype.html)

Full doc index: [`docs/README.md`](docs/README.md) · v1 constraints: [`docs/launch-strategy-v1.md`](docs/launch-strategy-v1.md)

---

## Brand and design constraints

### Positioning
Agency-level craft. AI-assisted precision. Specialist in **portfolios and landing pages only**.

### Visual north star
Editorial print meets mission-control UI — Swiss poster restraint, halftone dot texture, typographic authority.

### Color (strict)
- Marketing UI: **monochrome only** — `#FAFAFA` ink white, `#000000` ink black, true-gray neutrals
- **No chromatic primary** — no indigo/violet/blue Tailwind defaults, no colored kickers
- Semantic colors only for form validation and system feedback

### Typography
- **Space Grotesk** — display, headings, nav, CTAs
- **Inter** — body, forms, FAQ
- **JetBrains Mono** — kickers, stats, metadata (uppercase, muted)

### Signature effects
- Halftone SVG dot patterns (corners, hero bands, image overlays)
- Film grain (~3% opacity)
- Layered neutral surfaces: base → elevated → floating
- Black-alpha shadows only

### Motion
- Animate `transform` and `opacity` only
- Never `transition-all`
- Honor `prefers-reduced-motion: reduce`

### Hero (locked layout)
- L0: `brand_assets/hero/spaceman-grab-poster.webp` (spaceman **right**, hand reaches **left**)
- L3 content column **left**: kicker → headline → subhead → audience → CTAs
- Optional Phase 2: video loop · optional Spline orbit in left void
- See [`docs/homepage-hero-interaction-audit.md`](docs/homepage-hero-interaction-audit.md)

---

## Locked homepage copy (do not rewrite)

```
Kicker:      Orbit-ready web design
Headline:    Landing pages. Out of this world.
Subheadline: I design and build high-converting landing pages, portfolio websites,
             and modern web experiences for brands and creators.
Audience:    Creative freelancers · SaaS founders · Brands & agencies
Primary:     Launch Your Website  → /contact
Secondary:   Explore Missions     → /work
```

**Section order (v1):** nav → hero → trust → work → process → tools → cta → footer

**v1:** Option B work (By Jawad + coming soon) · No testimonials · Pricing £500–1k / £1k–3k · Interim wordmark logo

---

## Stack and development

```bash
npm install
cp .env.example .env.local
npm run dev    # http://localhost:3000
```

| Tech | Usage |
|------|-------|
| Next.js 14 App Router | Pages in `app/` |
| TypeScript | Strict typing |
| Tailwind + shadcn/ui | Components in `components/ui/` |
| Framer Motion, GSAP, Lenis | Animation providers in `components/animations/` |
| MDX | Journal posts in `content/journal/` |
| Supabase + Resend | Contact backend |

### Structure

```
app/           work, services, about, journal, contact, api
components/    ui, layout, sections, animations, forms, 3d
lib/           site config, supabase, validations
brand_assets/  hero images (use real assets, not placeholders)
docs/          strategy, tokens, wireframes — source of truth
prototypes/    local HTML experiments
```

---

## Known scaffold mismatches (fix during build)

The codebase is a starter scaffold, not the final design:

- `app/globals.css` — still uses violet `--primary` / `--brand`; replace with tokens from design-token-system
- `tailwind.config.ts` — not yet extended with ink/neutral/surface tokens
- `lib/site.ts` — generic placeholder metadata; align with locked SEO copy in page briefs
- `app/page.tsx` — placeholder section; replace with locked homepage hierarchy

When implementing, adopt tokens first, then build sections to spec.

---

## Frontend craft rules

When designing or building (no reference wireframe yet):

- Check `brand_assets/` before using placeholder images
- Pair display + body fonts (already defined above — do not swap arbitrarily)
- Every interactive element needs hover, focus-visible, and active states
- Use intentional spacing from the 4px token scale — not random Tailwind steps
- Primary CTA: white fill, black text on dark backgrounds
- Images: halftone overlay + gradient scrim where specified in token doc

When a wireframe or prototype HTML exists in `docs/`, **match it** — do not improve or add sections.

### Visual verification

- Run `npm run dev` and verify at `http://localhost:3000`
- Compare against `docs/homepage-wireframe-spec.html` and token showcase
- For hero: compare against `prototypes/hero-halftone.html`

---

## Hard rules

- Do not add sections, pages, or copy not in `docs/`
- Do not use chromatic accents in marketing UI
- Do not use `transition-all` or default Tailwind blue/indigo
- Do not reorder homepage sections (proof-first order is locked)
- Do not commit unless explicitly asked
- Do not create new docs unless explicitly asked
- Minimize scope — focused diffs only

---

## Quick links

| Need | File |
|------|------|
| Token values + CSS vars | `docs/design-token-system.md` |
| Component build spec | `docs/portfolio-component-token-spec.md` |
| All page content | `docs/page-briefs.md` |
| CTA labels | `docs/cta-messaging-matrix.md` |
| Conversion rationale | `docs/homepage-conversion-flow.md` |
| SEO titles/descriptions | `docs/seo-page-map.md` |
| Hero assets | `brand_assets/hero/README.md` |
