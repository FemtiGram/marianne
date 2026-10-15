@AGENTS.md

# mariannehebnes.no

Personlig portefølje for Marianne Hebnes. Next.js (App Router, Cache Components) + Tailwind CSS 4, statisk innhold, hostet på Vercel.

## Hvem du hjelper

Eieren er Marianne, som ikke er utvikler. Snakk norsk, forklar kort hva du gjør, og spør før du gjør noe som ikke kan angres (slette filer, force-push, endre DNS/domene). Er siden ikke satt opp på hennes maskin ennå, følg `HANDOVER.md`.

## Hvor ting ligger

- Innhold (tekst): `src/content/` – `site.ts` (kontakt, meny, tidslinje, media, verv, nettverk), `projects.ts`, `testimonials.ts`, `tre-ting.ts`. Endre innhold her, ikke i sidene.
- Sider: `src/app/<rute>/page.tsx`. Felles komponenter: `src/components/ui.tsx`, `Header.tsx`, `Footer.tsx`.
- Bilder: `public/images/` (`projects/<slug>.jpg` er kortbildet, `<slug>-0/1/2.jpg` er bildene på prosjektsiden). Skaler store bilder ned til maks ~1800 px bredde før de legges inn.
- Farger og typografi: kun i `@theme` i `src/app/globals.css`. Bruk tokenene (`text-primary`, `bg-mist`, `text-accent` …), aldri hardkodede farger. `highlight` (gul) er kun dekor, aldri tekst på hvit bakgrunn.
- Videresending fra gamle Squarespace-adresser: `next.config.ts`.

## Når du gjør endringer

1. Kjør `npm run build` og `npm run lint` – begge må gå gjennom.
2. Sjekk endringen i nettleseren (`npm run dev`, http://localhost:3000), også i mobilbredde.
3. Commit med en kort norsk melding, og `git push` når Marianne vil publisere. Vercel publiserer automatisk fra `main`.
