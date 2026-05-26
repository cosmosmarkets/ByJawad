/**
 * Wave 1: extract Steak HTML, classify links, download assets, emit localized clone.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TRANSCRIPT = path.join(
  process.env.USERPROFILE || '',
  '.cursor/projects/c-Users-cubit-Downloads-By-Jawad/agent-transcripts/5c494723-4ccc-48ef-9d5d-b4818f5cbe05/5c494723-4ccc-48ef-9d5d-b4818f5cbe05.jsonl'
);
const ASSET_ROOT = path.join(ROOT, 'public/wave1/steak');
const WIREFRAME = path.join(ROOT, 'docs/wireframes-v2/homepage-wireframe-v2.html');
const REL_PREFIX = '../../public/wave1/steak';

function readTranscriptHtml() {
  const firstLine = fs.readFileSync(TRANSCRIPT, 'utf8').split('\n')[0];
  const obj = JSON.parse(firstLine);
  const text = obj.message.content.find((c) => c.type === 'text')?.text || '';
  const lower = text.toLowerCase();
  const start = lower.indexOf('<!doctype html>');
  if (start < 0) throw new Error('No HTML in transcript');
  let html = text.slice(start);
  const end = html.toLowerCase().indexOf('</html>');
  if (end >= 0) html = html.slice(0, end + 7);
  return html;
}

function collectUrls(html) {
  const urls = new Set();
  const hrefRe = /href\s*=\s*"([^"]+)"/gi;
  const srcRe = /src\s*=\s*"([^"]+)"/gi;
  const srcsetRe = /srcset\s*=\s*"([^"]+)"/gi;
  let m;
  while ((m = hrefRe.exec(html))) urls.add(m[1].trim());
  while ((m = srcRe.exec(html))) urls.add(m[1].trim());
  while ((m = srcsetRe.exec(html))) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(/\s+/)[0];
      if (u) urls.add(u);
    }
  }
  const urlRe = /url\(([^)]+)\)/gi;
  while ((m = urlRe.exec(html))) {
    let u = m[1].trim().replace(/^["']|["']$/g, '');
    if (!u.startsWith('data:')) urls.add(u);
  }
  return [...urls];
}

function classify(urls) {
  const nav = [];
  const media = [];
  const fonts = [];
  const runtime = [];
  const external = [];

  for (const u of urls) {
    if (u.startsWith('./') || u === '#' || u.startsWith('#')) {
      nav.push(u);
    } else if (/\.(woff2?|ttf|otf)(\?|$)/i.test(u)) {
      fonts.push(u);
    } else if (/\.(png|jpe?g|webp|svg|gif)(\?|$)/i.test(u)) {
      media.push(u);
    } else if (/\.(mjs|js|css)(\?|$)/i.test(u) || u.includes('framer.com') || u.includes('unpkg.com')) {
      runtime.push(u);
    } else if (u.startsWith('http')) {
      if (/x\.com|t\.me|calendly|a1research|framer\.app/i.test(u)) external.push(u);
      else if (u.includes('framerusercontent') || u.includes('fonts.gstatic')) {
        if (/woff/i.test(u)) fonts.push(u);
        else media.push(u);
      } else external.push(u);
    } else {
      nav.push(u);
    }
  }

  return {
    nav: [...new Set(nav)].sort(),
    media: [...new Set(media)].sort(),
    fonts: [...new Set(fonts)].sort(),
    runtime: [...new Set(runtime)].sort(),
    external: [...new Set(external)].sort(),
  };
}

function localPathForUrl(url) {
  if (!url.startsWith('http')) return null;
  const parsed = new URL(url);
  let rel = `${parsed.hostname}${parsed.pathname}`.replace(/^\//, '');
  if (parsed.search) {
    const hash = crypto.createHash('md5').update(parsed.search).digest('hex').slice(0, 8);
    const ext = path.extname(rel) || '';
    const base = ext ? rel.slice(0, -ext.length) : rel;
    rel = `${base}--${hash}${ext || '.bin'}`;
  }
  return rel.replace(/\\/g, '/');
}

async function download(url, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(url, {
    headers: { 'User-Agent': 'wave1-steak-clone/1.0' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function localizeAssets(html, inventory) {
  const toFetch = [...inventory.media, ...inventory.fonts, ...inventory.runtime].filter((u) =>
    u.startsWith('http')
  );
  const map = {};

  for (const url of toFetch) {
    const rel = localPathForUrl(url);
    if (!rel) continue;
    const dest = path.join(ASSET_ROOT, rel);
    try {
      if (!fs.existsSync(dest)) {
        console.log('download', url);
        await download(url, dest);
      }
      map[url] = `${REL_PREFIX}/${rel}`.replace(/\\/g, '/');
    } catch (e) {
      console.warn('skip', url, e.message);
    }
  }

  let out = html;
  const sorted = Object.keys(map).sort((a, b) => b.length - a.length);
  for (const remote of sorted) {
    out = out.split(remote).join(map[remote]);
  }
  return { html: out, map };
}

function buildWireframePage(html) {
  const note = `<!-- Wave 1 exact Steak.studio clone · assets: ${REL_PREFIX}/ · generated ${new Date().toISOString().slice(0, 10)} -->
`;
  return note + html;
}

async function main() {
  fs.mkdirSync(ASSET_ROOT, { recursive: true });

  const sourceHtml = readTranscriptHtml();
  fs.writeFileSync(path.join(ASSET_ROOT, '_source.html'), sourceHtml, 'utf8');

  const urls = collectUrls(sourceHtml);
  const inventory = classify(urls);
  fs.writeFileSync(path.join(ASSET_ROOT, 'manifest.json'), JSON.stringify(inventory, null, 2), 'utf8');

  console.log('inventory', {
    nav: inventory.nav.length,
    media: inventory.media.length,
    fonts: inventory.fonts.length,
    runtime: inventory.runtime.length,
    external: inventory.external.length,
  });

  const { html, map } = await localizeAssets(sourceHtml, inventory);
  fs.writeFileSync(path.join(ASSET_ROOT, 'url-map.json'), JSON.stringify(map, null, 2), 'utf8');

  const page = buildWireframePage(html);
  fs.writeFileSync(WIREFRAME, page, 'utf8');
  console.log('wrote', WIREFRAME, 'map entries', Object.keys(map).length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
