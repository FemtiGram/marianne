# Overlevering: få nettsiden over på din egen konto

Denne guiden er skrevet for at **Claude Code skal gå gjennom den sammen med deg**, ett steg om gangen. Du trenger ikke kunne programmering. Målet er at nettsiden ligger på din egen GitHub- og Vercel-konto, slik at du eier den helt selv og kan si opp Squarespace.

**Slik starter du:** Installer Claude Code (steg 0), åpne den og skriv:

> Les https://github.com/FemtiGram/marianne/blob/main/HANDOVER.md og hjelp meg å følge den, ett steg om gangen.

---

## Til Claude: slik hjelper du Marianne

- Hun har **ikke** git, Node.js/npm eller GitHub CLI installert fra før, og er ikke utvikler. Forklar kort og på norsk hva hvert steg gjør og hvorfor.
- Gjør ett steg om gangen og sjekk at det virket før du går videre (f.eks. `git --version`, `node --version`).
- Kommandoer som ber om **passord** (sudo, Homebrew-installasjon) eller **innlogging i nettleser** må hun kjøre selv. Be henne kjøre dem i et eget Terminal-vindu, eller skrive `! <kommando>` i Claude Code.
- Finn ut om hun bruker **Mac eller Windows** før steg 1, og følg riktig variant.
- Ikke slett eller endre noe på Squarespace eller hos domeneleverandøren uten at hun har bekreftet det. Se steg 6.

---

## Steg 0 – Installer Claude Code

- **Mac:** Åpne programmet *Terminal* og lim inn:
  `curl -fsSL https://claude.ai/install.sh | bash`
- **Windows:** Installer først [Git for Windows](https://git-scm.com/downloads/win) (standardvalg overalt). Åpne deretter *PowerShell* og lim inn:
  `irm https://claude.ai/install.ps1 | iex`

Start Claude Code ved å skrive `claude` i terminalen, og logg inn med Claude-kontoen din.

## Steg 1 – Installer verktøyene

Du trenger tre ting: **git** (versjonskontroll), **Node.js** (som inneholder npm, for å kjøre siden lokalt) og **GitHub CLI** (`gh`, for å logge inn på GitHub).

**Mac**
1. Installer Homebrew (pakkebehandler for Mac). Kjør i Terminal, og skriv inn Mac-passordet når du blir spurt:
   `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
   Følg instruksjonene til slutt i installasjonen om å legge `brew` til PATH.
2. `brew install git node gh`

**Windows**
1. Git er allerede installert fra steg 0.
2. `winget install OpenJS.NodeJS.LTS GitHub.cli`
3. Lukk og åpne terminalen på nytt.

**Sjekk:** `git --version`, `node --version` (skal være 20 eller nyere), `npm --version`, `gh --version`.

## Steg 2 – GitHub-konto og innlogging

1. Lag en gratis konto på https://github.com/signup hvis du ikke har en.
2. Logg inn fra terminalen (åpner nettleseren):
   `gh auth login --web --git-protocol https`
3. Sett navnet og e-posten som skal stå på endringene dine:
   ```
   git config --global user.name "Marianne Hebnes"
   git config --global user.email "marianne.hebnes@gmail.com"
   ```

## Steg 3 – Hent nettsiden og legg den på din konto

```bash
cd ~
git clone https://github.com/FemtiGram/marianne.git mariannehebnes
cd mariannehebnes
git remote remove origin
gh repo create mariannehebnes --public --source=. --push
```

Nå ligger hele siden, med historikk, på `github.com/<ditt-brukernavn>/mariannehebnes`. Du kan velge `--private` i stedet for `--public` hvis du ikke vil at koden skal være synlig.

## Steg 4 – Kjør siden på din egen maskin

```bash
npm install
npm run dev
```

Åpne http://localhost:3000. Prøv å endre en tekst i `src/content/site.ts`. Siden oppdateres med en gang. Stopp med `Ctrl + C`.

## Steg 5 – Publiser på Vercel (gratis)

1. Gå til https://vercel.com/signup og velg **Continue with GitHub**.
2. Klikk **Add New → Project**, velg `mariannehebnes`-repoet og klikk **Deploy**. Du trenger ikke endre noen innstillinger.
3. Etter et minutt får du en adresse som `mariannehebnes.vercel.app`. Sjekk at alt ser riktig ut.

Fra nå av publiseres hver endring du sender til GitHub (`git push`) automatisk.

## Steg 6 – Flytt domenet mariannehebnes.no (gjør dette sammen med Anders)

⚠️ Dette er det eneste steget som kan ødelegge noe. Ta det rolig.

1. Finn ut hvor domenet er registrert. Et `.no`-domene ligger hos en norsk registrar, f.eks. Domeneshop, eller hos Squarespace sin partner. Sjekk på https://www.norid.no/no/domenenavn/sok/.
2. **Sjekk e-post først:** Hvis du har e-post på `@mariannehebnes.no`, må DNS-oppføringene for e-post (MX, og ofte TXT/SPF) **beholdes uendret**. Ta skjermbilde av alle DNS-oppføringene før du endrer noe.
3. I Vercel: **Project → Settings → Domains → Add** `mariannehebnes.no` og `www.mariannehebnes.no`. Vercel viser hvilke DNS-oppføringer som skal legges inn (vanligvis en A-oppføring og en CNAME).
4. Legg inn oppføringene hos domeneleverandøren. Det kan ta opptil et døgn før det virker.
5. Når siden lastes på `https://mariannehebnes.no`, og e-posten fortsatt fungerer, kan du si opp Squarespace. **Pass på at du ikke sier opp selve domenet** hvis det er registrert gjennom Squarespace. Flytt det i så fall først.

## Steg 7 – Gi beskjed til Anders

Når alt er flyttet kan Anders slette sin kopi (`FemtiGram/marianne`) og Vercel-prosjektet sitt.

---

## Vanlige endringer etterpå

Du kan be Claude Code om ting som:

- «Legg til et nytt prosjekt om …, her er teksten og bildene»
- «Bytt ut portrettet på forsiden med dette bildet»
- «Legg til et nytt medieoppslag fra Aftenbladet»
- «Publiser endringene»

Se `README.md` for hvor innholdet ligger.
