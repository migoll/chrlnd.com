import Image from "next/image";
import { clsx } from "clsx";

// A project's framed 4:3 card. The hover preview and the open view both use it, and
// everything inside is in percentages, so one scales into the other exactly
export function CoverCard({
  src,
  alt,
  sizes,
  className,
  children,
  ...rest
}: {
  src?: string;
  alt?: string;
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "cover-card relative aspect-[4/3] overflow-hidden bg-[#161616] ring-1 ring-paper/[0.06]",
        className
      )}
      {...rest}
    >
      {src && (
        <span className="absolute inset-[7%] overflow-hidden rounded-[3px]">
          {/* Unoptimized so the preview and the open view share one cached file */}
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            unoptimized
            sizes={sizes}
            className="object-contain"
          />
        </span>
      )}
      {children}
    </div>
  );
}
