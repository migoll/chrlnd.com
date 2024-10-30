import { clsx } from "clsx";
import { ReactNode } from "react";

export interface BubbleSectionProps {
  children?: ReactNode;
  contentClassName?: string;
  containerClassName?: string;
  // this is to control the 1x line between the "bubbles"
  lineClassName?: string;
  index: number;
}

export function BubbleSection(props: BubbleSectionProps) {
  const {
    children,
    contentClassName,
    containerClassName,
    lineClassName,
    index,
  } = props;

  const years = ["2022", "2024", "Now"];

  return (
    <div
      className={clsx(
        "relative flex flex-col items-center w-full mx-auto",
        containerClassName
      )}
    >
      <div
        className={clsx(
          "w-[1px] h-28 bg-neutral-950 bg-opacity-10 dark:bg-white dark:bg-opacity-[12%]",
          lineClassName
        )}
      ></div>
      <p className="text-base">{years[index]}</p>
      <div
        className={clsx(
          "w-[1px] h-10 bg-neutral-950 bg-opacity-10 dark:bg-white dark:bg-opacity-[12%]",
          lineClassName
        )}
      ></div>
      <div
        className={clsx(
          "border rounded-full py-16 flex justify-center items-center flex-col text-center max-w-screen-sm w-full box-content px-8 dark:border-white dark:border-opacity-[12%]",
          contentClassName
        )}
      >
        {/* div container to make sure my BubbleSections have the same width as
        the other sections */}
        <div>{children}</div>
      </div>
    </div>
  );
}
