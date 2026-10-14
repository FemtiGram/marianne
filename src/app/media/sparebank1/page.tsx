import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactCta } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kortfilm med SpareBank 1",
  description: "SpareBank 1 valgte historien om U-GO da de lanserte sin nye merkevare.",
};

export default function SpareBankPage() {
  return (
    <article>
      <header className="wrap pt-12 sm:pt-16">
        <Link href="/media" className="group inline-flex items-center gap-2 text-[15px] font-medium text-muted hover:text-primary">
          <Arrow className="rotate-180 group-hover:-translate-x-0.5" /> Media
        </Link>
        <p className="kicker rise mt-10 text-accent">Media · Kortfilm</p>
        <h1 className="display rise mt-4 max-w-[14em] text-[clamp(38px,5.6vw,80px)] text-primary">
          Alt starter i det små
        </h1>
        <p className="rise mt-6 max-w-[36em] text-[clamp(18px,1.8vw,22px)] text-muted">
          Da SR-Bank lanserte sin nye merkevare, ville de løfte fram lokale ildsjeler som skaper vekst gjennom handling.
          De valgte historien om U-GO, og laget en kortfilm om reisen fra idé til ferdig produkt.
        </p>
        <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          {[
            ["Periode", "2019"],
            ["Produsert av", "SpareBank 1 Sør-Norge"],
            ["Format", "Kortfilm"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="kicker text-muted">{k}</dt>
              <dd className="mt-1.5 text-[17px]">{v}</dd>
            </div>
          ))}
        </dl>
      </header>
      <div className="wrap mt-12 grid gap-4 sm:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mist">
            <Image src={`/images/media/sparebank1-${i}.jpg`} alt="" fill sizes="(min-width: 640px) 600px, 100vw" className="object-cover" />
          </div>
        ))}
      </div>
      <figure className="wrap mt-14">
        <div className="hero-bg rounded-[2rem] px-7 py-12 text-white sm:px-14 sm:py-16">
          <blockquote className="display max-w-[24em] text-[clamp(24px,3vw,38px)] !leading-[1.2] !tracking-[-0.02em]">
            «Marianne er et slikt menneske. Historien om U-GO er både imponerende, inspirerende og et godt bilde på hva
            driftighet egentlig handler om.»
          </blockquote>
          <figcaption className="mt-7 text-white/80">
            <span className="font-semibold text-white">Randi B. Øglænd</span> · Fagleder merkevare, SpareBank 1 Sør-Norge
          </figcaption>
        </div>
      </figure>
      <ContactCta />
    </article>
  );
}
