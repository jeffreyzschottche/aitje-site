# What is model routing?

Official page: https://aitje.com/en/knowledge/wat-is-modelrouting

> With model routing, a workflow selects which AI model will carry out a task. This allows you to combine local models and external APIs based on quality, data and costs.

### In brief

Model routing is the process of forwarding an AI request to a suitable model according to agreed criteria. The choice may depend on the type of task, the sensitivity of the data, the required quality or available capacity. A router may use simple rules or be a model in its own right. It is therefore part of the workflow, not a new language model.

### Why not use the same model for everything?

Different models have different strengths. A task such as message categorisation may require a different approach to complex code analysis. You do not necessarily have to use the most powerful model for every step. Research into routing shows that costs and quality can be optimised together; however, you must measure the outcome of your process yourself.

### A practical example

A possible order workflow first has the code retrieve customer data. A small model converts the email into agreed fields. If mandatory data is missing, the order is held up. Only ambiguous exceptions are passed on to a more sophisticated model or a member of staff. The router determines the route, whilst the checks prevent an incomplete order from proceeding automatically.

### Establishing rules and limits

Determine which data may be sent to an external API and which tasks must remain local. Also agree on what happens in the event of a fault, an invalid response or a budget being exceeded. An alternative route must not circumvent data policies. In such a situation, an error message or human assessment may be a better next step than automatically trying elsewhere.

### How do you know if the routing is working?

Compare different approaches to the same representative tasks. Take into account successful outcomes, corrections, waiting times and all requests. A cheaper model that has to retry regularly may end up costing more. Also keep track of why a particular route was chosen. This will allow you to see which exceptions are being forwarded too often and where a better rule is needed.

### What does this mean for AITJE?

In token management and optimisation, model routing can form part of a broader approach. First, you break the task down into smaller parts and make the input more specific; then you compare models. This way, you focus on a usable end result whilst ensuring the choice of model remains interchangeable. Whether the solution operates locally, at the edge or via frontier APIs depends on the requirements of the task.

## Sources

- [RouteLLM — Research into model routing and the trade-off between quality and cost](https://arxiv.org/abs/2406.18665)
- [Hugging Face — Tool usage and function calls](https://huggingface.co/docs/transformers/en/chat_extras)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
