import "./globals.css";
import { TheHeader } from "@/components/the-header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clsx } from "clsx";
import { Section } from "@/components/section";

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
    <html lang="en" className={clsx(GeistSans.variable, GeistMono.variable)}>
      <body>
        <Section contentClassName="h-8" />
        <TheHeader />
        {children}
      </body>
    </html>
  );
}
