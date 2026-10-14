import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { verv } from "@/content/site";
import { Arrow, ContactCta } from "@/components/ui";

export function generateStaticParams() {
  return verv.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps<"/verv/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const v = verv.find((x) => x.slug === slug);
  return v ? { title: v.name, description: v.short } : {};
}

export default async function VervDetail({ params }: PageProps<"/verv/[slug]">) {
  const { slug } = await params;
  const index = verv.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const v = verv[index];
  const prev = verv[(index - 1 + verv.length) % verv.length];
  const next = verv[(index + 1) % verv.length];

  return (
    <article>
      <div className="wrap grid gap-12 pt-12 sm:pt-16 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div>
          <Link href="/verv" className="group inline-flex items-center gap-2 text-[15px] font-medium text-muted hover:text-primary">
            <Arrow className="rotate-180 group-hover:-translate-x-0.5" /> Alle verv
          </Link>
          <p className="kicker rise mt-10 text-accent">
            {v.kind} · {v.name}
          </p>
          <h1 className="display rise mt-4 text-[clamp(38px,5vw,72px)] text-primary" style={{ animationDelay: ".08s" }}>
            {v.title}
          </h1>
          <div className="rise mt-8 space-y-4 text-[18px] text-ink/90" style={{ animationDelay: ".16s" }}>
            {v.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          {v.quote && (
            <blockquote className="mt-10 border-l-4 border-highlight pl-6 text-[clamp(20px,2vw,24px)] leading-snug text-primary">
              «{v.quote}»
            </blockquote>
          )}
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-mist md:sticky md:top-24 md:mt-20">
          <Image src={v.image} alt="" fill priority sizes="(min-width: 768px) 550px, 100vw" className="object-cover" />
        </div>
      </div>

      <nav aria-label="Flere verv" className="wrap mt-20 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        <Link href={`/verv/${prev.slug}`} className="group">
          <span className="kicker text-muted">Forrige</span>
          <span className="mt-1 flex items-center gap-2 text-2xl tracking-tight text-primary">
            <Arrow className="rotate-180 group-hover:-translate-x-0.5" /> {prev.name}
          </span>
        </Link>
        <Link href={`/verv/${next.slug}`} className="group sm:text-right">
          <span className="kicker text-muted">Neste</span>
          <span className="mt-1 flex items-center gap-2 text-2xl tracking-tight text-primary sm:justify-end">
            {next.name} <Arrow className="group-hover:translate-x-0.5" />
          </span>
        </Link>
      </nav>
      <ContactCta />
    </article>
  );
}
