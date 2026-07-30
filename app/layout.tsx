import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
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
  return <html lang="es"><body>{children}</body></html>;
}
