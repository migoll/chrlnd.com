export type Tile =
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "stat"; value: string; label: string };

export interface Project {
  slug: string;
  name: string;
  year: string;
  kind: string;
  summary: string;
  role: string;
  stack: string;
  links: { label: string; href: string }[];
  notes: string[];
  // All images are 4:3, so the hover preview and the open view scale into each other exactly
  cover: { src: string; alt: string };
  // What the list shows on hover, when it isn't the cover. Opening the project flies it
  // into whichever card in the open view shows the same image
  preview?: { src: string; alt: string };
  tiles: Tile[];
}

export const WORK: Project[] = [
  {
    slug: "homerunner",
    name: "Homerunner.com",
    year: "2026",
    kind: "Website",
    summary:
      "The company site, moved off Webflow to Next.js and a CMS the marketing team runs themselves.",
    role: "Sole engineer",
    stack: "Next.js, Payload CMS, Postgres",
    links: [{ label: "homerunner.com", href: "https://www.homerunner.com" }],
    notes: [
      "A faithful port first: same CSS, same markup, so visitors never noticed the switch.",
      "jQuery and webflow.js replaced by React versions of only the interactions in use.",
      "Pages, carriers and integrations live in Payload, in Danish and English.",
    ],
    cover: {
      src: "/work/homerunner-home.jpg",
      alt: "The homerunner.com front page: a globe drawn in particles around the Homerunner logo",
    },
    tiles: [
      { type: "stat", value: "390 / 393", label: "Commits on the rebuild" },
      {
        type: "image",
        src: "/work/homerunner-search.jpg",
        alt: "Site search listing pages for the query “pallet”",
        caption: "Site search, from seconds to milliseconds",
      },
    ],
  },
  {
    slug: "pulp",
    name: "Pulp",
    year: "2026",
    kind: "macOS + web",
    summary:
      "Drop an image in, get a smaller one out. A native Mac app, plus a version that runs in the browser.",
    role: "Design and engineering, solo",
    stack: "Rust, SwiftUI, Next.js",
    links: [
      { label: "GitHub", href: "https://github.com/migoll/pulp" },
      { label: "Web version", href: "https://pulp-web.vercel.app" },
    ],
    notes: [
      "Third version: Electron, then a web app, now native. A Rust core with SwiftUI on top.",
      "Decoded once and kept in memory, so every setting change only re-encodes. It feels live.",
      "Windows and Linux get a thin Tauri shell over the same Rust core.",
    ],
    cover: {
      src: "/work/pulp-web.jpg",
      alt: "The Pulp web app with ten photos compressed to JPEG at quality 55",
    },
    preview: { src: "/work/pulp-icon.png", alt: "Pulp's app icon: a bunch of purple glass grapes" },
    tiles: [
      { type: "stat", value: "8.6 MB", label: "The whole Mac app. The Electron version was 78 MB" },
      {
        type: "image",
        src: "/work/pulp-icon.png",
        alt: "Pulp's app icon: a bunch of purple glass grapes",
        caption: "The app icon",
      },
    ],
  },
];

export const getProject = (slug: string) => WORK.find((p) => p.slug === slug);

export const previewOf = (project: Project) => project.preview ?? project.cover;
