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
import { useState, useEffect } from "react";
import { CaseStudyWrapper } from "@/components/case-study-wrapper";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [age, setAge] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const LIFE_EXPECTANCY = 80.4;
  const BIRTH_DATE = new Date("2002-06-14");

  useEffect(() => {
    let animationFrameId: number;

    const updateAge = () => {
      const now = new Date();
      const diffTime = now.getTime() - BIRTH_DATE.getTime();
      const ageInYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
      const calculatedPercentage = (ageInYears / LIFE_EXPECTANCY) * 100;
      
      setAge(ageInYears);
      setPercentage(calculatedPercentage);
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(updateAge);
    };

    // Calculate immediately
    const now = new Date();
    const diffTime = now.getTime() - BIRTH_DATE.getTime();
    const ageInYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    const calculatedPercentage = (ageInYears / LIFE_EXPECTANCY) * 100;
    setAge(ageInYears);
    setPercentage(calculatedPercentage);

    // Start smooth animation loop
    animationFrameId = requestAnimationFrame(updateAge);

    // Trigger bar animation after a brief delay
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <Section contentClassName="flex gap-12 flex-col px-8 py-32">
        <div className="w-[96px] h-[144px] object-cover rounded-full overflow-hidden">
          <Image
            src="/images/cropped-portrait-image.jpg"
            alt="Portrait of Christian Lund"
            width={96}
            height={144}
            className="rounded-full object-cover"
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
            <button className="text-2xl font-medium border-3 border-black rounded-full py-3 px-5 hover:bg-white hover:text-black dark:border-white">
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
        <h2 className="font-bold text-4xl pb-4" id="workSection">
          My work
        </h2>
        <div className="flex flex-col gap-24">
          <CaseStudyWrapper
            index={0}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div>
              <a href="/my-work/reamage-case-study">
                <h3 className="font-bold text-lg pt-2">
                  Reamage - Image compressor and formatter
                </h3>
                <div className="flex gap-4 pb-8">
                  <p className="text-sm text-neutral-500">React + Electron</p>
                  <p className="text-sm text-neutral-500">App</p>
                </div>

                <Image
                  src="/images/reamage-teaser.png"
                  alt="Case study image"
                  className="mx-auto mb-8"
                  width={640}
                  height={0}
                />
              </a>
            </div>
          </CaseStudyWrapper>

          <CaseStudyWrapper
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div>
              <a href="/my-work/border-animation-case-study">
                <h3 className="font-bold text-lg pt-2">
                  Jooser - Instant payment crypto app design
                </h3>
                <div className="flex gap-4 pb-16">
                  <p className="text-sm text-neutral-500">Design</p>
                  <p className="text-sm text-neutral-500">Application</p>
                </div>
                <Image
                  src="/images/case-study-two-image.png"
                  alt="Case study image"
                  className="aspect-square object-contain mb-8"
                  width={640}
                  height={640}
                />
              </a>
            </div>
          </CaseStudyWrapper>

          <CaseStudyWrapper
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div>
              <a href="/my-work/animal-pension-case-study">
                <h3 className="font-bold text-lg pt-2">
                  Sejr og Davidsens Dyrepension - Realized website for animal
                  pension
                </h3>
                <div className="flex gap-4 pb-8">
                  <p className="text-sm text-neutral-500">OO-UX</p>
                  <p className="text-sm text-neutral-500">Website</p>
                </div>

                <Image
                  src="/images/case-study-1-image.png"
                  alt="Case study image"
                  className="aspect-square mx-auto mb-8"
                  width={540}
                  height={540}
                />
              </a>
            </div>
          </CaseStudyWrapper>
        </div>
      </Section>

      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl" id="aboutSection">
          About
        </h2>
        <p>
          I’m Christian, a front-end developer and UI designer from Denmark with
          a passion for problem-solving and everything tech and AI. I thrive on
          continuous learning and aim to be at least 1% better every day.
        </p>
        <p>
          I enjoy diving into everything new, whether it’s discovering the
          latest trends or trying a new type of wine or food. When I’m not
          working, you’ll find me gaming or looking at crypto graphs.
        </p>
        <p className="pt-6">
          My approach: Less noise, more signal. Focus on what works.
        </p>
      </Section>

      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">My skills</h2>
        <div className="grid grid-cols-3 custom-sm:grid-cols-6 gap-3 my-3">
          <FontAwesomeIcon icon={faHtml5} className="size-12 mx-auto" />
          <FontAwesomeIcon icon={faCss3} className="size-12 mx-auto" />
          <FontAwesomeIcon icon={faJsSquare} className="size-12 mx-auto" />
          <FontAwesomeIcon icon={faVuejs} className="size-12 mx-auto" />
          <FontAwesomeIcon icon={faReact} className="size-12 mx-auto" />
          <FontAwesomeIcon icon={faFigma} className="size-12 mx-auto" />
        </div>
      </Section>

      <Section>
        <BubbleSection index={0}>
          <div className="pb-6">
            <h2 className="text-xl font-bold">Web design</h2>
            <h3 className="text-neutral-500">Figma</h3>
          </div>
          <p className="text-lg text-center text-neutral-600 dark:text-neutral-300 font-normal">
            I began designing in Figma because of my interests in the Web3
            space, and interest in emoji/emote design on online streaming
            platforms.
          </p>
        </BubbleSection>

        <BubbleSection index={1}>
          <div className="pb-6">
            <h2 className="text-xl font-bold">Front-end development</h2>
            <h3 className="text-neutral-500">HTML, CSS, JS</h3>
          </div>
          <p className="text-lg text-center text-neutral-600 dark:text-neutral-300 font-normal">
            I started studying Multimedia design, where I started with learning
            HTML, CSS, and then JS. Ended up using the framework Vue.
          </p>
        </BubbleSection>

        <BubbleSection index={2} contentClassName="mb-10">
          <div className="pb-6">
            <h2 className="text-xl font-bold">Frameworks</h2>
            <h3 className="text-neutral-500">Vue, React, TSX, Tailwind</h3>
          </div>
          <p className="text-lg text-center text-neutral-600 dark:text-neutral-300 font-normal">
            I initially focused on Vue for school work, but I became interested
            in learning other tools like React and TypeScript. Tailwind CSS
            quickly became my go-to for efficiently styling modern interfaces.
          </p>
        </BubbleSection>
      </Section>

      {/* Life Progress Bar */}
      <div className="fixed bottom-0 left-0 w-screen z-50">
        {/* Progress bar container */}
        <div className="relative w-full h-1 bg-white/5 dark:bg-white/5">
          {/* Progress fill */}
          <div
            className="absolute bottom-0 left-0 h-full bg-white/70 dark:bg-white/70 transition-all duration-1000 ease-out"
            style={{
              width: isAnimated ? `${Math.min(percentage, 100)}%` : "0%",
            }}
          />
        </div>
        
        {/* Hover area for tooltip */}
        <div
          className="absolute bottom-0 h-4 cursor-pointer"
          style={{
            left: 0,
            width: isAnimated ? `${Math.min(percentage, 100)}%` : "0%",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Percentage display above the progress point - only on hover */}
          {isHovering && (
            <div
              className="absolute bottom-full mb-8 pointer-events-none"
              style={{
                left: "100%",
                transform: "translateX(-50%)",
              }}
            >
              <span 
                className="text-xs text-white/70 dark:text-white/70 whitespace-nowrap transition-all duration-75 ease-linear"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {percentage.toFixed(2)}%
              </span>
            </div>
          )}
          
          {/* Hover tooltip positioned at the end of progress */}
          {isHovering && (
              <div
              className="absolute bottom-full mb-2 px-2 py-1 bg-white/90 dark:bg-black/90 text-black dark:text-white text-xs rounded pointer-events-none whitespace-nowrap transition-all duration-75 ease-linear"
              style={{
                left: "100%",
                transform: "translateX(-50%)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {age.toFixed(10)} years
            </div>
          )}
        </div>
      </div>
    </>
  );
}
