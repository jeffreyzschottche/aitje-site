<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">FAQ</p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">Frequently asked questions</h1>
        <p class="mt-6 text-lg text-gray-600">
          Answers to frequently asked questions about what AITJE does and offers.
        </p>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_0.35fr]">
        <div class="space-y-6">
          <article class="rounded-3xl border border-gray-200 bg-white p-6">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]">
                <Search class="h-6 w-6" />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">Search</p>
                <h2 class="text-2xl font-semibold text-gray-900">Filter your questions</h2>
              </div>
            </div>
            <div class="mt-6 space-y-4">
              <label class="block">
                <span class="sr-only">Search in frequently asked questions</span>
                <div class="flex items-center gap-3 rounded-2xl bg-[#fafafa] px-4 py-3">
                  <Search class="h-5 w-5 text-gray-400" />
                  <input
                    v-model="searchQuery"
                    type="search"
                    placeholder="Type your question here..."
                    class="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </label>
            </div>
          </article>

          <article
            v-for="group in filteredGroups"
            :key="group.title"
            class="rounded-3xl border border-gray-200 bg-white p-6"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]">
                <component :is="group.icon" class="h-6 w-6" />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">
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
                <summary class="cursor-pointer text-base font-semibold text-gray-900">
                  {{ item.question }}
                </summary>
                <p class="mt-3 text-sm text-gray-600">{{ item.answer }}</p>
                <component
                  :is="item.external ? 'a' : NuxtLink"
                  v-if="item.linkTo"
                  :href="item.external ? item.linkTo : undefined"
                  :to="!item.external ? localizeLink(item.linkTo) : undefined"
                  :target="item.external ? '_blank' : undefined"
                  :rel="item.external ? 'noopener noreferrer' : undefined"
                  class="mt-3 inline-flex text-sm font-semibold text-[#d4a700] underline decoration-[#d4a700]/40 underline-offset-4 transition hover:text-black hover:decoration-black"
                >
                  {{ item.linkLabel || "Read more" }}
                </component>
              </details>
            </div>
          </article>

          <article
            v-if="filteredGroups.length === 0"
            class="rounded-3xl border border-dashed border-gray-300 bg-white p-6 text-center"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">No results</p>
            <h2 class="mt-3 text-2xl font-semibold text-gray-900">No questions found</h2>
            <p class="mt-3 text-sm text-gray-600">Try a broader term such as environment, services, privacy or RAG.</p>
          </article>
        </div>

        <aside class="h-max rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start">
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
              <img :src="linkedinIcon" alt="" aria-hidden="true" class="h-5 w-5 object-contain" />
            </a>
            <a
              href="https://www.tiktok.com/@aitje.bv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AITJE on TikTok"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.38V2h-3.13v12.38a2.67 2.67 0 1 1-2.67-2.67c.31 0 .61.05.9.15V8.67a5.8 5.8 0 0 0-.9-.07A5.8 5.8 0 1 0 15.82 14V7.73a7.9 7.9 0 0 0 4.77 1.6V6.2c-.34 0-.67-.03-1-.11Z" />
              </svg>
            </a>
            <a
              href="mailto:aitjebv@gmail.com"
              aria-label="Mail AITJE"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img :src="gmailIcon" alt="" aria-hidden="true" class="h-5 w-5 object-contain" />
            </a>
            <button
              type="button"
              aria-label="Request a call from AITJE"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] text-gray-900 transition hover:border-[#facc15] hover:text-[#d4a700]"
              @click="showPhoneNotice = true"
            >
              <PhoneCall aria-hidden="true" class="h-5 w-5" />
            </button>
          </div>
          <NuxtLink
            :to="localePath('/contact')"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Contact us
          </NuxtLink>
          <div class="mt-6 rounded-3xl bg-[#facc15] p-4 text-[#212121]">
            <p class="text-xs font-semibold uppercase tracking-[0.4em]">Knowledge center</p>
            <p class="mt-2 text-sm">
              In the knowledge center, we write about terms and topics from the world of AI. The answer to your question may already be there.
            </p>
            <NuxtLink
              :to="localePath('/kenniscentrum')"
              class="mt-4 inline-flex text-sm font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
            >
              Go to the knowledge center
            </NuxtLink>
          </div>
        </aside>
      </section>

      <section class="mx-auto mt-16 max-w-5xl rounded-[3rem] bg-[#212121] p-10 text-white">
        <h2 class="text-3xl font-black">Quick facts</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <article
            v-for="fact in facts"
            :key="fact.title"
            class="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
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

    <Teleport to="body">
      <div
        v-if="showPhoneNotice"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="faq-phone-notice-title"
        @click.self="showPhoneNotice = false"
      >
        <div class="w-full max-w-md rounded-3xl border border-white/10 bg-[#111] p-6 text-white shadow-2xl">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                Phone contact
              </p>
              <h2 id="faq-phone-notice-title" class="mt-3 text-2xl font-semibold">
                Request a call
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
              @click="showPhoneNotice = false"
            >
              <X aria-hidden="true" class="h-5 w-5" />
            </button>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">
            We no longer publish our phone number because of the increase in spam calls. Leave a call request through the contact form and we will get back to you.
          </p>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              :to="phoneContactPath"
              class="inline-flex flex-1 items-center justify-center rounded-full bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
              @click="showPhoneNotice = false"
            >
              Request a call
            </NuxtLink>
            <NuxtLink
              :to="introContactPath"
              class="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#facc15] hover:text-[#facc15]"
              @click="showPhoneNotice = false"
            >
              Digital introduction
            </NuxtLink>
          </div>
        </div>
      </div>
    </Teleport>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { BookOpenCheck, Leaf, Lock, PhoneCall, PlugZap, Search, Shield, Sparkles, X } from "lucide-vue-next";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const { localePath } = useSiteLocale();
const showPhoneNotice = ref(false);
const phoneContactPath = computed(() => localePath("/contact?onderwerp=belverzoek"));
const introContactPath = computed(() => localePath("/contact?onderwerp=kennismaking"));

const localizeLink = (path?: string) => (path?.startsWith("/") ? localePath(path) : path);

type FaqItem = {
  question: string;
  answer: string;
  linkTo?: string;
  linkLabel?: string;
  external?: boolean;
};

const searchQuery = ref("");

const faqGroups = [
  {
    title: "Products",
    badge: "Hardware",
    icon: Sparkles,
    items: [
      {
        question: "What exactly is AITJE Assistant?",
        answer:
          "AITJE Assistant is a mini computer optimized with our own software. You get a local LLM, a knowledge base built by AITJE to process your documents so they can be used inside the LLM, and an AI-powered knowledge system that remains accessible even without internet.",
      },
      {
        question: "Does AITJE also do custom-built hardware?",
        answer:
          "Yes. And if we cannot fully help you within your specific area of expertise, we have a stable network of specialists with whom we can realize your request.",
      },
      {
        question: "What is AITJE Coder?",
        answer:
          "AITJE Coder is a way to program without Claude Code, Codex or Gemini. You get a coding agent through our hardware device. No subscriptions, no outages. A coding partner that stays available as long as you have internet.",
      },
      {
        question: "How much do your products cost?",
        answer: "Request a price list or quote through our contact page.",
        linkTo: "/contact?onderwerp=offerte",
        linkLabel: "Request a quote",
      },
    ],
  },
  {
    title: "Technology",
    badge: "Technical infrastructure",
    icon: PlugZap,
    items: [
      {
        question: "Which backend languages do you mainly use?",
        answer: "For backend work, we mainly use Python, .NET, PHP, Laravel and Node.js.",
      },
      {
        question: "Which frameworks and tools do you use?",
        answer:
          "Depending on the solution, we use Nuxt for frontend and interfaces, and for backend and services for example FastAPI, Laravel, Blazor, PySide, Qdrant, Internal Lemonade Server and SearXNG.",
      },
      {
        question: "Can you connect to existing systems?",
        answer:
          "Yes. We can connect to external platforms and other systems where needed. This is custom work or an extension of an existing product. Our products do not do this out of the box, only through external applications developed by us.",
      },
      {
        question: "Is everything local or is hybrid also possible?",
        answer:
          "Both. We design local where possible and hybrid where needed, while keeping control over data, costs and continuity.",
      },
      {
        question: "Can your LLM search the internet?",
        answer:
          "Yes. As long as an internet connection is available on the Wi-Fi or local network, AITJE products can also use AI.",
      },
      {
        question: "Which models do you use?",
        answer:
          "We do not have a fixed preference: models can be adjusted based on the request and updated when that adds value. We keep you actively informed about that. For general use cases, Gemma, Qwen and DeepSeek models often perform strongly.",
      },
      {
        question: "Where do your servers run?",
        answer:
          "Servers are located in the Netherlands or Germany, never outside Europe. On request, we can also set up other environments if you want a cloud solution.",
      },
    ],
  },
  {
    title: "Privacy",
    badge: "Data control",
    icon: Lock,
    items: [
      {
        question: "Where does my data stay?",
        answer:
          "Data stays in the Netherlands or Europe, or does not leave the system at all. In many cases, we can even build a fully local solution within your own environment.",
      },
      {
        question: "How do you embed data into the knowledge base for AITJE Assistant?",
        answer:
          "We process and embed data on the server and synchronize it to a private version control account for your organization. From there you can sync the Assistant with the live environment. If incorrect data has been added, we can also restore previous versions and create backups through version control.",
      },
      {
        question: "Can AITJE Assistant keep working locally without internet?",
        answer:
          "Yes. Data is stored locally on your device for as long as needed. Once vector embeddings and chunks are available, the local or private LLM can continue providing answers and summaries without internet.",
      },
    ],
  },
  {
    title: "Environment",
    badge: "Impact",
    icon: Leaf,
    items: [
      {
        question: "How does AITJE help the environment?",
        answer:
          "AITJE Assistant processes data locally, which means fewer continuous calls to external data centers are needed. That reduces energy use and cooling water consumption in large-scale cloud infrastructure.",
      },
      {
        question: "Is local always more sustainable?",
        answer:
          "Yes. That is the focus of all AITJE products: minimal power usage, as few external API calls as possible and no unnecessary dependency on cloud platforms.",
      },
    ],
  },
  {
    title: "Services",
    badge: "Partnership",
    icon: Sparkles,
    items: [
      {
        question: "Which services do you offer?",
        answer: "For an overview of all services, take a look at our services page.",
        linkTo: "/diensten",
        linkLabel: "View services",
      },
      {
        question: "Can you help us shape AI strategy?",
        answer:
          "Yes. We help with choices around internal AI infrastructure, tooling, processes and priorities, so our on-premise Edge AI fits your organization instead of your organization having to adapt to our solutions.",
      },
      {
        question: "Can you build a custom agent for us?",
        answer:
          "Because demand for local custom agents is growing, we created the AITJE Custom track.",
        linkTo: "/producten/aitje-custom",
        linkLabel: "View AITJE Custom",
      },
      {
        question: "Can you build a RAG chat?",
        answer:
          "Yes. This is what AITJE Assistant and AITJE Assistant+ are made for: your own assistant with access to all the data you have chosen to share. That knowledge is stored locally in memory, so the LLM can keep accessing it.",
      },
      {
        question: "Do you build AI workflows with or without human-in-the-loop?",
        answer:
          "Yes. We design both fully automated workflows and variants with human control and approval steps.",
      },
      {
        question: "Can you extend or tweak your products for specific needs?",
        answer: "Yes, absolutely. We only do this in partnership.",
      },
      {
        question: "What does the SLA include?",
        answer:
          "AITJE's vision is to be your partner in edge and on-premise AI. That means we aim for a long-term strategic partnership. An SLA is part of that: concrete agreements about maintenance, support and extensions.",
      },
    ],
  },
  {
    title: "Target group & use",
    badge: "Audience",
    icon: BookOpenCheck,
    items: [
      {
        question: "Who is AITJE for?",
        answer:
          "SMEs, municipalities, schools, libraries and doctors. Organizations that work with sensitive data and would rather not share it in the cloud or with other countries.",
      },
      {
        question: "Can I hire you without a service package?",
        answer:
          "Absolutely. We can create a custom local Edge AI solution for you. We also do not mind handing it over to your current web builder or application administrator so they can maintain it. Please note: after handover, our warranty expires and we no longer monitor the solution. We also do not apply up-to-date improvements or offer extensions.",
      },
      {
        question: "What do you usually start with?",
        answer:
          "We usually start with a good conversation to see where AI can truly make a difference in your organization.",
      },
    ],
  },
  {
    title: "Security & independence",
    badge: "Reliability",
    icon: Shield,
    items: [
      {
        question: "What if there is an internet outage with AITJE Assistant?",
        answer:
          "At its core, AITJE Assistant is not heavily affected by that. Synchronizing becomes temporarily harder, because chunked vector-embedding data is retrieved from version control. The local data and local LLM functionality remain available.",
      },
      {
        question: "Can multiple people on the network use the AITJE Assistant API?",
        answer:
          "Yes. You create accounts and install the mobile or desktop application. After that, the user can use the local LLM and API over the network and through the AITJE Client application.",
      },
      {
        question: "How do you prevent agents from developing a will of their own?",
        answer:
          "We do that with constrained prompting, guardrailing and sandboxing. Guardrails set clear limits on actions, allowed tools, output and permissions. Sandboxing ensures agents run in a shielded environment with limited access to systems and data.",
      },
      {
        question: "What happens if there is a disruption?",
        answer:
          "We can look along remotely. Contact AITJE or submit a ticket if you have an SLA, and we will look along with you remotely.",
      },
      {
        question: "How does AITJE prevent dependency on external platforms?",
        answer:
          "By keeping multiple choices open, avoiding a single point of failure and handling as much as possible locally or on servers managed by AITJE. That limits external influence as much as possible.",
      },
    ],
  },
  {
    title: "Learning with AITJE",
    badge: "Knowledge & prompts",
    icon: BookOpenCheck,
    items: [
      {
        question: "Where can I learn more about AI terms and topics?",
        answer:
          "In our knowledge center you will find articles about terms, techniques and applications. Think of LLMs, RAG, context and local AI.",
        linkTo: "/kenniscentrum",
        linkLabel: "Go to the knowledge center",
      },
      {
        question: "Do you also help organizations write better prompts and get more out of LLMs?",
        answer:
          "Yes. It is possible to receive training from AITJE. This usually focuses on getting the most out of AITJE products, but the theory is often also applicable to other AI platforms.",
      },
    ],
  },
];

const filteredGroups = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) return faqGroups;

  return faqGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item: FaqItem) =>
        `${group.title} ${group.badge} ${item.question} ${item.answer}`.toLowerCase().includes(query),
      ),
    }))
    .filter((group) => group.items.length > 0);
});

const allFaqItems = faqGroups.flatMap((group) => group.items);

useHead({
  script: [
    {
      type: "application/ld+json",
      key: "faq-structured-data",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    },
  ],
});

const facts = [
  {
    title: "Local processing",
    badge: "100% your data",
    description: "We do not share data with external parties.",
  },
  {
    title: "Predictable costs",
    badge: "Under your own control",
    description: "You invest in a durable long-term solution.",
  },
  {
    title: "Better for nature",
    badge: "Climate",
    description: "Less server water, less energy and therefore a lighter footprint.",
  },
];
</script>
