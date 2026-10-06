import type { Config } from "tailwindcss";
import { TALL } from "./src/lib/screens";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#f0f0f0",
      },
      fontFamily: {
        // Apple devices get Hiragino Sans for free, everyone else gets Geist
        sans: ['"Hiragino Sans"', "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      screens: {
        "custom-sm": "706px",
        tall: { raw: TALL },
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
  plugins: [],
};

export default config;
