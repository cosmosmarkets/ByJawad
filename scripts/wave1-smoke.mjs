/**
 * Optional smoke test: static HTML contains Steak hero SSR copy + critical assets exist.
 * For live hydration, serve repo root and open /public/wave1/steak/
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PREVIEW = path.join(ROOT, 'public/wave1/steak/index.html');
const SITES = path.join(ROOT, 'public/wave1/steak/sites/3E25kl3MRbyXahxLKT2ye6');

const html = fs.readFileSync(PREVIEW, 'utf8');
const checks = {
  hasMain: html.includes('id="main"'),
  hasHeroCopy: /for measurable growth/i.test(html),
  hasAppearGuard: html.includes('__framer_disable_appear_effects_optimization__'),
  scriptMainExists: fs.existsSync(path.join(SITES, 'script_main.BxOABBuj.mjs')),
  reactChunkExists: fs.existsSync(path.join(SITES, 'react.DZp06Dwx.mjs')),
};

const pass = Object.values(checks).every(Boolean);
console.log(JSON.stringify({ pass, checks }, null, 2));
process.exit(pass ? 0 : 1);
