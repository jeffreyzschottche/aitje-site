export type KnowledgeArticleSection = {
  title: string;
  content: string;
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  readTime: string;
  category: string;
  sections: KnowledgeArticleSection[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "wat-is-een-llm",
    title: "What is an LLM?",
    excerpt:
      "An LLM is a large language model that can understand, predict and generate text. It often feels smart, but the quality of the result still depends heavily on context, model choice and how you use it.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Basic",
    sections: [
      {
        title: "In short",
        content:
          "LLM stands for Large Language Model. It is trained on large amounts of text and learns patterns in language. That is why it can answer questions, rewrite text, summarize information, classify content and generate new text based on an instruction.",
      },
      {
        title: "What is an LLM good at?",
        content:
          "LLMs are strong in tasks where language is central. Think of drafting emails, structuring notes, explaining internal information in simpler terms or summarizing documents. Their main value is speed, flexibility and the ability to work across many language-based tasks.",
      },
      {
        title: "Where does it often go wrong?",
        content:
          "An LLM does not think like a person and does not automatically know what is true, current or safe. It can produce confident mistakes, invent details or stay too generic. That is why source handling, validation and process design matter so much.",
      },
      {
        title: "What does this mean for organizations?",
        content:
          "For organizations, an LLM only becomes useful when it fits into a real workflow. That means looking beyond the model itself and paying attention to context, permissions, logging, security and whether the model runs locally or in the cloud. The value is in reliable use, not just impressive demos.",
      },
      {
        title: "How do you use an LLM well?",
        content:
          "Start with a clear task, such as summarizing, classifying or answering internal questions. Then add the right context and constraints, and decide how people should review the output. That turns an LLM from a novelty into a practical tool inside a process.",
      },
    ],
  },
  {
    slug: "wat-is-edge-ai",
    title: "What is edge AI?",
    excerpt:
      "Edge AI means AI runs close to the source of the data, for example on a device, server or local network. This can improve speed and often gives more control over privacy, continuity and cost.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Infrastructure",
    sections: [
      {
        title: "In short",
        content:
          "With edge AI, data is processed in or near your own environment instead of sending everything to an external cloud. That can happen on a device itself, on a local server or on infrastructure inside your own network. That is why edge AI is often also called local AI.",
      },
      {
        title: "Why do organizations choose it?",
        content:
          "The main reasons are speed, privacy, data control and reduced dependency on external platforms. If a process must always remain available or if sensitive information should not easily leave the organization, edge AI becomes much more attractive.",
      },
      {
        title: "When is edge AI a good fit?",
        content:
          "It makes sense for internal knowledge access, local assistants, production environments, healthcare settings or places with unstable internet connections. It is also useful when predictable costs and direct control over infrastructure matter more than full cloud convenience.",
      },
      {
        title: "What do you need to arrange?",
        content:
          "Local AI is about more than hardware. You also need updates, monitoring, access control, backups, logging and clear rules about which parts may still talk to outside services. In other words, it is an infrastructure choice with operational consequences.",
      },
      {
        title: "A common misunderstanding",
        content:
          "Edge AI does not automatically mean everything is better. It can bring major advantages, but it also adds management work and technical responsibility. The real question is not whether cloud is bad, but which parts of a process should remain local and which parts can safely be external.",
      },
    ],
  },
  {
    slug: "wat-is-rag",
    title: "What is RAG?",
    excerpt:
      "RAG is a way to let a language model retrieve relevant information from documents or a knowledge base before it answers. That usually leads to answers that are more specific, grounded and useful for your own organization.",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min",
    category: "Technology",
    sections: [
      {
        title: "What does RAG stand for?",
        content:
          "RAG stands for Retrieval-Augmented Generation. The system first retrieves relevant information from a knowledge base, document set or another source. Only then does the model use that context to build an answer.",
      },
      {
        title: "What happens technically?",
        content:
          "In a RAG setup, a question is first translated into a retrieval step. Relevant text fragments are then selected and sent along with the prompt. The model answers not only from its original training, but also from material retrieved at that moment.",
      },
      {
        title: "Why is this valuable?",
        content:
          "A standard LLM does not automatically know what is inside your manuals, policies or project documents. With RAG, the system can answer based on your own information. That makes AI much more useful for internal knowledge questions, document support and customer-facing processes.",
      },
      {
        title: "What determines quality?",
        content:
          "Quality depends on source data, document structure, retrieval logic and whether the right passages are selected. Poorly structured or outdated documents will still produce weak results. RAG is therefore not magic, but a chain that has to be designed carefully.",
      },
      {
        title: "When is RAG not enough?",
        content:
          "RAG helps with finding knowledge, but it does not solve everything. For complex workflows, decision rules, permission handling or system actions, you often need additional layers such as validation, human review or agent logic. RAG is often a strong foundation, not the whole solution.",
      },
    ],
  },
  {
    slug: "wat-is-context",
    title: "What is context in AI?",
    excerpt:
      "Context is all the extra information you give a model so it can better understand what you mean. Good context is often the difference between a generic answer and one that actually fits your task, organization or document.",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Basic",
    sections: [
      {
        title: "What counts as context?",
        content:
          "Context can include the question itself, earlier messages, documents, instructions, examples, roles, company information or a desired output format. In practice, anything that helps the model answer more precisely belongs to context.",
      },
      {
        title: "Why does context matter so much?",
        content:
          "Without context, a model usually gives a general answer. Once you add purpose, source material and constraints, the same AI becomes much more specific. That is why the quality of an answer often depends less on the model alone and more on the context you provide.",
      },
      {
        title: "What kinds of context are there?",
        content:
          "You can think in layers: task context for what the user wants, document context for what the answer should be based on, and organizational context for tone, policy or process rules. The better those layers fit together, the more useful the result becomes.",
      },
      {
        title: "What often goes wrong?",
        content:
          "Many applications send too little, too much or simply the wrong context. Too little leads to shallow answers. Too much makes responses slower or messy. Wrong context sends the model in the wrong direction, even if the question itself seems clear.",
      },
      {
        title: "A practical rule of thumb",
        content:
          "Only include what is necessary for the task. Think from the decision or answer you want, not from the urge to dump every piece of information into the prompt. Good context is focused, relevant and up to date.",
      },
    ],
  },
  {
    slug: "wat-is-een-context-window",
    title: "What is a context window?",
    excerpt:
      "The context window is the maximum amount of information a model can take into a single interaction. It determines how much text, chat history or how many document fragments can be meaningfully used at once.",
    thumbnail:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Technology",
    sections: [
      {
        title: "In plain language",
        content:
          "You can think of a context window as a model's working memory. The larger it is, the more text, earlier messages and documents the model can consider at the same time while forming an answer.",
      },
      {
        title: "Why does it matter?",
        content:
          "With long documents, large chats or big knowledge bases, you quickly run into limits if the context window is too small. The system then has to decide what gets included and what is left out, which directly affects answer quality.",
      },
      {
        title: "What happens when you exceed it?",
        content:
          "If you try to send more information than fits into the context window, parts must be dropped, summarized or ignored. Important nuance can disappear. In those cases a model may seem careless, while the real issue is that it was given too little usable context.",
      },
      {
        title: "Bigger is not always better",
        content:
          "A larger context window is helpful, but it does not automatically improve quality. If you include irrelevant or low-quality material, the answer does not become smarter just because more tokens are available. Good selection still matters more than raw size.",
      },
      {
        title: "Practical impact",
        content:
          "In real systems, the context window affects how you chunk documents, how long chat history stays useful and how you design retrieval or summarization flows. It is not a minor model detail but a real product and architecture consideration.",
      },
    ],
  },
  {
    slug: "wat-is-een-ai-agent",
    title: "What is an AI agent?",
    excerpt:
      "An AI agent is a system that does not just respond with text, but can also take steps toward a goal. That can include retrieving information, making choices, using tools and carrying out part of a task automatically.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min",
    category: "Application",
    sections: [
      {
        title: "More than a chatbot",
        content:
          "A chatbot usually responds to a prompt with text. An agent goes further and can perform actions. It may search documents, make summaries, fetch data from another system, draft a response or trigger a workflow.",
      },
      {
        title: "How does an agent usually work?",
        content:
          "An agent often combines instructions, context, tools and decision logic. It receives a goal, determines the next useful step, uses external functions or data where needed and then returns a result or next action.",
      },
      {
        title: "Where is the business value?",
        content:
          "Agents are most useful for recurring tasks with recognizable steps. They can reduce manual effort, shorten waiting times and make processes more consistent. The biggest value appears when the agent is embedded in a clear workflow with defined permissions and limits.",
      },
      {
        title: "Where is the risk?",
        content:
          "The more autonomy you give an agent, the more important logging, access control, validation and checkpoints become. An agent that can act in systems without clear boundaries can scale mistakes just as easily as it can scale productivity.",
      },
      {
        title: "Why starting small is often smarter",
        content:
          "In many cases, it is better to begin with a narrow agent task, such as preparing information or drafting responses. That lets you learn where the system is reliable and where human review is still necessary. Strong agents usually grow from sharply defined tasks, not vague hopes of full autonomy.",
      },
    ],
  },
  {
    slug: "wat-zijn-embeddings",
    title: "What are embeddings?",
    excerpt:
      "Embeddings turn text into vectors so systems can recognize which pieces of information are semantically similar. They are a key technical foundation for semantic search and many RAG-based systems.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min",
    category: "Technology",
    sections: [
      {
        title: "In short",
        content:
          "Embeddings are mathematical representations of text. Instead of comparing only exact words, a system can use embeddings to see which pieces of content are close in meaning. That makes relevance and semantic similarity much easier to work with.",
      },
      {
        title: "Why are embeddings needed?",
        content:
          "Without embeddings, search often relies heavily on exact wording. That is limiting because people ask the same question in many different ways. Embeddings help a system understand related meaning even when the phrasing is different.",
      },
      {
        title: "How are they used in RAG and search?",
        content:
          "Documents are usually split into smaller chunks and turned into vectors. When a new question comes in, the system also creates a vector for that question and looks for text fragments that are semantically close. That is how relevant context is retrieved before the model answers.",
      },
      {
        title: "What determines quality?",
        content:
          "Quality depends on the embedding model, how documents are chunked, how current the source data is and how the retrieval layer is set up. Good embeddings do not fix weak source material. They work best when the entire knowledge pipeline is solid.",
      },
      {
        title: "What should you remember?",
        content:
          "Embeddings do not answer questions by themselves. Their main role is to help find the right information. Think of them as a technical foundation under knowledge bases, search flows and RAG systems, not as a complete solution on their own.",
      },
    ],
  },
  {
    slug: "wat-is-prompt-engineering",
    title: "What is prompt engineering?",
    excerpt:
      "Prompt engineering is the deliberate way of writing instructions so a model produces useful output. It is not about magic phrases, but about clarity on purpose, context, tone, constraints and expected format.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Methodology",
    sections: [
      {
        title: "Why does wording matter?",
        content:
          "A model reacts strongly to how a task is described. A vague question often leads to a vague answer. As soon as you define role, goal, tone, context and expected output, the result tends to become much more usable.",
      },
      {
        title: "What belongs in a good prompt?",
        content:
          "Good prompts usually contain a clear task, relevant context, any constraints, examples and a desired output format. Not every prompt needs to be long, but it should be precise enough to guide the model in the right direction.",
      },
      {
        title: "What is it not?",
        content:
          "Prompt engineering is not a collection of magic sentences that always work. It is an iterative process of testing, refining and understanding how a model behaves. In business settings, it often also includes standardization so teams can work more consistently.",
      },
      {
        title: "What is the business value?",
        content:
          "Better prompts mean less repair work, more consistent output and clearer use of AI across teams. That matters especially when multiple people use the same system or when output must align with internal standards and workflows.",
      },
      {
        title: "When do you scale it?",
        content:
          "As soon as an AI task starts recurring, it becomes worth documenting, testing and improving prompts. At that point, prompt engineering shifts from isolated experiments to a repeatable working method that saves time and improves quality.",
      },
    ],
  },
  {
    slug: "wat-is-een-api",
    title: "What is an API?",
    excerpt:
      "An API is an agreed way for systems to exchange data or functions. It is the connection layer that allows software to talk to other software without people having to copy and paste information by hand.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Technology",
    sections: [
      {
        title: "In short",
        content:
          "API stands for Application Programming Interface. It is an interface that lets software communicate with other software in a structured way. That makes it possible to retrieve information, send data or trigger actions safely and consistently.",
      },
      {
        title: "What does an API do in practice?",
        content:
          "An API may let a website retrieve customer data, call an AI model, send documents or write information back into a CRM, ERP or another system. Users often do not see this directly, but behind the scenes it is one of the most important layers in modern software.",
      },
      {
        title: "API versus manual work",
        content:
          "Without APIs, people often have to retype data, export files or repeat the same steps manually. With APIs, systems can do that work automatically and more consistently. That saves time and reduces errors, as long as the integration is designed properly.",
      },
      {
        title: "What should you watch for?",
        content:
          "Important concerns include permissions, authentication, error handling, logging, rate limits and documentation. An API can work technically while still being operationally weak if monitoring, security or maintainability are poor.",
      },
      {
        title: "Why is this relevant for organizations?",
        content:
          "Almost every modern digital environment relies on APIs. If you understand what an API does, you can better evaluate how systems are connected, where dependencies sit and how flexible a solution will remain as your needs change.",
      },
    ],
  },
  {
    slug: "wat-is-een-webhook",
    title: "What is a webhook?",
    excerpt:
      "A webhook is an automatic message from one system to another as soon as something happens. It allows processes to start immediately without constantly checking whether new information is available.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Technology",
    sections: [
      {
        title: "In plain language",
        content:
          "A webhook is a signal sent automatically when an event happens, such as a new request, payment, upload or form submission. Instead of repeatedly asking whether something changed, another system is notified the moment it does.",
      },
      {
        title: "How is it different from an API?",
        content:
          "With an API, you typically request information actively. A webhook does the reverse: a system tells you something happened on its own. In many integrations, both are used together: a webhook triggers the process and an API handles the follow-up work.",
      },
      {
        title: "What is usually included?",
        content:
          "A webhook often contains an event type, a timestamp, a record ID or a reference to more data. Sometimes that is enough by itself, and sometimes the receiving system must use an API call to fetch the full details.",
      },
      {
        title: "Where are the pitfalls?",
        content:
          "A webhook needs to arrive reliably and be processed securely. That means paying attention to verification, retries, logging and what happens when the receiving system is temporarily unavailable. Without that, a simple integration can become surprisingly fragile.",
      },
      {
        title: "Why is it useful?",
        content:
          "Webhooks make processes faster and more efficient. They are useful for notifications, workflow triggers, document processing and any situation where immediate follow-up matters. In well-designed systems, they reduce delay and avoid unnecessary polling traffic.",
      },
    ],
  },
  {
    slug: "wat-is-een-backend",
    title: "What is a backend?",
    excerpt:
      "The backend is the part of software where processing, logic, integrations and data flows run outside the user's view. It is the technical layer that makes an app or website actually do something useful.",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Software",
    sections: [
      {
        title: "What do developers mean by it?",
        content:
          "The backend is the layer behind a website, dashboard or app. It is where requests are handled, data is retrieved, business logic runs and permissions are checked. Users usually do not see it directly, but it strongly shapes how the system behaves.",
      },
      {
        title: "What usually runs in the backend?",
        content:
          "Typical backend components include APIs, databases, authentication, logging, integrations with other systems, document processing and server-side logic. In AI products, the backend may also manage prompt logic, context selection, RAG retrieval and model calls.",
      },
      {
        title: "Why is the backend important?",
        content:
          "A good interface alone is not enough. If the backend is slow, insecure or poorly structured, the entire product suffers. The backend determines much of the reliability, scalability and technical flexibility of a solution.",
      },
      {
        title: "What questions are useful to ask?",
        content:
          "When reviewing proposals or software decisions, it helps to ask where data is stored, how integrations work, how errors are handled and how logging or permissions are set up. Those are backend questions, and they reveal a lot about the maturity of a solution.",
      },
      {
        title: "How does it relate to the frontend?",
        content:
          "The frontend is what users see. The backend is what powers it behind the scenes. Strong software needs both: a clear interface and a backend that is logical, secure and maintainable over time.",
      },
    ],
  },
  {
    slug: "wat-is-een-frontend",
    title: "What is a frontend?",
    excerpt:
      "The frontend is the part of software users directly see and interact with. It covers screens, forms, feedback and flow, and therefore has a major impact on how clear and usable a system feels in practice.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    category: "Software",
    sections: [
      {
        title: "In short",
        content:
          "The frontend is the interface of a website, portal, dashboard or app. It includes buttons, forms, tables, navigation, status messages and other visual elements that users work with directly.",
      },
      {
        title: "Why is frontend important?",
        content:
          "Even if the underlying technology is strong, a product can still feel frustrating if the interface is unclear or slow. Frontend is therefore not just about how something looks, but also about usability, clarity and trust.",
      },
      {
        title: "What does the user notice?",
        content:
          "Users experience frontend through loading speed, readability, error messages, the order of steps and how intuitive an action feels. Good frontend makes complex work manageable. Poor frontend makes simple work feel harder than it should.",
      },
      {
        title: "How does frontend work with backend?",
        content:
          "The frontend collects input and shows results. The backend processes that input and returns data or actions. When the two work well together, the product is not only visually clear but also technically consistent and reliable.",
      },
      {
        title: "How do you judge quality?",
        content:
          "Look at clarity, speed, error handling, accessibility and whether the interface fits the real workflow. Great frontend does not feel impressive because it is flashy. It feels strong because it is obvious and easy to use.",
      },
    ],
  },
  {
    slug: "wat-is-cloud",
    title: "What is cloud?",
    excerpt:
      "In most organizations, cloud means software, storage or computing power delivered through external infrastructure. That can offer flexibility and speed, but it also introduces choices around data, dependency and operational control.",
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Infrastructure",
    sections: [
      {
        title: "What does it mean exactly?",
        content:
          "Cloud means software or data is not limited to your own device or server, but is provided through external infrastructure. That infrastructure is usually managed by a vendor or hosting provider and accessed over the internet.",
      },
      {
        title: "Why do organizations choose it?",
        content:
          "Cloud can be attractive because it supports fast deployment, scalability and remote management. You do not have to host everything yourself, and in many situations that is practical. For many teams, that speed and flexibility are the main reasons to use it.",
      },
      {
        title: "What trade-offs come with it?",
        content:
          "Cloud also raises questions about privacy, data location, recurring cost, vendor lock-in and service availability. As soon as core processes depend on external platforms, those concerns become strategic rather than merely technical.",
      },
      {
        title: "Cloud or local?",
        content:
          "This is rarely a black-and-white choice. Some functions are perfectly fine in the cloud, while others should remain local because of continuity, security or cost control. In practice, many organizations end up with a hybrid model that fits each process differently.",
      },
      {
        title: "What should you remember?",
        content:
          "Cloud is not inherently good or bad. It is a way of organizing infrastructure. The right choice depends on your data, your workflows, your risk profile and how much technical control you want to keep in-house.",
      },
    ],
  },
  {
    slug: "wat-is-een-workflow",
    title: "What is a workflow?",
    excerpt:
      "A workflow is the fixed sequence of steps through which work, information and actions move in a process. Once the workflow is clear, it becomes much easier to decide where software, automation or AI can add real value.",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    category: "Methodology",
    sections: [
      {
        title: "In short",
        content:
          "A workflow describes how a task moves from step to step. That may include input, review, processing, approval, feedback and follow-up. It is not only about what happens, but also in what order and by whom.",
      },
      {
        title: "Why do you hear this so often in software?",
        content:
          "Software often supports or automates existing workflows. If you do not understand how a process works, it is difficult to decide where a system should help. That is why workflow thinking matters so much in custom software, integrations and AI projects.",
      },
      {
        title: "What makes a workflow good?",
        content:
          "A good workflow is clear, repeatable and designed with exceptions in mind. Roles, inputs, decision moments and control points are visible. That makes a process less dependent on unwritten knowledge inside a few people's heads.",
      },
      {
        title: "Where does AI fit in?",
        content:
          "AI is most useful in workflow steps where language, classification, summarization or preparation play a role. Adding AI randomly without understanding the real bottlenecks and quality risks usually creates more noise than value.",
      },
      {
        title: "A common mistake",
        content:
          "Organizations sometimes start with tools and only later think about the process. That often means they automate confusion. A better approach is to make the workflow clear first, and only then decide where software, integrations or AI should support it.",
      },
    ],
  },
];
