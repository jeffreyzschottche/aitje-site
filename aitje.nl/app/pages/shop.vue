<template>
  <div class="bg-white text-gray-900">
    <SiteNavigation />
    <main class="px-6 pb-20 pt-32">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h1 class="text-5xl font-black">Bestel jouw AITJE</h1>
          <p class="mt-4 text-xl text-gray-600">Kies het pakket dat bij jou past</p>
        </div>

        <div class="grid gap-12 md:grid-cols-2">
          <article
            v-for="plan in plans"
            :key="plan.title"
            :class="[
              'rounded-3xl border-2 p-8 shadow-sm transition',
              plan.popular ? 'border-yellow-400 bg-yellow-50 relative overflow-hidden' : 'border-gray-200'
            ]"
          >
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-5 py-1 text-sm font-semibold text-black">
              Populair
            </div>
            <header class="mb-6 space-y-2 text-gray-600">
              <p class="text-sm uppercase tracking-[0.3em]">{{ plan.tier }}</p>
              <h2 class="text-3xl font-semibold text-gray-900">{{ plan.title }}</h2>
              <div class="flex items-baseline gap-2">
                <span class="text-5xl font-black text-gray-900">{{ plan.price }}</span>
                <span>eenmalig</span>
              </div>
            </header>
            <div class="mb-8 rounded-2xl bg-white/70 p-4">
              <img :src="plan.image" :alt="plan.title" class="w-full rounded-xl" />
            </div>
            <ul class="mb-8 space-y-4 text-gray-700">
              <li v-for="perk in plan.perks" :key="perk" class="flex items-start gap-3">
                <Check class="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span>{{ perk }}</span>
              </li>
            </ul>
            <button
              class="w-full rounded-full px-6 py-3 text-sm font-semibold transition"
              :class="plan.popular ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-black text-white hover:bg-gray-800'"
            >
              {{ plan.cta }}
            </button>
          </article>
        </div>

        <section class="mt-20 grid gap-8 md:grid-cols-3">
          <div v-for="extra in extras" :key="extra.title" class="rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-black">
              <component :is="extra.icon" class="h-8 w-8" />
            </div>
            <h3 class="mt-4 text-xl font-semibold">{{ extra.title }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ extra.description }}</p>
          </div>
        </section>

        <section class="mt-20 max-w-3xl mx-auto">
          <h2 class="mb-12 text-center text-3xl font-bold">Veelgestelde vragen</h2>
          <div class="space-y-6">
            <article v-for="faq in faqs" :key="faq.question" class="rounded-2xl bg-gray-50 p-6">
              <h3 class="text-xl font-semibold text-gray-900">{{ faq.question }}</h3>
              <p class="mt-3 text-gray-600">{{ faq.answer }}</p>
            </article>
          </div>
        </section>

        <section class="mt-20 rounded-3xl bg-gray-50 p-12 text-center">
          <h2 class="text-3xl font-bold">Nog vragen?</h2>
          <p class="mt-4 text-gray-600">Neem contact met ons op voor persoonlijk advies</p>
          <NuxtLink
            to="/contact"
            class="mx-auto mt-6 inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-base font-semibold text-black transition hover:bg-yellow-500"
          >
            Neem contact op
          </NuxtLink>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Check, Package, Shield, Truck } from 'lucide-vue-next';

const plans = [
  {
    title: 'AITJE Basic',
    tier: 'Starter',
    price: '€899',
    cta: 'Bestel Basic',
    image: '/images/aitje-product.png',
    perks: [
      'AITJE kastje met standaard AI model',
      'Volledige web interface',
      'REST API toegang',
      'Tot 5 gebruikers',
      'Email support',
      '1 jaar garantie'
    ]
  },
  {
    title: 'AITJE Pro',
    tier: 'Professional',
    price: '€1.499',
    cta: 'Bestel Pro',
    image: '/images/aitje-product.png',
    popular: true,
    perks: [
      'AITJE kastje met advanced AI model',
      'Volledige web interface',
      'REST API toegang',
      'Onbeperkt gebruikers',
      'Priority support',
      '2 jaar garantie',
      'Gratis installatie ondersteuning',
      'Upgrade mogelijkheid naar nieuwere modellen'
    ]
  }
];

const extras = [
  {
    title: 'Inclusief alles',
    description: 'Kastje, kabels, handleiding en direct te gebruiken',
    icon: Package
  },
  {
    title: 'Gratis verzending',
    description: 'Binnen Nederland gratis en snel geleverd',
    icon: Truck
  },
  {
    title: '30 dagen retour',
    description: 'Niet tevreden? Geld terug garantie',
    icon: Shield
  }
];

const faqs = [
  {
    question: 'Zijn er maandelijkse kosten?',
    answer: 'Nee! AITJE werkt volledig lokaal. Je betaalt eenmalig voor het kastje en daarna zijn er geen verdere kosten.'
  },
  {
    question: 'Hoe snel is de levering?',
    answer: 'Binnen Nederland leveren we binnen 2-3 werkdagen. Je ontvangt een track & trace code.'
  },
  {
    question: 'Kan ik later upgraden?',
    answer: 'Bij het Pro pakket kun je later upgraden naar nieuwere AI modellen. Bij Basic is dit niet mogelijk.'
  },
  {
    question: 'Is installatie moeilijk?',
    answer: 'Nee, het is plug & play. Sluit het kastje aan op je netwerk, open de web interface en je kunt direct beginnen.'
  },
  {
    question: 'Werkt het ook zonder internet?',
    answer: 'Ja! AITJE werkt volledig lokaal op je eigen netwerk. Je hebt alleen internet nodig voor de eerste setup.'
  }
];
</script>
