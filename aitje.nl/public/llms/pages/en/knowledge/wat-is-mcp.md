# What is MCP, the Model Context Protocol?

Official page: https://aitje.com/en/knowledge/wat-is-mcp

> MCP provides AI applications with a unified way of accessing tools and information sources. What does this make easier, and what do you still need to sort out yourself?

### In brief

MCP stands for Model Context Protocol. It is an open protocol for connecting AI applications with tools and information sources. It describes how these components advertise their capabilities and exchange requests. This means that not every connection needs to use its own interface language from scratch. MCP itself is not a language model, database or search engine.

### Which components work together?

An AI application acts as the host. Within it, a client maintains the connection to an MCP server. This server is software that offers various functions, such as document searches or data retrieval. A server can run locally or be accessible via a network. The word ‘server’ here does not necessarily refer to a separate physical computer.

### Tools, resources and prompts

MCP distinguishes, amongst other things, between tools for executable functions, resources for available information and prompts for reusable instructions. The host determines how these capabilities are used within the application. A protocol governs the exchange; it does not determine which model provides the best answer or how your company should carry out a work process.

### A practical example

An internal assistant must be able to search through manuals. You can set up an MCP server that offers a search function and returns only those documents to which the employee has access. A suitable AI application can discover and utilise that function. The underlying document archive remains in place; MCP acts as a link to that source, not a replacement for the archive.

### What do you still need to sort out yourself?

You remain responsible for access rights, reliable tools and what the application is permitted to do with the results. A local MCP server can, in turn, access external systems. Connecting locally does not, therefore, automatically mean that all data remains local. For each connection, specify where processing takes place and what information the user and the model actually receive.

### When is MCP suitable?

It can be useful when multiple suitable AI applications need to use the same sources or functions. For a single, simple connection, a standard API may suffice. Choose based on supported functions and management, not because the protocol is popular. Also check the supported protocol versions before considering a connection to be interchangeable.

## Sources

- [Model Context Protocol — Architecture and components](https://modelcontextprotocol.io/docs/learn/architecture)
- [Hugging Face — Tool usage and function calls](https://huggingface.co/docs/transformers/en/chat_extras)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
