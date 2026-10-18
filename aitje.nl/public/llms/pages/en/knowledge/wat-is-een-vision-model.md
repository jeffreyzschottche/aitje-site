# What is a vision model?

Official page: https://aitje.com/en/knowledge/wat-is-een-vision-model

> A vision model processes visual information, such as photographs and document images. A vision-language model combines this with language to answer questions about an image.

### In brief

A vision model is an AI model for visual information. For example, it can classify images or recognise objects. A vision-language model combines images and language: you provide an image plus a question and receive a textual response. Not every vision model can chat, and not every language model can process images.

### What can you do with it?

Think of extracting data from an image of a document, explaining a graph or describing a photograph. Whether a model performs well depends on its training, the task and the quality of the input. Furthermore, video is a separate capability that not every image model supports. A product that accepts photos is therefore not automatically suitable for every visual application.

### How does this differ from OCR?

OCR focuses on recognising handwritten or printed text. A vision-language model can also answer questions about layout, objects and relationships within an image. For a fixed document task, an OCR step followed by standard code may be more suitable. You can also combine techniques, for example, text recognition for fields and a model for providing an explanation.

### A practical example

A technician submits a photograph and a brief note. A model can generate a conceptual description of the visible situation. The workflow then retrieves material prices from a database and allows a member of staff to check the proposed work. The model does not need to guess the prices from the photograph. This is a possible application; it is not a guarantee that every detail will be reliably recognised.

### What should you bear in mind?

Blurry images, small text and unclear details can lead to misinterpretations. Even an image model can convincingly describe something that is not visible. Therefore, leave missing or uncertain fields open for verification. Test using the actual types of photos and documents encountered in practice, including difficult and incomplete input.

### What does this mean for your AI environment?

Image processing may require more capacity and has its own usage limits. Also check where images are processed and whether personal data in the images is required for the task. Compare a local model, an external API and a combination of OCR, code and AI. The best approach depends on accuracy, data policy and the cost per verified result.

## Sources

- [Hugging Face — Multimodal models using text and images](https://huggingface.co/docs/transformers/v4.52.3/en/chat_templating_multimodal)
- [InternLM-XComposer-2.5 — Research into vision-language models](https://arxiv.org/abs/2407.03320)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
