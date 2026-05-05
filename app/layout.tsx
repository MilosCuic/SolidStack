import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SolidStack - Software Development Team | MVP & Product Development",
  description: "Professional software development team of 6 engineers and 2 project managers. We build MVPs, full products, and optimize existing systems. EU/US ready team.",
  keywords: ["software development", "MVP development", "full product development", "system optimization", "software engineering", "team augmentation", "outsourcing"],
  authors: [{ name: "SolidStack" }],
  creator: "SolidStack",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["sr_RS"],
    url: "https://solidstack.dev",
    siteName: "SolidStack",
    title: "SolidStack - Software Development Team",
    description: "Professional software development team specializing in MVP development, full product development, and system optimization.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SolidStack - Software Development Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolidStack - Software Development Team",
    description: "Professional software development team specializing in MVP development, full product development, and system optimization.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
