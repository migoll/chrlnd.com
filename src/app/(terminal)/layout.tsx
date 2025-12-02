import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clsx } from "clsx";
import "../globals.css";

export const metadata = {
  title: "Terminal Portfolio - chrlnd.com",
  description: "Terminal-style portfolio by Christian Lund",
};

export default function TerminalLayout({
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
      <body className="overflow-hidden bg-[#111111]">{children}</body>
    </html>
  );
}

