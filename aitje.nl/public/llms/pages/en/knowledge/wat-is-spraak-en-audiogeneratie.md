# What is speech and audio generation?

Official page: https://aitje.com/en/knowledge/wat-is-spraak-en-audiogeneratie

> With AI, you can convert text to speech and generate other sounds. How do text-to-speech, sound effects and transcription differ, and where do they fit into a practical workflow?

### In brief

Audio generation is the creation of sound using a model. Speech generation is a specific form of this: for example, written text is converted into a spoken explanation. Other applications create sound effects or a soundscape. Music also falls under generative audio, but has its own requirements in terms of rhythm and composition. The chosen task determines which model and which output are suitable; a single audio model does not necessarily support all these possibilities.

### What is text-to-speech?

Text-to-speech, often abbreviated to TTS, converts text into spoken audio. A model or application may offer settings for language, voice, speed or speaking style. This varies from system to system. The text remains important: abbreviations, numbers and brand names may be pronounced differently than expected. A text that is easy to read on paper does not always sound natural when read out verbatim.

### What is the difference between this and transcription?

Speech recognition converts existing audio into text. Speech synthesis works the other way round. You can combine both: a spoken question is transcribed, a language model prepares a response, and a TTS model reads that response aloud. These are separate steps, each with its own potential for error. For example, an incorrect transcription can result in an incorrect answer, even if the final voice sounds very natural.

### A practical example

An organisation wishes to provide a work instruction as a spoken explanation as well. First, the text is rewritten for listening: shorter sentences and clearly pronounced numbers. The audio is then recorded and listened to by someone familiar with the procedure. Only after verification is the file attached to the instruction. If the procedure changes, the spoken version must also be updated. This ensures that the text and audio always correspond to the same up-to-date information.

### What should you look out for when it comes to voice and sound?

Assess intelligibility, pronunciation, pauses and the volume of the output. Where multiple languages are involved, quality may vary from language to language. Furthermore, a selected voice is not the same as an imitation of a recognisable person’s voice. The use of such a voice requires clear agreements and the consent of the person concerned. For sound effects, the key consideration is whether the sound suits the event and remains sufficiently controllable during editing.

### How do you set up the processing?

Determine which text goes to the model, where audio files are stored and how regeneration works following a change. Also consider output length, waiting time and playback within your application. Costs may, for example, be related to character count, audio length or computational work, and do not necessarily have to follow the same token structure as a text API. A good workflow preserves the source content and makes it clear which version of the audio corresponds to it.

## Sources

- [Hugging Face — Text-to-speech](https://huggingface.co/docs/transformers/en/tasks/text-to-speech)
- [Hugging Face — MusicGen](https://huggingface.co/docs/transformers/en/model_doc/musicgen)
- [IBM — Generative AI](https://www.ibm.com/think/topics/generative-ai)

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
