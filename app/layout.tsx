
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transport AI | Landing de captación",
  description:
    "Diseño web profesional, inteligencia artificial y automatización para empresas que quieren crecer y conseguir nuevas oportunidades comerciales.",
  applicationName: "Transport AI",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Transport AI | Convierte visitas en oportunidades",
    description:
      "Soluciones digitales, páginas web y automatización adaptadas a las necesidades de tu empresa.",
    type: "website",
    siteName: "Transport AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
