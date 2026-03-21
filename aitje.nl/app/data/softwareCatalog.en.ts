export type SoftwareSection = {
  title: string;
  content: string;
};

export type SoftwareGalleryItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export type SoftwareItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  image: string;
  imageFit?: "cover" | "contain";
  highlights?: string[];
  gallery?: SoftwareGalleryItem[];
  galleryImages?: string[];
  sections: SoftwareSection[];
};

export const softwareCatalog: SoftwareItem[] = [
  {
    slug: "aitje-assistent-os",
    title: "AITJE Assistant OS",
    shortDescription:
      "The local operating system of the AITJE Cube where chat, maps, knowledge, devices, users and system management come together.",
    heroDescription:
      "AITJE Assistant OS is the interface and system layer on the cube itself. Here you manage your assistant, knowledge, contacts, maps, devices, users and network locally, so you can keep working with your own context and settings even without internet.",
    image: "/images/os-screenshots/chatassistent.jpeg",
    highlights: [
      "Chat directly on the device with local knowledge, without an internet connection",
      "View offline maps, open your knowledge base and manage contacts with location pins",
      "Manage users, network settings, connected devices and hardware settings centrally",
      "Switch response modes such as Developer, Finance, Law and Child depending on the situation",
    ],
    gallery: [
      {
        src: "/images/os-screenshots/chatassistent.jpeg",
        alt: "Chat assistant inside AITJE Assistant OS on the device itself",
        title: "Chat assistant on the device itself",
        description:
          "This is the core of AITJE Assistant OS. On the device itself you can chat directly with the assistant without depending on internet access. The assistant works with locally available knowledge, lets you quickly browse your knowledge base and also functions as a practical system entry point for maps, contacts, settings and connected devices.",
      },
      {
        src: "/images/os-screenshots/contacten.jpeg",
        alt: "Contacts overview inside AITJE Assistant OS",
        title: "Contacts with fixed locations",
        description:
          "Inside the contacts overview you add partners, suppliers, family members, customers or other important people and places to your local address book. Each contact can be linked to a location on the map, so relevant addresses and physical locations stay available offline.",
      },
      {
        src: "/images/os-screenshots/gebruikersbeheer.jpeg",
        alt: "User management inside AITJE Assistant OS",
        title: "User management for client access",
        description:
          "In user management you determine who may use the API and assistant software on the AITJE Cube through the client. You create accounts, manage access rights and keep the environment limited to the people who actually need access.",
      },
      {
        src: "/images/os-screenshots/instellingen.jpeg",
        alt: "Settings screen in AITJE Assistant OS",
        title: "Settings for hardware and behavior",
        description:
          "Through settings you adjust general system data and manage parts of the hardware configuration. This is where the cube is aligned with your working method, technical preferences and daily usage context.",
      },
      {
        src: "/images/os-screenshots/kennisbankinzicht.jpeg",
        alt: "Knowledge sync overview in AITJE Assistant OS",
        title: "Insight into synchronized knowledge",
        description:
          "The knowledge overview shows which information has already been synchronized from the knowledge base environment to the cube. You see the locally available knowledge layer built from the vector embedding environment, ready for offline use by the assistant.",
      },
      {
        src: "/images/os-screenshots/map.jpeg",
        alt: "Local map of Europe inside AITJE Assistant OS",
        title: "A local map that remains available",
        description:
          "The map inside AITJE Assistant OS remains usable offline. You have a local map of Europe, can add your own locations and keep GPS pins or fixed addresses visible on the map.",
      },
      {
        src: "/images/os-screenshots/netwerksettings.png",
        alt: "Network settings inside AITJE Assistant OS",
        title: "Adjust the network and connect devices",
        description:
          "On this page you change network settings, add adjustments and manage the technical connection of the cube. You can also add a connected device so extra hardware is linked to the AITJE environment in a controlled way.",
      },
    ],
    sections: [
      {
        title: "The local cockpit of the AITJE Cube",
        content:
          "AITJE Assistant OS is not just a technical layer underneath the system, but the daily operating environment of the cube itself. Local AI, knowledge, maps, contacts, users and device settings come together in one manageable cockpit.",
      },
      {
        title: "Working without internet, with your own context",
        content:
          "One of the strongest qualities of the OS is that important functions stay available locally. You can chat on the device itself, consult stored knowledge, view the map, manage contacts and pin locations without continuously needing internet access.",
      },
      {
        title: "From assistant modes to network management",
        content:
          "Inside the OS you configure both content behavior and technical conditions. You choose how the assistant should respond through specific modes, manage users that may connect through the client, change network settings, connect devices and keep track of which knowledge is already available locally.",
      },
      {
        title: "Practical management for real deployment",
        content:
          "Many AI solutions remain stuck in isolated chats or abstract dashboards. AITJE Assistant OS instead brings useful management functions together: you can see who has access, where locations are, which knowledge has been synchronized and how devices are connected.",
      },
      {
        title: "How you access this software",
        content:
          "AITJE Assistant OS is accessed directly on the AITJE Cube itself. This layer is intended for management, local operation and system configuration on the device. Depending on the setup, an administrator, owner or technical manager gets access to manage the assistant, knowledge, users, map data, devices and network connections.",
      },
      {
        title: "How OS works with client and knowledge base",
        content:
          "From the OS you determine who may log in through the client, which knowledge is already local on the cube and how the rest of the system behaves technically. The knowledge base supplies embedded context that can be synchronized to the cube whenever internet is available, while the client connects to that local environment through the local network.",
      },
    ],
  },
  {
    slug: "aitje-assistent-client",
    title: "AITJE Assistant Client",
    shortDescription:
      "The mobile and desktop client that connects through your local network to the AITJE Cube and its assistant.",
    heroDescription:
      "AITJE Assistant Client is the mobile and desktop app that connects to the AITJE Cube through your local network. It gives users access to the cube's assistant software and API through a clear interface, without having to work directly inside the underlying OS.",
    image: "/images/aitje-client-screens.png",
    highlights: [
      "Works as a mobile app or desktop app for daily access to AITJE Assistant",
      "Connects directly to the AITJE Cube through the local network",
      "Login uses a connected device account created on the cube",
      "Gives users chat access to the assistant software running on the cube",
    ],
    gallery: [
      {
        src: "/images/aitje-client-screens.png",
        alt: "AITJE Assistant Client on mobile and desktop",
        title: "The same assistant on mobile and desktop",
        description:
          "The client is meant as a user-friendly access layer to the AITJE Cube. Whether someone works on a phone, tablet or desktop, the same local assistant becomes available through a clear and familiar interface.",
      },
      {
        src: "/images/client/connect-hardware.png",
        alt: "Screen to connect hardware in AITJE Assistant Client",
        title: "Connect the client to your cube",
        description:
          "On this screen you connect the app to a specific AITJE Cube. You enter the number shown on the sticker or underside of the cube so the client knows which local hardware it should connect to.",
      },
      {
        src: "/images/client/login.png",
        alt: "Login screen of AITJE Assistant Client",
        title: "Log in with a connected device account",
        description:
          "After connecting, the user logs in with the credentials of the connected device account created on the cube itself. That keeps access management centralized in the OS and forms the secure bridge between app and cube.",
      },
      {
        src: "/images/client/home-chat.png",
        alt: "Chat home screen of AITJE Assistant Client",
        title: "Use the assistant from the client",
        description:
          "After connection and login you arrive in the chat environment of the client. Here you use the AITJE Assistant that runs locally on the cube, while the user experiences it as a normal app flow on mobile or desktop.",
      },
    ],
    sections: [
      {
        title: "The app layer on top of the cube",
        content:
          "AITJE Assistant Client is the practical working layer for people who want to use the assistant but do not need to be inside the system management of the cube. The app runs as a mobile or desktop client and uses the local network to make the software on the AITJE Cube accessible.",
      },
      {
        title: "Local connection, no public detour",
        content:
          "The client is built around the idea that the cube runs on your own network. You do not first connect through an external public service, but directly to the hardware that is physically present in your own environment.",
      },
      {
        title: "Pairing and login in a logical order",
        content:
          "The first experience is intentionally simple. You first connect the correct cube by entering the device number on the hardware. After that you log in with the connected device account that was created locally on the cube.",
      },
      {
        title: "A client for daily use",
        content:
          "Once logged in, employees or users use the client as their daily access point to the assistant. Asking questions, retrieving context and receiving answers happens in an interface that feels familiar, while the intelligence and knowledge continue to run on the cube.",
      },
      {
        title: "How you access this software",
        content:
          "The client is available as an app on mobile or desktop. Users open the application, connect their cube and then log in with an account managed inside the OS. The client is the layer that end users directly interact with.",
      },
      {
        title: "How the client works with OS and knowledge base",
        content:
          "The client receives access and authorization from the OS and benefits from the knowledge that has been synchronized to the cube from the knowledge base. That means the app is not dependent on separate cloud accounts or scattered documents.",
      },
    ],
  },
  {
    slug: "aitje-assistent-kennisbank",
    title: "AITJE Assistant Knowledge Base",
    shortDescription:
      "The external environment where documents are embedded, versioned and synchronized to the cube as local knowledge.",
    heroDescription:
      "AITJE Assistant Knowledge Base is the online management environment for your knowledge layer. Here you upload and manage documents, process them into embeddings, version them through a private repository and then synchronize the vectorized knowledge to the AITJE Cube for local use.",
    image: "/images/embedding/home.png",
    highlights: [
      "Online environment to upload, manage and reprocess documents",
      "Files are not kept as raw operational data, but processed into embeddings for AI context",
      "Supports synchronization to a secure private Git repository for version control",
      "The cube only retrieves vectorized knowledge; internet is mainly needed for updates and sync",
    ],
    gallery: [
      {
        src: "/images/embedding/home.png",
        alt: "Home of the AITJE Assistant Knowledge Base",
        title: "The online home base of your knowledge layer",
        description:
          "This is the central environment in which the knowledge base is managed. The goal is not to keep documents in a classic database, but to convert source material into a form that LLMs can retrieve as usable context.",
      },
      {
        src: "/images/embedding/account-settings.png",
        alt: "Account settings in the AITJE Assistant Knowledge Base",
        title: "Control how the environment works for your organization",
        description:
          "In account settings you arrange the organizational and technical conditions of the knowledge base environment. This is where the setup is aligned with your organization, your update rhythm and the level of management you want to keep in-house.",
      },
      {
        src: "/images/embedding/kennisbank-inzicht.png",
        alt: "Insight into processed knowledge in the AITJE Assistant Knowledge Base",
        title: "See what is already available as knowledge",
        description:
          "The knowledge overview shows which information has already been processed into usable context. It helps you verify what is already synchronized, embedded or content-ready before pushing new updates.",
      },
      {
        src: "/images/embedding/knowledgebase-bibliotheek.png",
        alt: "Library overview of the AITJE Assistant Knowledge Base",
        title: "Upload and manage your source material",
        description:
          "In the library you manage the documents and sources that serve as input for the embedding layer. Files are not simply stored as an end point, but processed into vector representations that later become locally usable context.",
      },
      {
        src: "/images/embedding/prioriteitsmanager.png",
        alt: "Priority manager in the AITJE Assistant Knowledge Base",
        title: "Control which knowledge matters most",
        description:
          "With the priority manager you can give more weight to important sources, domains or information flows. That is useful when some knowledge must be updated faster or should count more heavily inside the context layer.",
      },
      {
        src: "/images/embedding/relatiemanager.png",
        alt: "Relation manager in the AITJE Assistant Knowledge Base",
        title: "Create relationships between sources and context",
        description:
          "The relation manager helps you treat knowledge not as isolated documents but as connected information. By organizing relationships between sources or topics, the assistant can later retrieve more precise and more coherent context.",
      },
      {
        src: "/images/embedding/versiebeheer.png",
        alt: "Version control in the AITJE Assistant Knowledge Base",
        title: "Private Git sync for traceable version control",
        description:
          "The knowledge base environment can sync to Git through a secure private repository. Content is processed into embeddings and the resulting output is synchronized in version control, so changes remain traceable without using raw source files as the operational database.",
      },
    ],
    sections: [
      {
        title: "An external environment for knowledge management and processing",
        content:
          "AITJE Assistant Knowledge Base is a separate online environment in which you manage data, upload documents and process them into usable AI context. It can work as a self-service environment when you want to update documents yourself, but we can also manage that process for you.",
      },
      {
        title: "Documents are embedded, not kept as raw operational data",
        content:
          "When you upload documents, they do not remain scattered around as a classical dataset or a traditional database dump. They are processed into embeddings: representations that let language models retrieve relevant context.",
      },
      {
        title: "Version control through private Git sync",
        content:
          "The online environment can link a secure private repository to the knowledge layer. As soon as documents are processed, the system synchronizes the embedded output to Git. That makes changes versionable and auditable without treating raw documents as the operational database.",
      },
      {
        title: "Internet is mainly needed for knowledge updates",
        content:
          "The cube mainly needs internet when you want to process or synchronize new knowledge. At that moment you retrieve the vectorized knowledge from the online environment and store it locally on the cube. After that, the assistant can continue using that context offline.",
      },
      {
        title: "How you access this software",
        content:
          "The knowledge base is accessed through an external online environment for administrators, content owners or our management team. There you upload, check and synchronize the knowledge layer. End users usually experience its value later through the cube and client.",
      },
      {
        title: "Why this layer is strategic",
        content:
          "When the knowledge layer is managed well, it improves the reliability of the entire AITJE environment. The quality of answers, retrieval and workflows depends directly on how well source material is processed, versioned and synchronized.",
      },
    ],
  },
  {
    slug: "aitje-notulist",
    title: "AITJE Assistant",
    shortDescription:
      "Management environment for recordings, summaries and delivery flows of AITJE Assistant.",
    heroDescription:
      "With AITJE Assistant, you control recording workflows, output settings and distribution to your own environment from one central management layer.",
    image: "/images/aitje-cubes.png",
    sections: [
      {
        title: "What do you manage here?",
        content:
          "Recording settings, summary profiles, delivery channels and processing routes for different teams and usage scenarios.",
      },
      {
        title: "Why this matters",
        content:
          "You keep control over how conversations are processed and shared, with clear oversight of data flows and output quality.",
      },
    ],
  },
  {
    slug: "wordpress-ai-search-overview",
    title: "WordPress AI Search Overview",
    shortDescription:
      "Free WordPress plugin that enriches pages and search results with an AI search overview in text or structured data.",
    heroDescription:
      "The WordPress AI Search Overview plugin adds an AI summary layer to a webpage or search page. You choose the provider, API key, base URL, chat model, temperature, batch size and output form yourself, after which the plugin uses a shortcode or automatic injection to display the overview directly in WordPress.",
    image: "/images/aitje-search-overview-settings-example.png",
    highlights: [
      "Choose text output or structured data per use case",
      "Shortcode available, or automatically inject on pages and `?s=` search pages",
      "Configurable provider, API key, API base, chat model, temperature, batch size and connection test",
      "Own prompt field to tightly control style, tone and output content",
      "Embedding and knowledge bank layer with CPT selection, model choice, chunking, top-k and synonyms",
    ],
    gallery: [
      {
        src: "/images/aitje-search-overview-settings-example.png",
        alt: "Settings of the WordPress AI Search Overview plugin",
        title: "Set provider, model and output",
        description:
          "In this screen you choose the LLM vendor, API key, API base, chat model, temperature, batch size and connection settings. You also decide whether the output should return as text or structured data, whether shortcode display is enabled and whether the plugin should inject automatically on all pages or only on `?s=` search results.",
      },
      {
        src: "/images/aitje-search-overview-embedding-example.png",
        alt: "Embedding settings of the WordPress AI Search Overview plugin",
        title: "Manage content types and retrieval",
        description:
          "The embedding environment works in a similar way to the RAG chat. You select relevant CPTs, choose an embedding model and configure chunk size, batch size, top-k and synonyms per content type.",
      },
      {
        src: "/images/aitje-search-overview-example-on-page.png",
        alt: "Example of the AI Search Overview shortcode on a test page about Eredivisie transfers",
        title: "Show the output directly on the page",
        description:
          "On the test page with 100 Eredivisie transfers from 2025, you can see how the shortcode or automatic injection places the generated overview as a visible block on the page. The styling of that output can also be adjusted to fit your theme and information hierarchy.",
      },
      {
        src: "/images/aitje-search-overview-prompt-example.png",
        alt: "Prompt field of the WordPress AI Search Overview plugin",
        title: "Refine the prompt per site or use case",
        description:
          "Through the prompt screen you write instructions for tone, information density and format. That lets you guide not only the content of the summary, but also whether the plugin should respond in a more informative, SEO-driven, structured or compact way.",
      },
    ],
    sections: [
      {
        title: "An AI overview layer on top of your existing WordPress content",
        content:
          "WordPress AI Search Overview turns a normal page or search results page into a richer entry point. The plugin reads the available content, builds a summary or structured output from it and shows that result through a shortcode or automatic placement directly in WordPress.",
      },
      {
        title: "You fully control provider, prompt and output",
        content:
          "The settings are intentionally open. You choose the API provider, credentials, active models, temperature and batch size yourself, test the connection and determine through the prompt field how the overview should write.",
      },
      {
        title: "The embedding layer makes the overview sharper",
        content:
          "Besides the prompt layer there is an embedding and knowledge bank environment with which you can optimize the plugin. There you choose which CPTs should participate, which embedding model is used, how large chunks may be and how many results are retrieved through top-k.",
      },
      {
        title: "Suitable for landing pages, content hubs and search pages",
        content:
          "This plugin is strongest when you want to give visitors quick orientation or when search result pages would otherwise remain too thin. You can show the response on normal content pages, on search pages or on both.",
      },
      {
        title: "Management, saving and rebuilding live directly in WordPress",
        content:
          "Inside the admin you get a full settings screen where you can store prompt and provider settings, test output and run the execution command so everything is rebuilt when needed.",
      },
      {
        title: "Free plugin, your own API key and request through the site",
        content:
          "All WordPress plugins on this page are free. You do not pay for the software itself, but use your own API key for the selected provider. That keeps you in control of tokens, model choice and cost.",
      },
    ],
  },
  {
    slug: "wordpress-ai-chat",
    title: "WordPress AI Chat",
    shortDescription:
      "Free WordPress plugin for a configurable RAG chat with shortcode, knowledge bank and custom provider settings.",
    heroDescription:
      "The WordPress AI Chat plugin gives you a RAG chat for WordPress that can be guided through your own content, embeddings and prompt settings. In the management screen you choose provider, API key, temperature, batch size, base prompt and primary focus.",
    image: "/images/wp-rag-chat-example.png",
    highlights: [
      "RAG chat with shortcode so it can be embedded anywhere on the site",
      "Configurable provider, API key, temperature, batch size, base prompt and primary focus",
      "Embedding and knowledge bank screen with CPT selection, model, chunks, top-k and synonyms",
      "`Build Knowledge Bank` to rebuild embeddings directly after saving",
      "Answers from concrete retrieved chunks and stored metadata",
    ],
    gallery: [
      {
        src: "/images/wp-rag-chat-example.png",
        alt: "Example of WordPress AI Chat on a website",
        title: "The chat as visitors see it",
        description:
          "This screen shows how the shortcode loads the chat on the site. Visitors get a direct question-and-answer layer on top of your own content, while the answers are built from the knowledge bank you manage in WordPress.",
      },
      {
        src: "/images/wp-chat-settings-example.png",
        alt: "Settings of the WordPress AI Chat plugin",
        title: "Control provider, prompt and focus",
        description:
          "In the settings you choose the LLM provider, API key, temperature, batch size and base prompt. You also define a primary focus so the chat responds more consistently from the role or task you want it to have.",
      },
      {
        src: "/images/wp-chat-embedding-example.png",
        alt: "Embedding and knowledge bank settings of the WordPress AI Chat plugin",
        title: "Build and optimize the knowledge bank",
        description:
          "Here you select CPTs from the WordPress site, choose the embedding model and configure chunk size, batch size, top-k and synonym words per content type. The shortcode and the `Build Knowledge Bank` action are shown directly in this screen.",
      },
    ],
    sections: [
      {
        title: "A RAG chat that answers from your own WordPress content",
        content:
          "WordPress AI Chat is meant for sites that want more than an empty chat box. The plugin retrieves relevant knowledge from a collection of embeddings and turns it into useful answers that refer back to your posts, pages and selected metadata.",
      },
      {
        title: "You decide how the chat should respond",
        content:
          "In the settings screen you control the whole response layer. You choose the provider, fill in credentials, prepare a base prompt and use primary focus to guide the behavior of the chat.",
      },
      {
        title: "The knowledge bank turns regular content into usable chat context",
        content:
          "The embedding environment is the content engine behind the plugin. There you choose which CPTs should count, which embedding model should be used and how large the chunks may become. You also configure batch size, top-k and synonym words.",
      },
      {
        title: "Answers come from concrete stored chunks",
        content:
          "The plugin also makes retrieval more explicit. In the example the chat responds with at most six retrieved chunks from a collection with stored embeddings. Available fields include `post_id`, `slug`, `permalink`, `post_type`, `title`, `content`, `excerpt` and selected metadata.",
      },
      {
        title: "Shortcode, management and re-embedding sit in one workflow",
        content:
          "You load the chat anywhere on the site through the shortcode shown in the embedding and knowledge bank screen. From the same plugin you manage provider settings, prompt behavior, retrieval parameters and rebuilding of the knowledge bank.",
      },
      {
        title: "Free plugin, your own API key and request through `/contact`",
        content:
          "This plugin is also free. You do not pay for the software itself, but use your own LLM provider and API key for the calls. That keeps control over model choice, token usage and limits in your own hands.",
      },
    ],
  },
  {
    slug: "wordpress-alt-tekst-generator",
    title: "WordPress Alt Text Generator",
    shortDescription:
      "Free WordPress plugin that generates alt texts in bulk with a focus on accessibility, detail level and token efficiency.",
    heroDescription:
      "The WordPress Alt Text Generator plugin helps teams scale the generation of new alt texts for images in the WordPress media library. You choose the API provider, API key, chat model, temperature and batch size yourself, while the vision model is selected automatically.",
    image: "/images/alt-generator-header-and-settings.png",
    highlights: [
      "Choose provider, API key, chat model, temperature and batch size, and test the connection directly",
      "`Primary Focus` guides the output toward accessibility, detail, speed and context level",
      "Run on all images, only on images without alt text, or on a hand-picked selection",
      "Prompt field remains fully editable for your own editorial style or WCAG approach",
      "Smart multi-image processing reduces token cost by bundling vision work efficiently",
    ],
    gallery: [
      {
        src: "/images/alt-generator-header-and-settings.png",
        alt: "Header and provider settings of the WordPress Alt Text Generator",
        title: "Provider settings and connection test",
        description:
          "At the top of the plugin you choose the API provider, enter the API key, select the chat model and configure temperature and batch size. The vision model is chosen automatically and the connection test immediately shows whether the configuration works.",
      },
      {
        src: "/images/alt-generator-execute-and-focus.png",
        alt: "Primary Focus settings of the WordPress Alt Text Generator",
        title: "Control the output through Primary Focus",
        description:
          "In primary focus you choose whether the alt text should mainly support accessibility, provide a more detailed visual description or remain short and efficient. You also decide whether the plugin should process all images, only those without alt text or a hand-picked set.",
      },
      {
        src: "/images/alt-generator-prompt-and-save.png",
        alt: "Prompt field of the WordPress Alt Text Generator",
        title: "Extend the prompt for your editorial style",
        description:
          "The standard prompt is accessibility-first, but you can extend it however you want. That lets you make the output more consistent for product photography, editorial images, atmosphere visuals or large media libraries with repeating patterns.",
      },
      {
        src: "/images/alt-text-media-library-image-without-alt.png",
        alt: "Image in the media library without alt text",
        title: "Find missing alt text immediately",
        description:
          "This example shows an item in the media library that still has no alt text. The plugin is especially practical for this kind of backlog, because you do not have to open every file manually to fill in missing descriptions.",
      },
      {
        src: "/images/alt-generator-new-alt-text-example.png",
        alt: "New generated alt text in the media library",
        title: "New alt text becomes visible immediately",
        description:
          "After running the plugin, the new alt text appears immediately in the media library. That lets you see straight away what the prompt and selected focus produce, so you can refine the style if needed.",
      },
    ],
    sections: [
      {
        title: "Move faster from an empty media library to usable alt text",
        content:
          "The plugin solves a practical problem that stays unfinished on many WordPress sites: a media library full of images without good alt text. Instead of checking everything manually, the plugin generates descriptions in natural language according to the focus you choose.",
      },
      {
        title: "Primary Focus controls whether the output is short, accessible or detailed",
        content:
          "You guide the plugin not only with a prompt, but also with a clear main objective. Primary Focus helps the descriptions match accessibility explanations, detailed visual descriptions, a fast short variant or a more balanced middle ground.",
      },
      {
        title: "You stay in control of selection, prompt and provider",
        content:
          "In the management screen you choose which provider is active, fill in credentials and test the connection. Then you decide whether the plugin should run on all images, only on images without existing alt text or on a hand-picked set.",
      },
      {
        title: "Smart image bundling keeps token usage lower",
        content:
          "Vision calls can become expensive quickly, especially if image reading has to restart for every individual file. That is why AITJE processes multiple images together in one direct call when that makes sense, reducing token usage without unnecessarily sacrificing quality.",
      },
      {
        title: "Strong for accessibility, editorial speed and cleanup work",
        content:
          "Good alt text supports accessibility and makes a site more manageable for editorial teams that publish a lot of imagery. This plugin is especially useful for teams that want to clean up their media library, take WCAG more seriously or fill in many missing descriptions in a short time.",
      },
      {
        title: "Free plugin, your own API key and request through `/contact`",
        content:
          "The plugin itself is free. You use your own API key for the chosen provider and therefore stay in control of model choice, usage and budget. Through the button on the page you can request the plugin or explain your media library use case directly.",
      },
    ],
  },
  {
    slug: "promptpaleis",
    title: "PromptPaleis",
    shortDescription:
      "Dutch online marketplace for digital AI products that can be used directly in practical workflows.",
    heroDescription:
      "PromptPaleis was built as a central marketplace for Dutch users, creators and companies that want to find, understand and apply useful AI products quickly.",
    image: "/images/promptpaleis-home-screen.png",
    highlights: [
      "Marketplace for prompts, bundles, workflows, tutorials and templates",
      "Specifically designed for the Dutch market and Dutch creators",
      "Clear product pages with explanation, software compatibility and delivery information",
      "Relevant for ChatGPT, Claude, Gemini, Midjourney, n8n, Make and more",
    ],
    gallery: [
      {
        src: "/images/promptpaleis-home-screen.png",
        alt: "PromptPaleis home screen with marketplace overview",
      },
      {
        src: "/images/promptpaleis-marketplace.png",
        alt: "PromptPaleis marketplace overview with AI products and categories",
      },
      {
        src: "/images/promptpaleis-verkoper.png",
        alt: "PromptPaleis seller environment for makers and digital AI products",
      },
    ],
    sections: [
      {
        title: "What PromptPaleis is",
        content:
          "PromptPaleis is a Dutch online marketplace for digital AI products. The platform is not about random prompt lists or general AI news, but about concrete products that can be used directly in work. Think of prompts, prompt bundles, workflows, tutorials, templates, manuals and other digital knowledge products.",
      },
      {
        title: "Why this platform exists",
        content:
          "The core idea behind PromptPaleis is simple: people who want to use tools like ChatGPT, Claude, Gemini, Midjourney, n8n or Make well need quick access to structured and usable content. Instead of searching everywhere for separate tips, users find products here that clearly explain what they get, who it is for and how to start.",
      },
      {
        title: "Dutch as the starting point",
        content:
          "What makes PromptPaleis different is its explicit focus on the Dutch market. The platform is not built as a generic international library with half-translated content, but as a specialized marketplace for Dutch users, makers and companies.",
      },
      {
        title: "For buyers and teams",
        content:
          "For visitors, PromptPaleis works as both a discovery and purchasing environment. Buyers can browse the marketplace and filter by product type, category and software platform, making it easier to find the right listing for marketing, automation, copywriting, research, code, design, UI/UX or AI agents.",
      },
      {
        title: "What a listing contains",
        content:
          "A listing is more than a title and a price. It includes a short and extended description, usage instructions, checkpoints of what the product contains, compatible platforms and delivery details. That means you are not just buying an idea, but a product with a clear expectation upfront.",
      },
      {
        title: "More than just prompts",
        content:
          "Content on PromptPaleis is not limited to bare text prompts. Listings can also contain workflows, tutorials, example outputs, templates, documentation, JSON exports and automation files. That positions the platform as a marketplace for AI knowledge products that can be used directly in real workflows.",
      },
    ],
  },
  {
    slug: "raad-van-bestuur",
    title: "Board of Directors",
    shortDescription:
      "Custom council system in which agents, managers and people collaborate within clear permissions and guardrails.",
    heroDescription:
      "Board of Directors is not a standard off-the-shelf product, but a council we design specifically for your organization: from n8n workflow to a complete web application with an interface that fits your team and way of working.",
    image: "/images/council-header.png",
    highlights: [
      "Custom councils for leadership, teams, operations and customer service",
      "Can be built in n8n, as a web application or as a combination of both",
      "Human-in-the-loop, roles, permissions and guardrails per agent",
      "From visual dashboards to councils that work entirely through chat flows",
    ],
    gallery: [
      {
        src: "/images/council-header.png",
        alt: "Board of Directors council header with visual interface",
      },
      {
        src: "/images/council1.png",
        alt: "Example of a council for a software agency",
      },
      {
        src: "/images/council2.png",
        alt: "Example of a council for a juice factory with live process data",
      },
      {
        src: "/images/council3.png",
        alt: "Example of an email manager council with human in the loop",
      },
    ],
    sections: [
      {
        title: "Not a product, but a council designed for your context",
        content:
          "Board of Directors is a council concept we build around your organization. It can be a management cockpit, an operations layer, a coordination environment for teams or an internal decision support system with agents and humans working together.",
      },
      {
        title: "Roles, permissions and human control stay central",
        content:
          "A council is only useful when responsibilities remain clear. That is why we design these environments with explicit roles, permissions, guardrails and human review moments. Agents can support, prepare and route work, but authority remains aligned with your organization.",
      },
      {
        title: "From workflows to interfaces that fit daily work",
        content:
          "Depending on the use case, a council can live mainly in automation, in chat, in a dashboard or in a full application. We choose the form based on the actual work process instead of forcing everything into one UI pattern.",
      },
      {
        title: "Useful for leadership, operations and internal coordination",
        content:
          "A council can support leadership with files, summaries and decisions, but it can also support operational teams, process environments or internal communication. The point is not a generic AI shell, but a structure that fits the responsibilities and information flows of your team.",
      },
      {
        title: "Examples help make the concept concrete",
        content:
          "That is why we often show council examples in practice: a software agency, a factory floor with live data or an email manager with human-in-the-loop review. The exact shape depends on the environment, but the principle remains the same: coordinated AI support with clear governance.",
      },
      {
        title: "Designed together, not dropped in as a template",
        content:
          "We do not approach councils as generic products. We build them together with you around your processes, team structure, risks and operational goals. That makes the result more useful, more defensible and easier to adopt in practice.",
      },
    ],
  },
];
