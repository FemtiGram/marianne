import type { NextConfig } from "next";

// Gamle Squarespace-adresser → nye sider, så eksisterende lenker fortsetter å virke.
const legacy: [string, string][] = [
  ["/prosjekter-1", "/verv"],
  ["/showcases", "/prosjekter"],
  ["/showcaseventurebuilder", "/prosjekter/venturebuilder"],
  ["/showcaseequinor", "/prosjekter/equinor"],
  ["/showcaseugo", "/prosjekter/u-go"],
  ["/showcasesafeguardmedical", "/prosjekter/safeguard-medical"],
  ["/ridderrennet", "/prosjekter/ridderrennet"],
  ["/showcaserogalandfylkeskommune", "/prosjekter/teknologiturne"],
  ["/showcaseavinor", "/prosjekter/avinor"],
  ["/showcaseoiltech", "/prosjekter/oil-tech"],
  ["/showcasevizo", "/prosjekter/vizo"],
  ["/showcasebouvet", "/prosjekter/bouvet"],
  ["/showcasesmedkristiansen", "/prosjekter/smed-kristiansen"],
  ["/showcasepodbike", "/prosjekter/podbike"],
  ["/showcasenoroff", "/prosjekter/noroff"],
  ["/showcaselksystems", "/prosjekter/lk-systems"],
  ["/sr-bank-video", "/media/sparebank1"],
  ["/mysocialexperiment", "/tre-ting"],
  ["/mentor", "/verv"],
  ["/verv/onsyoung", "/verv/ons-young"],
  ["/verv/odatech", "/verv/oda-tech"],
  ["/verv/project-four-l3zw3-nms3k", "/verv/ungt-entreprenorskap"],
  ["/verv/rog-fk-gandvgs", "/verv/gand-vgs"],
  ["/verv/project-one-f5w4d-ycs3d", "/verv/randaberg-kommune"],
  ["/verv/project-three-sng7y-xwwp2", "/verv/livsgnistlopet"],
  ["/verv/ryfylke-friluftsrd", "/verv/ryfylke-friluftsrad"],
  ["/verv/skape-rog-fylkeskommune", "/verv/skape"],
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
