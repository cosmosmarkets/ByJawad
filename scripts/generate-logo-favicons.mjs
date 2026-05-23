import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'brand_assets/logo/jawad-design-icon-flame-red.png');
const outDir = join(root, 'brand_assets/logo/favicon');

const sizes = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

const buffers = [];
for (const { name, size } of sizes) {
  const buffer = await sharp(src)
    .resize(size, size, { fit: 'cover' })
    .png()
    .toBuffer();
  await writeFile(join(outDir, name), buffer);
  if (size <= 32) buffers.push(buffer);
}

const ico = await toIco(buffers);
await writeFile(join(outDir, 'favicon.ico'), ico);

console.log('Favicons written to', outDir);
