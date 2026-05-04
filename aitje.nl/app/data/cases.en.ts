export type CaseItem = {
  slug: string;
  title: string;
  company: string;
  person: string;
  role: string;
  rating: string;
  quote: string;
  summary: string;
  solutions: string[];
  details: string[];
  image: string;
};

export const cases: CaseItem[] = [
  {
    slug: "thuiszorg-voice-rapportage",
    title: "Home care fills reporting via voice agent",
    company: "Care practice/home care",
    person: "Nadia El Amrani",
    role: "Operations manager healthcare practice",
    rating: "5/5",
    quote:
      "The combination of recording conversations, summarizing and getting information back in a structured way works very well here.",
    summary:
      "After each visit, care workers initiate reporting via WhatsApp with a client number and START REPORTING. Then the voice agent automatically calls and the call is processed in the internal system.",
    solutions: ["Custom mobile app", "Voice agent", "Document output flow"],
    details: [
      "An employee starts via WhatsApp by sending a client number and START REPORTING to the fixed number",
      "The voice agent then automatically calls via WhatsApp and asks exactly the required reporting questions in the right order",
      "The employee decides when the agent moves on to the next question",
      "Conversation data and files are delivered to the API we implemented in the internal system",
      "An agent writes the data into the local system and stores everything directly",
      "The employee receives a link via WhatsApp to review and adjust the document where needed",
      "Less administrative time and better handover between care moments",
    ],
    image: "/images/thuiszorg.png",
  },
  {
    slug: "boekenwinkel-rag-isbn",
    title: "Bookstore with RAG chat and ISBN flow",
    company: "Custom bookstore",
    person: "Marieke van Dam",
    role: "Store coordinator",
    rating: "5/5",
    quote:
      "With the RAG chat and book entry app, we find the right metadata faster and staff can find niche books much better.",
    summary:
      "We created an app for ISBN processing. The app retrieves book data via a book API, calls a webhook and sends the data with prompt to the local LLM API (Ollama) via the local network. The response is written back into the system and the book secretary is notified in the app that the document has been processed.",
    solutions: [
      "Custom RAG chat",
      "Custom book entry app",
      "Local LLM via Ollama",
      "Excel integration",
    ],
    details: [
      "The app automatically retrieves book data based on ISBN via a book API",
      "After calling a webhook, book data and prompt are sent through the local network to the local LLM API",
      "The local LLM (Ollama) returns output in a fixed format with shelf, genre and placement",
      "The webhook processes the response and writes all data directly back into the system",
      "The book secretary receives a notification from the app as soon as the document is fully processed",
      "The output is also stored in an Excel sheet so stock and classification remain centrally managed",
      "The RAG chat interface uses the same knowledge base to immediately search where a book is located, which similar genres are available and on which shelf",
    ],
    image: "/images/boeken.png",
  },
  {
    slug: "it-beheer-lokale-coding-agents",
    title: "IT team runs coding agents locally during Internet outages",
    company: "SME IT environment",
    person: "Dennis Mulder",
    role: "IT Administrator SME",
    rating: "5/5",
    quote:
      "For us, local AI was the deciding factor. AITJE is clear, works well within our own network and gives us more control over data and usage costs.",
    summary:
      "Due to recurring Internet problems, they chose a local AITJE Assistant with custom coding agents and in-house knowledge of their codebase.",
    solutions: [
      "Custom AITJE Assistant",
      "Local coding agents",
      "Internal knowledge integration",
    ],
    details: [
      "Agents are configured for their own tech stack and project documentation",
      "Teams can keep working without dependence on the internet",
      "Less sensitive data leaves the network, with more control for IT",
      "Faster output on standard tasks and better consistency in code work",
    ],
    image: "/images/storing.png",
  },
  {
    slug: "rijschool-whatsapp-notulist",
    title: "Driving school automates lesson reports via WhatsApp",
    company: "Driving School Younes",
    person: "Younes A.",
    role: "Driving school owner",
    rating: "5/5",
    quote:
      "The team at AITJE built a smart solution for my driving school. Students automatically receive a clear summary of their progress and areas for improvement after each lesson.",
    summary:
      "After each lesson, a voice agent initiates a conversation via WhatsApp and immediately asks for the main points. Custom software processes this conversation and prepares a clear summary for the student.",
    solutions: ["Custom software", "AITJE Assistant"],
    details: [
      "A voice memo via WhatsApp is automatically processed into a summary with the requested recipient already included in the title",
      "After a thumbs-up, the summary is sent directly to that recipient",
      "Sending happens automatically via WhatsApp or directly to a mobile number",
      "Less manual work and faster, clearer feedback for students",
    ],
    image: "/images/rijles.png",
  },
];
