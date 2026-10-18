# What is KV-cache in an LLM?

Official page: https://aitje.com/en/knowledge/wat-is-kv-cache

> The KV cache stores intermediate results from a language model, so that it does not have to repeat as much work during text generation. This helps with speed, but also requires memory.

### In brief

KV here stands for key and value: two types of internal vectors that a transformer uses during attention. Attention helps the model process connections with previous input. The KV cache stores previously calculated keys and values so that they can be reused for the next token. In this LLM context, therefore, it does not refer to a general key-value database.

### Why does that make a difference?

A language model typically constructs a response step by step. The next token depends in part on the previous tokens. Without reuse, it would have to recalculate many earlier intermediate results each time. The cache eliminates the need for some of that repetitive work. It is an optimisation of the model’s execution, not additional training.

### The cache also uses memory

More retained context and more concurrent requests may require more cache memory. Exactly how much depends, amongst other things, on the architecture and the chosen caching strategy. Some models only retain a limited window in certain layers. A model file that fits into memory is therefore not enough: there must also be sufficient space for the active requests.

### A practical example

A local assistant handles short queries smoothly. With a long document or multiple users at the same time, the same machine is more likely to become overloaded. The weights have not increased, but more working memory is required to handle the requests. You may then, for example, need to run fewer conversations simultaneously or select the context more carefully. You will need to test which solution works best on that particular installation.

### KV-cache is not a permanent personal memory

The cache contains internal interim results for a specific context. It is not a standard list of facts and does not automatically alter the model weights. Saving conversation history, reusing repeated prompt sections and managing personal knowledge are other functions. Whilst they may be technically related, they should not all be described as the same type of memory in a user promise.

### What does this mean for your setup?

Allocate capacity for model weights and context. Test latency and memory usage based on the number of users and document lengths you anticipate. There are various caching techniques, such as reduced precision or relocation to different memory. These can save space, but may also cause delays or differences in quality. You should therefore choose based on your specific workload.

## Sources

- [Hugging Face — KV cache and caching strategies](https://huggingface.co/docs/transformers/en/kv_cache)
- [Hugging Face — How caching works](https://huggingface.co/docs/transformers/en/cache_explanation)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
