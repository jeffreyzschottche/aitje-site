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
      "An LLM is a type of language model that predicts, understands and generates text based on large amounts of examples.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Basic",
    sections: [
      {
        title: "In letter",
        content:
          "LLM stands for Large Language Model. It is a language model that is trained on large amounts of text and therefore can predict, summarize, rewrite and respond to language.",
      },
      {
        title: "How is it different from a language model?",
        content:
          "Language model is the broad term. An LLM is a major language model within that category. In practice, by LLM, people usually mean modern models that support chats, summaries, classification and assistant tasks.",
      },
      {
        title: "As an organization, what do you need to know?",
        content:
          "An LLM is strong in language, but not automatically reliable or secure. Results depend on model choice, context, governance and where the model runs (cloud or local).",
      },
    ],
  },
  {
    slug: "wat-is-edge-ai",
    title: "What is edge AI?",
    excerpt:
      "Edge AI and local AI usually mean the same thing in practice: AI runs on a local device or in your own environment rather than entirely in the cloud.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Infrastructure",
    sections: [
      {
        title: "In letter",
        content:
          "With edge AI, you process data close to the source: on a device, server or network in your own environment. That's why edge AI is often called local AI.",
      },
      {
        title: "Why are organizations choosing edge/local AI?",
        content:
          "Edge AI can give advantages in terms of speed, privacy, continuity and cost control. Especially when working with sensitive documents or processes that need to keep running.",
      },
      {
        title: "What should you take care of in practice?",
        content:
          "Local AI requires good hardware, management and clear choices about what stays local and what might run externally. It is not a trick, but an infrastructure choice with management burden and responsibility.",
      },
    ],
  },
  {
    slug: "wat-is-rag",
    title: "What is RAG?",
    excerpt:
      "RAG is a way for a language model to retrieve relevant information first before answering.",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    category: "Technology",
    sections: [
      {
        title: "What does RAG stand for?",
        content:
          "RAG stands for Retrieval-Augmented Generation. First, relevant information is retrieved from documents or a knowledge base, then the model uses that information to provide a better answer.",
      },
      {
        title: "Why is this useful?",
        content:
          "A standard LLM does not automatically know what is in your documents. With RAG, the model can answer based on your own policies, manuals, procedures or internal knowledge.",
      },
      {
        title: "Important in practice",
        content:
          "RAG does not magically make AI error-free. You still need good source data, logical document structure and a solid search layer to get reliable answers.",
      },
    ],
  },
  {
    slug: "wat-is-context",
    title: "What is context in AI?",
    excerpt:
      "Context is all the information you bring to a model so that it better understands what you mean.",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    readTime: "2 min",
    category: "Basic",
    sections: [
      {
        title: "What falls under context?",
        content:
          "That could be your question, previous posts, documents, instructions, roles, examples or company information. Anything that helps the model answer more specifically is context.",
      },
      {
        title: "Why does context matter so much?",
        content:
          "A model without context gives general answers. With good context, AI becomes more specific, more useful and more tailored to your organization or task.",
      },
      {
        title: "Practical difference",
        content:
          "If you only ask for a summary, you will get something general. Add your source text, purpose and desired style, and the result will be much better.",
      },
    ],
  },
  {
    slug: "wat-is-een-context-window",
    title: "What is a context window?",
    excerpt:
      "The context window is the maximum amount of information a model can carry at once in a single interaction.",
    thumbnail:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Technology",
    sections: [
      {
        title: "In plain language",
        content:
          "You can think of it as a model's working memory. The larger the context window, the more text, documents or chat history the model can carry at once.",
      },
      {
        title: "Why is this relevant?",
        content:
          "Otherwise, with long documents, extensive chats or knowledge bases, you quickly run into limits. Then you have to select more cleverly what is really important for the answer.",
      },
      {
        title: "Not everything has to be in it",
        content:
          "A larger context window is convenient, but not always the solution. Proper selection of relevant context is often more important than simply adding more text.",
      },
    ],
  },
  {
    slug: "wat-is-een-ai-agent",
    title: "What is an AI agent?",
    excerpt:
      "An AI agent is a system that not only answers, but can also perform steps toward a goal.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    category: "Application",
    sections: [
      {
        title: "More than a chatbot",
        content:
          "An agent can retrieve information, make choices, invoke tools and perform tasks in a sequence. For example, search for documents, summarize, prepare mail or start workflows.",
      },
      {
        title: "Why do companies want this?",
        content:
          "Because agents help organize recurring tasks smarter. They can support employees and speed up processes, provided the frameworks are set up properly.",
      },
      {
        title: "Where is the risk?",
        content:
          "The more autonomy you give, the more important it becomes to get permissions, logging, data access and checkpoints right. An agent must fit within your governance.",
      },
    ],
  },
  {
    slug: "wat-zijn-embeddings",
    title: "What are embeddings?",
    excerpt:
      "Embeddings convert text into vectors so that systems can better compare meaning and relevance.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    category: "Technology",
    sections: [
      {
        title: "In letter",
        content:
          "Embeddings are mathematical representations of text. This allows a system to see which pieces of content are close in content, even if the words are not exactly the same.",
      },
      {
        title: "Why is this important for knowledge bases?",
        content:
          "Embeddings enable semantic searching. That means that a query about policies or procedures can find relevant pieces, even if the wording is different from the document.",
      },
      {
        title: "What should you remember?",
        content:
          "Embeddings are a base layer for search and RAG systems. They do not determine the answer themselves, but they do help bring the right information to the table.",
      },
    ],
  },
  {
    slug: "wat-is-prompt-engineering",
    title: "What is prompt engineering?",
    excerpt:
      "Prompt engineering is the smart formulation of instructions so that a model gives usable output.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Methodology",
    sections: [
      {
        title: "Why does the wording matter?",
        content:
          "A model responds strongly to how you describe a task. Clear role definition, purpose, context, format and tone make the difference between a vague answer and a useful result.",
      },
      {
        title: "What belongs to it?",
        content:
          "Good prompts often include context, preconditions, examples and a clear desired output format. Sometimes less text is better, sometimes more direction.",
      },
      {
        title: "What is the business value?",
        content:
          "Prompt engineering helps teams work more consistently, waste less time and better align AI output with internal standards and processes.",
      },
    ],
  },
  {
    slug: "wat-is-een-api",
    title: "What is an API?",
    excerpt:
      "An API is an interface through which systems securely and structurally exchange data or functions with each other.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Technology",
    sections: [
      {
        title: "In letter",
        content:
          "API stands for Application Programming Interface. It is an agreed-upon way that software talks to other software without requiring users to transfer everything manually.",
      },
      {
        title: "What does an API do in practice?",
        content:
          "Through an API, an app can, for example, retrieve customer data, send documents, invoke an AI model or write information back to another system. It is thus the connection layer between different tools and processes.",
      },
      {
        title: "Why is this important for organizations?",
        content:
          "With good APIs, you can connect systems without rebuilding everything from scratch. That makes automation, integration and scalability a lot more practical, provided permissions, logging and error handling are properly managed.",
      },
    ],
  },
  {
    slug: "wat-is-een-webhook",
    title: "What is a webhook?",
    excerpt:
      "A webhook is an automatic signal from one system to another as soon as something happens.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Technology",
    sections: [
      {
        title: "In plain language",
        content:
          "A webhook immediately sends a message to another system when an event occurs, such as a new request, payment or upload. So you don't have to keep checking for changes yourself.",
      },
      {
        title: "How is it different from an API?",
        content:
          "With an API, you usually actively request information. A webhook works the other way around: a system reports by itself that something new has happened. Often you use them together in the same integration.",
      },
      {
        title: "Why is this useful?",
        content:
          "Webhooks make processes faster and more efficient because follow-up can start immediately. Think of notifications, automatic document processing or starting a workflow as soon as data arrives.",
      },
    ],
  },
  {
    slug: "wat-is-een-backend",
    title: "What is a backend?",
    excerpt:
      "The backend is the part of software where logic, data processing and links run out of the user's view.",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Software",
    sections: [
      {
        title: "What do developers mean by this?",
        content:
          "The backend is the layer behind an app or Web site. It is where requests are processed, permissions checked, data retrieved and business logic executed.",
      },
      {
        title: "What is often part of it?",
        content:
          "Consider servers, APIs, databases, authentication, logs and links to other systems. The user usually does not see these components directly, but they determine how the software works.",
      },
      {
        title: "Why do you need to know this concept?",
        content:
          "In conversations about software development, backend is often about reliability, security and integrations. If you know what is meant by it, you can better evaluate projects and bids.",
      },
    ],
  },
  {
    slug: "wat-is-een-frontend",
    title: "What is a front end?",
    excerpt:
      "The front end is the part of software that users see and work with directly.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    readTime: "2 min",
    category: "Software",
    sections: [
      {
        title: "In letter",
        content:
          "The frontend is the interface of a website, dashboard or app. There, a user sees screens, forms, buttons, notifications and navigation.",
      },
      {
        title: "How does frontend work together with backend?",
        content:
          "The frontend displays information and collects input. The backend processes that input, retrieves data and returns results. Together, they form the user experience and the technical operation behind it.",
      },
      {
        title: "Why is this relevant?",
        content:
          "A good solution is not only technically smart, but also clear and pleasant to use. Frontend is therefore about understandability, speed and how well software connects to everyday tasks.",
      },
    ],
  },
  {
    slug: "wat-is-cloud",
    title: "What is cloud?",
    excerpt:
      "By cloud, organizations usually mean software, storage or computing power made available through remote servers.",
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Infrastructure",
    sections: [
      {
        title: "What exactly does it mean?",
        content:
          "Cloud means that software or data doesn't just run on your own device or server, but is available through an external infrastructure. That infrastructure is usually managed by a vendor or hosting party.",
      },
      {
        title: "Why do organizations choose this?",
        content:
          "Cloud can be convenient for scalability, rapid deployment and remote management. At the same time, it brings choices around privacy, dependency, location of data and recurring costs.",
      },
      {
        title: "Cloud or local?",
        content:
          "This is not a religious choice. Some processes are fine in the cloud, while others need to remain local for reasons of continuity, security or control. It's all about finding the right balance per situation.",
      },
    ],
  },
  {
    slug: "wat-is-een-workflow",
    title: "What is a workflow?",
    excerpt:
      "A workflow is the fixed sequence of steps in which work, data or tasks move through a process.",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Methodology",
    sections: [
      {
        title: "In letter",
        content:
          "A workflow describes which steps follow one another to complete a task. Consider input, review, processing, approval and feedback.",
      },
      {
        title: "Why do you hear this so often with software?",
        content:
          "Software often supports or automates existing workflows. The clearer a workflow is, the better you can determine where AI, links or automation really add value.",
      },
      {
        title: "What does a good workflow provide?",
        content:
          "Less manual work, fewer errors and more predictability. But only if roles, exceptions and checkpoints are also properly accounted for in the design.",
      },
    ],
  },
];
