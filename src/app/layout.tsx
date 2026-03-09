import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plan B — Consultoría de Ingeniería de Operaciones",
  description:
    "Consultoría de ingeniería de operaciones para escalar, optimizar y profesionalizar tu operación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-[#0A0A0F] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
