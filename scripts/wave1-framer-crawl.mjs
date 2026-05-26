/**
 * Recursively download Framer site module graph + patch absolute URLs in bundles.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ASSET_ROOT = path.join(ROOT, 'public/wave1/steak');
const SITE_ID = '3E25kl3MRbyXahxLKT2ye6';
const SITE_BASE = `https://framerusercontent.com/sites/${SITE_ID}/`;
const SITE_DIR = path.join(ASSET_ROOT, 'sites', SITE_ID);

const SEED_MODULES = [
  'script_main.BxOABBuj.mjs',
  'react.DZp06Dwx.mjs',
  'rolldown-runtime.D3cOTcPh.mjs',
  'framer.DG0pJpQu.mjs',
  'motion.Cc6mzAU6.mjs',
  'S1-yZ7B72GmzBvqJGwgzoU89EnaRaNgfLsdguj_lM9o.CtWsODiL.mjs',
  'shared-lib.5Rn2PK0o.mjs',
];

const EXTRA_URLS = [
  'https://framer.com/edit/init.mjs',
  'https://unpkg.com/lenis@1.3.7/dist/lenis.min.js',
  'https://unpkg.com/lenis@1.3.7/dist/lenis.css',
  'https://events.framer.com/script?v=2',
];

const IMPORT_RE = /import\s*(?:\(\s*[`'"](\.\/[^`'"]+)[`'"]\s*\)|[`'"](\.\/[^`'"]+)[`'"])/g;
const ABS_IMPORT_RE = /import\s*\(\s*[`'"](https:\/\/[^`'"]+)[`'"]\s*\)/g;

function localPathFromSiteUrl(url) {
  const u = new URL(url);
  if (!u.hostname.includes('framerusercontent.com')) return null;
  const rel = u.pathname.replace(/^\/sites\/[^/]+\//, '');
  return rel;
}

function localPathFromAnyUrl(url) {
  const u = new URL(url);
  if (u.hostname === 'framer.com') {
    return path.join('edit', path.basename(u.pathname)).replace(/\\/g, '/');
  }
  if (u.hostname === 'unpkg.com') {
    return u.pathname.replace(/^\//, '');
  }
  if (u.hostname === 'events.framer.com') {
    return 'events-framer-script.bin';
  }
  if (u.hostname.includes('framerusercontent.com') && u.pathname.includes('/sites/')) {
    return localPathFromSiteUrl(url);
  }
  return null;
}

async function download(url, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(url, {
    headers: { 'User-Agent': 'wave1-framer-crawl/1.0' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

function extractRelativeImports(content) {
  const found = new Set();
  let m;
  IMPORT_RE.lastIndex = 0;
  while ((m = IMPORT_RE.exec(content))) {
    const rel = (m[1] || m[2]).split('?')[0];
    if (rel.startsWith('./')) found.add(rel.slice(2));
  }
  return [...found];
}

function extractAbsoluteImports(content) {
  const found = new Set();
  let m;
  ABS_IMPORT_RE.lastIndex = 0;
  while ((m = ABS_IMPORT_RE.exec(content))) found.add(m[1]);
  return [...found];
}

async function crawlModules() {
  const queue = [...SEED_MODULES];
  const seen = new Set();
  const downloaded = [];

  while (queue.length) {
    const name = queue.shift();
    if (seen.has(name)) continue;
    seen.add(name);

    const dest = path.join(SITE_DIR, name);
    const url = SITE_BASE + name;

    if (!fs.existsSync(dest)) {
      console.log('module', url);
      await download(url, dest);
    }
    downloaded.push(name);

    const content = fs.readFileSync(dest, 'utf8');
    for (const rel of extractRelativeImports(content)) {
      if (!seen.has(rel)) queue.push(rel);
    }
    for (const abs of extractAbsoluteImports(content)) {
      const rel = localPathFromAnyUrl(abs);
      if (!rel) continue;
      const absDest = abs.includes('/sites/')
        ? path.join(SITE_DIR, rel)
        : path.join(ASSET_ROOT, rel);
      if (!fs.existsSync(absDest)) {
        console.log('abs-import', abs);
        await download(abs, absDest);
      }
    }
  }

  return downloaded;
}

function patchBundleUrls() {
  const map = {};
  const walk = (dir) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.name.endsWith('.mjs') || ent.name.endsWith('.js')) {
        let text = fs.readFileSync(p, 'utf8');
        let changed = false;
        const replacements = [
          [`https://framerusercontent.com/sites/${SITE_ID}/`, './'],
          ['https://www.steak.studio', ''],
        ];
        for (const [from, to] of replacements) {
          if (text.includes(from)) {
            text = text.split(from).join(to);
            changed = true;
          }
        }
        if (changed) fs.writeFileSync(p, text, 'utf8');
      }
    }
  };
  if (fs.existsSync(SITE_DIR)) walk(SITE_DIR);
  return map;
}

async function downloadExtras() {
  for (const url of EXTRA_URLS) {
    const rel = localPathFromAnyUrl(url);
    if (!rel) continue;
    const dest = path.join(ASSET_ROOT, rel);
    if (!fs.existsSync(dest)) {
      console.log('extra', url);
      await download(url, dest);
    }
  }
}

async function main() {
  fs.mkdirSync(SITE_DIR, { recursive: true });
  const modules = await crawlModules();
  await downloadExtras();
  patchBundleUrls();

  const manifest = {
    siteId: SITE_ID,
    moduleCount: modules.length,
    modules: modules.sort(),
    crawledAt: new Date().toISOString(),
  };
  fs.writeFileSync(
    path.join(ASSET_ROOT, 'modules-manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf8'
  );
  console.log('crawled modules:', modules.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
