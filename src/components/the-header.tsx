import Link from "next/link";
import { Section } from "./section";

export function TheHeader() {
  return (
    <Section contentClassName="p-8 font-medium">
      <nav className="flex justify-between items-center">
        <div className="link">
          <p className="text-xl">chrlnd.com</p>
        </div>
        <div className="navbar flex space-x-8 items-center">
          <a href="">
            <p className="text-xl">work</p>
          </a>
          <Link href="/about" className="text-xl">
            about me
          </Link>
          <span className="material-symbols-outlined">light_mode</span>
        </div>
      </nav>
    </Section>
  );
}
