// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";

import Link from "next/link";
import { Section } from "./section";
import { useTheme } from "./theme";

// handleToggleTheme dark mode function inspireret af https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
export function TheHeader() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <Section contentClassName="p-8 font-medium">
      <nav className="flex justify-between items-center">
        <div className="link">
          <a href="/">
            <p className="text-xl hover:text-neutral-600">chrlnd.com</p>
          </a>
        </div>
        <div className="navbar flex flex-row space-x-8 items-center">
          <a href="/#workSection">
            <p className="text-xl hover:text-neutral-600">work</p>
          </a>
          <a href="/#aboutSection">
            <p className="text-xl hover:text-neutral-600">about me</p>
          </a>
          <span
            className="material-symbols-outlined cursor-pointer hover:text-neutral-600"
            onClick={handleToggleTheme}
          >
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </div>
      </nav>
    </Section>
  );
}
