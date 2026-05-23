import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rayados FC - Sitio Oficial",
  description: "Sitio oficial del Club de Fútbol Rayados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
