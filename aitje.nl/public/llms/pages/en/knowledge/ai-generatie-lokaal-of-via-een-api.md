# AI generation locally or via an API?

Official page: https://aitje.com/en/knowledge/ai-generatie-lokaal-of-via-een-api

> Text, images and other output can sometimes be generated on your own hardware or produced via an external model service. Which approach best suits your data, desired quality and intended use?

### In brief

Local generation means that the model runs on your own device or server. With an external model API, you send a request to a service that carries out the processing. These are choices regarding the execution environment. An API can also point to your own local server: API means an interface, not necessarily the cloud. When weighing up your options, you must therefore be clear about where the model runs and what data leaves the environment.

### Which models can you run yourself?

You will need model files that you are authorised to use, suitable output software and sufficient computing power and memory. A freely downloadable model is not automatically open source or suitable for every application. Furthermore, the required capacity varies significantly between text, images, audio and video. Consider the specific task, output length and the number of concurrent users. This provides more guidance than simply a general description such as a large or small AI computer.

### When might an external approach be appropriate?

An external service can provide access to a model that you cannot run yourself, as well as additional features or capacity for variable usage. This comes with certain dependencies, such as connectivity, availability and the terms and conditions for data processing. Limits and waiting times may also affect the workflow. An external route is therefore a deliberate choice for a specific task, not automatically the best option for all data and all steps.

### How do you compare the actual costs?

For in-house hardware, purchase, energy, management and utilisation are all taken into account. For external services, the rate may, for example, be calculated per token, image, minute of audio, video clip or computing time. Also factor in failed attempts, regeneration and post-processing. A route with a low price per request can prove expensive if a large number of requests are required. Compare the total costs per usable end result based on your expected usage.

### Can you combine local and external services?

Yes, different steps can follow different execution paths. Code can first retrieve and structure data. A local model can prepare a draft, after which an external route is chosen for a specific additional task. Alternatively, all model processing remains local whilst a standard API supplies business data. Define what information each step receives. A combination remains manageable only if the division of tasks, data flows and exceptions are clear.

### How do you choose a suitable setup?

Use a small selection of representative projects to compare quality, turnaround time, correction work and costs. Determine which processing should remain local and how much management you wish to handle yourself. Also test whether the implementation is suitable for the expected number of users. Then choose a model route for each task and ensure the integration remains interchangeable where possible. In this way, you base your decision on practical use and control, rather than on a single impressive demonstration.

## Sources

- [Hugging Face — Memory usage of generative models](https://huggingface.co/docs/diffusers/en/optimization/memory)
- [Hugging Face — Text generation with LLMs](https://huggingface.co/docs/transformers/en/llm_tutorial)
- [Mistral — Code and development tools](https://docs.mistral.ai/vibe/code/overview)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
