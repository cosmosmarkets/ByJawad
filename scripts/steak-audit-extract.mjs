#!/usr/bin/env node
/**
 * Extract Steak _source.html signals for side-by-side audit.
 * Usage: node scripts/steak-audit-extract.mjs
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(join(root, 'public/wave1/steak/_source.html'), 'utf8');

const snippets = [
  'Secret sauce',
  'measurable growth',
  'place your order',
  'Chat with us',
  'rgba(255, 255, 255, 0.06)',
  'rgb(245, 35, 35)',
  'rgb(245, 217, 57)',
];

console.log('=== Steak _source.html extract ===\n');
console.log('File size:', (source.length / 1024).toFixed(0), 'KB\n');

for (const s of snippets) {
  const count = source.split(s).length - 1;
  console.log(`${s}: ${count} occurrence(s)`);
}

const bgMatches = source.match(/background-color:rgb\([^)]+\)/g) || [];
const uniqueBg = [...new Set(bgMatches)].slice(0, 20);
console.log('\nUnique background-color:rgb(...) samples (max 20):');
uniqueBg.forEach((b) => console.log(' ', b));

const fontSizes = source.match(/--framer-font-size:\d+px/g) || [];
const uniqueSizes = [...new Set(fontSizes)].sort();
console.log('\nFramer font-size tokens:', uniqueSizes.join(', '));
