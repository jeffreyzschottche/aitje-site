# What are the weights of an AI model?

Official page: https://aitje.com/en/knowledge/wat-zijn-model-weights

> Weights are the trained numbers that determine how a model processes information. Find out how model weights, parameters and a downloadable model file are related.

### In brief

Weights, or model weights, are numbers in a neural network that influence how input is converted into output. During training, these numbers are adjusted to improve performance on training examples. During normal use of a language model, the weights usually remain the same. The model uses them in conjunction with the information from the current prompt.

### Why are they called ‘weights’?

A weight determines how heavily a component of a calculation is factored in. A simple equation is a formula in which different characteristics each have their own multiplication factor. An LLM involves much more complex, sequential calculations. The meaning is spread across large numbers of weights; there isn’t a single, recognisable box for every fact that you can open and edit.

### What do 7B or 70B parameters mean?

The B stands for billion. A designation such as 7B usually refers to approximately seven billion model parameters. The number gives an indication of scale, but does not fully predict the quality for your specific task. Architecture, training data and further training also play a part. Furthermore, with some models, not all parameters are used simultaneously for every token.

### What is included in a model download?

Model weights are stored in files. To run a language model, you also need suitable output software, model configuration and a tokeniser. The precision with which the weights are stored affects how much space they take up. Quantisation allows you to adjust this storage requirement. The memory required for running requests and the KV cache is in addition to the memory required for the weights.

### A practical example

You can test the same model version in different configurations, for example with weights set to higher or lower precision. These configurations may have different memory requirements and produce different results. A download may fit on your hard drive, whilst the application may not fit properly into your working memory. You should therefore also test with real documents and the intended number of concurrent users.

### What does ‘access to weights’ mean?

Available weights allow you to run the model yourself, provided the hardware, software and licence permit it. This does not mean that all training data is public or that there are no restrictions on use. Record the version and rights. This way, you know which model you are managing and can later compare any change in behaviour with the original version.

## Sources

- [Google Machine Learning Crash Course — Weights in a model](https://developers.google.com/machine-learning/crash-course/linear-regression)
- [Hugging Face — Quantisation overview](https://huggingface.co/docs/transformers/en/quantization/overview)
- [Open Source Initiative — Open Source AI Definition 1.0](https://opensource.org/ai/open-source-ai-definition)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
