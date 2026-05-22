# Hero assets — halftone spaceman

**Primary visual:** Static halftone poster (Blender render + halftone). Video loop optional in Phase 2.

| File | Status | Use |
|------|--------|-----|
| `spaceman-grab-poster.webp` | Ready | Desktop L0 hero image (1×) |
| `spaceman-grab-poster@2x.webp` | Ready | Retina `srcset` |
| `spaceman-grab-poster.jpg` | Ready | LCP fallback / older browsers |
| `spaceman-grab-poster.png` | Ready | Design export reference |
| `spaceman-grab-mobile.webp` | Ready | Mobile crop (`object-position: right`) |
| `spaceman-grab-mobile.jpg` | Ready | Mobile JPG fallback |
| `spaceman-grab-headline.webm` | Phase 2 | Blender loop when ready |
| `spaceman-grab-headline-mobile.webm` | Phase 2 | Mobile loop |
| `solar-orbit.splinecode` | Optional | Orbit sphere behind spaceman |

**Composition:** Spaceman anchors **right**; hand reaches **left** into headline safe zone. Headline + CTAs sit **left**, not center-right.

**Regenerate:** `node scripts/export-hero-assets.mjs` (source PNG path in script).
