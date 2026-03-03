import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stray | Boutique Software Agency",
  description:
    "Crafting high-performance digital masterpieces. Stray is a specialized software agency for premium digital experiences.",
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
