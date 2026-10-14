import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Arrow, ContactCta, QuoteCard } from "@/components/ui";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/prosjekter/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.lead,
    openGraph: { images: [{ url: p.gallery[0] }] },
  };
}

function Block({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line pt-10 md:grid-cols-[220px_1fr] md:gap-12">
      <p className="kicker pt-2 text-accent">{kicker}</p>
      <div>
        <h2 className="text-[clamp(26px,3vw,36px)] leading-tight tracking-[-0.02em] text-primary">{title}</h2>
        <div className="mt-5 max-w-[40em] space-y-4 text-[18px] text-ink/90">{children}</div>
      </div>
    </section>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <span aria-hidden className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-highlight" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps<"/prosjekter/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="wrap pt-12 sm:pt-16">
        <Link href="/prosjekter" className="group inline-flex items-center gap-2 text-[15px] font-medium text-muted hover:text-primary">
          <Arrow className="rotate-180 group-hover:-translate-x-0.5" /> Alle prosjekter
        </Link>
        <p className="kicker rise mt-10 text-accent">{p.category}</p>
        <h1
          className="display rise mt-4 max-w-[15em] text-[clamp(38px,5.6vw,80px)] text-primary"
          style={{ animationDelay: ".08s" }}
        >
          {p.title}
        </h1>
        <p className="rise mt-6 max-w-[36em] text-[clamp(18px,1.8vw,22px)] text-muted" style={{ animationDelay: ".16s" }}>
          {p.lead}
        </p>
        <dl className="rise mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3" style={{ animationDelay: ".24s" }}>
          {p.facts.map(([label, value]) => (
            <div key={label}>
              <dt className="kicker text-muted">{label}</dt>
              <dd className="mt-1.5 text-[17px] text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="wrap mt-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-mist">
          <Image src={p.gallery[0]} alt="" fill priority sizes="(min-width: 1232px) 1200px, 100vw" className="object-cover" />
        </div>
      </div>

      <div className="wrap mt-16 space-y-14">
        {p.challenge && (
          <Block kicker="Utfordringen" title={p.challenge.title}>
            <p>{p.challenge.body}</p>
          </Block>
        )}
        <Block kicker="Min rolle og løsning" title={p.role.title}>
          {p.role.intro && <p>{p.role.intro}</p>}
          <Points items={p.role.points} />
        </Block>

        {p.quote && (
          <figure className="hero-bg rounded-[2rem] px-7 py-12 text-white sm:px-14 sm:py-16">
            <blockquote className="display max-w-[24em] text-[clamp(24px,3vw,38px)] !leading-[1.2] !tracking-[-0.02em]">
              «{p.quote.text}»
            </blockquote>
            <figcaption className="mt-7 text-[16px] text-white/80">
              <span className="font-semibold text-white">{p.quote.name}</span> · {p.quote.role}
            </figcaption>
          </figure>
        )}

        <Block kicker="Resultat" title={p.result.title}>
          {p.result.body && <p>{p.result.body}</p>}
          <Points items={p.result.points} />
        </Block>

        {p.gallery.length > 1 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {p.gallery.slice(1).map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mist">
                <Image src={src} alt="" fill sizes="(min-width: 640px) 600px, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        )}

        {p.reflection && (
          <Block kicker="Refleksjon" title="Hva jeg tok med meg videre">
            <p>{p.reflection}</p>
          </Block>
        )}

        {p.memory && (
          <aside className="rounded-3xl bg-mist p-8 sm:p-10">
            <p className="kicker text-accent">Et minne fra prosjektet</p>
            <h2 className="mt-3 text-[clamp(24px,2.6vw,30px)] tracking-[-0.02em] text-primary">{p.memory.title}</h2>
            <p className="mt-4 max-w-[42em] text-ink/90">{p.memory.body}</p>
          </aside>
        )}

        {p.moreQuotes && (
          <section aria-labelledby="flere-h">
            <h2 id="flere-h" className="kicker mb-6 text-accent">
              Flere tilbakemeldinger
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.moreQuotes.map((q) => (
                <QuoteCard key={q.name + q.text.slice(0, 10)} quote={q} />
              ))}
            </div>
          </section>
        )}

        <Link
          href={`/prosjekter/${next.slug}`}
          className="group flex flex-col gap-2 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <span>
            <span className="kicker text-muted">Neste prosjekt</span>
            <span className="mt-2 block text-[clamp(26px,3.4vw,44px)] tracking-[-0.03em] text-primary">
              {next.cardTitle}
            </span>
          </span>
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors group-hover:bg-accent">
            <Arrow className="group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>

      <ContactCta />
    </article>
  );
}
