# What is fine-tuning?

Official page: https://aitje.com/en/knowledge/wat-is-fine-tuning

> Fine-tuning further trains an existing model using targeted examples. When is this helpful, and when are a better prompt or document search function sufficient?

### In brief

Fine-tuning involves further training an existing model on a targeted set of examples. You don’t start from scratch: the model has already learnt general patterns. Through additional training, you aim to improve its behaviour for a specific task, style or domain. In doing so, the model’s weights are adjusted or additional trainable components are utilised.

### What sort of behaviour can you adjust?

Think about organising messages according to your own categories, always using the same response format, or better completing certain types of code. The examples illustrate the desired relationship between input and output. Fine-tuning does not guarantee that the model will apply all business rules without error. Rules that must be strictly adhered to are best checked using standard software as well.

### Fine-tuning is different from retrieving documents

With RAG, you search for relevant information and provide it in response to a query. Fine-tuning involves changing model behaviour through training. For up-to-date prices, staff details and manuals, fetching data is often the easiest way to keep information current. The two techniques can be combined: a customised model can provide answers based on information from a search function.

### A practical example

A support team always uses the same eight categories. First, test a clear prompt with a few examples. If the classification is not sufficiently consistent with this and there are enough well-labelled messages, you can investigate fine-tuning. Set aside a separate test set. This allows you to assess whether the model also works on messages it did not encounter during training.

### What are adapters and LoRA?

With some methods, you train small additional components rather than all the original weights. Such adapters can reduce the training resources required. LoRA is a well-known technique for this. This makes training more accessible, but the quality remains dependent on the examples and evaluation. Furthermore, an adapter must be compatible with the model version for which it was created.

### When is it worth it?

Compare the improvement with the costs of preparing, training, testing and maintaining data. First, try to see whether a more clearly defined task, prompt or search step is sufficient. Use fine-tuning only when that extra effort resolves a demonstrable problem. In doing so, retain the data rights, versions and test results used, so that any subsequent changes remain verifiable.

## Sources

- [Hugging Face — Fine-tuning](https://huggingface.co/docs/transformers/en/training)
- [Hugging Face — Parameter-efficient fine-tuning](https://huggingface.co/docs/transformers/en/peft)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
