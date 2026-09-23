import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdikafar Omar | Software Engineer",
  description:
    "Duke computer science student building reliable backend systems, automation, and applied AI products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
