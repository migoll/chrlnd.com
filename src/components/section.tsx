// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";

// clsx sørger for at jeg kan have to forskellige class strings på samme element fx containerClassName og contentClassName
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface SectionProps {
  children?: ReactNode;
  contentClassName?: string;
  containerClassName?: string;
}

export function Section(props: SectionProps) {
  const { children, contentClassName, containerClassName } = props;

  return (
    <div
      className={clsx(
        "border-b border-neutral-950 last:border-b-0 border-opacity-10 dark:border-white dark:border-opacity-[12%]",
        containerClassName
      )}
    >
      <div
        className={clsx(
          " max-w-full mx-auto border-x border-neutral-950 border-opacity-10 box-content px-8 dark:border-white dark:border-opacity-[12%] custom-sm:max-w-screen-sm custom-sm:w-full",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
