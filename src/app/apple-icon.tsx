import { ImageResponse } from "next/og";
import { GliderIcon } from "@/lib/glider";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Full bleed: iOS rounds the corners itself
export default function AppleIcon() {
  return new ImageResponse(<GliderIcon size={180} rounded={false} />, size);
}
