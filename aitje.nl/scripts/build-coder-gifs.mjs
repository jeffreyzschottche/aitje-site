import { copyFile, mkdtemp, rm, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Stable, uncropped product screens. No zoom, pan or change in framing.
const assets = fileURLToPath(new URL("../public/img/coder/", import.meta.url));
const scenes = {
  opdracht: [
    "composer-leeg-desktop-dark",
    "composer-desktop-dark",
    "taak-start-desktop-dark",
  ],
  review: [
    "taak-resultaat-desktop-dark",
    "taak-verslag-desktop-dark",
    "taak-diff-desktop-dark",
  ],
  wachtrij: ["wachtrij-desktop-dark", "wachtrij-bezig-desktop-dark"],
  instellingen: [
    "repositories-desktop-dark",
    "budgetten-desktop-dark",
    "skills-desktop-dark",
    "koppelingen-desktop-dark",
  ],
  assistent: ["assistent-desktop-dark"],
  telefoon: [
    "composer-leeg-telefoon-dark",
    "taak-resultaat-telefoon-dark",
    "taak-verslag-telefoon-dark",
  ],
};
const work = await mkdtemp(join(tmpdir(), "aitje-stable-gifs-"));
try {
  for (const [name, shots] of Object.entries(scenes)) {
    const frames = shots.map((shot) =>
      join(assets, "screenshots", `${shot}.webp`),
    );
    const list =
      frames
        .map((path) => `file '${path.replaceAll("'", "'\\''")}'\nduration 3`)
        .join("\n") + `\nfile '${frames.at(-1)}'\n`;
    const input = join(work, `${name}.txt`);
    await writeFile(input, list);
    const size = name === "telefoon" ? "590:1276" : "1280:800";
    execFileSync(
      "ffmpeg",
      [
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        input,
        "-filter_complex",
        `fps=5,scale=${size}:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer:bayer_scale=4`,
        "-loop",
        "0",
        join(assets, "gifs", `${name}.gif`),
      ],
      { stdio: "inherit" },
    );
    await copyFile(frames[0], join(assets, "posters", `${name}.webp`));
    console.log(`${name}: ${frames.length} full product screens, no zoom`);
  }
} finally {
  await rm(work, { recursive: true, force: true });
}
