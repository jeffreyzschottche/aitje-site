# What is quantisation in AI models?

Official page: https://aitje.com/en/knowledge/wat-is-quantisatie

> Quantisation stores model data with lower precision. As a result, a model may require less memory, but the impact on speed and quality varies depending on the application.

### In brief

Quantisation means that numbers in an AI model are represented with less precision. As a result, they take up less space. In the case of LLMs, this often involves model weights, but other calculations and stored intermediate results can also be quantised. The aim is to make the application runnable with less memory and appropriate computational effort.

### What do ‘16-bit’, ‘8-bit’ and ‘4-bit’ mean?

Bits are the units in which a number is stored. Fewer bits offer fewer possible values. A method must therefore determine how the original numbers are approximated. A model with 4-bit weights is not simply four times smaller than the full 16-bit installation: additional scaling data, software and the memory required for context also need to be taken into account.

### A comparison to help you understand

Consider rounding a measured value with many decimal places down to fewer decimal places. For some applications, this makes little difference; for others, the loss of precision is significant. This is a simplified comparison. Quantisation uses various techniques to minimise error and retain important information as effectively as possible.

### Why is this useful for local AI?

A model that does not fit into the available memory in its original form may still be usable in a different version. This can increase the choice of models on a Mac, PC or server. At the same time, you must reserve space for input, ongoing conversations and the KV cache. Therefore, file size alone does not determine whether the application will run smoothly.

### What might you be contributing?

Quality may vary, for example when dealing with precise instructions, calculations or less common languages. Speed improvements are also not guaranteed: these depend on hardware and support within the execution software. You should therefore test the actual implementation using the same questions and documents. In particular, check whether errors occur in the areas that are important for your work.

### Making a practical choice

Record the model version, quantisation and software used. Compare quality, memory and latency based on the expected number of users. Then choose the configuration that meets your requirements. A small file size in itself is not the aim; a stable application with sufficient quality and capacity is.

## Sources

- [Hugging Face — Quantisation overview](https://huggingface.co/docs/transformers/en/quantization/overview)
- [Hugging Face — KV cache and caching strategies](https://huggingface.co/docs/transformers/en/kv_cache)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
