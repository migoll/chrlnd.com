// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";

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
import Image from "next/image";

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
          <h1 className="font-bold text-4xl tracking-tight custom-sm:text-7xl">
            Creative front-end developer
          </h1>
          <p>
            I build clean, responsive websites focused on clarity and user
            experience.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <a href="mailto:chris.lund02@gmail.com">
            <button className="text-2xl font-medium border-2 border-black rounded-full py-2 px-5 hover:bg-neutral-900 hover:text-neutral-100">
              Reach out
            </button>
          </a>
          <a href="https://www.linkedin.com/in/christian-lund-2125322b8/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="size-9 hover:text-neutral-600"
            />
          </a>
          <a href="https://github.com/migoll">
            <FontAwesomeIcon
              icon={faGithub}
              className="size-9 hover:text-neutral-600"
            />
          </a>
        </div>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl" id="workSection">
          My work
        </h2>
        <div className="flex flex-col gap-8">
          <div>
            <a href="/my-work/animal-pension-case-study">
              <Image
                src="/images/case-study-1-image.png"
                alt="Case study image"
                className="aspect-square mx-auto"
                width={540}
                height={540}
              />
            </a>
            <h3 className="font-bold text-lg pt-2">
              Sejr og Davidsens Dyrepension - Realized website for animal
              pension
            </h3>
            <div className="flex gap-4 pb-16">
              <p className="text-sm text-neutral-500">OO-UX</p>
              <p className="text-sm text-neutral-500">Website</p>
            </div>
          </div>
          <div>
            <a href="/my-work/border-animation-case-study">
              <Image
                src="/images/case-study-two-image.png"
                alt="Case study image"
                className="aspect-square object-contain"
                width={640}
                height={640}
              />
            </a>
            <h3 className="font-bold text-lg pt-2">
              Jooser - Instant payment crypto app design
            </h3>
            <div className="flex gap-4 pb-16">
              <p className="text-sm text-neutral-500">Design</p>
              <p className="text-sm text-neutral-500">Application</p>
            </div>
          </div>
          <div>
            <a href="/my-work/guldborgsund-zoo-case-study">
              <Image
                src="/images/case-study-3-image.png"
                alt="Case study image"
                className="aspect-square w-full"
                width={640}
                height={640}
              />
            </a>
            <h3 className="font-bold text-lg pt-2">
              Guldborgsund Zoo og Have - Realized website for zoo
            </h3>
            <div className="flex gap-4 pb-16">
              <p className="text-sm text-neutral-500">Wordpress API</p>
              <p className="text-sm text-neutral-500">Website</p>
            </div>
          </div>
        </div>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl" id="aboutSection">
          About
        </h2>
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

      <BubbleSection index={0}>
        <div className="pb-6">
          <h2 className="text-xl font-bold">Web design</h2>
          <h3 className="text-neutral-500">Figma</h3>
        </div>
        <p className="text-lg text-center text-neutral-600 font-normal">
          I began designing in Figma because of my interests in the Web3 space,
          and interest in emoji/emote design on online streaming platforms.
        </p>
      </BubbleSection>
      <BubbleSection index={1}>
        <div className="pb-6">
          <h2 className="text-xl font-bold">Front-end development</h2>
          <h3 className="text-neutral-500">HTML, CSS, JS</h3>
        </div>
        <p className="text-lg text-center text-neutral-600 font-normal">
          I started studying Multimedia design, where I started with learning
          HTML, CSS, and then JS. Ended up using the framework Vue.
        </p>
      </BubbleSection>
      <BubbleSection index={2} contentClassName="mb-10">
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
