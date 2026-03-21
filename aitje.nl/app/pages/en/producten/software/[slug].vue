<template>
  <div v-if="item" class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main v-if="isPromptPaleis" class="px-6 pt-32">
      <section class="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
        <NuxtLink
          :to="localePath('/producten/software')"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Back to software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Products / Software
            </p>
            <h1 class="mt-4 text-5xl font-black text-gray-900 sm:text-6xl">
              {{ item.title }}
            </h1>
            <p class="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              {{ item.heroDescription }}
            </p>
            <ul v-if="item.highlights?.length" class="mt-8 grid gap-3">
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="rounded-2xl border border-[#f3dfa0] bg-[#fff8dc] px-4 py-3 text-sm font-medium text-gray-700"
              >
                {{ highlight }}
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-4">
              <a
                href="https://promptpaleis.nl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Explore PromptPaleis
              </a>
              <a
                href="https://promptpaleis.nl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
              >
                Open de marketplace
              </a>
            </div>
          </div>

          <figure
            v-if="item.gallery?.[0]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                promptpaleis.nl
              </div>
            </div>
            <img
              :src="item.gallery[0].src"
              :alt="item.gallery[0].alt"
              class="h-[32rem] w-full object-cover object-top"
            />
          </figure>
        </div>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <h2 class="text-3xl font-black text-gray-900">
            {{ item.sections[0]?.title }}
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            {{ item.sections[0]?.content }}
          </p>
          <p class="mt-6 text-base leading-8 text-gray-600">
            {{ item.sections[1]?.content }}
          </p>
          <a
            href="https://promptpaleis.nl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center text-sm font-semibold text-[#c69200] transition hover:text-black"
          >
            Go to promptpaleis.nl
          </a>
        </article>

        <figure
          v-if="item.gallery?.[1]"
          class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-sm"
        >
          <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
            <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
            <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
            <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
            <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
              marketplace.promptpaleis.nl
            </div>
          </div>
          <img
            :src="item.gallery[1].src"
            :alt="item.gallery[1].alt"
            class="h-[28rem] w-full object-cover object-top"
          />
          <figcaption class="p-4 text-sm text-gray-500">
            {{ item.gallery[1].alt }}
          </figcaption>
        </figure>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="order-2 space-y-5 lg:order-1">
          <figure
            v-if="item.gallery?.[2]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                verkopers.promptpaleis.nl
              </div>
            </div>
            <img
              :src="item.gallery[2].src"
              :alt="item.gallery[2].alt"
              class="h-[22rem] w-full object-cover object-top"
            />
          </figure>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              Seller environment
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              PromptPaleis is not only useful for buyers, but also for creators who want to present their digital AI products professionally. The seller environment helps structure listings clearly, present products better and connect more directly to what Dutch users are looking for.
            </p>
          </article>
        </div>

        <div class="order-1 space-y-6 lg:order-2">
          <article
            v-for="section in promptPaleisTailSections"
            :key="section.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 class="text-2xl font-black text-gray-900">
              {{ section.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ section.content }}
            </p>
          </article>
          <div class="rounded-[2rem] bg-[#1f1f1f] p-8 text-white shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Explore directly
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Explore listings, workflows and AI products on PromptPaleis
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-300">
              Explore the platform, browse the marketplace and see how digital AI products are presented for Dutch users on
              <a
                href="https://promptpaleis.nl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-[#facc15] underline decoration-transparent underline-offset-4 transition hover:decoration-[#facc15]"
              >
                promptpaleis.nl
              </a>.
            </p>
            <div class="mt-6 flex flex-wrap gap-4">
              <a
                href="https://promptpaleis.nl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                Visit PromptPaleis
              </a>
              <a
                href="https://promptpaleis.nl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#facc15] hover:text-[#facc15]"
              >
                View the product approach
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <main v-else-if="isCouncil" class="px-6 pt-32">
      <section class="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
        <NuxtLink
          :to="localePath('/producten/software')"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Back to software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Products / Software
            </p>
            <h1 class="mt-4 text-5xl font-black text-gray-900 sm:text-6xl">
              {{ item.title }}
            </h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              {{ item.heroDescription }}
            </p>
            <ul v-if="item.highlights?.length" class="mt-8 grid gap-3">
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="rounded-2xl border border-[#f3dfa0] bg-[#fff8dc] px-4 py-3 text-sm font-medium text-gray-700"
              >
                {{ highlight }}
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink
                :to="localePath('/contact')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Discuss your council
              </NuxtLink>
              <NuxtLink
                :to="localePath('/contact')"
                class="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
              >
                Plan a custom session
              </NuxtLink>
            </div>
          </div>

          <figure
            v-if="item.gallery?.[0]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                council.aitje.nl
              </div>
            </div>
            <img
              :src="item.gallery[0].src"
              :alt="item.gallery[0].alt"
              class="h-[32rem] w-full object-cover object-top"
            />
          </figure>
        </div>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <h2 class="text-3xl font-black text-gray-900">
            {{ item.sections[0]?.title }}
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            {{ item.sections[0]?.content }}
          </p>
          <p class="mt-6 text-base leading-8 text-gray-600">
            {{ item.sections[1]?.content }}
          </p>
        </article>

        <figure
          v-if="item.gallery?.[1]"
          class="self-start overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-sm"
        >
          <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
            <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
            <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
            <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
            <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
              agency.council
            </div>
          </div>
          <img
            :src="item.gallery[1].src"
            :alt="item.gallery[1].alt"
            class="h-[22rem] w-full object-cover object-top"
          />
        </figure>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="space-y-6">
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              {{ item.sections[2]?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ item.sections[2]?.content }}
            </p>
          </article>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              {{ item.sections[3]?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ item.sections[3]?.content }}
            </p>
          </article>
          <article
            v-if="wordpressInlineFeature"
            class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                {{ wordpressBrowserLabel }}
              </div>
            </div>
            <img
              :src="wordpressInlineFeature.src"
              :alt="wordpressInlineFeature.alt"
              class="h-[22rem] w-full bg-white object-contain p-4"
            />
            <div class="p-6">
              <h3 class="text-2xl font-black text-gray-900">
                {{ wordpressInlineFeature.title || wordpressInlineFeature.alt }}
              </h3>
              <p
                v-if="wordpressInlineFeature.description"
                class="mt-4 text-base leading-8 text-gray-600"
              >
                {{ wordpressInlineFeature.description }}
              </p>
            </div>
          </article>
        </div>

        <div class="space-y-5">
          <figure
            v-if="item.gallery?.[2]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                factory.council
              </div>
            </div>
            <img
              :src="item.gallery[2].src"
              :alt="item.gallery[2].alt"
              class="h-[23rem] w-full object-cover object-top"
            />
          </figure>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              Example 2: factory and live operations
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              A council can also work for a juice factory or another production environment. In that case you connect machines, process data and statuses to a chat or dashboard layer, so you can see which step is running live, where delays appear and which actions make sense next.
            </p>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <div class="space-y-5">
          <figure
            v-if="item.gallery?.[3]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                mail.council
              </div>
            </div>
            <img
              :src="item.gallery[3].src"
              :alt="item.gallery[3].alt"
              class="h-[24rem] w-full object-cover object-top"
            />
          </figure>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              Example 3: email manager
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              Another council can combine multiple mailboxes and knowledge bases. Agents place correct draft replies in a queue, while you as the human in the loop only need to review, improve and send them. That lets you scale communication without losing control.
            </p>
          </article>
        </div>

        <div class="space-y-6">
          <article
            v-for="section in councilTailSections"
            :key="section.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 class="text-2xl font-black text-gray-900">
              {{ section.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ section.content }}
            </p>
          </article>
          <div class="rounded-[2rem] bg-[#1f1f1f] p-8 text-white shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Design together
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Tell us what kind of council your organization needs
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-300">
              We already design different councils and shape them around your workflow. From chat-driven agents to a complete governance or operations cockpit, we build what fits your team, your data and your responsibilities.
            </p>
            <p class="mt-4 text-sm leading-7 text-gray-400">
              We also added a dedicated council option on <NuxtLink :to="localePath('/contact?onderwerp=council')" class="text-[#facc15] underline decoration-transparent underline-offset-4 transition hover:decoration-[#facc15]">/contact</NuxtLink>, so you can start your request with the right context immediately.
            </p>
            <div class="mt-6 flex flex-wrap gap-4">
              <NuxtLink
                :to="localePath('/contact?onderwerp=council&bericht=Ik%20wil%20een%20council%20laten%20bouwen%20voor%20mijn%20organisatie.%20Het%20gaat%20ongeveer%20om%3A')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                Start een council-gesprek
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <main v-else-if="isWordPressSoftware" class="px-6 pt-32">
      <section class="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
        <NuxtLink
          :to="localePath('/producten/software')"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Back to software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Products / Software
            </p>
            <h1 class="mt-4 text-5xl font-black text-gray-900 sm:text-6xl">
              {{ item.title }}
            </h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              {{ item.heroDescription }}
            </p>
            <ul v-if="item.highlights?.length" class="mt-8 grid gap-3">
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="rounded-2xl border border-[#f3dfa0] bg-[#fff8dc] px-4 py-3 text-sm font-medium text-gray-700"
              >
                {{ highlight }}
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink
                :to="wordpressContactLink"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                {{ wordpressPrimaryCta }}
              </NuxtLink>
            </div>
          </div>

          <figure
            v-if="item.gallery?.[0]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                {{ wordpressBrowserLabel }}
              </div>
            </div>
            <img
              :src="item.gallery[0].src"
              :alt="item.gallery[0].alt"
              class="h-[30rem] w-full bg-white object-contain p-4"
            />
          </figure>
        </div>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <h2 class="text-3xl font-black text-gray-900">
            {{ item.sections[0]?.title }}
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            {{ item.sections[0]?.content }}
          </p>
          <p class="mt-6 text-base leading-8 text-gray-600">
            {{ item.sections[1]?.content }}
          </p>
        </article>

        <div class="space-y-5">
          <figure
            v-if="item.gallery?.[1]"
            class="self-start overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                {{ wordpressBrowserLabel }}
              </div>
            </div>
            <img
              :src="item.gallery[1].src"
              :alt="item.gallery[1].alt"
              class="h-[22rem] w-full bg-white object-contain p-4"
            />
          </figure>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              In practice
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ wordpressPracticalIntro }}
            </p>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="space-y-6">
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              {{ item.sections[2]?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ item.sections[2]?.content }}
            </p>
          </article>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              {{ item.sections[3]?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ item.sections[3]?.content }}
            </p>
          </article>
        </div>

        <div class="space-y-6">
          <div class="rounded-[2rem] bg-[#1f1f1f] p-8 text-white shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Usage & access
            </p>
            <h2 class="mt-3 text-3xl font-black">
              How you access and use the plugin
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-300">
              {{ item.sections[4]?.content }}
            </p>
            <p class="mt-4 text-base leading-8 text-gray-300">
              {{ item.sections[5]?.content }}
            </p>
          </div>
          <figure
            v-if="item.gallery?.[2]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                {{ wordpressBrowserLabel }}
              </div>
            </div>
            <img
              :src="item.gallery[2].src"
              :alt="item.gallery[2].alt"
              class="h-[22rem] w-full bg-white object-contain p-4"
            />
          </figure>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              What we configure
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ wordpressBuildoutCopy }}
            </p>
            <NuxtLink
              :to="wordpressContactLink"
              class="mt-6 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
            >
              {{ wordpressPrimaryCta }}
            </NuxtLink>
          </article>
        </div>
      </section>

      <section
        v-if="wordpressFeatureGallery.length"
        class="mx-auto mt-12 max-w-6xl"
      >
        <div class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Extra schermen
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Meer zicht op hoe {{ item.title }} in WordPress werkt
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            These additional screenshots show the prompt controls, execution flow and management flow you use to make the plugin practical inside your site.
          </p>
        </div>

        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <article
            v-for="feature in wordpressFeatureGallery"
            :key="feature.src"
            class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                {{ wordpressBrowserLabel }}
              </div>
            </div>
            <img
              :src="feature.src"
              :alt="feature.alt"
              class="h-[22rem] w-full bg-white object-contain p-4"
            />
            <div class="p-6">
              <h3 class="text-2xl font-black text-gray-900">
                {{ feature.title || feature.alt }}
              </h3>
              <p
                v-if="feature.description"
                class="mt-4 text-base leading-8 text-gray-600"
              >
                {{ feature.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <main v-else-if="isAssistantSoftware" class="px-6 pt-32">
      <section class="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
        <NuxtLink
          :to="localePath('/producten/software')"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Back to software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Products / Software
            </p>
            <h1 class="mt-4 text-5xl font-black text-gray-900 sm:text-6xl">
              {{ item.title }}
            </h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              {{ item.heroDescription }}
            </p>
            <ul v-if="item.highlights?.length" class="mt-8 grid gap-3">
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="rounded-2xl border border-[#f3dfa0] bg-[#fff8dc] px-4 py-3 text-sm font-medium text-gray-700"
              >
                {{ highlight }}
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink
                :to="assistantContactLink"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Discuss this software
              </NuxtLink>
            </div>
          </div>

          <figure
            v-if="item.gallery?.[0]"
            class="overflow-hidden rounded-[2rem] border border-[#d6d6d6] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                {{ assistantBrowserLabel }}
              </div>
            </div>
            <img
              :src="item.gallery[0].src"
              :alt="item.gallery[0].alt"
              class="h-[30rem] w-full bg-[#f3f3f3] object-contain p-4"
            />
          </figure>
        </div>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <h2 class="text-3xl font-black text-gray-900">
            {{ item.sections[0]?.title }}
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            {{ item.sections[0]?.content }}
          </p>
          <p class="mt-6 text-base leading-8 text-gray-600">
            {{ item.sections[1]?.content }}
          </p>
        </article>

        <article class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-black text-gray-900">
            In practice
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            {{ assistantPracticalIntro }}
          </p>
        </article>
      </section>

      <section
        v-if="assistantFeatureGallery.length"
        class="mx-auto mt-12 max-w-6xl"
      >
        <div class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Screens & explanation
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            See how {{ item.title }} looks in practice
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            Below you can see the most important screens in this environment, with a short explanation of what each part does and why it matters in day-to-day use.
          </p>
        </div>

        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <article
            v-for="feature in assistantFeatureGallery"
            :key="feature.src"
            class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
          >
            <div class="flex items-center gap-2 border-b border-gray-200 bg-[#f6f6f6] px-5 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
              <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              <div class="ml-4 rounded-full bg-white px-4 py-1 text-xs text-gray-400">
                {{ assistantBrowserLabel }}
              </div>
            </div>
            <img
              :src="feature.src"
              :alt="feature.alt"
              class="h-[22rem] w-full bg-white object-contain p-4"
            />
            <div class="p-6">
              <h3 class="text-2xl font-black text-gray-900">
                {{ feature.title || feature.alt }}
              </h3>
              <p
                v-if="feature.description"
                class="mt-4 text-base leading-8 text-gray-600"
              >
                {{ feature.description }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="space-y-6">
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              {{ item.sections[2]?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ item.sections[2]?.content }}
            </p>
          </article>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              {{ item.sections[3]?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ item.sections[3]?.content }}
            </p>
          </article>
        </div>

        <div class="space-y-6">
          <div class="rounded-[2rem] bg-[#1f1f1f] p-8 text-white shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Usage & access
            </p>
            <h2 class="mt-3 text-3xl font-black">
              How you access and deploy this software
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-300">
              {{ item.sections[4]?.content }}
            </p>
            <p class="mt-4 text-base leading-8 text-gray-300">
              {{ item.sections[5]?.content }}
            </p>
          </div>
          <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-black text-gray-900">
              What we set up for this
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ assistantBuildoutCopy }}
            </p>
            <NuxtLink
              :to="assistantContactLink"
              class="mt-6 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
            >
              Start a conversation about {{ item.title }}
            </NuxtLink>
          </article>
        </div>
      </section>
    </main>

    <main v-else class="px-6 pt-32">
      <section class="mx-auto max-w-5xl">
        <NuxtLink
          :to="localePath('/producten/software')"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Back to software
        </NuxtLink>
        <div class="mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <img
            :src="item.image"
            :alt="item.title"
            class="h-72 w-full"
            :class="item.imageFit === 'contain' ? 'bg-white object-contain' : 'object-cover'"
          />
          <div class="p-8">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Products / Software
            </p>
            <h1 class="mt-3 text-4xl font-black text-gray-900">
              {{ item.title }}
            </h1>
            <p class="mt-4 text-lg text-gray-600">
              {{ item.heroDescription }}
            </p>
            <ul
              v-if="item.highlights?.length"
              class="mt-6 grid gap-3 md:grid-cols-2"
            >
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="rounded-2xl bg-[#faf7e8] px-4 py-3 text-sm font-medium text-gray-700"
              >
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        v-if="item.gallery?.length"
        class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2"
      >
        <figure
          v-for="image in item.gallery"
          :key="image.src"
          class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-80 w-full object-cover object-top"
          />
          <figcaption class="p-4 text-sm text-gray-500">
            {{ image.alt }}
          </figcaption>
        </figure>
      </section>

      <section class="mx-auto mt-12 max-w-5xl space-y-6">
        <article
          v-for="section in item.sections"
          :key="section.title"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <h2 class="text-2xl font-black text-gray-900">
            {{ section.title }}
          </h2>
          <p class="mt-3 text-base leading-7 text-gray-600">
            {{ section.content }}
          </p>
        </article>
      </section>

      <section
        v-if="item.galleryImages?.length"
        class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2"
      >
        <article
          v-for="image in item.galleryImages"
          :key="image"
          class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-4 shadow-sm"
        >
          <img
            :src="image"
            :alt="`${item.title} screenshot`"
            class="h-72 w-full bg-white object-contain"
          />
        </article>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { softwareCatalog } from "@/data/softwareCatalog.en";

const { localePath } = useSiteLocale();

const route = useRoute();

const item = computed(() =>
  softwareCatalog.find((entry) => entry.slug === route.params.slug)
);

const isPromptPaleis = computed(() => item.value?.slug === "promptpaleis");
const isCouncil = computed(() => item.value?.slug === "raad-van-bestuur");
const isWordPressSoftware = computed(() =>
  [
    "wordpress-ai-search-overview",
    "wordpress-ai-chat",
    "wordpress-alt-tekst-generator",
  ].includes(item.value?.slug ?? "")
);
const isAssistantSoftware = computed(() =>
  [
    "aitje-assistent-os",
    "aitje-assistent-client",
    "aitje-assistent-kennisbank",
  ].includes(item.value?.slug ?? "")
);

const promptPaleisTailSections = computed(() =>
  isPromptPaleis.value ? item.value?.sections.slice(2) ?? [] : []
);

const councilTailSections = computed(() =>
  isCouncil.value ? item.value?.sections.slice(4) ?? [] : []
);

const assistantBrowserLabel = computed(() => {
  switch (item.value?.slug) {
    case "aitje-assistent-os":
      return "os.aitje.local";
    case "aitje-assistent-client":
      return "client.aitje.local";
    case "aitje-assistent-kennisbank":
      return "kennisbank.aitje.cloud";
    default:
      return "aitje.local";
  }
});

const assistantFeatureGallery = computed(() =>
  isAssistantSoftware.value ? item.value?.gallery?.slice(1) ?? [] : []
);

const wordpressFeatureGallery = computed(() =>
  isWordPressSoftware.value
    ? item.value?.gallery?.slice(isSearchOverviewWordPress.value ? 4 : 3) ?? []
    : []
);

const wordpressInlineFeature = computed(() =>
  isSearchOverviewWordPress.value ? item.value?.gallery?.[3] ?? null : null
);

const isSearchOverviewWordPress = computed(
  () => item.value?.slug === "wordpress-ai-search-overview"
);

const assistantPracticalIntro = computed(() => {
  switch (item.value?.slug) {
    case "aitje-assistent-os":
      return "On the cube itself, local AI, maps, knowledge, contacts and management come together. That means the OS is not just a technical base layer, but a direct operating environment for chat, system management and offline context.";
    case "aitje-assistent-client":
      return "The client translates the local power of the cube into an accessible app experience on mobile and desktop. Users pair their hardware, log in and then work directly with the assistant without first moving through management screens or technical system layers.";
    case "aitje-assistent-kennisbank":
      return "This environment is the online processing layer of the knowledge stack. Here you upload documents, turn them into embeddings, set up version control and prepare the knowledge that will later be synchronized to the cube.";
    default:
      return "";
  }
});

const assistantBuildoutCopy = computed(() => {
  switch (item.value?.slug) {
    case "aitje-assistent-os":
      return "We configure the OS around your hardware, network, user roles, response modes and local usage context. At the same time, we make sure client access, knowledge sync and daily management come together logically on the cube itself.";
    case "aitje-assistent-client":
      return "We make sure the client fits your cubes, accounts and way of working. That means a clear connection flow, secure login, an understandable chat experience and a setup that gets end users working quickly without technical noise.";
    case "aitje-assistent-kennisbank":
      return "We help with source structure, embedding flows, private Git sync, quality control and the moment vectorized knowledge is published to the cube. That keeps the knowledge layer manageable, versionable and usable locally.";
    default:
      return "";
  }
});

const assistantContactLink = computed(() => {
  switch (item.value?.slug) {
    case "aitje-assistent-os":
      return localePath("/contact?onderwerp=offerte&bericht=I%20want%20to%20learn%20more%20about%20AITJE%20Assistant%20OS.%20My%20organization%20is%20roughly%20looking%20for%3A");
    case "aitje-assistent-client":
      return localePath("/contact?onderwerp=offerte&bericht=I%20want%20to%20learn%20more%20about%20AITJE%20Assistant%20Client.%20What%20matters%20most%20for%20us%20is%3A");
    case "aitje-assistent-kennisbank":
      return localePath("/contact?onderwerp=offerte&bericht=I%20want%20to%20learn%20more%20about%20AITJE%20Assistant%20Knowledge%20Base.%20We%20roughly%20want%20to%20connect%20these%20sources%20and%20this%20context%3A");
    default:
      return localePath("/contact");
  }
});

const wordpressBrowserLabel = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
      return "search-overview.wp.local";
    case "wordpress-ai-chat":
      return "rag-chat.wp.local";
    case "wordpress-alt-tekst-generator":
      return "alt-text.wp.local";
    default:
      return "wordpress.local";
  }
});

const wordpressPracticalIntro = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
      return "This plugin is intended for sites where extra page-level context creates direct value for visitors, crawlers and search positioning. It is not only about search, but about how a page presents itself more intelligently.";
    case "wordpress-ai-chat":
      return "This plugin becomes useful as soon as chat should not only provide information, but also help prepare or execute concrete actions. By approaching visitor-facing and editor/admin use cases separately, the same chat logic can be deployed on two levels.";
    case "wordpress-alt-tekst-generator":
      return "For editorial teams and administrators, the main strength is scale. Instead of reviewing hundreds or thousands of images manually, you can run the plugin inside the media library and improve accessibility quality much more consistently.";
    default:
      return "";
  }
});

const wordpressBuildoutCopy = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
      return "We configure instructions, cache behavior, page selection and output logic so the plugin adds real content value. We also look at how the overview behaves for visitors, crawlers and different content types within your WordPress environment.";
    case "wordpress-ai-chat":
      return "We connect content, abilities, verifications and desired actions to a chat flow that fits your organization. The result is a plugin that not only answers questions, but can also prepare or carry out work in a controlled way.";
    case "wordpress-alt-tekst-generator":
      return "We configure the plugin around your media library, API key and processing logic. We pay attention to quality, cost control, bulk processing and editorial workflow so the plugin remains practical even on larger sites.";
    default:
      return "";
  }
});

const wordpressPrimaryCta = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
    case "wordpress-ai-chat":
    case "wordpress-alt-tekst-generator":
      return "Request for free by email";
    default:
      return "Email us about this plugin";
  }
});

const wordpressContactLink = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
      return localePath("/contact?onderwerp=wordpress-plugin&bericht=I%20want%20to%20request%20the%20free%20WordPress%20AI%20Search%20Overview%20plugin.%20Our%20site%3A%20%0AUse%20case%3A%20%0AWe%20want%20to%20use%20the%20plugin%20for%3A");
    case "wordpress-ai-chat":
      return localePath("/contact?onderwerp=wordpress-plugin&bericht=I%20want%20to%20request%20the%20free%20WordPress%20AI%20Chat%20plugin.%20Our%20site%3A%20%0AUse%20case%3A%20%0AWe%20want%20to%20use%20the%20chat%20for%3A");
    case "wordpress-alt-tekst-generator":
      return localePath("/contact?onderwerp=wordpress-plugin&bericht=I%20want%20to%20request%20the%20free%20WordPress%20Alt%20Text%20Generator%20plugin.%20Our%20site%3A%20%0AMedia%20library%3A%20%0AWe%20want%20to%20generate%20alt%20text%20for%3A");
    default:
      return localePath("/contact");
  }
});

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Software page not found",
  });
}
</script>
