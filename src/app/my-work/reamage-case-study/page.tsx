import { Section } from "@/components/section";
import Image from "next/image";

export default function CaseStudyReamage() {
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
            Reamage - Image compressor and formatter
          </h1>
          <div className="flex justify-between w-[90%] gap-8">
            <div>
              <p className="font-semibold">Client</p>
              <p className="font-normal text-lg">Personal project</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p className="font-normal text-lg">
                UX, design, Electron, frontend, performance
              </p>
            </div>
            <div>
              <p className="font-semibold">Link</p>
              <p className="font-normal text-lg text-neutral-500">
                Incoming...
              </p>
            </div>
          </div>
          <p>
            I was tired of random sketchy online compressors filled with ads and
            bad UX. So I built my own. <strong>Reamage</strong> is a local
            Electron app that uses <strong>Sharp</strong> and{" "}
            <strong>React</strong> to convert and compress images with full
            control and maximum speed.
          </p>
        </div>
        <Image
          src="/images/reamage-teaser.png"
          alt="Reamage full interface"
          className="w-full mt-12"
          width={1920}
          height={1080}
        />
      </Section>

      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">My role and process</h2>
        <p>
          I handled everything from idea and design to full technical setup. The
          app was built from scratch without templates to ensure complete
          control. I manually configured Electron, bundling via Vite, and
          handled platform-specific issues with native modules like{" "}
          <code>sharp</code>.
        </p>
        <p>
          The UI was designed in Figma and built using <strong>React</strong>,
          <strong> Tailwind</strong> and <strong>TypeScript</strong>, with a
          focus on
          <strong> performance and intuitive design</strong>.
        </p>
      </Section>

      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">Features and UX</h2>
        <p>
          The app supports drag-and-drop uploads, batch compression, output
          format and quality selection, and both individual or bulk downloading.
          I also implemented a select mode, to download only selected images.
        </p>

        <p>
          I also built a <strong>detailed stats view</strong> showing the size
          reduction in KB and percent—while preserving visual quality based on a
          user-defined compression level (10%–100%).
        </p>

        <Image
          src="/images/reamage-details.png"
          alt="Reamage details view"
          className="w-full"
          width={1920}
          height={1080}
        />
      </Section>

      <Section contentClassName="py-32 flex gap-6 flex-col">
        <h2 className="font-bold text-4xl">Technologies used</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <strong>Electron</strong>: Used to build and package the app as a
            .dmg/.exe file
          </li>
          <li>
            <strong>Sharp</strong>: High-performance image processing engine
          </li>
          <li>
            <strong>Next.js</strong>: App structure and routing
          </li>
          <li>
            <strong>React + Tailwind</strong>: Component-based structure and
            custom UI
          </li>
          <li>
            <strong>TypeScript</strong>: For safer logic and strong typing
          </li>
        </ul>
      </Section>

      <Section contentClassName="py-32 flex gap-6 flex-col">
        <h2 className="font-bold text-4xl">Challenges and solutions</h2>
        <p>
          Electron and Sharp can be hard to combine, especially for
          macOS/Windows builds. I fixed native module compatibility by
          configuring <code>electron-builder</code> and using{" "}
          <code>electron-rebuild</code> to ensure sharp loaded correctly.
        </p>
      </Section>

      <Section contentClassName="py-32 flex gap-6 flex-col">
        <h2 className="font-bold text-4xl">The result</h2>
        <p>
          Reamage is a fast, clean, and reliable desktop app for compressing and
          converting images locally—no uploads needed. It reflects my ability to
          design, build, and debug a full product from scratch, while also
          pushing me to learn new tools and solve fresh challenges.
        </p>
      </Section>
    </>
  );
}
