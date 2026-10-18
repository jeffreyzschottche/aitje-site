# 350 clients. One central workspace.

Official page: https://aitje.com/en/cases/council-hub

> Following a takeover, a marketing company’s client base grew from 150 to 350. AITJE brought together client data, tickets, projects, invoicing information and call transcripts in a central hub. Staff can search for and chat with their business experts, with access based on their role and AI integrated into an existing Mac mini.

Case study — Marketing / customer management, tickets & business knowledge

The marketing company worked with 150 clients. Following a takeover, 200 clients were added to this. The client portfolio grew to 350, but the information was still scattered across various applications and teams.

When the phone rang, the employee didn’t immediately know what was going on. Was there an open ticket? Who was working on the project? Had anyone called back yet? And were there any outstanding invoices? Finding the answer always required searching through multiple systems.

AITJE It has built a central management hub where staff can quickly search by customer name, company name or website. The relevant data is brought together via API connections. In addition, they can ask questions via a RAG chat that utilises synchronised business knowledge.

## The approach

### Connect

Code connects the hub to external applications via API and MCP integrations. Toolcalling provides the language model with defined ways to query the connected platforms.

### Synchronise

Three times a day, the selected company data is retrieved and converted into vector embeddings. The local vector database makes this knowledge available to the RAG chat.

### Search & retrieve

A name, company or website links to the available customer context. For a chat enquiry, RAG retrieves relevant passages; tool calls can also consult data from linked applications where these are accessible.

### Responses with access

Qwen formulates the response using the available context. Access is restricted within the hub and when retrieving data based on the employee’s role, ensuring that the chat operates solely with authorised information.

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
