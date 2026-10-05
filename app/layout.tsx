import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_SC({
  variable: "--font-app-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Noto_Serif_SC({
  variable: "--font-app-serif",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-app-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Herstory Pop-up City Game Jam",
  description: "上传、发现并安全安装 Herstory Pop-up City 现场诞生的 AI Passport 玩法。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
