import fs from "fs";
import path from "path";
const OUT = path.resolve("out");
const ROOT = path.resolve(".");

if (!fs.existsSync(OUT)) {
  console.error("No out/ folder. Run `npm run build` first.");
  process.exit(1);
}

// remove previous published artifacts (don’t touch your source)
const toRemove = ["_next","index.html","404.html","favicon.ico","robots.txt","sitemap.xml","sitemap-0.xml","asset-manifest.json"];
for (const p of toRemove) fs.rmSync(path.join(ROOT, p), { recursive:true, force:true });

// copy out/* → root
function cp(src, dst){ fs.mkdirSync(dst,{recursive:true});
  for (const e of fs.readdirSync(src,{withFileTypes:true})) {
    const s = path.join(src,e.name), d = path.join(dst,e.name);
    e.isDirectory() ? cp(s,d) : fs.copyFileSync(s,d);
  }
}
cp(OUT, ROOT);

// make Pages ignore Jekyll
fs.writeFileSync(path.join(ROOT, ".nojekyll"), "");
console.log("Published static build to repo ROOT.");
