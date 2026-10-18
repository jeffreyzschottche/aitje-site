// AITJE's own C6 round 2 report and Qwen's published model card. Different evaluations, kept separate.
export const coderEvidence = {
  local: {
    date: "17 september 2026",
    hardware: "BOSGAME M6 · 32 GB",
    tasks: "Kortingscodes, een afrondingsbug en een CLI-tool",
    models: [
      { name: "tiel-coder-35b", passed: 6, total: 6, medianSeconds: 553 },
      { name: "ornith-35b (1.0)", passed: 5, total: 6, medianSeconds: 384 },
      { name: "ornith-1.5-35b", passed: 4, total: 6, medianSeconds: 831 },
    ],
  },
  published: {
    source: "https://huggingface.co/Qwen/Qwen3.8-27B",
    checked: "18 oktober 2026",
    models: ["Qwen3.8-27B", "Claude Opus 4.6 Max"],
    benchmarks: [
      {
        name: "SWE-bench Pro",
        task: "Softwarewijzigingen",
        qwen: 61.7,
        claude: 53.4,
      },
      {
        name: "Terminal Bench 2.1",
        task: "Terminaltaken · Terminus",
        qwen: 73.0,
        claude: 78.2,
      },
      {
        name: "NL2Repo-Bench",
        task: "Code genereren in repositories",
        qwen: 42.3,
        claude: 47.6,
      },
    ],
  },
} as const;
