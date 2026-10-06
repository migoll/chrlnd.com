import { PixelLife } from "@/components/pixel-life";
import { WorkList } from "@/components/work-list";
import { LocalTime } from "@/components/local-time";
import { WorkSheet } from "@/components/work-sheet";
import { EMAIL, LINKS } from "@/lib/site";

const label = "font-mono text-[14px] font-normal uppercase tracking-[0.05em]";

// The one page. `/` renders it as is, `/work/<slug>` renders it with that project open on top
export function Home() {
  return (
    <>
      {/* Top layer: one screen. It scrolls away to uncover the footer underneath */}
      <main data-page className="relative z-10 min-h-[100svh] flex flex-col bg-ink px-6 pt-[14vh] pb-12 md:px-[10vw] shadow-[0_1px_0_rgb(240_240_240/0.08)]">
        <h1 className="text-[clamp(2.75rem,5.5vw,6rem)] font-medium leading-[1.3] tracking-[-0.015em]">
          Christian Lund
          <br />
          <span className="text-paper/40">Software Engineer</span>
        </h1>
        <div
          data-life
          className="absolute right-[10vw] top-[calc(14vh+1.25rem)] hidden transition-opacity duration-300 xl:block"
        >
          <PixelLife />
        </div>

        <div className="mt-auto pt-24 grid gap-14 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-4">
            <span className={`${label} text-paper/50`}>
              Denmark, <LocalTime /> local time
            </span>
            <ul className="flex gap-6">
              {LINKS.map((link) => (
                <li key={link.href} className={label}>
                  <a
                    href={link.href}
                    className="link"
                    {...(link.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:max-w-[400px] md:justify-self-end">
            <WorkList />
          </div>
        </div>
      </main>

      {/* Bottom layer: pinned in place, revealed as the page above slides up */}
      <footer data-page className="sticky bottom-0 z-0 flex h-[70svh] flex-col justify-between px-6 pt-[12vh] pb-14 md:px-[10vw]">
        <div className="flex flex-col gap-6">
          <span className={`${label} text-paper/40`}>Say hello</span>
          <a
            href={`mailto:${EMAIL}`}
            className="link self-start text-[clamp(1.75rem,5.5vw,5rem)] font-medium leading-none tracking-[-0.015em]"
          >
            {EMAIL}
          </a>
        </div>

        <div className={`${label} grid gap-6 text-paper/40 md:grid-cols-2`}>
          <span>That line below is my life so far. Hover it.</span>
          <div className="flex gap-6 md:justify-self-end">
            <span>© {new Date().getFullYear()}</span>
            <a href="#" className="link text-paper">
              Back to top
            </a>
          </div>
        </div>
      </footer>

      <WorkSheet />
    </>
  );
}
