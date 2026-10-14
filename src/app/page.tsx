import Image from "next/image";
import Link from "next/link";
import { featuredSlugs, getProject } from "@/content/projects";
import { pressLogos, site, timeline } from "@/content/site";
import { featuredQuotes, testimonialCount } from "@/content/testimonials";
import { Arrow, ButtonLink, ContactCta, ProjectCard, QuoteCard, SectionHeading } from "@/components/ui";

export default function Home() {
  const featured = featuredSlugs.map((s) => getProject(s)!);

  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative isolate overflow-hidden text-white">
        <div className="wrap grid min-h-[calc(100svh-61px)] items-center gap-12 py-20 md:grid-cols-[1.25fr_1fr] md:py-24">
          <div>
            <p className="kicker rise text-white/80">{site.roles.join(" · ")}</p>
            <h1
              className="display rise mt-6 max-w-[11em] text-[clamp(44px,7vw,108px)]"
              style={{ animationDelay: ".1s" }}
            >
              Jeg lærte tegnspråk for å forstå brukerne
            </h1>
            <p
              className="rise mt-7 max-w-[28em] text-[clamp(18px,1.8vw,23px)] text-white/90"
              style={{ animationDelay: ".22s" }}
            >
              Menneskene først, så teknologien. Elleve år med produkt- og forretningsutvikling.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: ".32s" }}>
              <ButtonLink href="/prosjekter" variant="light">
                Se prosjekter
              </ButtonLink>
              <Link
                href="/kontakt"
                className="inline-flex min-h-11 items-center rounded-full border border-white/40 px-5 py-2.5 font-medium transition-colors hover:border-white focus-visible:outline-white"
              >
                Ta kontakt
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="float relative aspect-square overflow-hidden rounded-full shadow-[0_0_90px_rgba(240,180,67,0.35)] ring-1 ring-white/30">
              <Image
                src="/images/home/portrait.jpg"
                alt="Portrett av Marianne Hebnes"
                fill
                priority
                sizes="(min-width: 768px) 460px, 90vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden
              className="float absolute -bottom-2 left-2 h-20 w-20 rounded-full bg-highlight/90 sm:h-24 sm:w-24"
              style={{ animationDelay: "-4s" }}
            />
            <span
              aria-hidden
              className="float absolute right-4 top-2 h-10 w-10 rounded-full border border-white/50"
              style={{ animationDelay: "-7s" }}
            />
          </div>
        </div>
      </section>

      {/* Om meg */}
      <section className="wrap mt-24 grid items-center gap-12 md:grid-cols-2" aria-labelledby="om-h">
        <div>
          <p className="kicker text-accent">Om meg</p>
          <h2 id="om-h" className="display mt-4 text-[clamp(36px,4.6vw,60px)] text-primary">
            An-njong-ha-se-yo!
          </h2>
          <p className="mt-2 text-muted">(Hei på koreansk)</p>
          <div className="mt-7 space-y-4 text-[19px] text-ink/90">
            <p>
              Jeg er Marianne – født i Sør-Korea (1988), oppvokst i Stavanger. Jeg har alltid vært nysgjerrig på
              mennesker, teknologi og på hva som er mulig.
            </p>
            <p>
              Jeg har fått nye venner på togstasjonen i Tokyo, i en heis og på flyet. Den samme nysgjerrigheten bruker
              jeg i jobben: jeg ser mønstre tidlig, kobler folk sammen og får ting til å skje.
            </p>
            <p>
              På fritiden går jeg på jakt, lærer meg nye instrumenter, lager ting på 3D-printeren – eller sitter
              fordypet i en sudoku.
            </p>
          </div>
          <Link
            href="/tre-ting"
            className="group mt-8 inline-flex items-center gap-2 font-medium text-primary underline decoration-highlight decoration-2 underline-offset-[6px]"
          >
            Hva venner sier om meg <Arrow className="group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/home/ugo-bjarte.jpg"
              alt="Marianne og Bjarte på tur med U-GO"
              fill
              sizes="(min-width: 768px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/home/baby.jpg"
              alt="Marianne som liten i Sør-Korea"
              fill
              sizes="(min-width: 768px) 300px, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/home/teaching.jpg"
              alt="Marianne holder kurs"
              fill
              sizes="(min-width: 768px) 300px, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Utvalgte prosjekter */}
      <section className="wrap mt-28" aria-labelledby="prosjekter-h">
        <SectionHeading
          id="prosjekter-h"
          title="Utvalgte prosjekter"
          aside={
            <Link href="/prosjekter" className="group inline-flex items-center gap-1.5 font-medium text-primary">
              Se alle prosjekter <Arrow className="group-hover:translate-x-0.5" />
            </Link>
          }
        />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Anbefalinger */}
      <section className="wrap mt-28" aria-labelledby="sier-h">
        <SectionHeading
          id="sier-h"
          title="Hva andre sier"
          aside={
            <Link href="/anbefalinger" className="group inline-flex items-center gap-1.5 font-medium text-primary">
              Les alle {testimonialCount} anbefalinger <Arrow className="group-hover:translate-x-0.5" />
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredQuotes.map((q) => (
            <QuoteCard key={q.name} quote={q} />
          ))}
        </div>
      </section>

      {/* Omtalt i */}
      <section className="wrap mt-20" aria-labelledby="omtalt-h">
        <div className="flex flex-col gap-5 border-y border-line py-8 md:flex-row md:items-center md:gap-10">
          <h2 id="omtalt-h" className="kicker shrink-0 text-muted">
            Omtalt i
          </h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {pressLogos.map((name) => (
              <li key={name}>
                <Link
                  href="/media"
                  className="text-[clamp(18px,1.8vw,22px)] font-medium tracking-tight text-primary/70 transition-colors hover:text-primary"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Karriere */}
      <section className="wrap mt-24" aria-labelledby="karriere-h">
        <SectionHeading id="karriere-h" title="Karrieren min i korte trekk" />
        <ol className="relative grid gap-0 border-l-2 border-line pl-8 md:grid-cols-7 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-8 md:pb-0 md:pr-5">
              <span
                aria-hidden
                className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-[3px] border-paper bg-highlight ring-2 ring-primary md:-top-[41px] md:left-0"
              />
              <p className="text-2xl font-medium tracking-tight text-primary">{t.year}</p>
              <p className="mt-1 text-[16px] leading-snug text-ink">{t.title}</p>
              {t.role && <p className="mt-1 text-[15px] text-muted">{t.role}</p>}
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-[40em] text-muted">
          Ved siden av jobben har jeg siden 2017 hatt flere styreverv, gitt rådgivning til gründere og startups, og vært
          mentor for unge entreprenører.{" "}
          <Link href="/verv" className="font-medium text-primary underline decoration-highlight decoration-2 underline-offset-4">
            Se verv og engasjement
          </Link>
        </p>
      </section>

      <ContactCta />
    </>
  );
}
