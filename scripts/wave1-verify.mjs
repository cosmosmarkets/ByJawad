/**
 * Wave 1 verification: local refs, Framer module graph, preview entry.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STEAK = path.join(ROOT, 'public/wave1/steak');
const SITES = path.join(STEAK, 'sites/3E25kl3MRbyXahxLKT2ye6');
const PREVIEW = path.join(STEAK, 'index.html');
const WIREFRAME = path.join(ROOT, 'docs/wireframes-v2/homepage-wireframe-v2.html');

const importRe = /import\s*\(\s*['"`](\.\/[^'"`]+)['"`]\s*\)/g;
const staticImportRe = /from\s+['"`](\.\/[^'"`]+)['"`]/g;

function collectImports(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const found = new Set();
  for (const re of [importRe, staticImportRe]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      found.add(m[1]);
    }
  }
  return [...found];
}

function walkModuleGraph() {
  const queue = [];
  const seen = new Set();
  const missing = [];

  if (!fs.existsSync(SITES)) {
    return { moduleFiles: 0, missing: ['sites directory missing'] };
  }

  for (const name of fs.readdirSync(SITES)) {
    if (name.endsWith('.mjs')) queue.push(name);
  }

  while (queue.length) {
    const rel = queue.shift();
    if (seen.has(rel)) continue;
    seen.add(rel);
    const abs = path.join(SITES, rel);
    if (!fs.existsSync(abs)) {
      missing.push(rel);
      continue;
    }
    for (const imp of collectImports(abs)) {
      const target = imp.replace(/^\.\//, '');
      if (!seen.has(target)) queue.push(target);
    }
  }

  return { moduleFiles: seen.size, missing };
}

function resolvePreviewRef(baseDir, ref) {
  if (ref.includes('public/wave1')) {
    return path.resolve(baseDir, ref);
  }
  const direct = path.join(baseDir, ref);
  if (fs.existsSync(direct)) return direct;
  // Legacy clone paths on disk
  const alt = ref.replace(/^\.\/images\//, './framerusercontent.comimages/');
  if (alt !== ref) {
    const p = path.join(baseDir, alt);
    if (fs.existsSync(p)) return p;
  }
  return direct;
}

function checkHtmlCriticalRefs(htmlPath, baseDir) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const critical = new Set();

  for (const m of html.match(/type="module"\s+src="(\.\/[^"]+)"/g) || []) {
    const src = m.match(/src="(\.\/[^"]+)"/)?.[1];
    if (src) critical.add(src);
  }
  for (const m of html.match(/\.\/sites\/3E25kl3MRbyXahxLKT2ye6\/[^"']+\.mjs/g) || []) {
    critical.add(m);
  }
  for (const m of html.match(/\.\/framerusercontent\.comsites\/[^"']+\.json/g) || []) {
    critical.add(m);
  }
  for (const m of html.match(/\.\/lenis@[^"']+\.(?:css|js)/g) || []) {
    critical.add(m);
  }
  for (const m of html.match(/\.\/edit\/init\.mjs/g) || []) {
    critical.add(m);
  }

  const missing = [...critical].filter((r) => !fs.existsSync(resolvePreviewRef(baseDir, r)));
  return { criticalRefs: critical.size, missing };
}

function checkRemoteAssets(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const hosts = ['framerusercontent.com', 'fonts.gstatic.com', 'unpkg.com', 'framer.com'];
  const remotes = [...new Set(html.match(/https:\/\/[^"')\s]+/g) || [])].filter(
    (u) => hosts.some((h) => u.includes(h)) && !u.endsWith('fonts.gstatic.com')
  );
  return remotes;
}

const graph = walkModuleGraph();
const previewRefs = fs.existsSync(PREVIEW)
  ? checkHtmlCriticalRefs(PREVIEW, STEAK)
  : { criticalRefs: 0, missing: ['index.html missing'] };
const previewRemotes = fs.existsSync(PREVIEW) ? checkRemoteAssets(PREVIEW) : [];
const wireframeExists = fs.existsSync(WIREFRAME);
const wireframeRemotes = wireframeExists ? checkRemoteAssets(WIREFRAME) : [];

const report = {
  previewExists: fs.existsSync(PREVIEW),
  previewBytes: fs.existsSync(PREVIEW) ? fs.statSync(PREVIEW).size : 0,
  moduleGraph: graph,
  previewCriticalRefs: previewRefs,
  previewRemoteAssets: previewRemotes.length,
  wireframeExists,
  wireframeIsStudioKitchen: wireframeExists
    ? fs.readFileSync(WIREFRAME, 'utf8').includes('Studio Kitchen')
    : false,
  wireframeRemoteAssets: wireframeRemotes.length,
};

console.log(JSON.stringify(report, null, 2));

const fail =
  graph.missing.length > 0 ||
  previewRefs.missing?.length > 0 ||
  previewRemotes.length > 0 ||
  !report.previewExists ||
  graph.moduleFiles < 10;

process.exit(fail ? 1 : 0);
