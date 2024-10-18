import { Section } from "@/components/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faVuejs,
  faReact,
  faFigma,
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
          <a href="https://github.com/migoll">
            <img
              src="./icons/linkedin-brands-solid.svg"
              alt="linkedin icon"
              className="w-8 h-8"
            />
          </a>
          <a href="https://www.linkedin.com/in/christian-lund-2125322b8/">
            <img
              src="./icons/github-brands-solid.svg"
              alt="github icon"
              className="w-8 h-8"
            />
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
    </>
  );
}
