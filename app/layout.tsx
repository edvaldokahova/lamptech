import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const title = "LampTech — A sua sala, agora um cinema | TV Box Android com instalação";
const description =
  "Transforme qualquer televisão numa Smart TV com imagem até 8K, comando por voz e instalação em casa. Encomende a sua TV Box LampTech.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  themeColor: "#07040F",
  keywords: ["TV Box", "TV Box Angola", "Smart TV", "Android TV", "LampTech", "instalação TV Box"],
  icons: { icon: "/favicon.png", apple: "/android-chrome-512x512.png" },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: "LampTech",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "LampTech — TV Box" }],
    locale: "pt_AO",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
