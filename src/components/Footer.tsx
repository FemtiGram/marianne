import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="hero-bg mt-24 text-white">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-xs text-[15px] text-white/75">
            {site.roles.join(" · ")}. Menneskene først, så teknologien.
          </p>
        </div>
        <nav aria-label="Bunnmeny" className="flex flex-col">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit py-1.5 text-[15px] text-white/75 transition-colors hover:text-highlight focus-visible:outline-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col justify-between gap-4 text-[15px] text-white/75">
          <div className="flex flex-col">
            <a href={`mailto:${site.email}`} className="w-fit py-1.5 hover:text-highlight focus-visible:outline-white">
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-fit py-1.5 hover:text-highlight focus-visible:outline-white"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="text-sm text-white/60">© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
