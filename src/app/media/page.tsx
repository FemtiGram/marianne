import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { media } from "@/content/site";
import { ContactCta, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Media",
  description: "Et utvalg medieoppslag om arbeidet mitt som gründer, innovatør og problemløser.",
};

export default function MediaPage() {
  return (
    <>
      <PageHeader
        kicker="Media"
        title="Omtalt i media"
        lead="Et utvalg medieoppslag om arbeidet mitt som gründer, innovatør og problemløser."
      />
      <ul className="wrap mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => {
          const internal = item.href.startsWith("/");
          const content = (
            <>
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <p className="kicker text-accent">
                  {item.outlet} · {item.year}
                </p>
                <h2 className="text-[20px] leading-snug tracking-[-0.01em] text-primary">{item.title}</h2>
                <span className="mt-auto pt-3 text-[15px] font-medium text-primary">
                  {item.kind ? `Se ${item.kind.toLowerCase()}` : "Les artikkelen"} {internal ? "→" : "↗"}
                </span>
              </div>
            </>
          );
          const cls =
            "group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-mist transition-[transform,box-shadow] duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,36,26,0.16)]";
          return (
            <li key={item.href}>
              {internal ? (
                <Link href={item.href} className={cls}>
                  {content}
                </Link>
              ) : (
                <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <ContactCta />
    </>
  );
}
