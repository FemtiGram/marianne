import type { Metadata } from "next";
import { testimonialGroups } from "@/content/testimonials";
import { ContactCta, PageHeader, QuoteCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Anbefalinger",
  description: "Tilbakemeldinger fra oppdragsgivere, kolleger, arrangører og studenter.",
};

export default function AnbefalingerPage() {
  return (
    <>
      <PageHeader
        kicker="Anbefalinger"
        title="Hva andre sier"
        lead="Tilbakemeldinger fra oppdragsgivere, kolleger, arrangører og studenter – samlet fra over ti år med prosjekter, kurs og mentorarbeid."
      />
      <div className="wrap mt-8 space-y-16">
        {testimonialGroups.map((group) => (
          <section key={group.title} aria-label={group.title}>
            <h2 className="kicker mb-6 text-accent">{group.title}</h2>
            <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
              {group.quotes.map((q) => (
                <QuoteCard key={q.name + q.text.slice(0, 12)} quote={q} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
