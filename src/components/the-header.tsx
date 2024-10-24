// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";

import Link from "next/link";
import { Section } from "./section";

export function TheHeader() {
  return (
    <Section contentClassName="p-8 font-medium">
      <nav className="flex justify-between items-center">
        <div className="link">
          <a href="/">
            <p className="text-xl">chrlnd.com</p>
          </a>
        </div>
        <div className="navbar flex space-x-8 items-center">
          <a href="/#workSection">
            <p className="text-xl">work</p>
          </a>
          <Link href="/#aboutSection" className="text-xl">
            about me
          </Link>
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={() => alert("Not implemented yet :)")}
          >
            light_mode
          </span>
        </div>
      </nav>
    </Section>
  );
}
