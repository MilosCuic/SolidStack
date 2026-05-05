import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SolidStack - Software Development Team | MVP & Product Development",
  description: "Pretvaramo tvoju ideju u funkcionalan digitalni proizvod. MVP, full product development i unapređenje postojećih sistema. 6 developera + 2 project managera.",
  keywords: ["software development", "MVP development", "full product development", "system optimization", "team augmentation"],
  authors: [{ name: "SolidStack" }],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    alternateLocale: ["en_US"],
    url: "https://solidstack.dev",
    siteName: "SolidStack",
    title: "SolidStack - Software Development Team",
    description: "Pretvaramo tvoju ideju u funkcionalan digitalni proizvod.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${inter.className} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
