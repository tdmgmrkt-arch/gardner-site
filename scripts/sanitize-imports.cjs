const fs = require("fs");
const path = require("path");

function fix(spec) {
  // remove a version suffix like "@0.487.0" only when it appears before the end
  // (keeps scoped names like "@radix-ui/…")
  return spec.replace(/@(?=\d).*$/, "");
}

function processFile(f) {
  let t = fs.readFileSync(f, "utf8");
  const out = t.replace(
    /(from\s+['"])([^'"]+)(['"])/g,
    (_, a, spec, z) => a + fix(spec) + z
  );
  if (out !== t) {
    fs.writeFileSync(f, out);
    console.log("fixed", f);
  }
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(ts|tsx|js|jsx)$/.test(p)) processFile(p);
  }
}

walk(path.join(__dirname, "..", "src"));