// Publisher metadata checked against the YouTube player on 18 October 2026.
export const productTrailers = {
  'aitje-coder': {
    title: 'AITJE Coder — producttrailer',
    description: 'Ontdek AITJE Coder: coding agents, eigen modellen en code-review in jullie eigen AI-omgeving.',
    embedUrl: 'https://www.youtube-nocookie.com/embed/rHF4Ba0OZ48?rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=rHF4Ba0OZ48',
    thumbnailUrl: 'https://i.ytimg.com/vi/rHF4Ba0OZ48/hqdefault.jpg',
    uploadDate: '2026-10-18T12:30:09-07:00',
    duration: 'PT1M15S',
  },
  'aitje-assistent': {
    title: 'AITJE Chat Assistent — producttrailer',
    description: 'Ontdek AITJE Chat Assistent: chat, bedrijfskennis en beheer met AI in jullie eigen omgeving.',
    embedUrl: 'https://www.youtube-nocookie.com/embed/NLznu5msvwg?rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=NLznu5msvwg',
    thumbnailUrl: 'https://i.ytimg.com/vi/NLznu5msvwg/hqdefault.jpg',
    uploadDate: '2026-10-18T10:36:21-07:00',
    duration: 'PT2M58S',
  },
} as const;

export const getProductTrailer = (slug: string) => productTrailers[slug as keyof typeof productTrailers];
