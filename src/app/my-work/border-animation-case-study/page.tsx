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
          <h1 className="font-bold text-7xl">Crypto transaction app</h1>
          <div className="flex justify-between w-[60%]">
            <div>
              <p className="font-semibold">Role</p>
              <p className="font-normal text-lg">OOUX design, front-end</p>
            </div>
          </div>
          <p>
            Mobile app design that provides an intuitive way for users to make
            cryptocurrency transactions
          </p>
        </div>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">My role</h2>
        <p>
          I had an extensive rol in this project, as there were a small team. my
          main focus the OOUX process, which involved working on objects based
          on our personas and developing the comprehensive object map.
        </p>
        <p>
          I also worked closely with user flows and ensured that both the design
          and technical solutions in the code reflected the OOUX results.
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
          supported the users journey on the platform.
        </p>
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
          accessible to users.
        </p>
        <p>
          This was solved through a meticulous design process and optimized user
          flows, which were mapped based on our object map.
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
      </Section>
    </>
  );
}
