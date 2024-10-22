import { clsx } from "clsx";
import { ReactNode } from "react";

export interface BubbleSectionProps {
  children?: ReactNode;
  contentClassName?: string;
  containerClassName?: string;
  // this is to control the 1x line between the "bubbles"
  lineClassName?: string;
}

export function BubbleSection(props: BubbleSectionProps) {
  const { children, contentClassName, containerClassName, lineClassName } =
    props;

  return (
    <div
      className={clsx(
        "relative flex flex-col items-center w-full mx-auto",
        containerClassName
      )}
    >
      <div className={clsx("w-[1px] h-40 bg-gray-300", lineClassName)}></div>
      <div
        className={clsx(
          "border rounded-full py-16 flex justify-center items-center flex-col text-center gap-6 max-w-screen-sm w-full box-content px-8", // Change to box-content
          contentClassName
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
