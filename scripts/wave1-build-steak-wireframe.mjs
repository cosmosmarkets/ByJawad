/**
 * Emit docs/wireframes-v2/homepage-wireframe-v2-steak.html — exact Framer clone
 * (paths relative to wireframes-v2/). Studio Kitchen IA stays in homepage-wireframe-v2.html.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STEAK = path.join(ROOT, 'public/wave1/steak');
const PREVIEW = path.join(STEAK, 'index.html');
const OUT = path.join(ROOT, 'docs/wireframes-v2/homepage-wireframe-v2-steak.html');
const REL = '../../public/wave1/steak';
const APPEAR_GUARD = `<script>window.__framer_disable_appear_effects_optimization__=true;</script>`;

function main() {
  if (!fs.existsSync(PREVIEW)) {
    console.error('Missing preview — run: node scripts/wave1-build-preview.mjs');
    process.exit(1);
  }

  let html = fs.readFileSync(PREVIEW, 'utf8');

  // Strip preview-only banner if present
  html = html.replace(/^<!-- Wave 1 Steak\.studio reference preview[^]*?-->\n?/, '');

  // Sibling paths → wireframe-relative asset root
  html = html.replace(/\.\//g, `${REL}/`);

  if (!html.includes('__framer_disable_appear_effects_optimization__')) {
    html = html.replace(/<head>/i, `<head>\n\t${APPEAR_GUARD}`);
  }

  const banner = `<!-- Exact steak.studio Framer clone (Wave 1) · NOT Studio Kitchen IA -->
<!-- Canonical preview (sibling paths): ${REL}/index.html via public/wave1/steak/ -->
<!-- Studio Kitchen wireframe: ./homepage-wireframe-v2.html -->
`;
  if (!html.includes('Exact steak.studio Framer clone')) {
    html = banner + html;
  }

  fs.writeFileSync(OUT, html, 'utf8');
  console.log('wrote', OUT, 'bytes', fs.statSync(OUT).size);
}

main();
