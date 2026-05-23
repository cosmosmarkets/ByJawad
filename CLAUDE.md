# CLAUDE.md — By Jawad

Project-specific instructions for Claude and other AI agents in this repo.

## Project summary

Building **Jawad Jalal's portfolio site** — a conversion-focused marketing site for a **landing page and portfolio website specialist**. Brand: **Studio Kitchen** — warm kitchen metaphor · Steak-inspired chunky UI. Visual system: **cream body · red hero/poster · mustard CTAs · Fredoka + Caveat**.

**Primary conversions:** Book a Call · Start an Inquiry  
**Secondary conversions:** See what's cooking (→ `/work`) · View Case Study

---

## Phase: pre-design implementation

Planning and strategy are largely complete. Visual/UI build has not started.

| Complete | Pending |
|----------|---------|
| GitHub repo + Next.js scaffold | Wireframe approval |
| Studio Kitchen voice + copy framework | Token adoption in CSS/Tailwind |
| Studio Kitchen visual direction + tokens | Kitchen hero illustration |
| Locked copy + CTA matrix | Full page implementation |
| IA + page briefs + launch strategy | Client case studies, testimonials, monogram logo |

**Default assumption:** implement from docs; do not invent product direction or new sections. Do not use legacy Mission Control cyan/gold/halftone.

---

## Always read first

Before wireframing, designing, or building UI:

1. [`docs/voice-and-copy-framework.md`](docs/voice-and-copy-framework.md) — canonical voice, metaphor, locked copy
2. [`docs/studio-kitchen-visual-direction.md`](docs/studio-kitchen-visual-direction.md) — visual north star
3. [`docs/design-token-system.md`](docs/design-token-system.md) — tokens + Tailwind snippet
4. [`docs/homepage-content-hierarchy.md`](docs/homepage-content-hierarchy.md) — locked homepage structure + copy
5. [`docs/cta-messaging-matrix.md`](docs/cta-messaging-matrix.md) — locked labels
6. [`docs/ia-sitemap.md`](docs/ia-sitemap.md) — routes and section maps

For visual reference: [`docs/design-token-showcase-v3.html`](docs/design-token-showcase-v3.html) · [`docs/studio-kitchen-hero-prototype.html`](docs/studio-kitchen-hero-prototype.html) · [`docs/homepage-wireframe-spec.html`](docs/homepage-wireframe-spec.html)

Full doc index: [`docs/README.md`](docs/README.md) · v1 constraints: [`docs/launch-strategy-v1.md`](docs/launch-strategy-v1.md)

---

## Brand and design constraints

### Positioning
Agency-level craft. AI-assisted precision. Specialist in **portfolios and landing pages only**. Warm, easy to work with.

### Visual north star
Studio Kitchen — cream paper body, red hero + reservation poster bookends, mustard primary on red, Fredoka + Caveat type, kitchen line art (TBD). See [`docs/studio-kitchen-visual-direction.md`](docs/studio-kitchen-visual-direction.md).

### Color (Studio Kitchen)
- **Paper tier (~70%):** `#FCEAD4` cream · `#FFFFFF` cards
- **Ink tier (~25%):** `#000000` headlines/borders · `#5C4A3A` muted body
- **Heat tier (~5%):** `#E63946` red hero/poster · `#F4B942` mustard CTA on red only
- **No** legacy spectral cyan, flare gold, halftone, or spaceman hero

### Typography
- **Fredoka** — display, headings, nav, CTAs
- **Caveat** — reservation poster script only
- **Inter** — body, forms
- **JetBrains Mono** — kickers in muted gray

### Section labels (locked)
- **My dishes** · **My ingredients** (kicker: The pantry)
- Poster CTA: *Ready to order?* + **PLACE YOUR ORDER**

### Motion
- Hero headline: suffix crossfade `portfolios` ↔ `landing pages` (~4s); static combined line when `prefers-reduced-motion`
- Animate `transform` and `opacity` only; never `transition-all`

---

## Locked homepage copy (do not rewrite)

```
Kicker:      Portfolio & landing page studio
Headline:    The kitchen for mouth-watering [portfolios | landing pages]  (suffix rotates)
Subheadline: I design and build portfolio websites and landing pages that look
             incredible and convert — for creatives, founders, and brands.
Audience:    Creative freelancers · SaaS founders · Brands & agencies
Primary:     Place your order      → /contact
Secondary:   See what's cooking    → /work
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
brand_assets/  hero images (legacy spaceman — kitchen art TBD)
docs/          strategy, tokens, wireframes — source of truth
prototypes/    local HTML experiments
```

---

## Known scaffold mismatches (fix during build)

The codebase is a starter scaffold, not the final design:

- `app/globals.css` — still uses violet `--primary`; replace with Studio Kitchen tokens from design-token-system.md
- `tailwind.config.ts` — not yet extended with paper/ink/heat tokens
- `app/layout.tsx` — still DM Sans + Instrument Serif; wire Fredoka, Caveat, Inter, JetBrains Mono
- `lib/site.ts` — generic placeholder metadata; align with locked SEO copy in page briefs
- `app/page.tsx` — placeholder section; replace with locked homepage hierarchy + hero rotation

When implementing, adopt voice/copy first, then visual tokens when regenerated.

---

## Hard rules

- Do not add sections, pages, or copy not in `docs/`
- Do not use retired space/mission copy (orbit, Explore Missions, etc.)
- Do not implement legacy Mission Control visual tokens until Studio Kitchen regen
- Do not use `transition-all` or default Tailwind blue/indigo
- Do not reorder homepage sections (proof-first order is locked)
- Do not commit unless explicitly asked
- Do not create new docs unless explicitly asked
- Minimize scope — focused diffs only

---

## Quick links

| Need | File |
|------|------|
| Voice + locked copy | `docs/voice-and-copy-framework.md` |
| CTA labels | `docs/cta-messaging-matrix.md` |
| Homepage sections | `docs/homepage-content-hierarchy.md` |
| Legacy tokens (regen pending) | `docs/design-token-system.md` |
| Component build spec | `docs/portfolio-component-token-spec.md` |
| All page content | `docs/page-briefs.md` |
| Conversion rationale | `docs/homepage-conversion-flow.md` |
| SEO titles/descriptions | `docs/seo-page-map.md` |
