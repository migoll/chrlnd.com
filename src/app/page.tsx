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

export default function HomePage() {
  return (
    <>
      <Section contentClassName="flex gap-12 flex-col px-8 py-32">
        <div className="w-[96px] h-[144px] object-cover rounded-full overflow-hidden">
          <img
            src="/images/cropped-portrait-image.jpg"
            alt="Portrait of Christian Lund"
            className="rounded-full"
          />
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
        <p>Less noise, more signal. Focus on what works.</p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">My skills</h2>
        <div className="flex justify-between my-3">
          <FontAwesomeIcon icon={faHtml5} className="size-12" />
          <FontAwesomeIcon icon={faCss3} className="size-12" />
          <FontAwesomeIcon icon={faJsSquare} className="size-12" />
          <FontAwesomeIcon icon={faVuejs} className="size-12" />
          <FontAwesomeIcon icon={faReact} className="size-12" />
          <FontAwesomeIcon icon={faFigma} className="size-12" />
        </div>
      </Section>
      <BubbleSection>
        <div className="pb-6">
          <h2 className="text-xl font-bold">Web design</h2>
          <h3 className="text-neutral-500">Figma</h3>
        </div>
        <p className="text-lg text-center text-neutral-600 font-normal">
          I began designing in Figma because of my interests in the Web3 space,
          and interest in emoji/emote design on online streaming platforms.
        </p>
      </BubbleSection>
      <BubbleSection>
        <div className="pb-6">
          <h2 className="text-xl font-bold">Front-end development</h2>
          <h3 className="text-neutral-500">HTML, CSS, JS</h3>
        </div>
        <p className="text-lg text-center text-neutral-600 font-normal">
          I started studying Multimedia design, where I started with learning
          HTML, CSS, and then JS. Ended up using the framework Vue.
        </p>
      </BubbleSection>
      <BubbleSection>
        <div className="pb-6">
          <h2 className="text-xl font-bold">Frameworks</h2>
          <h3 className="text-neutral-500">Vue, React, TSX, Tailwind</h3>
        </div>
        <p className="text-lg text-center text-neutral-600 font-normal">
          I initially focused on Vue for school work, but I became interested in
          learning other tools like React and TypeScript. Tailwind CSS quickly
          became my go-to for efficiently styling modern interfaces.
        </p>
      </BubbleSection>
    </>
  );
}
