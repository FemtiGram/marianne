"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Lukk menyen ved navigering (justeres under render, ikke i en effekt) og på Escape
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lås scroll mens menyen er åpen. overflow:hidden alene holder ikke på iOS Safari,
  // så body fryses med position:fixed og gjenopprettes ved lukking.
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const scrollY = window.scrollY;
    const lockedPath = window.location.pathname;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = "0";
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    return () => {
      Object.assign(body.style, prev);
      if (window.location.pathname === lockedPath) window.scrollTo(0, scrollY);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="wrap flex items-center justify-between gap-x-6 py-2">
          <Link href="/" className="group flex min-h-11 items-center gap-2.5 py-2">
            <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden>
              <span className="absolute inset-0 rounded-full border-2 border-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="h-2 w-2 rounded-full bg-highlight" />
            </span>
            <span className="text-[17px] font-semibold tracking-tight text-primary">{site.name}</span>
          </Link>

          <nav aria-label="Hovedmeny" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-3 text-[15px] font-medium transition-colors after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:origin-left after:rounded-full after:bg-highlight after:transition-transform after:duration-300 ${
                    active
                      ? "text-primary after:scale-x-100"
                      : "text-muted after:scale-x-0 hover:text-primary hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobil: to streker som brettes til en X */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobil-meny"
            aria-label={open ? "Lukk menyen" : "Åpne menyen"}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span aria-hidden className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-primary transition-all duration-200 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-primary transition-all duration-200 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Panelet ligger utenfor <header>: backdrop-filter der ville ellers fange fixed-elementet. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobil-meny"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 overflow-y-auto bg-paper lg:hidden"
            style={{ overscrollBehavior: "contain" }}
          >
            <nav aria-label="Mobilmeny" className="px-5 pb-10 pt-24">
              <ul>
                {[{ href: "/", label: "Hjem" }, ...nav].map((item, i) => {
                  const active = item.href === "/" ? pathname === "/" : isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 + i * 0.04, ease: "easeOut" }}
                      className="border-b border-line"
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`block py-4 text-3xl tracking-tight transition-colors ${
                          active ? "text-accent" : "text-primary hover:text-accent"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="kicker mt-8 text-muted"
              >
                {site.roles.join(" · ")}
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
