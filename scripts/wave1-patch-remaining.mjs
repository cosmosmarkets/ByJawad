import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSET_ROOT = path.join(ROOT, 'public/wave1/steak');
const WIREFRAME = path.join(ROOT, 'docs/wireframes-v2/homepage-wireframe-v2.html');
const REL_PREFIX = '../../public/wave1/steak';

const EXTRA = [
  'https://framerusercontent.com/images/iCAyM6Sb65m2gU4IGB0wIkPN04.png',
  'https://framerusercontent.com/sites/3E25kl3MRbyXahxLKT2ye6/searchIndex-mlYZiMjRJQMq.json',
  'https://framerusercontent.com/sites/3E25kl3MRbyXahxLKT2ye6/searchIndex-yJqkzvPIZx3E.json',
  'https://fonts.gstatic.com/s/meiescript/v22/_LOImzDK7erRjhunIspaMgxg7oQ.woff2',
];

function localPathForUrl(url) {
  const parsed = new URL(url);
  let rel = parsed.hostname + parsed.pathname.replace(/^\//, '');
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
  const res = await fetch(url, { headers: { 'User-Agent': 'wave1-steak-clone/1.0' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  let html = fs.readFileSync(WIREFRAME, 'utf8');
  for (const url of EXTRA) {
    const rel = localPathForUrl(url);
    const dest = path.join(ASSET_ROOT, rel);
    if (!fs.existsSync(dest)) {
      console.log('download', url);
      await download(url, dest);
    }
    const local = `${REL_PREFIX}/${rel}`;
    html = html.split(url).join(local);
  }
  fs.writeFileSync(WIREFRAME, html, 'utf8');
  console.log('patched', WIREFRAME);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
