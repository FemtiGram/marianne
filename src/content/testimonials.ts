export type Quote = {
  text: string;
  name: string;
  role: string;
  /** Logo i /public/images/logos */
  logo?: string;
};

const logo = (name: string) => `/images/logos/${name}`;

export const testimonialGroups: { title: string; quotes: Quote[] }[] = [
  {
    title: "Oppdrag og samarbeid",
    quotes: [
      {
        text: "Marianne has been an important contributor to Equinor’s digitalization journey (…)",
        name: "Christos C. Becker",
        role: "Head of Data & Analytics, Equinor",
        logo: logo("q-equinor.png"),
      },
      {
        text: "Marianne kombinerer faglig styrke med genuin interesse for mennesker. Hun skaper en kultur av samarbeid og glede som løfter alle rundt seg.",
        name: "Robin Koien",
        role: "Agile coach, Bouvet ASA",
        logo: logo("q-bouvet.jpg"),
      },
      {
        text: "Marianne kombinerer kreativitet og gjennomføringsevne på imponerende vis. Hun ser helheten og løfter teamet rundt seg.",
        name: "Simen Sommerfeldt",
        role: "CTO, Bouvet ASA",
        logo: logo("q-bouvet.jpg"),
      },
      {
        text: "Enorm gjennomføringskraft kombinert med struktur og smittende engasjement. En dyktig prosjektleder og verdifull bidragsyter i flere prosjekter.",
        name: "Ovidia Eriksen",
        role: "Kommunikasjonsrådgiver, Bouvet ASA",
        logo: logo("q-bouvet.jpg"),
      },
      {
        text: "Marianne løste en konkret utfordring for oss med et friskt blikk og kreativ tenkning. Løsningen hun utviklet har effektivisert bagasjemerkingen på Sola flyplass.",
        name: "Lars Harald Normann",
        role: "Head of IT, Avinor",
        logo: logo("q-avinor.jpg"),
      },
      {
        text: "Working with Marianne was like adding a spark of creative brilliance. Her free-spirited energy inspired curiosity, collaboration, and out-of-the-box thinking.",
        name: "Alexander Leirvåg",
        role: "Lead AI Engineer, Equinor",
        logo: logo("q-equinor.png"),
      },
      {
        text: "Marianne with her enthusiasm and inexhaustible source of ideas brought creative and inspiring energy to the project. She encouraged our teams to try new approaches and to be open-minded in searching for solutions.",
        name: "Maria Mikhaylova",
        role: "Team lead, Equinor",
        logo: logo("q-equinor.png"),
      },
      {
        text: "Marianne is dedicated, energetic and creates immediate trust. She brings positivity and focus to every task and team.",
        name: "Lars Inge Leirflåt",
        role: "CEO, VentureBuilder AI",
        logo: logo("q-venturebuilder.jpg"),
      },
      {
        text: "Pålitelig og energisk medarbeider med sterk gjennomføringsevne og gode tilbakemeldinger fra kunder. En positiv bidragsyter til arbeidsmiljøet.",
        name: "Einar Lichtenberg",
        role: "CEO, Olavstoppen AS",
        logo: logo("q-olavstoppen.jpg"),
      },
      {
        text: "Marianne er en fest å jobbe med! Hun er en dyktig entreprenør som deler sin entusiasme og kunnskap – det har vært et stort utbytte å samarbeide med henne.",
        name: "Mette Hamre",
        role: "Markedssjef, Attende",
        logo: logo("q-attende.jpg"),
      },
      {
        text: "Marianne is a bundle of energy. She has brought fresh thinking and new ideas to Oil-Tech and I highly recommend her.",
        name: "Gunnar Brandt Eilertsen",
        role: "General Manager, NOS Technology AS",
        logo: logo("q-nos-technology.jpg"),
      },
      {
        text: "Marianne setter høye krav til seg selv, leverer langt over forventning og skaper god stemning rundt seg. Anbefales varmt!",
        name: "Askild Aspaas-Hagen",
        role: "General Manager, JB Engineering",
        logo: logo("q-jb-engineering.jpg"),
      },
      {
        text: "(…) mennesker som bidrar til vekst og utvikling – Marianne er et slikt menneske. Historien om U-GO er imponerende, inspirerende og et godt bilde på hva driftighet egentlig handler om.",
        name: "Randi B. Øglænd",
        role: "Fagleder merkevare, SpareBank 1 Sør-Norge",
        logo: logo("q-sparebank1-sr.png"),
      },
      {
        text: "Marianne is a creative problem-solver with an energetic approach that inspires those around her. She brings fresh ideas and a dynamic energy to every challenge.",
        name: "Janet Jørmeland",
        role: "Marketing Manager, Podbike",
        logo: logo("podbike.png"),
      },
      {
        text: "Enestående produktutvikler og samarbeidspartner. Marianne gir tydelige råd, tester nye løsninger og skaper verdi i tverrfaglige team.",
        name: "Tor Arne Espedal",
        role: "Sales Manager, Prometheus Medical",
        logo: logo("prometheus.jpg"),
      },
    ],
  },
  {
    title: "Kurs og foredrag",
    quotes: [
      {
        text: "Imponert over Mariannes innovasjonsreise: humor, hjerte og stamina! En formidler med tydelige verdier, retning og ekte engasjement.",
        name: "Marie Rasmussen",
        role: "Seksjonssjef, Patentstyret",
        logo: logo("q-patentstyret.jpg"),
      },
      {
        text: "Rogaland fylkesbibliotek har fått mange gode, for ikke å si strålende, tilbakemeldinger på Mariannes pedagogiske evner og tekniske kompetanse.",
        name: "Britt Ellingsdalen",
        role: "Fylkesbiblioteksjef, Rogaland fylkeskommune",
        logo: logo("q-rogaland-fylkeskommune.jpg"),
      },
      {
        text: "Strålende gjennomføring! Marianne leverte et omfattende prosjekt og formidlet 3D-printteknologi til hele fylket. Profesjonell og dyktig.",
        name: "Stig Beite Løken",
        role: "Rogaland fylkeskommune",
        logo: logo("q-rogaland-fylkeskommune.jpg"),
      },
      {
        text: "Det skal mye til for å ikke bli engasjert av Marianne! Hun kombinerer humor og historiefortelling på en imponerende måte. 10/10.",
        name: "Kristen Borum",
        role: "Rådgiver, Skape (Rogaland fylkeskommune)",
        logo: logo("q-skape.jpg"),
      },
      {
        text: "Marianne har en imponerende drivkraft og lang erfaring med praktisk læring gjennom entreprenørskap. En allsidig problemløser!",
        name: "Thorgeir Taksdal",
        role: "Rådgiver, Skape (Rogaland fylkeskommune)",
        logo: logo("q-skape.jpg"),
      },
      {
        text: "Marianne holdt et engasjerende foredrag for oss i Patentstyret om sin innovasjonsreise. En dyktig foredragsholder som jeg vil anbefale til alle som jobber med innovasjon.",
        name: "Ståle Windingstad",
        role: "Patentstyret",
        logo: logo("q-patentstyret.jpg"),
      },
      {
        text: "Engasjerende, sjarmerende og lærerik foredragsholder. Mariannes innovasjonsreise viser hvordan bevisste valg om immaterielle rettigheter gir verdi.",
        name: "Bente Fjeldberg",
        role: "Fagleder, Patentstyret",
        logo: logo("q-patentstyret.jpg"),
      },
      {
        text: "Marianne formidler med varme, mot og gjennomslagskraft. Hennes inspirerende foredrag om U-GO traff meg rett i hjertet. Dette er et foredrag vi kommer til å huske.",
        name: "Eva Havnerås",
        role: "Jurist, Patentstyret",
        logo: logo("q-patentstyret.jpg"),
      },
      {
        text: "Engasjerende foredrag for design- og håndverkselever: «Fra skulker til gründer» traff midt i hjertet. Marianne formidler ekte og inspirerende.",
        name: "Hanne Merethe Staurland",
        role: "Vågen videregående skole",
        logo: logo("q-vagen-vgs.jpg"),
      },
      {
        text: "Marianne kom til oss og inspirerte oss, både lærere og elever. Nyttig å høre deg dele av din erfaring og kompetanse med det å være entreprenør.",
        name: "Hilde Ness Sandvold",
        role: "Senior Advisor, Topplinjen Innovasjon og ledelse, Universitetet i Stavanger",
        logo: logo("q-uis.png"),
      },
      {
        text: "Ryddig, engasjert og god formidler. Marianne skaper entusiasme og forklarer 3D-teknologi på en enkel og inspirerende måte.",
        name: "Silje Holden Birkeland",
        role: "Vindafjord kommune",
        logo: logo("q-vindafjord-kommune.jpg"),
      },
      {
        text: "Marianne holdt et fantastisk 3D-printekurs for barn hos oss. Hun var hjelpsom, fleksibel og møtte ungene med ekte engasjement.",
        name: "Gro Verpe",
        role: "Haugesund kommune",
        logo: logo("q-haugesund-kommune.png"),
      },
      {
        text: "Pedagogisk og dyktig kursholder som vekket nysgjerrigheten hos våre ansatte på Sølvberget. Anbefales til alle aldersgrupper!",
        name: "Thale Dobbert",
        role: "Stavanger kommune",
        logo: logo("q-stavanger-kommune.png"),
      },
      {
        text: "Entusiastisk, dyktig og inspirerende! Kursene Marianne har holdt hos oss har vært suksess hver gang.",
        name: "Sola kommune",
        role: "Kursarrangør",
        logo: logo("q-sola-kommune.png"),
      },
    ],
  },
  {
    title: "Mentor og veiledning",
    quotes: [
      {
        text: "Den perfekte entreprenør og inspirator! Marianne løfter både prosjekter og mennesker, og er en uvurderlig ressurs for vår neste generasjons unge talenter.",
        name: "Kristina Thomsen",
        role: "Prosjektleder, Ungt Entreprenørskap Rogaland",
        logo: logo("q-ue-rogaland.jpg"),
      },
      {
        text: "Inspirerende mentor og gründer med sterk gjennomføringsevne. Skapte reell verdi for vårt studentprosjekt og sluttprodukt.",
        name: "Robert de Graaff",
        role: "Bachelorstudent, NTNU",
        logo: logo("q-ntnu.jpg"),
      },
    ],
  },
];

/** Utvalg som vises på forsiden */
export const featuredQuotes: Quote[] = [
  testimonialGroups[0].quotes[0],
  testimonialGroups[0].quotes[2],
  testimonialGroups[1].quotes[0],
  testimonialGroups[0].quotes[4],
  testimonialGroups[0].quotes[7],
  testimonialGroups[1].quotes[1],
];

export const testimonialCount = testimonialGroups.reduce((n, g) => n + g.quotes.length, 0);
