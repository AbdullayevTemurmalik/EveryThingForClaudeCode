import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEV-LIB — Ochiq Manba va AI Dasturchilar Kutubxonasi",
  description:
    "Eng yaxshi AI vositalari, ochiq manbalar, muhandislik skill'lari va GitHub loyihalari — barchasi bir joyda.",
  keywords: [
    "Open Source",
    "AI Tools",
    "Developer Tools",
    "Claude Code",
    "Antigravity",
    "OmniRoute",
    "Headroom",
    "Strix",
    "Dasturlash",
    "O'zbek dasturchilari",
  ],
  authors: [{ name: "Abdullayev Temurmalik" }],
  openGraph: {
    title: "DEV-LIB — Premium Open Source & AI Developer Library",
    description:
      "Dasturchilar uchun eng yaxshi ochiq manbalar, AI vositalari va foydali GitHub loyihalari katalogi.",
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
        {children}
      </body>
    </html>
  );
}
