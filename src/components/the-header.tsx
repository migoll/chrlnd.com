// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";

import Link from "next/link";
import { Section } from "./section";
import { toggleTheme } from "@/components/toggleTheme";

import { useState, useEffect } from "react";

// handleToggleTheme dark mode function inspireret af https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
export function TheHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Section contentClassName="p-8 font-medium">
      <nav className="flex justify-between items-center">
        <div className="link">
          <a href="/">
            <p className="text-xl hover:text-neutral-600">chrlnd.com</p>
          </a>
        </div>
        <div className="navbar flex space-x-8 items-center">
          <a href="/#workSection">
            <p className="text-xl hover:text-neutral-600">work</p>
          </a>
          <Link
            href="/#aboutSection"
            className="text-xl hover:text-neutral-600"
          >
            about me
          </Link>
          <span
            className="material-symbols-outlined cursor-pointer hover:text-neutral-600"
            onClick={handleToggleTheme}
          >
            {isDarkMode ? "light_mode" : "dark_mode"}
          </span>
        </div>
      </nav>
    </Section>
  );
}
