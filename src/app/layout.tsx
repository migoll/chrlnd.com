import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clsx } from "clsx";
import { LifeBar } from "@/components/life-bar";
import { LiveFavicon } from "@/components/live-favicon";

import "./globals.css";

export const metadata = {
  title: "Christian Lund",
  description: "Christian Lund, software engineer.",
};

export const viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Dark only: the class stays on so older pages' dark: styles still apply
    <html lang="en" className={clsx("dark", GeistSans.variable, GeistMono.variable)}>
      <body>
        {children}
        <LifeBar />
        <LiveFavicon />
      </body>
    </html>
  );
}
