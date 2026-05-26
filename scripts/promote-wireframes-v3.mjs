#!/usr/bin/env node
/**
 * Promote wireframes v2 → v3 with approval layer assets.
 * Run: node scripts/promote-wireframes-v3.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const v2Dir = path.join(root, 'docs', 'wireframes-v2');
const v3Dir = path.join(root, 'docs', 'wireframes-v3');

const ROUTES = [
  { v2: 'homepage-wireframe-v2.html', v3: 'homepage-wireframe-v3.html', route: '/' },
  { v2: 'order-wireframe-v2.html', v3: 'order-wireframe-v3.html', route: '/order' },
  { v2: 'contact-wireframe-v2.html', v3: 'contact-wireframe-v3.html', route: '/contact' },
  { v2: 'services-wireframe-v2.html', v3: 'services-wireframe-v3.html', route: '/services' },
  { v2: 'work-wireframe-v2.html', v3: 'work-wireframe-v3.html', route: '/work' },
  { v2: 'case-study-wireframe-v2.html', v3: 'case-study-wireframe-v3.html', route: '/work/[slug]' },
  { v2: '404-wireframe-v2.html', v3: '404-wireframe-v3.html', route: '/404' },
  { v2: 'about-wireframe-v2.html', v3: 'about-wireframe-v3.html', route: '/about' },
  { v2: 'journal-index-wireframe-v2.html', v3: 'journal-index-wireframe-v3.html', route: '/journal' },
  { v2: 'journal-article-wireframe-v2.html', v3: 'journal-article-wireframe-v3.html', route: '/journal/[slug]' },
];

const DEFERRAL_LEDGER = `
      <div class="v3-ledger">
        <h3>Deferral ledger</h3>
        <p><strong>Hi-fi (Stage 2):</strong> Hero mega-type poster, hero video, Spline, GSAP scroll scenes, work card secondary image hover (2+ projects), Ken Burns / advanced motion.</p>
        <p><strong>Production (Stage 3):</strong> Live Calendly/Cal.com, Supabase + Resend, newsletter integration, real tool logos, custom monogram.</p>
        <p><strong>Post-launch:</strong> Testimonials, additional case studies, journal articles beyond seed set, work filter/tags when N&gt;1.</p>
      </div>`;

const TOKEN_TABLE = `
      <table class="v3-token-table">
        <thead><tr><th>Token</th><th>Value / use</th></tr></thead>
        <tbody>
          <tr><td><code>font.display</code></td><td>Fredoka — headings, nav, CTAs</td></tr>
          <tr><td><code>font.body</code></td><td>Inter — body, forms</td></tr>
          <tr><td><code>font.mono</code></td><td>JetBrains Mono — kickers (ink.muted)</td></tr>
          <tr><td><code>font.script</code></td><td>Caveat — poster script only</td></tr>
          <tr><td><code>layout-max</code></td><td>1280px (<code>--layout-max</code>)</td></tr>
          <tr><td><code>section-v-desktop</code></td><td>96px vertical rhythm (desktop)</td></tr>
          <tr><td><code>shadow.sticker</code></td><td>4px 4px 0 ink</td></tr>
          <tr><td><code>radius.lg</code></td><td>16px cards</td></tr>
          <tr><td><code>border.width.bold</code></td><td>3px ink borders</td></tr>
        </tbody>
      </table>`;

function transform(html, { v2, route }) {
  const today = '2026-05-25';
  let out = html;

  out = out.replace(/Wireframe v2/g, 'Wireframe v3');
  out = out.replace(/href="_chrome\.css"/g, 'href="../wireframes-v2/_chrome.css"');
  out = out.replace(/src="_chrome\.js"/g, 'src="../wireframes-v2/_chrome.js"');
  out = out.replace(
    /<link rel="stylesheet" href="\.\.\/wireframes-v2\/_chrome\.css" \/>/,
    '<link rel="stylesheet" href="../wireframes-v2/_chrome.css" />\n  <link rel="stylesheet" href="_v3-labels.css" />'
  );
  if (!out.includes('_v3-labels.css')) {
    out = out.replace(
      /<link rel="stylesheet" href="_chrome\.css" \/>/,
      '<link rel="stylesheet" href="../wireframes-v2/_chrome.css" />\n  <link rel="stylesheet" href="_v3-labels.css" />'
    );
  }

  if (!out.includes('show-v3-labels')) {
    out = out.replace(/<body(\s[^>]*)?>/, (m, attrs) => {
      const a = attrs || '';
      if (a.includes('class="')) {
        return m.replace('class="', 'class="show-v3-labels ');
      }
      return `<body${a} class="show-v3-labels">`;
    });
  }

  const pageTokens = `    <p class="v3-page-tokens" aria-hidden="true">v3 · ${route} · layout-max: 1280px · section-v-desktop: 96px · font.display Fredoka · Toggle labels bottom-right</p>\n`;
  out = out.replace(/<main id="main"/, pageTokens + '  <main id="main"');

  if (route === '/work/[slug]' && !out.includes('id="hero"')) {
    out = out.replace(
      '<div class="cs-hero-thumb">',
      '<header id="hero"><div class="cs-hero-thumb">'
    );
    out = out.replace(
      '<p class="kicker">Portfolio · 2026</p>',
      '<p class="kicker">Portfolio · 2026</p></header>'
    );
  }

  const approval = `
      <div class="v3-approval">
        <h3>v3 approval</h3>
        <ul>
          <li><strong>Date:</strong> ${today}</li>
          <li><strong>Approver:</strong> Jawad Jalal (Studio Kitchen)</li>
          <li><strong>v2 source:</strong> ${v2}</li>
          <li><strong>Open questions:</strong> none</li>
          <li><strong>Conversion sign-off:</strong> <a href="../homepage-conversion-flow.md">homepage-conversion-flow.md</a> — proof-first funnel approved</li>
        </ul>
      </div>`;

  out = out.replace(
    /<aside class="spec-footer"([^>]*)>/,
    `<aside class="spec-footer"$1>`
  );
  out = out.replace(
    /<span class="spec-badge">Wireframe v3 · ([^<]+)<\/span>/,
    (m, r) => `<span class="spec-badge">Wireframe v3 · ${r}</span>${TOKEN_TABLE}`
  );

  if (!out.includes('v3-ledger')) {
    if (out.includes('<aside class="spec-footer"') && out.includes('</ul>')) {
      out = out.replace(
        /(<aside class="spec-footer"[\s\S]*?<\/ul>)/,
        `$1${DEFERRAL_LEDGER}${approval}`
      );
    } else {
      out = out.replace(
        /(<aside class="spec-footer"[\s\S]*?<div class="wrap">[\s\S]*?)(<\/div>\s*\n\s*<\/aside>)/,
        `$1${DEFERRAL_LEDGER}${approval}$2`
      );
    }
  }

  if (!out.includes('_v3-labels.js')) {
    out = out.replace(
      /<script src="\.\.\/wireframes-v2\/_chrome\.js" defer><\/script>/,
      '<script src="../wireframes-v2/_chrome.js" defer></script>\n  <script src="_v3-labels.js" defer></script>'
    );
  }

  return out;
}

fs.mkdirSync(v3Dir, { recursive: true });

for (const { v2, v3, route } of ROUTES) {
  const src = path.join(v2Dir, v2);
  if (!fs.existsSync(src)) {
    console.error('Missing:', src);
    process.exit(1);
  }
  const raw = fs.readFileSync(src, 'utf8');
  const transformed = transform(raw, { v2, route });
  fs.writeFileSync(path.join(v3Dir, v3), transformed, 'utf8');
  console.log('Wrote', v3);
}

console.log('Done —', ROUTES.length, 'files in docs/wireframes-v3/');
