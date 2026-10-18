# Your firm’s expertise. An assistant that works with it.

Official page: https://aitje.com/en/cases/documenten-doorzoeken-en-lakken

> For an estate agency, AITJE linked Realworks, email inboxes and Google Drive to its own AI assistant. Staff chat with the knowledge relevant to their role. The website chatbot uses a separate, carefully selected knowledge base from the same environment.

Case study — Estate agency / In-house expertise & website chat

At an estate agency, information is rarely stored in one place. Property details are in Realworks, appointments and correspondence are in the email inbox, and documents are in Google Drive. Finding an answer often means switching between systems and deciding for yourself which information is still up to date.

AITJE installed the Assistant on a Linux server, linked to an BOSGAME M5. The existing sources are consolidated into a dedicated knowledge base. Staff ask their questions in a single chat; the search layer retrieves relevant information, with the correct date, category and access rights.

## The approach

### Synchronise

The knowledge from the linked sources is synchronised three times a day. This ensures that new and amended data is incorporated into the knowledge base.

### Organising & embedding

The content is divided into searchable text fragments. Harrier creates vector embeddings; category, date, source, priority and access rights remain linked to the knowledge.

### Targeted search

When a question is asked, RAG searches for relevant content within the knowledge that the employee is authorised to use. The date and priority help to select the correct information.

### Formulating a response

GPT-OSS-120B uses the passages it finds to construct the answer. Business knowledge is retrieved when needed; an entire file is not sent to the model every time.

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
