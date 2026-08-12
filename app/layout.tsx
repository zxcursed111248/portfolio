import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "AI Web Studio — Создание сайтов для бизнеса",

  description:
    "Создаю современные сайты для бизнеса: лендинги, сайты компаний и интернет-магазины. Современный дизайн, быстрая разработка и AI-инструменты.",

  keywords: [
    "создание сайтов",
    "сайт для бизнеса",
    "разработка сайтов",
    "лендинг",
    "интернет-магазин",
    "AI Web Studio",
  ],

  openGraph: {
    title: "AI Web Studio — Создание сайтов для бизнеса",
    description:
      "Современные сайты для бизнеса — от лендингов до интернет-магазинов.",
    type: "website",
    locale: "ru_RU",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}