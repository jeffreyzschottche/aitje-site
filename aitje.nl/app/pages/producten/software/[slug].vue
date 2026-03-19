<template>
  <div v-if="item" class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main v-if="isPromptPaleis" class="px-6 pt-32">
      <section class="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
        <NuxtLink
          to="/producten/software"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Producten / Software
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
                Bekijk PromptPaleis
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
            Ga naar promptpaleis.nl
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
              Verkopersomgeving
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              PromptPaleis is niet alleen interessant voor kopers, maar ook voor makers die hun digitale AI-producten professioneel willen aanbieden. De verkopersomgeving helpt om listings duidelijk op te bouwen, producten beter te presenteren en directer aan te sluiten op wat Nederlandse gebruikers zoeken.
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
              Direct bekijken
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Ontdek listings, workflows en AI-producten op PromptPaleis
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-300">
              Bekijk het platform, verken de marketplace en zie hoe digitale AI-producten voor Nederlandse gebruikers worden gepresenteerd op
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
                Bezoek PromptPaleis
              </a>
              <a
                href="https://promptpaleis.nl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#facc15] hover:text-[#facc15]"
              >
                Bekijk de productaanpak
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <main v-else-if="isCouncil" class="px-6 pt-32">
      <section class="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
        <NuxtLink
          to="/producten/software"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Producten / Software
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
                to="/contact"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Bespreek jouw council
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
              >
                Plan een maatwerksessie
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
              Voorbeeld 2: fabriek en live operatie
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              Een council kan ook werken voor een sapfabriek of andere productieomgeving. Dan koppel je automaten, procesdata en statussen aan een chat- of dashboardlaag, zodat je kunt zien welke stap in het proces nu live draait, waar vertraging zit en welke acties logisch volgen. Daarmee wordt operationele data niet alleen zichtbaar, maar ook begrijpelijk en bruikbaar.
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
              Voorbeeld 3: email manager
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              Een andere council kan meerdere mailboxen en kennisbanken combineren. Agents zetten dan correcte conceptantwoorden in een wachtrij, terwijl jij als human-in-the-loop alleen nog hoeft te controleren, verbeteren, aanscherpen en op verzenden te klikken. Zo schaal je communicatie zonder de controle kwijt te raken.
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
              Samen ontwerpen
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Vertel ons welke council jouw organisatie nodig heeft
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-300">
              We richten al verschillende councils in en stemmen de vorm af op jouw werkproces. Van chatgedreven agents tot een volledige bestuurs- of operatiecockpit: we bouwen wat logisch is voor jouw team, jouw data en jouw verantwoordelijkheden.
            </p>
            <p class="mt-4 text-sm leading-7 text-gray-400">
              Op <NuxtLink to="/contact?onderwerp=council" class="text-[#facc15] underline decoration-transparent underline-offset-4 transition hover:decoration-[#facc15]">/contact</NuxtLink> hebben we ook al een council-optie toegevoegd, zodat je meteen een gerichte start kunt geven aan je aanvraag.
            </p>
            <div class="mt-6 flex flex-wrap gap-4">
              <NuxtLink
                to="/contact?onderwerp=council&bericht=Ik%20wil%20een%20council%20laten%20bouwen%20voor%20mijn%20organisatie.%20Het%20gaat%20ongeveer%20om%3A"
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
          to="/producten/software"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Producten / Software
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
              In de praktijk
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
              Gebruik & toegang
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Hoe je de plugin bereikt en gebruikt
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
              Wat we inrichten
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
            Deze extra screenshots laten de promptregie, uitvoer en beheerflow zien die je gebruikt om de plugin praktisch inzetbaar te maken binnen je site.
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
          to="/producten/software"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar software
        </NuxtLink>
        <div class="mt-8 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Producten / Software
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
                Bespreek deze software
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
            In de praktijk
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
            Screens & uitleg
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Bekijk hoe {{ item.title }} er in de praktijk uitziet
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            Hieronder zie je de belangrijkste schermen uit deze omgeving, met per onderdeel uitgelegd wat je ermee doet en waarom dat functioneel relevant is in dagelijks gebruik.
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
              Gebruik & toegang
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Hoe je deze software bereikt en inzet
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
              Wat we hiervoor inrichten
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              {{ assistantBuildoutCopy }}
            </p>
            <NuxtLink
              :to="assistantContactLink"
              class="mt-6 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
            >
              Start een gesprek over {{ item.title }}
            </NuxtLink>
          </article>
        </div>
      </section>
    </main>

    <main v-else class="px-6 pt-32">
      <section class="mx-auto max-w-5xl">
        <NuxtLink
          to="/producten/software"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar software
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
              Producten / Software
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
import { softwareCatalog } from "../../../data/softwareCatalog";

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
      return "Op de cube zelf komen lokale AI, kaarten, kennis, contacten en beheer samen. Daardoor gebruik je het OS niet alleen als technische basislaag, maar als directe bedieningsomgeving voor chat, systeembeheer en offline context.";
    case "aitje-assistent-client":
      return "De client vertaalt de lokale kracht van de cube naar een toegankelijke app-ervaring op mobiel en desktop. Gebruikers koppelen hun hardware, loggen in en werken daarna direct met de assistent zonder eerst langs beheerschermen of technische systeemlagen te hoeven.";
    case "aitje-assistent-kennisbank":
      return "Deze omgeving is de online verwerkingslaag van de kennisstack. Hier upload je documenten, laat je ze omzetten naar embeddings, zet je versiebeheer op en bereid je de kennis voor die later naar de cube wordt gesynchroniseerd.";
    default:
      return "";
  }
});

const assistantBuildoutCopy = computed(() => {
  switch (item.value?.slug) {
    case "aitje-assistent-os":
      return "We richten het OS in op jouw hardware, netwerk, gebruikersrollen, response modes en lokale gebruikssituatie. Daarbij zorgen we dat clienttoegang, kennis-sync en dagelijks beheer logisch samenkomen op de cube zelf.";
    case "aitje-assistent-client":
      return "We zorgen dat de client logisch aansluit op jouw cubes, accounts en werkwijze. Dat betekent heldere verbindingsflow, veilige login, een begrijpelijke chatervaring en een inrichting die eindgebruikers snel aan het werk zet zonder technische ruis.";
    case "aitje-assistent-kennisbank":
      return "We helpen met bronstructuur, embeddingflows, private Git-sync, kwaliteitscontrole en het moment waarop gevectoriseerde kennis naar de cube wordt gepubliceerd. Zo blijft de kennislaag beheersbaar, versieerbaar en lokaal inzetbaar.";
    default:
      return "";
  }
});

const assistantContactLink = computed(() => {
  switch (item.value?.slug) {
    case "aitje-assistent-os":
      return "/contact?onderwerp=offerte&bericht=Ik%20wil%20meer%20weten%20over%20AITJE%20Assistent%20OS.%20Mijn%20organisatie%20zoekt%20ongeveer%3A";
    case "aitje-assistent-client":
      return "/contact?onderwerp=offerte&bericht=Ik%20wil%20meer%20weten%20over%20AITJE%20Assistent%20Client.%20Voor%20ons%20is%20belangrijk%3A";
    case "aitje-assistent-kennisbank":
      return "/contact?onderwerp=offerte&bericht=Ik%20wil%20meer%20weten%20over%20AITJE%20Assistent%20Kennisbank.%20Wij%20willen%20ongeveer%20deze%20bronnen%20en%20context%20aansluiten%3A";
    default:
      return "/contact";
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
      return "Deze plugin is bedoeld voor sites waar extra context op paginaniveau direct waarde heeft voor bezoekers, crawlers en zoekstrategische positionering. Het gaat dus niet alleen om zoeken, maar om hoe een pagina zichzelf slimmer presenteert.";
    case "wordpress-ai-chat":
      return "Deze plugin is handig zodra je chat niet alleen informatie moet geven maar ook concrete stappen moet kunnen voorbereiden of uitvoeren. Door client side en editor/admin use-cases apart te benaderen, kun je dezelfde chatlogica op twee niveaus inzetten.";
    case "wordpress-alt-tekst-generator":
      return "Voor redacties en beheerders zit de kracht vooral in schaal. In plaats van handmatig honderden of duizenden afbeeldingen langs te gaan, kun je de plugin laten werken in de media library en zo accessibility-kwaliteit veel consistenter optrekken.";
    default:
      return "";
  }
});

const wordpressBuildoutCopy = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
      return "We richten instructies, cachegedrag, paginaselectie en outputlogica zo in dat de plugin inhoudelijk meerwaarde levert. Daarbij kijken we naar hoe de overview zich gedraagt voor bezoekers, crawlers en verschillende contenttypen binnen je WordPress-omgeving.";
    case "wordpress-ai-chat":
      return "We koppelen content, abilities, verificaties en gewenste acties aan een chatflow die past bij je organisatie. Daarmee ontstaat een plugin die niet alleen antwoord geeft, maar op gecontroleerde wijze ook werk kan voorbereiden of uitvoeren.";
    case "wordpress-alt-tekst-generator":
      return "We richten de plugin in op jouw mediabibliotheek, API key en verwerkingslogica. Daarbij letten we op kwaliteit, kostenbeheersing, bulkverwerking en redactieworkflow, zodat de plugin ook op grotere sites praktisch blijft.";
    default:
      return "";
  }
});

const wordpressPrimaryCta = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
    case "wordpress-ai-chat":
    case "wordpress-alt-tekst-generator":
      return "Vraag gratis via mail aan";
    default:
      return "Mail over deze plugin";
  }
});

const wordpressContactLink = computed(() => {
  switch (item.value?.slug) {
    case "wordpress-ai-search-overview":
      return "/contact?onderwerp=wordpress-plugin&bericht=Ik%20wil%20de%20gratis%20WordPress%20AI%20Search%20Overview%20plugin%20aanvragen.%20Onze%20site%3A%20%0AUse-case%3A%20%0AWe%20willen%20de%20plugin%20gebruiken%20voor%3A";
    case "wordpress-ai-chat":
      return "/contact?onderwerp=wordpress-plugin&bericht=Ik%20wil%20de%20gratis%20WordPress%20AI%20Chat%20plugin%20aanvragen.%20Onze%20site%3A%20%0AUse-case%3A%20%0AWe%20willen%20de%20chat%20inzetten%20voor%3A";
    case "wordpress-alt-tekst-generator":
      return "/contact?onderwerp=wordpress-plugin&bericht=Ik%20wil%20de%20gratis%20WordPress%20Alt%20Tekst%20Generator%20plugin%20aanvragen.%20Onze%20site%3A%20%0AMediabibliotheek%3A%20%0AWe%20willen%20alt-teksten%20genereren%20voor%3A";
    default:
      return "/contact";
  }
});

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Softwarepagina niet gevonden",
  });
}
</script>
