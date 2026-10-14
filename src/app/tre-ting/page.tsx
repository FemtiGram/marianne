import type { Metadata } from "next";
import Image from "next/image";
import { answers, themes } from "@/content/tre-ting";
import { ContactCta, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tre ting jeg er god på",
  description: "Et sosialt eksperiment: 20 venner og kolleger svarte på hva de mener jeg er god på.",
};

export default function TreTingPage() {
  return (
    <>
      <PageHeader
        kicker="Et sosialt eksperiment"
        title="Tre ting jeg er god på – ifølge andre"
        lead="Jeg er nysgjerrig av natur, så på fritiden gjennomførte jeg et lite eksperiment. Jeg ba 20 venner og kolleger, og til og med samboerens eks-kone, om å nevne tre ting de mener jeg er god på. Svarene var overraskende like."
      />

      <section className="wrap mt-12" aria-labelledby="igjen-h">
        <h2 id="igjen-h" className="kicker mb-6 text-accent">
          Det som gikk igjen
        </h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {themes.map((t, i) => (
            <li key={t.title} className="hero-bg flex flex-col rounded-3xl p-8 text-white">
              <span className="text-6xl font-light text-highlight">{i + 1}</span>
              <h3 className="mt-6 text-[26px] leading-tight tracking-[-0.02em]">{t.title}</h3>
              <p className="mt-3 text-white/85">{t.body}</p>
              <p className="mt-auto pt-6 text-[15px] text-white/75">
                «{t.quote}» – {t.by}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap mt-20" aria-labelledby="svar-h">
        <div className="mb-8 grid items-end gap-8 md:grid-cols-[1fr_320px]">
          <h2 id="svar-h" className="text-[clamp(28px,3.4vw,40px)] tracking-[-0.02em] text-primary">
            Alle svarene
          </h2>
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl md:block">
            <Image src="/images/home/tre-ting.jpg" alt="" fill sizes="320px" className="object-cover" />
          </div>
        </div>
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {answers.map((a) => (
            <figure key={a.by} className="rounded-3xl bg-mist p-7">
              <ol className="space-y-2 text-[17px] text-primary">
                {a.items.map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span className="w-4 shrink-0 font-semibold text-accent">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <figcaption className="mt-5 text-[15px] text-muted">— {a.by}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
