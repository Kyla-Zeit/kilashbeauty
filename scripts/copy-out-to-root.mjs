import fs from "fs";
import path from "path";

const OUT = path.resolve("out");
const PUB = path.resolve("public");
const ROOT = path.resolve(".");

if (!fs.existsSync(OUT)) {
  console.error("No out/ folder. Run `npm run build` first.");
  process.exit(1);
}

// remove previously published artifacts (don’t touch your source folders)
const toRemove = [
  "_next","index.html","404.html","favicon.ico",
  "robots.txt","sitemap.xml","sitemap-0.xml","asset-manifest.json"
];
for (const p of toRemove) fs.rmSync(path.join(ROOT, p), { recursive: true, force: true });

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

// 1) copy static export
copyDir(OUT, ROOT);

// 2) ensure /public assets land at root too (in case Next didn’t copy them)
copyDir(PUB, ROOT);

// 3) keep Jekyll out of our business
fs.writeFileSync(path.join(ROOT, ".nojekyll"), "");

console.log("Published static build to REPO ROOT (out + public).");
