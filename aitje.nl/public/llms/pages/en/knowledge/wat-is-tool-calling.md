# What is tool calling?

Official page: https://aitje.com/en/knowledge/wat-is-tool-calling

> With tool calling, a language model can suggest calling a function. Your software retrieves data or performs an action, within the permissions you set yourself.

### In brief

Tool calling, also known as function calling, allows a model to make a structured request to use an available function. Examples include checking stock levels, performing a calculation or searching for a document. The model determines which function and input seem appropriate. The application checks that request and then decides whether to execute the function.

### The model does not execute the code itself

You describe which functions are available and which fields they expect. The model generates a call, often in a structured format. Your software does the actual work and returns the result. This way, the calculation remains in the code and the current stock levels remain in the stock management system. This is a different mechanism to asking the model to guess an answer based on its training.

### A practical example

An employee asks how many units of an item are available. The model submits a stock enquiry with an item number. The application checks access rights, requests the current stock levels from the system and returns only the relevant fields. The model then formulates a clear response. If an item number is missing, the workflow may first request clarification.

### Why does this help with token optimisation?

A function can retrieve specific data rather than sending an entire data set. Fixed calculations and format checks can also take place outside the model. As a result, the model has less unnecessary input. Tool descriptions, results and additional model runs also require context and time. Therefore, measure the entire chain, not just the first call.

### Rights are associated with the application

A tool request does not constitute consent. The executing software must verify user rights, input and permitted actions. Checking stock requires different permissions to placing an order. For actions with consequences, you can incorporate an explicit confirmation. Furthermore, return a clear error message if a tool does not work, so that the model does not have to assume a successful outcome.

### How does this relate to agents and MCP?

An agent can use multiple tool calls to carry out a task. MCP provides a common way of making tools and resources available to an AI application. Tool calling also works without MCP and does not automatically turn a standalone chatbot into an independent agent. The workflow determines how much freedom of choice the model actually has.

## Sources

- [Hugging Face — Tool usage and function calls](https://huggingface.co/docs/transformers/en/chat_extras)
- [Model Context Protocol — Architecture and components](https://modelcontextprotocol.io/docs/learn/architecture)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
