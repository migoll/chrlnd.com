import { ImageResponse } from "next/og";
import { GliderIcon } from "@/lib/glider";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<GliderIcon size={32} />, size);
}
