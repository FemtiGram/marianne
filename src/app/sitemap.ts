import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site, verv } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/prosjekter",
    "/verv",
    "/media",
    "/media/sparebank1",
    "/anbefalinger",
    "/nettverk",
    "/tre-ting",
    "/kontakt",
    ...projects.map((p) => `/prosjekter/${p.slug}`),
    ...verv.map((v) => `/verv/${v.slug}`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
