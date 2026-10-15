# mariannehebnes.no

Personlig portefølje for Marianne Hebnes. Bygget med Next.js og Tailwind CSS, hostet gratis på Vercel.

**Første gang?** Følg [HANDOVER.md](HANDOVER.md) – helst sammen med Claude Code – for å installere verktøyene og få siden over på din egen GitHub- og Vercel-konto.

## Endre innhold

All tekst ligger i `src/content/` – du trenger ikke røre sidene for å endre innhold:

| Fil | Innhold |
| --- | --- |
| `src/content/site.ts` | Navn, e-post, LinkedIn, menyen, karrieretidslinjen, mediaoppslag, verv og nettverkslogoer |
| `src/content/projects.ts` | Alle prosjektene (ett objekt per prosjekt) |
| `src/content/testimonials.ts` | Anbefalingene, og hvilke som vises på forsiden |
| `src/content/tre-ting.ts` | «Tre ting jeg er god på» |

Bilder ligger i `public/images/`. Nytt prosjekt: kopier et eksisterende objekt i `projects.ts`, gi det en ny `slug`, og legg bildene i `public/images/projects/<slug>.jpg` og `<slug>-0.jpg`, `-1.jpg`, `-2.jpg`.

Farger og skrift endres på ett sted: `src/app/globals.css` (blokken `@theme`).

## Kjøre lokalt

```bash
npm install
npm run dev
```

Åpne http://localhost:3000. Endringer vises med en gang.

## Publisere

Hver `git push` til `main` publiseres automatisk av Vercel. Sjekk at alt bygger først:

```bash
npm run build
```

Gamle Squarespace-adresser (f.eks. `/showcaseugo`) videresendes til de nye sidene – se `next.config.ts`.
