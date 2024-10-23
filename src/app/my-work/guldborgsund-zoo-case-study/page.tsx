import { Section } from "@/components/section";

export default function CaseStudyOne() {
  return (
    <>
      <Section contentClassName="flex gap-12 flex-col px-8 py-32">
        <a href="/">
          <button className="text-3xl font-bold bg-black text-white rounded-full w-[96px] h-[144px] hover:bg-neutral-800">
            ←
          </button>
        </a>
        <p className="font-medium text-neutral-500 text-xl">Case</p>
        <div className="flex gap-8 flex-col">
          <h1 className="font-bold text-7xl">Guldborgsund zoo</h1>
          <div className="flex justify-between w-[90%]">
            <div>
              <p className="font-semibold">Client</p>
              <p className="font-normal text-lg">Guldborgsund</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p className="font-normal text-lg">
                API, front-end, SEO, front-end
              </p>
            </div>
            <div>
              <p className="font-semibold">Link</p>
              <a href="https://mmd.ucn.dk/class/MMD-CSD-S23/10503158/Frontend/Sem2/Guldborgsund-Zoo_eksamensopgave_gruppe-5/index.html">
                <p className="underline decoration-none font-normal text-lg">
                  Go to website
                </p>
              </a>
            </div>
          </div>
          <p>
            En platform der forbinder dyreejere og eksperter med fokus på
            OOUX-processen for at sikre en brugercentreret oplevelse.
          </p>
        </div>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">My role</h2>
        <p>
          I was responsive for several aspects of the project, where i started
          out focusing on the integration of WordPress API to fetch content,
          build navigation and wayfinding.
        </p>
        <p>
          I also worked alot with the coding on HTML, CSS and JS, with focus on
          SEO optimization based on SEO-crawler results
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">User Research and Design Sprint</h2>
        <p>
          We did several qualitative interviews, built personas and empathy maps
          to understand the users needs, with focus on families with children
          and information seekers about animal welfare.
        </p>
        <p>
          In our designsprint, we developed and iterated on the homepage and
          other sections, tested prototypes with think-aloud tests and
          5-second-tests to optimize UX.
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">Technologies used</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <span className="font-bold">WordPress API</span> Used to fetch
            information about animals and display it on the page
          </li>
          <li>
            <span className="font-bold">JavaScript:</span>
            Implemented filtering and data fetching form the API.
          </li>
          <li>
            <span className="font-bold">SEO Optimization</span> Implemented
            structured metadata, headings, and image optimization based on our
            SEO-crawler analyses.
          </li>
        </ul>
      </Section>
      <Section contentClassName="py-32 flex gap-6 flex-col">
        <h2 className="font-bold text-4xl">Challenges and solutions</h2>
        <p>
          One of the biggest challenges was managing the large amount of visual
          clutter and confusing navigation on the old website. By using focused
          entry points and clear CTAs we ensured users were better guided
          through the site. In addition, our SEO crawler provided insights into
          problems that we resolved with proper metadata and image optimization.
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">The result</h2>
        <p>
          We delivered a responsive and user-friendly website with better
          structure, more clear navigation and better SEO-performance. Through
          testing, we improved the visual hierarchy, which resulted in a better
          experience for our users, that can now find information about animals,
          tickets and events in the zoo.
        </p>
      </Section>
    </>
  );
}
