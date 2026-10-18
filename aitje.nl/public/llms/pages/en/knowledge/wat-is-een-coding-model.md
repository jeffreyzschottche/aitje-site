# What is a coding model?

Official page: https://aitje.com/en/knowledge/wat-is-een-coding-model

> A coding model is designed for tasks involving software code. It can assist with explanations, additions and modifications, but a functioning development environment also requires tools and tests.

### In brief

A coding model is an AI model that is specifically suited to, or has been further trained for, programming tasks. It can complete code, provide explanations, investigate errors or suggest changes. General language models can also perform programming tasks. ‘Coding model’ therefore describes the task-specific nature of the model; it is not a guarantee that every generated change will work.

### What makes programming a special task?

Code must be compatible with a language, libraries, project structure and existing behaviour. A proposal may look convincing yet still use a non-existent function or overlook an important edge case. Good context therefore consists of relevant files, instructions and up-to-date documentation. Simply sending a large amount of source code is not the same as providing the correct information.

### A model and a coding agent are different

The model generates output. A coding agent also uses software to read files, apply changes and carry out checks. The permissions and development tools determine which actions are possible. A model with programming knowledge therefore does not automatically have access to your repository or permission to publish a change.

### A practical example

A developer requests that an error in order validation be rectified. The application provides the relevant code and the expected behaviour. The model suggests a change, after which the development environment runs appropriate tests. The developer assesses the outcome. If a test fails, that information is used to refine the change; a passing test result does not replace all substantive assessment.

### How do you choose a suitable model?

Test using your programming language and real project tasks. Compare the quality of changes, the level of guidance required and the time taken to achieve a usable result. Also consider integration with development tools and the ability to handle longer context. A model that performs well on a small puzzle may be less suitable for maintenance within a large existing codebase.

### What does this mean for AITJE Coder?

A dedicated coding environment can combine a model running on local hardware or a dedicated server with suitable tools. This offers different management and data options compared to running everything via an external API. External models can also be deliberately deployed when the task requires it. Ensure that code, development rights and model selection are organised in such a way that you can monitor changes and adapt your environment.

## Sources

- [Mistral — Coding with a model and development tools](https://docs.mistral.ai/vibe/code/overview)
- [Research — Code hallucinations and API documentation](https://arxiv.org/abs/2407.09726)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
