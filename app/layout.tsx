import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GML Salud | Más cerca de tu bienestar",
  description: "Medicamentos, productos de bienestar y orientación farmacéutica cercana en Alhué y Pumanque.",
  icons: { icon: "/gml-logo.png" },
  openGraph: {
    title: "GML Salud | Cuidamos tu bienestar",
    description: "Salud y bienestar más cerca de ti.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "GML Salud — Cuidamos tu bienestar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GML Salud | Cuidamos tu bienestar",
    description: "Salud y bienestar más cerca de ti.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={geist.variable}>{children}</body></html>;
}
