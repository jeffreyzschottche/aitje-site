# Frequently Asked Questions

Official page: https://aitje.com/en/faq

> Answers regarding AITJE, the AI products, services, collaboration, data and costs. Can’t find your question here? Discuss your AI enquiry with AITJE.

AITJE is a Dutch AI specialist in local AI, automation and smarter workflows. Proprietary AI products, consultancy, development, installation and support, with independence as our guiding principle.

## About AITJE

### What does AITJE do?

AITJE is a Dutch AI specialist with its own products. AITJE investigates where AI can make your work easier, better or cheaper, builds and installs the solution, and remains available afterwards. Often, that solution runs on your own hardware or server.

### Who is AITJE intended for?

For businesses, creators and professionals, as well as IT companies and agencies. This includes SMEs, local authorities, schools, the self-employed and developers. The sector is less important than the question: is there a specific problem that AI can help solve?

### Is AITJE opposed to cloud or external AI services?

No. The task determines the solution. AITJE prefers to operate locally or on its own server, but will use an external model where this is demonstrably more suitable. Dependency should be a conscious choice, not an unintended consequence.

### What sort of enquiries should you not direct to AITJE?

AITJE does not focus on medical systems, critical infrastructure or industrial engineering. However, an organisation in such a sector may still approach us for a specific application, such as administration or internal knowledge management.

### Who are the people behind AITJE?

Two founders and a permanent network of professionals who are called upon on a project-by-project basis. Read more [about AITJE](https://aitje.com/en/about-aitje).

## Services

### What is the difference between products, services and ‘AITJE Custom’?

Products are ready-to-use AI environments where AITJE has already done the legwork, such as AITJE Assistent and AITJE Coder. Services include research, consultancy, installation, optimisation and support. AITJE Custom offers bespoke AI: a solution built to meet your specific needs.

### Do I need to buy new hardware?

Not always. If your existing computer or server is suitable, AITJE can install the software on it. If additional processing power is required, AITJE will advise you on the best option. You can purchase it yourself or have it delivered via AITJE. Any hardware you pay for is yours to keep.

### Can I install a product myself?

Yes. You can order available products for self-installation on suitable hardware of your own.

### Which products are currently available?

AITJE Assistent AITJE Coder are currently in development. You can register your interest on their page.

### When will the other products become available?

No fixed date has been set yet. Let us know you’re interested on the product page, and you’ll be the first to hear. Need something similar right now? You might be able to arrange it via [AITJE Custom](https://aitje.com/en/services/aitje-custom).

## Products

### What is ‘AITJE Assistent’?

Your own AI chat assistant, similar to ChatGPT, but on your own device or server. You can write, summarise and ask questions, including about your own documents via the knowledge base.

### Does ‘AITJE Assistent’ work without an internet connection?

The local components do: chat, the knowledge base and management work as long as your device or server and the local network are available. Web search and updates require an internet connection.

### How much does AITJE Assistent cost?

The standalone product costs €499 per environment, with no per-user licence fee. Including basic installation, testing, training and agreed short-term aftercare, an introductory price of €599 applies; the standard price starts at €698. Introductory offer for Assistent and Coder for the first 100 paying customers. Availability will be confirmed in your quotation. Hardware, server hire and additional setup are quoted separately. All amounts are exclusive of VAT.

### Which file formats can I add to the knowledge base?

The knowledge base supports common file formats, such as PDF, CSV, Excel, TXT and Word (.docx). Do you have a different format? If so, we’ll work with you to determine the best way to import that information.

### Can AITJE Assistent also read scanned documents and images?

Yes. AITJE Assistent can also process information from scanned documents and images. How well this works depends, amongst other things, on the legibility and quality of the file.

### Can AITJE Assistent show which document an answer comes from?

Yes. For answers based on the knowledge base, the Assistant displays source references. This allows you to identify which documents were used and to compare the answer with the original information.

### What happens if documents in the knowledge base contradict one another?

The model indicates when the information found contradicts itself. In the knowledge manager, you can also assign a priority or weighting to categories or specific documents. This allows you to specify which sources should be given greater weight, for example, a current work instruction over an older document.

### How are amended or deleted documents processed in the knowledge base?

Changes are processed during database synchronisation. The information is broken down into searchable text segments, also known as chunks, and converted into vectors for the search index. During a chat, the Assistant retrieves the relevant information from this using RAG. The synchronisation ensures that changes and deletions are taken into account; prior to this processing, the previous version may still be present in the index.

### Can each department have its own secure knowledge base?

Yes. You can assign specific knowledge to particular user roles. This allows you to determine which employees have access to which information, for example by department or role.

### What is ‘AITJE Coder’?

A dedicated environment for coding agents: a local alternative to services such as Claude Code and Codex. Agents read and modify your code, execute commands and complete tasks iteratively.

### Does Coder work with my own tools?

Yes. Claude Code, OpenCode, Codex, Aider, Cline, Continue and other tools connect to your own model environment. The /connect page in the AITJE environment provides the certificate, your private key and a ready-to-use configuration for each tool. You assign tasks to the agent via the web app.

### How much does AITJE Coder cost?

The standalone product costs €699 per environment, with no per-user licence fee. Including basic installation, testing, training and agreed short-term aftercare, an introductory price of €799 applies; the standard price starts at €898. Introductory offer for Assistent and Coder for the first 100 paying customers. Availability will be confirmed in your quotation. Hardware, server hire and additional setup are quoted separately. All amounts are exclusive of VAT.

### Which programming languages and frameworks can AITJE Coder work with?

You can work with all programming languages and frameworks; Coder is not limited to a single fixed stack. You can provide additional documentation, instructions and project agreements via ‘skills’. The quality depends on the chosen model and the available context, so for a specific stack, we will test it against your tasks.

### Can AITJE Coder work on an existing codebase?

Yes. Coder can read, interpret and adapt existing projects. So you don’t need to start a new project. By providing project documentation and clear instructions, you give the agent context regarding the structure and conventions within your codebase.

### How do I determine which files and commands a coding agent is permitted to use?

For tasks carried out via the web app, the agent operates in a secure container with its own copy of the repository. It is permitted to install packages, but cannot access your internal network. You determine access on a per-repository basis; for GitHub, you log in once using a code, without having to create a token yourself. If you use your own tool, such as Claude Code or OpenCode, that tool determines which files and commands the agent is permitted to use.

### Can I review changes from AITJE Coder before they are applied?

Yes. For tasks carried out via the web app, nothing changes until you approve the result. You read the agent’s report and see every line that has been changed. Approving opens a pull request on GitHub, GitLab or Gitea; ‘Changes required’ rejects the request or has the agent start again. When using the tool interactively, your own tool determines when approval is required.

### Can ‘AITJE Coder’ also write tests and detect errors?

Yes. Coder can write tests, run existing tests and investigate errors. To do this, the agent can use your code, error messages and test results to suggest a change. You can then assess the tests and changes yourself.

## Services

### What is an AI-scan?

An analysis of up to three work processes, the systems you use and your current use of AI. Includes an initial consultation, approximately four hours of analysis, a concise report and a half-hour discussion. The introductory price is €395 for the first 10 paying customers; the standard price is €495. All prices are exclusive of VAT. The scope of the service and any travel or venue costs will be agreed in advance.

### What is token management and optimisation?

AITJE It maps out how your organisation uses AI and what that costs. It then examines subscriptions, model selection, agents and workflows, and makes adjustments where agreed. The aim is to reduce unnecessary usage whilst maintaining the required quality. Read more about [Token management & optimisation](https://aitje.com/en/services/token-management-en-optimalisatie).

### How does AITJE determine whether a cost saving comes at the expense of quality?

By testing the end result. ‘AITJE’ compares the original and the adapted workflow on the same tasks and assesses whether the outcome still meets the agreed requirements. Fewer tokens or a cheaper model only constitutes an improvement if the result remains good enough.

### Can we see how much AI usage costs for each workflow or department?

Yes, provided that usage is measurable and can be attributed. AITJE monitors subscriptions, model calls, token usage and other consumption per task or team. Where necessary, logging can be set up to gain that insight.

### What happens if a model API goes down or reaches its limit?

AITJE A fallback can be built: an alternative route or a different model that takes over the task. For critical steps, a local or edge model may be a good choice. Which fallback is possible depends on the task and is agreed upon during the setup.

### Can ‘AITJE’ prevent a stuck workflow from making endless API calls?

AITJE It can incorporate limits on attempts and costs, logging and clear stopping points. At key moments, an employee may first need to assess whether the workflow can continue: ‘human in the loop’. In this way, technical limits are combined with human oversight.

### What does ‘AITJE’ do under ‘Advice and Analysis’?

AITJE We develop your AI enquiry into concrete advice or a workable plan. This covers the technology, choice of model, costs, pitfalls, test cases and checks. You agree the level of detail and deliverables in advance.

### What does ‘Installation and setup’ cover?

A basic installation starts at €199 excluding VAT: installing the agreed software, testing it and providing guidance in a familiar, suitable environment, with brief follow-up support as agreed. We estimate this will take two to two and a half hours. Product costs, hardware or server hire, networking, comprehensive knowledge base setup and integrations are quoted separately.

### Can I use my AI environment securely from home or whilst on the move?

Yes. AITJE can set up remote access for you, with appropriate security and access rights. This feature is enabled separately and tailored to your network and the people who need to be able to use the environment.

### Can the same server run both AITJE Assistent and AITJE Coder?

AITJE Ideally, set up the Assistant and Coder in separate environments. This allows the capacity and configuration to be tailored to each product, and means they are less likely to interfere with one another when used simultaneously. A different architecture is possible if it suits your situation; the implications will be assessed in advance.

### How do I migrate my AI environment to different hardware?

A migration is preferably carried out in conjunction with ‘AITJE’, as a separate service. ‘AITJE’ helps you migrate the environment and export and transfer the vector database, text chunks and embeddings. Afterwards, checks are carried out to ensure that the knowledge base and the application are functioning correctly on the new hardware.

### Can AITJE improve my existing AI?

Yes. ‘AITJE’ examines how your current workflow, chatbot, knowledge search tool, voice agent or coding agent works. The improvement plan may cover instructions, skills, code, tool calling, the knowledge base, RAG or model selection. You choose which adjustments ‘AITJE’ carries out.

### How much does an AI data location check cost?

From €225 excluding VAT for a straightforward scenario, estimated at approximately three hours. We check a pre-agreed, limited number of known AI services, settings and available provider information. The basic assessment forms part of the AI scan. We reuse previous findings; additional technical research and measures are quoted separately.

### How does ‘AITJE’ help ensure the safe use of AI?

AITJE It maps out data flows, access, data locations and settings, and can implement practical measures. These include deleting personal data prior to an external model call, role-based access rights for the knowledge base, human verification, guardrails, usage limits and logging. The scope of the investigation and implementation is defined in advance.

### Can AITJE remove personal data before it is sent to an external model?

Yes. AITJE can incorporate a local preparatory step that removes or replaces names, contact details and other identifiable details, and forwards only the necessary information. Whether the result is truly anonymous also depends on the wider context. Replacing a name with a label does not automatically constitute full anonymisation.

### How can you prevent an employee from accessing restricted documents via AI?

The application verifies the identity and role before RAG retrieves data. The search query is restricted to authorised documents, text passages and categories. The same permissions apply to tool calls and other integrations. Restricted content should therefore not first be provided to the model with only the instruction not to share it.

### Can AI costs and the number of calls be limited?

Yes. AITJE can configure budgets, limits per task and user, rate limiting and a maximum number of attempts. Before a new call, the application can check whether there is still budget available. Provider warnings do not always result in an immediate halt; therefore, the system checks which limits actually cause a block. Ongoing calls and delayed usage reporting are taken into account in the configuration.

### How does AITJE Custom work?

AITJE Custom We can help with your questions and ideas regarding AI: automation, integrations, apps for mobile, desktop or tablet, AI agents and 3D/VR applications. We can also assist if you need help with existing code, workflows or prototypes. We investigate the appropriate combination of local and external AI, software and infrastructure, build and test the solution, and support the roll-out. We agree on the scope, hours and budget in advance for each phase.

### What does Support and Maintenance involve?

Core costs €49 per month for 30 minutes, Plus €129 for 1.5 hours and Max €249 for 3 hours, excluding VAT. Support, maintenance, personalised advice, checks, consultation and implementation are all included within that time budget. A general development update is separate from this. Additional work commences following your approval.

## Working together

### Where does a collaboration usually begin?

It starts with a discussion or demo, often followed by an [AI-scan](https://aitje.com/en/services/ai-scan). If you already have a specific enquiry, AITJE can also provide a proposal straight away.

### What does a demo involve?

A personalised online demonstration, for example via Google Meet. AITJE shows you what a product can do and discusses with you what suits your situation.

### Does AITJE collaborate with IT companies and agencies?

Yes. You manage the client relationship, whilst AITJE provides the AI expertise. You can agree on the level of AITJE’s visibility on a project-by-project basis. Read more at [For IT companies and agencies](https://aitje.com/en/services/voor-it-bedrijven).

### Can I call AITJE?

Please leave your telephone number via the [contact form](https://aitje.com/en/contact), or email contact@aitje.com.

## Data and in-house management

### Where is my data?

When used locally on your own hardware or server, documents and queries remain within your own environment. If you deliberately use a web search or an external model, the relevant information is sent to that service. AITJE clearly explains in advance what each function does.

### Is local AI always cheaper or safer?

Not automatically. Locally, you do not pay token costs, but you do pay for hardware, electricity and any maintenance. Whether it is more secure depends on the setup. AITJE will work through the options with you to find what suits your situation.

## Costs

### Where can I find the full price list?

[View the full price list (PDF)](https://aitje.com/pricelist-aitje.pdf) for all products, services, hourly rates and support subscriptions. You will also find details of what is included and the terms and conditions of the introductory offer. All amounts are exclusive of VAT.

### What are AITJE’s hourly rates?

AITJE charges €75 per hour, excluding VAT. You agree the work, estimated hours and budget in advance. Additional work only starts with your approval.

### How are the prices structured?

It consists of three components: the AI product or development, the hardware or server, and the installation. Support is optional and charged separately. All prices are exclusive of VAT.

### How does the introductory offer work?

The introductory offer for the first 10 paying customers applies to the AI-scan: €395 (regular price €495). For Assistent and Coder, the introductory offer for the first 100 paying customers applies: Assistent with basic installation €599 (regular price from €698) and Coder with basic installation €799 (regular price from €898). Availability will be confirmed in the quotation. Hardware, server hire, travel or venue costs and additional set-up will be quoted separately in advance. All amounts are exclusive of VAT.

### Do I have to pay again for research that has already been carried out during the scan?

We reuse findings from a scan or previous assignment. The basic assessment of AI usage, costs and data flows forms part of the scan. For follow-up work, you pay for additional analysis or implementation, with a scope and budget agreed in advance.

### What does ‘without external token costs’ mean?

With local use, you do not pay per query or per token to an external AI provider. You can use it as often as your hardware can handle. External models may, however, incur usage charges.

All products, services and hourly rates at a glance.

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
