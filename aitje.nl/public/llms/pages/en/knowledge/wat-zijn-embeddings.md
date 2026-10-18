# What are embeddings?

Official page: https://aitje.com/en/knowledge/wat-zijn-embeddings

> Embeddings convert text into vectors so that systems can recognise pieces of information that are similar in content. They form an important foundation for semantic search and many RAG applications.

### In brief

Embeddings are mathematical representations of text. Rather than simply comparing words literally, a system can use embeddings to identify which pieces of content are similar in meaning. This makes it easier to identify meaning and relevance.

### Why are embeddings necessary?

Without embeddings, search often relies primarily on exact matches. This is limiting, as people can phrase the same question in many different ways. Embeddings help a system to recognise similarities in content, even when the words used differ.

### How are they used in RAG and search systems?

Documents are broken down into smaller sections, which are then converted into vectors. When a new question is asked, the system also creates a vector of the question and searches for text fragments that are thematically similar. This allows it to retrieve relevant context before the model provides an answer.

### What determines quality?

The quality depends on the embedding models used, how documents are segmented, how up-to-date the source data is and how the search layer is configured. Good embeddings do not compensate for a poor source structure. They work best when the entire knowledge chain is sound.

### What do you need to remember?

Embeddings do not provide answers in their own right. They primarily help to find the right information. Think of them as a technical foundation beneath knowledge bases, search functions and RAG systems, rather than as a standalone end solution.

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
