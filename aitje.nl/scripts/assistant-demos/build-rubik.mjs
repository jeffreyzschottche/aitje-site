import { build } from "esbuild";
import { writeFile } from "node:fs/promises";
const result = await build({
  entryPoints: ["scripts/assistant-demos/rubiks-cube.js"],
  bundle: true,
  write: false,
  minify: true,
  format: "iife",
  platform: "browser",
  target: "es2022",
});
const html = `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0;padding:18px 22px;background:#1b211e;color:#f8faf5;font:14px system-ui}h2{font-size:23px;letter-spacing:-.7px;margin:7px 0}p{color:#b4c0ac;line-height:1.6;margin:0 0 5px}.label{font-size:10px;letter-spacing:2px;color:#facc15;text-transform:uppercase}#rubik-canvas{height:325px;width:100%;background:radial-gradient(ellipse,#ffffff10,transparent 65%)}#rubik-canvas canvas{display:block}label{display:flex;justify-content:space-between;font-size:12px;color:#c3ceb9;margin-top:7px}input{width:100%;accent-color:#facc15;margin:10px 0}button{background:#2f3a27;border:1px solid #5b7047;color:#e3ebda;border-radius:7px;padding:7px 10px;font:11px system-ui;cursor:pointer}small{font-size:10px;color:#98aa8a;float:right;margin-top:9px}</style></head><body><span class="label">3D render · in de chat</span><h2>Een volledige Rubik’s Cube</h2><p>27 blokjes · 54 gekleurde vlakken · belichting en rotatie</p><div id="rubik-canvas" aria-label="Gerenderde 3D Rubik’s Cube"></div><label for="rotation">Kijkhoek <span id="angle">Automatisch</span></label><input id="rotation" type="range" min="-180" max="180" value="30"><button id="rotate">Automatisch draaien</button><small>Zelfstandige 3D-weergave</small><script>${result.outputFiles[0].text.replaceAll("</script", "<\\/script")}</script></body></html>`;
await writeFile("scripts/assistant-demos/rubiks-cube.html", html);
console.log(
  "Built a complete Three.js Rubik render with 27 cubies and 54 tiles.",
);
