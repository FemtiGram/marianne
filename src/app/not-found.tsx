import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="wrap py-28">
      <p className="kicker text-accent">404</p>
      <h1 className="display mt-4 text-[clamp(44px,7vw,100px)] text-primary">Denne siden finnes ikke</h1>
      <p className="mt-6 max-w-[30em] text-xl text-muted">Kanskje den har flyttet? Prøv forsiden eller prosjektene.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Til forsiden</ButtonLink>
        <ButtonLink href="/prosjekter" variant="ghost">
          Se prosjekter
        </ButtonLink>
      </div>
    </section>
  );
}
