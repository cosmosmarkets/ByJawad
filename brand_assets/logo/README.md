# Logo assets — Jawad Design

Studio Kitchen brand lockups and favicon set.

## Files

| File | Use on | Notes |
|------|--------|-------|
| `jawad-design-lockup-nav.svg` | Red hero, dark overlays | White + red outline — primary nav wordmark |
| `jawad-design-lockup-white.svg` | Dark backgrounds, poster moments | White distressed lockup |
| `jawad-design-lockup-black.svg` | Cream body sections | Black lockup — use on `#FCEAD4` / white cards |
| `jawad-design-icon-flame-red.png` | Favicon master, social avatar | Flame on `heat.red` `#E63946` |
| `OG-image.png` | Open Graph / social share | Master OG art — deployed copy at `public/og-image.png` |

### Favicon (`favicon/`)

| File | Size | Usage |
|------|------|--------|
| `favicon.ico` | 16 + 32 | Browser tab (legacy) |
| `favicon-16.png` | 16×16 | Modern browsers |
| `favicon-32.png` | 32×32 | Modern browsers |
| `apple-touch-icon.png` | 180×180 | iOS home screen |

Wire to Next.js in `app/layout.tsx` metadata when implementing.

## Surface mapping

- **Cream nav / footer:** `jawad-design-lockup-black.svg`
- **Red hero nav:** `jawad-design-lockup-nav.svg`
- **Dark / poster:** `jawad-design-lockup-white.svg`
- **Browser tab:** `favicon/*`

## Regenerate favicons

From repo root (requires `sharp` + `to-ico` in `node_modules`):

```bash
node scripts/generate-logo-favicons.mjs
```

Source: `jawad-design-icon-flame-red.png`

## Next.js usage (example)

```tsx
import Image from 'next/image';

<Image
  src="/brand_assets/logo/jawad-design-lockup-black.svg"
  alt="Jawad Design"
  width={120}
  height={40}
  priority
/>
```

Copy or symlink `brand_assets/logo` into `public/` (e.g. `public/brand/logo/`) before using in `<Image>` or `<link rel="icon">`.

Wireframes still use interim text "Jawad" — swap to these assets in wireframe v2 / hi-fi.
