# What are tokens in AI?

Official page: https://aitje.com/en/knowledge/wat-zijn-tokens

> A language model works with tokens: small building blocks of input and output. They help determine how much context fits, how long a response takes and what an API request costs.

### In brief

A token is a unit used by a language model to process input and generate output. In the case of text, it can be a whole word, part of a word, a punctuation mark or another combination of characters. The tokeniser splits the input and assigns numbers to the segments. Tokens in this sense are not a cryptocurrency and are not separate subscription credits.

### A token is not the same as a word

The number of tokens in a sentence depends on the tokeniser and the text. A long Dutch compound word may be split into several parts. Code and numbers may be split differently from running text. A fixed ratio between words and tokens is therefore, at best, an estimate. For an accurate count, use the tokeniser or usage report of the chosen model.

### Input tokens and output tokens

Input tokens comprise the information provided to the model, such as instructions, conversation history and retrieved documents. Output tokens are the generated content. APIs may apply different rates for input, output, reused context and any reasoning tokens. Check the actual billing for the service used, even if you only see a short answer.

### A calculation example

For the purposes of this explanation, let’s assume that input costs €4 per million tokens. In that case, 100,000 input tokens would cost €0.40. This is a fictitious rate and only covers the input portion: output, additional requests and other costs may be added on top of this. If you resubmit the same large documents at every step, that input portion can quickly add up.

### Use fewer tokens without losing any information

Have the code remove duplicate fields, perform calculations and retrieve relevant data in advance. A search step can select the necessary passages, so that the model does not have to process the entire archive every time. Do, however, check that the selected information is sufficient. An assignment that is too brief may lead to errors and the need for additional attempts, which could ultimately make the final result more expensive.

### What does this mean for local AI?

A local model also processes tokens, although you do not need to receive an external token invoice. Input length and response length affect computational load, memory usage and latency. For both APIs and in-house hardware, measure the costs and quality per completed task. The cheapest token is not automatically the cheapest usable result.

## Sources

- [Hugging Face — Tokenisers and text segmentation](https://huggingface.co/docs/transformers/en/tokenizer_summary)
- [Hugging Face — Text generation with LLMs](https://huggingface.co/docs/transformers/en/llm_tutorial)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
