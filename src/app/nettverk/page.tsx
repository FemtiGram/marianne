import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { logoSrc, networkGroups } from "@/content/site";
import { Arrow, ContactCta, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nettverk",
  description: "Kunder, partnere og nettverk bygget gjennom ti år som selvstendig konsulent og gründer.",
};

const label = (name: string) =>
  name
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

export default function NettverkPage() {
  return (
    <>
      <PageHeader
        kicker="Samarbeid og nettverk"
        title="Mitt nettverk"
        lead="Kunder, partnere og nettverk jeg har skaffet og bygget relasjoner med selv, gjennom ti år – som selvstendig konsulent og gründer."
      />
      <div className="wrap mt-4">
        <Link
          href="/anbefalinger"
          className="group inline-flex items-center gap-2 font-medium text-primary underline decoration-highlight decoration-2 underline-offset-[6px]"
        >
          Les hva de sier i anbefalingene <Arrow className="group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="wrap mt-14 space-y-14">
        {networkGroups.map((group) => (
          <section key={group.title} aria-label={group.title}>
            <h2 className="kicker mb-6 text-accent">{group.title}</h2>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {group.logos.map((name) => (
                <li
                  key={name}
                  className="group relative flex aspect-[3/2] items-center justify-center rounded-2xl border border-line bg-white p-5"
                >
                  <Image
                    src={logoSrc(name)}
                    alt={label(name)}
                    fill
                    sizes="200px"
                    className="object-contain p-5 opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
