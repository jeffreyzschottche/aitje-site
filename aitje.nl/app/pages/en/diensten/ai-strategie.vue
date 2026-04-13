<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">AI strategy</p>
        <h1 class="mt-4 text-5xl font-black">Deciding where AI actually adds value now</h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          This service helps organizations make decisions about direction, deployment and priorities. Not everything has to happen at once, and not everything has to be local. The goal is clarity.
        </p>
      </section>
      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">What we help with</h2>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• Mapping where AI can add the most value now</li>
            <li>• Explaining what Edge AI does and does not fit</li>
            <li>• Turning first choices into something concrete for teams and decision-makers</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Next step</h2>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            This service usually leads to a practical plan, a product choice or a follow-up conversation about implementation.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/en/contact?onderwerp=kennismaking" class="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:text-[#facc15]">Plan an introduction</NuxtLink>
            <NuxtLink to="/en/contact?onderwerp=prijslijst" class="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:border-black">Request price list</NuxtLink>
          </div>
        </article>
      </section>
    </main>
    <BottomCta />
    <SiteFooter />
  </div>
</template>
