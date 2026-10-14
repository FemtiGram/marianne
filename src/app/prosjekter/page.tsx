import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ContactCta, PageHeader, ProjectCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Prosjekter",
  description: "Et utvalg prosjekter fra over ti år med produktutvikling, gründerskap og strategisk rådgivning.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Prosjekter"
        title="Slik jobber jeg"
        lead="Et utvalg prosjekter fra over ti år med produktutvikling, gründerskap og strategisk rådgivning. Hvert prosjekt viser utfordringen, hva jeg gjorde og hva det førte til."
      />
      <section className="wrap mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3" aria-label="Alle prosjekter">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i < 3} />
        ))}
      </section>
      <ContactCta />
    </>
  );
}
