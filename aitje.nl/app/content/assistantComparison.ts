// Checked against primary sources on 18 October 2026. Keep model versions and evaluation caveats together.
export const assistantComparison = {
  checkedOn: "18 oktober 2026",
  pricingSource: "https://claude.com/pricing",
  benchmarkSource: "https://huggingface.co/Qwen/Qwen3.8-27B",
  localSource: "https://ollama.com/library/qwen3.8",
  inputMillions: 10,
  outputMillions: 2,
  models: [
    { name: "Claude Sonnet 5.5", inputUsd: 2, outputUsd: 10 },
    { name: "Claude Opus 5.5", inputUsd: 4, outputUsd: 20 },
    { name: "Claude Opus 4.6", inputUsd: 5, outputUsd: 25 },
  ],
  benchmarks: [
    {
      name: "IFBench",
      description: "Instructies volgen",
      qwen: 79.5,
      claude: 62.5,
    },
    {
      name: "OmniDocBench 1.5",
      description: "Documenten begrijpen",
      qwen: 91.1,
      claude: 86.6,
    },
    {
      name: "GPQA Diamond",
      description: "Wetenschappelijk redeneren",
      qwen: 89.2,
      claude: 91.3,
    },
    {
      name: "Terminal Bench 2.1",
      description: "Taken in de terminal · Terminus",
      qwen: 73.0,
      claude: 78.2,
    },
  ],
} as const;
