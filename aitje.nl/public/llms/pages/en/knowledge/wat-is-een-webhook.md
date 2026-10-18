# What is a webhook?

Official page: https://aitje.com/en/knowledge/wat-is-een-webhook

> A webhook is an automatic message sent from one system to another as soon as something happens. This allows you to trigger processes immediately without having to constantly check for new information.

### In plain language

A webhook is a notification that is sent automatically as soon as an event occurs, such as a new enquiry, payment, upload or form submission. Instead of constantly checking to see if anything has changed, you receive an immediate notification when it does.

### What is the difference between this and an API?

With an API, you usually actively request information. A webhook works the other way round: a system notifies you automatically that something has happened. In many integrations, you use both together: a webhook for the trigger and an API for the follow-up work.

### What do you usually include?

A webhook often contains information about the type of event, a timestamp, a record ID or a reference to additional data. Sometimes all the necessary information is contained within the webhook message, and sometimes another system needs to retrieve additional data via an API.

### What are the pitfalls?

A webhook must be delivered reliably and processed securely. You must therefore pay attention to verification, retries, logging and what happens if the receiving system is temporarily unavailable. Without these measures, a seemingly simple integration can still prove fragile.

### Why is this useful?

Webhooks make processes faster and more efficient. They are useful for notifications, triggering workflows, document processing and other situations where immediate follow-up is important. In well-designed systems, webhooks reduce delays and minimise unnecessary traffic.

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
