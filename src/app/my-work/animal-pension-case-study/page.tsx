import { Section } from "@/components/section";
import { BubbleSection } from "@/components/bubble-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faVuejs,
  faReact,
  faFigma,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function CaseStudyOne() {
  return (
    <>
      <Section contentClassName="flex gap-12 flex-col px-8 py-32">
        <div className="w-[96px] h-[144px] object-cover rounded-full overflow-hidden">
          <p>Case</p>
        </div>
        <div className="flex gap-8 flex-col">
          <h1 className="font-bold text-7xl">Creative front-end developer</h1>
          <p>
            I build clean, responsive websites focused on clarity and user
            experience.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <button className="text-2xl font-medium border-2 border-black rounded-full py-2 px-5">
            Reach out
          </button>
          <a href="https://www.linkedin.com/in/christian-lund-2125322b8/">
            <FontAwesomeIcon icon={faLinkedin} className="size-9" />
          </a>
          <a href="https://github.com/migoll">
            <FontAwesomeIcon icon={faGithub} className="size-9" />
          </a>
        </div>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">About</h2>
        <p>
          I’m Christian, a front-end developer with a good year of experience.
          My tools of choice are Figma, React, and Vue. I’m always refining my
          process and learning new things.
        </p>
      </Section>
    </>
  );
}
