<template>
  <div class="bg-[#f3efe5] text-gray-950">
    <SiteNavigation />

    <main v-if="product" class="pb-24 pt-28">
      <section>
        <div
          class="relative w-full overflow-hidden border border-black/10 bg-[#050505] px-6 py-8 text-white shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:px-8 lg:px-10 lg:py-10"
        >
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#facc15]/20 blur-3xl"></div>
            <div class="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/12 blur-3xl"></div>
            <div class="absolute -bottom-10 right-20 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl"></div>
            <div
              class="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(250,204,21,0.14)_100%)]"
            ></div>
          </div>

          <div class="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="inline-flex items-center rounded-full border border-[#facc15]/40 bg-[#facc15]/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#facc15]"
                >
                  {{ statusLabel }}
                </span>
              </div>

              <h1 class="mt-5 max-w-4xl text-[2.8rem] font-black uppercase leading-[0.9] sm:text-[4rem] xl:text-[5.2rem]">
                {{ product.title }}
              </h1>
              <p class="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                {{ product.summary }}
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  :to="primaryCta"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  {{ product.cta }}
                </NuxtLink>
                <NuxtLink
                  :to="useCasesRoute"
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  View use cases
                </NuxtLink>
              </div>

              <div class="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div v-for="item in heroFacts" :key="item.label" class="min-h-20">
                  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/40">
                    {{ item.label }}
                  </p>
                  <p class="mt-3 max-w-[18rem] text-sm leading-6 text-white/82">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="relative overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_top,#1f1f1f_0%,#090909_62%,#050505_100%)] p-6 sm:p-8"
              >
                <div class="rounded-[2rem] p-3">
                  <img
                    :src="heroImage"
                    :alt="product.title"
                    class="h-[20rem] w-full rounded-[1.5rem] object-cover sm:h-[26rem]"
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <template v-if="isCustom">
        <section class="mx-auto -mt-4 w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
          <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
            AITJE Custom Solutions
          </p>
          <h2 class="mt-4 text-5xl font-black text-gray-900">
            AI solutions that do not exist as standard products yet
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Not every organization can solve its AI question with a standard
            product. With AITJE Custom Solutions we build AI-first solutions
            around your organization's
            <NuxtLink :to="localePath('/kenniscentrum/wat-is-een-workflow')" class="knowledge-link" data-knowledge-link="true">workflow</NuxtLink>,
            data, hardware and environment. That can be an
            <NuxtLink :to="localePath('/kenniscentrum/wat-is-een-ai-agent')" class="knowledge-link" data-knowledge-link="true">AI agent</NuxtLink>,
            a local AI application on
            <NuxtLink :to="localePath('/kenniscentrum/white-label-hardware-aitje-software')" class="knowledge-link" data-knowledge-link="true">white-label hardware with AITJE software</NuxtLink>,
            or a solution with
            <NuxtLink :to="localePath('/kenniscentrum/wat-is-edge-ai')" class="knowledge-link" data-knowledge-link="true">edge AI</NuxtLink>,
            <NuxtLink :to="localePath('/kenniscentrum/wat-is-local-ai')" class="knowledge-link" data-knowledge-link="true">local AI</NuxtLink>
            or
            <NuxtLink :to="localePath('/kenniscentrum/wat-is-on-premise-ai')" class="knowledge-link" data-knowledge-link="true">on-premise AI</NuxtLink>
            where that makes sense.
          </p>
        </section>

        <section class="mx-auto mt-2 max-w-6xl px-4 sm:px-6">
          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="card in customFitCards"
              :key="card.title"
              class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]">
                <component :is="card.icon" class="h-6 w-6" />
              </div>
              <p class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                {{ card.badge }}
              </p>
              <h3 class="mt-2 text-2xl font-black text-gray-900">
                {{ card.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ card.description }}
              </p>
            </article>
          </div>
        </section>

        <section class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
          <div class="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <article class="rounded-[2.5rem] bg-[#212121] p-8 text-white shadow-sm lg:sticky lg:top-28 lg:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                What we build
              </p>
              <h2 class="mt-3 text-4xl font-black">
                From AI question to local solution
              </h2>
              <p class="mt-5 text-base leading-8 text-gray-300">
                AITJE Custom is not a standard product, but a route we take
                together. Where traditional agencies build and maintain your
                websites, apps or social channels, at AITJE Custom we first
                choose the hardware your problem actually needs. Then we build
                a local,
                <NuxtLink :to="localePath('/kenniscentrum/wat-is-edge-ai')" class="knowledge-link" data-knowledge-link="true">edge</NuxtLink>
                or
                <NuxtLink :to="localePath('/kenniscentrum/wat-is-on-premise-ai')" class="knowledge-link" data-knowledge-link="true">on-premise AI</NuxtLink>
                solution on top of it that adds value inside your own environment.
              </p>
              <NuxtLink
                :to="localePath('/contact?onderwerp=offerte')"
                class="mt-8 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                Discuss custom work
              </NuxtLink>
            </article>

            <div class="grid gap-4 md:grid-cols-2">
              <article
                v-for="item in customBuildItems"
                :key="item.title"
                class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p class="text-xs font-semibold uppercase tracking-[0.32em] text-[#facc15]">
                  {{ item.badge }}
                </p>
                <h3 class="mt-2 text-xl font-black text-gray-900">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-sm leading-7 text-gray-600">
                  {{ item.text }}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
          <div class="rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Process
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-900">
              How we keep custom work manageable
            </h2>
            <div class="mt-8 grid gap-4 md:grid-cols-4">
              <article
                v-for="step in customProcessSteps"
                :key="step.title"
                class="rounded-[1.5rem] border border-gray-100 bg-[#fafafa] p-5"
              >
                <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc15]">
                  {{ step.number }}
                </p>
                <h3 class="mt-2 text-lg font-black text-gray-900">
                  {{ step.title }}
                </h3>
                <p class="mt-2 text-sm leading-7 text-gray-600">
                  {{ step.text }}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
          <div class="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <article class="rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                What this includes
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Concrete AI solutions on suitable hardware
              </h2>
              <ul class="mt-6 space-y-3 text-sm leading-7 text-gray-700">
                <li
                  v-for="item in customIncludedItems"
                  :key="item"
                  class="flex items-start gap-3"
                >
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>
                    <template
                      v-for="segment in item.segments"
                      :key="segment.text"
                    >
                      <NuxtLink
                        v-if="segment.href"
                        :to="localePath(segment.href)"
                        class="knowledge-link"
                        data-knowledge-link="true"
                      >
                        {{ segment.text }}
                      </NuxtLink>
                      <template v-else>{{ segment.text }}</template>
                    </template>
                  </span>
                </li>
              </ul>
            </article>

            <article class="rounded-[2.5rem] bg-[#212121] p-8 text-white shadow-sm lg:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Next step
              </p>
              <h2 class="mt-3 text-3xl font-black">
                Do you have an AI question that does not fit a standard product?
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                Send us your question. We will check whether AITJE Custom makes
                sense, or whether an existing product, installation, consultancy
                or
                <NuxtLink :to="localePath('/diensten/sla')" class="knowledge-link" data-knowledge-link="true">SLA</NuxtLink>
                fits better.
              </p>
              <NuxtLink
                :to="localePath('/contact?onderwerp=offerte')"
                class="mt-7 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                Discuss custom work
              </NuxtLink>
            </article>
          </div>
        </section>
      </template>

      <template v-else>
      <section class="mx-auto -mt-4 w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          {{ introSection.kicker }}
        </p>
        <h2 class="mt-4 text-5xl font-black text-gray-900">
          {{ introSection.title }}
        </h2>
        <p class="mt-6 text-lg text-gray-600">
          {{ introSection.text }}
        </p>
      </section>

      <section class="mx-auto mt-2 max-w-6xl px-4 sm:px-6">
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="card in introCards"
            :key="card.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
            >
              <component :is="card.icon" class="h-6 w-6" />
            </div>
            <p class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ card.badge }}
            </p>
            <h2 class="mt-2 text-2xl font-black text-gray-900">
              {{ card.title }}
            </h2>
            <p class="mt-3 text-sm leading-7 text-gray-600">
              {{ card.description }}
            </p>
          </article>
        </div>
      </section>

      <section class="mt-16 bg-black py-14">
        <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <article class="flex h-full flex-col justify-center rounded-[2rem] border border-white/10 bg-white/5 p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              {{ blackSection.kicker }}
            </p>
            <h2 class="mt-4 text-3xl font-black">
              {{ blackSection.title }}
            </h2>
            <p class="mt-5 text-lg font-medium leading-8 text-white/88">
              {{ blackSection.subtitle }}
            </p>
            <p class="mt-5 max-w-2xl text-base leading-8 text-white/72">
              {{ blackSection.paragraph }}
            </p>
          </article>

          <article>
            <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <img
                :src="heroImage"
                :alt="product.title"
                class="h-[18rem] w-full rounded-[1.4rem] object-cover sm:h-[24rem]"
              />
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Vision
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            AI should work for your organization, not the other way around
          </h2>
          <p class="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-700">
            AI is here to stay. Agents, LLMs, image generation and video generation
            will play an increasingly large role in how organizations work. Our
            view is that it is better to prepare for that development on your own
            systems, without full dependence on foreign parties, Big Tech or
            external platforms.
          </p>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <div class="rounded-[3rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            What we believe in
          </p>
          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <article
              v-for="card in beliefCards"
              :key="card.title"
              class="rounded-[1.75rem] border border-gray-100 bg-[#fafafa] p-6"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ card.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ card.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6">
        <div class="border-b border-gray-200">
          <div class="flex flex-wrap gap-x-8 gap-y-3">
            <button
              v-for="tab in productTabs"
              :key="tab.key"
              type="button"
              class="border-b-[3px] px-1 pb-5 text-lg font-black transition"
              :class="activeProductTab === tab.key
                ? 'border-black text-black'
                : 'border-transparent text-gray-400 hover:text-gray-700'"
              @click="activeProductTab = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div class="pt-10 md:min-h-[34rem]">
          <div v-if="activeProductTab === 'specs'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ specsIntro }}
            </p>

            <div class="mt-8 overflow-x-auto rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <table class="w-full min-w-[600px] border-collapse text-left">
                <thead class="bg-[#fafafa]">
                  <tr>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Component</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Content</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in specsRows"
                    :key="row.label"
                    class="odd:bg-[#f7f7f7]"
                  >
                    <td class="px-5 py-4 text-base font-medium text-gray-800">
                      {{ row.label }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-700">
                      {{ row.value }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-600">
                      {{ row.note }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeProductTab === 'os'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ osIntro }}
            </p>

            <div class="mt-8 overflow-x-auto rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <table class="w-full min-w-[600px] border-collapse text-left">
                <thead class="bg-[#fafafa]">
                  <tr>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Layer</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Status</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in osRows"
                    :key="row.layer"
                    class="odd:bg-[#f7f7f7]"
                  >
                    <td class="px-5 py-4 text-base font-medium text-gray-800">
                      {{ row.layer }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-700">
                      {{ row.status }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-600">
                      {{ row.description }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeProductTab === 'models'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ modelsIntro }}
            </p>

            <div class="mt-8 overflow-x-auto rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <table class="w-full min-w-[600px] border-collapse text-left">
                <thead class="bg-[#fafafa]">
                  <tr>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Model type</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Model</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Standard</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Expandable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in modelRows"
                    :key="`${row.type}-${row.name}`"
                    class="odd:bg-[#f7f7f7]"
                  >
                    <td class="px-5 py-4 text-base font-medium text-gray-800">
                      {{ row.type }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-700">
                      {{ row.name }}
                    </td>
                    <td class="px-5 py-4 text-base font-semibold" :class="row.default ? 'text-green-700' : 'text-red-500'">
                      {{ row.default ? 'Yes' : 'No' }}
                    </td>
                    <td class="px-5 py-4 text-base font-semibold" :class="row.expandable ? 'text-green-700' : 'text-red-500'">
                      {{ row.expandable ? 'Yes' : 'No' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeProductTab === 'personalization'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ personalizationIntro }}
            </p>

            <div class="mt-8 grid gap-5 md:grid-cols-2">
              <article
                v-for="item in personalizationItems"
                :key="item.title"
                class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 class="text-2xl font-black text-gray-900">
                  {{ item.title }}
                </h3>
                <ul class="mt-4 space-y-3 text-base leading-7 text-gray-600">
                  <li
                    v-for="point in item.points"
                    :key="point"
                    class="flex items-start gap-3"
                  >
                    <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>

          <div v-else>
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ installationIntro }}
            </p>

            <div class="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <article class="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
                <h3 class="text-2xl font-black text-gray-900">
                  What we can do around installation
                </h3>
                <ul class="mt-5 space-y-3 text-base leading-7 text-gray-600">
                  <li
                    v-for="point in installationPoints"
                    :key="point"
                    class="flex items-start gap-3"
                  >
                    <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </article>

              <article class="rounded-[2rem] bg-[#212121] p-7 text-white shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                  Services
                </p>
                <h3 class="mt-4 text-2xl font-black">
                  For all info on how we can help
                </h3>
                <p class="mt-4 text-base leading-8 text-gray-300">
                  View the services page for installation, expansion, consultancy,
                  SLA and other forms of guidance around AITJE products.
                </p>
                <NuxtLink
                  :to="localePath('/diensten')"
                  class="mt-6 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  View services
                </NuxtLink>
              </article>
            </div>
          </div>
        </div>
      </section>

      <ProductSoftwareShowcase
        :hero-image="heroImage"
        locale="en"
        :product-slug="slug"
        :product-title="product.title"
      />

      <section class="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6">
        <div>
          <div class="grid gap-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-center">
            <div class="grid gap-6">
              <article
                v-for="value in valueColumns.left"
                :key="value.title"
                class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <h3 class="text-2xl font-black text-gray-900">
                  {{ value.title }}
                </h3>
                <p class="mt-4 text-sm leading-7 text-gray-600">
                  {{ value.text }}
                </p>
              </article>
            </div>

            <article class="rounded-[2.75rem] border border-gray-200 bg-white p-8 text-center shadow-sm lg:p-10">
              <img
                src="/images/aitje-logo.png"
                alt="AITJE logo"
                class="mx-auto h-24 w-auto object-contain"
              />
              <p class="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Our vision
              </p>
              <h3 class="mt-3 text-4xl font-black text-gray-900">
                AI should work for your organization, not the other way around
              </h3>
              <div class="mt-5 space-y-4 text-base leading-8 text-gray-700">
                <p>
                  AI is quickly becoming a fixed part of how organizations work.
                </p>
                <p>
                  That is why we believe in preparing on your own systems, with
                  more control over data, usage and dependencies.
                </p>
                <p>
                  Not everything new is automatically useful. We prefer what
                  stays practical, responsible and sustainable.
                </p>
              </div>
            </article>

            <div class="grid gap-6">
              <article
                v-for="value in valueColumns.right"
                :key="value.title"
                class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <h3 class="text-2xl font-black text-gray-900">
                  {{ value.title }}
                </h3>
                <p class="mt-4 text-sm leading-7 text-gray-600">
                  {{ value.text }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
        <div class="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article class="rounded-[2.5rem] bg-[#212121] px-8 py-10 text-white lg:px-10">
            <div class="mx-auto flex max-w-2xl flex-col justify-center">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Pricing & next step
              </p>
              <h2 class="mt-3 text-4xl font-black">
                Request a price list or quote
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                Products, services and SLA are intentionally not shown as loose
                price boxes on the page. We keep the site clear and direct you to
                a price list, quote or introduction once the question becomes concrete.
              </p>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  :to="localePath('/contact?onderwerp=prijslijst')"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Request price list
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/contact?onderwerp=offerte')"
                  class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Request quote
                </NuxtLink>
              </div>
            </div>
          </article>

          <article class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/wanneer-aitje.png"
              alt="AITJE products and services"
              class="h-56 w-full object-cover"
            />
            <div class="p-8">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                Effective collaboration
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Partnership with clear agreements
              </h2>
              <ul class="mt-6 space-y-3 text-sm text-gray-700">
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Clear agreements on goals, planning, responsibilities and outcomes.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>For organizations that want support with fixed products and practical AI applications.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Guidance that helps with choice, setup and use, without an unnecessarily large project.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      </template>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Leaf, PlugZap, Sparkles } from "lucide-vue-next";
import { productCatalogV2, productStatusLabel } from "@/data/productCatalogV2";

const { localePath } = useSiteLocale();

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const unavailableSlugs = new Set(["aitje-coder"]);

if (unavailableSlugs.has(slug.value)) {
  await navigateTo("/en/products", { redirectCode: 302 });
}

const product = computed(() => productCatalogV2.en.products.find((entry) => entry.slug === slug.value));
const isCustom = computed(() => slug.value === "aitje-custom");

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const statusLabel = computed(() => {
  const customLabels: Record<string, string> = {
    "aitje-assistent": "Local AI",
    "aitje-custom": "Custom Solutions",
  };

  return customLabels[slug.value] ?? productStatusLabel.en[product.value!.status];
});

const heroImage = computed(() => {
  const mapping: Record<string, string> = {
    "aitje-assistent": "/images/aitje-cubes.png",
    "aitje-custom": "/images/aitje-custom.png",
    "aitje-coder": "/images/aitje-product.png",
  };
  return mapping[slug.value] ?? "/images/aitje-product.png";
});

const primaryCta = computed(() => {
  if (slug.value === "aitje-custom") return localePath("/contact?onderwerp=offerte");
  if (slug.value === "aitje-coder") return localePath("/contact?onderwerp=interesse-aitje-coder");
  return localePath("/contact?onderwerp=demo");
});

const useCasesRoute = localePath("/use-cases");

const heroFacts = computed(() => {
  if (isCustom.value) {
    return [
      { label: "Type", value: "AI-first custom work on request" },
      { label: "Focus", value: "Edge AI, local AI, on-premise AI and hardware" },
      { label: "Outcome", value: "White-label hardware, AITJE software" },
    ];
  }

  return [
    { label: "Audience", value: product.value!.audience },
    { label: "Use cases", value: `${product.value!.useCases.length} concrete directions` },
    {
      label: "Modules",
      value: product.value!.modules?.length ? `${product.value!.modules.length} connected components` : "Standalone proposition",
    },
  ];
});

const introSection = computed(() => ({
  kicker: product.value!.status === "available" ? "Product" : "In development",
  title: product.value!.title,
  text: product.value!.intro,
}));

const blackSection = computed(() => ({
  kicker: product.value!.status === "available" ? "Product" : "Direction",
  title: product.value!.title,
  subtitle: product.value!.summary,
  paragraph: product.value!.intro,
}));

const productTabs = [
  { key: "specs", label: "Specs" },
  { key: "os", label: "OS" },
  { key: "models", label: "Models" },
  { key: "personalization", label: "Personalization" },
  { key: "installation", label: "Support" },
] as const;

const activeProductTab = ref<(typeof productTabs)[number]["key"]>("specs");

const specsIntro = computed(() =>
  `${product.value!.title} is set up as a clear product layer within AITJE. Below you can see which components, deployments and roles belong to it.`
);

const specsRows = computed(() => [
  {
    label: "Status",
    value: statusLabel.value,
    note: product.value!.status === "available" ? "Ready for immediate deployment in projects" : "Not live yet as a standard product",
  },
  {
    label: "Target group",
    value: product.value!.audience,
    note: "Primary type of organization this product is aimed at",
  },
  {
    label: "Summary",
    value: product.value!.summary,
    note: "Core of the proposition",
  },
  {
    label: "Use cases",
    value: product.value!.useCases.join(", "),
    note: "Examples of practical deployment",
  },
]);

const osIntro = computed(() =>
  `Within AITJE we do not only look at a loose interface, but at the whole layer around it: management, access, workflows and the way this product lands inside the organization.`
);

const osRows = computed(() => {
  const moduleRows = product.value!.modules?.map((module) => ({
    layer: module.title,
    status: "Active component",
    description: module.summary,
  })) ?? [];

  return [
    {
      layer: "Management layer",
      status: "Set up per project",
      description: `Aligned to ${product.value!.title}, permissions, usage and practical setup.`,
    },
    {
      layer: "Workflow layer",
      status: "Depends on deployment",
      description: product.value!.highlights[0] ?? product.value!.summary,
    },
    ...moduleRows,
  ];
});

const modelsIntro = computed(() =>
  `Not every product needs the same model mix. This table shows which model directions logically fit ${product.value!.title}.`
);

const modelRows = computed(() => [
  {
    type: "Knowledge & chat",
    name: "Llama / Qwen instruction models",
    default: slug.value === "aitje-assistent",
    expandable: true,
  },
  {
    type: "Document & workflow",
    name: "Summarization, structuring and extraction routes",
    default: true,
    expandable: true,
  },
  {
    type: "Speech / intake",
    name: "Transcription or intake-focused models",
    default: slug.value !== "aitje-assistent",
    expandable: true,
  },
  {
    type: "Vision / multimodal",
    name: "Image or camera support where relevant",
    default: false,
    expandable: slug.value !== "aitje-custom",
  },
]);

const personalizationIntro = computed(() =>
  `Personalization is not only in styling, but mainly in permissions, sources, workflow steps and output. These are the main directions in which ${product.value!.title} can be adapted.`
);

const personalizationItems = computed(() => [
  {
    title: "Setup",
    points: [
      "Align access, roles and usage to the team or organization",
      "Add sources, documents or context per project",
      "Let workflows connect to existing processes",
    ],
  },
  {
    title: "Output",
    points: [
      "Summary, transcript or structured output per situation",
      "Connection to your own app, site or internal environment where needed",
      "Configurable format for feedback, follow-up or processing",
    ],
  },
]);

const installationIntro = computed(() =>
  `An AITJE product does not stand apart from setup and handover. Around ${product.value!.title}, we can help with installation, alignment and practical onboarding.`
);

const installationPoints = computed(() => [
  `Installation and basic setup of ${product.value!.title} in your environment`,
  "Aligning permissions, access and usage per team or organization",
  "Setting up integrations, knowledge sources and workflow steps in a practical way",
  "Handover and guidance so the product is actually used",
]);

const customFitCards = [
  {
    badge: "AI agency",
    title: "AI-first custom work",
    description:
      "We combine agents, workflows, data and hardware into one practical solution.",
    icon: PlugZap,
  },
  {
    badge: "Middle ground",
    title: "Product where possible",
    description:
      "If existing products or services are enough, we choose those. Custom is for questions that are genuinely more specific.",
    icon: Sparkles,
  },
  {
    badge: "Local",
    title: "AI on suitable hardware",
    description:
      "We look for a setup that can run locally, at the edge or on-premise when data, availability or environment requires it.",
    icon: Leaf,
  },
];

const customBuildItems = [
  {
    badge: "Agents",
    title: "Local AI agents",
    text: "Agents that work with defined context, tools and boundaries inside your own environment.",
  },
  {
    badge: "Workflows",
    title: "AI in existing processes",
    text: "Document flows, intake, summaries, checks or follow-up processed logically with AI.",
  },
  {
    badge: "Hardware",
    title: "Devices and local setups",
    text: "A solution on suitable hardware, with local AI, edge AI or on-premise deployment where needed.",
  },
  {
    badge: "Input",
    title: "Scan, camera or document processing",
    text: "AI applications around visual input, barcodes, forms, files or other practical sources.",
  },
  {
    badge: "Integrations",
    title: "Connections to existing tools",
    text: "Connections to internal systems, websites, applications or data sources when the workflow requires it.",
  },
  {
    badge: "Offline",
    title: "AI without constant cloud dependency",
    text: "Solutions that remain usable locally when internet, external APIs or cloud platforms are not the right base.",
  },
];

const customProcessSteps = [
  {
    number: "01",
    title: "Clarify the question",
    text: "We determine what problem needs to be solved and whether Custom is actually needed.",
  },
  {
    number: "02",
    title: "Design the solution",
    text: "We choose the logical combination of AI, software, hardware, data and workflow.",
  },
  {
    number: "03",
    title: "Build and test",
    text: "We develop in a focused way, test with real input and keep scope and cost visible.",
  },
  {
    number: "04",
    title: "Deliver or continue",
    text: "You receive a working solution with agreements about management, handover or SLA.",
  },
];

const customIncludedItems = [
  {
    segments: [
      { text: "Local AI", href: "/kenniscentrum/wat-is-local-ai" },
      { text: " agents that work with your data and processes inside your own environment." },
    ],
  },
  {
    segments: [
      { text: "Edge AI", href: "/kenniscentrum/wat-is-edge-ai" },
      { text: " and " },
      { text: "on-premise AI", href: "/kenniscentrum/wat-is-on-premise-ai" },
      { text: " solutions on hardware we select for your problem." },
    ],
  },
  {
    segments: [
      { text: "Workflows", href: "/kenniscentrum/wat-is-een-workflow" },
      { text: " for documents, intake, checks, summaries or follow-up." },
    ],
  },
  {
    segments: [
      { text: "Integrations with existing systems, applications, websites, " },
      { text: "APIs", href: "/kenniscentrum/wat-is-een-api" },
      { text: " or data sources." },
    ],
  },
];

const introCards = [
  {
    badge: "Strategy",
    title: "Not everything at once",
    description:
      "We first help determine what makes sense before anything gets built or expanded.",
    icon: PlugZap,
  },
  {
    badge: "Custom",
    title: "Only when standard does not fit",
    description:
      "AITJE Custom remains, but as a focused route instead of a broad custom-work label. Smaller and clearer.",
    icon: Sparkles,
  },
  {
    badge: "Continuity",
    title: "Control and continuity",
    description:
      "The focus is on more control over AI use, less dependence and choices that remain sustainable over time.",
    icon: Leaf,
  },
];

const values = [
  {
    title: "Clarity over jargon",
    text: "We want organizations to quickly understand what something does, why it matters and when it makes sense.",
  },
  {
    title: "Control over dependence",
    text: "We keep looking for ways to make data, knowledge and AI use less vulnerable to outside choices.",
  },
  {
    title: "Stability over hype",
    text: "Not every trend deserves a place in an organization. We prefer something that works and remains sustainable.",
  },
  {
    title: "Partnership over one-off sales",
    text: "We do not just want to put something in place, but also think along about how it keeps working in practice.",
  },
];

const valueColumns = {
  left: values.slice(0, 2),
  right: values.slice(2, 4),
};

const beliefCards = [
  {
    title: "The market changes fast",
    text: "AI is becoming a fixed part of modern organizations. Agents, LLMs, image generation and video generation will change processes, while the parties behind them will ultimately want to earn back their investments.",
  },
  {
    title: "Dependence creates vulnerability",
    text: "External AI costs can rise sharply, platform choices by third parties directly affect your operation and full dependence makes organizations vulnerable over time.",
  },
  {
    title: "Software, hardware and guidance",
    text: "AITJE offers hardware and software to let your organization work with AI in a future-ready way. Not as hype, but as practical infrastructure with which you stay in control of data, costs and continuity.",
  },
  {
    title: "Practical inside the organization",
    text: "Local access to documents and knowledge through an LLM, practical deployment for teams and business processes and support with secure integration.",
  },
];
</script>
