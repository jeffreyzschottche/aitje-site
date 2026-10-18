# How does generation work with diffusion models?

Official page: https://aitje.com/en/knowledge/hoe-werkt-generatie-met-diffusion-modellen

> Many generative image models construct an image through successive steps starting from noise. What roles do the model, the prompt and the settings play during that process?

### In brief

A diffusion model learns how a coherent image can emerge from a distorted representation. Image generation often begins with random noise. The model then calculates successive processing steps, with a prompt guiding the outcome. This is how an image is created. This explanation concerns diffusion; not every generative model uses exactly this process. Text generation using a language model, for example, typically works by predicting subsequent tokens.

### What does the model learn during training?

A simplified explanation is that training images are corrupted with varying amounts of noise. The model learns how to reduce this corruption. During use, this knowledge is applied to build a new output from a noisy starting point. The precise prediction and calculation depend on the model and the chosen method. This is not a matter of removing a filter from a saved photo, but of producing a newly calculated result.

### How does text provide context for the image?

A text encoder converts the description into a representation that the generation process can use. The image model processes this information during the successive steps. In many pipelines, this takes place in a compact, latent space rather than directly on all image pixels. A decoder converts the final representation into an image. As a result, image generation often consists of several cooperating components rather than a single calculation.

### What do the steps and guidance involve?

The number of steps determines how often the pipeline performs an operation. More steps generally require more computation, but do not necessarily result in infinitely better quality. A scheduler determines how the successive steps are computed. For supported models, ‘Guidance’ controls the weighting of the task. A higher value does not automatically mean a better result. Settings must be appropriate for the model and the task; values from different models are not necessarily comparable.

### What is a seed in generation?

A seed determines the randomised start within the environment being used. Using the same seed allows you to compare variants more effectively whilst keeping other settings constant. This is useful if you wish to evaluate a single change to the command. It does not mean that the same number will produce exactly the same image on a different model, different hardware or a different software version. To ensure reproducibility, you should also record the model version, settings and the other components of the pipeline.

### What does this mean in practical terms?

Start with a specific task and assess which settings produce usable results. If necessary, work with a smaller format first to explore the composition, and only then move on to the final format. Editing a selected area may be more appropriate than having an entire image regenerated. Keep track of how many attempts and editing steps are required. This allows you to assess the speed and costs of the entire image workflow rather than just a single generation.

## Sources

- [Hugging Face — Components of a diffusion pipeline](https://huggingface.co/docs/diffusers/en/quicktour)
- [Hugging Face — Text-to-image](https://huggingface.co/docs/diffusers/en/using-diffusers/conditional_image_generation)
- [Hugging Face — Reproducible generation](https://huggingface.co/docs/diffusers/en/using-diffusers/reusing_seeds)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
