const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (stored === "dark" || (!stored && prefersDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch (_) {}
  })();
`;

import { TheHeader } from "@/components/the-header";
import { TheFooter } from "@/components/the-footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clsx } from "clsx";
import { Section } from "@/components/section";
import { ThemeProvider } from "@/components/theme";
import { VerticalLines } from "@/components/vertical-lines";
import { SectionIndexProvider } from "@/components/section-index";

// Tailwind (globals.css) import SKAL komme efter themeScript er defineret
import "./globals.css";

export const metadata = {
  title: "chrlnd.com",
  description: "Portfolio website by Christian Lund",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SectionIndexProvider>
          <VerticalLines />
          <Section contentClassName="h-8 hidden md:flex" />
          <ThemeProvider>
            <TheHeader />
            {children}
            <TheFooter />
          </ThemeProvider>
        </SectionIndexProvider>
      </body>
    </html>
  );
}
