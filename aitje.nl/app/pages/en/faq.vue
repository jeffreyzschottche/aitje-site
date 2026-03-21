<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          FAQ
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Frequently Asked Questions
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Answers to frequently asked questions about what AITJE does and offers.
        </p>
      </section>

      <section
        class="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_0.35fr]"
      >
        <div class="space-y-6">
          <article
            v-for="group in faqGroups"
            :key="group.title"
            class="rounded-3xl border border-gray-200 bg-white p-6"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="group.icon" class="h-6 w-6" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ group.badge }}
                </p>
                <h2 class="text-2xl font-semibold text-gray-900">
                  {{ group.title }}
                </h2>
              </div>
            </div>
            <div class="mt-6 space-y-4">
              <details
                v-for="item in group.items"
                :key="item.question"
                class="rounded-2xl bg-[#fafafa] p-4"
              >
                <summary
                  class="cursor-pointer text-base font-semibold text-gray-900"
                >
                  {{ item.question }}
                </summary>
                <p class="mt-3 text-sm text-gray-600">{{ item.answer }}</p>
                <NuxtLink
                  v-if="item.linkTo"
                  :to="localizeLink(item.linkTo)"
                  class="mt-3 inline-flex text-sm font-semibold text-[#d4a700] underline decoration-[#d4a700]/40 underline-offset-4 transition hover:text-black hover:decoration-black"
                >
                  {{ item.linkLabel || "Read more" }}
                </NuxtLink>
              </details>
            </div>
          </article>
        </div>
        <aside
          class="h-max rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start"
        >
          <h3 class="text-2xl font-semibold text-gray-900">
            Is your question not listed?
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Feel free to send us a message or contact us through the platforms below.
          </p>
          <div class="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aitje-bv-a095453b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AITJE on LinkedIn"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img
                :src="linkedinIcon"
                alt=""
                aria-hidden="true"
                class="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="https://www.tiktok.com/@aitje.bv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AITJE on TikTok"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="h-5 w-5 fill-current"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.38V2h-3.13v12.38a2.67 2.67 0 1 1-2.67-2.67c.31 0 .61.05.9.15V8.67a5.8 5.8 0 0 0-.9-.07A5.8 5.8 0 1 0 15.82 14V7.73a7.9 7.9 0 0 0 4.77 1.6V6.2c-.34 0-.67-.03-1-.11Z" />
              </svg>
            </a>
            <a
              href="mailto:aitjebv@gmail.com"
              aria-label="Mail AITJE"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img
                :src="gmailIcon"
                alt=""
                aria-hidden="true"
                class="h-5 w-5 object-contain"
              />
            </a>
          </div>
          <NuxtLink
            :to="localePath('/contact')"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Get in touch
          </NuxtLink>
          <div class="mt-6 rounded-3xl bg-[#facc15] p-4 text-[#212121]">
            <p class="text-xs font-semibold uppercase tracking-[0.4em]">
              Knowledge Center
            </p>
            <p class="mt-2 text-sm">
              In the knowledge center, we write about terms and topics from the world of AI. Perhaps the answer to your question is already among them.
            </p>
            <NuxtLink
              :to="localePath('/kenniscentrum')"
              class="mt-4 inline-flex text-sm font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
            >
              To the knowledge center
            </NuxtLink>
          </div>
        </aside>
      </section>

      <section
        class="mx-auto mt-16 max-w-5xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <h2 class="text-3xl font-black">Quick Facts</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <article
            v-for="fact in facts"
            :key="fact.title"
            class="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              {{ fact.badge }}
            </p>
            <h3 class="mt-2 text-xl font-semibold text-white">
              {{ fact.title }}
            </h3>
            <p class="mt-3 text-sm text-gray-200">{{ fact.description }}</p>
          </article>
        </div>
      </section>
    </main>

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  BookOpenCheck,
  Leaf,
  Lock,
  PlugZap,
  Shield,
  Sparkles,
} from "lucide-vue-next";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const { localePath } = useSiteLocale();

const localizeLink = (path: string) =>
  path.startsWith("/") ? localePath(path) : path;

const faqGroups = [
  {
    title: "Products",
    badge: "Hardware",
    icon: Sparkles,
    items: [
      {
        question: "What exactly is AITJE Assistant?",
        answer:
          "AITJE Assistant is a mini computer optimized with our own OS. You get a local LLM, a knowledge base to use your documents in the LLM, offline maps and an AI powered knowledge system that remains accessible even without internet.",
      },
      {
        question: "What is AITJE Notetaker?",
        answer:
          "AITJE Notetaker can be ordered as both hardware and software. It records conversations and lets you set up how you want to receive summaries and output.",
      },
      {
        question: "Does AITJE also do custom build hardware?",
        answer:
          "Yes. And if we cannot help you fully within your specific expertise, we have a stable network of specialists with whom we can complete the plan.",
      },
      {
        question: "Does AITJE offer any other hardware?",
        answer:
          "Not at this time. Keep an eye on our roadmap page for new hardware developments.",
        linkTo: "/roadmap",
        linkLabel: "View roadmap",
      },
    ],
  },
  {
    title: "Technology",
    badge: "Technical infrastructure",
    icon: PlugZap,
    items: [
      {
        question: "What backend languages do you primarily use?",
        answer:
          "For backend, we work mainly with Python, .NET, PHP, Laravel and Node.js.",
      },
      {
        question: "What frameworks and tools do you use?",
        answer:
          "Depending on the solution, for frontend and interfaces we use Nuxt 3, among others, and for backend and services we use FastAPI, Laravel, Blazor, PySide and Qdrant, for example.",
      },
      {
        question: "Can you interface with existing systems?",
        answer:
          "Yes. We can link with commonly used tools and CMS environments, as long as the integration is technically and organizationally sound.",
      },
      {
        question: "Is everything local or also hybrid possible?",
        answer:
          "Both. We design locally where we can and hybrid where we need to, while maintaining a grip on data, cost and continuity.",
      },
      {
        question: "How do you run the LLM?",
        answer:
          "In most cases, we use Ollama. If necessary, we can also use other inference engines, such as vLLM.",
      },
      {
        question: "What models do you guys use?",
        answer:
          "We have no set preference: models can be changed on demand and updated when it adds value. We actively keep you informed about that. For general use cases, Gemma models often work strongly.",
      },
      {
        question: "Where are your servers running?",
        answer:
          "Servers are located in the Netherlands or Germany, never outside of Europe. On request, we can also set up other environments if you want a cloud solution.",
      },
    ],
  },
  {
    title: "Privacy",
    badge: "Data check",
    icon: Lock,
    items: [
      {
        question: "Where is my data?",
        answer:
          "Data stays in the Netherlands or Europe. In many cases, we can even build a completely local solution within your own environment.",
      },
      {
        question:
          "How do you embed data in the knowledge base for AITJE Assistant?",
        answer:
          "We process and embed data on the server and sync it to a private version control account for your organization. From there, you can sync to the live environment on the Assistant. If wrong data is added, we can also restore and backup via version control.",
      },
      {
        question: "Can AITJE Assistant continue to work locally without the Internet?",
        answer:
          "Yes. Data is stored locally on your device for as long as needed. Once vector embeddings and chunks are available, the local or private LLM can continue to provide answers and summaries without the Internet.",
      },
      {
        question: "Can AITJE Notepad continue to work locally without the Internet?",
        answer:
          "Yes. Recording and processing can be done locally, and then the summary returned via the local or private environment. This keeps you workable even in the event of an Internet outage.",
      },
    ],
  },
  {
    title: "Environment",
    badge: "Impact",
    icon: Leaf,
    items: [
      {
        question: "How is local AI helping the environment?",
        answer:
          "AITJE Assistant & Notetaker process data locally, requiring fewer continuous calls to remote data centers. This reduces energy use and cooling water consumption in large-scale cloud infrastructure.",
      },
      {
        question: "Is local always more sustainable?",
        answer: "Yes, this is the focus of AITJE.",
      },
      {
        question: "What is your starting point?",
        answer:
          "Local where we can, external where we need to. External we do only in safe places with reliable partners and without depending on 1 service.",
      },
    ],
  },
  {
    title: "Services",
    badge: "Partnership",
    icon: Sparkles,
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We think strategy with you to automate with AI as cheaply and stably as possible. We provide both technical implementation and ongoing guidance.",
        linkTo: "/diensten",
        linkLabel: "See all services",
      },
      {
        question: "Can you figure out AI strategy with us?",
        answer:
          "Yes. We help with choices in infrastructure, tooling, processes and priorities so that AI fits your organization rather than the other way around.",
      },
      {
        question: "Can you make a custom agent for us?",
        answer:
          "Yes. We build a personal agent tailored to your processes, including links to systems, security and management.",
      },
      {
        question: "Can you guys build a RAG chat?",
        answer:
          "Yes. We can set up a RAG chat that works with your documents and knowledge base so that answers are contextual and actionable.",
      },
      {
        question: "Do you build AI workflows with or without human-in-the-loop?",
        answer:
          "Yes. We design both fully automated workflows and variants with human control and approval steps.",
      },
      {
        question: "Do you also build custom software solutions?",
        answer:
          "Yes. We build custom web applications and mobile applications, including Android and iOS where appropriate.",
      },
      {
        question: "Can you install a local LLM on our network?",
        answer:
          "Yes. We install and configure local LLM solutions on your own network, including management, security and linkage to your knowledge resources.",
      },
      {
        question: "What does the SLA entail?",
        answer:
          "We always agree on an SLA. This contains agreements on maintenance, support and extensions.",
      },
    ],
  },
  {
    title: "Software",
    badge: "Integrations & workflows",
    icon: PlugZap,
    items: [
      {
        question: "What software did AITJE create?",
        answer:
          "See the products/software page for all of our general software solutions.",
        linkTo: "/producten/software",
        linkLabel: "To products/software",
      },
    ],
  },
  {
    title: "Target audience & usage",
    badge: "Target",
    icon: BookOpenCheck,
    items: [
      {
        question: "Who is AITJE intended for?",
        answer:
          "SMEs, municipalities, schools, libraries and doctors. Organizations that work with sensitive data and prefer not to share it in the cloud or with other countries.",
      },
      {
        question: "Can I hire you without a service package?",
        answer:
          "Sure. We can create a custom local edge AI solution for you. We also don't mind handing this over to your current web builder or application administrator so they can maintain it.",
      },
      {
        question: "What do you usually start with?",
        answer:
          "We usually start with a good conversation to see where AI can really make a difference in your organization.",
      },
    ],
  },
  {
    title: "Security & independence",
    badge: "Security",
    icon: Shield,
    items: [
      {
        question: "What if there is an internet outage at AITJE Assistant?",
        answer:
          "AITJE Assistant does not notice much of this in basic terms. Synchronization is then temporarily more difficult, as chunked vector-embedding data is retrieved from version control. However, local data and local LLM functionality remain available.",
      },
      {
        question:
          "Can multiple people on the network use AITJE Assistant API?",
        answer:
          "Yes. You create accounts and install the mobile or desktop application. Then that user can use the local LLM and API over the network.",
      },
      {
        question: "How do you limit agents getting a will of their own?",
        answer:
          "We do that with constrained prompting, guardrailing and sandboxing. Guardrails set clear boundaries on actions, allowed tools, output and permissions. Sandboxing ensures that agents run in a protected environment with limited access to systems and data.",
      },
      {
        question: "What if there is a malfunction?",
        answer:
          "We build cloud solutions with plan B and plan C, plus timely monitoring and notifications. Our systems are set up for stable deployment within organizations, not for a global audience. That makes them more scalable and easier to keep in the air.",
      },
      {
        question: "Does AITJE Note-taker share the conversations?",
        answer:
          "AITJE Assistant records conversations and shares them to your own environment in the application. What you do with them afterwards is up to you.",
      },
      {
        question: "How does AITJE avoid dependence on external platforms?",
        answer:
          "By keeping multiple choices open, not building a single point of failure and handling as much as possible locally or on servers managed by AITJE or yourselves. This way you limit external influences to the maximum.",
      },
    ],
  },
  {
    title: "Learning with AITJE",
    badge: "Knowledge & prompts",
    icon: BookOpenCheck,
    items: [
      {
        question: "Where do I learn more about AI terms and topics?",
        answer:
          "In our knowledge center, you will find articles on terms, techniques and applications. Think LLMs, RAG, context and local AI.",
        linkTo: "/kenniscentrum",
        linkLabel: "To the knowledge center",
      },
      {
        question: "Do you have prompts & guides to get more out of LLM?",
        answer:
          "Yes, we have. Part of AITJE is PromptPaleis: the Dutch marketplace of pre-made prompts and guides to get more out of AI.",
        linkTo: "https://www.promptpaleis.nl",
        linkLabel: "To PromptPaleis",
      },
    ],
  },
];

const facts = [
  {
    title: "Local processing",
    badge: "100% data from you",
    description: "We do not share data with outside parties.",
  },
  {
    title: "Predictable costs",
    badge: "In house",
    description: "You are investing in a sustainable long-term solution.",
  },
  {
    title: "Nature-friendly",
    badge: "Climate",
    description:
      "Less server water, less energy and therefore a lighter footprint.",
  },
];
</script>
