# What is vendor lock-in in AI?

Official page: https://aitje.com/en/knowledge/wat-is-vendor-lock-in

> Vendor lock-in occurs when switching suppliers becomes difficult or expensive. With AI, this dependency often lies in data, APIs, model behaviour and workflows all at once.

### In brief

Vendor lock-in means that an organisation is so dependent on a supplier that switching becomes difficult, expensive or time-consuming. Switching costs are the costs involved in switching: money, development work, retesting and, in some cases, disruption to work. Lock-in does not necessarily involve deliberate deception. It can also develop as a convenient platform takes on an increasing number of tasks.

### Where does dependency arise with AI?

Not just when making an API call. Prompts, specific response formats, built-in search functions, saved files and model behaviour can also be vendor-specific. A different model may support the same technical interface yet still provide different responses. As a result, you may sometimes need not only to adjust the integration but also to reassess the entire task.

### A practical example

An assistant stores documents in a supplier-specific search environment and uses that platform’s own conversational features. Later, the organisation wishes to change the model. This will require document export, indexing, links and test questions. An export button for the original files is useful, but does not mean that all configuration and expected behaviour will be transferred.

### How can you minimise switching costs?

Store source data in a portable format and document key settings. Where possible, keep the model linkage separate from business logic. Create a test dataset with desired outcomes so that you can assess an alternative fairly. Open protocols can simplify integration, but do not automatically eliminate differences in model quality and platform features.

### Does running locally automatically mean there is no lock-in?

No. Even an in-house installation can be dependent on a single management provider, hardware platform or specialised software. You retain greater control when you have access to data, configuration and documentation, and when maintenance is transferable. An open model licence can help, but without management expertise and a feasible migration path, dependencies will remain.

### How does AITJE strike the right balance?

Not every dependency needs to be removed. A managed service can save a great deal of work. Do, however, be clear about which components you accept and which you wish to keep replaceable. A small trial with a second model or runtime environment can reveal just how much migration work is actually required. This allows you to assess your freedom of choice in terms of practical possibilities.

## Sources

- [CMA — Research into competition and switching between cloud services](https://www.gov.uk/cma-cases/cloud-services-market-investigation)
- [Central Government — Vision for digital autonomy and sovereignty](https://www.rijksoverheid.nl/documenten/2025/12/18/bijlage-2-visie-digitale-autonomie-en-soevereiniteit-van-de-overheid)
- [Model Context Protocol — Architecture and components](https://modelcontextprotocol.io/docs/learn/architecture)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
