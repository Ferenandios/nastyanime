import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
