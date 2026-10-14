import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ta kontakt med Marianne Hebnes på e-post eller LinkedIn.",
};

export default function KontaktPage() {
  return (
    <section className="wrap grid items-center gap-12 pb-8 pt-16 sm:pt-24 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="kicker rise text-accent">Kontakt</p>
        <h1 className="display rise mt-4 text-[clamp(44px,7vw,100px)] text-primary" style={{ animationDelay: ".08s" }}>
          La oss snakke sammen
        </h1>
        <p className="rise mt-6 max-w-[30em] text-[clamp(18px,1.8vw,22px)] text-muted" style={{ animationDelay: ".16s" }}>
          Jeg sender gjerne en CV på forespørsel. Send meg en e-post eller ta kontakt på LinkedIn.
        </p>
        <dl className="rise mt-10 space-y-6" style={{ animationDelay: ".24s" }}>
          <div>
            <dt className="kicker text-muted">E-post</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-[clamp(20px,2.4vw,30px)] tracking-tight text-primary underline decoration-highlight decoration-2 underline-offset-[6px]"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="kicker text-muted">LinkedIn</dt>
            <dd className="mt-1">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[clamp(20px,2.4vw,30px)] tracking-tight text-primary underline decoration-highlight decoration-2 underline-offset-[6px]"
              >
                linkedin.com/in/mhebnes ↗
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-10">
          <ButtonLink href={`mailto:${site.email}`} external>
            Send e-post
          </ButtonLink>
        </div>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
        <Image
          src="/images/home/portrait-window.jpg"
          alt="Marianne Hebnes"
          fill
          priority
          sizes="(min-width: 768px) 500px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
