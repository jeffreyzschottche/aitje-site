<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">SLA</p>
        <h1 class="mt-4 text-5xl font-black">Monthly collaboration for support and ongoing improvement</h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          The SLA is meant for organizations that want fixed support, advice, reserved time and updates around products and Edge AI implementations.
        </p>
      </section>
      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">What it can include</h2>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• Support and troubleshooting</li>
            <li>• Software and model updates when needed</li>
            <li>• Installation help and implementation advice</li>
            <li>• Reserved time and practical questions</li>
            <li>• 5 euros PromptPaleis credit per month</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Next step</h2>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            We do not show public pricing on the website. If SLA is relevant for your organization, we can send a price list or work out a proposal.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/en/contact?onderwerp=prijslijst" class="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:text-[#facc15]">Request price list</NuxtLink>
            <NuxtLink to="/en/contact?onderwerp=offerte" class="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:border-black">Request quote</NuxtLink>
          </div>
        </article>
      </section>
    </main>
    <BottomCta />
    <SiteFooter />
  </div>
</template>
