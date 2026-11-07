import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Everything for Claude Code — Ochiq Manba va AI Dasturchilar Kutubxonasi",
  description:
    "Everything for Claude Code: Dasturchilar va coding agentlar uchun eng yaxshi ochiq manbali vositalar, ko'nikmalar va arxitektura yechimlari.",
  keywords: [
    "Everything for Claude Code",
    "Claude Code",
    "ECC",
    "Open Source",
    "AI Tools",
    "Developer Tools",
    "Antigravity",
    "OmniRoute",
    "Headroom",
    "Strix",
  ],
  authors: [{ name: "Abdullayev Temurmalik" }],
  openGraph: {
    title: "Everything for Claude Code — Open Source & AI Developer Library",
    description:
      "Dasturchilar va AI agentlar uchun eng yaxshi ochiq manbalar va vositalar katalogi.",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-[#090807] text-[#F7F4EF] antialiased selection:bg-[#A47550] selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
