import { clsx } from "clsx";
import { CoverCard } from "@/components/work-cover";
import { previewOf, type Project, type Tile } from "@/lib/work";

const label = "font-mono text-[14px] font-normal uppercase tracking-[0.05em]";

// The open view of a project. On a tall enough screen it's one page that never scrolls;
// scrolling only slides the next-project bar in and out (see WorkSheet)
export function WorkDetail({
  project,
  index,
  total,
  next,
  nextShown,
  onNext,
}: {
  project: Project;
  index: number;
  total: number;
  next: Project;
  nextShown: boolean;
  onNext: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  // The card showing the hover image is the one that flies in; every other card fades in
  const flies = (src: string) =>
    src === previewOf(project).src
      ? { "data-cover": "", style: { transformOrigin: "0 0" } }
      : { "data-reveal": "" };

  const facts: [string, React.ReactNode][] = [
    ["Year", project.year],
    ["Role", project.role],
    ["Stack", project.stack],
    [
      "Links",
      <span key="links" className="flex flex-wrap gap-x-5 gap-y-1">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="link">
            {link.label} ↗
          </a>
        ))}
      </span>,
    ],
  ];

  return (
    <>
      <div className="mx-auto grid max-w-[52rem] grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-12 px-6 pb-16 pt-24 tall:h-[100svh] tall:max-w-none tall:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] tall:px-[10vw] tall:pb-[calc(4.5rem+4vh)] tall:pt-[10vh] lg:gap-x-16">
        {/* On phones the columns dissolve, so the work sits right under the title */}
        <div className="contents tall:flex tall:flex-col tall:gap-9">
          <div data-reveal className="order-1 flex flex-col gap-4 tall:order-none">
            <span className={`${label} text-paper/40`}>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              <span className="mx-3 text-paper/20">·</span>
              {project.kind}
            </span>
            <h2
              id="work-title"
              className="text-[clamp(2.25rem,3vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.015em]"
            >
              {project.name}
            </h2>
            <span className="max-w-[38ch] text-[16px] leading-relaxed text-paper/60">
              {project.summary}
            </span>
          </div>

          <dl data-reveal className="order-3 grid grid-cols-[5rem_1fr] gap-x-6 gap-y-2.5 text-[15px] tall:order-none">
            {facts.map(([term, value]) => (
              <div key={term} className="contents">
                <dt className={`${label} pt-[2px] text-[13px] text-paper/40`}>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <ol data-reveal className="order-4 flex flex-col gap-3.5 border-t border-paper/10 pt-7 tall:order-none">
            {project.notes.map((note, i) => (
              <li
                key={note}
                className="grid grid-cols-[2.25rem_1fr] text-[15px] font-normal leading-relaxed text-paper/80"
              >
                <span className="font-mono text-[13px] leading-[1.9] text-paper/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Capped by height on tall screens: cover + tiles + captions come to about 1.125x the width */}
        <div className="order-2 flex w-full flex-col gap-4 tall:order-none tall:max-w-[calc((86svh-8rem)/1.125)] tall:justify-self-end">
          <CoverCard
            {...flies(project.cover.src)}
            src={project.cover.src}
            alt={project.cover.alt}
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="grid grid-cols-2 gap-4">
            {project.tiles.map((tile, i) => (
              <TileFigure key={i} tile={tile} card={tile.type === "image" ? flies(tile.src) : { "data-reveal": "" }} />
            ))}
          </div>
        </div>
      </div>

      <a
        href={`/work/${next.slug}`}
        onClick={onNext}
        tabIndex={nextShown ? undefined : -1}
        className={clsx(
          "group flex h-[4.5rem] items-center justify-between gap-6 border-t border-paper/10 bg-[#151515] px-6 tall:fixed tall:inset-x-0 tall:bottom-0 tall:z-10 tall:px-[10vw] tall:transition-transform tall:duration-500 tall:ease-[cubic-bezier(0.22,1,0.36,1)]",
          nextShown ? "tall:translate-y-0" : "tall:translate-y-full"
        )}
      >
        <span className="flex items-baseline gap-5">
          <span className={`${label} text-paper/40`}>Next</span>
          <span className="text-[16px] text-paper/90">{next.name}</span>
          <span className={`${label} hidden text-[13px] text-paper/30 sm:inline`}>{next.kind}</span>
        </span>
        <span className="text-paper/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-paper">
          →
        </span>
      </a>
    </>
  );
}

function TileFigure({ tile, card }: { tile: Tile; card: React.HTMLAttributes<HTMLDivElement> }) {
  return (
    <figure className="flex flex-col gap-2.5">
      {tile.type === "image" ? (
        <CoverCard {...card} src={tile.src} alt={tile.alt} sizes="(min-width: 1024px) 22vw, 50vw" />
      ) : (
        // Sized off the tile's own width, so the number always fits whatever the column does
        <CoverCard {...card} className="flex items-end p-[9%] [container-type:inline-size]">
          <span className="whitespace-nowrap text-[15.5cqw] font-medium leading-none tracking-[-0.02em] tabular-nums">
            {tile.value}
          </span>
        </CoverCard>
      )}
      <figcaption data-reveal className="text-[13px] leading-snug text-paper/50">
        {tile.type === "image" ? tile.caption : tile.label}
      </figcaption>
    </figure>
  );
}
