import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const firstCoffee = localFont({
  src: "../public/fonts/FirstCoffee.otf",
});

export const metadata: Metadata = {
  title: "САЙТ",
  description: "Настюша Геймерша",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firstCoffee.className}>{children}</body>
    </html>
  );
}
