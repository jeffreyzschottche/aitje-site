# What is inference in an LLM?

Official page: https://aitje.com/en/knowledge/wat-is-inference

> Inference is the process of using a trained model to produce an outcome. In the case of an LLM, this involves processing input and then constructing a response.

### In brief

Inference is the phase in which you use a trained AI model to produce a prediction or other outcome. With a language model, this could be an answer, a summary or a piece of code. The model performs calculations using the available weights and the current input. A normal chat does not automatically change those weights; training and using the model are separate processes.

### What happens during text generation?

First, the input is converted into the format expected by the model. In the case of an LLM, text consists of tokens. The model then processes the context and constructs the output. In many generative language models, this happens token by token. The selection of the next tokens also depends on settings that determine how predictable or varied the output may be.

### Prefill and decode

Prefill is the processing of the provided context before the next output is generated. Decode is the repeated generation of new tokens. A long input can increase the time to first response; a long reply requires additional generation work. The KV cache helps to reuse certain previous calculations during that process.

### A practical example

You are asking for a summary of a document. Processing the document text is part of inference, as is creating the summary. If you then ask a specific question, further calculations are required. Whether previous context is reused efficiently depends on the application. A saved chat does not automatically mean that all previous computational costs are eliminated.

### What does the speed depend on?

Model size, precision, hardware, input length and concurrent requests all play a part. A quick, short test therefore does not always predict how a team will perform with large documents. Measure the latency to the first token and the time to a fully usable response. Search steps and tool calls can also affect the total turnaround time.

### Locally and via an API

Inference can take place on your own device, on your own server or via an external provider. With an API, the user pays according to the terms of service; running it yourself entails hardware and management costs. The technical core remains the same: an existing model is used. Optimisation begins with a clear task, a specific context and an appropriate implementation.

## Sources

- [Hugging Face — Text generation with LLMs](https://huggingface.co/docs/transformers/en/llm_tutorial)
- [Hugging Face — KV cache and caching strategies](https://huggingface.co/docs/transformers/en/kv_cache)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
