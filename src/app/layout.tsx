import "./globals.css";
import { TheHeader } from "../components/TheHeader";

export const metadata = {
  title: "My Portfolio",
  description: "This is my portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader></TheHeader>
        {children}
      </body>
    </html>
  );
}
