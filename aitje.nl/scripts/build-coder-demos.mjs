import { build, version as esbuildVersion } from "esbuild";
import { mkdir, mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
const source = new URL("../app/content/coder-demos/", import.meta.url);
const target = new URL("../public/demos/coder/", import.meta.url);
await mkdir(target, { recursive: true });
for (const name of ["aura", "board"]) {
  await writeFile(
    new URL(`${name}.html`, target),
    await readFile(new URL(`${name}.html`, source)),
  );
  await writeFile(
    new URL(`${name}.js`, target),
    await readFile(new URL(`${name}.js`, source)),
  );
}
await build({
  entryPoints: [new URL("aura.js", source).pathname],
  outfile: new URL("aura.bundle.js", target).pathname,
  bundle: true,
  minify: true,
  format: "esm",
  target: "es2022",
  legalComments: "eof",
});
// Downloadable examples include the source and runnable output.
for (const name of ["aura", "board"]) {
  const work = await mkdtemp(join(tmpdir(), "aitje-coder-demo-"));
  try {
    await writeFile(
      join(work, "index.html"),
      await readFile(new URL(`${name}.html`, source)),
    );
    await writeFile(
      join(work, `${name}.js`),
      await readFile(new URL(`${name}.js`, source)),
    );
    const files = ["index.html", `${name}.js`, "README.md"];
    let instructions =
      "# AITJE Coder — " +
      name +
      "\n\nZelfstandig websitevoorbeeld, speciaal voor de productpagina geschreven. Geen benchmark van een lokaal model.\n\nStart een lokale webserver in deze map:\n\n    python3 -m http.server 8080\n\nOpen http://localhost:8080. De voorbeelddata blijven in het geheugen.\n";
    if (name === "aura") {
      await writeFile(
        join(work, "aura.bundle.js"),
        await readFile(new URL("aura.bundle.js", target)),
      );
      const pkg = {
        name: "aitje-aura-example",
        private: true,
        type: "module",
        scripts: {
          build:
            "esbuild aura.js --bundle --minify --format=esm --outfile=aura.bundle.js",
        },
        dependencies: { three: "0.186.1" },
        devDependencies: { esbuild: esbuildVersion },
      };
      await writeFile(
        join(work, "package.json"),
        JSON.stringify(pkg, null, 2) + "\n",
      );
      instructions +=
        "\nDe render is al gebundeld en werkt zonder installatie. Wil je de broncode veranderen? Pas aura.js aan, voer npm install uit en daarna npm run build. Three.js en esbuild behouden hun eigen licentie.\n";
      files.push("aura.bundle.js", "package.json");
      await writeFile(
        join(work, "LICENSE-THREE.txt"),
        await readFile(
          new URL("../node_modules/three/LICENSE", import.meta.url),
        ),
      );
      files.push("LICENSE-THREE.txt");
    }
    await writeFile(join(work, "README.md"), instructions);
    const archive = new URL(`${name}-example.zip`, target);
    await rm(archive, { force: true });
    execFileSync("zip", ["-q", archive.pathname, ...files], { cwd: work });
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}
console.log(
  "Built the procedural AURA scene and the working Orbit projectboard.",
);
