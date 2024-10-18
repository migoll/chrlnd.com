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
        " border-b border-neutral-950 last:border-b-0 border-opacity-10",
        containerClassName
      )}
    >
      <div
        className={clsx(
          "w-full max-w-screen-sm mx-auto border-x border-neutral-950 border-opacity-10 box-content px-8",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
