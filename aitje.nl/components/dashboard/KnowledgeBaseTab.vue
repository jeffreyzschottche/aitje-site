<template>
  <div class="h-full overflow-y-auto bg-gray-50">
    <div class="space-y-6 p-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-2xl font-semibold">Kennisbank</h2>
          <p class="text-sm text-gray-500">Upload documenten om de AI te trainen met jouw specifieke kennis</p>
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500"
          @click="handleUpload"
        >
          <Upload class="h-5 w-5" />
          Upload document
        </button>
      </div>

      <section class="grid gap-4 md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-gray-200 bg-white p-6">
          <p class="text-sm text-gray-500">{{ stat.label }}</p>
          <p class="mt-2 text-3xl font-bold text-gray-900">{{ stat.value }}</p>
        </div>
      </section>

      <div class="relative">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Zoek documenten..."
          class="w-full rounded-full border border-gray-300 px-12 py-3 text-gray-900 transition focus:border-yellow-400 focus:outline-none"
        />
      </div>

      <section
        class="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-8 text-center transition hover:border-yellow-400"
      >
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
          <Upload class="h-8 w-8" />
        </div>
        <h3 class="mt-4 text-xl font-semibold">Sleep bestanden hierheen</h3>
        <p class="text-sm text-gray-500">of klik om te bladeren</p>
        <button
          class="mt-4 rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500"
          @click="handleUpload"
        >
          Selecteer bestanden
        </button>
        <p class="mt-2 text-xs text-gray-400">Ondersteund: PDF, DOCX, TXT, MD (max 50MB per bestand)</p>
      </section>

      <section class="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-semibold">Geüploade documenten</h3>
        <div v-if="filteredDocs.length === 0" class="py-12 text-center text-gray-500">Geen documenten gevonden</div>
        <div v-else class="mt-4 space-y-3">
          <article
            v-for="doc in filteredDocs"
            :key="doc.id"
            class="flex flex-col gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-yellow-400 md:flex-row md:items-center md:justify-between"
          >
            <div class="flex flex-1 items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                <FileText class="h-6 w-6" />
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold">{{ doc.name }}</h4>
                <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>{{ doc.type }}</span>
                  <span>{{ doc.size }}</span>
                  <span>{{ doc.uploadDate.toLocaleDateString('nl-NL') }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span
                class="rounded-full px-3 py-1 text-sm font-semibold"
                :class="statusClasses[doc.status]"
              >
                {{ statusLabels[doc.status] }}
              </span>
              <button class="rounded-lg p-2 text-gray-600 hover:bg-gray-100" title="Bekijken">
                <Eye class="h-5 w-5" />
              </button>
              <button class="rounded-lg p-2 text-gray-600 hover:bg-gray-100" title="Downloaden">
                <Download class="h-5 w-5" />
              </button>
              <button class="rounded-lg p-2 text-red-600 hover:bg-gray-100" title="Verwijderen" @click="handleDelete(doc.id)">
                <Trash2 class="h-5 w-5" />
              </button>
            </div>
          </article>
        </div>
      </section>

      <section class="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h4 class="font-semibold">Hoe werkt de kennisbank?</h4>
        <ul class="space-y-2 text-sm text-gray-700">
          <li>• Upload documenten die je wilt dat de AI kent en begrijpt</li>
          <li>• AITJE verwerkt de inhoud en voegt deze toe aan zijn kennisbank</li>
          <li>• De AI kan deze kennis gebruiken om specifieke vragen te beantwoorden</li>
          <li>• Alle data blijft 100% lokaal op jouw apparaat</li>
          <li>• Je kunt documenten verwijderen om de kennisbank bij te werken</li>
        </ul>
      </section>

      <section class="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
        <h3 class="text-xl font-semibold">Kennisbank instellingen</h3>
        <div class="flex items-center justify-between">
          <div>
            <p class="font-semibold text-gray-900">Automatisch verwerken</p>
            <p class="text-sm text-gray-500">Start direct met verwerken na upload</p>
          </div>
          <label class="relative inline-block h-6 w-12">
            <input type="checkbox" class="peer sr-only" checked />
            <span class="absolute inset-0 rounded-full bg-gray-200 transition peer-checked:bg-yellow-400"></span>
            <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-6"></span>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p class="font-semibold text-gray-900">Chunk size</p>
            <p class="text-sm text-gray-500">Grootte van tekst segmenten voor verwerking</p>
          </div>
          <select class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 transition focus:border-yellow-400 focus:outline-none">
            <option>Klein (512 tokens)</option>
            <option selected>Gemiddeld (1024 tokens)</option>
            <option>Groot (2048 tokens)</option>
          </select>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download, Eye, FileText, Search, Trash2, Upload } from 'lucide-vue-next';
import { computed, reactive, ref } from 'vue';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: Date;
  status: 'processing' | 'ready' | 'error';
}

const documents = reactive<Document[]>([
  {
    id: '1',
    name: 'Bedrijfsinformatie.pdf',
    type: 'PDF',
    size: '2.3 MB',
    uploadDate: new Date('2025-11-15'),
    status: 'ready'
  },
  {
    id: '2',
    name: 'Product catalogus 2025.docx',
    type: 'DOCX',
    size: '5.1 MB',
    uploadDate: new Date('2025-11-20'),
    status: 'ready'
  },
  {
    id: '3',
    name: 'FAQ antwoorden.txt',
    type: 'TXT',
    size: '45 KB',
    uploadDate: new Date('2025-12-01'),
    status: 'ready'
  }
]);

const searchQuery = ref('');

const stats = computed(() => [
  { label: 'Totaal documenten', value: documents.length },
  { label: 'Verwerkt', value: documents.filter((doc) => doc.status === 'ready').length },
  { label: 'In behandeling', value: documents.filter((doc) => doc.status === 'processing').length },
  { label: 'Totale grootte', value: '7.4 MB' }
]);

const filteredDocs = computed(() =>
  documents.filter((doc) => doc.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
);

const statusLabels: Record<Document['status'], string> = {
  ready: 'Klaar',
  processing: 'Verwerken...',
  error: 'Error'
};

const statusClasses: Record<Document['status'], string> = {
  ready: 'bg-green-100 text-green-700',
  processing: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700'
};

const handleUpload = () => {
  if (typeof window !== 'undefined') {
    window.alert('Upload functionaliteit - hier kun je documenten uploaden die de AI kan leren');
  }
};

const handleDelete = (id: string) => {
  if (typeof window !== 'undefined' && window.confirm('Weet je zeker dat je dit document wilt verwijderen?')) {
    const index = documents.findIndex((doc) => doc.id === id);
    if (index !== -1) {
      documents.splice(index, 1);
    }
  }
};
</script>
