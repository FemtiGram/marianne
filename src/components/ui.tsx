import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/content/projects";
import type { Quote } from "@/content/testimonials";
import { site } from "@/content/site";

/** Sidetopp for undersider: liten kicker, stor lett tittel, ingress */
export function PageHeader({ kicker, title, lead }: { kicker: string; title: string; lead?: ReactNode }) {
  return (
    <header className="wrap pb-6 pt-16 sm:pt-24">
      <p className="kicker rise text-accent">{kicker}</p>
      <h1
        className="display rise mt-4 max-w-[14em] text-[clamp(40px,6.4vw,92px)] text-primary"
        style={{ animationDelay: ".08s" }}
      >
        {title}
      </h1>
      {lead && (
        <p className="rise mt-6 max-w-[34em] text-[clamp(18px,1.8vw,22px)] text-muted" style={{ animationDelay: ".16s" }}>
          {lead}
        </p>
      )}
    </header>
  );
}

export function SectionHeading({ title, aside, id }: { title: string; aside?: ReactNode; id?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h2 id={id} className="text-[clamp(28px,3.4vw,40px)] tracking-[-0.02em] text-primary">
        {title}
      </h2>
      {aside && <div className="text-base text-muted">{aside}</div>}
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={`h-4 w-4 fill-none stroke-current transition-transform duration-200 ${className}`}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light";
  external?: boolean;
}) {
  const styles = {
    solid: "bg-primary text-white hover:bg-accent",
    ghost: "border border-primary/25 text-primary hover:border-primary",
    light: "bg-white text-primary hover:bg-highlight",
  }[variant];
  const cls = `group inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium transition-colors ${styles}`;
  const inner = (
    <>
      {children}
      <Arrow className="group-hover:translate-x-0.5" />
    </>
  );
  return external ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/prosjekter/${project.slug}`}
      className="group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-mist transition-[transform,box-shadow] duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,36,26,0.16)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2.5 p-6 sm:p-7">
        <p className="kicker text-accent">{project.category}</p>
        <h3 className="text-[clamp(22px,2.2vw,26px)] leading-tight tracking-[-0.02em] text-primary">
          {project.cardTitle}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-3 text-[15px] text-muted">
          <span>{project.years}</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-primary">
            Les mer <Arrow className="group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function QuoteCard({ quote, large }: { quote: Quote; large?: boolean }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-mist p-7 sm:p-8">
      <span aria-hidden className="block h-1.5 w-10 rounded-full bg-highlight" />
      <blockquote
        className={`mt-5 flex-1 text-primary ${large ? "text-[clamp(20px,2vw,24px)] leading-snug" : "text-[17px]"}`}
      >
        «{quote.text}»
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3.5">
        {quote.logo && (
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-line">
            <Image src={quote.logo} alt="" fill sizes="44px" className="object-contain p-1.5" />
          </span>
        )}
        <span className="text-[15px] leading-snug">
          <span className="block font-semibold text-ink">{quote.name}</span>
          <span className="text-muted">{quote.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ContactCta() {
  return (
    <section className="wrap mt-24" aria-labelledby="kontakt-h">
      <div className="hero-bg relative overflow-hidden rounded-[2rem] px-7 py-14 text-white sm:px-14 sm:py-20">
        <h2 id="kontakt-h" className="display max-w-[12em] text-[clamp(36px,5vw,68px)]">
          Vil du vite mer?
        </h2>
        <p className="mt-5 max-w-[30em] text-[clamp(18px,1.8vw,21px)] text-white/85">
          Jeg sender gjerne en CV på forespørsel. Ta kontakt.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${site.email}`} variant="light" external>
            Send e-post
          </ButtonLink>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-white/40 px-5 py-2.5 font-medium transition-colors hover:border-white focus-visible:outline-white"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
