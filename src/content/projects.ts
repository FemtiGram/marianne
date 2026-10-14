import type { Quote } from "./testimonials";

export type Project = {
  slug: string;
  /** Kategori som vises over tittelen, f.eks. «Strategi og forretning» */
  category: string;
  /** Kort tittel brukt på kort og i lister */
  cardTitle: string;
  /** Overskrift på prosjektsiden */
  title: string;
  lead: string;
  /** Årstall som vises på kortet */
  years: string;
  /** Nøkkelfakta i toppen av prosjektsiden: [etikett, verdi] */
  facts: [string, string][];
  /** Bilde på kortet i prosjektoversikten */
  image: string;
  /** Bilder på prosjektsiden (første er hovedbildet) */
  gallery: string[];
  challenge?: { title: string; body: string };
  role: { title: string; intro?: string; points: string[] };
  quote?: Quote;
  result: { title: string; body?: string; points: string[] };
  reflection?: string;
  memory?: { title: string; body: string };
  moreQuotes?: Quote[];
};

const img = (slug: string) => ({
  image: `/images/projects/${slug}.jpg`,
  gallery: [0, 1, 2].map((i) => `/images/projects/${slug}-${i}.jpg`),
});

export const projects: Project[] = [
  {
    slug: "venturebuilder",
    category: "Strategi og forretning",
    cardTitle: "Fra idé til investorklar SaaS-plattform",
    title: "Strategisk rådgivning for VentureBuilder",
    lead: "VentureBuilder hjelper gründere å bygge selskaper fra tidlig idé. Jeg ga strategiske råd innen marked, vekst og investor-readiness.",
    years: "2025",
    facts: [
      ["Periode", "2025"],
      ["Oppdragsgiver", "VentureBuilder.ai"],
      ["Rolle", "Strategisk forretningsrådgiver"],
    ],
    ...img("venturebuilder"),
    challenge: {
      title: "Gode ideer, uklar vei til marked",
      body: "Selskaper i tidlig fase sliter ofte med uklart verdiløfte, spredte planer for markedet og lite struktur i driften. Målet var å skape klarhet, koble strategi og gjennomføring, og lage en konkret plan for vekst i hvert selskap.",
    },
    role: {
      title: "Tilpasset gründeren",
      points: [
        "Forretningsmodell: utviklet og spisset modellene mot reelle behov i markedet",
        "Markedsvalidering: konkurrentanalyser, brukerinnsikt og testing av produkt mot marked",
        "Markedsstrategi: konkrete planer for salg og markedsføring",
        "Struktur: verktøy og rutiner for bedre prioritering og ansvarsfordeling i teamene",
        "Rådgivning én-til-én: sparring med gründerne på viktige beslutninger",
      ],
    },
    quote: {
      text: "Marianne is dedicated, energetic and creates immediate trust. She brings positivity and focus to every task and team.",
      name: "Lars Inge Leirflåt",
      role: "CEO, VentureBuilder AI",
    },
    result: {
      title: "Tydeligere retning og bedre rustet for investorer",
      points: [
        "Skarpere verdiløfte og posisjonering i markedet",
        "Raskere og tryggere vei til markedet",
        "Mer struktur i driften på tvers av selskapene",
        "Bedre forberedt til møter med investorer, med tydelige nøkkeltall og vekstplaner",
        "Et nettverk der gründerne delte erfaringer og ressurser",
      ],
    },
    reflection:
      "Hver gründer og forretningsmodell krever sin egen tilnærming. Det viktigste er ofte å hjelpe dem å velge bort, så de kan bruke tid og penger på det som faktisk flytter selskapet fremover. Erfaringen fra mitt eget gründerskap i U-GO gjorde at jeg forsto utfordringene deres innenfra.",
  },
  {
    slug: "equinor",
    category: "Strategi og forretning",
    cardTitle: "Bedre samarbeid i Equinor Data Management",
    title: "Fra produkt- til brukerforståelse i Equinor",
    lead: "Utviklerteamene jobbet i siloer og visste lite om hvem de utviklet for. Jeg hjalp ledelsen å gå fra et produktfokus til et brukerfokus, med bedre samarbeid og trygghet i teamene.",
    years: "2022–2023",
    facts: [
      ["Periode", "2022–2023"],
      ["Kunde", "Equinor via Bouvet / Olavstoppen"],
      ["Rolle", "Seniorkonsulent, forretningsdesign og strategi. Kommunikasjonsansvarlig"],
    ],
    ...img("equinor"),
    challenge: {
      title: "Mange team, ingen felles retning",
      body: "Teamene visste ikke hvem sluttbrukerne var. Det manglet oversikt over ansvar og et trygt rom for å dele ideer på tvers av team og andre interessenter i forretningen (innen oil trading i Equinor).",
    },
    role: {
      title: "Innsikt først, så struktur",
      intro:
        "Jeg var eneste konsulent i Data Office-teamet (strategienheten) og ble utnevnt til kommunikasjonsansvarlig av produkteieren.",
      points: [
        "Intervjuet interessenter og laget et interessentkart som ikke fantes fra før",
        "Ledet workshops med design thinking",
        "Utarbeidet og lanserte en intern informasjonsplattform",
        "Bygde en kultur for tilbakemelding mellom utviklere og brukere",
      ],
    },
    quote: {
      text: "Marianne has a mindset that has made an impact on how we convey internal information in our key operation areas.",
      name: "Christos C. Becker",
      role: "Head of Data & Advanced Analytics, Equinor",
    },
    result: {
      title: "Team som vet hva de lager, og for hvem",
      body: "Teamene tok i bruk en brukersentrert arbeidsform, og samarbeidet på tvers av avdelinger ble bedre. Engasjementet økte, og det vokste frem en kultur for konstruktive tilbakemeldinger.",
      points: [
        "Oversikt over interessenter og ansvar",
        "Brukersentrert arbeidsform og bedre samarbeid på tvers",
        "Felles informasjonsplattform for hele miljøet",
        "Solgte inn en utvidelse av oppdraget, med klarsignal fra Equinor",
      ],
    },
    reflection:
      "Innovasjon krever trygghet. Jeg lærte også at det ikke er nok å ha kunden med seg. Et forslag må forankres i egen ledelse før det legges frem.",
    memory: {
      title: "Den hemmelige Snickers-kaken fra Equinor",
      body: "På et arrangement jeg var med på å organisere, fikk jeg kokken til å dele Equinors «hemmelige» oppskrift på Snickers-kake. En liten ting, men den skapte mye god stemning i teamet.",
    },
    moreQuotes: [
      {
        text: "Hun kombinerer en genuin interesse for mennesker med en sterk faglig kompetanse om hvordan skape brukervennlige produkter.",
        name: "Robin Koien",
        role: "Agile Coach, Bouvet",
      },
      {
        text: "Working with Marianne at Equinor was like adding a spark of creative brilliance to the team.",
        name: "Alexander Leirvåg",
        role: "Lead AI Engineer, Equinor",
      },
      {
        text: "Marianne with her enthusiasm and inexhaustible source of ideas brought creative and inspiring energy to the project.",
        name: "Maria Mikhaylova",
        role: "Team lead, Equinor",
      },
    ],
  },
  {
    slug: "u-go",
    category: "Gründer og produkt",
    cardTitle: "U-GO – verdens første ledsagerbøyle",
    title: "U-GO: Verdens første ledsagerbøyle",
    lead: "Det begynte med et ønske om å hjelpe en venn. Det endte som et produkt i bruk i seks land, utviklet i tett samarbeid med brukerne fra første stund.",
    years: "2018–2022",
    facts: [
      ["Periode", "2018–2022"],
      ["Selskap", "U-GO Products AS"],
      ["Rolle", "Produktutvikler og daglig leder"],
    ],
    ...img("u-go"),
    challenge: {
      title: "Et behov ingen hadde løst",
      body: "Min venn Bjarte er døvblind og drømte om å gå i terrenget. Det fantes ikke noe enkelt verktøy for å ledsage en blind person trygt over ujevnt underlag. Hjelpemidlene som fantes, var laget for funksjon, ikke for brukeropplevelse.",
    },
    role: {
      title: "Brukeren først – hele veien",
      intro:
        "Jeg hadde ansvar for hele løpet, fra innsikt og produktutvikling til finansiering, partnerskap og salg.",
      points: [
        "Hentet innsikt gjennom intervjuer og observasjon i felt, og lærte tegnspråk for å forstå brukerne bedre",
        "Lagde prototyper med 3D-printing og testet dem med brukerne gjennom hele utviklingen",
        "Sikret designet gjennom Patentstyret",
        "Inngikk avtale om produksjon med Attende og om distribusjon gjennom NAV og offentlige aktører i Danmark",
        "Utviklet opplæringsmateriell, så produktet var enkelt å ta i bruk",
      ],
    },
    quote: {
      text: "Marianne er en fest å jobbe med! Hun er en dyktig entreprenør som deler sin entusiasme og kunnskap – det har vært et stort utbytte å samarbeide med henne.",
      name: "Mette Hamre",
      role: "Markedssjef, Attende",
    },
    result: {
      title: "Fra 3D-printet prototype til seks land",
      points: [
        "Over 4000 brukere i Norge, Danmark, Tyskland, Ecuador, Mongolia og USA",
        "4 MNOK hentet fra investorer og tilskudd",
        "Presentert for statsministeren",
        "Med i SpareBank 1s filmserie om samfunnsinnovasjon",
        "Brukt som case i en bacheloroppgave ved NTNU",
      ],
    },
    reflection:
      "U-GO lærte meg at de beste ideene kommer fra å forstå mennesker, ikke fra teknologien. Jeg lærte også hva som skal til for å få et produkt ut i et marked som beveger seg sakte. Den erfaringen bruker jeg i dag når jeg gir råd til andre gründere.",
    memory: {
      title: "Synstolk på Ridderuka – og en invitasjon til New York",
      body: "I 2019 ble jeg leid inn av NAV Hjelpemiddelsentral som synstolk for lederen av Ridderrennet under Ridderuka på Beitostølen. Det er verdens største vintersportsuke for syns- og bevegelseshemmede. Jeg var med ham i styremøter og hjalp til i møter med statsministeren. Samtidig fikk jeg teste U-GO med brukerne på stedet. Et møte med Achilles International endte med en invitasjon til New York for å presentere U-GO.",
    },
    moreQuotes: [
      {
        text: "Veldig imponert over Mariannes U-GO historie: Hjerte, smerte, humor og livsglede, samt masse sjarme, mot og stamina. Du er en fantastisk engasjerende formidler og viser noen tydelige verdier!",
        name: "Marie Rasmussen",
        role: "Seksjonssjef, Patentstyret",
      },
      {
        text: "Det skal mye til for å ikke bli engasjert av å høre på Marianne! Hun involverer og engasjerer på en imponerende måte, med både humor og historiefortelling. 10/10",
        name: "Kristen Borum",
        role: "Rådgiver, Skape",
      },
      {
        text: "Marianne holdt et fantastisk foredrag for oss i Patentstyret. Hennes pågangsmot og historie om reisen med U-GO traff meg rett i hjertet. Alle jeg har snakket med av kollegaer er enige i at dette er et foredrag vi kommer til å huske.",
        name: "Eva Havnerås",
        role: "Jurist, Patentstyret",
      },
    ],
  },
  {
    slug: "safeguard-medical",
    category: "Produktutvikling",
    cardTitle: "Treningsprodukt for akuttmedisin – Safeguard Medical",
    title: "Treningsmodell for intubering",
    lead: "Helsepersonell som skal lære å intubere, trenger realistisk trening. Modellene som fantes, var enten dyre eller ikke anatomisk presise nok. Jeg utviklet en 3D-printet strupehodemodell som i dag brukes til akuttmedisinsk trening, og leverte den løpende over flere år.",
    years: "2021–2024",
    facts: [
      ["Periode", "2021–2024"],
      ["Oppdragsgiver", "Prometheus Medical International"],
      ["Rolle", "Produktutvikler og leveranseansvarlig"],
    ],
    ...img("safeguard-medical"),
    challenge: {
      title: "En treningsmodell til en kosteffektiv pris",
      body: "Intubering er en kritisk ferdighet i akuttmedisin. Prometheus Medical trengte en slitesterk modell som gjenskaper luftveiene så nøyaktig at helsepersonell kan øve trygt, og som var rimelig nok til at flere kunne ta den i bruk.",
    },
    role: {
      title: "Utviklet sammen med dem som skal bruke den",
      points: [
        "Satte meg inn i anatomien og hentet innspill fra medisinske fagfolk",
        "Modellerte i 3D og forbedret designet gjennom flere runder med prototyper",
        "Valgte materialer tilpasset teksturen og fleksibiliteten i ekte vev",
        "Testet og justerte modellen sammen med instruktører i akuttmedisin",
        "Leverte en løsning som kunne produseres i større skala",
      ],
    },
    quote: {
      text: "Dette er produkter som ble mer populære enn antatt, mye på grunn av innspill fra Marianne i utviklingsfasen. (…) Som produktutvikler er hun enestående å samarbeide med, fordi hun gir klare og tydelige råd, samtidig som hun er villig til å utforske muligheter.",
      name: "Tor Arne Espedal",
      role: "Sales Manager, Prometheus Medical",
    },
    result: {
      title: "Mer populær enn forventet",
      points: [
        "En mer realistisk treningsopplevelse",
        "Rimeligere enn tradisjonelle modeller, og dermed tilgjengelig for flere",
        "Brukerne opplevde at de var bedre forberedt til ekte inngrep",
        "Produktene ble mer populære enn kunden hadde forventet",
      ],
    },
  },
  {
    slug: "ridderrennet",
    category: "Kompetanse og formidling",
    cardTitle: "Synstolk og universell utforming på Ridderrennet",
    title: "Synstolk under Ridderuka på Beitostølen",
    lead: "NAV leide meg inn som synstolk for lederen av Ridderrennet under verdens største vintersportsuke for syns- og bevegelseshemmede. Uka ble også en test av U-GO i praksis, og den førte til en invitasjon til New York.",
    years: "2019",
    facts: [
      ["År", "2019"],
      ["Oppdragsgiver", "NAV Hjelpemiddelsentral Oslo"],
      ["Rolle", "Synstolk og gründer av U-GO"],
    ],
    ...img("ridderrennet"),
    role: {
      title: "Synstolk og gründer samtidig",
      points: [
        "Synstolket og ledsaget gjennom hele uka, også i styremøter",
        "Hjalp til i møter med statsministeren og andre beslutningstakere",
        "Testet U-GO med brukere på stedet og samlet tilbakemeldinger",
        "Presenterte U-GO for Achilles International",
      ],
    },
    result: {
      title: "Fra Beitostølen til New York",
      points: [
        "Brukeren deltok fullt i alle deler av uka",
        "Ekte tilbakemeldinger fra brukere, som forbedret U-GO videre",
        "Invitasjon fra Achilles International til å presentere U-GO i New York",
        "Nye relasjoner i miljøet for hjelpemidler og tilgjengelighet",
      ],
    },
    reflection:
      "Det å ledsage noen tett i en hel uke ga meg en forståelse av brukerne som ingen intervjuer kunne gitt. Jeg lærte også at de beste mulighetene ofte oppstår når du er til stede i miljøet, ikke når du selger.",
  },
  {
    slug: "teknologiturne",
    category: "Kompetanse og formidling",
    cardTitle: "Teknologiturné for Rogaland fylkeskommune",
    title: "Historiens første teknologiturné",
    lead: "Fylkeskommunen ville ta ny teknologi ut i lokalsamfunnene, men manglet kompetanse og ressurser til å nå hele fylket. Jeg ledet turnéen som brakte 3D-design og 3D-printing til bibliotek, skoler og næringsliv i alle kommunene.",
    years: "2017–2018",
    facts: [
      ["Periode", "2017–2018"],
      ["Kunde", "Rogaland fylkeskommune"],
      ["Rolle", "Prosjektleder og leveranseansvarlig"],
    ],
    ...img("teknologiturne"),
    challenge: {
      title: "Å løfte teknologikompetansen i hele Rogaland",
      body: "Fylkesbiblioteket kom med et enkelt spørsmål: «Kan du hjelpe oss med å gjøre 3D-print til folkeopplysning?» Målet var å bygge digital kompetanse og etterlate en struktur for videre læring i hver kommune, ikke bare ett besøk.",
    },
    role: {
      title: "Fra kurs til varig kompetanse",
      intro: "Jeg utviklet konseptet og hadde ansvar for hele gjennomføringen.",
      points: [
        "Holdt praktiske workshops i 3D-design og 3D-printing",
        "Sørget for utstyr og teknisk støtte, så kommunene kunne fortsette på egen hånd",
        "Koblet sammen bibliotek, skoler, administrasjon og beslutningstakere i hver kommune",
        "Etablerte en plattform for kunnskapsdeling og støtte etter turnéen",
      ],
    },
    quote: {
      text: "Rogaland fylkeskommune har fått mange gode, for ikke å si strålende, tilbakemeldinger på Mariannes pedagogiske evner og tekniske kompetanse. Hun vekker begeistring og lærelyst både blant ansatte og publikum.",
      name: "Britt Ellingsdalen",
      role: "Fylkesbiblioteksjef, Rogaland fylkeskommune",
    },
    result: {
      title: "Et kompetanseløft i hele fylket",
      points: [
        "Over 60 workshops og foredrag",
        "Rundt 280 deltakere, fra bibliotekansatte og IT-personell til ordførere og publikum",
        "26 kommuner nådd",
        "Kompetansen spredte seg videre til nye kurs i skoler og barnehager",
      ],
    },
    reflection:
      "Ny teknologi tas i bruk når folk får prøve selv, ikke når de bare hører om den. Jeg lærte også at varig effekt krever en eier lokalt. Uten noen som tar stafettpinnen videre, blir det med ett besøk.",
    moreQuotes: [
      {
        text: "Gjennomføringen av kurset ble gjort på en himla bra måte. Marianne er engasjert og kunnskapsrik. Hadde god kontakt med deltakerne!",
        name: "Gro Verpe",
        role: "Haugesund kommune",
      },
      {
        text: "Glimrende kompetanse, kommunikasjon og gjennomføringsevne. Resultatet var strålende. Anbefales!",
        name: "Stig B. Løken",
        role: "Rogaland fylkeskommune",
      },
      {
        text: "Marianne er pedagogisk og kunnskapsrik og var superflink til å fremme nysgjerrigheten til alle deltakere på kurset!",
        name: "Thale Dobbert",
        role: "Stavanger kommune",
      },
    ],
  },
  {
    slug: "avinor",
    category: "Produktutvikling",
    cardTitle: "Smartere bagasjemerking på Sola – Avinor",
    title: "Smartere bagasjemerking på Sola",
    lead: "Avinor hadde et konkret problem i bagasjehåndteringen på Sola. Jeg utviklet og implementerte en 3D-printet løsning som gjorde arbeidet enklere og raskere.",
    years: "2016",
    facts: [
      ["Periode", "2016"],
      ["Oppdragsgiver", "Avinor"],
      ["Rolle", "Produktutvikler og leveranseansvarlig"],
    ],
    ...img("avinor"),
    challenge: {
      title: "Et lite problem med store konsekvenser",
      body: "Avinor håndterer millioner av passasjerer hvert år. Ved innsjekkingsskrankene var holderen til rullene med bagasjelapper ustabil, og det førte til forsinkelser og manuelt arbeid for de ansatte. Avinor trengte en solid og rimelig løsning som kunne brukes på alle flyplassene.",
    },
    role: {
      title: "Tre deler ble til én",
      points: [
        "Kartlegging: satte meg inn i problemet og kravene til festet i drift",
        "Design og prototyping: utviklet en skreddersydd holder i 3D og forbedret den gjennom flere runder med prototyper",
        "Testing: prøvde holderen under reelle forhold for å sikre at den var solid og fungerte i hverdagen",
        "Implementering: leverte en ferdig løsning som passet rett inn i Avinors eksisterende system",
      ],
    },
    quote: {
      text: "Marianne løste en konkret utfordring for oss med et friskt blikk og kreativ tenkning. Løsningen hun utviklet har effektivisert bagasjemerkingen på Sola flyplass.",
      name: "Lars Harald Normann",
      role: "Head of IT, Avinor",
    },
    result: {
      title: "Fra én skranke til hele nettverket",
      points: [
        "Problemet ble løst, og arbeidet ved skrankene gikk mer effektivt",
        "Holderen er nå standard på Avinors flyplasser",
        "Viste at 3D-printing kan brukes til holdbare bruksdeler, ikke bare prototyper",
        "Inspirerte Avinor til å etablere sin egen innovasjonslab, der de nå utvikler lignende løsninger selv",
      ],
    },
    reflection:
      "Prosjektet endret hvordan jeg så på 3D-printing, fra et verktøy for prototyper til en måte å lage ferdige løsninger på reelle problemer. Den største gevinsten var kanskje ikke selve holderen, men at Avinor begynte å løse slike problemer selv.",
    memory: {
      title: "Se etter den gule holderen!",
      body: "Neste gang du sjekker inn bagasje på Sola flyplass, kan du kikke ned ved skranken. Den gule holderen til rullene med bagasjelapper er den jeg utviklet. Den er liten og lett å overse, men den gjør jobben hver eneste dag.",
    },
  },
  {
    slug: "oil-tech",
    category: "Produktutvikling",
    cardTitle: "Produkt- og forretningsutvikling – Oil-Tech",
    title: "Teknisk design og forretningsutvikling i Oil-Tech",
    lead: "Oil-Tech var et nytt selskap i rask vekst innen olje og gass. Som innleid konsulent konstruerte jeg mekaniske komponenter etter NORSOK-standard, og hjalp ledelsen med strategi og markedsføring.",
    years: "2018–2019",
    facts: [
      ["Periode", "2018–2019"],
      ["Oppdragsgiver", "Oil-Tech AS, som selvstendig konsulent"],
      ["Rolle", "Prosjektingeniør og forretningsutvikler"],
    ],
    ...img("oil-tech"),
    challenge: {
      title: "Vekst krever både teknikk og retning",
      body: "Selskapet trengte komplekse mekaniske løsninger som oppfylte NORSOK-kravene. Samtidig manglet det et tydelig rammeverk for strategi og en synlig tilstedeværelse i markedet.",
    },
    role: {
      title: "Fra 3D-modeller til forretningsmodell",
      points: [
        "Konstruerte komponenter i 3D CAD, blant annet jekkramme, skidbase og vedlikeholdsløsninger for shakere",
        "Innførte Business Model Canvas som verktøy for strategi og beslutninger",
        "Satte opp Google Marketing Platform og tok profesjonelle produktbilder",
        "Startet og ledet ukentlig kontoryoga for å bygge samhold i teamet",
      ],
    },
    quote: {
      text: "Marianne is a bundle of energy. She has brought fresh thinking and new ideas to Oil-Tech and I highly recommend her.",
      name: "Gunnar Eilertsen",
      role: "CEO, Oil-Tech AS",
    },
    result: {
      title: "Tekniske leveranser og et tydeligere selskap",
      points: [
        "Konstruksjonstegninger og dokumentasjon etter NORSOK-standard",
        "Et felles rammeverk for strategi i ledelsen",
        "Sterkere digital tilstedeværelse",
        "Bedre samhold i et team i rask vekst",
      ],
    },
    reflection:
      "I et selskap i vekst henger teknikk, strategi og kultur tett sammen. Jeg lærte at små tiltak, som en felles yogatime, kan bety like mye for hvordan et team fungerer som store strategidokumenter.",
    moreQuotes: [
      {
        text: "Marianne is energetic and always positive, which makes her a good team-building person. She is full of interesting and inspiring ideas in various fields.",
        name: "Marek Kalamuchi",
        role: "Kollega, Oil-Tech",
      },
    ],
  },
  {
    slug: "vizo",
    category: "Gründer og produkt",
    cardTitle: "3D-printing som læringsverktøy – Vizo",
    title: "Hebnes 3D og Vizo",
    lead: "Mine egne selskaper innen 3D-design og 3D-printing. Jeg tok teknologien fra prototyp til ferdige løsninger for industri, helse og offentlig sektor, og lærte bort kompetansen til hundrevis av mennesker.",
    years: "2015–2024",
    facts: [
      ["Periode", "2015–2024"],
      ["Selskaper", "Hebnes 3D (2015), Vizo AS (2017)"],
      ["Rolle", "Gründer og daglig leder"],
    ],
    ...img("vizo"),
    challenge: {
      title: "Mer enn bare verktøy for prototyper",
      body: "Da jeg startet, ble 3D-printing stort sett sett på som et verktøy for prototyper. Jeg så at teknologien kunne løse konkrete problemer i drift, og at mange trengte hjelp til å ta den i bruk.",
    },
    role: {
      title: "Fra industri til klasserom",
      points: [
        "Industri og drift: skreddersydde bruksdeler, blant annet for Avinor og Oil-Tech",
        "Helse: treningsmodeller for akuttmedisin for Prometheus Medical",
        "Kompetanse: teknologiturné for Rogaland fylkeskommune og undervisning ved Noroff",
        "Formidling: foredrag og arrangementer om praktisk bruk av 3D-printing",
      ],
    },
    result: {
      title: "Ni år med egne kunder",
      points: [
        "Over 20 kunder i privat og offentlig sektor",
        "Løsninger som ble standard i drift, blant annet hos Avinor",
        "Kompetanse spredt til kommuner, skoler og bibliotek i hele Rogaland",
      ],
    },
    reflection:
      "Å drive eget selskap lærte meg å selge, levere og ta ansvar for hele løpet selv. Jeg lærte også at teknologi først skaper verdi når folk forstår hva den kan brukes til, og at formidling derfor er en like viktig del av jobben som selve løsningen.",
    moreQuotes: [
      {
        text: "Marianne is very versatile and adaptable. She was a temp teacher and the students were very happy with her teaching and general student relations. I would gladly hire her again.",
        name: "Hans Petter Hoff",
        role: "Noroff School of Tech. & Digital Media",
      },
      {
        text: "Marianne is a resourceful person with many talents. Genuinely interested and dedicated in her projects, and always committed to do the best job possible for her customers.",
        name: "Åke Jonassen Bø",
        role: "Symetri AS",
      },
      {
        text: "I know Marianne as a dedicated and committed person who sets high standards for her performance in the job. She also has a contagious good mood that inspires everyone in the same room.",
        name: "Askild Aspaas-Hagen",
        role: "JB Engineering",
      },
    ],
  },
  {
    slug: "bouvet",
    category: "Strategi og forretning",
    cardTitle: "Ny møteplass for energibransjen – Bouvet",
    title: "BouvetOne Kraft: Bouvets inngang til energimarkedet",
    lead: "Bouvet ville etablere seg i energibransjen og trengte en pilot for å vise hva selskapet kunne. Jeg utviklet konseptet og ledet et nasjonalt, hybrid arrangement som samlet hele organisasjonen og aktører fra bransjen.",
    years: "2022",
    facts: [
      ["Periode", "2022"],
      ["Oppdragsgiver", "Bouvet ASA"],
      ["Rolle", "Prosjektleder og nasjonal arrangementsansvarlig"],
    ],
    ...img("bouvet"),
    challenge: {
      title: "Nytt marked, ingen etablert posisjon",
      body: "Bouvet har over 2000 ansatte i Norge og Sverige, men var lite synlig i energibransjen. Målet var å bygge relasjoner, dele kunnskap og vise frem kompetansen overfor nye kunder, uten å samle alle på ett sted.",
    },
    role: {
      title: "Strategi og gjennomføring i samme prosjekt",
      points: [
        "Utviklet konseptet og ledet planlegging og gjennomføring",
        "Valgte en hybrid modell, så ansatte og eksterne kunne delta fra hele landet",
        "Satte sammen et program med interne fagfolk, bransjeeksperter og potensielle kunder",
        "Ledet styringsgruppen, med ukentlige møter med konsernledelsen",
        "Utviklet måleparametere og evaluerte piloten for å kunne bruke modellen i andre markeder",
      ],
    },
    quote: {
      text: "Jeg er imponert over hvordan hun kombinerer profesjonalitet med enorm kreativitet. Hun er flink til å se det store bildet og sammenhenger på tvers. Samtidig har hun en unik evne til å få ting til å skje.",
      name: "Simen Sommerfeldt",
      role: "CTO, Bouvet ASA",
    },
    result: {
      title: "Synlighet og nye relasjoner",
      points: [
        "Bouvet ble synlig som en troverdig aktør i energibransjen",
        "Nye relasjoner til ledere og potensielle kunder i bransjen",
        "Innsikt fra markedet som formet Bouvets videre satsing",
        "En modell for markedsinngang som kan brukes i andre bransjer",
      ],
    },
    reflection:
      "Et arrangement kan være et strategisk verktøy, ikke bare en hendelse. Når mål, program og oppfølging henger sammen, åpner det dører i et nytt marked. Jeg lærte også verdien av tett og jevnlig kontakt med ledelsen for å holde retningen.",
    moreQuotes: [
      {
        text: "Marianne er en av de mest engasjerende personene jeg har jobbet med. Hun skaper en kultur av samarbeid og glede som løfter alle rundt seg.",
        name: "Robin Koien",
        role: "Agile Coach, Bouvet ASA",
      },
      {
        text: "Mariannes engasjement og kreativitet er virkelig smittende, og hun evner samtidig å være strukturert og har en enorm gjennomføringskraft.",
        name: "Ovidia Eriksen",
        role: "Kommunikasjonsrådgiver, Bouvet ASA",
      },
    ],
  },
  {
    slug: "smed-kristiansen",
    category: "Produktutvikling",
    cardTitle: "Digital produktutvikling – Smed T. Kristiansen",
    title: "3D-printing og digitalisering i en tradisjonell smedbedrift",
    lead: "Som innleid konsulent tok jeg 3D-printing og digitale verktøy inn i et tradisjonelt produksjonsmiljø. Jeg digitaliserte produktkatalogen og lærte ansatte å tegne mekanisk design.",
    years: "2015–2016",
    facts: [
      ["Periode", "2015–2016"],
      ["Oppdragsgiver", "Smed T. Kristiansen AS, som selvstendig konsulent"],
      ["Rolle", "Produktutvikler og CAD-instruktør"],
    ],
    ...img("smed-kristiansen"),
    challenge: {
      title: "Solid håndverk, men uten digitale verktøy",
      body: "Smed T. Kristiansen hadde godt innarbeidede produksjonsprosesser, men manglet moderne verktøy for prototyping og digital design. Det gjorde det tregere å utvikle nye produkter og å presentere dem for kundene.",
    },
    role: {
      title: "Nye verktøy, tilpasset eksisterende arbeidsflyt",
      points: [
        "Innførte 3D-printing for raskere prototyping og testing av design",
        "Digitaliserte den fysiske produktkatalogen",
        "Holdt praktiske kurs i CAD og maskintegning for de ansatte",
        "Bygde 3D-printing inn i den daglige produksjonen",
      ],
    },
    result: {
      title: "Raskere fra idé til prototyp",
      points: [
        "Prototyper for en mer kosteffektiv produksjonsprosess",
        "En digital produktkatalog som gjorde dialogen med kundene enklere",
        "Ansatte som kunne tegne og utvikle nye deler selv",
      ],
    },
  },
  {
    slug: "podbike",
    category: "Produktutvikling",
    cardTitle: "Fra prototype til første pilot – Podbike",
    title: "Fra prototyp til første pilotserie hos Podbike",
    lead: "Som innleid konsulent ledet jeg produksjonen av Podbikes første pilotserie av el-sykkelen. Jeg hadde ansvar for innkjøp, leverandører og fremdrift, fra utvikling til ferdige enheter.",
    years: "2019",
    facts: [
      ["År", "2019"],
      ["Oppdragsgiver", "Podbike AS, som selvstendig konsulent"],
      ["Rolle", "Prosjektleder og innkjøpsansvarlig"],
    ],
    ...img("podbike"),
    challenge: {
      title: "Første steg fra utvikling til produksjon",
      body: "Podbike skulle produsere sin første pilotserie, et avgjørende steg for selskapet. Design, produksjon og leverandørkjede måtte samkjøres, og komponentene måtte komme i tide og holde riktig kvalitet.",
    },
    role: {
      title: "Bindeleddet mellom design, produksjon og leverandører",
      points: [
        "Satte opp tidsplan og arbeidsflyt sammen med utviklings- og produksjonsteamet",
        "Fant og forhandlet med leverandører, og fulgte opp leveransene",
        "Identifiserte flaskehalser tidlig og la planer for å unngå forsinkelser",
        "Holdt design, produksjon og innkjøp samkjørt gjennom hele løpet",
      ],
    },
    quote: {
      text: "Marianne is a creative problem-solver with an energetic approach that inspires those around her. She brings fresh ideas and a dynamic energy to every challenge, making her an invaluable part of any team.",
      name: "Janet Jørmeland",
      role: "Marketing Manager, Podbike",
    },
    result: {
      title: "Pilotserien levert etter planen",
      points: [
        "Pilotserien ble levert i tide, og Podbike kunne gå videre til testing",
        "Komponentene holdt kravene til kvalitet",
        "Innkjøpsprosessen ble et grunnlag for senere produksjonsserier",
      ],
    },
    reflection:
      "Overgangen fra prototyp til produksjon er der mange gode ideer stopper opp. Jeg lærte at det er koordineringen mellom folk, leverandører og planer som avgjør om et produkt faktisk kommer ut på markedet.",
  },
  {
    slug: "noroff",
    category: "Kompetanse og formidling",
    cardTitle: "Underviste fremtidige produktutviklere – Noroff",
    title: "Undervisning i mekanisk design ved Noroff",
    lead: "Som innleid foreleser underviste jeg i mekanisk design ved Noroff, med vekt på produktutvikling. Jeg tok 3D-printing inn i faget og brukte nettverket mitt til å koble skolen og studentene til næringsliv og makermiljøer.",
    years: "2017",
    facts: [
      ["Periode", "2017"],
      ["Oppdragsgiver", "Noroff, som selvstendig konsulent"],
      ["Rolle", "Foreleser i mekanisk design"],
    ],
    ...img("noroff"),
    challenge: {
      title: "Fra skjerm til fysisk produkt",
      body: "Studentene lærte CAD, men fikk lite erfaring med å gjøre tegningene om til fysiske produkter. Noroff ønsket et fag som speilet hvordan produktutvikling faktisk foregår i bransjen.",
    },
    role: {
      title: "Praktiske prosjekter med 3D-printing",
      points: [
        "Bygde opp undervisningen rundt hele løpet i produktutvikling, fra idé til prototyp",
        "Lærte studentene å printe egne prototyper fra CAD-modellene sine",
        "Ga prosjektoppgaver der studentene tegnet, printet og testet egne produkter",
        "Tok studentene med i makerspace, slik at de kunne jobbe praktisk",
        "Delte eksempler fra egne oppdrag i produktutvikling",
      ],
    },
    quote: {
      text: "Marianne er svært allsidig og tilpasningsdyktig. Studentene var svært fornøyde med undervisningen hennes og med hvordan hun fulgte dem opp. Jeg ville gjerne leid henne inn igjen.",
      name: "Hans Petter Hoff",
      role: "Senior Advisor, Noroff",
    },
    result: {
      title: "Fra klasserom til arbeidsliv",
      points: [
        "Studentene lærte både CAD og 3D-printing gjennom egne prosjekter",
        "Flere studenter fikk praksisplass gjennom nettverket mitt",
        "Et samarbeid mellom Noroff og Vitenfabrikken",
        "3D-printing ble en fast del av faget",
      ],
    },
    reflection:
      "Jeg lærte at det jeg kunne gi studentene utenfor klasserommet, var like verdifullt som undervisningen. En introduksjon til riktig person eller riktig miljø kan åpne flere dører enn et godt pensum.",
    memory: {
      title: "Fra student til foreleser",
      body: "Noen år tidligere tok jeg selv fagutdanningen som teknisk tegner ved Noroff. Skolen husket meg fra studietiden, og etter at jeg var ferdig, leide de meg inn som foreleser i det faget jeg hadde vært ivrigst på som student.",
    },
    moreQuotes: [
      {
        text: "Marianne viste tidlig interesse for mekanisk konstruksjon og design (…) Hun var en usedvanlig ivrig og initiativrik student. Anbefales på det sterkeste.",
        name: "Chris Kruger Monsen",
        role: "Tidligere lærer, Noroff",
      },
    ],
  },
  {
    slug: "lk-systems",
    category: "Teknisk prosjektering",
    cardTitle: "Skreddersydde tekniske installasjoner – LK Systems",
    title: "Gulvvarmesystem til næringsbygg i Oslo",
    lead: "Som prosjektingeniør prosjekterte jeg gulvvarmeanlegg for store næringsbygg, med presise tegninger og tett dialog med kundene.",
    years: "2017",
    facts: [
      ["Periode", "2017"],
      ["Oppdragsgiver", "LK Systems AS (Oslo)"],
      ["Rolle", "Prosjektingeniør"],
    ],
    ...img("lk-systems"),
    challenge: {
      title: "Hvert bygg krever sin egen løsning",
      body: "Store næringsbygg har ulike planløsninger, krav og byggeplaner. Anleggene måtte være energieffektive, enkle å installere og passe inn i fremdriften på byggeplassen.",
    },
    role: {
      title: "Presise tegninger og tett kundedialog",
      points: [
        "Prosjekterte gulvvarmeanlegg i CAD, tilpasset hvert bygg",
        "Avklarte behov og løsninger direkte med kundene",
        "Koordinerte tegninger og leveranser med byggeplanen",
        "Kvalitetssikret tegningene mot kundens krav og gjeldende standarder",
      ],
    },
    result: {
      title: "Økt kundetilfredshet",
      points: [
        "Skreddersydde anlegg for energieffektiv oppvarming",
        "Presise tegninger som gjorde monteringen enklere og reduserte feil",
        "Mer fornøyde kunder etter tettere oppfølging",
      ],
    },
    reflection:
      "Fagutdanningen som teknisk tegner kom virkelig til sin rett her. Jeg lærte at en god tegning ikke er god før den fungerer for dem som skal montere den, og at kort vei til kunden sparer tid for alle.",
  },
];

export const featuredSlugs = ["equinor", "u-go", "teknologiturne"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
