import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src =
  "C:/Users/cubit/.cursor/projects/c-Users-cubit-Downloads-By-Jawad/assets/c__Users_cubit_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_spacemanhero-acc36cff-8306-4aa8-9044-cbefc0506209.png";
const out = path.join(root, "brand_assets/hero");

fs.mkdirSync(out, { recursive: true });

const meta = await sharp(src).metadata();
console.log("source", meta.width, "x", meta.height);

const exports = [
  ["spaceman-grab-poster.webp", () =>
    sharp(src).resize(1920, null, { withoutEnlargement: true }).webp({ quality: 82 })],
  ["spaceman-grab-poster@2x.webp", () =>
    sharp(src).resize(2560, null, { withoutEnlargement: true }).webp({ quality: 78 })],
  ["spaceman-grab-poster.jpg", () =>
    sharp(src).resize(1920, null, { withoutEnlargement: true }).jpeg({ quality: 85, mozjpeg: true })],
  ["spaceman-grab-poster.png", () =>
    sharp(src).resize(1920, null, { withoutEnlargement: true }).png()],
  ["spaceman-grab-mobile.webp", () =>
    sharp(src).resize(900, 1200, { fit: "cover", position: "right" }).webp({ quality: 82 })],
  ["spaceman-grab-mobile.jpg", () =>
    sharp(src).resize(900, 1200, { fit: "cover", position: "right" }).jpeg({ quality: 85, mozjpeg: true })],
];

for (const [name, pipeline] of exports) {
  const dest = path.join(out, name);
  await pipeline().toFile(dest);
  const kb = Math.round(fs.statSync(dest).size / 1024);
  console.log(name, `${kb}KB`);
}
