# Portfolio Component Token Specification

**Brand:** Jawad Jalal · Portfolio & Landing Page Specialist  
**Direction:** Dark-first · Strict monochrome · Editorial halftone  
**Last updated:** May 2026  
**Sources:** [design-token-system.md](./design-token-system.md) · [design-token-showcase.html](./design-token-showcase.html) · [ia-sitemap.md](./ia-sitemap.md) · [page-briefs.md](./page-briefs.md)

---

## Purpose

This document maps portfolio UI components to the **canonical design token architecture**. It translates component brief requirements (including Kimi.ai–generated layout notes) into tokens that exist in the system today.

**Naming rule:** All mappings use dot notation (`color.neutral.600`). Where a brief uses Tailwind-style `primary-*` aliases, see [Semantic alias reference](#semantic-alias-reference) — the live system has **no chromatic primary**; emphasis uses `color.ink.*` and contrast.

---

## Semantic alias reference

| Brief term (generic) | Canonical token (this system) | Notes |
|----------------------|-------------------------------|-------|
| `primary-900` | `color.text.primary` (dark) · `color.ink.black` (light) | Headlines, maximum contrast |
| `primary-600` | `color.ink.white` | Primary CTA fill, link hover emphasis |
| `primary-500` | `color.ink.white` | Input focus ring / border emphasis |
| `primary-400` | `color.text.secondary` → hover `color.ink.white` | Footer link hover |
| `primary` button | `.btn-primary` → `color.ink.white` / `color.ink.black` | White fill, black label (dark-first) |
| Ghost button | `.btn-ghost` or `.btn-secondary` | Ghost = subtle fill; secondary = outline |

---

## Global conventions

| Concern | Token / rule |
|---------|----------------|
| Theme default | `data-theme="dark"` · `color.surface.base` |
| Content width | `layout.content-max` (1280px) |
| Horizontal padding | `space.6` (24px) — matches `layout.grid.gutter` |
| Section vertical rhythm | `layout.section-y.desktop` / `.tablet` / `.mobile` |
| Motion | `motion.duration.150` hover · `motion.duration.300` enter · `motion.easing.default` / `.enter` |
| Motion constraint | Animate **only** `transform` and `opacity` — never `transition-all` |
| Reduced motion | Respect `prefers-reduced-motion: reduce` (showcase pattern) |

**Showcase class map:** `.nav-blur` · `.btn-primary` · `.btn-secondary` · `.btn-ghost` · `.input-field` · `.card-hover` · `.kicker-mono` · `.type-display` · `.type-body-lg` · `.type-small` · `.type-caption`

---

## 1. Navigation

**Component ID:** `GlobalNav` · **IA links:** Work · Services · About · Journal · Contact · **Primary CTA:** Book a Call → `/contact`

### 1.1 Component parts

| Part | Role |
|------|------|
| `nav.container` | Fixed header shell |
| `nav.logo` | Wordmark or monogram |
| `nav.links` | Desktop inline links |
| `nav.cta` | Primary header button |
| `nav.mobileToggle` | Hamburger control (3 lines → X) |
| `nav.mobilePanel` | Full-screen or drawer menu (mobile) |

### 1.2 Token mapping

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `nav.container` | height | `space.16` | 64px |
| `nav.container` | max-width | `layout.content-max` | 1280px |
| `nav.container` | padding-x | `space.6` | 24px |
| `nav.container` | padding-y | `space.4` | 16px (centers 64px with logo/links) |
| `nav.container` | position | — | `fixed` · `top-0` · `z-50` |
| `nav.container` | border-bottom (scrolled) | `color.border.subtle` | `#262626` |
| `nav.container` | background (default) | transparent | No fill at page top |
| `nav.container` | background (scrolled) | `color.surface.overlay` + `effect.blur.nav` | `rgba(0,0,0,0.72)` + `backdrop-filter: blur(12px)` — class `.nav-blur` |
| `nav.container` | background (light theme scrolled) | `color.neutral.50` @ 80% + `effect.blur.nav` | Brief: `neutral-50/80` — use `rgba(250,250,250,0.8)` when `data-theme="light"` |
| `nav.logo` | font-family | `font.display` | Syne |
| `nav.logo` | font-size | `font.size.h4` | 24px (or `text-lg` equivalent) |
| `nav.logo` | font-weight | — | 700 |
| `nav.logo` | color | `color.ink.white` | Dark-first wordmark |
| `nav.logo` | letter-spacing | — | −0.02em (display rule) |
| `nav.links` | font-family | `font.display` | Syne |
| `nav.links` | font-size | `font.size.small` | 14px |
| `nav.links` | color (default) | `color.neutral.600` | `#525252` — brief: neutral-600 |
| `nav.links` | color (hover) | `color.ink.white` | Brief: primary-600 hover → ink emphasis |
| `nav.links` | color (active) | `color.ink.white` | Current route |
| `nav.links` | transition | `motion.duration.150` · `motion.easing.default` | `color` only |
| `nav.cta` | component class | `.btn-primary` | — |
| `nav.cta` | background | `color.ink.white` | Brief: primary-600 background |
| `nav.cta` | color (text) | `color.ink.black` | Brief: white text → inverted on dark (black label) |
| `nav.cta` | border-radius | `radius.md` | 8px (`rounded-lg` in showcase) |
| `nav.cta` | padding | `space.5` × `space.2` | 20px × 8px (showcase: `px-5 py-2`) |
| `nav.mobileToggle` | size | `space.6` | 24px touch target minimum `space.10` (40px) |
| `nav.mobileToggle` | bar color | `color.ink.white` | 3 lines |
| `nav.mobileToggle` | animation | `motion.duration.300` · `motion.easing.enter` | Lines → X via `transform` + `opacity` |
| `nav.mobilePanel` | background | `color.surface.floating` | `#141414` |
| `nav.mobilePanel` | blur overlay | `effect.blur.overlay` | 20px blur if modal scrim |
| `nav.mobilePanel` | border | `color.border.subtle` | — |

### 1.3 Interaction states

| State | Behavior | Tokens |
|-------|----------|--------|
| Default (top) | Transparent nav, no border | — |
| Scrolled | Backdrop + bottom border | `effect.blur.nav` · `color.surface.overlay` · `color.border.subtle` |
| Link hover | Color lift | `color.neutral.600` → `color.ink.white` · `motion.duration.150` |
| Link focus-visible | Outline | `2px solid color.ink.white` · `2px` offset |
| CTA hover | Fill lighten | `color.neutral.200` (`#E5E5E5`) · `transform: translateY(-1px)` |
| CTA focus-visible | Outline | `2px solid color.ink.white` · `2px` offset |
| Mobile open | Panel + scrim | `effect.blur.overlay` · `motion.duration.300` · `motion.easing.enter` |

### 1.4 Responsive notes

| Breakpoint | Behavior | Tokens |
|------------|----------|--------|
| Desktop (≥1024px) | Inline links + CTA | `space.8` gap between links |
| Tablet (768–1023px) | Same or collapse per IA | `space.6` padding |
| Mobile (<768px) | Hamburger only; links in panel | Hide `nav.links`; show `nav.mobileToggle` |

### 1.5 Implementation note

Reference: [design-token-showcase.html](./design-token-showcase.html) lines 161–174 — `.nav-blur` · `border-neutral-800` → `color.border.subtle` · link hover `text-ink-white`.

---

## 2. Hero section

**Component ID:** `Hero` · **Section anchor:** `#hero`

### 2.1 Component parts

| Part | Role |
|------|------|
| `hero.container` | Full-width section shell |
| `hero.background` | Gradient, grain, halftone, optional 3D |
| `hero.kicker` | Mono uppercase label |
| `hero.headline` | Display headline |
| `hero.subheadline` | Supporting body copy |
| `hero.ctaGroup` | Primary + ghost CTAs |
| `hero.socialProof` | Trust line / stats |

### 2.2 Token mapping

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `hero.container` | padding-y | `layout.section-y.desktop` / `.tablet` / `.mobile` | 120 / 80 / 48px |
| `hero.container` | padding-top offset | `space.16` + section padding | Clear fixed nav (64px) |
| `hero.container` | max-width | `layout.content-max` | 1280px |
| `hero.container` | padding-x | `space.6` | 24px |
| `hero.background` | base | `color.surface.base` | `#000000` |
| `hero.background` | gradient | `effect.gradient.subtle` | Radial 2% white at top — class `.hero-bg` |
| `hero.background` | texture | `effect.grain` | 3% SVG noise — class `.grain` |
| `hero.background` | halftone accent | `effect.halftone.hero` | 8px pitch · 12% opacity · corner/edge |
| `hero.background` | optional 3D | — | Out of token scope; keep `surface.base` fallback |
| `hero.kicker` | component class | `.kicker-mono` | — |
| `hero.kicker` | font-family | `font.mono` | JetBrains Mono |
| `hero.kicker` | font-size | `font.size.caption` | 12px |
| `hero.kicker` | color | `color.text.secondary` | `#A3A3A3` |
| `hero.kicker` | letter-spacing | — | 0.12em · uppercase |
| `hero.headline` | component class | `.type-display` | — |
| `hero.headline` | font-family | `font.display` | Syne |
| `hero.headline` | font-size | `font.size.display` | clamp(3.25rem, 9vw, 6rem) |
| `hero.headline` | font-weight | — | 800 |
| `hero.headline` | line-height | — | 0.95 |
| `hero.headline` | letter-spacing | — | −0.02em |
| `hero.headline` | color | `color.text.primary` | Brief: primary-900 → `#FAFAFA` dark |
| `hero.subheadline` | component class | `.type-body-lg` | — |
| `hero.subheadline` | font-size | `font.size.body-lg` | 20px |
| `hero.subheadline` | line-height | — | 1.5 |
| `hero.subheadline` | color | `color.neutral.600` | `#525252` — brief: neutral-600 |
| `hero.subheadline` | max-width | — | ~42rem (`max-w-2xl`) |
| `hero.ctaGroup` | gap | `space.4` | 16px |
| `hero.cta.primary` | class | `.btn-primary` | Launch Your Website |
| `hero.cta.primary` | fill / text | `color.ink.white` / `color.ink.black` | — |
| `hero.cta.primary` | radius | `radius.md` | 8px |
| `hero.cta.primary` | padding | `space.8` × `space.3` | 32px × 12px |
| `hero.cta.ghost` | class | `.btn-ghost` | Explore Missions / secondary path |
| `hero.cta.ghost` | background | `rgba(250,250,250,0.06)` | Maps to subtle ink on elevated surface |
| `hero.cta.ghost` | border | `color.border.subtle` | — |
| `hero.cta.ghost` | color | `color.text.secondary` → hover `color.ink.white` | — |
| `hero.socialProof` | font-size | `font.size.small` | 14px |
| `hero.socialProof` | color | `color.neutral.500` | `#737373` |
| `hero.socialProof` | font-family | `font.mono` (optional) | Stats / trust strip |

### 2.3 Interaction states

| State | Behavior | Tokens |
|-------|----------|--------|
| CTA primary hover | Lift + lighter fill | `color.neutral.200` · `motion.duration.150` |
| CTA ghost hover | Brighter fill | `rgba(250,250,250,0.1)` · `color.ink.white` text |
| Halftone | Decorative only | `pointer-events: none` |

### 2.4 Responsive notes

| Breakpoint | Headline | Section padding |
|------------|----------|-----------------|
| Mobile | `font.size.display` clamp min | `layout.section-y.mobile` |
| Tablet | clamp mid | `layout.section-y.tablet` |
| Desktop | clamp max | `layout.section-y.desktop` |

### 2.5 Implementation note

Reference: showcase hero section lines 177–188 · locked copy specimen 308–313. CTAs per [cta-messaging-matrix.md](./cta-messaging-matrix.md): primary **Launch Your Website** → `/contact`.

---

## 3. Project card

**Component ID:** `ProjectCard` · **Context:** Selected work grid (`#work`)

### 3.1 Component parts

| Part | Role |
|------|------|
| `card.container` | Article wrapper |
| `card.media` | Full-bleed thumbnail |
| `card.overlay` | Gradient + halftone on image |
| `card.category` | Mono uppercase label |
| `card.year` | Mono year metadata |
| `card.title` | Project name (reveals on hover) |
| `card.attribution` | Optional “Generated by Kimi.ai” line |

### 3.2 Token mapping

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `card.container` | background | `color.surface.elevated` | `#0A0A0A` |
| `card.container` | border | `color.border.subtle` | `#262626` |
| `card.container` | border-radius | `radius.lg` | 12px outer shell |
| `card.container` | shadow (default) | `shadow.1` | Resting elevation |
| `card.container` | shadow (hover) | `shadow.2` | Increased on hover |
| `card.container` | transition | `motion.duration.300` · `motion.easing.enter` | class `.card-hover` |
| `card.media` | layout | edge-to-edge | `overflow-hidden` · no horizontal padding on image |
| `card.media` | border-radius | `radius.none` | 0px on image (full-bleed) |
| `card.media` | object-fit | — | `cover` |
| `card.media` | filter (optional) | — | `grayscale` for monochrome system |
| `card.overlay` | gradient | `effect.image-overlay` | `linear-gradient(to top, rgba(0,0,0,0.65), transparent)` |
| `card.overlay` | halftone | `effect.halftone.image` | `soft-light` on thumbnail |
| `card.category` | font-family | `font.mono` | JetBrains Mono |
| `card.category` | font-size | `font.size.caption` | 12px |
| `card.category` | text-transform | — | uppercase |
| `card.category` | letter-spacing | — | 0.12em (`tracking-wider`) |
| `card.category` | color | `color.ink.white` | Brief: primary-600 → ink emphasis (no chromatic accent) |
| `card.year` | font-family | `font.mono` | — |
| `card.year` | font-size | `font.size.caption` | 12px |
| `card.year` | color | `color.neutral.500` | `#737373` |
| `card.title` | font-family | `font.display` | Syne |
| `card.title` | font-size | `font.size.h4` | 24px |
| `card.title` | font-weight | — | 600 |
| `card.title` | color | `color.ink.white` | — |
| `card.title` | position | bottom-left overlay | `absolute` · `bottom` · `left` · `space.6` inset |
| `card.attribution` | font-size | `font.size.caption` | 12px |
| `card.attribution` | color | `color.neutral.500` | “Generated by Kimi.ai” |
| `card.media` | transform (hover) | `scale(1.03)` | `transform` only · `motion.duration.300` |
| `card.title` | transform (hover) | `translateY` slide up | e.g. `translateY(0)` from `translateY(8px)` · `opacity` 0→1 |

### 3.3 Interaction states

| State | Behavior | Tokens |
|-------|----------|--------|
| Default | Title may be hidden or subdued; category visible on image | `shadow.1` |
| Hover | Image scale 1.03 · title slides up · shadow increase | `shadow.2` · `motion.duration.300` · `motion.easing.enter` |
| Focus-within | Visible focus ring on link | `color.ink.white` outline |
| Active | No scale overshoot | `motion.easing.default` |

### 3.4 Responsive notes

| Breakpoint | Layout | Gap |
|------------|--------|-----|
| Mobile | Single column | `space.6` |
| Tablet+ | 2-column grid | `space.6` |
| Desktop | 2–3 columns per IA | `layout.grid.gutter` (24px) |

### 3.5 Implementation note

Reference: showcase project card lines 395–409. Extend to full-bleed: remove inner padding on media; move title into overlay layer on hover. Category/year map to `.kicker-mono` patterns.

---

## 4. About section

**Component ID:** `AboutSplit` · **Page:** `/about` · **Copy source:** [About Me/About_Page_Copy.md](../About%20Me/About_Page_Copy.md)

### 4.1 Component parts

| Part | Role |
|------|------|
| `about.container` | Two-column section |
| `about.portrait` | Editorial photo |
| `about.bio` | Headline + body + CTA |
| `about.social` | Minimal icon links |

### 4.2 Token mapping

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `about.container` | padding-y | `layout.section-y.*` | Responsive section rhythm |
| `about.container` | max-width | `layout.content-max` | 1280px |
| `about.container` | gap | `space.12` | 48px between columns |
| `about.container` | grid | `layout.grid.columns` | 12-col · portrait ~5 cols · bio ~7 cols |
| `about.portrait` | border-radius | `radius.none` | 0px — sharp editorial corners |
| `about.portrait` | aspect | — | 3:4 or 4:5 editorial crop |
| `about.portrait` | overflow | — | `hidden` |
| `about.portrait` | border (optional) | `color.border.subtle` | Thin frame |
| `about.bio` | headline font | `font.display` | Syne |
| `about.bio` | headline size | `font.size.h1` | clamp(2.75rem, 7vw, 4.5rem) |
| `about.bio` | headline color | `color.text.primary` | — |
| `about.bio` | body font | `font.body` | Inter |
| `about.bio` | body size | `font.size.body-lg` | 20px |
| `about.bio` | line-height | — | 1.5 (150%) — personal tone |
| `about.bio` | body color | `color.text.secondary` | Long-form readability |
| `about.bio` | paragraph spacing | `space.6` | Between paragraphs |
| `about.bio` | CTA | `.btn-primary` | “Work With Me” → `/contact` |
| `about.social` | icon size | `space.6` | 24px |
| `about.social` | icon color | `color.neutral.500` | Default |
| `about.social` | icon color (hover) | `color.ink.white` | — |
| `about.social` | gap | `space.4` | 16px |
| `about.social` | transition | `motion.duration.150` | `opacity` + `transform` |

### 4.3 Interaction states

| State | Behavior | Tokens |
|-------|----------|--------|
| Social hover | Opacity / slight lift | `color.ink.white` · `translateY(-1px)` |
| CTA | Same as global primary | `.btn-primary` states |

### 4.4 Responsive notes

| Breakpoint | Layout |
|------------|--------|
| Mobile | Stack: portrait top, bio below · `space.8` gap |
| Tablet+ | Split 50/50 or 5/7 grid |
| Portrait width | 100% mobile · ~45% desktop column |

### 4.5 Implementation note

Not yet in showcase — implement per [page-briefs.md](./page-briefs.md) §5. Use `radius.none` on portrait per brief; do not apply `radius.lg` to editorial image.

---

## 5. Contact form

**Component ID:** `InquiryForm` · **Page:** `/contact`

### 5.1 Component parts

| Part | Role |
|------|------|
| `form.container` | Form wrapper |
| `form.label` | Field labels |
| `form.input` | Text, email, select, textarea |
| `form.error` | Validation message |
| `form.submit` | Primary submit button |
| `form.success` | Post-submit confirmation |

### 5.2 Token mapping

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `form.container` | max-width | — | ~28rem (`max-w-md`) |
| `form.container` | gap | `space.4` | 16px vertical rhythm |
| `form.label` | class | `.type-small` | — |
| `form.label` | font-size | `font.size.small` | 14px |
| `form.label` | color | `color.neutral.300` | `#D4D4D4` on dark (showcase labels) |
| `form.input` | class | `.input-field` | — |
| `form.input` | background (dark) | `color.surface.elevated` | `#0A0A0A` |
| `form.input` | background (light) | `color.neutral.100` | `#F5F5F5` — brief: neutral-100 |
| `form.input` | border | `color.border.default` | `#404040` — brief: neutral-300 on light → `color.neutral.300` |
| `form.input` | border-radius | `radius.sm` | 4px |
| `form.input` | padding | `space.4` × `space.3` | 16px × 12px |
| `form.input` | text color | `color.text.primary` | — |
| `form.input` | placeholder | `color.neutral.400` | — |
| `form.input` | focus border | `color.ink.white` | Brief: primary-500 focus |
| `form.input` | focus ring | — | `0 0 0 3px rgba(250,250,250,0.12)` |
| `form.input` | transition | `motion.duration.150` | `border-color` · `box-shadow` only |
| `form.error` | color | `color.error.500` | `#F87171` |
| `form.error` | font-size | `font.size.small` | 14px |
| `form.submit` | class | `.btn-primary` | — |
| `form.submit` | background | `color.ink.white` | Brief: primary-600 |
| `form.submit` | color | `color.ink.black` | Label |
| `form.submit` | width (mobile) | 100% | Full-width |
| `form.submit` | width (desktop) | auto or 100% | Per layout |
| `form.submit` | radius | `radius.md` | 8px |
| `form.success` | headline color | `color.text.primary` | — |
| `form.success` | body color | `color.neutral.500` | — |
| `form.success` | accent | `color.success.500` | Semantic only — optional checkmark |
| `form.success` | copy | — | “Message sent! I'll reply within 24 hours.” |
| `form.success` | effect | — | Confetti animation (implementation); respect `prefers-reduced-motion` |

### 5.3 Interaction states

| State | Behavior | Tokens |
|-------|----------|--------|
| Default | Elevated field on dark | `surface.elevated` · `border.default` |
| Focus | White border + soft ring | `color.ink.white` |
| Invalid | Error copy + border | `color.error.500` |
| Disabled | Muted | `color.neutral.300` · reduced opacity |
| Submit hover | Primary button states | `color.neutral.200` fill |
| Success | Replace form with message | `color.success.500` optional · confetti non-token |

### 5.4 Responsive notes

| Breakpoint | Submit | Fields |
|------------|--------|--------|
| Mobile | `width: 100%` | Full-width inputs |
| Desktop | Auto width or full per grid | Same tokens |

### 5.5 Implementation note

Reference: showcase form lines 422–437. Extend fields per [ia-sitemap.md](./ia-sitemap.md): name, email, project type, budget, timeline, message. Submit label: **Send Mission Brief** or **Start an Inquiry** per matrix.

---

## 6. Footer

**Component ID:** `GlobalFooter`

### 6.1 Component parts

| Part | Role |
|------|------|
| `footer.container` | Full-width footer band |
| `footer.tagline` | Brand line |
| `footer.nav` | Column links |
| `footer.newsletter` | Inline email capture |
| `footer.legal` | Copyright · location |

### 6.2 Token mapping

| Part | Property | Token | Value / behavior |
|------|----------|-------|------------------|
| `footer.container` | background | `color.neutral.900` | `#171717` |
| `footer.container` | border-top | `color.border.subtle` | `#262626` |
| `footer.container` | padding-y | `space.12` | 48px |
| `footer.container` | padding-x | `space.6` | 24px |
| `footer.container` | max-width | `layout.content-max` | 1280px |
| `footer.tagline` | font-family | `font.display` | Syne |
| `footer.tagline` | color | `color.neutral.400` | Brief: neutral-400 text |
| `footer.nav` | font-size | `font.size.small` | 14px |
| `footer.nav` | color | `color.neutral.400` | `#A3A3A3` |
| `footer.nav` | color (hover) | `color.ink.white` | Brief: primary-400 hover → ink |
| `footer.nav` | transition | `motion.duration.150` | — |
| `footer.newsletter` | layout | inline flex | Input + button on one row desktop |
| `footer.newsletter.input` | background | `color.surface.elevated` | Dark on dark footer |
| `footer.newsletter.input` | border | `color.border.default` | — |
| `footer.newsletter.input` | radius | `radius.sm` | 4px |
| `footer.newsletter.button` | class | `.btn-primary` or compact ghost | Minimal |
| `footer.legal` | font-family | `font.mono` | — |
| `footer.legal` | font-size | `font.size.caption` | 12px |
| `footer.legal` | color | `color.neutral.600` | Muted meta |
| `footer.cta` | primary | `.btn-primary` | Book a Call |

### 6.3 Interaction states

| State | Behavior | Tokens |
|-------|----------|--------|
| Link hover | Brighten to ink white | `color.neutral.400` → `color.ink.white` |
| Newsletter focus | Same as form input | `color.ink.white` border |
| CTA | Global primary states | `.btn-primary` |

### 6.4 Responsive notes

| Breakpoint | Layout |
|------------|--------|
| Mobile | Stacked columns · newsletter stacks · full-width input |
| Desktop | 3–4 column grid · newsletter inline |

### 6.5 Implementation note

Showcase footer (lines 459–462) is minimal doc footer only. Production footer per [ia-sitemap.md](./ia-sitemap.md): tagline, nav columns, **Book a Call** / **Start an Inquiry**, newsletter, social, NAP (London, UK).

---

## Token validation checklist

All tokens referenced above exist in [design-token-system.md](./design-token-system.md):

- [x] `color.ink.*` · `color.neutral.*` · `color.text.*` · `color.surface.*` · `color.border.*`
- [x] `color.success.500` · `color.error.500` (semantic only)
- [x] `font.display` · `font.body` · `font.mono` · `font.size.*`
- [x] `space.*` · `layout.*`
- [x] `shadow.1` · `shadow.2`
- [x] `radius.none` · `radius.sm` · `radius.md` · `radius.lg`
- [x] `effect.*` · `motion.*`

**Non-token implementation details** (documented, not tokenized): hamburger SVG paths, confetti library, 3D hero scene, exact `scale(1.03)` multiplier, scroll threshold pixel value.

---

## Related documents

- [Design Token System](./design-token-system.md) — canonical token definitions
- [Design Token Showcase](./design-token-showcase.html) — live specimens
- [CTA & Messaging Matrix](./cta-messaging-matrix.md)
- [Page Content Briefs](./page-briefs.md)
- [IA Sitemap](./ia-sitemap.md)
