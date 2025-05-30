import { Section } from "@/components/section";
import Image from "next/image";

export default function CaseStudyOne() {
  return (
    <>
      <Section contentClassName="flex gap-12 flex-col px-8 py-32">
        <a href="/">
          <button className="text-3xl font-bold bg-black text-white rounded-full w-[96px] h-[144px] hover:bg-white dark:border-3 hover:text-black">
            ←
          </button>
        </a>
        <p className="font-medium text-neutral-500 text-xl">Case</p>
        <div className="flex gap-8 flex-col">
          <h1 className="font-bold text-4xl tracking-tight custom-sm:text-7xl">
            Sejr og Davidsens Dyrepension
          </h1>
          <div className="flex gap-8 justify-between w-[80%]">
            <div>
              <p className="font-semibold">Client</p>
              <p className="font-normal text-lg">Sejr og davidsen</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p className="font-normal text-lg">OOUX design, front-end</p>
            </div>
            <div>
              <p className="font-semibold">Website</p>
              <a href="https://mmd.ucn.dk/class/MMD-CSD-S23/10503170/mmd3/Sejr-og-Davidsens-Dyrepension-og--internat-Gruppe-4/index.html">
                <p className="underline decoration-none font-normal text-lg">
                  Link
                </p>
              </a>
            </div>
          </div>
          <p>
            A platform that connects animal owners and experts with focus on the
            OOUX-process, to ensure a user focused experience.
          </p>
        </div>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">My role</h2>
        <p>
          I played a significant role in this project, as we were a small team.
          My main focus was the OOUX process, where I worked on objects based on
          our personas and developed an object map.
        </p>
        <p>
          Additionally, I collaborated on user flows and ensured that both the
          design and technical solutions in the code reflected the OOUX results.
        </p>
        <Image
          src="/images/case-study-1-image.png"
          alt="Case study image"
          className="mx-auto"
          width={540}
          height={540}
        />
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">User research and insights</h2>
        <p>
          The foundation for the project was based on a detailed project brief
          that provided comprehensive information and data about user needs and
          behaviors. This brief included pre-made personas representing various
          user groups, such as pet owners and adoption centers, which we used as
          the basis for our work.
        </p>
        <p>
          These personas helped us understand the users goals and challenges and
          guided our decisions throughout the project. This was the base
          research we had about the user, which lead us into the OOUX process,
          which focused on the relations between objects.
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">OOUX process</h2>
        <p>
          The project was based on OOUX (Object-Oriented UX), where we created
          an in-depth object structure based on our personas.
        </p>
        <p>
          We first developed the object map, where we categorized and
          prioritized objects like adoptable animals, training, and tips and
          tricks. From there, we worked on user flows and a CTA matrix, which
          supported the users journey on the platform. This lead to alot of the
          data for our content.
        </p>
        <Image
          src="/images/Sejr&D-CTA-matrix.png"
          alt="Case study image"
          className="mx-auto"
          width={640}
          height={540}
        />
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">OOUX tools</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <span className="font-bold">Object Map:</span> Developed to ensure
            the structure of the platforms key objects.
          </li>
          <li>
            <span className="font-bold">User Flows and CTA Matrix:</span>
            Sketched the most important actions users could take and how they
            navigated between objects.
          </li>
          <li>
            <span className="font-bold">Personas:</span> Used to define the
            needs and behavior patterns of different user groups.
          </li>
        </ul>
        <Image
          src="/images/ooux-model-image.png"
          alt="Case study image"
          className="mx-auto"
          width={440}
          height={360}
        />
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">User testing</h2>
        <p>
          Once the prototype was developed, usability testing was conducted with
          five users. Feedback from these tests helped identify challenges in
          navigation and content accessibility. Based on this input, adjustments
          were made to the navigation structure, and call-to-action elements
          were enhanced to make them more intuitive and user-friendly.
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">Content</h2>
        <p>
          The platform’s content was structured around the information provided
          in the brief and aligned with the personas’ needs. An object map was
          created to categorize and prioritize key elements like adoptable
          animals, training programs, and care tips. This structured approach
          ensured that all important content was easily accessible and relevant
          to the target audience.
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-6 flex-col">
        <h2 className="font-bold text-4xl">Technologies and solutions used</h2>
        <ul className="list-disc flex gap-2 max-w-[90%] mx-auto flex-col">
          <li>
            Personas: Used to define the needs and behavior patterns of
            different user groups.
          </li>
          <li>
            Object Map: Developed to ensure the structure of the platforms key
            objects.
          </li>
          <li>
            User Flows and CTA Matrix: Sketched the most important actions users
            could take and how they navigated between objects.
          </li>
        </ul>
        <p>
          One of the biggest challenges was ensuring that prioritized objects
          (adoptable animals, training, tips, etc.) were visible and easily
          accessible to our users.
        </p>
        <p>
          This was solved through a thorough design process and optimized user
          flows, which were mapped based on our object map.
        </p>
        <Image
          src="/images/Sejr&D-userflow.png"
          alt="Case study image"
          className="mx-auto"
          width={640}
          height={540}
        />
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">Design and final product</h2>
        <p>
          The design was crafted to support both the insights from the project
          brief and the requirements of the OOUX process, based on all of our
          prior research about dog owners and adopters. User flows and a CTA
          matrix were developed to guide users through the platform, ensuring
          they could complete their tasks effortlessly. The responsive design
          reflects a professional and trustworthy tone, using clean layouts and
          a focus on clarity.
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">The result</h2>
        <p>
          The final solution became a responsive platform where pet owners can
          find information on adoption, training, and care of animals. The
          platform makes it easy to find adoptable animals and includes articles
          with tips and tricks on pet care.
        </p>
        <p>
          Additionally, the results of our user flows are implemented which
          ensures users can quickly find the information they need.
        </p>
        <Image
          src="/images/S-og-D-mockup.png"
          alt="Case study image"
          className="mx-auto"
          width={640}
          height={360}
        />
      </Section>
    </>
  );
}
