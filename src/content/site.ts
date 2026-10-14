export const site = {
  name: "Marianne Hebnes",
  url: "https://mariannehebnes.no",
  roles: ["Produktutvikler", "Forretningsutvikler", "Nettverksbygger"],
  email: "marianne.hebnes@gmail.com",
  linkedin: "https://www.linkedin.com/in/mhebnes/",
  description:
    "Marianne Hebnes er produktutvikler, forretningsutvikler og nettverksbygger med elleve års erfaring. Menneskene først, så teknologien.",
};

export const nav = [
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/verv", label: "Verv" },
  { href: "/media", label: "Media" },
  { href: "/anbefalinger", label: "Anbefalinger" },
  { href: "/nettverk", label: "Nettverk" },
  { href: "/kontakt", label: "Kontakt" },
];

export const timeline: { year: string; title: string; role?: string }[] = [
  { year: "2013", title: "Teknisk tegner" },
  { year: "2015", title: "Eget selskap og første 3D-print-oppdrag", role: "Gründer" },
  {
    year: "2017",
    title: "Vizo, inkl. teknologiturné for Rogaland fylkeskommune",
    role: "Gründer og produktutvikler",
  },
  { year: "2018", title: "U-GO Products AS", role: "Gründer og daglig leder" },
  { year: "2022", title: "Bouvet / Olavstoppen", role: "Strategi- og ledelseskonsulent" },
  { year: "2025", title: "VentureBuilder AI", role: "Strategisk rådgiver" },
  { year: "2026", title: "Forretningsutvikler" },
];

export const pressLogos = ["Aftenbladet", "TV Vest", "Patentstyret", "Shifter", "NTNU", "SpareBank 1"];

export type MediaItem = {
  outlet: string;
  year: string;
  title: string;
  href: string;
  image: string;
  kind?: string;
};

const m = (n: number) => `/images/media/media-${String(n).padStart(2, "0")}.jpg`;

export const media: MediaItem[] = [
  {
    outlet: "Shifter",
    year: "2021",
    title: "Slik beskytter du deg mot merkevare-tyver: Gründer Marianne Hebnes’ grep",
    href: "https://www.shifter.no/nyheter/slik-beskytter-du-deg-mot-merkevare-tyver-grnder-marianne-hebnes-grep/207634",
    image: m(0),
  },
  {
    outlet: "Patentstyret",
    year: "2020",
    title: "U-GO: verdens første ledsagerbøyle er sikret med designregistrering",
    href: "https://www.patentstyret.no/kundehistorier/u-go-verdens-forste-ledsagerboyle-er-sikret-med-designregistrering",
    image: m(2),
  },
  {
    outlet: "NTNU",
    year: "2020",
    title: "Redesign av ledsagerbøyle – bacheloroppgave om U-GO",
    href: "https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2661176",
    image: m(5),
    kind: "Bacheloroppgave",
  },
  {
    outlet: "Norwegian Smart Care Cluster",
    year: "2020",
    title: "U-GO fikk distribusjonspartner gjennom klyngen",
    href: "https://www.smartcarecluster.no/aktuelt/2020/9/u-go-fikk-distribusjonspartner-gjennom-klyngen",
    image: m(7),
  },
  {
    outlet: "Aftenbladet",
    year: "2019",
    title: "Fram til nå har gründerdrømmen vært et økonomisk helvete, men nå begynner ting å gå seg veldig til",
    href: "https://www.aftenbladet.no/magasin/i/jdvdzo/haap-i-en-boeyle-fram-til-naa-har-grunderdroemmen-vaert-et-oekonomisk-helvete-men-naa-begynner-ting-aa-gaa-seg-veldig-til",
    image: m(1),
  },
  {
    outlet: "TV Vest",
    year: "2019",
    title: "Verdens første ledsagerbøyle utviklet og produsert i Rogaland",
    href: "https://video.tvvest.no/verdens-forste-ledsagerboyle",
    image: m(3),
    kind: "Nyhetsinnslag",
  },
  {
    outlet: "SpareBank 1 SR-Bank",
    year: "2019",
    title: "Alt starter i det små – kortfilm om U-GO",
    href: "/media/sparebank1",
    image: m(4),
    kind: "Kortfilm",
  },
  {
    outlet: "Næringslivsmagasinet",
    year: "2019",
    title: "U-GO i Næringslivsmagasinet (s. 30–31)",
    href: "https://www.stavangerchamber.com/magasin/2019-06/offline/download.pdf",
    image: m(8),
  },
  {
    outlet: "Bygdebladet",
    year: "2019",
    title: "Marianne sin U-GO ledsagerbøyle ble nylig brukt under New York City Marathon",
    href: "https://www.bygdebladet.no/marianne-sin-u-go-ledsagerboyle-ble-nylig-brukt-under-new-york-city-marathon-jeg-har-tenkt-internasjonalt-fra-dag-en/s/5-100-162613",
    image: m(10),
  },
  {
    outlet: "Bygdebladet",
    year: "2019",
    title: "– Det har kostet blod, svette og tårer",
    href: "https://www.bygdebladet.no/det-har-kostet-blod-svette-og-tarer/f/5-100-130136",
    image: m(15),
  },
  {
    outlet: "Noroff",
    year: "2019",
    title: "Marianne har 3D-printet verdens første ledsagerbøyle for svaksynte",
    href: "https://www.noroff.no/nyheter/3d/844-marianne-har-3d-printet-verdens-forste-ledsagerboyle-for-svaksynte",
    image: m(12),
  },
  {
    outlet: "Haugesunds Avis",
    year: "2019",
    title: "Med denne interessen kunne vi nok hatt enda flere enn ett ekstra kurs",
    href: "https://www.h-avis.no/med-denne-interessen-kunne-vi-nok-hatt-enda-flere-enn-ett-ekstra-kurs/s/5-62-884439",
    image: m(17),
  },
  {
    outlet: "Avisen Agder",
    year: "2018",
    title: "Alt kan printes!",
    href: "https://www.avisenagder.no/alt-kan-printes/s/5-99-425334",
    image: m(13),
  },
  {
    outlet: "Aftenbladet",
    year: "2018",
    title: "Superprintere på biblå kan fikse fjernkontrollen din",
    href: "https://www.aftenbladet.no/kultur/i/0E7zzJ/superprintere-paa-biblaa-kan-fikse-fjernkontrollen-din",
    image: m(14),
  },
  {
    outlet: "Bygdebladet",
    year: "2017",
    title: "Lager et løp for alle",
    href: "https://www.bygdebladet.no/livsgnistlopet/lager-et-lop-for-alle/s/5-100-60273",
    image: m(6),
  },
  {
    outlet: "Aftenbladet",
    year: "2016",
    title: "Marianne 3D-printer alt hun trenger",
    href: "https://www.aftenbladet.no/lokalt/i/2Xp6q/Marianne-3D-printer-alt-hun-trenger",
    image: m(9),
  },
  {
    outlet: "Noroff",
    year: "2016",
    title: "Marianne vil formidle ideer ved hjelp av moderne teknologi",
    href: "https://www.noroff.no/nyheter/design/405-marianne-vil-formidle-ideer-ved-hjelp-av-moderne-teknologi",
    image: m(11),
  },
  {
    outlet: "Medvind 24",
    year: "2023",
    title: "Berre fantasien set grenser med 3D-printing",
    href: "https://www.medvind24.no/aktuelt/berre-fantasien-set-grenser-med-3d-printing",
    image: m(16),
  },
].sort((a, b) => Number(b.year) - Number(a.year));

export type Verv = {
  slug: string;
  name: string;
  kind: "Styreverv" | "Rådgiver og mentor" | "Folkevalgt" | "Frivillig";
  short: string;
  title: string;
  body: string[];
  quote?: string;
  image: string;
};

const v = (n: number) => `/images/verv/verv-${String(n).padStart(2, "0")}.jpg`;

export const verv: Verv[] = [
  {
    slug: "ons-young",
    name: "ONS Young",
    kind: "Styreverv",
    short: "Rådgivende styre. Bygget bro mellom studenter og næringsliv i energisektoren.",
    title: "Fremtidens ledere i energibransjen",
    body: [
      "Som medlem av det rådgivende styret i ONS Young bidro jeg til å utvikle en plattform som engasjerer unge fagfolk i energisektoren. ONS Young legger til rette for dialog, innovasjon og samarbeid mellom neste generasjon ledere.",
      "Jeg ga strategiske innspill til retningen på programmet, slik at det ga reelle muligheter for læring, nettverk og vekst, og jobbet med aktører i bransjen for å skape en arena der unge talenter kunne møte ledere og nye ideer.",
    ],
    image: v(1),
  },
  {
    slug: "oda-tech",
    name: "ODA Tech Nettverk",
    kind: "Rådgiver og mentor",
    short: "Mentor for kvinner i tech, og guide på Girl Tech Fest.",
    title: "Flere kvinner i teknologi",
    body: [
      "Som mentor i ODA-nettverket støtter jeg kvinner i tech ved å dele erfaringer, gi råd og bygge selvtillit.",
      "Jeg er også guide på det årlige Girl Tech Fest, der jenter oppfordres til å utforske realfag og mulighetene i teknologibransjen.",
    ],
    image: v(2),
  },
  {
    slug: "ungt-entreprenorskap",
    name: "Ungt Entreprenørskap Rogaland",
    kind: "Rådgiver og mentor",
    short: "Mentor for elevbedrifter og jurymedlem i fylkesmesterskapet.",
    title: "Neste generasjon gründere",
    body: [
      "Som mentor for Ungt Entreprenørskap Rogaland veileder jeg elever i å utvikle entreprenørielle ferdigheter og gjøre ideer om til ekte løsninger.",
      "De siste seks årene har jeg også sittet i juryen under fylkesmesterskapet, der jeg vurderer elevprosjekter og hyller ung innovasjon.",
    ],
    quote:
      "Det er utrolig givende å dele kunnskapen min og se unge talenter gjøre ideene sine om til løsninger som betyr noe.",
    image: v(3),
  },
  {
    slug: "gand-vgs",
    name: "Gand vgs (Rogaland fylkeskommune)",
    kind: "Rådgiver og mentor",
    short: "Gjesteforeleser og mentor for elevbedrifter.",
    title: "Fra vill tech-idé til første pitch",
    body: [
      "Som gjesteforeleser og mentor på Gand vgs bygger jeg bro mellom skole og næringsliv ved å veilede elevbedrifter gjennom produktutvikling.",
      "Jeg tar med meg strategiske rammeverk fra arbeidslivet inn i klasserommet og hjelper unge innovatører å validere ideer og strukturere forretningsmodeller.",
    ],
    quote: "Hovedfokuset mitt er å hjelpe elevene å bygge entreprenøriell selvtillit.",
    image: v(4),
  },
  {
    slug: "skape",
    name: "Skape (Rogaland fylkeskommune)",
    kind: "Rådgiver og mentor",
    short: "Spesialistrådgiver og foredragsholder for gründere i regionen.",
    title: "Gründere og regional innovasjon",
    body: [
      "Som rådgiver og mentor for Skape støtter jeg gründere i regionen med forretningsutvikling, fra praktisk rådgivning på regionale turneer til foredrag for innovasjonsledere.",
      "Spesialistrådgiver på Skapes gründerturné, med gapanalyser, situasjonsanalyser og næringsfaglige vurderinger. Foredragsholder på Skapes oppstartssamlinger og for næringshagene i regionen. Veileder gründere fra idé til markedsvalidering og finansiering.",
      "Fun fact: Da Skape trengte trykksaker til turneen på kort varsel, fikk jeg tak i en lokal leverandør gjennom nettverket mitt, og brosjyrene kom frem i tide.",
    ],
    quote:
      "Å hjelpe gründere i regionen å gjøre ambisiøse tech-ideer om til skalerbare, markedsklare selskaper er kjernen i arbeidet mitt med Skape.",
    image: v(9),
  },
  {
    slug: "the-next-level",
    name: "The Next Level AS",
    kind: "Styreverv",
    short: "Rådgivende styremedlem i tech-selskap. Strategi og forretningsutvikling.",
    title: "Rådgivende styremedlem",
    body: [
      "Rådgivende styremedlem i et tech-selskap, med ansvar for innspill på strategi og forretningsutvikling.",
    ],
    image: "/images/home/equinor-workshop.jpg",
  },
  {
    slug: "randaberg-kommune",
    name: "Randaberg kommune",
    kind: "Folkevalgt",
    short: "Folkevalgt i hovedutvalg for nærmiljø og kultur.",
    title: "Lokal utvikling og inkludering",
    body: [
      "Som medlem av hovedutvalget i Randaberg kommune og styremedlem i Venstre bidro jeg til lokalpolitikk og beslutninger med vekt på entreprenørskap, inkludering og fremtidsrettede løsninger.",
      "Arbeidet ga meg dypere innsikt i offentlig forvaltning og hvordan lokale beslutninger påvirker hverdagen til folk.",
    ],
    image: v(5),
  },
  {
    slug: "livsgnistlopet",
    name: "Livsgnistløpet",
    kind: "Frivillig",
    short: "Medgründer og styremedlem i løp for inkludering og folkehelse.",
    title: "Et løp for alle",
    body: [
      "Som medgründer av Livsgnistløpet var jeg med på å etablere og organisere et løp som gir økonomisk støtte til unge som står utenfor idretten på grunn av økonomiske eller sosiale barrierer.",
      "Sammen med deltakere, sponsorer og lokalsamfunnet skapte vi et arrangement som både samler inn penger og skaper oppmerksomhet om en viktig sak.",
    ],
    image: v(6),
  },
  {
    slug: "jci-sandnes",
    name: "JCI Sandnes",
    kind: "Styreverv",
    short: "Styremedlem og lokal president i nettverk for lederutvikling.",
    title: "Unge ledere som skaper endring",
    body: [
      "Som styremedlem og lokal president i JCI Sandnes var jeg tett involvert i JCIs arbeid med å styrke unge ledere og gründere gjennom lederutvikling, samfunnsansvar og lokale prosjekter.",
      "Jeg satte den strategiske retningen for lokalavdelingen, ledet sentrale initiativ og bygget et inkluderende fellesskap av unge fagfolk gjennom arrangementer, lederkurs og samarbeidsprosjekter.",
    ],
    image: v(7),
  },
  {
    slug: "ryfylke-friluftsrad",
    name: "Ryfylke friluftsråd",
    kind: "Styreverv",
    short: "Forvaltning av friluftsområder og samarbeid mellom kommuner.",
    title: "Friluftsliv og fellesskap",
    body: [
      "Som styremedlem i Ryfylke friluftsråd har jeg vært med på tiltak som fremmer friluftsliv og tilhørighet til naturen i lokalsamfunnet.",
      "Jeg har bidratt til å gjøre friluftsområder mer tilgjengelige og til aktiviteter som inspirerer folk i alle aldre til å bruke naturen.",
    ],
    image: v(8),
  },
];

export const networkGroups: { title: string; logos: string[] }[] = [
  {
    title: "Kunder av U-GO Products",
    logos: ["nav", "dnt", "adaptor", "instrulog", "hjelpemiddelpartner", "achilles"],
  },
  {
    title: "Partnere av U-GO Products",
    logos: ["patentstyret", "attende", "sparebank1", "innovasjon-norge", "samfunnssentralen", "tdv"],
  },
  {
    title: "Foredrag og utdanning",
    logos: [
      "uis",
      "ntnu",
      "noroff",
      "kunstskolen",
      "vagen-vgs",
      "gand-vgs",
      "deichman",
      "saltdal-utvikling",
      "maudland-bhg",
    ],
  },
  {
    title: "Mentor og styreverv",
    logos: [
      "oda",
      "skape",
      "ue-rogaland",
      "randaberg-kommune",
      "venstre",
      "ons",
      "vitenfabrikken",
      "girltech",
      "jci-sandnes",
      "ryfylke-friluftsrad",
    ],
  },
  {
    title: "Kundeportefølje – Hebnes 3D og Vizo AS",
    logos: [
      "avinor",
      "rogaland-fylkeskommune",
      "prometheus",
      "obos",
      "podbike",
      "oil-tech",
      "nos-technology",
      "smed",
      "lk-systems",
      "vinje-industri",
      "kcc",
      "roxel",
      "jb-engineering",
      "symetri",
      "creator",
      "bikefinder",
      "stav-arkitekter",
      "stor-elvdal-kommune",
      "gjesdal-kommune",
      "karmoy-kommune",
      "sola-kommune",
      "haugesund-kommune",
    ],
  },
];

/** Logoer lagret som jpg; resten er png */
export const jpgLogos = new Set(["prometheus", "nos-technology"]);
export const logoSrc = (name: string) =>
  `/images/logos/${name}.${jpgLogos.has(name) ? "jpg" : "png"}`;
