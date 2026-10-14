import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { verv } from "@/content/site";
import { Arrow, ContactCta, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Verv og engasjement",
  description: "Styreverv, mentorroller og frivillig engasjement ved siden av jobb.",
};

const kinds = ["Styreverv", "Rådgiver og mentor", "Folkevalgt", "Frivillig"] as const;

export default function VervPage() {
  return (
    <>
      <PageHeader
        kicker="Verv og engasjement"
        title="Roller jeg har hatt over tid – ved siden av jobb"
        lead="Siden 2017 har jeg hatt flere styreverv, gitt rådgivning til gründere og startups, og vært mentor for unge entreprenører."
      />
      <div className="wrap mt-8 space-y-16">
        {kinds.map((kind) => {
          const items = verv.filter((v) => v.kind === kind);
          if (!items.length) return null;
          return (
            <section key={kind} aria-labelledby={`k-${kind}`}>
              <h2 id={`k-${kind}`} className="kicker mb-6 text-accent">
                {kind}
              </h2>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((v) => (
                  <li key={v.slug}>
                    <Link
                      href={`/verv/${v.slug}`}
                      className="group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-mist transition-[transform,box-shadow] duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,36,26,0.16)]"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={v.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-col gap-2 p-6">
                        <h3 className="text-[22px] leading-tight tracking-[-0.02em] text-primary">{v.name}</h3>
                        <p className="text-[16px] text-muted">{v.short}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[15px] font-medium text-primary">
                          Les mer <Arrow className="group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <ContactCta />
    </>
  );
}
