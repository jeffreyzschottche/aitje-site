# What are AI hallucinations?

Official page: https://aitje.com/en/knowledge/wat-zijn-ai-hallucinaties

> AI can provide a convincing answer that is factually incorrect. Learn how to recognise fabricated information and build applications that handle uncertainty more effectively.

### In brief

An AI hallucination is generated content that is incorrect, fabricated or unsubstantiated, even though the response may sound reliable. Examples include a non-existent source, an incorrect amount or a software function that does not exist at all. The term describes an error in the output; it does not imply that the model possesses human perception or conscious intent.

### Why is this happening?

A language model generates appropriate output based on learnt patterns and the available context. This process is not an automatic fact-check. Missing information, unclear questions or incorrect sources may lead to a plausible but inaccurate response. Even with sufficient context, the model may misinterpret passages or mix up information from different sources.

### A practical example

An employee asks about the notice period in a contract. The document contains no provision on this matter. A poorly configured assistant enters a standard notice period as if it were taken from the contract. A better-configured application states that the provision has not been found, shows what has been consulted and refers the query for assessment.

### Does this help with searching within your own documents?

RAG can add relevant source information, meaning the model needs to rely less on its general training to supplement its output. However, even then, the wrong documents may be found or source passages may be misrepresented. Where possible, show the passage used and the document version. A source reference is only useful if you can verify whether the source actually supports the conclusion.

### What checks can you add?

Have the model identify any missing data and limit the response to the available information when the task requires it. Check amounts and mandatory fields against the code. Use test questions where the correct answer is known, including questions that cannot be answered. For important decisions, a proper assessment remains necessary, even if previous answers were correct.

### What does this mean for AITJE?

A local installation does not prevent hallucinations. Quality depends on model selection, data provision and checks. You should therefore build an application around a clear task and a recognisable boundary: when can the system respond, when must it stop, and who is monitoring it at that point? Reliability also involves handling a query for which no substantiated answer is available in the right way.

## Sources

- [Anthropic — Reducing hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
- [Research — Code hallucinations and API documentation](https://arxiv.org/abs/2407.09726)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
