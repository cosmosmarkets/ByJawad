/**
 * Build public/wave1/steak/index.html from _source.html with local paths + appear fallback.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STEAK = path.join(ROOT, 'public/wave1/steak');
const SOURCE = path.join(STEAK, '_source.html');
const OUT = path.join(STEAK, 'index.html');
const APPEAR_GUARD = `<script>window.__framer_disable_appear_effects_optimization__=true;</script>`;

function ensureOgImage() {
  const ogName = 'iCAyM6Sb65m2gU4IGB0wIkPN04.png';
  const from = path.join(STEAK, 'framerusercontent.comimages', ogName);
  const to = path.join(STEAK, 'images', ogName);
  if (fs.existsSync(from) && !fs.existsSync(to)) {
    fs.copyFileSync(from, to);
  }
}

function main() {
  ensureOgImage();
  let html = fs.readFileSync(SOURCE, 'utf8');

  // Normalize asset paths for preview served at /public/wave1/steak/
  html = html.replace(/\.\.\/\.\.\/public\/wave1\/steak\//g, './');
  html = html.replace(/https:\/\/framerusercontent\.com\/sites\/3E25kl3MRbyXahxLKT2ye6\//g, './sites/3E25kl3MRbyXahxLKT2ye6/');
  html = html.replace(/https:\/\/framerusercontent\.com\/images\//g, './images/');
  // Search indexes live under framerusercontent.comsites/ on disk
  html = html.replace(
    /\.\/sites\/3E25kl3MRbyXahxLKT2ye6\/(searchIndex-[^"']+\.json)/g,
    './framerusercontent.comsites/3E25kl3MRbyXahxLKT2ye6/$1'
  );
  html = html.replace(/\.\/framerusercontent\.comimages\//g, './images/');
  html = html.replace(/https:\/\/framerusercontent\.com\/assets\//g, './assets/');
  html = html.replace(/https:\/\/unpkg\.com\/lenis@1\.3\.7\/dist\/lenis\.css/g, './lenis@1.3.7/dist/lenis.css');
  html = html.replace(/https:\/\/unpkg\.com\/lenis@1\.3\.7\/dist\/lenis\.min\.js/g, './lenis@1.3.7/dist/lenis.min.js');
  html = html.replace(/https:\/\/framer\.com\/edit\/init\.mjs/g, './edit/init.mjs');
  html = html.replace(/https:\/\/events\.framer\.com\/script\?v=2/g, './events-framer-script.bin');
  html = html.replace(/https:\/\/fonts\.gstatic\.com\/s\//g, './s/');
  html = html.replace(/\.\/fonts\.gstatic\.com\/s\//g, './s/');
  html = html.replace(/https:\/\/fonts\.gstatic\.com" rel="preconnect"/g, '" rel="preconnect" disabled');

  if (!html.includes('__framer_disable_appear_effects_optimization__')) {
    html = html.replace(/<head>/i, `<head>\n\t${APPEAR_GUARD}`);
  }

  const banner = `<!-- Wave 1 Steak.studio reference preview · serve: /public/wave1/steak/index.html -->\n`;
  if (!html.startsWith('<!-- Wave 1')) {
    html = banner + html;
  }

  fs.writeFileSync(OUT, html, 'utf8');
  console.log('wrote', OUT, 'bytes', fs.statSync(OUT).size);
}

main();
