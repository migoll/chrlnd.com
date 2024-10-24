// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";
import { Section } from "./section";

export function TheFooter() {
  return (
    <Section contentClassName="p-8 font-medium">
      <nav className="flex justify-between items-center">
        <div className="link">
          <a href="/">
            <p className="text-xl">christian lund</p>
          </a>
        </div>
        <div className="navbar flex space-x-8 items-center">
          <a href="mailto:chris.lund02@gmail.com">
            <p className="text-xl">chris.lund02@gmail.com</p>
          </a>
          <p className="text-xl">+45 42415990</p>
        </div>
      </nav>
    </Section>
  );
}
