# What is a vector in AI?

Official page: https://aitje.com/en/knowledge/wat-is-een-vector

> A vector is an ordered sequence of numbers. In AI, such a sequence helps to represent, compare and retrieve information — for example, when searching by meaning.

### In brief

A vector is an ordered sequence of numbers, such as [0.2; 0.8; -0.1]. Each number has a fixed position, a dimension. Vectors enable software to process information that originally consists of text, images or other data. A vector is the form of representation; the way in which you arrange those numbers determines what they mean.

### A simple comparison

You can describe a product using figures for weight, length and price. That way, you know exactly what each dimension means. AI vectors can have many more dimensions, with the characteristics being learnt collectively. Such a dimension is usually not easy to name, such as ‘topic’ or ‘tone’. The combination of numbers is what matters.

### What is the difference between this and an embedding?

An embedding is a learned representation of information, often in the form of a vector. An embedding model can place sentences with related meanings close together. Not every vector is therefore an embedding. Vectors are also used for other internal calculations, including the keys and values in the attention layers of a language model.

### How can you search for it?

A search application uses the same embedding model to create a vector from the query and from document passages. It then compares the vectors to find related passages. Different comparison methods measure that relationship in different ways. A high similarity score means that a passage is likely to be relevant; it is not proof that the passage is true or up to date.

### A practical example

Someone is looking for information on how to regain access. A user guide uses the words ‘reset password’. Searching by embeddings can help locate that passage, even without the exact same words. You then display the original passage with its source and date. The vector therefore does not replace the document, but helps to locate it.

### What do you need to set up properly?

Compare representations created for the same vector space. If you change the embedding model, re-indexing may be required. In addition, maintain document permissions and source information. A user should not be shown a confidential passage simply because it closely matches the query. For a useful search function, the text found and access control are at least as important as the vectors.

## Sources

- [Google Machine Learning Crash Course — Embedding space](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space)
- [Hugging Face — KV cache and caching strategies](https://huggingface.co/docs/transformers/en/kv_cache)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
