> **Superseded:** Legacy Mission Control halftone contrast QA. Studio Kitchen uses black type on red hero — see [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md).

# Hero contrast QA — halftone spaceman (legacy)

**Prototype:** [hero-prototype.html](./hero-prototype.html)  
**Asset:** `brand_assets/hero/spaceman-grab-poster.webp` (1024×439 source)

## Layout checks

| Check | Result | Notes |
|-------|--------|-------|
| Headline in left negative space | Pass | Dark void on left of halftone frame |
| Spaceman anchors right | Pass | `object-position: right center` |
| CTAs readable | Pass | White fill `#FAFAFA` on black per token system |
| Mobile crop | Pass | `spaceman-grab-mobile.webp` — right-weighted crop |
| Hand not clipped (mobile) | Pass | `object-position: 72% 35%` in prototype |

## Contrast (headline)

| Element | Foreground | Background (est.) | Ratio | WCAG AA |
|---------|------------|-------------------|-------|---------|
| Headline `#FAFAFA` | ~0.98 | ~0.05 (left void + scrim) | **~15:1** | Pass |
| Subhead `#A3A3A3` | ~0.65 | ~0.05 | **~8:1** | Pass |
| Kicker | ~0.65 | ~0.05 | ~8:1 | Pass |

Live check: open prototype — badge bottom-right reports computed headline ratio.

## Motion

| Mode | Behavior |
|------|----------|
| Default | Ken Burns on poster; subtle headline pull toward hand |
| `prefers-reduced-motion` | Static poster; no orbit; no Ken Burns |
| Phase 2 video | Loads only if `.webm` exists (HEAD request) |

## Open items

- Re-run QA after exporting higher-res source (>1920w) if halftone artifacts visible on retina
- Re-check contrast if scrim opacity is reduced below 35%
